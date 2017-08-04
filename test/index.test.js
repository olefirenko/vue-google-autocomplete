import Vue from 'vue';
import Vuetify from 'vuetify';
import test from 'ava';
import googleStub from './helpers/google_stub';
import VuetifyGoogleAutocomplete from '../src/VuetifyGoogleAutocomplete.vue';

Vue.use(Vuetify);

window.google = global.google = googleStub();

test('that it has a mounted hook', t => {
    t.is(typeof VuetifyGoogleAutocomplete.mounted, 'function');
});

test('that it renders a parent div tag', t => {
    let Constructor = Vue.extend(VuetifyGoogleAutocomplete);

    let vm = new Constructor({ propsData: {
        'id': 'map'
    }}).$mount();

    t.is(vm.$el.nodeName, 'DIV');
    t.is(vm.$el._prevClass, 'input-group input-group--dirty input-group--append-icon input-group--placeholder input-group--text-field');
});

test('that it renders a label as child to parent div tag', t => {
    let Constructor = Vue.extend(VuetifyGoogleAutocomplete);

    let vm = new Constructor({ propsData: {
        'id': 'map'
    }}).$mount();

    t.is(vm.$el.children[0].nodeName, 'LABEL');
});

test('that it renders an input tag as grandchild to parent div tag', t => {
    let Constructor = Vue.extend(VuetifyGoogleAutocomplete);

    let vm = new Constructor({ propsData: {
        'id': 'map'
    }}).$mount();

    t.is(vm.$el.children[1].children[0].nodeName, 'INPUT');
    t.is(vm.$el.children[1].children[0].type, 'text');
});

test('that the input tag has the correct props', t => {
    let Constructor = Vue.extend(VuetifyGoogleAutocomplete);

    let vm = new Constructor({ propsData: {
        'name': 'map',
        'id': 'map',
        'classname': 'form-control',
        'placeholder': 'Start typing'
    }}).$mount();

    t.is(vm.$el.children[1].children[0].name, 'map');
    t.is(vm.$el.children[1].children[0].id, 'map');
    t.is(vm.$el.className, 'input-group input-group--dirty input-group--append-icon input-group--placeholder input-group--text-field form-control');
    t.is(vm.$el.children[1].children[0].placeholder, 'Start typing');
});
