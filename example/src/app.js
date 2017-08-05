import Vue from 'vue';
import Vuetify from 'vuetify';
import VuetifyGoogleAutocomplete from './../../src/VuetifyGoogleAutocomplete.vue';

Vue.use(Vuetify);

const app = new Vue({
    el: '#app',

    components: { VuetifyGoogleAutocomplete },

    data: {
        vueGoogleAutocompleteLink: 'https://github.com/olefirenko/vue-google-autocomplete',
        gitHubLink: 'https://github.com/MadimetjaShika/vuetify-google-autocomplete',
        npmLink: 'https://www.npmjs.com/package/vuetify-google-autocomplete',
        address: {},
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

    methods: {
        /**
        * Callback method when the location is found.
        *
        * @param {Object} addressData Data of the found location
        * @param {Object} placeResultData PlaceResult object
        */
        getAddressData: function (addressData, placeResultData) {
            this.address = addressData;
        }
    }
});
