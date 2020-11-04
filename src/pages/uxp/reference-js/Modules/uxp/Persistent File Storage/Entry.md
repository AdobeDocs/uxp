---
jsDoc: true
---

<a name="module-storage-entry" id="module-storage-entry"></a>

# require('uxp').storage.Entry
An `Entry` is the base class for `File` and `Folder`. You'll
typically never instantiate an `Entry` directly, but it provides
the common fields and methods that both `File` and `Folder`
share.



<a name="new-module-storage-entry-new" id="new-module-storage-entry-new"></a>

## Entry(name, provider, id)
Creates an instance of Entry.


| Param | Type |
| --- | --- |
| name | `*` | 
| provider | `*` | 
| id | `*` | 



<a name="module-storage-entry-isentry" id="module-storage-entry-isentry"></a>

## isEntry : `boolean`
Indicates that this instance is an `Entry`. Useful for type-checking.

**Example**  
```js
if (something.isEntry) {
    return something.getMetadata();
}
```


<a name="module-storage-entry-isfile" id="module-storage-entry-isfile"></a>

## isFile : `boolean`
**Read only**
Indicates that this instance is **not** a `File`. Useful for type-
checking.

**Example**  
```js
if (!anEntry.isFile) {
    return "This entry is not a file.";
}
```


<a name="module-storage-entry-isfolder" id="module-storage-entry-isfolder"></a>

## isFolder : `boolean`
**Read only**
Indicates that this instance is **not** a folder. Useful for type-
checking.

**Example**  
```js
if (!anEntry.isFolder) {
    return "This entry is not a folder.";
}
```


<a name="module-storage-entry-name" id="module-storage-entry-name"></a>

## name : `string`
**Read only**
The name of this entry. Read-only.

**Example**  
```js
console.log(anEntry.name);
```


<a name="module-storage-entry-provider" id="module-storage-entry-provider"></a>

## provider : `FileSystemProvider`
**Read only**
The associated provider that services this entry. Read-only.

**Example**  
```js
if (entryOne.provider !== entryTwo.provider) {
    throw new Error("Providers are not the same");
}
```


<a name="module-storage-entry-url" id="module-storage-entry-url"></a>

## url : `string`
**Read only**
The url of this entry. You can use this url as input to other entities of the extension system like for eg: set as src attribute of a Image widget in UI. Read-only.

**Example**  
```js
console.log(anEntry.url);
```


<a name="module-storage-entry-nativepath" id="module-storage-entry-nativepath"></a>

## nativePath : `string`
**Read only**
The platform native file-system path of this entry. Read-only

**Example**  
```js
console.log(anEntry.nativePath);
```


<a name="module-storage-entry-tostring" id="module-storage-entry-tostring"></a>

## toString()
returns the details of the given entry like name, type and native path in a readable string format.



<a name="module-storage-entry-copyto" id="module-storage-entry-copyto"></a>

## copyTo(folder, options)
Copies this entry to the specified `folder`.

**Throws**:

- `EntryExists` if the attempt would overwrite an entry and `overwrite` is `false`
- `PermissionDenied` if the underlying file system rejects the attempt
- `OutOfSpace` if the file system is out of storage space


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| folder | `Folder` |  | the folder to which to copy this entry |
| options | `*` |  |  |
| [options.overwrite] | `boolean` | `false` | if `true`, allows overwriting existing entries |

**Example**  
```js
await someFile.copyTo(someFolder);
```
**Example**  
```js
await someFile.copyTo(someFolder, {overwrite: true});
```
**Example**  
```js
await someFolder.copyTo(anotherFolder, {overwrite: true});
```


<a name="module-storage-entry-moveto" id="module-storage-entry-moveto"></a>

## moveTo(folder, options)
Moves this entry to the target folder, optionally specifying a new name.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| folder | `Folder` |  | the folder to which to move this entry |
| options | `*` |  |  |
| [options.overwrite] | `boolean` | `false` | If `true` allows the move to overwrite existing files |
| [options.newName] | `string` |  | If specified, the entry is renamed to this name |

**Example**  
```js
await someFile.moveTo(someFolder);
```
**Example**  
```js
await someFile.moveTo(someFolder, {overwrite: true});
```
**Example**  
```js
await someFolder.moveTo(anotherFolder, {overwrite: true});
```
**Example**  
```js
await someFile.moveTo(someFolder, {newName: 'masterpiece.txt'})
```
**Example**  
```js
await someFile.moveTo(someFolder, {newName: 'novel.txt', {overwrite: true})
```


<a name="module-storage-entry-delete" id="module-storage-entry-delete"></a>

## delete()
Removes this entry from the file system. If the entry is a folder, all the
contents will also be removed.

**Example**  
```js
await aFile.delete();
```


<a name="module-storage-entry-getmetadata" id="module-storage-entry-getmetadata"></a>

## getMetadata()
Returns this entry's metadata.

**Returns**: `Promise.<EntryMetadata>`  
**Example**  
```js
const metadata = aFile.getMetadata();
```

