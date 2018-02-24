import loadGoogleMaps from './helper';
import VuetifyGoogleAutocomplete from './VuetifyGoogleAutocomplete';

window.googeMapState = {
  initMap: false,
};

window.initGoogleMaps = () => {
  window.googeMapState.initMap = true;
};

VuetifyGoogleAutocomplete.install = (Vue, options) => {
  if (options.apiKey) {
    loadGoogleMaps(options.apiKey, options.version);
  }

  Vue.component(VuetifyGoogleAutocomplete.name, VuetifyGoogleAutocomplete);
};

export default VuetifyGoogleAutocomplete;
