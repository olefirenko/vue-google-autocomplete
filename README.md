# Vue Google Autocomplete

A Vue.js autosuggest component for the Google Maps Places API.

## Demo

Live demo: [olefirenko.github.io/vue-google-autocomplete](https://olefirenko.github.io/vue-google-autocomplete/)

## Benefits

I have tried to use different Vue Google Autocomplete components, but did not find any that would solve my needs. So below I would like to mention what you can get from this exact component:

* Load more than one autocompletion inputs (I could not achieve this with existing vue components)
* Getting geolocation data (latitude, longitude) for found address object along with other address data (country, city, state, street, house number, zip code). So no need to do additional geocode request on backend side.
* No external dependencies
* You can get access to underlying [PlaceResult object](https://developers.google.com/maps/documentation/javascript/reference#PlaceResult) to get more details about found location.

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

To obtain API key please visit the [Google Developer Console](https://console.developers.google.com). The API's that you have to enable in your Google API Manager Dashboard are [Google Maps Geocoding API](https://developers.google.com/maps/documentation/geocoding/start), [Google Places API Web Service](https://developers.google.com/places/web-service/) and [Google Maps Javascript API] (https://developers.google.com/maps/documentation/javascript/).

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
import VueGoogleAutocomplete from 'vue-google-autocomplete'

```

In your template you can use this syntax:
```
<vue-google-autocomplete
    id="map"
    classname="form-control"
    placeholder="Start typing"
    v-on:placechanged="getFromData"
>
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

Types supported in place autocomplete requests. [More info] (https://developers.google.com/places/supported_types#table3)


#### enable-geolocation
Type: `Boolean`
Default: `false`

Bias the search towards user current location.



### Example

Please note that you need to provide what method will listen (`v-on:placechanged`) to an event when the address data is obtained.

```js
<template>
    <div>
        <h2>Your Address</h2>

        <vue-google-autocomplete
            id="map"
            classname="form-control"
            placeholder="Please type your address"
            v-on:placechanged="getAddressData"
        >
        </vue-google-autocomplete>
    </div>
</template>

<script>
    import VueGoogleAutocomplete from 'vue-google-autocomplete'

    export default {
        components: { VueGoogleAutocomplete },

        data: function () {
            return {
              address: ''
            }
        },

        methods: {
            getAddressData: function (addressData) {
                this.address = addressData;
            }
        }
    }
</script>
```

