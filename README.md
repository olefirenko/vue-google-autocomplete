# Vue Google Autocomplete

[![npm version](https://badgen.net/npm/v/vue-google-autocomplete)](https://www.npmjs.com/package/vue-google-autocomplete) [![sponsored_by](https://badgen.net/badge/sponsored%20by/%F0%9F%A4%96Easy-Peasy.AI/f2a)](https://Easy-Peasy.AI/?utm_source=npm&utm_medium=badge&utm_campaign=vue_google_autocomplete)

A Vue.js (2.x) autosuggest component for the Google Maps Places API.

## Demo

Live demo: [olefirenko.github.io/vue-google-autocomplete](https://olefirenko.github.io/vue-google-autocomplete/)

## Benefits

I have tried to use different Vue Google Autocomplete components, but did not find any that would solve my needs. So below I would like to mention what you can get from this exact component:

- Load more than one autocompletion inputs (I could not achieve this with existing vue components)
- Getting geolocation data (latitude, longitude) for found address object along with other address data (country, city, state, county, street, house number, zip code). So no need to do additional geocode request on backend side.
- No external dependencies
- You can get access to underlying [PlaceResult object](https://developers.google.com/maps/documentation/javascript/reference#PlaceResult) to get more details about found location. You are able to specify the specific fields you want to fetch from the PlaceResult object.
- You can limit results to specific country or use users geolocation data

## Installation

This component uses Google Maps Places API to get geo suggests for autocompletion, so you have to include the Google Maps Places API in the `<head>` of your HTML:

```html
<!DOCTYPE html>
<html>
  <head>
    …
    <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY_HERE&libraries=places"></script>
  </head>
  <body>
    …
  </body>
</html>
```

To obtain API key please visit the [Google Developer Console](https://console.developers.google.com). The API's that you have to enable in your Google API Manager Dashboard are [Google Maps Geocoding API](https://developers.google.com/maps/documentation/geocoding/start), [Google Places API Web Service](https://developers.google.com/places/web-service/) and [Google Maps Javascript API](https://developers.google.com/maps/documentation/javascript/).

The easiest way to use Vue Google Autocomplete is to install it from **npm** or **yarn**.

```sh
npm install vue-google-autocomplete --save
```

Or

```sh
yarn add vue-google-autocomplete
```

## Usage

The Vue Google Autocomplete works out of the box by just including it.

```js
import VueGoogleAutocomplete from "vue-google-autocomplete";
```

In your template you can use this syntax:

```html
<vue-google-autocomplete id="map" classname="form-control" placeholder="Start typing" v-on:placechanged="getAddressData">
</vue-google-autocomplete>
```

### Properties

#### id

Type: `String`

`required` ID for the input container.

#### classname

Type: `String`

Class to the input container.

#### placeholder

Type: `String`
Default: `Start typing`

The input field will get this placeholder text.

#### types

Type: `String`
Default: `address`

Types supported in place autocomplete requests. [More info](https://developers.google.com/places/supported_types#table3)

You may find [this example](#correct-usage-of-the-types-parameter) helpful.

#### fields

Type: `Array`
Default: `['address_components', 'adr_address', 'alt_id', 'formatted_address', 'geometry', 'icon', 'id', 'name', 'permanently_closed', 'photo', 'place_id', 'scope', 'type', 'url', 'utc_offset', 'vicinity']`

Set which data fields to return in the PlaceResult from the Google Autocomplete API when the user selects a place. [Google Autocomplete API by default returns all available data fields](https://developers.google.com/maps/documentation/javascript/places-autocomplete#get_place_information) for the selected place, which may result in additional charges and thus the API users might pay for data they don't need. This package sets a sensible default for the fields value, fetching only the Basic Data fields which do not result in any additional charges. If you want to fetch other fields in addition to the default ones, make sure that the array you pass in to the `fields` prop contains the default fields listed above, and not only the additional fields you want to fetch.

Refer to [this page](https://developers.google.com/maps/billing/understanding-cost-of-use#data-skus) for more details on how certain data fields are billed.

#### country

Type: `String`|`Array`
Default: null

Option to restrict the autocomplete search to a particular country. Countries must be passed as a two-character, ISO 3166-1 Alpha-2 compatible country code (i.e. "br", "sg", "fr"). You can provide a single one, or an array of up to 5 country code strings.
Note: this is a dynamic property. You must pass it as `:country=""` to your component, otherwise it won't work. For example:

```html
<vue-google-autocomplete :country="['au', 'nz']"></vue-google-autocomplete>
```

will restrict the countries to Australia and New Zealand.

#### enable-geolocation

Type: `Boolean`
Default: `false`

Bias the search towards user current location.

#### geolocationOptions

Type: [`Object`](https://developer.mozilla.org/en/docs/Web/API/PositionOptions)
Default: `{}`

Allow to configure Options for [`navigator.getCurrentPosition`](https://developer.mozilla.org/en/docs/Web/API/Geolocation/getCurrentPosition)

### Events

The component emits next events, which you can listen in your application:

#### placechanged

Gets triggered when the address data got obtained. This data is available on the returned objects:

- `street_number`, `route`, `locality`, `administrative_area_level_1`, `country`, `postal_code`, `latitude`, `longitude`.
- `place` - [PlaceResult object](https://developers.google.com/maps/documentation/javascript/reference#PlaceResult) is available as second parameter.
- `id` a String representing the ID of the autocomplete that triggered the event.

#### no-results-found

Gets triggered when a user entered the name of a Place that was not suggested and pressed the Enter key, or the Place Details request failed.

- `object` an object with a key _name_ representing the user's input.

#### focus

Gets triggered when the autocomplete input field receives focus.

#### blur

Gets triggered when the autocomplete input field loses focus.

#### inputChange

Gets triggered every time autocomplete input got changed

#### change

Gets triggered when the autocomplete results got changed

#### keypress

Gets triggered when a key gets pressed

#### error

Gets triggered when an error is encountered

### Exposed component functions

These functions are accessible by setting "ref" on the component ([Refs documentation](https://vuejs.org/v2/guide/components.html#Child-Component-Refs)). See example below how to use these functions.

#### clear()

Call to clear the value of the user input.

#### focus()

Call focus to focus on the element

#### blur()

Call blur to blur (unfocus) the element

#### update(value)

Call to update the user input with a new value

#### updateCoordinates([latlng](https://developers.google.com/maps/documentation/javascript/reference#LatLng))

Call to force coordinates and update the input accordingly

#### geolocate()

Call to retrieve current position from `navigator` and update the input accordingly

### Example

Please note that you need to provide what method will listen (`v-on:placechanged`) to an event when the address data is obtained.

```html
<template>
  <div>
    <h2>Your Address</h2>

    <vue-google-autocomplete
      ref="address"
      id="map"
      classname="form-control"
      placeholder="Please type your address"
      v-on:placechanged="getAddressData"
      country="sg"
    >
    </vue-google-autocomplete>
  </div>
</template>

<script>
  import VueGoogleAutocomplete from "vue-google-autocomplete";

  export default {
    components: { VueGoogleAutocomplete },

    data: function () {
      return {
        address: "",
      };
    },

    mounted() {
      // To demonstrate functionality of exposed component functions
      // Here we make focus on the user input
      this.$refs.address.focus();
    },

    methods: {
      /**
       * When the location found
       * @param {Object} addressData Data of the found location
       * @param {Object} placeResultData PlaceResult object
       * @param {String} id Input container ID
       */
      getAddressData: function (addressData, placeResultData, id) {
        this.address = addressData;
      },
    },
  };
</script>
```

#### Correct usage of the types parameter

The example below shows the correct usage of the `types` parameter, when limiting the search to cities:

```vue
<vue-google-autocomplete
  id="map2"
  ref="toAddress"
  classname="form-control"
  placeholder="Start typing"
  v-on:placechanged="getToData"
  types="(cities)"
  country="us"
>
</vue-google-autocomplete>
```

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://olefyrenko.com/"><img src="https://avatars.githubusercontent.com/u/5434459?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Dmytro Olefyrenko</b></sub></a><br /><a href="https://github.com/olefirenko/vue-google-autocomplete/commits?author=olefirenko" title="Code">💻</a></td>
    <td align="center"><a href="http://www.daryledesilva.com/"><img src="https://avatars.githubusercontent.com/u/4393436?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Daryle Dale De Silva</b></sub></a><br /><a href="https://github.com/olefirenko/vue-google-autocomplete/commits?author=daryledesilva" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/DjilanoS"><img src="https://avatars.githubusercontent.com/u/84568557?v=4?s=100" width="100px;" alt=""/><br /><sub><b>DjilanoS</b></sub></a><br /><a href="#maintenance-DjilanoS" title="Maintenance">🚧</a></td>
    <td align="center"><a href="https://github.com/juanvillegas"><img src="https://avatars.githubusercontent.com/u/773149?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Juan Villegas</b></sub></a><br /><a href="https://github.com/olefirenko/vue-google-autocomplete/commits?author=juanvillegas" title="Code">💻</a></td>
    <td align="center"><a href="https://houmaan.dev/"><img src="https://avatars.githubusercontent.com/u/10440022?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Hugh Saffar</b></sub></a><br /><a href="https://github.com/olefirenko/vue-google-autocomplete/commits?author=hughsaffar" title="Code">💻</a></td>
    <td align="center"><a href="https://www.lilium.dev/"><img src="https://avatars.githubusercontent.com/u/8971846?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Ahmed</b></sub></a><br /><a href="https://github.com/olefirenko/vue-google-autocomplete/commits?author=liliumdev" title="Code">💻</a></td>
    <td align="center"><a href="https://ankurk91.github.io/"><img src="https://avatars.githubusercontent.com/u/6111524?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Ankur Kumar</b></sub></a><br /><a href="https://github.com/olefirenko/vue-google-autocomplete/commits?author=ankurk91" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/ArturGrigio"><img src="https://avatars.githubusercontent.com/u/6424589?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Artur Grigio</b></sub></a><br /><a href="https://github.com/olefirenko/vue-google-autocomplete/commits?author=ArturGrigio" title="Code">💻</a></td>
    <td align="center"><a href="https://bhrutledge.com/"><img src="https://avatars.githubusercontent.com/u/1326704?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Brian Rutledge</b></sub></a><br /><a href="https://github.com/olefirenko/vue-google-autocomplete/commits?author=bhrutledge" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/bryanjamesmiller"><img src="https://avatars.githubusercontent.com/u/8781182?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Bryan Miller</b></sub></a><br /><a href="https://github.com/olefirenko/vue-google-autocomplete/commits?author=bryanjamesmiller" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/cgs"><img src="https://avatars.githubusercontent.com/u/16057?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Chris Sepic</b></sub></a><br /><a href="https://github.com/olefirenko/vue-google-autocomplete/commits?author=cgs" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/mrgix"><img src="https://avatars.githubusercontent.com/u/6233470?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Dennis van Breukelen</b></sub></a><br /><a href="https://github.com/olefirenko/vue-google-autocomplete/commits?author=mrgix" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/Eoksni"><img src="https://avatars.githubusercontent.com/u/2010503?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Dmitry Mazurok</b></sub></a><br /><a href="https://github.com/olefirenko/vue-google-autocomplete/commits?author=Eoksni" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/julianfox"><img src="https://avatars.githubusercontent.com/u/1648714?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Julian Renard</b></sub></a><br /><a href="https://github.com/olefirenko/vue-google-autocomplete/commits?author=julianfox" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="http://leonardoarroyo.com/"><img src="https://avatars.githubusercontent.com/u/4290407?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Leonardo Arroyo</b></sub></a><br /><a href="https://github.com/olefirenko/vue-google-autocomplete/commits?author=leonardoarroyo" title="Code">💻</a></td>
    <td align="center"><a href="https://probil.github.io/"><img src="https://avatars.githubusercontent.com/u/6773202?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Max Lyashuk</b></sub></a><br /><a href="https://github.com/olefirenko/vue-google-autocomplete/commits?author=probil" title="Code">💻</a></td>
    <td align="center"><a href="https://mgibowski.dev/"><img src="https://avatars.githubusercontent.com/u/617315?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Michał Gibowski</b></sub></a><br /><a href="https://github.com/olefirenko/vue-google-autocomplete/commits?author=mgibowski" title="Code">💻</a></td>
    <td align="center"><a href="https://mickeyschwab.com/"><img src="https://avatars.githubusercontent.com/u/2643491?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Mickey Schwab</b></sub></a><br /><a href="https://github.com/olefirenko/vue-google-autocomplete/commits?author=mickeyschwab" title="Code">💻</a></td>
    <td align="center"><a href="http://www.lelaboratoiredeco.fr/"><img src="https://avatars.githubusercontent.com/u/3156035?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Romain Léger</b></sub></a><br /><a href="https://github.com/olefirenko/vue-google-autocomplete/commits?author=rleger" title="Code">💻</a></td>
    <td align="center"><a href="https://skmbr.uk/"><img src="https://avatars.githubusercontent.com/u/1945312?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Simon Kimber</b></sub></a><br /><a href="https://github.com/olefirenko/vue-google-autocomplete/commits?author=skmbr" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/syffs"><img src="https://avatars.githubusercontent.com/u/4192037?v=4?s=100" width="100px;" alt=""/><br /><sub><b>syffs</b></sub></a><br /><a href="https://github.com/olefirenko/vue-google-autocomplete/commits?author=syffs" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="http://yann-bertrand.fr/"><img src="https://avatars.githubusercontent.com/u/5855339?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Yann Bertrand</b></sub></a><br /><a href="https://github.com/olefirenko/vue-google-autocomplete/commits?author=yannbertrand" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/ciaasteczkowy"><img src="https://avatars.githubusercontent.com/u/509463?v=4?s=100" width="100px;" alt=""/><br /><sub><b>ciaasteczkowy</b></sub></a><br /><a href="https://github.com/olefirenko/vue-google-autocomplete/commits?author=ciaasteczkowy" title="Code">💻</a></td>
    <td align="center"><a href="https://www.linkedin.com/in/cyril-rabaux-90141a82/"><img src="https://avatars.githubusercontent.com/u/7647886?v=4?s=100" width="100px;" alt=""/><br /><sub><b>crabaux</b></sub></a><br /><a href="https://github.com/olefirenko/vue-google-autocomplete/commits?author=crabaux" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
