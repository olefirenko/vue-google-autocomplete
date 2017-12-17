import Vue from 'vue';
import loadGoogleMapsAPI from 'load-google-maps-api';

export default {
  name: 'vuetify-google-autocomplete',
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
    googleApiKey: {
      type: String,
      required: true,
    },
    googleApiVersion: {
      type: String,
      default: '3',
      required: false,
    },
    label: {
      type: String,
      default: '',
    },
    light: {
      type: Boolean,
      default: true,
    },
    loadGoogleApi: {
      type: Boolean,
      default: true,
      required: false,
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
    types: {
      type: String,
      default: 'address',
    },
    validateOnBlur: {
      type: Boolean,
      default: false,
    },
    value: {
      type: String,
      default: '',
      required: true,
    },
  },
  data: () => {
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
    },

    /**
    * Initializes the Google Places Object.
    */
    initGoogleMaps(googleObj) {
      if (!this.loadGoogleApi) {
        googleObj(window.google.maps ? window.google.maps : window.google);
      } else if (this.google) {
        googleObj(Vue.google);
      } else {
        loadGoogleMapsAPI({
          key: this.googleApiKey,
          libraries: ['places'],
          v: this.googleApiVersion,
        }).then(google => {
          Vue.google = google;
          Vue.prototype.$google = google;
          googleObj(google);
        })
      }
    },
  },
  created() {
    // Set the default model if provided.
    this.autocompleteText = this.value ? this.value : '';
  },
  mounted () {
    const options = {};
    if(this.types) {
      options.types = [this.types];
    }

    if(this.country) {
      options.componentRestrictions = {
        country: this.country,
      };
    }

    if(document.getElementById(this.id)) {

      this.initGoogleMaps((google) => {
        this.autocomplete = new google.places.Autocomplete(document.getElementById(this.id),options);

        // Override the default placeholder text set by 
        // Google with the placeholder prop value
        document.getElementById(this.id).setAttribute('placeholder', this.placeholder);

        this.autocomplete.addListener('place_changed', () => {
          let place = this.autocomplete.getPlace();

          if(!place.geometry) {
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

          if(place.address_components !== undefined) {
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
            this.autocompleteText = document.getElementById(this.id).value;
            this.onChange();
          }
        });
      });
    }else {
      console.warn(`Vuetify Google Autocomplete: DOM element with ID '${this.id}' not found.`);
    }
  },
  render(createElement) {
    return createElement('v-text-field', {
      attrs: {
        'id': this.id,
        'name': this.id,
      },
      props: {
        'append-icon': this.appendIcon,
        'auto-grow': this.autoGrow,
        'autofocus': this.autofocus,
        'box': this.box,
        'clearable': this.clearable,
        'color': this.color,
        'counter': this.counter,
        'class': this.classname,
        'dark': this.dark,
        'disabled': this.disabled,
        'dont-fill-mask-blanks': this.dontFillMaskBlanks,
        'error': this.error,
        'error-messages': this.errorMessages,
        'full-width': this.fullWidth,
        'hide-details': this.hideDetails,
        'hint': this.hint,
        'label': this.label,
        'light': this.light,
        'loading': this.loading,
        'mask': this.mask,
        'multi-line': this.multiLine,
        'persistent-hint': this.persistentHint,
        'placeholder': this.placeholder,
        'prefix': this.prefix,
        'prepend': this.prependIcon,
        'readonly': this.readonly,
        'required': this.required,
        'return-masked-value': this.returnMaskedValue,
        'rows': this.rows,
        'rules': this.rules,
        'ref': 'autocomplete',
        'single-line': this.singleLine,
        'solo': this.solo,
        'suffix': this.suffix,
        'tabindex': this.tabindex,
        'solo': this.solo,
        'textarea': this.textarea,
        'toggle-keys': this.toggleKeys,
        'type': 'text',
        'validate-on-blur': this.validateOnBlur,
        '@focus': this.onFocus(),
        '@blur': this.onFocus(),
        '@change': this.onChange(),
        '@keypress': this.onKeyPress(),
      },
      domProps: {
        value: this.autocompleteText,
      },
      on: {
        focus: e => {
          this.onFocus();
        },
        blur: e => {
          this.onBlur();
        },
        change: e => {
          this.onChange();
        },
        keypress: e => {
          this.onKeyPress(e.target.value);
        },
        input: e => {
          this.autocompleteText = e;
        },
      },
    }, []);
  },
  watch: {
    /**
    * Emit the new autocomplete text whenever it changes.
    */
    autocompleteText: function (newVal) {
      this.$emit('input', newVal);
    },

    /**
    * Update the SDK country option whenever it changes from the parent.
    */
    country: function(newVal) {
      if(newVal) {
        this.autocomplete.componentRestrictions.country = newVal;
      }
    },

    /**
    * Update the SDK types option whenever it changes from the parent.
    */
    types: function(newVal) {
      if(newVal) {
        this.autocomplete.types = [this.types];
      }
    },
  },
}