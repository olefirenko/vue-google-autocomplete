import Vue from 'vue';
import test from 'ava';
import googleStub from './helpers/google_stub';
import VueGoogleAutocomplete from '../src/VueGoogleAutocomplete.vue';

window.google = global.google = googleStub();

test('that it has a mounted hook', t => {
    t.is(typeof VueGoogleAutocomplete.mounted, 'function');
});

test('that it renders input', t => {
    let Constructor = Vue.extend(VueGoogleAutocomplete);

    let vm = new Constructor({ propsData: {
        'id': 'map'
    }}).$mount();

    t.is(vm.$el.nodeName, 'INPUT');
    t.is(vm.$el.type, 'text');
});

test('that it renders proper props', t => {
    let Constructor = Vue.extend(VueGoogleAutocomplete);

    let vm = new Constructor({ propsData: {
        'id': 'map',
        'classname': 'form-control',
        'placeholder': "Start typing"
    }}).$mount();

    t.is(vm.$el.placeholder, "Start typing");
    t.is(vm.$el.className, 'form-control');
    t.is(vm.$el.id, 'map');
});
