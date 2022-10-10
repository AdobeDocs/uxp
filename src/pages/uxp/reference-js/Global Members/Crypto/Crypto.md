
<a name="crypto" id="crypto"></a>

## Crypto : `window.crypto`
**Kind**: global class  
**Access**: public  
**See**

- https://developer.mozilla.org/en-US/docs/Web/API/Crypto
- https://w3c.github.io/webcrypto/#Crypto-method-getRandomValues
- https://w3c.github.io/webcrypto/#Crypto-method-randomUUID


* [Crypto](#crypto)
    * [.getRandomValues(array)](#crypto-getrandomvalues) ⇒
    * [.randomUUID()](#crypto-randomuuid) ⇒ `String`


<a name="crypto-getrandomvalues" id="crypto-getrandomvalues"></a>

### crypto.getRandomValues(array) ⇒
Generates cryptographically strong random values

**Kind**: instance method of [`Crypto`](#crypto)  
**Returns**: The same array passed as 'array' but with its contents replaced with the newly generated random numbers  
**Throws**:

- `TypedError` If the input 'array' is not a TypedArray or either Float32Array or Float64Array
- [`DOMException`](#domexception) If the input 'array' length exceeds 65,536 bytes


| Param | Type | Description |
| --- | --- | --- |
| array | `\*` | An integer-based TypedArray, that is one of Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array, Int32Array, Uint32Array, BigInt64Array, BigUint64Array but not Float32Array nor Float64Array |


<a name="crypto-randomuuid" id="crypto-randomuuid"></a>

### crypto.randomUUID() ⇒ `String`
Generates a new version 4 UUID

**Kind**: instance method of [`Crypto`](#crypto)  
**Returns**: `String` - A string containing a randomly generated, 36 character long v4 UUID  
  