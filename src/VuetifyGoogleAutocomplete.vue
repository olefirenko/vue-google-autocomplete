<template>
    <v-text-field
      :append-icon="appendIcon"
      :auto-grow="autoGrow"
      :autofocus="autofocus"
      :box="box"
      :clearable="clearable"
      :color="color"
      :counter="counter"
      :class="classname"
      :dark="dark"
      :disabled="disabled"
      :dont-fill-mask-blanks="dontFillMaskBlanks"
      :error="error"
      :error-messages="errorMessages"
      :full-width="fullWidth"
      :hide-details="hideDetails"
      :hint="hint"
      :id="id"
      :label="label"
      :light="light"
      :loading="loading"
      :mask="mask"
      :multi-line="multiLine"
      :name="id"
      :persistent-hint="persistentHint"
      :placeholder="placeholder"
      :prefix="prefix"
      :prepend-icon="prependIcon"
      :readonly="readonly"
      :required="required"
      :return-masked-value="returnMaskedValue"
      :rows="rows"
      :rules="rules"
      ref="autocomplete"
      :single-line="singleLine"
      :solo="solo"
      :suffix="suffix"
      :tabindex="tabindex"
      :textarea="textarea"
      :toggle-keys="toggleKeys"
      type="text"
      :validate-on-blur="validateOnBlur"
      v-model="autocompleteText"
      @focus="onFocus()"
      @blur="onBlur()"
      @change="onChange"
      @keypress="onKeyPress"
    /></v-text-field>
</template>

<script>
    export default {
        name: 'VuetifyGoogleAutocomplete',

        props: {
          appendIcon: {
            type: String,
            default: null,
          },

          autoGrow: {
            type: Boolean,
            default: false,
          },

          autofocus: {
            type: Boolean,
            default: false,
          },

          box: {
            type: Boolean,
            default: false,
          },

          clearable: {
            type: Boolean,
            default: false,
          },

          color: {
            type: String,
            default: 'primary',
          },

          counter: {
            type: [Boolean, Number],
            default: false,
          },

          country: {
            type: [String, Array],
            default: null,
          },

          classname: {
            type: String,
            default: '',
          },

          dark: {
            type: Boolean,
            default: false,
          },

          disabled: {
            type: Boolean,
            default: false,
          },

          dontFillMaskBlanks: {
            type: Boolean,
            default: false,
          },

          enableGeolocation: {
            type: Boolean,
            default: false,
          },

          error: {
            type: Boolean,
            default: false,
          },

          errorMessages: {
            type: Array,
            default: () => {return []},
          },

          fullWidth: {
            type: Boolean,
            default: false,
          },

          hideDetails: {
            type: Boolean,
            default: true,
          },

          hint: {
            type: String,
            default: '',
          },

          id: {
            type: String,
            required: true,
          },

          label: {
            type: String,
            default: '',
          },

          light: {
            type: Boolean,
            default: true,
          },

          loading: {
            type: [Boolean, String],
            default: false,
          },

          mask: {
            type: String,
            default: null,
          },

          multiLine: {
            type: Boolean,
            default: false,
          },

          persistentHint: {
            type: Boolean,
            default: false,
          },

          placeholder: {
            type: String,
            default: '',
          },

          prefix: {
            type: String,
            default: '',
          },

          prependIcon: {
            type: String,
            default: null,
          },

          readonly: {
            type: Boolean,
            default: false,
          },

          required: {
            type: Boolean,
            default: false,
          },

          returnMaskedValue: {
            type: Boolean,
            default: false,
          },

          rows: {
            type: Number,
            default: 5,
          },

          rules: {
            type: Array,
            default: () => {return []}
          },

          singleLine: {
            type: Boolean,
            default: false,
          },

          solo: {
            type: Boolean,
            default: false,
          },

          suffix: {
            type: String,
            default: '',
          },

          tabindex: {
            type: Number,
            default: 0,
          },

          textarea: {
            type: Boolean,
            default: false,
          },

          toggleKeys: {
            type: Array,
            default: () => {return [13,32]},
          },

          validateOnBlur: {
            type: Boolean,
            default: false,
          },

          types: {
            type: String,
            default: 'address',
          },
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
            }
        },

        watch: {
            autocompleteText: function (newVal, oldVal) {
	            this.$emit('inputChange', { newVal, oldVal });
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

          // Override the default placeholder
          // text set by Google with the 
          // placeholder prop value.
          document.getElementById(this.id).setAttribute('placeholder', this.placeholder);

          this.autocomplete.addListener('place_changed', () => {

                let place = this.autocomplete.getPlace();

                if (!place.geometry) {
                  // User entered the name of a Place that was not suggested and
                  // pressed the Enter key, or the Place Details request failed.
                  this.$emit('no-results-found', place);
                  return;
                }

                let addressComponents = {
                    street_number: 'short_name',
                    route: 'long_name',
                    locality: 'long_name',
                    administrative_area_level_1: 'short_name',
                    country: 'long_name',
                    postal_code: 'short_name'
                };

                let returnData = {};

                if (place.address_components !== undefined) {
                    // Get each component of the address from the place details
                    for (let i = 0; i < place.address_components.length; i++) {
                      let addressType = place.address_components[i].types[0];

                      if (addressComponents[addressType]) {
                        let val = place.address_components[i][addressComponents[addressType]];
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
              this.geolocate();
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

            // Bias the autocomplete object to the user's geographical location,
            // as supplied by the browser's 'navigator.geolocation' object.
            geolocate() {
                if (this.enableGeolocation) {
                    if (navigator.geolocation) {
                      navigator.geolocation.getCurrentPosition(position => {
                        let geolocation = {
                          lat: position.coords.latitude,
                          lng: position.coords.longitude
                        };
                        let circle = new google.maps.Circle({
                          center: geolocation,
                          radius: position.coords.accuracy
                        });
                        this.autocomplete.setBounds(circle.getBounds());
                      });
                    }
                }
            }
        }
    }
</script>
