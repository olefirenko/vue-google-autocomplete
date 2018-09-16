import { createLocalVue, mount } from 'vue-test-utils';
import sinon from 'sinon';
import Vga from '@/vga/index';

const localVue = createLocalVue();

const propData = {
  id: 'input-field-id',
};
let wrapper = null;
beforeEach(() => {
  jest.resetModules();
  delete window.google;
  delete window.maps;
  wrapper = mount(Vga, {
    localVue,
    propsData: propData,
  });
});

describe('Ensure Has correct init meta data', () => {
  test('Is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('Component should have correct name', () => {
    expect(wrapper.name()).toBe('vuetify-google-autocomplete');
  });
});

describe('Ensure Lifecycle hooks behave as expected', () => {
  describe('Created', () => {
    test('Should set autocompleteText propertly if v-model provided', () => {
      const props = {
        id: 'a prop',
        value: 'Default v-model value',
      };
      wrapper = mount(Vga, {
        localVue,
        propsData: props,
      });
      expect(wrapper.vm.autocompleteText).toBe('Default v-model value');
    });

    test('Should set autocompleteText propertly if v-model NOT provided', () => {
      expect(wrapper.vm.autocompleteText).toBe('');
    });
  });

  describe('Mounted', () => {
    test('Should not call setupGoogle() when window.google and window.maps are not set', () => {
      const setupGoogleSpy = sinon.spy();
      wrapper = mount(Vga, {
        localVue,
        propsData: propData,
        methods: {
          setupGoogle: setupGoogleSpy,
        },
      });

      expect(setupGoogleSpy.called).toBe(false);
    });

    test('Should not call setupGoogle() when window.google is set but window.maps is not', () => {
      window.google = {};
      const setupGoogleSpy = sinon.spy();
      wrapper = mount(Vga, {
        localVue,
        propsData: propData,
        methods: {
          setupGoogle: setupGoogleSpy,
        },
      });

      expect(setupGoogleSpy.called).toBe(true);
    });

    test('Should call setupGoogle() when window.google is set and window.maps is set', () => {
      window.google = {};
      window.maps = {};
      const setupGoogleSpy = sinon.spy();
      wrapper = mount(Vga, {
        localVue,
        propsData: propData,
        methods: {
          setupGoogle: setupGoogleSpy,
        },
      });

      expect(setupGoogleSpy.called).toBe(true);
    });
  });
});
