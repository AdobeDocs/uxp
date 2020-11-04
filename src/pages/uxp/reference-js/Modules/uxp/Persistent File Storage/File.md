---
jsDoc: true
---

<a name="module-storage-file" id="module-storage-file"></a>

# require('uxp').storage.File
Represents a file on a file system. Provides methods for reading from and
writing to the file. You'll never instantiate a `File` directly; instead
you'll get access via a [storage.FileSystemProvider](/uxp/reference-js/Modules/uxp/Persistent%20File%20Storage/FileSystemProvider/).



<a name="module-storage-file-isfile" id="module-storage-file-isfile"></a>

## isFile
Indicates that this instance is a file.

**Example**  
```js
if (anEntry.isFile) {
    await anEntry.read();
}
```


<a name="module-storage-file-mode" id="module-storage-file-mode"></a>

## mode : `Symbol`
Indicates whether this file is read-only or read-write. See [readOnly](readOnly) and [readWrite](readWrite).

**Example**  
```js
if (aFile.mode === modes.readOnly) {
    throw new Error("Can't write to a file opened as read-only.");
}
```


<a name="module-storage-file-read" id="module-storage-file-read"></a>

## read(options)
Reads data from the file and returns it. The file format can be specified
with the `format` option. If a format is not supplied, the file is assumed
to be a text file using UTF8 encoding.

**Returns**: `Promise.<(string\|ArrayBuffer)>` - the contents of the file  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| options | `any` |  |  |
| [options.format] | `Symbol` | `formats.utf8` | The format of the file; see [utf8](utf8) and [binary](binary). |

**Example**  
```js
const text = await myNovel.read();
```
**Example**  
```js
const data = await myNovel.read({format: formats.binary});
```


<a name="module-storage-file-write" id="module-storage-file-write"></a>

## write(data, options)
Writes data to a file, appending if desired. The format of the file
is controlled via the `format` option, and defaults to UTF8.

**Throws**:

- `FileIsReadOnly` if writing to a read-only file
- `OutOfSpace` If writing to the file causes the file system to exceed the available space (or quota)


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| data | `string` \| `ArrayBuffer` |  | the data to write to the file |
| options | `any` |  |  |
| [options.format] | `Symbol` | `formats.utf8` | the format of the file; see [utf8](utf8) and [binary](binary) |
| [options.append] | `boolean` | `false` | if `true`, the data is written to the end of the file |

**Example**  
```js
await myNovel.write("It was a dark and stormy night.\n");
await myNovel.write("Cliches and tropes aside, it really was.", {append: true});
```
**Example**  
```js
const data = new ArrayBuffer();
await aDataFile.write(data, {format: formats.binary});
```


<a name="module-storage-file-isfile" id="module-storage-file-isfile"></a>

## isFile(entry)
Determines if the entry is a file or not. This is safe to use even if the
entry is `null` or `undefined`.

**Returns**: `boolean` - if `true`, the entry is a file.  

| Param | Type | Description |
| --- | --- | --- |
| entry | `any` | the entry to check |


