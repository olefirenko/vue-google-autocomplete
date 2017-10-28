import Vue from 'vue';
import Vuetify from 'vuetify';
import test from 'ava';
import googleStub from './helpers/google_stub';
import VuetifyGoogleAutocomplete from '../src/VuetifyGoogleAutocomplete.vue';

Vue.use(Vuetify);

window.google = global.google = googleStub();

test('test that it has a mounted hook', t => {
    t.is(typeof VuetifyGoogleAutocomplete.mounted, 'function');
});

test('test that it renders a parent div tag with correct classes', t => {
    let Constructor = Vue.extend(VuetifyGoogleAutocomplete);

    let vm = new Constructor({ propsData: {
        'id': 'map'
    }}).$mount();

    t.is(vm.$el.nodeName, 'DIV');
    t.is(vm.$el._prevClass, 'input-group input-group--hide-details theme--light input-group--text-field primary--text');
});

test('test that it renders an input-group div as child to parent div tag', t => {
    let Constructor = Vue.extend(VuetifyGoogleAutocomplete);

    let vm = new Constructor({ propsData: {
        'id': 'map'
    }}).$mount();

    t.is(vm.$el.children[0].nodeName, 'DIV');
    t.is(vm.$el.children[0]._prevClass, 'input-group__input');
});

test('test that it renders an input-group details div as child to parent div tag', t => {
    let Constructor = Vue.extend(VuetifyGoogleAutocomplete);

    let vm = new Constructor({ propsData: {
        'id': 'map'
    }}).$mount();

    t.is(vm.$el.children[1].nodeName, 'DIV');
    t.is(vm.$el.children[1]._prevClass, 'input-group__details');
});

test('test that it renders a div tag as grandchild to parent div tag', t => {
    let Constructor = Vue.extend(VuetifyGoogleAutocomplete);

    let vm = new Constructor({ propsData: {
        'id': 'map'
    }}).$mount();

    t.is(vm.$el.children[1].children[0].nodeName, 'DIV');
    // t.is(vm.$el.children[1].children[0].type, 'text');
});

test('test that the input tag has the correct props', t => {
    let Constructor = Vue.extend(VuetifyGoogleAutocomplete);

    let vm = new Constructor({ propsData: {
        'name': 'map',
        'id': 'map',
        'classname': 'form-control',
        'placeholder': 'Start typing'
    }}).$mount();

    t.is(vm.$el.children[0].children[0].name, 'map');
    t.is(vm.$el.children[0].children[0].id, 'map');
    t.is(vm.$el.className, 'input-group input-group--hide-details input-group--placeholder theme--light input-group--text-field primary--text form-control');
});

test('test that the input is disabled if disabled prop is given as true', t => {
    let Constructor = Vue.extend(VuetifyGoogleAutocomplete);

    let vm = new Constructor({ propsData: {
        'name': 'map',
        'id': 'map',
        'disabled': true
    }}).$mount();

    t.is(vm.$el.children[0].children[0].disabled, true);
});

test('test that the input is not disabled if disabled prop is not given', t => {
    let Constructor = Vue.extend(VuetifyGoogleAutocomplete);

    let vm = new Constructor({ propsData: {
        'name': 'map',
        'id': 'map',
    }}).$mount();

    t.is(vm.$el.children[0].children[0].disabled, false);
});
