# Vuetify Google Autocomplete

A Vuetify ready Vue.js (2.x) autosuggest component for the Google Maps Places API.

## Versions

Latest Stable: 1.1.0

Latest Dev Stable: 2.0.0-alpha.8

See [releases](https://github.com/MadimetjaShika/vuetify-google-autocomplete/releases) for details.

## Thanks

Huge thanks and credit goes to [@olefirenko](https://github.com/olefirenko) and contributors for creating [Vue Google Autocomplete](https://github.com/olefirenko/vue-google-autocomplete) from which this Vuetify ready version was inspired.

## Demo

Live Interactive demo: [madimetjashika.github.io/vuetify-google-autocomplete](https://madimetjashika.github.io/vuetify-google-autocomplete/)

## Installation

The easiest way to use Vuetify Google Autocomplete is to install it from **npm** or **yarn**.

```sh
npm i vuetify-google-autocomplete
```

Or

```sh
yarn add vuetify-google-autocomplete
```

### For version >= 2.0.0-alpha.2

Within your main.js or Vue entry point, import and initialise the component.

```javascript
import Vue from 'vue';
import VuetifyGoogleAutocomplete from 'vuetify-google-autocomplete';

Vue.use(VuetifyGoogleAutocomplete, {
  apiKey: '...', // Can also be an object. E.g, for Google Maps Premium API, pass `{ client: <YOUR-CLIENT-ID> }`
  version: '...', // Optional
});
```

### For version <= 1.1.0

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

## Usage

### For version >= 2.0.0-alpha.1

Simply start using the component in your HTML.

```html
<vuetify-google-autocomplete
    id="map"
    append-icon="search"
    disabled="true"
    placeholder="Start typing"
    v-on:placechanged="getAddressData"
>
</vuetify-google-autocomplete>
```

### For version <= 1.1.0

The Vuetify Google Autocomplete works out of the box by just including it.

```js
import VuetifyGoogleAutocomplete from 'vuetify-google-autocomplete'

```

In your template you can use this syntax:

```html
<vuetify-google-autocomplete
    id="map"
    append-icon="search"
    disabled="true"
    classname="form-control"
    placeholder="Start typing"
    v-on:placechanged="getAddressData"
>
</vuetify-google-autocomplete>
```

### Properties

> NB: This componenent implements the same props as those specified for [Vuetify Text Fields](https://vuetifyjs.com/components/text-fields) as at v1.0.3, **some** of which are listed below. Please see [Vuetify Text Fields](https://vuetifyjs.com/components/text-fields) for a complete list of available props.

#### id
Type: `String`

`required` ID for the input container.

#### append-icon
Type: `String`
Default: `null`

The icon to append to the end of the input field.

#### prepend-icon
Type: `String`
Default: `null`

The icon to prepend at the beginning of the input field.

#### classname
Type: `String`

Class to the input container.

#### placeholder
Type: `String`
Default: `Search Address`

The input field will get this placeholder text. Note that the input field will also get a label  with the same text.

#### disabled
Type: `Boolean`
Default: `false`

Sets the input as either disabled or not.

#### types
Type: `String`
Default: `address`

Types supported in place autocomplete requests. [More info](https://developers.google.com/places/supported_types#table3)

#### country
Type: `String`|`Array`
Default: null

Option to restrict the autocomplete search to a particular country. Countries must be passed as a two-character, ISO 3166-1 Alpha-2 compatible country code (i.e. "br", "sg", "fr"). You can provide a single one, or an array of up to 5 country code strings.
Note: this is a dynamic property. You must pass it as `:country=""` to your component, otherwise it won't work. For example:
```html
<vuetify-google-autocomplete :country="['au', 'nz']"></vuetify-google-autocomplete>
```
will restrict the countries to Australia and New Zealand.

#### enable-geolocation
Type: `Boolean`
Default: `false`

Bias the search towards user current location.

### Events
The component emits next events, which you can listen in your application:

#### placechanged
Gets triggered when the address data got obtained. This data is available on the returned objects:
* `street_number`, `route`, `locality`, `administrative_area_level_1`, `country`, `postal_code`, `latitude`, `longitude`.
* `place` - [PlaceResult object](https://developers.google.com/maps/documentation/javascript/reference#PlaceResult) is available as second parameter.

#### no-results-found
Gets triggered when a user entered the name of a Place that was not suggested and pressed the Enter key, or the Place Details request failed.

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


### Example

Please note that you need to provide what method will listen (`v-on:placechanged`) to an event when the address data is obtained.

```html
<template>
    <div>
        <h2>Your Address</h2>
        <vuetify-google-autocomplete
            ref="address"
            id="map"
            classname="form-control"
            placeholder="Please type your address"
            v-on:placechanged="getAddressData"
            country="sg"
        >
        </vuetify-google-autocomplete>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
              address: ''
            }
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
            }
        }
    }
</script>
```

## Contributing

Lets make this an awesome vuetify component! Collaborations and contributions are welcome!

[code of conduct]: https://thoughtbot.com/open-source-code-of-conduct

### Contribution Guidlines

Have a read through the [Contributor Code of Conduct](https://github.com/MadimetjaShika/vuetify-google-autocomplete/blob/master/CODE_OF_CONDUCT.md). Pretty standard, nothing hectic.

Fork, then clone the repo:

    git clone git@github.com:your-username/vuetify-google-autocomplete.git

Install dependencies with **npm**

    npm install 
    
   or **yarn**
    
    yarn


Make your changes and ensure tests are written for your changes. Ensure that your changes pass all the tests:

    npm run test
    
If relevant, please ensure that you update the README and demo/example accordingly.

Push to your fork and [submit a pull request](https://github.com/MadimetjaShika/vuetify-google-autocomplete/compare/).

If all is well, your changes will be merged timeously!

Feel free to also post issues for bug fixes or enhancements or anything.
