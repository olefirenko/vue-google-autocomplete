import { createLocalVue, mount } from 'vue-test-utils';
import Vga from '@/vga/index';

const localVue = createLocalVue();
let mandatoryProps;

beforeEach(() => {
  mandatoryProps = {
    id: 'hellowWorld',
  };
});

describe('Ensure component data properties behave as expected', () => {
  describe('autocomplete', () => {
    test('Should have "null" as default', () => {
      const wrapper = mount(Vga, {
        localVue,
        propsData: mandatoryProps,
      });
      expect(wrapper.vm.autocomplete).toBeNull();
    });
  });

  describe('autocompleteText', () => {
    test('Should have "" as default', () => {
      const wrapper = mount(Vga, {
        localVue,
        propsData: mandatoryProps,
      });
      expect(wrapper.vm.autocompleteText).toBe('');
    });
  });

  describe('geolocateSet', () => {
    test('Should have "" as default', () => {
      const wrapper = mount(Vga, {
        localVue,
        propsData: mandatoryProps,
      });
      expect(wrapper.vm.geolocateSet).toBe(false);
    });
  });

  describe('loadInterval', () => {
    test('Should have "null" as default', () => {
      const wrapper = mount(Vga, {
        localVue,
        propsData: mandatoryProps,
      });
      expect(wrapper.vm.loadInterval).toBeNull();
    });
  });

  describe('vgaMapState', () => {
    test('Should have {"initMap": false} as default', () => {
      const wrapper = mount(Vga, {
        localVue,
        propsData: mandatoryProps,
      });
      expect(wrapper.vm.vgaMapState).toEqual({ initMap: false });
    });
  });
});
