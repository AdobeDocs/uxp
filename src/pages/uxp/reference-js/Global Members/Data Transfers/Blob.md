
<a name="blob" id="blob"></a>

## Blob : `window.Blob`
**Kind**: global class  
**Access**: public  

* [Blob](#blob)
    * [.size](#blob-size)
    * [.type](#blob-type)
    * [.arrayBuffer()](#blob-arraybuffer) ⇒ `Promise.<ArrayBuffer>`
    * [.slice(start, end, contentType)](#blob-slice) ⇒ [`Blob`](#blob)
    * [.stream()](#blob-stream) ⇒ `ReadableStream`
    * [.text()](#blob-text) ⇒ `Promise.<String>`


<a name="blob-size" id="blob-size"></a>

### blob.size
Size of the Blob in bytes

**Kind**: instance property of [`Blob`](#blob)  

<a name="blob-type" id="blob-type"></a>

### blob.type
MIME type of the Blob

**Kind**: instance property of [`Blob`](#blob)  

<a name="blob-arraybuffer" id="blob-arraybuffer"></a>

### blob.arrayBuffer() ⇒ `Promise.<ArrayBuffer>`
Return the contents of the Blob in the form of an ArrayBuffer

**Kind**: instance method of [`Blob`](#blob)  
**Returns**: `Promise.<ArrayBuffer>` - A promise that resolves with an ArrayBuffer that contains the Blob's data in binary form  

<a name="blob-slice" id="blob-slice"></a>

### blob.slice(start, end, contentType) ⇒ [`Blob`](#blob)
Return a new Blob containing the specified subset of the Blob's data

**Kind**: instance method of [`Blob`](#blob)  
**Returns**: [`Blob`](#blob) - a new Blob object containing the specified subset of the data contained within the Blob on which this method was called  

| Param | Type | Description |
| --- | --- | --- |
| start | `\*` | index into the Blob indicating the first byte to include in the new Blob |
| end | `\*` | index into the Blob indicating the first byte that will NOT be included in the new Blob |
| contentType | `\*` | content type to assign to the new Blob |


<a name="blob-stream" id="blob-stream"></a>

### blob.stream() ⇒ `ReadableStream`
Returns a ReadableStream which upon reading returns the data contained within the Blob

**Kind**: instance method of [`Blob`](#blob)  
**Returns**: `ReadableStream` - ReadableStream which, upon reading, returns the contents of the Blob  

<a name="blob-text" id="blob-text"></a>

### blob.text() ⇒ `Promise.<String>`
Returns a Promise that resolves with a string containing the contents of the Blob

**Kind**: instance method of [`Blob`](#blob)  
**Returns**: `Promise.<String>` - A promise that resolves with a string which contains the Blob's data as a text string. The data is always presumed to be in UTF-8 format.  
  