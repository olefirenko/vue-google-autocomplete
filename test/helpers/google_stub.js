export default function googleStub() {
  const google = {
      maps: {
        places: {
          Autocomplete: function () {
            return {
              addListener: function () { }
            }
          }
        },
      }
    };

  return google;
}
