export default {
  name: 'vuetify-google-autocomplete',
  props: {
    appendIcon: {
      type: String,
      default: undefined,
    },
    appendIconCb: {
      type: Function,
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
      default: undefined,
    },
    country: {
      type: [String, Array],
      default: null,
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
      default: () => [],
    },
    flat: {
      type: Boolean,
      default: false,
    },
    fullWidth: {
      type: Boolean,
      default: false,
    },
    hideDetails: {
      type: Boolean,
      default: false,
    },
    hint: {
      type: String,
      default: undefined,
    },
    id: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      default: undefined,
    },
    light: {
      type: Boolean,
      default: false,
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
      default: undefined,
    },
    multiLine: {
      type: Boolean,
      default: false,
    },
    noResize: {
      type: Boolean,
      default: false,
    },
    persistentHint: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: undefined,
    },
    prefix: {
      type: String,
      default: undefined,
    },
    prependIcon: {
      type: String,
      default: undefined,
    },
    prependIconCb: {
      type: Function,
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
    rowHeight: {
      type: [Number, String],
      deffault: 24,
    },
    rows: {
      type: [Number, String],
      default: 5,
    },
    rules: {
      type: Array,
      default: () => [],
    },
    singleLine: {
      type: Boolean,
      default: false,
    },
    solo: {
      type: Boolean,
      default: false,
    },
    soloInverted: {
      type: Boolean,
      default: false,
    },
    suffix: {
      type: String,
      default: undefined,
    },
    tabindex: {
      default: 0,
    },
    textarea: {
      type: Boolean,
      default: false,
    },
    toggleKeys: {
      type: Array,
      default: () => [13, 32],
    },
    type: {
      type: String,
      default: 'text',
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
      default: undefined,
      required: false,
    },
  },
  // eslint-disable-next-line
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

      /**
       * Indicates if the Geolocate has already been set.
       */
      geolocateSet: false,

      /**
       * Interval for loading Google Maps.
       */
      loadInterval: null,

      /**
       * Global Google Maps State Watcher.
       */
      vgaMapState: null,
    };
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
      this.autocompleteText = '';
    },

    /**
     * Focus the input
     */
    focus() {
      this.$refs.autocomplete.focus();
    },

    /**
     * Blur the input
     */
    blur() {
      this.$refs.autocomplete.blur();
    },

    /**
     * Update the value of the input
     * @param  {String} value
     */
    update(value) {
      this.autocompleteText = value;
    },

    // Bias the autocomplete object to the user's geographical location,
    // as supplied by the browser's 'navigator.geolocation' object.
    geolocate() {
      if (this.enableGeolocation && !this.geolocateSet) {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position) => {
            const geolocation = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };
            const circle = new window.google.maps.Circle({
              center: geolocation,
              radius: position.coords.accuracy,
            });
            this.autocomplete.setBounds(circle.getBounds());
            this.geolocateSet = true;
          });
        }
      }
    },

    setupGoogle() {
      const options = {};

      if (this.types) {
        options.types = [this.types];
      }

      if (this.country) {
        options.componentRestrictions = {
          country: this.country,
        };
      }

      this.autocomplete = new window.google.maps.places.Autocomplete(
        document.getElementById(this.id),
        options,
      );

      // Override the default placeholder
      // text set by Google with the
      // placeholder prop value or an empty value.
      document.getElementById(this.id).setAttribute('placeholder', this.placeholder ? this.placeholder : '');

      this.autocomplete.addListener('place_changed', () => {
        const place = this.autocomplete.getPlace();

        if (!place.geometry) {
          // User entered the name of a Place that was not suggested and
          // pressed the Enter key, or the Place Details request failed.
          this.$emit('no-results-found', place);
          return;
        }

        const addressComponents = {
          street_number: 'short_name',
          route: 'long_name',
          locality: 'long_name',
          administrative_area_level_1: 'short_name',
          country: 'long_name',
          postal_code: 'short_name',
        };

        const returnData = {};

        if (place.formatted_address !== undefined) {
          document.getElementById(this.id).value = place.formatted_address;
        }

        if (place.address_components !== undefined) {
          // Get each component of the address from the place details
          for (let i = 0; i < place.address_components.length; i += 1) {
            const addressType = place.address_components[i].types[0];

            if (addressComponents[addressType]) {
              const val = place.address_components[i][addressComponents[addressType]];
              returnData[addressType] = val;
            }
          }

          returnData.latitude = place.geometry.location.lat();
          returnData.longitude = place.geometry.location.lng();
          
          // additional fields available in google places results
          returnData.name = place.name
          returnData.photos = place.photos
          returnData.place_id = place.place_id

          // return returnData object and PlaceResult object
          this.$emit('placechanged', returnData, place, this.id);

          // update autocompleteText then emit change event
          this.autocompleteText = document.getElementById(this.id).value;
          this.onChange();
        }
      });
    },
  },
  created() {
    // Set the default model if provided.
    this.autocompleteText = this.value ? this.value : '';
  },
  mounted() {
    this.vgaMapState = window.vgaMapState;
    if (window.hasOwnProperty('google') && window.google.hasOwnProperty('maps')) {
      // we've been here before. just need to get Autocomplete loaded
      this.setupGoogle();
    }
  },
  destroyed() {
    // trip this on the way out so we can differentiate return trips in mounted()
    window.vgaMapState.initMap = false;
  },
  render(createElement) {
    const self = this;
    return createElement('v-text-field', {
      attrs: {
        id: self.id,
        name: self.id,
      },
      props: {
        'append-icon': self.appendIcon,
        'append-icon-cb': self.appendIconCb,
        'auto-grow': self.autoGrow,
        autofocus: self.autofocus,
        box: self.box,
        clearable: self.clearable,
        color: self.color,
        counter: self.counter,
        dark: self.dark,
        disabled: self.disabled,
        'dont-fill-mask-blanks': self.dontFillMaskBlanks,
        error: self.error,
        'error-messages': self.errorMessages,
        'full-width': self.fullWidth,
        'hide-details': self.hideDetails,
        hint: self.hint,
        label: self.label,
        light: self.light,
        loading: self.loading,
        mask: self.mask,
        'multi-line': self.multiLine,
        'no-resize': self.noResize,
        'persistent-hint': self.persistentHint,
        placeholder: self.placeholder,
        prefix: self.prefix,
        'prepend-icon': self.prependIcon,
        'prepend-icon-cb': self.prependIconCb,
        readonly: self.readonly,
        required: self.required,
        'return-masked-value': self.returnMaskedValue,
        'row-height': self.rowHeight,
        rows: self.rows,
        rules: self.rules,
        ref: 'autocomplete',
        'single-line': self.singleLine,
        solo: self.solo,
        'solo-inverted': self.soloInverted,
        suffix: self.suffix,
        tabindex: self.tabindex,
        textarea: self.textarea,
        'toggle-keys': self.toggleKeys,
        type: self.type,
        value: self.value || self.autocompleteText,
        'validate-on-blur': self.validateOnBlur,
        '@focus': self.onFocus(),
        '@blur': self.onFocus(),
        '@change': self.onChange(),
        '@keypress': self.onKeyPress(),
      },
      domProps: {
        // value: self.autocompleteText,
      },
      on: {
        focus: () => {
          self.onFocus();
        },
        blur: () => {
          self.onBlur();
        },
        change: () => {
          self.onChange();
        },
        keypress: (e) => {
          self.onKeyPress(e.target.value);
        },
        input: (event) => {
          if (event && event.target) {
            self.value = event.target.value;
            self.$emit('input', event.target.value);
          } else {
            // clear was pressed, reset this
            self.autocompleteText = '';
            self.$emit('placechanged', null);
          }
        },
      },
    }, []);
  },
  watch: {
    /**
    * Emit the new autocomplete text whenever it changes.
    */
    autocompleteText: function autocompleteText(newVal) {
      this.$emit('input', newVal || '');
    },

    /**
    * Update the SDK country option whenever it changes from the parent.
    */
    country: function country(newVal) {
      if (newVal) {
        this.autocomplete.componentRestrictions.country = newVal;
      }
    },

    /**
    * Watches for changes on the Geolocation option.
    */
    enableGeolocation: function enableGeolocation(newVal) {
      if (!newVal) {
        this.geolocateSet = false;
      }

      this.enableGeolocation = newVal;
    },

    'vgaMapState.initMap': function vgaMapStateInitMap(value) {
      if (value) {
        this.setupGoogle();
      }
    },

    /**
    * Update the SDK types option whenever it changes from the parent.
    */
    types: function types(newVal) {
      if (newVal) {
        this.autocomplete.setTypes([this.types]);
      }
    },
  },
};
