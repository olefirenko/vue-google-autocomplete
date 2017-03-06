import Vue from 'vue';
import VueGoogleAutocomplete from './../../src/VueGoogleAutocomplete.vue';

const app = new Vue({
    el: '#app',

    components: { VueGoogleAutocomplete },

    data: {
        address: '' 
    },

    methods: {
        getAddressData: function (addressData) {
            this.address = addressData;
        }
    }
});