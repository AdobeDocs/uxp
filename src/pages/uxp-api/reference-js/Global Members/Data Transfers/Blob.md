
<a name="blob" id="blob"></a>

# window.Blob
**Since**: UXP v6.3  


<a name="new-blob-new" id="new-blob-new"></a>

## Blob(array, options)
The Blob object represents a blob, which is a file-like object of immutable, raw data;
they can be read as text or binary data, or converted into a [ReadableStream](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream)
so its methods can be used for processing the data.

**Returns**: Returns a newly created Blob object which contains a concatenation of all of the data in the array passed into the constructor.  

| Param | Type | Description |
| --- | --- | --- |
| array | `Array` | An iterable object such as an Array, having ArrayBuffers, TypedArrays, DataViews, Blobs, strings, or a mix of any of such elements, that will be put inside the Blob. Note that strings here are encoded as UTF-8, unlike the usual JavaScript UTF-16 strings. |
| options | `Object` | `(optional)` - An object which may specify any of the following properties: |
| options.type | `string` | `(optional)` - The MIME type of the data that will be stored into the blob. The default value is the empty string, (""). |
| options.endings | `string` | `(optional)` - How to interpret newline characters (\n) within the contents, if the data is text. The default value, transparent, copies newline characters into the blob without changing them. To convert newlines to the host system's native convention, specify the value native. |



<a name="blob-size" id="blob-size"></a>

## size : `number`
**Read only**
Size of the Blob in bytes



<a name="blob-type" id="blob-type"></a>

## type : `string`
**Read only**
MIME type of the Blob



<a name="blob-arraybuffer" id="blob-arraybuffer"></a>

## arrayBuffer()
Get the contents of the Blob in the form of an ArrayBuffer

**Returns**: `Promise<ArrayBuffer>`  


<a name="blob-slice" id="blob-slice"></a>

## slice(start, end, contentType)
Get a portion of the Blob's data selected from start to end (end not included).

**Returns**: `Blob`  

| Param | Type | Description |
| --- | --- | --- |
| start | `number` | `(Optional)`- Index into the Blob indicating the first byte to include in the new Blob |
| end | `number` | `(Optional)`- Index into the Blob indicating the first byte that will NOT be included in the new Blob |
| contentType | `string` | `(Optional)`- A string containing the file's [MIME type](https://developer.mozilla.org/en-US/docs/Glossary/MIME_type), or an empty string if the type could not be determined. Refer [Blob.type](https://developer.mozilla.org/en-US/docs/Web/API/Blob/type#value) |



<a name="blob-stream" id="blob-stream"></a>

## stream()
Get the data contained within the Blob as a ReadableStream

**Returns**: `ReadableStream`  


<a name="blob-text" id="blob-text"></a>

## text()
Get contents of the Blob as a string in UTF-8 format.

**Returns**: `Promise<String>`  

  