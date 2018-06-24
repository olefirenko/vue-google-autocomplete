/**
 * @module vuetify-google-autocomplete
 * @author Madimetja Shika <madi@mjshika.xyz>
 */
export default {
  /**
  * Component name. Returns 'vuetify-google-autocomplete'.
  */
  name: 'vuetify-google-autocomplete',
  /**
   * @mixin
   * @desc Exposed component props.
   */
  props: {
    /**
     * Maps to Vuetify 'append-icon' prop.
     *
     * @alias module:vuetify-google-autocomplete.props.append-icon
     * @see {@link https://vuetifyjs.com/en/components/text-fields}
     * @type {String}
     */
    appendIcon: {
      type: String,
      default: undefined,
    },
    /**
     * Maps to Vuetify 'append-icon-cb' prop.
     *
     * @alias module:vuetify-google-autocomplete.props.append-icon-cb
     * @see {@link https://vuetifyjs.com/en/components/text-fields}
     * @type {Function}
     */
    appendIconCb: {
      type: Function,
      default: null,
    },
    /**
     * Maps to Vuetify 'auto-grow' prop.
     *
     * @alias module:vuetify-google-autocomplete.props.auto-grow
     * @see {@link https://vuetifyjs.com/en/components/text-fields}
     * @type {Boolean}
     */
    autoGrow: {
      type: Boolean,
      default: false,
    },
    /**
     * Maps to Vuetify 'autofocus' prop.
     *
     * @alias module:vuetify-google-autocomplete.props.autofocus
     * @see {@link https://vuetifyjs.com/en/components/text-fields}
     * @type {Boolean}
     */
    autofocus: {
      type: Boolean,
      default: false,
    },
    /**
     * Maps to Vuetify 'box' prop.
     *
     * @alias module:vuetify-google-autocomplete.props.box
     * @see {@link https://vuetifyjs.com/en/components/text-fields}
     * @type {Boolean}
     */
    box: {
      type: Boolean,
      default: false,
    },
    /**
     * Maps to Vuetify 'clearable' prop.
     *
     * @alias module:vuetify-google-autocomplete.props.clearable
     * @see {@link https://vuetifyjs.com/en/components/text-fields}
     * @type {Boolean}
     */
    clearable: {
      type: Boolean,
      default: false,
    },
    /**
     * Maps to Vuetify 'color' prop.
     *
     * @alias module:vuetify-google-autocomplete.props.color
     * @see {@link https://vuetifyjs.com/en/components/text-fields}
     * @type {String}
     */
    color: {
      type: String,
      default: 'primary',
    },
    /**
     * Maps to Vuetify 'counter' prop.
     *
     * @alias module:vuetify-google-autocomplete.props.counter
     * @see {@link https://vuetifyjs.com/en/components/text-fields}
     * @type {Boolean|Number|String}
     */
    counter: {
      type: [Boolean, Number, String],
      default: undefined,
    },
    /**
     * Restrict the autocomplete search to a particular country or set of countries.
     *
     * @see {@link https://developers.google.com/places/web-service/autocomplete}
     * @type {String|Array}
     */
    country: {
      type: [String, Array],
      default: null,
    },
    /**
     * Maps to Vuetify 'dark' prop.
     *
     * @alias module:vuetify-google-autocomplete.props.dark
     * @see {@link https://vuetifyjs.com/en/components/text-fields}
     * @type {Boolean}
     */
    dark: {
      type: Boolean,
      default: false,
    },
    /**
     * Maps to Vuetify 'disabled' prop.
     *
     * @alias module:vuetify-google-autocomplete.props.disabled
     * @see {@link https://vuetifyjs.com/en/components/text-fields}
     * @type {Boolean}
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * Maps to Vuetify 'dont-fill-mask-blanks' prop.
     *
     * @alias module:vuetify-google-autocomplete.props.dont-fill-mask-blanks
     * @see {@link https://vuetifyjs.com/en/components/text-fields}
     * @type {Boolean}
     */
    dontFillMaskBlanks: {
      type: Boolean,
      default: false,
    },
    /**
     * Bias the search towards user's current location.
     *
     * @alias module:vuetify-google-autocomplete.props.enable-geolocation
     * @see {@link https://developers.google.com/places/web-service/autocomplete}
     * @type {Boolean}
     */
    enableGeolocation: {
      type: Boolean,
      default: false,
    },
    /**
     * Maps to Vuetify 'error' prop.
     *
     * @alias module:vuetify-google-autocomplete.props.error
     * @see {@link https://vuetifyjs.com/en/components/text-fields}
     * @type {Boolean}
     */
    error: {
      type: Boolean,
      default: false,
    },
    /**
     * Maps to Vuetify 'error-messages' prop.
     *
     * @alias module:vuetify-google-autocomplete.props.error-messages
     * @see {@link https://vuetifyjs.com/en/components/text-fields}
     * @type {Array}
     */
    errorMessages: {
      type: Array,
      default: () => [],
    },
    /**
     * Maps to Vuetify 'flat' prop.
     *
     * @alias module:vuetify-google-autocomplete.props.flat
     * @see {@link https://vuetifyjs.com/en/components/text-fields}
     * @type {Boolean}
     */
    flat: {
      type: Boolean,
      default: false,
    },
    /**
     * Maps to Vuetify 'full-width' prop.
     *
     * @alias module:vuetify-google-autocomplete.props.full-width
     * @see {@link https://vuetifyjs.com/en/components/text-fields}
     * @type {Boolean}
     */
    fullWidth: {
      type: Boolean,
      default: false,
    },
    /**
     * Maps to Vuetify 'hide-details' prop.
     *
     * @alias module:vuetify-google-autocomplete.props.hide-details
     * @see {@link https://vuetifyjs.com/en/components/text-fields}
     * @type {Boolean}
     */
    hideDetails: {
      type: Boolean,
      default: false,
    },
    /**
     * Maps to Vuetify 'hint' prop.
     *
     * @alias module:vuetify-google-autocomplete.props.hint
     * @see {@link https://vuetifyjs.com/en/components/text-fields}
     * @type {String}
     */
    hint: {
      type: String,
      default: undefined,
    },
    /**
     * ID Attribute for the text field. Is required.
     *
     * @alias module:vuetify-google-autocomplete.props.id
     * @type {String}
     */
    id: {
      type: String,
      required: true,
    },
    /**
     * Maps to Vuetify 'label' prop.
     *
     * @alias module:vuetify-google-autocomplete.props.label
     * @see {@link https://vuetifyjs.com/en/components/text-fields}
     * @type {String}
     */
    label: {
      type: String,
      default: undefined,
    },
    /**
     * Maps to Vuetify 'light' prop.
     *
     * @alias module:vuetify-google-autocomplete.props.light
     * @see {@link https://vuetifyjs.com/en/components/text-fields}
     * @type {Boolean}
     */
    light: {
      type: Boolean,
      default: false,
    },
    /**
     * Maps to Vuetify 'loading' prop.
     *
     * @alias module:vuetify-google-autocomplete.props.loading
     * @see {@link https://vuetifyjs.com/en/components/text-fields}
     * @type {Boolean|String}
     */
    loading: {
      type: [Boolean, String],
      default: false,
    },
    /**
     * Maps to Vuetify 'mask' prop.
     *
     * @alias module:vuetify-google-autocomplete.props.mask
     * @see {@link https://vuetifyjs.com/en/components/text-fields}
     * @type {Object|String}
     */
    mask: {
      type: [Object, String],
      default: undefined,
    },
    /**
     * Maps to Vuetify 'multi-line' prop.
     *
     * @alias module:vuetify-google-autocomplete.props.multi-line
     * @see {@link https://vuetifyjs.com/en/components/text-fields}
     * @type {Boolean}
     */
    multiLine: {
      type: Boolean,
      default: false,
    },
    /**
     * Maps to Vuetify 'no-resize' prop.
     *
     * @alias module:vuetify-google-autocomplete.props.no-resize
     * @see {@link https://vuetifyjs.com/en/components/text-fields}
     * @type {Boolean}
     */
    noResize: {
      type: Boolean,
      default: false,
    },
    /**
     * Maps to Vuetify 'persistent-hint' prop.
     *
     * @alias module:vuetify-google-autocomplete.props.persistent-hint
     * @see {@link https://vuetifyjs.com/en/components/text-fields}
     * @type {Boolean}
     */
    persistentHint: {
      type: Boolean,
      default: false,
    },
    /**
     * Maps to Vuetify 'placeholder' prop.
     *
     * @alias module:vuetify-google-autocomplete.props.placeholder
     * @see {@link https://vuetifyjs.com/en/components/text-fields}
     * @type {String}
     */
    placeholder: {
      type: String,
      default: undefined,
    },
    /**
     * Maps to Vuetify 'prefix' prop.
     *
     * @alias module:vuetify-google-autocomplete.props.prefix
     * @see {@link https://vuetifyjs.com/en/components/text-fields}
     * @type {String}
     */
    prefix: {
      type: String,
      default: undefined,
    },
    /**
     * Maps to Vuetify 'prepend-icon' prop.
     *
     * @alias module:vuetify-google-autocomplete.props.prepend-icon
     * @see {@link https://vuetifyjs.com/en/components/text-fields}
     * @type {String}
     */
    prependIcon: {
      type: String,
      default: undefined,
    },
    /**
     * Maps to Vuetify 'prepend-icon-cb' prop.
     *
     * @alias module:vuetify-google-autocomplete.props.prepend-icon-cb
     * @see {@link https://vuetifyjs.com/en/components/text-fields}
     * @type {Function}
     */
    prependIconCb: {
      type: Function,
      default: null,
    },
    /**
     * Maps to Vuetify 'readonly' prop.
     *
     * @alias module:vuetify-google-autocomplete.props.readonly
     * @see {@link https://vuetifyjs.com/en/components/text-fields}
     * @type {Boolean}
     */
    readonly: {
      type: Boolean,
      default: false,
    },
    /**
     * Maps to Vuetify 'required' prop.
     *
     * @alias module:vuetify-google-autocomplete.props.required
     * @see {@link https://vuetifyjs.com/en/components/text-fields}
     * @type {Boolean}
     */
    required: {
      type: Boolean,
      default: false,
    },
    /**
     * Maps to Vuetify 'return-masked-value' prop.
     *
     * @alias module:vuetify-google-autocomplete.props.return-masked-value
     * @see {@link https://vuetifyjs.com/en/components/text-fields}
     * @type {Boolean}
     */
    returnMaskedValue: {
      type: Boolean,
      default: false,
    },
    /**
     * Maps to Vuetify 'row-height' prop.
     *
     * @alias module:vuetify-google-autocomplete.props.row-height
     * @see {@link https://vuetifyjs.com/en/components/text-fields}
     * @type {Number|String}
     */
    rowHeight: {
      type: [Number, String],
      default: 24,
    },
    /**
     * Maps to Vuetify 'rows' prop.
     *
     * @alias module:vuetify-google-autocomplete.props.rows
     * @see {@link https://vuetifyjs.com/en/components/text-fields}
     * @type {Number|String}
     */
    rows: {
      type: [Number, String],
      default: 5,
    },
    /**
     * Maps to Vuetify 'rules' prop.
     *
     * @alias module:vuetify-google-autocomplete.props.rules
     * @see {@link https://vuetifyjs.com/en/components/text-fields}
     * @type {Array}
     */
    rules: {
      type: Array,
      default: () => [],
    },
    /**
     * Maps to Vuetify 'single-line' prop.
     *
     * @alias module:vuetify-google-autocomplete.props.single-line
     * @see {@link https://vuetifyjs.com/en/components/text-fields}
     * @type {Boolean}
     */
    singleLine: {
      type: Boolean,
      default: false,
    },
    /**
     * Maps to Vuetify 'solo' prop.
     *
     * @alias module:vuetify-google-autocomplete.props.solo
     * @see {@link https://vuetifyjs.com/en/components/text-fields}
     * @type {Boolean}
     */
    solo: {
      type: Boolean,
      default: false,
    },
    /**
     * Maps to Vuetify 'solo-inverted' prop.
     *
     * @alias module:vuetify-google-autocomplete.props.solo-inverted
     * @see {@link https://vuetifyjs.com/en/components/text-fields}
     * @type {Boolean}
     */
    soloInverted: {
      type: Boolean,
      default: false,
    },
    /**
     * Maps to Vuetify 'suffix' prop.
     *
     * @alias module:vuetify-google-autocomplete.props.suffix
     * @see {@link https://vuetifyjs.com/en/components/text-fields}
     * @type {String}
     */
    suffix: {
      type: String,
      default: undefined,
    },
    /**
     * Maps to Vuetify 'tabindex' prop.
     *
     * @alias module:vuetify-google-autocomplete.props.tabindex
     * @see {@link https://vuetifyjs.com/en/components/text-fields}
     * @type {*}
     */
    tabindex: {
      default: 0,
    },
    /**
     * Maps to Vuetify 'textarea' prop.
     *
     * @alias module:vuetify-google-autocomplete.props.textarea
     * @see {@link https://vuetifyjs.com/en/components/text-fields}
     * @type {Boolean}
     */
    textarea: {
      type: Boolean,
      default: false,
    },
    /**
     * Maps to Vuetify 'toggle-keys' prop.
     *
     * @alias module:vuetify-google-autocomplete.props.toggle-keys
     * @see {@link https://vuetifyjs.com/en/components/text-fields}
     * @type {Array}
     */
    toggleKeys: {
      type: Array,
      default: () => [13, 32],
    },
    /**
     * Maps to Vuetify 'type' prop.
     *
     * @alias module:vuetify-google-autocomplete.props.type
     * @see {@link https://vuetifyjs.com/en/components/text-fields}
     * @type {String}
     */
    type: {
      type: String,
      default: 'text',
    },
    /**
     * Types supported in place autocomplete requests.
     *
     * @alias module:vuetify-google-autocomplete.props.types
     * @see {@link https://developers.google.com/places/supported_types#table3}
     * @see {@link https://developers.google.com/places/web-service/autocomplete}
     * @type {String}
     */
    types: {
      type: String,
      default: 'address',
    },
    /**
     * Maps to Vuetify 'validate-on-blur' prop.
     *
     * @alias module:vuetify-google-autocomplete.props.validate-on-blur
     * @see {@link https://vuetifyjs.com/en/components/text-fields}
     * @type {Boolean}
     */
    validateOnBlur: {
      type: Boolean,
      default: false,
    },
    /**
     * Maps to Vuetify 'value' prop.
     *
     * @alias module:vuetify-google-autocomplete.props.value
     * @see {@link https://vuetifyjs.com/en/components/text-fields}
     * @type {String}
     */
    value: {
      type: String,
      default: undefined,
      required: false,
    },
  },
  /**
   * @mixin
   * @desc See code for members.
   */
  data: () => ({
    /**
     * The Autocomplete object.
     * @access private
     * @type {Autocomplete}
     * @link https://developers.google.com/maps/documentation/javascript/reference#Autocomplete
     */
    autocomplete: null,

    /**
     * Autocomplete input text
     * @access private
     * @type {String}
     */
    autocompleteText: '',

    /**
     * Indicates if the Geolocate has already been set.
     * @access private
     */
    geolocateSet: false,

    /**
     * Interval for loading Google Maps.
     * @access private
     */
    loadInterval: null,

    /**
     * Global Google Maps State Watcher.
     * @access private
     */
    vgaMapState: null,
  }),
  /**
   * @mixin
   * @desc See code for members.
   */
  methods: {
    /**
     * Called when the input gets focus
     * @access private
     */
    onFocus() {
      this.geolocate();
      this.$emit('focus');
    },

    /**
     * Called when the input loses focus
     * @access private
     */
    onBlur() {
      this.$emit('blur');
    },

    /**
     * Called when the input got changed
     * @access private
     */
    onChange() {
      this.$emit('change', this.autocompleteText);
    },

    /**
     * Called when a key gets pressed
     * @param {Event} event A keypress event
     * @access private
     */
    onKeyPress(event) {
      this.$emit('keypress', event);
    },

    /**
     * Clear the input
     * @access private
     */
    clear() {
      this.autocompleteText = '';
    },

    /**
     * Focus the input
     * @access private
     */
    focus() {
      this.$refs.autocomplete.focus();
    },

    /**
     * Blur the input
     * @access private
     */
    blur() {
      this.$refs.autocomplete.blur();
    },

    /**
     * Update the value of the input
     * @param {String} value The value to update to.
     * @access private
     */
    update(value) {
      this.autocompleteText = value;
    },

    /**
    * Bias the autocomplete object to the user's geographical location,
    * as supplied by the browser's 'navigator.geolocation' object.
    * @access private
    */
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
          returnData.name = place.name;
          returnData.photos = place.photos;
          returnData.place_id = place.place_id;

          // return returnData object and PlaceResult object
          this.$emit('placechanged', returnData, place, this.id);

          // update autocompleteText then emit change event
          this.autocompleteText = document.getElementById(this.id).value;
          this.onChange();
        }
      });
    },
  },
  /**
   * @mixin
   * @desc Updates the autocompleteText member if a v-model was provided.
   */
  created() {
    this.autocompleteText = this.value ? this.value : '';
  },
  /**
   * @mixin
   * @desc Loads the Google Autocomplete SDK.
   */
  mounted() {
    this.vgaMapState = window.vgaMapState;
    if (Object.prototype.hasOwnProperty.call(window, 'google') && Object.prototype.hasOwnProperty.call(window, 'maps')) {
      // we've been here before. just need to get Autocomplete loaded
      this.setupGoogle();
    }
  },
  /**
   * @mixin
   * @desc Resets the autocomplete loaded state.
   */
  destroyed() {
    // trip this on the way out so we can differentiate return trips in mounted()
    window.vgaMapState.initMap = false;
  },
  /**
   * @mixin
   * @desc See code.
   */
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
  /**
   * @mixin
   */
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
