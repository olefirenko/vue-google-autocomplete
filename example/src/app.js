import Vue from 'vue';
import VueGoogleAutocomplete from './../../src/VueGoogleAutocomplete.vue';

const app = new Vue({
    el: '#app',

    components: { VueGoogleAutocomplete },

    data: {
        address: ''
    },

    methods: {
        /**
        * When the location found
        * @param {Object} addressData Data of the found location
        * @param {Object} placeResultData PlaceResult object
        */
        getAddressData: function (addressData, placeResultData) {
            this.address = addressData;
        }
    }
});
