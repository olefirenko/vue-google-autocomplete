<template>
    <input
        ref="autocomplete"
        type="text"
        :class="classname"
        :id="id"
        :placeholder="placeholder"
        v-model="autocompleteText"
        @focus="onFocus()"
        @blur="onBlur()"
        @change="onChange"
        @keypress="onKeyPress"
        @keyup="onKeyUp"
    />
</template>

<script>
    const ADDRESS_COMPONENTS = {
        street_number: 'short_name',
        route: 'long_name',
        locality: 'long_name',
        administrative_area_level_1: 'short_name',
        administrative_area_level_2: 'county',
        country: 'long_name',
        postal_code: 'short_name'
    };

    const CITIES_TYPE = ['locality', 'administrative_area_level_3'];
    const REGIONS_TYPE = ['locality', 'sublocality', 'postal_code', 'country',
        'administrative_area_level_1', 'administrative_area_level_2'];

    export default {
        name: 'VueGoogleAutocomplete',

        props: {
          id: {
            type: String,
            required: true
          },

          classname: String,

          placeholder: {
            type: String,
            default: 'Start typing'
          },

          types: {
            type: String,
            default: 'address'
          },

          country: {
            type: [String, Array],
            default: null
          },

          enableGeolocation: {
            type: Boolean,
            default: false
          },

          geolocationOptions: {
            type: Object,
            default: null
          }
        },

        data() {
            return {
                /**
                 * The Autocomplete object.
                 *
                 * @type {Autocomplete}
                 * @link https://developers.google.com/maps/documentation/javascript/reference#Autocomplete
                 */
                autocomplete: null,

                /**
                 * Autocomplete input text
                 * @type {String}
                 */
                autocompleteText: '',

                geolocation: {
                    /**
                     * Google Geocoder Objet
                     * @type {Geocoder}
                     * @link https://developers.google.com/maps/documentation/javascript/reference#Geocoder
                     */
                    geocoder: null,

                    /**
                     * Filled after geolocate result
                     * @type {Coordinates}
                     * @link https://developer.mozilla.org/en-US/docs/Web/API/Coordinates
                     */
                    loc: null,

                    /**
                     * Filled after geolocate result
                     * @type {Position}
                     * @link https://developer.mozilla.org/en-US/docs/Web/API/Position
                     */
                    position: null
                }
            }
        },

        watch: {
            autocompleteText: function (newVal, oldVal) {
	            this.$emit('inputChange', { newVal, oldVal }, this.id);
            },
            country: function(newVal, oldVal) {
              this.autocomplete.setComponentRestrictions({
                country: this.country === null ? [] : this.country
              });
            }
        },

        mounted: function() {
          const options = {};

          if (this.types) {
            options.types = [this.types];
          }

          if (this.country) {
            options.componentRestrictions = {
              country: this.country
            };
          }

          this.autocomplete = new google.maps.places.Autocomplete(
                document.getElementById(this.id),
                options
            );

          this.autocomplete.addListener('place_changed', this.onPlaceChanged);
        },

        methods: {
            /**
             * When a place changed
             */
            onPlaceChanged() {
                let place = this.autocomplete.getPlace();

                if (!place.geometry) {
                  // User entered the name of a Place that was not suggested and
                  // pressed the Enter key, or the Place Details request failed.
                  this.$emit('no-results-found', place, this.id);
                  return;
                }

                if (place.address_components !== undefined) {
                    // return returnData object and PlaceResult object
                    this.$emit('placechanged', this.formatResult(place), place, this.id);

                    // update autocompleteText then emit change event
                    this.autocompleteText = document.getElementById(this.id).value
                    this.onChange()
                }
            },

            /**
             * When the input gets focus
             */
            onFocus() {
              this.biasAutocompleteLocation();
              this.$emit('focus');
            },

            /**
             * When the input loses focus
             */
            onBlur() {
              this.$emit('blur');
            },

            /**
             * When the input got changed
             */
            onChange() {
              this.$emit('change', this.autocompleteText);
            },

            /**
             * When a key gets pressed
             * @param  {Event} event A keypress event
             */
            onKeyPress(event) {
              this.$emit('keypress', event);
            },

            /**
             * When a keyup occurs
             * @param  {Event} event A keyup event
             */
            onKeyUp(event) {
              this.$emit('keyup', event);
            },

            /**
             * Clear the input
             */
            clear() {
              this.autocompleteText = ''
            },

            /**
             * Focus the input
             */
            focus() {
              this.$refs.autocomplete.focus()
            },

            /**
             * Blur the input
             */
            blur() {
              this.$refs.autocomplete.blur()
            },

            /**
             * Update the value of the input
             * @param  {String} value
             */
            update (value) {
              this.autocompleteText = value
            },

            /**
             * Update the coordinates of the input
             * @param  {Coordinates} value
             */
            updateCoordinates (value) {
                if (!value && !(value.lat || value.lng)) return;
                if (!this.geolocation.geocoder) this.geolocation.geocoder = new google.maps.Geocoder();
                this.geolocation.geocoder.geocode({'location': value}, (results, status) => {
                    if (status === 'OK') {
                        results = this.filterGeocodeResultTypes(results);
                        if (results[0]) {
                            this.$emit('placechanged', this.formatResult(results[0]), results[0], this.id);
                            this.update(results[0].formatted_address);
                        } else {
                            this.$emit('error', 'no result for provided coordinates');
                        }
                    } else {
                        this.$emit('error', 'error getting address from coords');
                    }
                })
            },

            /**
             * Update location based on navigator geolocation
             */
            geolocate () {
                this.updateGeolocation ((geolocation, position) => {
                    this.updateCoordinates(geolocation)
                })
            },

            /**
             * Update internal location from navigator geolocation
             * @param  {Function} (geolocation, position)
             */
            updateGeolocation (callback = null) {
                if (navigator.geolocation) {
                    let options = {};
                    if(this.geolocationOptions) Object.assign(options, this.geolocationOptions);
                    navigator.geolocation.getCurrentPosition(position => {
                        let geolocation = {
                            lat: position.coords.latitude,
                            lng: position.coords.longitude
                        };
                        this.geolocation.loc = geolocation;
                        this.geolocation.position = position;

                        if (callback) callback(geolocation, position);
                    }, err => {
                        this.$emit('error', 'Cannot get Coordinates from navigator', err);
                    }, options);
                }
            },


            // Bias the autocomplete object to the user's geographical location,
            // as supplied by the browser's 'navigator.geolocation' object.
            biasAutocompleteLocation () {
                if (this.enableGeolocation) {
                    this.updateGeolocation((geolocation, position) => {
                        let circle = new google.maps.Circle({
                            center: geolocation,
                            radius: position.coords.accuracy
                        });
                        this.autocomplete.setBounds(circle.getBounds());
                    })
                }
            },

            /**
             * Format result from Geo google APIs
             * @param place
             * @returns {{formatted output}}
             */
            formatResult (place) {
                let returnData = {};
                for (let i = 0; i < place.address_components.length; i++) {
                    let addressType = place.address_components[i].types[0];

                    if (ADDRESS_COMPONENTS[addressType]) {
                        let val = place.address_components[i][ADDRESS_COMPONENTS[addressType]];
                        returnData[addressType] = val;
                    }
                }

                returnData['latitude'] = place.geometry.location.lat();
                returnData['longitude'] = place.geometry.location.lng();
                return returnData
            },

            /**
             * Extract configured types out of raw result as
             * Geocode API does not allow to do it
             * @param results
             * @returns {GeocoderResult}
             * @link https://developers.google.com/maps/documentation/javascript/reference#GeocoderResult
             */
            filterGeocodeResultTypes (results) {
                if (!results || !this.types) return results;
                let output = [];
                let types = [this.types];
                if (types.includes('(cities)')) types = types.concat(CITIES_TYPE);
                if (types.includes('(regions)')) types = types.concat(REGIONS_TYPE);

                for (let r of results) {
                    for (let t of r.types) {
                        if (types.includes(t)) {
                            output.push(r);
                            break;
                        }
                    }
                }
                return output;
            }
        }
    }
</script>
