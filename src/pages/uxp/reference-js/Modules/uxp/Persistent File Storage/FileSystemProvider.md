---
jsDoc: true
---

<a name="module-storage-filesystemprovider" id="module-storage-filesystemprovider"></a>

# require('uxp').storage.FileSystemProvider
Provides access to files and folders on a file system. You'll never
instantiate this directly; instead you'll use an instance of one that has
already been created for you by UXP.



<a name="module-storage-filesystemprovider-isfilesystemprovider" id="module-storage-filesystemprovider-isfilesystemprovider"></a>

## isFileSystemProvider
Indicates that this is a `FileSystemProvider`. Useful for type-checking.



<a name="module-storage-filesystemprovider-supporteddomains" id="module-storage-filesystemprovider-supporteddomains"></a>

## supportedDomains
An array of the domains this file system supports. If the file system can
open a file picker to the user's `documents` folder, for example, then
[userDocuments](/uxp/reference-js/Modules/uxp/Persistent%20File%20Storage/domains/#module-storage-domains-userdocuments) will be in this list.

**Example**  
```js
if (fs.supportedDomains.contains(domains.userDocuments)) {
    console.log("We can open a picker to the user's documents.")
}
```


<a name="module-storage-filesystemprovider-getfileforopening" id="module-storage-filesystemprovider-getfileforopening"></a>

## getFileForOpening(options)
Gets a file (or files) from the file system provider for the purpose of
opening them. Files are read-only.

Multiple files can be returned if the `allowMultiple` option` is `true`.

**Returns**: `File` \| `Array.<File>` - based on allowMultiple is true or false, or empty if no file were selected.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| options | `*` |  |  |
| [options.initialDomain] | `Symbol` |  | the preferred initial location of the file picker. If not defined, the most recently used domain from a file picker is used instead. |
| [options.types] | `Array.<string>` | `[&#x27;.*&#x27;]` | array of file types that the file open picker displays. |
| [options.initialLocation] | `File` \| `Folder` |  | the initial location of the file picker. You can pass an existing file or folder entry to suggest the picker to start at this location. If this is a file entry then the method will pick its parent folder as initial location. This will override initialDomain option. |
| [options.allowMultiple] | `boolean` | `false` | if true, multiple files can be returned (as an array) |

**Example**  
```js
const folder = await fs.getFolder({initialDomain = domains.userDocuments});
const file = await fs.getFileForOpening({initialLocation = folder});
if (!file) {
    // no file selected
    return;
}
const text = await file.read();
```
**Example**  
```js
const files = await fs.getFileForOpening({allowMultiple: true, types: fileTypes.images});
if (files.length === 0) {
    // no files selected
}
```


<a name="module-storage-filesystemprovider-getfileforsaving" id="module-storage-filesystemprovider-getfileforsaving"></a>

## getFileForSaving(options)
Gets a file reference suitable for saving. The file is read-write. Any
file picker displayed will be of the "save" variety.

If the user attempts to save a file that doesn't exist, the file is
created automatically.

If the act of writing to the file would overwrite it, the file picker
should prompt the user if they are OK with that action. If not, the file
should not be returned.

**Returns**: `File` - returns the selected file, or `null` if no file were selected.  

| Param | Type | Description |
| --- | --- | --- |
| options | `*` |  |
| [options.initialDomain] | `Symbol` | the preferred initial location of the file picker. If not defined, the most recently used domain from a file picker is used instead. |
| [options.types] | `Array.<string>` | array of valid file types that the user can choose to assign to a file. |

**Example**  
```js
const [file] = await fs.getFileForSaving({ types = [ "txt" ]});
if (!file) {
    // no file selected, or the user didn't want to overwrite one they did select
    return;
}
await file.write("It was a dark and stormy night");
```


<a name="module-storage-filesystemprovider-getfolder" id="module-storage-filesystemprovider-getfolder"></a>

## getFolder(options)
Gets a folder from the file system via a folder picker dialog. The files
and folders within can be accessed via [Folder#getEntries](/uxp/reference-js/Modules/uxp/Persistent%20File%20Storage/Folder/#module-storage-folder-getentries). Any
files within are read-write.

If the user dismisses the picker, `null` is returned instead.

**Returns**: `Folder` - the selected folder or `null` if no folder is selected.  

| Param | Type | Description |
| --- | --- | --- |
| options | `any` |  |
| [options.initialDomain] | `Symbol` | the preferred initial location of the file picker. If not defined, the most recently used domain from a file picker is used instead. |

**Example**  
```js
const folder = await fs.getFolder();
const myNovel = (await fs.getEntries()).filter(entry => entry.name.indexOf('novel') > 0);
const text = await myNovel.read();
```


<a name="module-storage-filesystemprovider-gettemporaryfolder" id="module-storage-filesystemprovider-gettemporaryfolder"></a>

## getTemporaryFolder()
Returns a temporary folder. The contents of the folder will be removed when
the extension is disposed.

**Example**  
```js
const temp = await fs.getTemporaryFolder();
```


<a name="module-storage-filesystemprovider-getdatafolder" id="module-storage-filesystemprovider-getdatafolder"></a>

## getDataFolder()
Returns a folder that can be used for extension's data storage without user interaction.
It is persistent across host-app version upgrades.



<a name="module-storage-filesystemprovider-getpluginfolder" id="module-storage-filesystemprovider-getpluginfolder"></a>

## getPluginFolder()
Returns an plugin's folder – this folder and everything within it are read only.
This contains all the Plugin related packaged assets.



<a name="module-storage-filesystemprovider-getfsurl" id="module-storage-filesystemprovider-getfsurl"></a>

## getFsUrl()
Returns the fs url of given entry.



<a name="module-storage-filesystemprovider-getnativepath" id="module-storage-filesystemprovider-getnativepath"></a>

## getNativePath()
Returns the platform native file system path of given entry.



<a name="module-storage-filesystemprovider-createsessiontoken" id="module-storage-filesystemprovider-createsessiontoken"></a>

## createSessionToken(entry)
Returns a token suitable for use with certain host-specific APIs (such as Photoshop). This
token is valid only for the current plugin session. As such, it is of no use if you
serialize the token to persistent storage, as the token will be invalid in the future.

> **Note:** When using the Photoshop DOM API, pass the instance of the file instead of
a session token -- Photoshop will convert the entry into a session token automatically
on your behalf.

**Returns**: `string` - the session token for the given entry  

| Param | Type |
| --- | --- |
| entry | `Entry` | 

**Example**  
```js
const fs = require('uxp').storage.localFileSystem;
let entry = await fs.getFileForOpening();
let token = fs.createSessionToken(entry);
let result = await require('photoshop').action.batchPlay([{
    _obj: "open",
    "target": {
        _path: token, // Rather than a system path, this expects a session token
        _kind: "local",
    }
}], {});
```


<a name="module-storage-filesystemprovider-getentryforsessiontoken" id="module-storage-filesystemprovider-getentryforsessiontoken"></a>

## getEntryForSessionToken(token)
Returns the file system Entry that corresponds to the session token obtained from
`createSessionToken`. If an entry cannot be found that matches the token, then a
`Reference Error: token is not defined` error is thrown.

**Returns**: `Entry` - the corresponding entry for the session token  

| Param | Type |
| --- | --- |
| token | `string` | 



<a name="module-storage-filesystemprovider-createpersistenttoken" id="module-storage-filesystemprovider-createpersistenttoken"></a>

## createPersistentToken(entry)
Returns a token suitable for use with host-specific APIs (such as Photoshop), or
for storing a persistent reference to an entry (useful if you want to only ask for
permission to access a file or folder once). A persistent token is not guaranteed
to last forever -- certain scenarios can cause the token to longer work (including
moving files, changing permissions, or OS-specific limitations). If a persistent
token cannot be reused, you'll get an error at the time of use.

**Returns**: `string` - the persistent token for the given entry  

| Param | Type |
| --- | --- |
| entry | `Entry` | 

**Example**  
```js
const fs = require('uxp').storage.localFileSystem;
let entry = await fs.getFileForOpening();
let token = fs.createPersistentToken(entry);
localStorage.setItem("persistent-file", token);
```


<a name="module-storage-filesystemprovider-getentryforpersistenttoken" id="module-storage-filesystemprovider-getentryforpersistenttoken"></a>

## getEntryForPersistentToken(token)
Returns the file system Entry that corresponds to the persistent token obtained from
`createPersistentToken`. If an entry cannot be found that matches the token, then a
`Reference Error: token is not defined` error is thrown.

> **Note:** retrieving an entry for a persistent token does _not_ guarantee that the
entry is valid for use. You'll need to properly handle the case where the entry no
longer exists on the disk, or the permissions have changed by catching the appropriate
errors. If that occurs, the suggested practice is to prompt the user for the entry
again and store the new token.

**Returns**: `Entry` - the corresponding entry for the persistent token  

| Param | Type |
| --- | --- |
| token | `string` | 

**Example**  
```js
const fs = require('uxp').storage.localFileSystem;
let entry, contents, tries = 3, success = false;
while (tries > 0) {
    try {
        entry = await fs.getEntryForPersistentToken(localStorage.getItem("persistent-file"));
        contents = await entry.read();
        tries = 0;
        success = true;
    } catch (err) {
        entry = await fs.getFileForOpening();
        localStorage.setItem("persistent-token", await fs.createPersistentToken(entry));
        tries--;
    }
}
if (!success) {
    // fail gracefully somehow
}
```


<a name="module-storage-filesystemprovider-isfilesystemprovider" id="module-storage-filesystemprovider-isfilesystemprovider"></a>

## isFileSystemProvider(fs)
Checks if the supplied object is a `FileSystemProvider`. It's safe to use even
if the object is `null` or `undefined`. Useful for type checking.

**Returns**: `boolean` - If `true`, the object is a file system provider  

| Param | Type | Description |
| --- | --- | --- |
| fs | `any` | the object to check |


