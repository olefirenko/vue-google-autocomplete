# Vuetify Google Autocomplete

[![Build Status](https://travis-ci.org/MadimetjaShika/vuetify-google-autocomplete.svg?branch=dev)](https://travis-ci.org/MadimetjaShika/vuetify-google-autocomplete)

For more detailed HTML output of the JSDocs, refer to the ``./docs`` directory.

<a name="module_vuetify-google-autocomplete"></a>

## vuetify-google-autocomplete
**Author**: Madimetja Shika <madi@mjshika.xyz>  

* [vuetify-google-autocomplete](#module_vuetify-google-autocomplete)
    * [.props](#module_vuetify-google-autocomplete.props)
        * [.addressComponents](#module_vuetify-google-autocomplete.props.addressComponents)
        * [.append-icon](#module_vuetify-google-autocomplete.props.append-icon) : <code>String</code>
        * [.append-icon-cb](#module_vuetify-google-autocomplete.props.append-icon-cb) : <code>function</code>
        * [.auto-grow](#module_vuetify-google-autocomplete.props.auto-grow) : <code>Boolean</code>
        * [.autofocus](#module_vuetify-google-autocomplete.props.autofocus) : <code>Boolean</code>
        * [.box](#module_vuetify-google-autocomplete.props.box) : <code>Boolean</code>
        * [.browserAutocomplete](#module_vuetify-google-autocomplete.props.browserAutocomplete) : <code>String</code>
        * [.clearable](#module_vuetify-google-autocomplete.props.clearable) : <code>Boolean</code>
        * [.color](#module_vuetify-google-autocomplete.props.color) : <code>String</code>
        * [.counter](#module_vuetify-google-autocomplete.props.counter) : <code>Boolean</code> \| <code>Number</code> \| <code>String</code>
        * [.country](#module_vuetify-google-autocomplete.props.country) : <code>String</code> \| <code>Array</code>
        * [.dark](#module_vuetify-google-autocomplete.props.dark) : <code>Boolean</code>
        * [.disabled](#module_vuetify-google-autocomplete.props.disabled) : <code>Boolean</code>
        * [.dont-fill-mask-blanks](#module_vuetify-google-autocomplete.props.dont-fill-mask-blanks) : <code>Boolean</code>
        * [.enable-geolocation](#module_vuetify-google-autocomplete.props.enable-geolocation) : <code>Boolean</code>
        * [.error](#module_vuetify-google-autocomplete.props.error) : <code>Boolean</code>
        * [.error-messages](#module_vuetify-google-autocomplete.props.error-messages) : <code>Array</code>
        * [.flat](#module_vuetify-google-autocomplete.props.flat) : <code>Boolean</code>
        * [.full-width](#module_vuetify-google-autocomplete.props.full-width) : <code>Boolean</code>
        * [.hide-details](#module_vuetify-google-autocomplete.props.hide-details) : <code>Boolean</code>
        * [.hint](#module_vuetify-google-autocomplete.props.hint) : <code>String</code>
        * [.id](#module_vuetify-google-autocomplete.props.id) : <code>String</code>
        * [.label](#module_vuetify-google-autocomplete.props.label) : <code>String</code>
        * [.light](#module_vuetify-google-autocomplete.props.light) : <code>Boolean</code>
        * [.loading](#module_vuetify-google-autocomplete.props.loading) : <code>Boolean</code> \| <code>String</code>
        * [.mask](#module_vuetify-google-autocomplete.props.mask) : <code>Object</code> \| <code>String</code>
        * [.multi-line](#module_vuetify-google-autocomplete.props.multi-line) : <code>Boolean</code>
        * [.no-resize](#module_vuetify-google-autocomplete.props.no-resize) : <code>Boolean</code>
        * [.outline](#module_vuetify-google-autocomplete.props.outline) : <code>Boolean</code>
        * [.persistent-hint](#module_vuetify-google-autocomplete.props.persistent-hint) : <code>Boolean</code>
        * [.placeholder](#module_vuetify-google-autocomplete.props.placeholder) : <code>String</code>
        * [.placeName](#module_vuetify-google-autocomplete.props.placeName) : <code>Boolean</code>
        * [.prefix](#module_vuetify-google-autocomplete.props.prefix) : <code>String</code>
        * [.prepend-icon](#module_vuetify-google-autocomplete.props.prepend-icon) : <code>String</code>
        * [.prepend-icon-cb](#module_vuetify-google-autocomplete.props.prepend-icon-cb) : <code>function</code>
        * [.readonly](#module_vuetify-google-autocomplete.props.readonly) : <code>Boolean</code>
        * [.required](#module_vuetify-google-autocomplete.props.required) : <code>Boolean</code>
        * [.return-masked-value](#module_vuetify-google-autocomplete.props.return-masked-value) : <code>Boolean</code>
        * [.reverse](#module_vuetify-google-autocomplete.props.reverse) : <code>Boolean</code>
        * [.row-height](#module_vuetify-google-autocomplete.props.row-height) : <code>Number</code> \| <code>String</code>
        * [.rows](#module_vuetify-google-autocomplete.props.rows) : <code>Number</code> \| <code>String</code>
        * [.rules](#module_vuetify-google-autocomplete.props.rules) : <code>Array</code>
        * [.single-line](#module_vuetify-google-autocomplete.props.single-line) : <code>Boolean</code>
        * [.solo](#module_vuetify-google-autocomplete.props.solo) : <code>Boolean</code>
        * [.solo-inverted](#module_vuetify-google-autocomplete.props.solo-inverted) : <code>Boolean</code>
        * [.spellcheck](#module_vuetify-google-autocomplete.props.spellcheck) : <code>String</code>
        * [.suffix](#module_vuetify-google-autocomplete.props.suffix) : <code>String</code>
        * [.tabindex](#module_vuetify-google-autocomplete.props.tabindex) : <code>\*</code>
        * [.textarea](#module_vuetify-google-autocomplete.props.textarea) : <code>Boolean</code>
        * [.toggle-keys](#module_vuetify-google-autocomplete.props.toggle-keys) : <code>Array</code>
        * [.type](#module_vuetify-google-autocomplete.props.type) : <code>String</code>
        * [.types](#module_vuetify-google-autocomplete.props.types) : <code>String</code>
        * [.validate-on-blur](#module_vuetify-google-autocomplete.props.validate-on-blur) : <code>Boolean</code>
        * [.value](#module_vuetify-google-autocomplete.props.value) : <code>String</code>
    * [.data](#module_vuetify-google-autocomplete.data)
    * [.methods](#module_vuetify-google-autocomplete.methods)
    * [.created](#module_vuetify-google-autocomplete.created)
    * [.mounted](#module_vuetify-google-autocomplete.mounted)
    * [.destroyed](#module_vuetify-google-autocomplete.destroyed)
    * [.render](#module_vuetify-google-autocomplete.render)
    * [.watch](#module_vuetify-google-autocomplete.watch)
        * [.autocompleteText()](#module_vuetify-google-autocomplete.watch.autocompleteText)
        * [.country()](#module_vuetify-google-autocomplete.watch.country)
        * [.enableGeolocation()](#module_vuetify-google-autocomplete.watch.enableGeolocation)
        * [.types()](#module_vuetify-google-autocomplete.watch.types)
    * [.name](#module_vuetify-google-autocomplete.name)
    * [.autocapitalize](#module_vuetify-google-autocomplete.autocapitalize) : <code>Boolean</code>
    * [.autocorrect](#module_vuetify-google-autocomplete.autocorrect) : <code>Boolean</code>

<a name="module_vuetify-google-autocomplete.props"></a>

### vuetify-google-autocomplete.props
Exposed component props.

**Kind**: static mixin of [<code>vuetify-google-autocomplete</code>](#module_vuetify-google-autocomplete)  

* [.props](#module_vuetify-google-autocomplete.props)
    * [.addressComponents](#module_vuetify-google-autocomplete.props.addressComponents)
    * [.append-icon](#module_vuetify-google-autocomplete.props.append-icon) : <code>String</code>
    * [.append-icon-cb](#module_vuetify-google-autocomplete.props.append-icon-cb) : <code>function</code>
    * [.auto-grow](#module_vuetify-google-autocomplete.props.auto-grow) : <code>Boolean</code>
    * [.autofocus](#module_vuetify-google-autocomplete.props.autofocus) : <code>Boolean</code>
    * [.box](#module_vuetify-google-autocomplete.props.box) : <code>Boolean</code>
    * [.browserAutocomplete](#module_vuetify-google-autocomplete.props.browserAutocomplete) : <code>String</code>
    * [.clearable](#module_vuetify-google-autocomplete.props.clearable) : <code>Boolean</code>
    * [.color](#module_vuetify-google-autocomplete.props.color) : <code>String</code>
    * [.counter](#module_vuetify-google-autocomplete.props.counter) : <code>Boolean</code> \| <code>Number</code> \| <code>String</code>
    * [.country](#module_vuetify-google-autocomplete.props.country) : <code>String</code> \| <code>Array</code>
    * [.dark](#module_vuetify-google-autocomplete.props.dark) : <code>Boolean</code>
    * [.disabled](#module_vuetify-google-autocomplete.props.disabled) : <code>Boolean</code>
    * [.dont-fill-mask-blanks](#module_vuetify-google-autocomplete.props.dont-fill-mask-blanks) : <code>Boolean</code>
    * [.enable-geolocation](#module_vuetify-google-autocomplete.props.enable-geolocation) : <code>Boolean</code>
    * [.error](#module_vuetify-google-autocomplete.props.error) : <code>Boolean</code>
    * [.error-messages](#module_vuetify-google-autocomplete.props.error-messages) : <code>Array</code>
    * [.flat](#module_vuetify-google-autocomplete.props.flat) : <code>Boolean</code>
    * [.full-width](#module_vuetify-google-autocomplete.props.full-width) : <code>Boolean</code>
    * [.hide-details](#module_vuetify-google-autocomplete.props.hide-details) : <code>Boolean</code>
    * [.hint](#module_vuetify-google-autocomplete.props.hint) : <code>String</code>
    * [.id](#module_vuetify-google-autocomplete.props.id) : <code>String</code>
    * [.label](#module_vuetify-google-autocomplete.props.label) : <code>String</code>
    * [.light](#module_vuetify-google-autocomplete.props.light) : <code>Boolean</code>
    * [.loading](#module_vuetify-google-autocomplete.props.loading) : <code>Boolean</code> \| <code>String</code>
    * [.mask](#module_vuetify-google-autocomplete.props.mask) : <code>Object</code> \| <code>String</code>
    * [.multi-line](#module_vuetify-google-autocomplete.props.multi-line) : <code>Boolean</code>
    * [.no-resize](#module_vuetify-google-autocomplete.props.no-resize) : <code>Boolean</code>
    * [.outline](#module_vuetify-google-autocomplete.props.outline) : <code>Boolean</code>
    * [.persistent-hint](#module_vuetify-google-autocomplete.props.persistent-hint) : <code>Boolean</code>
    * [.placeholder](#module_vuetify-google-autocomplete.props.placeholder) : <code>String</code>
    * [.placeName](#module_vuetify-google-autocomplete.props.placeName) : <code>Boolean</code>
    * [.prefix](#module_vuetify-google-autocomplete.props.prefix) : <code>String</code>
    * [.prepend-icon](#module_vuetify-google-autocomplete.props.prepend-icon) : <code>String</code>
    * [.prepend-icon-cb](#module_vuetify-google-autocomplete.props.prepend-icon-cb) : <code>function</code>
    * [.readonly](#module_vuetify-google-autocomplete.props.readonly) : <code>Boolean</code>
    * [.required](#module_vuetify-google-autocomplete.props.required) : <code>Boolean</code>
    * [.return-masked-value](#module_vuetify-google-autocomplete.props.return-masked-value) : <code>Boolean</code>
    * [.reverse](#module_vuetify-google-autocomplete.props.reverse) : <code>Boolean</code>
    * [.row-height](#module_vuetify-google-autocomplete.props.row-height) : <code>Number</code> \| <code>String</code>
    * [.rows](#module_vuetify-google-autocomplete.props.rows) : <code>Number</code> \| <code>String</code>
    * [.rules](#module_vuetify-google-autocomplete.props.rules) : <code>Array</code>
    * [.single-line](#module_vuetify-google-autocomplete.props.single-line) : <code>Boolean</code>
    * [.solo](#module_vuetify-google-autocomplete.props.solo) : <code>Boolean</code>
    * [.solo-inverted](#module_vuetify-google-autocomplete.props.solo-inverted) : <code>Boolean</code>
    * [.spellcheck](#module_vuetify-google-autocomplete.props.spellcheck) : <code>String</code>
    * [.suffix](#module_vuetify-google-autocomplete.props.suffix) : <code>String</code>
    * [.tabindex](#module_vuetify-google-autocomplete.props.tabindex) : <code>\*</code>
    * [.textarea](#module_vuetify-google-autocomplete.props.textarea) : <code>Boolean</code>
    * [.toggle-keys](#module_vuetify-google-autocomplete.props.toggle-keys) : <code>Array</code>
    * [.type](#module_vuetify-google-autocomplete.props.type) : <code>String</code>
    * [.types](#module_vuetify-google-autocomplete.props.types) : <code>String</code>
    * [.validate-on-blur](#module_vuetify-google-autocomplete.props.validate-on-blur) : <code>Boolean</code>
    * [.value](#module_vuetify-google-autocomplete.props.value) : <code>String</code>

<a name="module_vuetify-google-autocomplete.props.addressComponents"></a>

#### props.addressComponents
Select Address Types and Address Component Types
https://developers.google.com/maps/documentation/javascript/geocoding#GeocodingAddressTypes

**Kind**: static property of [<code>props</code>](#module_vuetify-google-autocomplete.props)  
<a name="module_vuetify-google-autocomplete.props.append-icon"></a>

#### props.append-icon : <code>String</code>
Maps to Vuetify 'append-icon' prop.

**Kind**: static property of [<code>props</code>](#module_vuetify-google-autocomplete.props)  
**See**: [https://vuetifyjs.com/en/components/text-fields](https://vuetifyjs.com/en/components/text-fields)  
<a name="module_vuetify-google-autocomplete.props.append-icon-cb"></a>

#### props.append-icon-cb : <code>function</code>
Maps to Vuetify 'append-icon-cb' prop.

**Kind**: static property of [<code>props</code>](#module_vuetify-google-autocomplete.props)  
**See**: [https://vuetifyjs.com/en/components/text-fields](https://vuetifyjs.com/en/components/text-fields)  
<a name="module_vuetify-google-autocomplete.props.auto-grow"></a>

#### props.auto-grow : <code>Boolean</code>
Maps to Vuetify 'auto-grow' prop.

**Kind**: static property of [<code>props</code>](#module_vuetify-google-autocomplete.props)  
**See**: [https://vuetifyjs.com/en/components/text-fields](https://vuetifyjs.com/en/components/text-fields)  
<a name="module_vuetify-google-autocomplete.props.autofocus"></a>

#### props.autofocus : <code>Boolean</code>
Maps to Vuetify 'autofocus' prop.

**Kind**: static property of [<code>props</code>](#module_vuetify-google-autocomplete.props)  
**See**: [https://vuetifyjs.com/en/components/text-fields](https://vuetifyjs.com/en/components/text-fields)  
<a name="module_vuetify-google-autocomplete.props.box"></a>

#### props.box : <code>Boolean</code>
Maps to Vuetify 'box' prop.

**Kind**: static property of [<code>props</code>](#module_vuetify-google-autocomplete.props)  
**See**: [https://vuetifyjs.com/en/components/text-fields](https://vuetifyjs.com/en/components/text-fields)  
<a name="module_vuetify-google-autocomplete.props.browserAutocomplete"></a>

#### props.browserAutocomplete : <code>String</code>
Maps to Vuetify 'browser-autocomplete' prop.

**Kind**: static property of [<code>props</code>](#module_vuetify-google-autocomplete.props)  
**Default**: <code>&#x27;off&#x27;</code>  
**See**: [https://vuetifyjs.com/en/components/text-fields](https://vuetifyjs.com/en/components/text-fields)  
<a name="module_vuetify-google-autocomplete.props.clearable"></a>

#### props.clearable : <code>Boolean</code>
Maps to Vuetify 'clearable' prop.

**Kind**: static property of [<code>props</code>](#module_vuetify-google-autocomplete.props)  
**See**: [https://vuetifyjs.com/en/components/text-fields](https://vuetifyjs.com/en/components/text-fields)  
<a name="module_vuetify-google-autocomplete.props.color"></a>

#### props.color : <code>String</code>
Maps to Vuetify 'color' prop.

**Kind**: static property of [<code>props</code>](#module_vuetify-google-autocomplete.props)  
**See**: [https://vuetifyjs.com/en/components/text-fields](https://vuetifyjs.com/en/components/text-fields)  
<a name="module_vuetify-google-autocomplete.props.counter"></a>

#### props.counter : <code>Boolean</code> \| <code>Number</code> \| <code>String</code>
Maps to Vuetify 'counter' prop.

**Kind**: static property of [<code>props</code>](#module_vuetify-google-autocomplete.props)  
**See**: [https://vuetifyjs.com/en/components/text-fields](https://vuetifyjs.com/en/components/text-fields)  
<a name="module_vuetify-google-autocomplete.props.country"></a>

#### props.country : <code>String</code> \| <code>Array</code>
Restrict the autocomplete search to a particular country or set of countries.

**Kind**: static property of [<code>props</code>](#module_vuetify-google-autocomplete.props)  
**See**: [https://developers.google.com/places/web-service/autocomplete](https://developers.google.com/places/web-service/autocomplete)  
<a name="module_vuetify-google-autocomplete.props.dark"></a>

#### props.dark : <code>Boolean</code>
Maps to Vuetify 'dark' prop.

**Kind**: static property of [<code>props</code>](#module_vuetify-google-autocomplete.props)  
**See**: [https://vuetifyjs.com/en/components/text-fields](https://vuetifyjs.com/en/components/text-fields)  
<a name="module_vuetify-google-autocomplete.props.disabled"></a>

#### props.disabled : <code>Boolean</code>
Maps to Vuetify 'disabled' prop.

**Kind**: static property of [<code>props</code>](#module_vuetify-google-autocomplete.props)  
**See**: [https://vuetifyjs.com/en/components/text-fields](https://vuetifyjs.com/en/components/text-fields)  
<a name="module_vuetify-google-autocomplete.props.dont-fill-mask-blanks"></a>

#### props.dont-fill-mask-blanks : <code>Boolean</code>
Maps to Vuetify 'dont-fill-mask-blanks' prop.

**Kind**: static property of [<code>props</code>](#module_vuetify-google-autocomplete.props)  
**See**: [https://vuetifyjs.com/en/components/text-fields](https://vuetifyjs.com/en/components/text-fields)  
<a name="module_vuetify-google-autocomplete.props.enable-geolocation"></a>

#### props.enable-geolocation : <code>Boolean</code>
Bias the search towards user's current location.

**Kind**: static property of [<code>props</code>](#module_vuetify-google-autocomplete.props)  
**See**: [https://developers.google.com/places/web-service/autocomplete](https://developers.google.com/places/web-service/autocomplete)  
<a name="module_vuetify-google-autocomplete.props.error"></a>

#### props.error : <code>Boolean</code>
Maps to Vuetify 'error' prop.

**Kind**: static property of [<code>props</code>](#module_vuetify-google-autocomplete.props)  
**See**: [https://vuetifyjs.com/en/components/text-fields](https://vuetifyjs.com/en/components/text-fields)  
<a name="module_vuetify-google-autocomplete.props.error-messages"></a>

#### props.error-messages : <code>Array</code>
Maps to Vuetify 'error-messages' prop.

**Kind**: static property of [<code>props</code>](#module_vuetify-google-autocomplete.props)  
**See**: [https://vuetifyjs.com/en/components/text-fields](https://vuetifyjs.com/en/components/text-fields)  
<a name="module_vuetify-google-autocomplete.props.flat"></a>

#### props.flat : <code>Boolean</code>
Maps to Vuetify 'flat' prop.

**Kind**: static property of [<code>props</code>](#module_vuetify-google-autocomplete.props)  
**See**: [https://vuetifyjs.com/en/components/text-fields](https://vuetifyjs.com/en/components/text-fields)  
<a name="module_vuetify-google-autocomplete.props.full-width"></a>

#### props.full-width : <code>Boolean</code>
Maps to Vuetify 'full-width' prop.

**Kind**: static property of [<code>props</code>](#module_vuetify-google-autocomplete.props)  
**See**: [https://vuetifyjs.com/en/components/text-fields](https://vuetifyjs.com/en/components/text-fields)  
<a name="module_vuetify-google-autocomplete.props.hide-details"></a>

#### props.hide-details : <code>Boolean</code>
Maps to Vuetify 'hide-details' prop.

**Kind**: static property of [<code>props</code>](#module_vuetify-google-autocomplete.props)  
**See**: [https://vuetifyjs.com/en/components/text-fields](https://vuetifyjs.com/en/components/text-fields)  
<a name="module_vuetify-google-autocomplete.props.hint"></a>

#### props.hint : <code>String</code>
Maps to Vuetify 'hint' prop.

**Kind**: static property of [<code>props</code>](#module_vuetify-google-autocomplete.props)  
**See**: [https://vuetifyjs.com/en/components/text-fields](https://vuetifyjs.com/en/components/text-fields)  
<a name="module_vuetify-google-autocomplete.props.id"></a>

#### props.id : <code>String</code>
ID Attribute for the text field. Is required.

**Kind**: static property of [<code>props</code>](#module_vuetify-google-autocomplete.props)  
<a name="module_vuetify-google-autocomplete.props.label"></a>

#### props.label : <code>String</code>
Maps to Vuetify 'label' prop.

**Kind**: static property of [<code>props</code>](#module_vuetify-google-autocomplete.props)  
**See**: [https://vuetifyjs.com/en/components/text-fields](https://vuetifyjs.com/en/components/text-fields)  
<a name="module_vuetify-google-autocomplete.props.light"></a>

#### props.light : <code>Boolean</code>
Maps to Vuetify 'light' prop.

**Kind**: static property of [<code>props</code>](#module_vuetify-google-autocomplete.props)  
**See**: [https://vuetifyjs.com/en/components/text-fields](https://vuetifyjs.com/en/components/text-fields)  
<a name="module_vuetify-google-autocomplete.props.loading"></a>

#### props.loading : <code>Boolean</code> \| <code>String</code>
Maps to Vuetify 'loading' prop.

**Kind**: static property of [<code>props</code>](#module_vuetify-google-autocomplete.props)  
**See**: [https://vuetifyjs.com/en/components/text-fields](https://vuetifyjs.com/en/components/text-fields)  
<a name="module_vuetify-google-autocomplete.props.mask"></a>

#### props.mask : <code>Object</code> \| <code>String</code>
Maps to Vuetify 'mask' prop.

**Kind**: static property of [<code>props</code>](#module_vuetify-google-autocomplete.props)  
**See**: [https://vuetifyjs.com/en/components/text-fields](https://vuetifyjs.com/en/components/text-fields)  
<a name="module_vuetify-google-autocomplete.props.multi-line"></a>

#### props.multi-line : <code>Boolean</code>
Maps to Vuetify 'multi-line' prop.

**Kind**: static property of [<code>props</code>](#module_vuetify-google-autocomplete.props)  
**See**: [https://vuetifyjs.com/en/components/text-fields](https://vuetifyjs.com/en/components/text-fields)  
<a name="module_vuetify-google-autocomplete.props.no-resize"></a>

#### props.no-resize : <code>Boolean</code>
Maps to Vuetify 'no-resize' prop.

**Kind**: static property of [<code>props</code>](#module_vuetify-google-autocomplete.props)  
**See**: [https://vuetifyjs.com/en/components/text-fields](https://vuetifyjs.com/en/components/text-fields)  
<a name="module_vuetify-google-autocomplete.props.outline"></a>

#### props.outline : <code>Boolean</code>
Maps to Vuetify 'outline' prop.

**Kind**: static property of [<code>props</code>](#module_vuetify-google-autocomplete.props)  
**See**: [https://vuetifyjs.com/en/components/text-fields](https://vuetifyjs.com/en/components/text-fields)  
<a name="module_vuetify-google-autocomplete.props.persistent-hint"></a>

#### props.persistent-hint : <code>Boolean</code>
Maps to Vuetify 'persistent-hint' prop.

**Kind**: static property of [<code>props</code>](#module_vuetify-google-autocomplete.props)  
**See**: [https://vuetifyjs.com/en/components/text-fields](https://vuetifyjs.com/en/components/text-fields)  
<a name="module_vuetify-google-autocomplete.props.placeholder"></a>

#### props.placeholder : <code>String</code>
Maps to Vuetify 'placeholder' prop.

**Kind**: static property of [<code>props</code>](#module_vuetify-google-autocomplete.props)  
**See**: [https://vuetifyjs.com/en/components/text-fields](https://vuetifyjs.com/en/components/text-fields)  
<a name="module_vuetify-google-autocomplete.props.placeName"></a>

#### props.placeName : <code>Boolean</code>
Display place name when selecting a result

**Kind**: static property of [<code>props</code>](#module_vuetify-google-autocomplete.props)  
**See**: [https://developers.google.com/places/web-service/autocomplete](https://developers.google.com/places/web-service/autocomplete)  
<a name="module_vuetify-google-autocomplete.props.prefix"></a>

#### props.prefix : <code>String</code>
Maps to Vuetify 'prefix' prop.

**Kind**: static property of [<code>props</code>](#module_vuetify-google-autocomplete.props)  
**See**: [https://vuetifyjs.com/en/components/text-fields](https://vuetifyjs.com/en/components/text-fields)  
<a name="module_vuetify-google-autocomplete.props.prepend-icon"></a>

#### props.prepend-icon : <code>String</code>
Maps to Vuetify 'prepend-icon' prop.

**Kind**: static property of [<code>props</code>](#module_vuetify-google-autocomplete.props)  
**See**: [https://vuetifyjs.com/en/components/text-fields](https://vuetifyjs.com/en/components/text-fields)  
<a name="module_vuetify-google-autocomplete.props.prepend-icon-cb"></a>

#### props.prepend-icon-cb : <code>function</code>
Maps to Vuetify 'prepend-icon-cb' prop.

**Kind**: static property of [<code>props</code>](#module_vuetify-google-autocomplete.props)  
**See**: [https://vuetifyjs.com/en/components/text-fields](https://vuetifyjs.com/en/components/text-fields)  
<a name="module_vuetify-google-autocomplete.props.readonly"></a>

#### props.readonly : <code>Boolean</code>
Maps to Vuetify 'readonly' prop.

**Kind**: static property of [<code>props</code>](#module_vuetify-google-autocomplete.props)  
**See**: [https://vuetifyjs.com/en/components/text-fields](https://vuetifyjs.com/en/components/text-fields)  
<a name="module_vuetify-google-autocomplete.props.required"></a>

#### props.required : <code>Boolean</code>
Maps to Vuetify 'required' prop.

**Kind**: static property of [<code>props</code>](#module_vuetify-google-autocomplete.props)  
**See**: [https://vuetifyjs.com/en/components/text-fields](https://vuetifyjs.com/en/components/text-fields)  
<a name="module_vuetify-google-autocomplete.props.return-masked-value"></a>

#### props.return-masked-value : <code>Boolean</code>
Maps to Vuetify 'return-masked-value' prop.

**Kind**: static property of [<code>props</code>](#module_vuetify-google-autocomplete.props)  
**See**: [https://vuetifyjs.com/en/components/text-fields](https://vuetifyjs.com/en/components/text-fields)  
<a name="module_vuetify-google-autocomplete.props.reverse"></a>

#### props.reverse : <code>Boolean</code>
Maps to Vuetify 'reverse' prop.

**Kind**: static property of [<code>props</code>](#module_vuetify-google-autocomplete.props)  
**See**: [https://vuetifyjs.com/en/components/text-fields](https://vuetifyjs.com/en/components/text-fields)  
<a name="module_vuetify-google-autocomplete.props.row-height"></a>

#### props.row-height : <code>Number</code> \| <code>String</code>
Maps to Vuetify 'row-height' prop.

**Kind**: static property of [<code>props</code>](#module_vuetify-google-autocomplete.props)  
**See**: [https://vuetifyjs.com/en/components/text-fields](https://vuetifyjs.com/en/components/text-fields)  
<a name="module_vuetify-google-autocomplete.props.rows"></a>

#### props.rows : <code>Number</code> \| <code>String</code>
Maps to Vuetify 'rows' prop.

**Kind**: static property of [<code>props</code>](#module_vuetify-google-autocomplete.props)  
**See**: [https://vuetifyjs.com/en/components/text-fields](https://vuetifyjs.com/en/components/text-fields)  
<a name="module_vuetify-google-autocomplete.props.rules"></a>

#### props.rules : <code>Array</code>
Maps to Vuetify 'rules' prop.

**Kind**: static property of [<code>props</code>](#module_vuetify-google-autocomplete.props)  
**See**: [https://vuetifyjs.com/en/components/text-fields](https://vuetifyjs.com/en/components/text-fields)  
<a name="module_vuetify-google-autocomplete.props.single-line"></a>

#### props.single-line : <code>Boolean</code>
Maps to Vuetify 'single-line' prop.

**Kind**: static property of [<code>props</code>](#module_vuetify-google-autocomplete.props)  
**See**: [https://vuetifyjs.com/en/components/text-fields](https://vuetifyjs.com/en/components/text-fields)  
<a name="module_vuetify-google-autocomplete.props.solo"></a>

#### props.solo : <code>Boolean</code>
Maps to Vuetify 'solo' prop.

**Kind**: static property of [<code>props</code>](#module_vuetify-google-autocomplete.props)  
**See**: [https://vuetifyjs.com/en/components/text-fields](https://vuetifyjs.com/en/components/text-fields)  
<a name="module_vuetify-google-autocomplete.props.solo-inverted"></a>

#### props.solo-inverted : <code>Boolean</code>
Maps to Vuetify 'solo-inverted' prop.

**Kind**: static property of [<code>props</code>](#module_vuetify-google-autocomplete.props)  
**See**: [https://vuetifyjs.com/en/components/text-fields](https://vuetifyjs.com/en/components/text-fields)  
<a name="module_vuetify-google-autocomplete.props.spellcheck"></a>

#### props.spellcheck : <code>String</code>
Maps to native HTML5 spellcheck attribute.

**Kind**: static property of [<code>props</code>](#module_vuetify-google-autocomplete.props)  
**See**: [https://vuetifyjs.com/en/components/text-fields](https://vuetifyjs.com/en/components/text-fields)  
<a name="module_vuetify-google-autocomplete.props.suffix"></a>

#### props.suffix : <code>String</code>
Maps to Vuetify 'suffix' prop.

**Kind**: static property of [<code>props</code>](#module_vuetify-google-autocomplete.props)  
**See**: [https://vuetifyjs.com/en/components/text-fields](https://vuetifyjs.com/en/components/text-fields)  
<a name="module_vuetify-google-autocomplete.props.tabindex"></a>

#### props.tabindex : <code>\*</code>
Maps to Vuetify 'tabindex' prop.

**Kind**: static property of [<code>props</code>](#module_vuetify-google-autocomplete.props)  
**See**: [https://vuetifyjs.com/en/components/text-fields](https://vuetifyjs.com/en/components/text-fields)  
<a name="module_vuetify-google-autocomplete.props.textarea"></a>

#### props.textarea : <code>Boolean</code>
Maps to Vuetify 'textarea' prop.

**Kind**: static property of [<code>props</code>](#module_vuetify-google-autocomplete.props)  
**See**: [https://vuetifyjs.com/en/components/text-fields](https://vuetifyjs.com/en/components/text-fields)  
<a name="module_vuetify-google-autocomplete.props.toggle-keys"></a>

#### props.toggle-keys : <code>Array</code>
Maps to Vuetify 'toggle-keys' prop.

**Kind**: static property of [<code>props</code>](#module_vuetify-google-autocomplete.props)  
**See**: [https://vuetifyjs.com/en/components/text-fields](https://vuetifyjs.com/en/components/text-fields)  
<a name="module_vuetify-google-autocomplete.props.type"></a>

#### props.type : <code>String</code>
Maps to Vuetify 'type' prop.

**Kind**: static property of [<code>props</code>](#module_vuetify-google-autocomplete.props)  
**See**: [https://vuetifyjs.com/en/components/text-fields](https://vuetifyjs.com/en/components/text-fields)  
<a name="module_vuetify-google-autocomplete.props.types"></a>

#### props.types : <code>String</code>
Types supported in place autocomplete requests.

**Kind**: static property of [<code>props</code>](#module_vuetify-google-autocomplete.props)  
**See**

- [https://developers.google.com/places/supported_types#table3](https://developers.google.com/places/supported_types#table3)
- [https://developers.google.com/places/web-service/autocomplete](https://developers.google.com/places/web-service/autocomplete)

<a name="module_vuetify-google-autocomplete.props.validate-on-blur"></a>

#### props.validate-on-blur : <code>Boolean</code>
Maps to Vuetify 'validate-on-blur' prop.

**Kind**: static property of [<code>props</code>](#module_vuetify-google-autocomplete.props)  
**See**: [https://vuetifyjs.com/en/components/text-fields](https://vuetifyjs.com/en/components/text-fields)  
<a name="module_vuetify-google-autocomplete.props.value"></a>

#### props.value : <code>String</code>
Maps to Vuetify 'value' prop.

**Kind**: static property of [<code>props</code>](#module_vuetify-google-autocomplete.props)  
**See**: [https://vuetifyjs.com/en/components/text-fields](https://vuetifyjs.com/en/components/text-fields)  
<a name="module_vuetify-google-autocomplete.data"></a>

### vuetify-google-autocomplete.data
See code for members.

**Kind**: static mixin of [<code>vuetify-google-autocomplete</code>](#module_vuetify-google-autocomplete)  
<a name="module_vuetify-google-autocomplete.methods"></a>

### vuetify-google-autocomplete.methods
See code for members.

**Kind**: static mixin of [<code>vuetify-google-autocomplete</code>](#module_vuetify-google-autocomplete)  
<a name="module_vuetify-google-autocomplete.created"></a>

### vuetify-google-autocomplete.created
Updates the autocompleteText member if a v-model was provided.

**Kind**: static mixin of [<code>vuetify-google-autocomplete</code>](#module_vuetify-google-autocomplete)  
<a name="module_vuetify-google-autocomplete.mounted"></a>

### vuetify-google-autocomplete.mounted
Loads the Google Autocomplete SDK.

**Kind**: static mixin of [<code>vuetify-google-autocomplete</code>](#module_vuetify-google-autocomplete)  
<a name="module_vuetify-google-autocomplete.destroyed"></a>

### vuetify-google-autocomplete.destroyed
Resets the autocomplete loaded state.

**Kind**: static mixin of [<code>vuetify-google-autocomplete</code>](#module_vuetify-google-autocomplete)  
<a name="module_vuetify-google-autocomplete.render"></a>

### vuetify-google-autocomplete.render
See code.

**Kind**: static mixin of [<code>vuetify-google-autocomplete</code>](#module_vuetify-google-autocomplete)  
<a name="module_vuetify-google-autocomplete.watch"></a>

### vuetify-google-autocomplete.watch
**Kind**: static mixin of [<code>vuetify-google-autocomplete</code>](#module_vuetify-google-autocomplete)  

* [.watch](#module_vuetify-google-autocomplete.watch)
    * [.autocompleteText()](#module_vuetify-google-autocomplete.watch.autocompleteText)
    * [.country()](#module_vuetify-google-autocomplete.watch.country)
    * [.enableGeolocation()](#module_vuetify-google-autocomplete.watch.enableGeolocation)
    * [.types()](#module_vuetify-google-autocomplete.watch.types)

<a name="module_vuetify-google-autocomplete.watch.autocompleteText"></a>

#### watch.autocompleteText()
Emit the new autocomplete text whenever it changes.

**Kind**: static method of [<code>watch</code>](#module_vuetify-google-autocomplete.watch)  
<a name="module_vuetify-google-autocomplete.watch.country"></a>

#### watch.country()
Update the SDK country option whenever it changes from the parent.

**Kind**: static method of [<code>watch</code>](#module_vuetify-google-autocomplete.watch)  
<a name="module_vuetify-google-autocomplete.watch.enableGeolocation"></a>

#### watch.enableGeolocation()
Watches for changes on the Geolocation option.

**Kind**: static method of [<code>watch</code>](#module_vuetify-google-autocomplete.watch)  
<a name="module_vuetify-google-autocomplete.watch.types"></a>

#### watch.types()
Update the SDK types option whenever it changes from the parent.

**Kind**: static method of [<code>watch</code>](#module_vuetify-google-autocomplete.watch)  
<a name="module_vuetify-google-autocomplete.name"></a>

### vuetify-google-autocomplete.name
Component name. Returns 'vuetify-google-autocomplete'.

**Kind**: static property of [<code>vuetify-google-autocomplete</code>](#module_vuetify-google-autocomplete)  
<a name="module_vuetify-google-autocomplete.autocapitalize"></a>

### vuetify-google-autocomplete.autocapitalize : <code>Boolean</code>
Maps to native HTML5 autocapitalize attribute.

**Kind**: static property of [<code>vuetify-google-autocomplete</code>](#module_vuetify-google-autocomplete)  
**See**: [https://vuetifyjs.com/en/components/text-fields](https://vuetifyjs.com/en/components/text-fields)  
<a name="module_vuetify-google-autocomplete.autocorrect"></a>

### vuetify-google-autocomplete.autocorrect : <code>Boolean</code>
Maps to native HTML5 autocorrect attribute.

**Kind**: static property of [<code>vuetify-google-autocomplete</code>](#module_vuetify-google-autocomplete)  
**See**: [https://vuetifyjs.com/en/components/text-fields](https://vuetifyjs.com/en/components/text-fields)  
