import Vue from 'vue';
import Vuetify from 'vuetify';
import VuetifyGoogleAutocomplete from './../../src/VuetifyGoogleAutocomplete.vue';

Vue.use(Vuetify);

const app = new Vue({
    el: '#app',

    components: { VuetifyGoogleAutocomplete },

    data: {
        address: 'N/A',
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
