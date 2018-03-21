export default function googleStub() {
  const google = {
      maps: {
        places: {
          Autocomplete: function () {
            return {
              addListener: function () { }
            }
          },
          Geocoder: function () {
            return {
              geocode: function () { }
            }
          }
        },
      }
    };

  return google;
}
