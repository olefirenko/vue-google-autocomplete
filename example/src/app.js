import Vue from 'vue';
import Vuetify from 'vuetify';
import VueClipboards from 'vue-clipboards';
import VuetifyGoogleAutocomplete from './../../src/VuetifyGoogleAutocomplete.vue';
import countryCodeList from './countrycode.json';

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
    errorAlert: {
        message: '',
        visible: false,
    },
    address: {},
    appendIcon: 'search',
    callbackFunction: 'getAddressData',
    classname: '',
    clearable: true,
    country: [],
    countryOptions: countryCodeList,
    disabled: false,
    enableGeolocation: false,
    id: 'map',
    prependIcon: '',
    labelText: 'Search Address',
    placeholderText: '',
    required: true,
    types: 'address',
    typesOptions: [
      'geocode',
      'address',
      'establishment',
      'regions',
      'cities',
    ],
    repos: [
      {
        isIcon: true,
        icon: 'fa-github',
        title: 'View on Github',
        link: 'https://github.com/MadimetjaShika/vuetify-google-autocomplete',
      },
      {
        divider: true,
        inset: true
      },
      {
        isIcon: false,
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAA6ElEQVRoQ+2Yaw7CIBCEl+vo/Y+i16kxMVETmgGGLW3y9S/dgXkshZa4+FMuvv6AwGoHcQAHTAWIkCmgXY4DtoQmAA6YAtrlOGBLaAKUR8RmYiwth8BS+SPiz4Hb1pamZ/n2fmbNnji/80Pg9A7U4qIiNKvmHSGFJSOkAGoOzKqBQIsCOPDZK/f6SsUxpQdq+/dI47ckAAKzvgNTIjRyrlFNPILZU2OfRiHQI3fl3aErZc8l6B65f8AhoBJwSgfUoo8cH4rQkQtUc0FAKZQ9jgPZCit8HFAKZY/jQLbCCh8HlELZ45d34AVLqehFzhuaFgAAAABJRU5ErkJggg==',
        title: 'View on NPM', 
        link: 'https://www.npmjs.com/package/vuetify-google-autocomplete',
      },
    ]
  },
  computed: {
    countryValidationRules: function(){
      if(this.country.length > 5){
        this.disabled = true;
        this.errorAlert.visible = true;
        this.errorAlert.message = 'Please select a max of 5 countries.'
        return 'Please select max of 5 countries.';
      }else{
        this.disabled = false;
        this.errorAlert.visible = false;
        return true;
      }
    },

    outputHtml: function(){
      return `<vuetify-google-autocomplete
  :id="${this.id}"
  :append-icon="${this.appendIcon}"
  :clearable="${this.clearable}"
  :classname="${this.classname}"
  :country="[${this.country}]"
  :disabled="${this.disabled}"
  :enable-geolocation="${this.enableGeolocation}"
  :label="${this.labelText}"
  :placeholder="${this.placeholderText}"
  :prepend-icon="${this.prependIcon}"
  :required="${this.required}"
  :types="${this.types}"
  v-on:placechanged="${this.callbackFunction}">
</vuetify-google-autocomplete>`;
    },

    outputJsData: function(){
      return `data() {
  return {
    address: ${JSON.stringify(this.address)},
    appendIcon: '${this.appendIcon}',
    classname: '${this.classname}',
    clearable: '${this.clearable}',
    country: [${this.country}],
    disabled: ${this.disabled},
    enableGeolocation: ${this.enableGeolocation},
    id: '${this.id}',
    labelText: '${this.labelText}',
    prependIcon: '${this.prependIcon}',
    placeholderText: '${this.placeholderText}',
    required: '${this.required}',
    types: '${this.types}',
    
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
    * @param {String} id Input container ID
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
  },
});
