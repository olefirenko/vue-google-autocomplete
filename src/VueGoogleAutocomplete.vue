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
          }
        },

        data: function () {
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

          this.autocomplete.addListener('place_changed', () => {

                let place = this.autocomplete.getPlace();

                if (!place.geometry) {
                  // User entered the name of a Place that was not suggested and
                  // pressed the Enter key, or the Place Details request failed.
                  this.$emit('no-results-found', place, this.id);
                  return;
                }

                let returnData = {};

                if (place.address_components !== undefined) {
                    // Get each component of the address from the place details
                    for (let i = 0; i < place.address_components.length; i++) {
                      let addressType = place.address_components[i].types[0];

                      if (ADDRESS_COMPONENTS[addressType]) {
                        let val = place.address_components[i][ADDRESS_COMPONENTS[addressType]];
                            returnData[addressType] = val;
                      }
                    }

                    returnData['latitude'] = place.geometry.location.lat();
                    returnData['longitude'] = place.geometry.location.lng();

                    // return returnData object and PlaceResult object
                    this.$emit('placechanged', returnData, place, this.id);

                    // update autocompleteText then emit change event
                    this.autocompleteText = document.getElementById(this.id).value
                    this.onChange()
                }
           });
        },

        methods: {
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
             * Update location based on navigator geolocation
             * @param  {String} value
             */
            geolocate () {
                updateGeolocation ((geolocation, position) => {
                    if (!this.geolocation.geocoder) this.geolocation.geocoder = new google.maps.Geocoder;
                    let input = Object.assign({'location': geolocation}, this.options)
                    geocoder.geocode(input, function(results, status) {
                        if (status === 'OK') {
                            if (results[1]) {
                                this.autocompleteText = results[1].formatted_address;
                            }
                        }
                    })
                })
            },

            /**
             * Update internal location from navigator geolocation
             * @param  {String} value
             */
            updateGeolocation (callback = null) {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(position => {
                        let geolocation = {
                            lat: position.coords.latitude,
                            lng: position.coords.longitude
                        };
                        this.geolocation.loc = geolocation;
                        this.geolocation.position = position;

                        if (callback) callback(geolocation, position);
                    });
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
            }
        }
    }
</script>
