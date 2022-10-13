
<a name="module-storage" id="module-storage"></a>

## storage : `require('uxp').uxp.storage`

* [storage](#module-storage)
    * [.Entry](#module-storage-entry)
        * [new Entry(name, provider, id)](#new-module-storage-entry-new)
        * [.isEntry](#module-storage-entry-isentry) : `boolean`
        * [.isFile](#module-storage-entry-isfile) : `boolean`
        * [.isFolder](#module-storage-entry-isfolder) : `boolean`
        * [.name](#module-storage-entry-name) : `string`
        * [.provider](#module-storage-entry-provider) : `FileSystemProvider`
        * [.url](#module-storage-entry-url) : `string`
        * [.nativePath](#module-storage-entry-nativepath) : `string`
        * [.toString()](#module-storage-entry-tostring)
        * [.copyTo(folder, options)](#module-storage-entry-copyto)
        * [.moveTo(folder, options)](#module-storage-entry-moveto)
        * [.delete()](#module-storage-entry-delete)
        * [.getMetadata()](#module-storage-entry-getmetadata) ⇒ `Promise.<EntryMetadata>`
    * [.EntryMetadata](#module-storage-entrymetadata)
        * [.name](#module-storage-entrymetadata-name) : `string`
        * [.size](#module-storage-entrymetadata-size) : `number`
        * [.dateCreated](#module-storage-entrymetadata-datecreated) : `Date`
        * [.dateModified](#module-storage-entrymetadata-datemodified) : `Date`
        * [.isFile](#module-storage-entrymetadata-isfile) : `boolean`
        * [.isFolder](#module-storage-entrymetadata-isfolder) : `boolean`
    * [.File](#module-storage-file)
        * _instance_
            * [.isFile](#module-storage-file-isfile)
            * [.mode](#module-storage-file-mode) : `Symbol`
            * [.read(options)](#module-storage-file-read) ⇒ `Promise.<(string\|ArrayBuffer)>`
            * [.write(data, options)](#module-storage-file-write)
        * _static_
            * [.isFile(entry)](#module-storage-file-isfile) ⇒ `boolean`
    * [.FileSystemProvider](#module-storage-filesystemprovider)
        * _instance_
            * [.isFileSystemProvider](#module-storage-filesystemprovider-isfilesystemprovider)
            * [.supportedDomains](#module-storage-filesystemprovider-supporteddomains)
            * [.getFileForOpening(options)](#module-storage-filesystemprovider-getfileforopening) ⇒ `File` \| `Array.<File>`
            * [.getFileForSaving(options)](#module-storage-filesystemprovider-getfileforsaving) ⇒ `File`
            * [.getFolder(options)](#module-storage-filesystemprovider-getfolder) ⇒ `Folder`
            * [.getTemporaryFolder()](#module-storage-filesystemprovider-gettemporaryfolder)
            * [.getDataFolder()](#module-storage-filesystemprovider-getdatafolder)
            * [.getPluginFolder()](#module-storage-filesystemprovider-getpluginfolder)
            * [.getFsUrl(entry)](#module-storage-filesystemprovider-getfsurl)
            * [.getNativePath(entry)](#module-storage-filesystemprovider-getnativepath)
        * _static_
            * [.isFileSystemProvider(fs)](#module-storage-filesystemprovider-isfilesystemprovider) ⇒ `boolean`
    * [.Folder](#module-storage-folder) ⇐ `Entry`
        * _instance_
            * [.isFolder](#module-storage-folder-isfolder)
            * [.getEntries()](#module-storage-folder-getentries) ⇒ `Array.<Entry>`
            * [.createEntry(name, options)](#module-storage-folder-createentry) ⇒ `File` \| `Folder`
            * [.createFile(name, options)](#module-storage-folder-createfile) ⇒ `File`
            * [.createFolder(name)](#module-storage-folder-createfolder) ⇒ `Folder`
            * [.getEntry(filePath)](#module-storage-folder-getentry) ⇒ `File` \| `Folder`
            * [.renameEntry(entry, newName, options)](#module-storage-folder-renameentry)
        * _static_
            * [.isFolder(entry)](#module-storage-folder-isfolder) ⇒ `boolean`
    * [.FileSystem](#module-storage-filesystem)
        * [.readFile(path, options, callback)](#module-storage-filesystem-readfile) ⇒ `Promise.<(string\|ArrayBuffer)>`
        * [.readFileSync(path, options)](#module-storage-filesystem-readfilesync) ⇒ `string` \| `ArrayBuffer`
        * [.writeFile(path, data, options, callback)](#module-storage-filesystem-writefile) ⇒ `Promise.<int>`
        * [.writeFileSync(path, data, options)](#module-storage-filesystem-writefilesync) ⇒ `int`
        * [.open(path, [flag], [mode], callback)](#module_storage.FileSystem+open) ⇒ `Promise.<int>`
        * [.close(fd, callback)](#module-storage-filesystem-close) ⇒ `int`
        * [.read(fd, buffer, offset, length, position, callback)](#module-storage-filesystem-read) ⇒ `Promise.<Object>`
        * [.write(fd, buffer, offset, length, position, callback)](#module-storage-filesystem-write) ⇒ `Promise.<Object>`
        * [.lstat(path, callback)](#module-storage-filesystem-lstat) ⇒ `Promise.<Object>`
        * [.lstatSync(path)](#module-storage-filesystem-lstatsync) ⇒ `Object`
        * [.rename(oldPath, newPath, callback)](#module-storage-filesystem-rename) ⇒ `Promise.<int>`
        * [.copyFile(srcPath, destPath, flags, callback)](#module-storage-filesystem-copyfile) ⇒ `Promise.<int>`
        * [.unlink(path, callback)](#module-storage-filesystem-unlink) ⇒ `Promise.<int>`
        * [.mkdir(path, callback)](#module-storage-filesystem-mkdir) ⇒ `Promise.<int>`
        * [.rmdir(path, callback)](#module-storage-filesystem-rmdir) ⇒ `Promise.<int>`
        * [.readdir(path, callback)](#module-storage-filesystem-readdir) ⇒ `Promise.<strings>`
        * [.readdirSync(path)](#module-storage-filesystem-readdirsync) ⇒ `Array.<string>`
    * [.localFileSystem](#module-storage-localfilesystem) : `LocalFileSystemProvider`
    * [.errors](#module-storage-errors) : `Errors`
        * [.AbstractMethodInvocationError](#module-storage-errors-abstractmethodinvocationerror) ⇐ `Error`
        * [.ProviderMismatchError](#module-storage-errors-providermismatcherror) ⇐ `Error`
        * [.EntryIsNotAnEntryError](#module-storage-errors-entryisnotanentryerror) ⇐ `Error`
        * [.EntryIsNotAFolderError](#module-storage-errors-entryisnotafoldererror) ⇐ `Error`
        * [.EntryIsNotAFileError](#module-storage-errors-entryisnotafileerror) ⇐ `Error`
        * [.NotAFileSystemError](#module-storage-errors-notafilesystemerror) ⇐ `Error`
        * [.OutOfSpaceError](#module-storage-errors-outofspaceerror) ⇐ `Error`
        * [.PermissionDeniedError](#module-storage-errors-permissiondeniederror) ⇐ `Error`
        * [.EntryExistsError](#module-storage-errors-entryexistserror) ⇐ `Error`
        * [.FileIsReadOnlyError](#module-storage-errors-fileisreadonlyerror) ⇐ `Error`
        * [.DomainNotSupportedError](#module-storage-errors-domainnotsupportederror) ⇐ `Error`
        * [.InvalidFileNameError](#module-storage-errors-invalidfilenameerror) ⇐ `Error`
        * [.InvalidFileFormatError](#module-storage-errors-invalidfileformaterror) ⇐ `Error`
        * [.DataFileFormatMismatchError](#module-storage-errors-datafileformatmismatcherror) ⇐ `Error`
        * [.NotSupported](#module-storage-errors-notsupported) ⇐ `Error`
    * [.domains](#module-storage-domains)
        * [.userDesktop](#module-storage-domains-userdesktop) : `Symbol`
        * [.userDocuments](#module-storage-domains-userdocuments) : `Symbol`
        * [.userPictures](#module-storage-domains-userpictures) : `Symbol`
        * [.userVideos](#module-storage-domains-uservideos) : `Symbol`
        * [.userMusic](#module-storage-domains-usermusic) : `Symbol`
        * [.appLocalData](#module-storage-domains-applocaldata) : `Symbol`
        * [.appLocalLibrary](#module-storage-domains-applocallibrary) : `Symbol`
        * [.appLocalCache](#module-storage-domains-applocalcache) : `Symbol`
        * [.appLocalShared](#module-storage-domains-applocalshared) : `Symbol`
        * [.appLocalTemporary](#module-storage-domains-applocaltemporary) : `Symbol`
        * [.appRoamingData](#module-storage-domains-approamingdata) : `Symbol`
        * [.appRoamingLibrary](#module-storage-domains-approaminglibrary) : `Symbol`
    * [.fileTypes](#module-storage-filetypes)
        * [.text](#module-storage-filetypes-text)
        * [.images](#module-storage-filetypes-images)
        * [.all](#module-storage-filetypes-all)
    * [.formats](#module-storage-formats)
        * [.utf8](#module-storage-formats-utf8) : `Symbol`
        * [.binary](#module-storage-formats-binary) : `Symbol`
    * [.modes](#module-storage-modes)
        * [.readOnly](#module-storage-modes-readonly) : `Symbol`
        * [.readWrite](#module-storage-modes-readwrite) : `Symbol`
    * [.types](#module-storage-types)
        * [.file](#module-storage-types-file) : `Symbol`
        * [.folder](#module-storage-types-folder) : `Symbol`


<a name="module-storage-entry" id="module-storage-entry"></a>

### storage.Entry
An `Entry` is the base class for `File` and `Folder`. You'll

**Kind**: static class of [`storage`](#module-storage)  

* [.Entry](#module-storage-entry)
    * [new Entry(name, provider, id)](#new-module-storage-entry-new)
    * [.isEntry](#module-storage-entry-isentry) : `boolean`
    * [.isFile](#module-storage-entry-isfile) : `boolean`
    * [.isFolder](#module-storage-entry-isfolder) : `boolean`
    * [.name](#module-storage-entry-name) : `string`
    * [.provider](#module-storage-entry-provider) : `FileSystemProvider`
    * [.url](#module-storage-entry-url) : `string`
    * [.nativePath](#module-storage-entry-nativepath) : `string`
    * [.toString()](#module-storage-entry-tostring)
    * [.copyTo(folder, options)](#module-storage-entry-copyto)
    * [.moveTo(folder, options)](#module-storage-entry-moveto)
    * [.delete()](#module-storage-entry-delete)
    * [.getMetadata()](#module-storage-entry-getmetadata) ⇒ `Promise.<EntryMetadata>`


<a name="new-module-storage-entry-new" id="new-module-storage-entry-new"></a>

#### new Entry(name, provider, id)
Creates an instance of Entry.


| Param | Type |
| --- | --- |
| name | `\*` | 
| provider | `\*` | 
| id | `\*` | 


<a name="module-storage-entry-isentry" id="module-storage-entry-isentry"></a>

#### entry.isEntry : `boolean`
Indicates that this instance is an `Entry`. Useful for type-checking.

**Kind**: instance property of [`Entry`](#module-storage-entry)  
**Example**  
```js
if (something.isEntry) {
```

<a name="module-storage-entry-isfile" id="module-storage-entry-isfile"></a>

#### entry.isFile : `boolean`
Indicates that this instance is **not** a `File`. Useful for type-

**Kind**: instance property of [`Entry`](#module-storage-entry)  
**Read only**: true  
**Example**  
```js
if (!anEntry.isFile) {
```

<a name="module-storage-entry-isfolder" id="module-storage-entry-isfolder"></a>

#### entry.isFolder : `boolean`
Indicates that this instance is **not** a folder. Useful for type-

**Kind**: instance property of [`Entry`](#module-storage-entry)  
**Read only**: true  
**Example**  
```js
if (!anEntry.isFolder) {
```

<a name="module-storage-entry-name" id="module-storage-entry-name"></a>

#### entry.name : `string`
The name of this entry. Read-only.

**Kind**: instance property of [`Entry`](#module-storage-entry)  
**Read only**: true  
**Example**  
```js
console.log(anEntry.name);
```

<a name="module-storage-entry-provider" id="module-storage-entry-provider"></a>

#### entry.provider : `FileSystemProvider`
The associated provider that services this entry. Read-only.

**Kind**: instance property of [`Entry`](#module-storage-entry)  
**Read only**: true  
**Example**  
```js
if (entryOne.provider !== entryTwo.provider) {
```

<a name="module-storage-entry-url" id="module-storage-entry-url"></a>

#### entry.url : `string`
The url of this entry. You can use this url as input to other entities of the extension system like for eg: set as src attribute of a Image widget in UI. Read-only.

**Kind**: instance property of [`Entry`](#module-storage-entry)  
**Read only**: true  
**Example**  
```js
console.log(anEntry.url);
```

<a name="module-storage-entry-nativepath" id="module-storage-entry-nativepath"></a>

#### entry.nativePath : `string`
The platform native file-system path of this entry. Read-only

**Kind**: instance property of [`Entry`](#module-storage-entry)  
**Read only**: true  
**Example**  
```js
console.log(anEntry.nativePath);
```

<a name="module-storage-entry-tostring" id="module-storage-entry-tostring"></a>

#### entry.toString()
returns the details of the given entry like name, type and native path in a readable string format.

**Kind**: instance method of [`Entry`](#module-storage-entry)  

<a name="module-storage-entry-copyto" id="module-storage-entry-copyto"></a>

#### entry.copyTo(folder, options)
Copies this entry to the specified `folder`.

**Kind**: instance method of [`Entry`](#module-storage-entry)  
**Throws**:

- `EntryExists` if the attempt would overwrite an entry and `overwrite` is `false`
- `PermissionDenied` if the underlying file system rejects the attempt
- `OutOfSpace` if the file system is out of storage space


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| folder | `Folder` |  | the folder to which to copy this entry |
| options | `\*` |  |  |
| [options.overwrite] | `boolean` | <code>false</code> | if `true`, allows overwriting existing entries |
| [options.allowFolderCopy] | `boolean` | <code>false</code> | if `true`, allows copying the folder |

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
await someFolder.copyTo(anotherFolder, {overwrite: true, allowFolderCopy: true});
```

<a name="module-storage-entry-moveto" id="module-storage-entry-moveto"></a>

#### entry.moveTo(folder, options)
Moves this entry to the target folder, optionally specifying a new name.

**Kind**: instance method of [`Entry`](#module-storage-entry)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| folder | `Folder` |  | the folder to which to move this entry |
| options | `\*` |  |  |
| [options.overwrite] | `boolean` | <code>false</code> | If `true` allows the move to overwrite existing files |
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

#### entry.delete()
Removes this entry from the file system. If the entry is a folder, all the

**Kind**: instance method of [`Entry`](#module-storage-entry)  
**Example**  
```js
await aFile.delete();
```

<a name="module-storage-entry-getmetadata" id="module-storage-entry-getmetadata"></a>

#### entry.getMetadata() ⇒ `Promise.<EntryMetadata>`
Returns this entry's metadata.

**Kind**: instance method of [`Entry`](#module-storage-entry)  
**Example**  
```js
const metadata = aFile.getMetadata();
```

<a name="module-storage-entrymetadata" id="module-storage-entrymetadata"></a>

### storage.EntryMetadata
Metadata for an entry. It includes useful information such as:

* size of the file (if a file)
* date created
* date modified
* name

You'll not instantiate this directly; use [Entry#getMetadata](#module-storage-entry-getmetadata) to do so.

**Kind**: static class of [`storage`](#module-storage)  

* [.EntryMetadata](#module-storage-entrymetadata)
    * [.name](#module-storage-entrymetadata-name) : `string`
    * [.size](#module-storage-entrymetadata-size) : `number`
    * [.dateCreated](#module-storage-entrymetadata-datecreated) : `Date`
    * [.dateModified](#module-storage-entrymetadata-datemodified) : `Date`
    * [.isFile](#module-storage-entrymetadata-isfile) : `boolean`
    * [.isFolder](#module-storage-entrymetadata-isfolder) : `boolean`


<a name="module-storage-entrymetadata-name" id="module-storage-entrymetadata-name"></a>

#### entryMetadata.name : `string`
The name of the entry.

**Kind**: instance property of [`EntryMetadata`](#module-storage-entrymetadata)  

<a name="module-storage-entrymetadata-size" id="module-storage-entrymetadata-size"></a>

#### entryMetadata.size : `number`
The size of the entry, if a file. Zero if a folder.

**Kind**: instance property of [`EntryMetadata`](#module-storage-entrymetadata)  

<a name="module-storage-entrymetadata-datecreated" id="module-storage-entrymetadata-datecreated"></a>

#### entryMetadata.dateCreated : `Date`
The date this entry was created.

**Kind**: instance property of [`EntryMetadata`](#module-storage-entrymetadata)  

<a name="module-storage-entrymetadata-datemodified" id="module-storage-entrymetadata-datemodified"></a>

#### entryMetadata.dateModified : `Date`
The date this entry was modified.

**Kind**: instance property of [`EntryMetadata`](#module-storage-entrymetadata)  

<a name="module-storage-entrymetadata-isfile" id="module-storage-entrymetadata-isfile"></a>

#### entryMetadata.isFile : `boolean`
Indicates if the entry is a file

**Kind**: instance property of [`EntryMetadata`](#module-storage-entrymetadata)  

<a name="module-storage-entrymetadata-isfolder" id="module-storage-entrymetadata-isfolder"></a>

#### entryMetadata.isFolder : `boolean`
Indicates if the entry is a folder

**Kind**: instance property of [`EntryMetadata`](#module-storage-entrymetadata)  

<a name="module-storage-file" id="module-storage-file"></a>

### storage.File
Represents a file on a file system. Provides methods for reading from and

**Kind**: static class of [`storage`](#module-storage)  

* [.File](#module-storage-file)
    * _instance_
        * [.isFile](#module-storage-file-isfile)
        * [.mode](#module-storage-file-mode) : `Symbol`
        * [.read(options)](#module-storage-file-read) ⇒ `Promise.<(string\|ArrayBuffer)>`
        * [.write(data, options)](#module-storage-file-write)
    * _static_
        * [.isFile(entry)](#module-storage-file-isfile) ⇒ `boolean`


<a name="module-storage-file-isfile" id="module-storage-file-isfile"></a>

#### file.isFile
Indicates that this instance is a file.

**Kind**: instance property of [`File`](#module-storage-file)  
**Example**  
```js
if (anEntry.isFile) {
```

<a name="module-storage-file-mode" id="module-storage-file-mode"></a>

#### file.mode : `Symbol`
Indicates whether this file is read-only or read-write. See [readOnly](#module-storage-modes-readonly) and [readWrite](#module-storage-modes-readwrite).

**Kind**: instance property of [`File`](#module-storage-file)  
**Example**  
```js
if (aFile.mode === modes.readOnly) {
```

<a name="module-storage-file-read" id="module-storage-file-read"></a>

#### file.read(options) ⇒ `Promise.<(string\|ArrayBuffer)>`
Reads data from the file and returns it. The file format can be specified

**Kind**: instance method of [`File`](#module-storage-file)  
**Returns**: `Promise.<(string\|ArrayBuffer)>` - the contents of the file  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| options | `any` |  |  |
| [options.format] | `Symbol` | <code>formats.utf8</code> | The format of the file; see [utf8](#module-storage-formats-utf8) and [binary](#module-storage-formats-binary). |

**Example**  
```js
const text = await myNovel.read();
```
**Example**  
```js
const data = await myNovel.read({format: formats.binary});
```

<a name="module-storage-file-write" id="module-storage-file-write"></a>

#### file.write(data, options)
Writes data to a file, appending if desired. The format of the file

**Kind**: instance method of [`File`](#module-storage-file)  
**Throws**:

- `FileIsReadOnly` if writing to a read-only file
- `OutOfSpace` If writing to the file causes the file system to exceed the available space (or quota)


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| data | `string` \| `ArrayBuffer` |  | the data to write to the file |
| options | `any` |  |  |
| [options.format] | `Symbol` | <code>formats.utf8</code> | the format of the file; see [utf8](#module-storage-formats-utf8) and [binary](#module-storage-formats-binary). |
| [options.append] | `boolean` | <code>false</code> | if `true`, the data is written to the end of the file |

**Example**  
```js
await myNovel.write("It was a dark and stormy night.\n");
```
**Example**  
```js
const data = new ArrayBuffer();
```

<a name="module-storage-file-isfile" id="module-storage-file-isfile"></a>

#### File.isFile(entry) ⇒ `boolean`
Determines if the entry is a file or not. This is safe to use even if the

**Kind**: static method of [`File`](#module-storage-file)  
**Returns**: `boolean` - if `true`, the entry is a file.  

| Param | Type | Description |
| --- | --- | --- |
| entry | `any` | the entry to check |


<a name="module-storage-filesystemprovider" id="module-storage-filesystemprovider"></a>

### storage.FileSystemProvider
Provides access to files and folders on a file system. You'll typically not

**Kind**: static class of [`storage`](#module-storage)  

* [.FileSystemProvider](#module-storage-filesystemprovider)
    * _instance_
        * [.isFileSystemProvider](#module-storage-filesystemprovider-isfilesystemprovider)
        * [.supportedDomains](#module-storage-filesystemprovider-supporteddomains)
        * [.getFileForOpening(options)](#module-storage-filesystemprovider-getfileforopening) ⇒ `File` \| `Array.<File>`
        * [.getFileForSaving(options)](#module-storage-filesystemprovider-getfileforsaving) ⇒ `File`
        * [.getFolder(options)](#module-storage-filesystemprovider-getfolder) ⇒ `Folder`
        * [.getTemporaryFolder()](#module-storage-filesystemprovider-gettemporaryfolder)
        * [.getDataFolder()](#module-storage-filesystemprovider-getdatafolder)
        * [.getPluginFolder()](#module-storage-filesystemprovider-getpluginfolder)
        * [.getFsUrl(entry)](#module-storage-filesystemprovider-getfsurl)
        * [.getNativePath(entry)](#module-storage-filesystemprovider-getnativepath)
    * _static_
        * [.isFileSystemProvider(fs)](#module-storage-filesystemprovider-isfilesystemprovider) ⇒ `boolean`


<a name="module-storage-filesystemprovider-isfilesystemprovider" id="module-storage-filesystemprovider-isfilesystemprovider"></a>

#### fileSystemProvider.isFileSystemProvider
Indicates that this is a `FileSystemProvider`. Useful for type-checking.

**Kind**: instance property of [`FileSystemProvider`](#module-storage-filesystemprovider)  

<a name="module-storage-filesystemprovider-supporteddomains" id="module-storage-filesystemprovider-supporteddomains"></a>

#### fileSystemProvider.supportedDomains
An array of the domains this file system supports. If the file system can

**Kind**: instance property of [`FileSystemProvider`](#module-storage-filesystemprovider)  
**Example**  
```js
if (fs.supportedDomains.contains(domains.userDocuments)) {
```

<a name="module-storage-filesystemprovider-getfileforopening" id="module-storage-filesystemprovider-getfileforopening"></a>

#### fileSystemProvider.getFileForOpening(options) ⇒ `File` \| `Array.<File>`
Gets a file (or files) from the file system provider for the purpose of

**Kind**: instance method of [`FileSystemProvider`](#module-storage-filesystemprovider)  
**Returns**: `File` \| `Array.<File>` - based on allowMultiple is true or false, or empty if no file were selected.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| options | `\*` |  |  |
| [options.initialDomain] | `Symbol` |  | the preferred initial location of the file picker. If not defined, the most recently used domain from a file picker is used instead. |
| [options.types] | `Array.<string>` | <code>[&quot;.*&quot;]</code> | array of file types that the file open picker displays. |
| [options.initialLocation] | `File` \| `Folder` |  | the initial location of the file picker. You can pass an existing file or folder entry to suggest the picker to start at this location. If this is a file entry then the method will pick its parent folder as initial location. This will override initialDomain option. |
| [options.allowMultiple] | `boolean` | <code>false</code> | if true, multiple files can be returned (as an array) |

**Example**  
```js
const folder = await fs.getFolder({initialDomain = domains.userDocuments});
```
**Example**  
```js
const files = await fs.getFileForOpening({allowMultiple: true, types: fileTypes.images});
```

<a name="module-storage-filesystemprovider-getfileforsaving" id="module-storage-filesystemprovider-getfileforsaving"></a>

#### fileSystemProvider.getFileForSaving(options) ⇒ `File`
Gets a file reference suitable for saving. The file is read-write. Any

**Kind**: instance method of [`FileSystemProvider`](#module-storage-filesystemprovider)  
**Returns**: `File` - returns the selected file, or `null` if no file were selected.  

| Param | Type | Description |
| --- | --- | --- |
| options | `\*` |  |
| [options.initialDomain] | `Symbol` | the preferred initial location of the file picker. If not defined, the most recently used domain from a file picker is used instead. |
| [options.types] | `Array.<string>` | array of valid file types that the user can choose to assign to a file. |

**Example**  
```js
const file = await fs.getFileForSaving({ types = [ "txt" ]});
```

<a name="module-storage-filesystemprovider-getfolder" id="module-storage-filesystemprovider-getfolder"></a>

#### fileSystemProvider.getFolder(options) ⇒ `Folder`
Gets a folder from the file system via a folder picker dialog. The files

**Kind**: instance method of [`FileSystemProvider`](#module-storage-filesystemprovider)  
**Returns**: `Folder` - the selected folder or `null` if no folder is selected.  

| Param | Type | Description |
| --- | --- | --- |
| options | `any` |  |
| [options.initialDomain] | `Symbol` | the preferred initial location of the file picker. If not defined, the most recently used domain from a file picker is used instead. |

**Example**  
```js
const folder = await fs.getFolder();
```

<a name="module-storage-filesystemprovider-gettemporaryfolder" id="module-storage-filesystemprovider-gettemporaryfolder"></a>

#### fileSystemProvider.getTemporaryFolder()
Returns a temporary folder. The contents of the folder will be removed when

**Kind**: instance method of [`FileSystemProvider`](#module-storage-filesystemprovider)  
**Example**  
```js
const temp = await fs.getTemporaryFolder();
```

<a name="module-storage-filesystemprovider-getdatafolder" id="module-storage-filesystemprovider-getdatafolder"></a>

#### fileSystemProvider.getDataFolder()
Returns a folder that can be used for extension's data storage without user interaction.

**Kind**: instance method of [`FileSystemProvider`](#module-storage-filesystemprovider)  

<a name="module-storage-filesystemprovider-getpluginfolder" id="module-storage-filesystemprovider-getpluginfolder"></a>

#### fileSystemProvider.getPluginFolder()
Returns an plugin's folder – this folder and everything within it are read only.

**Kind**: instance method of [`FileSystemProvider`](#module-storage-filesystemprovider)  

<a name="module-storage-filesystemprovider-getfsurl" id="module-storage-filesystemprovider-getfsurl"></a>

#### fileSystemProvider.getFsUrl(entry)
Returns the fs url of given entry.

**Kind**: instance method of [`FileSystemProvider`](#module-storage-filesystemprovider)  
**Access**: public  

| Param | Type |
| --- | --- |
| entry | `Entry` | 


<a name="module-storage-filesystemprovider-getnativepath" id="module-storage-filesystemprovider-getnativepath"></a>

#### fileSystemProvider.getNativePath(entry)
Returns the platform native file system path of given entry.

**Kind**: instance method of [`FileSystemProvider`](#module-storage-filesystemprovider)  
**Access**: public  

| Param | Type |
| --- | --- |
| entry | `Entry` | 


<a name="module-storage-filesystemprovider-isfilesystemprovider" id="module-storage-filesystemprovider-isfilesystemprovider"></a>

#### FileSystemProvider.isFileSystemProvider(fs) ⇒ `boolean`
Checks if the supplied object is a `FileSystemProvider`. It's safe to use even

**Kind**: static method of [`FileSystemProvider`](#module-storage-filesystemprovider)  
**Returns**: `boolean` - If `true`, the object is a file system provider  

| Param | Type | Description |
| --- | --- | --- |
| fs | `any` | the object to check |


<a name="module-storage-folder" id="module-storage-folder"></a>

### storage.Folder ⇐ `Entry`
Represents a folder on a file system. You'll never instantiate this directly,
but will get it by calling [FileSystemProvider#getTemporaryFolder](FileSystemProvider#getTemporaryFolder),
[FileSystemProvider#getFolder](FileSystemProvider#getFolder), or via [Folder#getEntries](Folder#getEntries).

**Kind**: static class of [`storage`](#module-storage)  
**Extends**: `Entry`  

* [.Folder](#module-storage-folder) ⇐ `Entry`
    * _instance_
        * [.isFolder](#module-storage-folder-isfolder)
        * [.getEntries()](#module-storage-folder-getentries) ⇒ `Array.<Entry>`
        * [.createEntry(name, options)](#module-storage-folder-createentry) ⇒ `File` \| `Folder`
        * [.createFile(name, options)](#module-storage-folder-createfile) ⇒ `File`
        * [.createFolder(name)](#module-storage-folder-createfolder) ⇒ `Folder`
        * [.getEntry(filePath)](#module-storage-folder-getentry) ⇒ `File` \| `Folder`
        * [.renameEntry(entry, newName, options)](#module-storage-folder-renameentry)
    * _static_
        * [.isFolder(entry)](#module-storage-folder-isfolder) ⇒ `boolean`


<a name="module-storage-folder-isfolder" id="module-storage-folder-isfolder"></a>

#### folder.isFolder
Indicates that this instance is a folder. Useful for type checking.

**Kind**: instance property of [`Folder`](#module-storage-folder)  

<a name="module-storage-folder-getentries" id="module-storage-folder-getentries"></a>

#### folder.getEntries() ⇒ `Array.<Entry>`
Returns an array of entries contained within this folder.

**Kind**: instance method of [`Folder`](#module-storage-folder)  
**Returns**: `Array.<Entry>` - The entries within the folder.  
**Example**  
```js
const entries = await aFolder.getEntries();
const allFiles = entries.filter(entry => entry.isFile);
```

<a name="module-storage-folder-createentry" id="module-storage-folder-createentry"></a>

#### folder.createEntry(name, options) ⇒ `File` \| `Folder`
Creates an entry within this folder and returns the appropriate instance.

**Kind**: instance method of [`Folder`](#module-storage-folder)  
**Returns**: `File` \| `Folder` - the created entry  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| name | `string` |  | the name of the entry to create |
| options | `any` |  |  |
| [options.type] | `Symbol` | <code>types.file</code> | Indicates which kind of entry to create. Pass [folder](folder) to create a new folder. Note that if the type is file then this method just create a file entry object and not the actual file on the disk. The file actually gets created when you call for eg: write method on the file entry object. |
| [options.overwrite] | `boolean` | <code>false</code> | If `true`, the create attempt can overwrite an existing file |

**Example**  
```js
const myNovel = await aFolder.createEntry("mynovel.txt");
```
**Example**  
```js
const catImageCollection = await aFolder.createEntry("cats", {type = types.folder});
```

<a name="module-storage-folder-createfile" id="module-storage-folder-createfile"></a>

#### folder.createFile(name, options) ⇒ `File`
Creates a File Entry object within this folder and returns the appropriate instance.
Note that this method just create a file entry object and not the actual file on the disk.
The file actually gets created when you call for eg: write method on the file entry object.

**Kind**: instance method of [`Folder`](#module-storage-folder)  
**Returns**: `File` - the created file entry  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| name | `string` |  | the name of the file to create. |
| options | `any` |  |  |
| [options.overwrite] | `boolean` | <code>false</code> | If `true`, the create attempt can overwrite an existing file |

**Example**  
```js
const myNovelTxtFile = await aFolder.createFile("mynovel.txt");
```

<a name="module-storage-folder-createfolder" id="module-storage-folder-createfolder"></a>

#### folder.createFolder(name) ⇒ `Folder`
Creates a Folder within this folder and returns the appropriate instance.

**Kind**: instance method of [`Folder`](#module-storage-folder)  
**Returns**: `Folder` - the created folder entry object  

| Param | Type | Description |
| --- | --- | --- |
| name | `string` | the name of the folder to create. |

**Example**  
```js
const myCollectionsFolder = await aFolder.createFolder("collections");
```

<a name="module-storage-folder-getentry" id="module-storage-folder-getentry"></a>

#### folder.getEntry(filePath) ⇒ `File` \| `Folder`
Gets an entry from within this folder and returns the appropriate instance.

**Kind**: instance method of [`Folder`](#module-storage-folder)  
**Returns**: `File` \| `Folder` - the fetched entry.  

| Param | Type | Description |
| --- | --- | --- |
| filePath | `string` | the name/path of the entry to fetch |

**Example**  
```js
const myNovel = await aFolder.getEntry("mynovel.txt");
```

<a name="module-storage-folder-renameentry" id="module-storage-folder-renameentry"></a>

#### folder.renameEntry(entry, newName, options)
Renames an entry to a new name.

**Kind**: instance method of [`Folder`](#module-storage-folder)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| entry | `Entry` |  | the entry to rename |
| newName | `string` |  | the new name to assign |
| options | `any` |  |  |
| [options.overwrite] | `boolean` | <code>false</code> | if `true`, renaming can overwrite an existing entry |

**Example**  
```js
await myNovels.rename(myNovel, "myFantasticNovel.txt");
```

<a name="module-storage-folder-isfolder" id="module-storage-folder-isfolder"></a>

#### Folder.isFolder(entry) ⇒ `boolean`
Checks if an entry is a folder. Safe to use if entry might be `null` or
`undefined`. Useful for type checking.

**Kind**: static method of [`Folder`](#module-storage-folder)  
**Returns**: `boolean` - if `true`, the entry is a folder  

| Param | Type | Description |
| --- | --- | --- |
| entry | `any` | the entry to check |


<a name="module-storage-filesystem" id="module-storage-filesystem"></a>

### storage.FileSystem
UXP Provides Node.js style file system API, FSAPI.

**Kind**: static class of [`storage`](#module-storage)  

* [.FileSystem](#module-storage-filesystem)
    * [.readFile(path, options, callback)](#module-storage-filesystem-readfile) ⇒ `Promise.<(string\|ArrayBuffer)>`
    * [.readFileSync(path, options)](#module-storage-filesystem-readfilesync) ⇒ `string` \| `ArrayBuffer`
    * [.writeFile(path, data, options, callback)](#module-storage-filesystem-writefile) ⇒ `Promise.<int>`
    * [.writeFileSync(path, data, options)](#module-storage-filesystem-writefilesync) ⇒ `int`
    * [.open(path, [flag], [mode], callback)](#module_storage.FileSystem+open) ⇒ `Promise.<int>`
    * [.close(fd, callback)](#module-storage-filesystem-close) ⇒ `int`
    * [.read(fd, buffer, offset, length, position, callback)](#module-storage-filesystem-read) ⇒ `Promise.<Object>`
    * [.write(fd, buffer, offset, length, position, callback)](#module-storage-filesystem-write) ⇒ `Promise.<Object>`
    * [.lstat(path, callback)](#module-storage-filesystem-lstat) ⇒ `Promise.<Object>`
    * [.lstatSync(path)](#module-storage-filesystem-lstatsync) ⇒ `Object`
    * [.rename(oldPath, newPath, callback)](#module-storage-filesystem-rename) ⇒ `Promise.<int>`
    * [.copyFile(srcPath, destPath, flags, callback)](#module-storage-filesystem-copyfile) ⇒ `Promise.<int>`
    * [.unlink(path, callback)](#module-storage-filesystem-unlink) ⇒ `Promise.<int>`
    * [.mkdir(path, callback)](#module-storage-filesystem-mkdir) ⇒ `Promise.<int>`
    * [.rmdir(path, callback)](#module-storage-filesystem-rmdir) ⇒ `Promise.<int>`
    * [.readdir(path, callback)](#module-storage-filesystem-readdir) ⇒ `Promise.<strings>`
    * [.readdirSync(path)](#module-storage-filesystem-readdirsync) ⇒ `Array.<string>`


<a name="module-storage-filesystem-readfile" id="module-storage-filesystem-readfile"></a>

#### fileSystem.readFile(path, options, callback) ⇒ `Promise.<(string\|ArrayBuffer)>`
Reads data from the path asynchronously.

**Kind**: instance method of [`FileSystem`](#module-storage-filesystem)  
**Returns**: `Promise.<(string\|ArrayBuffer)>` - the contents of the file  

| Param | Type | Description |
| --- | --- | --- |
| path | `string` | path where the file to read is located |
| options | `any` |  |
| [options.encoding] | `string` | the encoding of the file can be "utf-8", "utf-16be" or "utf-16le" |
| callback | `function` | if not provided, this function will return Promise object |

**Example**  
```js
const data = await fs.readFile("plugin-data:/binaryFile.obj");
```
**Example**  
```js
const text = await fs.readFile("plugin-data:/textFile.txt", {encoding: "utf-8"});
```

<a name="module-storage-filesystem-readfilesync" id="module-storage-filesystem-readfilesync"></a>

#### fileSystem.readFileSync(path, options) ⇒ `string` \| `ArrayBuffer`
Reads data from the path synchronously.

**Kind**: instance method of [`FileSystem`](#module-storage-filesystem)  
**Returns**: `string` \| `ArrayBuffer` - the contents of the file  

| Param | Type | Description |
| --- | --- | --- |
| path | `string` | path where the file to read is located |
| options | `any` |  |
| [options.encoding] | `string` | the encoding of the file can be "utf-8", "utf-16be" or "utf-16le" |

**Example**  
```js
const data = fs.readFileSync("plugin-data:/binaryFile.obj");
```
**Example**  
```js
const text = fs.readFileSync("plugin-data:/textFile.txt", {encoding: "utf-8"});
```

<a name="module-storage-filesystem-writefile" id="module-storage-filesystem-writefile"></a>

#### fileSystem.writeFile(path, data, options, callback) ⇒ `Promise.<int>`
Writes data to the path asynchronously, appending if desired.

**Kind**: instance method of [`FileSystem`](#module-storage-filesystem)  
**Returns**: `Promise.<int>` - the length of contents written to the file  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| path | `string` |  | path where the file to write is located |
| data | `string` \| `ArrayBuffer` \| `ArrayBufferView` |  | the data to write to the file |
| options | `any` |  |  |
| [options.flag] | `int` \| `string` | <code>w</code> | see [file-system-flags](https://nodejs.org/api/fs.html#file-system-flags) in Node.js |
| [options.mode] | `int` \| `string` | <code>0o666</code> | see [File modes](https://nodejs.org/api/fs.html#file-modes) in Node.js |
| [options.encoding] | `string` |  | the encoding of the file can be "utf-8", "utf-16be" or "utf-16le" |
| callback | `function` |  | if not provided, this function will return Promise object |

**Example**  
```js
const bufLen = await fs.writeFile("plugin-data:/binaryFile.obj", new Uint8Array([1, 2, 3]));
```
**Example**  
```js
const strLen = await fs.writeFile("plugin-data:/textFile.txt", "It was a dark and stormy night.\n", {encoding: "utf-8"});
```

<a name="module-storage-filesystem-writefilesync" id="module-storage-filesystem-writefilesync"></a>

#### fileSystem.writeFileSync(path, data, options) ⇒ `int`
Writes data to a path synchronously, appending if desired.

**Kind**: instance method of [`FileSystem`](#module-storage-filesystem)  
**Returns**: `int` - the length of contents written to the file  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| path | `string` |  | path where the file to write is located |
| data | `string` \| `ArrayBuffer` \| `ArrayBufferView` |  | the data to write to the file |
| options | `any` |  |  |
| [options.flag] | `int` \| `string` | <code>w</code> | see [file-system-flags](https://nodejs.org/api/fs.html#file-system-flags) in Node.js |
| [options.mode] | `int` \| `string` | <code>0o666</code> | see [File modes](https://nodejs.org/api/fs.html#file-modes) in Node.js |
| [options.encoding] | `string` |  | the encoding of the file can be "utf-8", "utf-16be" or "utf-16le" |

**Example**  
```js
const bufLen = fs.writeFileSync("plugin-data:/binaryFile.obj", new Uint8Array([1, 2, 3]));
```
**Example**  
```js
const strLen = fs.writeFileSync("plugin-data:/textFile.txt", "It was a dark and stormy night.\n", {encoding: "utf-8"});
```

<a name="module-storage-filesystem-open" id="module-storage-filesystem-open"></a>

#### fileSystem.open(path, [flag], [mode], callback) ⇒ `Promise.<int>`
Opens or a creates a file asynchronously

**Kind**: instance method of [`FileSystem`](#module-storage-filesystem)  
**Returns**: `Promise.<int>` - fd(file descriptor)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| path | `string` |  | path where to open a file |
| [flag] | `int` \| `string` | <code>r</code> | see [file-system-flags](https://nodejs.org/api/fs.html#file-system-flags) in Node.js |
| [mode] | `int` \| `string` | <code>0o666</code> | see [File modes](https://nodejs.org/api/fs.html#file-modes) in Node.js |
| callback | `function` |  | if not provided, this function will return Promise object |

**Example**  
```js
const fd = await fs.open("plugin-data:/fileToRead.txt", "r");
```

<a name="module-storage-filesystem-close" id="module-storage-filesystem-close"></a>

#### fileSystem.close(fd, callback) ⇒ `int`
Closes a file descriptor asynchronously

**Kind**: instance method of [`FileSystem`](#module-storage-filesystem)  
**Returns**: `int` - 0 if succeeded, otherwise throws an Error  

| Param | Type | Description |
| --- | --- | --- |
| fd | `int` | file descriptor of the file to close |
| callback | `function` | if not provided, this function will return Promise object |

**Example**  
```js
await fs.close(fd);
```

<a name="module-storage-filesystem-read" id="module-storage-filesystem-read"></a>

#### fileSystem.read(fd, buffer, offset, length, position, callback) ⇒ `Promise.<Object>`
Reads data in chunks from the file it refers to the file descriptor

**Kind**: instance method of [`FileSystem`](#module-storage-filesystem)  
**Returns**: `Promise.<Object>` - { bytesRead, buffer }  
**Throws**:

- `Error` if invalid file descriptor is passed.


| Param | Type | Description |
| --- | --- | --- |
| fd | `int` | a file descriptor obtained from fs.open |
| buffer | `ArrayBuffer` | the buffer where read bytes are written to |
| offset | `int` | the offset to the buffer where read bytes are written from |
| length | `int` | the length to read |
| position | `int` | the position of the file to read from. if -1, the current file position to read from. when the bytes are read, the current file position advances by size of the read bytes. if the value is greater than or equal to 0, it specifies a file position to read from. after the bytes are read, a current file position stayed the same |
| callback | `function` | if not provided, this function will return Promise object |

**Example**  
```js
const fileSize = 1024;
```

<a name="module-storage-filesystem-write" id="module-storage-filesystem-write"></a>

#### fileSystem.write(fd, buffer, offset, length, position, callback) ⇒ `Promise.<Object>`
Writes data in chunks to the file it refers to the file descriptor

**Kind**: instance method of [`FileSystem`](#module-storage-filesystem)  
**Returns**: `Promise.<Object>` - { bytesWritten, buffer }  
**Throws**:

- `Error` if invalid file descriptor is passed


| Param | Type | Description |
| --- | --- | --- |
| fd | `int` | the file descriptor obtained from fs.open |
| buffer | `ArrayBuffer` | the buffer where the data to write with |
| offset | `int` | the offset of the buffer where write bytes start from |
| length | `int` | the length to write |
| position | `int` | the position of the file to write from. if -1,writing will start from the current file position. when the bytes are written, the current file position advances by size of the written bytes. if the value is greater than or equal to 0, it specifies a file position to write from. After writing, it will not change the file position |
| callback | `function` | if not provided, this function will return Promise object |

**Example**  
```js
const fd = await fs.open("plugin-data:/fileToWrite.txt", "w+");
```

<a name="module-storage-filesystem-lstat" id="module-storage-filesystem-lstat"></a>

#### fileSystem.lstat(path, callback) ⇒ `Promise.<Object>`
Gets information asynchronously from a file or a folder of the path

**Kind**: instance method of [`FileSystem`](#module-storage-filesystem)  
**Returns**: `Promise.<Object>` - see [Stats](https://nodejs.org/api/fs.html#class-fsstats) class in Node.js

| Param | Type | Description |
| --- | --- | --- |
| path | `string` | path where the file to get its information is located |
| callback | `function` | if not provided, this function will return Promise object |

**Example**  
```js
const stats = await fs.lstat("plugin-data:/textFile.txt");
```

<a name="module-storage-filesystem-lstatsync" id="module-storage-filesystem-lstatsync"></a>

#### fileSystem.lstatSync(path) ⇒ `Object`
Gets information synchronously from a file or a folder of the path

**Kind**: instance method of [`FileSystem`](#module-storage-filesystem)  
**Returns**: `Object` - see [Stats](https://nodejs.org/api/fs.html#class-fsstats) class in Node.js

| Param | Type | Description |
| --- | --- | --- |
| path | `string` | path where the file to get its information is located |

**Example**  
```js
const stats = fs.lstatSync("plugin-data:/textFile.txt");
```

<a name="module-storage-filesystem-rename" id="module-storage-filesystem-rename"></a>

#### fileSystem.rename(oldPath, newPath, callback) ⇒ `Promise.<int>`
Renames or moves, if required, the file from the oldPath to the newPath

**Kind**: instance method of [`FileSystem`](#module-storage-filesystem)  
**Returns**: `Promise.<int>` - 0 if succeeded, otherwise throws an Error  

| Param | Type | Description |
| --- | --- | --- |
| oldPath | `string` | path where the old file name to change is located |
| newPath | `string` | path where the new file name will be |
| callback | `function` | if not provided, this function will return Promise object |

**Example**  
```js
fs.rename("plugin-data:/oldName.txt", "plugin-temp:/newName.txt");
```

<a name="module-storage-filesystem-copyfile" id="module-storage-filesystem-copyfile"></a>

#### fileSystem.copyFile(srcPath, destPath, flags, callback) ⇒ `Promise.<int>`
Copies a file or a folder from the source path to the destination path

**Kind**: instance method of [`FileSystem`](#module-storage-filesystem)  
**Returns**: `Promise.<int>` - 0 if succeeded, otherwise throws an Error  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| srcPath | `string` |  | path where the source file to copy is located |
| destPath | `string` |  | path where the source file will be copied to |
| flags | `int` | <code>0</code> | see flags in [uv_fs_copyfile](https://docs.libuv.org/en/v1.x/fs.html) |
| callback | `function` |  | if not provided, this function will return Promise object |

**Example**  
```js
const data = fs.copyFile("plugin-data:/copyFrom.txt", "plugin-temp:/copyTo.txt");
```

<a name="module-storage-filesystem-unlink" id="module-storage-filesystem-unlink"></a>

#### fileSystem.unlink(path, callback) ⇒ `Promise.<int>`
Deletes a name with the file it refers to asynchronously

**Kind**: instance method of [`FileSystem`](#module-storage-filesystem)  
**Returns**: `Promise.<int>` - 0 if succeeded, otherwise throws an Error  

| Param | Type | Description |
| --- | --- | --- |
| path | `string` | path where the file to delete is located |
| callback | `function` | if not provided, this function will return Promise object |

**Example**  
```js
await fs.unlink("plugin-data:/fileToDelete.txt");
```

<a name="module-storage-filesystem-mkdir" id="module-storage-filesystem-mkdir"></a>

#### fileSystem.mkdir(path, callback) ⇒ `Promise.<int>`
Creates a directory of the path asynchronously

**Kind**: instance method of [`FileSystem`](#module-storage-filesystem)  
**Returns**: `Promise.<int>` - 0 if succeeded, otherwise throws an Error  

| Param | Type | Description |
| --- | --- | --- |
| path | `string` | path where to create the directory |
| callback | `function` | if not provided, this function will return Promise object |

**Example**  
```js
await fs.mkdir("plugin-data:/newDir");
```

<a name="module-storage-filesystem-rmdir" id="module-storage-filesystem-rmdir"></a>

#### fileSystem.rmdir(path, callback) ⇒ `Promise.<int>`
Removes a directory asynchronously

**Kind**: instance method of [`FileSystem`](#module-storage-filesystem)  
**Returns**: `Promise.<int>` - 0 if succeeded, otherwise throws an Error  

| Param | Type | Description |
| --- | --- | --- |
| path | `string` | path where to remove the directory |
| callback | `function` | if not provided, this function will return Promise object |

**Example**  
```js
await fs.rmdir("plugin-data:/dirToRemove");
```

<a name="module-storage-filesystem-readdir" id="module-storage-filesystem-readdir"></a>

#### fileSystem.readdir(path, callback) ⇒ `Promise.<strings>`
Reads a directory to list the containing files and directories asynchronously

**Kind**: instance method of [`FileSystem`](#module-storage-filesystem)  
**Returns**: `Promise.<strings>` - string array of containing files and directories in the path  

| Param | Type | Description |
| --- | --- | --- |
| path | `string` | path where to read the directory |
| callback | `function` | if not provided, this function will return Promise object |

**Example**  
```js
const paths = await fs.readdir("plugin-data:/dirToRead");
```

<a name="module-storage-filesystem-readdirsync" id="module-storage-filesystem-readdirsync"></a>

#### fileSystem.readdirSync(path) ⇒ `Array.<string>`
Reads a directory to list the containing files and directories synchronously

**Kind**: instance method of [`FileSystem`](#module-storage-filesystem)  
**Returns**: `Array.<string>` - string array of containing files and directories in the path  

| Param | Type | Description |
| --- | --- | --- |
| path | `string` | path where to read the directory |

**Example**  
```js
const paths = fs.readdirSync("plugin-data:/dirToRead");
```

<a name="module-storage-localfilesystem" id="module-storage-localfilesystem"></a>

### storage.localFileSystem : `LocalFileSystemProvider`
**Kind**: static property of [`storage`](#module-storage)  

<a name="module-storage-errors" id="module-storage-errors"></a>

### storage.errors : `Errors`
**Kind**: static property of [`storage`](#module-storage)  

* [.errors](#module-storage-errors) : `Errors`
    * [.AbstractMethodInvocationError](#module-storage-errors-abstractmethodinvocationerror) ⇐ `Error`
    * [.ProviderMismatchError](#module-storage-errors-providermismatcherror) ⇐ `Error`
    * [.EntryIsNotAnEntryError](#module-storage-errors-entryisnotanentryerror) ⇐ `Error`
    * [.EntryIsNotAFolderError](#module-storage-errors-entryisnotafoldererror) ⇐ `Error`
    * [.EntryIsNotAFileError](#module-storage-errors-entryisnotafileerror) ⇐ `Error`
    * [.NotAFileSystemError](#module-storage-errors-notafilesystemerror) ⇐ `Error`
    * [.OutOfSpaceError](#module-storage-errors-outofspaceerror) ⇐ `Error`
    * [.PermissionDeniedError](#module-storage-errors-permissiondeniederror) ⇐ `Error`
    * [.EntryExistsError](#module-storage-errors-entryexistserror) ⇐ `Error`
    * [.FileIsReadOnlyError](#module-storage-errors-fileisreadonlyerror) ⇐ `Error`
    * [.DomainNotSupportedError](#module-storage-errors-domainnotsupportederror) ⇐ `Error`
    * [.InvalidFileNameError](#module-storage-errors-invalidfilenameerror) ⇐ `Error`
    * [.InvalidFileFormatError](#module-storage-errors-invalidfileformaterror) ⇐ `Error`
    * [.DataFileFormatMismatchError](#module-storage-errors-datafileformatmismatcherror) ⇐ `Error`
    * [.NotSupported](#module-storage-errors-notsupported) ⇐ `Error`


<a name="module-storage-errors-abstractmethodinvocationerror" id="module-storage-errors-abstractmethodinvocationerror"></a>

#### errors.AbstractMethodInvocationError ⇐ `Error`
Attempted to invoke an abstract method.

**Kind**: static class of [`errors`](#module-storage-errors)  
**Extends**: `Error`  

<a name="module-storage-errors-providermismatcherror" id="module-storage-errors-providermismatcherror"></a>

#### errors.ProviderMismatchError ⇐ `Error`
Attempted to execute a command that required the providers of all
entries to match.

**Kind**: static class of [`errors`](#module-storage-errors)  
**Extends**: `Error`  

<a name="module-storage-errors-entryisnotanentryerror" id="module-storage-errors-entryisnotanentryerror"></a>

#### errors.EntryIsNotAnEntryError ⇐ `Error`
The object passed as an entry is not actually an `Entry`.

**Kind**: static class of [`errors`](#module-storage-errors)  
**Extends**: `Error`  

<a name="module-storage-errors-entryisnotafoldererror" id="module-storage-errors-entryisnotafoldererror"></a>

#### errors.EntryIsNotAFolderError ⇐ `Error`
The entry is not a folder, but was expected to be a folder.

**Kind**: static class of [`errors`](#module-storage-errors)  
**Extends**: `Error`  

<a name="module-storage-errors-entryisnotafileerror" id="module-storage-errors-entryisnotafileerror"></a>

#### errors.EntryIsNotAFileError ⇐ `Error`
The entry is not a file, but was expected to be.

**Kind**: static class of [`errors`](#module-storage-errors)  
**Extends**: `Error`  

<a name="module-storage-errors-notafilesystemerror" id="module-storage-errors-notafilesystemerror"></a>

#### errors.NotAFileSystemError ⇐ `Error`
The instance was expected to be a file system, but wasn't.

**Kind**: static class of [`errors`](#module-storage-errors)  
**Extends**: `Error`  

<a name="module-storage-errors-outofspaceerror" id="module-storage-errors-outofspaceerror"></a>

#### errors.OutOfSpaceError ⇐ `Error`
The file system is out of space (or quota has been exceeded)

**Kind**: static class of [`errors`](#module-storage-errors)  
**Extends**: `Error`  

<a name="module-storage-errors-permissiondeniederror" id="module-storage-errors-permissiondeniederror"></a>

#### errors.PermissionDeniedError ⇐ `Error`
The file system revoked permission to complete the requested
action.

**Kind**: static class of [`errors`](#module-storage-errors)  
**Extends**: `Error`  

<a name="module-storage-errors-entryexistserror" id="module-storage-errors-entryexistserror"></a>

#### errors.EntryExistsError ⇐ `Error`
An attempt was made to overwrite an entry without indicating
that it was safe to do so via `overwrite: true`.

**Kind**: static class of [`errors`](#module-storage-errors)  
**Extends**: `Error`  

<a name="module-storage-errors-fileisreadonlyerror" id="module-storage-errors-fileisreadonlyerror"></a>

#### errors.FileIsReadOnlyError ⇐ `Error`
An attempt was made to write to a file that was opened as
read-only.

**Kind**: static class of [`errors`](#module-storage-errors)  
**Extends**: `Error`  

<a name="module-storage-errors-domainnotsupportederror" id="module-storage-errors-domainnotsupportederror"></a>

#### errors.DomainNotSupportedError ⇐ `Error`
Domain is not supported by the current FileSystemProvider
instance.

**Kind**: static class of [`errors`](#module-storage-errors)  
**Extends**: `Error`  

<a name="module-storage-errors-invalidfilenameerror" id="module-storage-errors-invalidfilenameerror"></a>

#### errors.InvalidFileNameError ⇐ `Error`
The file name contains invalid characters

**Kind**: static class of [`errors`](#module-storage-errors)  
**Extends**: `Error`  

<a name="module-storage-errors-invalidfileformaterror" id="module-storage-errors-invalidfileformaterror"></a>

#### errors.InvalidFileFormatError ⇐ `Error`
Unsupported format type

**Kind**: static class of [`errors`](#module-storage-errors)  
**Extends**: `Error`  

<a name="module-storage-errors-datafileformatmismatcherror" id="module-storage-errors-datafileformatmismatcherror"></a>

#### errors.DataFileFormatMismatchError ⇐ `Error`
Data and Format mismatch

**Kind**: static class of [`errors`](#module-storage-errors)  
**Extends**: `Error`  

<a name="module-storage-errors-notsupported" id="module-storage-errors-notsupported"></a>

#### errors.NotSupported ⇐ `Error`
Not supported error

**Kind**: static class of [`errors`](#module-storage-errors)  
**Extends**: `Error`  

<a name="module-storage-domains" id="module-storage-domains"></a>

### storage.domains
Common locations that we can use when displaying a file picker.

**Kind**: static constant of [`storage`](#module-storage)  
**Access**: public  

* [.domains](#module-storage-domains)
    * [.userDesktop](#module-storage-domains-userdesktop) : `Symbol`
    * [.userDocuments](#module-storage-domains-userdocuments) : `Symbol`
    * [.userPictures](#module-storage-domains-userpictures) : `Symbol`
    * [.userVideos](#module-storage-domains-uservideos) : `Symbol`
    * [.userMusic](#module-storage-domains-usermusic) : `Symbol`
    * [.appLocalData](#module-storage-domains-applocaldata) : `Symbol`
    * [.appLocalLibrary](#module-storage-domains-applocallibrary) : `Symbol`
    * [.appLocalCache](#module-storage-domains-applocalcache) : `Symbol`
    * [.appLocalShared](#module-storage-domains-applocalshared) : `Symbol`
    * [.appLocalTemporary](#module-storage-domains-applocaltemporary) : `Symbol`
    * [.appRoamingData](#module-storage-domains-approamingdata) : `Symbol`
    * [.appRoamingLibrary](#module-storage-domains-approaminglibrary) : `Symbol`


<a name="module-storage-domains-userdesktop" id="module-storage-domains-userdesktop"></a>

#### domains.userDesktop : `Symbol`
The user's desktop folder

**Kind**: static property of [`domains`](#module-storage-domains)  

<a name="module-storage-domains-userdocuments" id="module-storage-domains-userdocuments"></a>

#### domains.userDocuments : `Symbol`
The user's documents folder

**Kind**: static property of [`domains`](#module-storage-domains)  

<a name="module-storage-domains-userpictures" id="module-storage-domains-userpictures"></a>

#### domains.userPictures : `Symbol`
The user's pictures folder or library

**Kind**: static property of [`domains`](#module-storage-domains)  

<a name="module-storage-domains-uservideos" id="module-storage-domains-uservideos"></a>

#### domains.userVideos : `Symbol`
The user's videos / movies folder or library

**Kind**: static property of [`domains`](#module-storage-domains)  

<a name="module-storage-domains-usermusic" id="module-storage-domains-usermusic"></a>

#### domains.userMusic : `Symbol`
The user's music folder or library

**Kind**: static property of [`domains`](#module-storage-domains)  

<a name="module-storage-domains-applocaldata" id="module-storage-domains-applocaldata"></a>

#### domains.appLocalData : `Symbol`
Local application data

**Kind**: static property of [`domains`](#module-storage-domains)  

<a name="module-storage-domains-applocallibrary" id="module-storage-domains-applocallibrary"></a>

#### domains.appLocalLibrary : `Symbol`
Local application library

**Kind**: static property of [`domains`](#module-storage-domains)  

<a name="module-storage-domains-applocalcache" id="module-storage-domains-applocalcache"></a>

#### domains.appLocalCache : `Symbol`
Local application cache directory (persistence not guaranteed)

**Kind**: static property of [`domains`](#module-storage-domains)  

<a name="module-storage-domains-applocalshared" id="module-storage-domains-applocalshared"></a>

#### domains.appLocalShared : `Symbol`
Local application shared data folder

**Kind**: static property of [`domains`](#module-storage-domains)  

<a name="module-storage-domains-applocaltemporary" id="module-storage-domains-applocaltemporary"></a>

#### domains.appLocalTemporary : `Symbol`
Local temporary directory

**Kind**: static property of [`domains`](#module-storage-domains)  

<a name="module-storage-domains-approamingdata" id="module-storage-domains-approamingdata"></a>

#### domains.appRoamingData : `Symbol`
Roaming application data

**Kind**: static property of [`domains`](#module-storage-domains)  

<a name="module-storage-domains-approaminglibrary" id="module-storage-domains-approaminglibrary"></a>

#### domains.appRoamingLibrary : `Symbol`
Roaming application library data

**Kind**: static property of [`domains`](#module-storage-domains)  

<a name="module-storage-filetypes" id="module-storage-filetypes"></a>

### storage.fileTypes
This namespace describes the various file type extensions that can used be used in some FS file open methods.

**Kind**: static constant of [`storage`](#module-storage)  
**Access**: public  

* [.fileTypes](#module-storage-filetypes)
    * [.text](#module-storage-filetypes-text)
    * [.images](#module-storage-filetypes-images)
    * [.all](#module-storage-filetypes-all)


<a name="module-storage-filetypes-text" id="module-storage-filetypes-text"></a>

#### fileTypes.text
Text file extensions

**Kind**: static property of [`fileTypes`](#module-storage-filetypes)  

<a name="module-storage-filetypes-images" id="module-storage-filetypes-images"></a>

#### fileTypes.images
Image file extensions

**Kind**: static property of [`fileTypes`](#module-storage-filetypes)  

<a name="module-storage-filetypes-all" id="module-storage-filetypes-all"></a>

#### fileTypes.all
All file types

**Kind**: static property of [`fileTypes`](#module-storage-filetypes)  

<a name="module-storage-formats" id="module-storage-formats"></a>

### storage.formats
This namespace describes the file content formats supported in FS methods like read and write.

**Kind**: static constant of [`storage`](#module-storage)  
**Access**: public  

* [.formats](#module-storage-formats)
    * [.utf8](#module-storage-formats-utf8) : `Symbol`
    * [.binary](#module-storage-formats-binary) : `Symbol`


<a name="module-storage-formats-utf8" id="module-storage-formats-utf8"></a>

#### formats.utf8 : `Symbol`
UTF8 File encoding

**Kind**: static property of [`formats`](#module-storage-formats)  

<a name="module-storage-formats-binary" id="module-storage-formats-binary"></a>

#### formats.binary : `Symbol`
Binary file encoding

**Kind**: static property of [`formats`](#module-storage-formats)  

<a name="module-storage-modes" id="module-storage-modes"></a>

### storage.modes
This namespace describes the file open modes. for eg: open file in read-only or both read-write

**Kind**: static constant of [`storage`](#module-storage)  
**Access**: public  

* [.modes](#module-storage-modes)
    * [.readOnly](#module-storage-modes-readonly) : `Symbol`
    * [.readWrite](#module-storage-modes-readwrite) : `Symbol`


<a name="module-storage-modes-readonly" id="module-storage-modes-readonly"></a>

#### modes.readOnly : `Symbol`
The file is read-only; attempts to write will fail.

**Kind**: static property of [`modes`](#module-storage-modes)  

<a name="module-storage-modes-readwrite" id="module-storage-modes-readwrite"></a>

#### modes.readWrite : `Symbol`
The file is read-write.

**Kind**: static property of [`modes`](#module-storage-modes)  

<a name="module-storage-types" id="module-storage-types"></a>

### storage.types
This namespace describes the type of the entry. Whether file or folder etc.

**Kind**: static constant of [`storage`](#module-storage)  
**Access**: public  

* [.types](#module-storage-types)
    * [.file](#module-storage-types-file) : `Symbol`
    * [.folder](#module-storage-types-folder) : `Symbol`


<a name="module-storage-types-file" id="module-storage-types-file"></a>

#### types.file : `Symbol`
A file; used when creating an entity

**Kind**: static property of [`types`](#module-storage-types)  

<a name="module-storage-types-folder" id="module-storage-types-folder"></a>

#### types.folder : `Symbol`
A folder; used when creating an entity

**Kind**: static property of [`types`](#module-storage-types)  