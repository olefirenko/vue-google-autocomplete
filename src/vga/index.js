import loadGoogleMaps from './helper';
import VuetifyGoogleAutocomplete from './VuetifyGoogleAutocomplete';

// Prevent window from being accessed within non-browser context.
if (typeof window !== 'undefined') {
  window.vgaMapState = {
    initMap: false,
  };

  window.initVGAMaps = () => {
    window.vgaMapState.initMap = true;
  };
}

VuetifyGoogleAutocomplete.install = (Vue, options) => {
  if (options.apiKey) {
    loadGoogleMaps(options.apiKey, options.version);
  }

  Vue.component(VuetifyGoogleAutocomplete.name, VuetifyGoogleAutocomplete);
};

export default VuetifyGoogleAutocomplete;
