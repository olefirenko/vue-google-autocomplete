/**
 * Loads the Google Map API. Code adopted from {@link https://github.com/xkjyeah/vue-google-maps}
 *
 * @param apiKey    API Key, or object with the URL parameters. For example
 *                  to use Google Maps Premium API, pass
 *                    `{ client: <YOUR-CLIENT-ID> }`.
 *                  You may pass the version (as `v`) as a property on this parameter.
 * @param version   Google for Maps version
 *
 * Adapted from {@link https://github.com/xkjyeah/vue-google-maps}
 */
const loadGoogleMaps = (apiKey, version) => {
  try {
    // If not within browser context, do not continue processing.
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return;
    }

    if (typeof window.google === 'object' && typeof window.google.maps === 'object'){
      if (typeof window.google.maps.places === 'object') {
        return; // google is already loaded, don't try to load it again to prevent errors
      }

      throw new Error('Google is already loaded, but does not contain the places API.');
    }

    if (!window.vgaMapState.initMap) {
      const googleMapScript = document.createElement('SCRIPT');

      // Allow apiKey to be an object.
      // This is to support more esoteric means of loading Google Maps,
      // such as Google for business
      // https://developers.google.com/maps/documentation/javascript/get-api-key#premium-auth
      const options = {};
      if (typeof apiKey === 'string') {
        options.key = apiKey;
      } else if (typeof apiKey === 'object') {
        Object.keys(apiKey).forEach((key) => {
          options[key] = apiKey[key];
        });
      } else {
        throw new Error('apiKey should either be a string or an object');
      }

      options.libraries = 'places';
      options.callback = 'initVGAMaps';

      const parameters = Object.keys(options).map(key => `${encodeURIComponent(key)}=${encodeURIComponent(options[key])}`)
        .join('&');

      let url = `https://maps.googleapis.com/maps/api/js?${parameters}`;

      if (version) {
        url = `${url}&v=${version}`;
      }

      googleMapScript.setAttribute('src', url);
      googleMapScript.setAttribute('async', '');
      googleMapScript.setAttribute('defer', '');
      document.body.appendChild(googleMapScript);
    } else {
      throw new Error('Vuetify google autocomplete loaded multiple times.');
    }
  } catch (exception) {
    throw new Error('Vuetify google autocomplete load error: ', exception);
  }
};

export default loadGoogleMaps;
