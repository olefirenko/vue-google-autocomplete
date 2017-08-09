import Vue from 'vue';
import Vuetify from 'vuetify';
import VueClipboards from 'vue-clipboards';
import VuetifyGoogleAutocomplete from './../../src/VuetifyGoogleAutocomplete.vue';

Vue.use(Vuetify);
Vue.use(VueClipboards);

const app = new Vue({
  el: '#app',

  components: { VuetifyGoogleAutocomplete },

  data: {
    vueGoogleAutocompleteLink: 'https://github.com/olefirenko/vue-google-autocomplete',
    gitHubLink: 'https://github.com/MadimetjaShika/vuetify-google-autocomplete',
    npmLink: 'https://www.npmjs.com/package/vuetify-google-autocomplete',
    snackbar: {
      text: '',
      visible: '',
      context: '',
    },
    address: {},
    disabled: false,
    id: 'map',
    appendIcon: 'search',
    prependIcon: '',
    callbackFunction: 'getAddressData',
    classname: '',
    placeholderText: 'Search Address',
    types: 'address',
    typesOptions: [
      'geocode',
      'address',
      'establishment',
      'regions',
      'cities',
    ],
    country: [],
    countryOptions: [
      'br',
      'sg',
      'fr',
      'za',
      'mx'
    ],
    enableGeolocation: false,
  },

  computed: {
    outputHtml: function(){
      return `<vuetify-google-autocomplete
  id="${this.id}"
  :append-icon="${this.appendIcon}"
  :prepend-icon="${this.prependIcon}"
  :classname="${this.classname}"
  :placeholder="${this.placeholderText}"
  :disabled="${this.disabled}"
  :enable-geolocation="${this.enableGeolocation}"
  :types="${this.types}"
  :country="${this.country}"
  :placechanged="${this.callbackFunction}">
</vuetify-google-autocomplete>`;
    },

    outputJsData: function(){
      return `data() {
  return {
    address: ${JSON.stringify(this.address)},
    disabled: ${this.disabled},
    id: '${this.id}',
    appendIcon: '${this.appendIcon}',
    prependIcon: '${this.prependIcon}',
    classname: '${this.classname}',
    placeholderText: '${this.placeholderText}',
    types: '${this.types}',
    country: [${this.country}],
    enableGeolocation: ${this.enableGeolocation},
  }
}`
    },

    outputJsCallback: function(){
      return `methods: {
  ${this.callbackFunction}: function (addressData, placeResultData) {
    this.address = addressData;
  }
}`;
    },

    outputJs: function(){
        return `${this.outputJsData},
${this.outputJsCallback}`;
    },
  },

  methods: {
    /**
    * Callback method when the location is found.
    *
    * @param {Object} addressData Data of the found location
    * @param {Object} placeResultData PlaceResult object
    */
    getAddressData: function (addressData, placeResultData) {
      this.address = addressData;
    },

    /**
    * Handles the successful clipboard copy event.
    */
    handleCodeCopySuccess: function(code){
      this.snackbar.text = `${code} code copied to clipboard!`;
      this.snackbar.context = 'success';
      this.snackbar.visible = true;
    },

    /**
    * Handles the error clipboard copy event.
    */
    handleCodeCopyError: function(code){
      this.snackbar.text = `Could not copy ${code} code to clipboard!`;
      this.snackbar.context = 'error';
      this.snackbar.visible = true;
    },
  }
});
