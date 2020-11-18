---
jsDoc: true
---

<a name="module-storage-folder" id="module-storage-folder"></a>

# require('uxp').storage.Folder
Represents a folder on a file system. You'll never instantiate this directly,
but will get it by calling [FileSystemProvider.getTemporaryFolder](/uxp/reference-js/Modules/uxp/Persistent%20File%20Storage/FileSystemProvider/#module-storage-filesystemprovider-gettemporaryfolder),
[FileSystemProvider.getFolder](/uxp/reference-js/Modules/uxp/Persistent%20File%20Storage/FileSystemProvider/#module-storage-filesystemprovider-getfolder),
or via [Folder.getEntries](/uxp/reference-js/Modules/uxp/Persistent%20File%20Storage/Folder/#module-storage-folder-getentries).



<a name="module-storage-folder-isfolder" id="module-storage-folder-isfolder"></a>

## isFolder
Indicates that this instance is a folder. Useful for type checking.



<a name="module-storage-folder-getentries" id="module-storage-folder-getentries"></a>

## getEntries()
Returns an array of entries contained within this folder.

**Returns**: `Array.<Entry>` - The entries within the folder.  
**Example**  
```js
const entries = await aFolder.getEntries();
const allFiles = entries.filter(entry => entry.isFile);
```


<a name="module-storage-folder-createentry" id="module-storage-folder-createentry"></a>

## createEntry(name, options)
Creates an entry within this folder and returns the appropriate instance.

**Returns**: `File` \| `Folder` - the created entry  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| name | `string` |  | the name of the entry to create |
| options | `any` |  |  |
| [options.type] | `Symbol` | `types.file` | Indicates which kind of entry to create. Pass [folder](/uxp/reference-js/Modules/uxp/Persistent%20File%20Storage/Folder/) to create a new folder. Note that if the type is file then this method just create a file entry object and not the actual file on the disk. The file actually gets created when you call for eg: write method on the file entry object. |
| [options.overwrite] | `boolean` | `false` | If `true`, the create attempt can overwrite an existing file |

**Example**  
```js
const myNovel = await aFolder.createEntry("mynovel.txt");
```
**Example**  
```js
const catImageCollection = await aFolder.createEntry("cats", {type = types.folder});
```


<a name="module-storage-folder-createfile" id="module-storage-folder-createfile"></a>

## createFile(name, options)
Creates a File Entry object within this folder and returns the appropriate instance.
Note that this method just create a file entry object and not the actual file on the disk.
The file actually gets created when you call for eg: write method on the file entry object.

**Returns**: `File` - the created file entry  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| name | `string` |  | the name of the file to create. |
| options | `any` |  |  |
| [options.overwrite] | `boolean` | `false` | If `true`, the create attempt can overwrite an existing file |

**Example**  
```js
const myNovelTxtFile = await aFolder.createFile("mynovel.txt");
```


<a name="module-storage-folder-createfolder" id="module-storage-folder-createfolder"></a>

## createFolder(name)
Creates a Folder within this folder and returns the appropriate instance.

**Returns**: `Folder` - the created folder entry object  

| Param | Type | Description |
| --- | --- | --- |
| name | `string` | the name of the folder to create. |

**Example**  
```js
const myCollectionsFolder = await aFolder.createFolder("collections");
```


<a name="module-storage-folder-getentry" id="module-storage-folder-getentry"></a>

## getEntry(filePath)
Gets an entry from within this folder and returns the appropriate instance.

**Returns**: `File` \| `Folder` - the fetched entry.  

| Param | Type | Description |
| --- | --- | --- |
| filePath | `string` | the name/path of the entry to fetch |

**Example**  
```js
const myNovel = await aFolder.getEntry("mynovel.txt");
```


<a name="module-storage-folder-renameentry" id="module-storage-folder-renameentry"></a>

## renameEntry(entry, newName, options)
Renames an entry to a new name.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| entry | `Entry` |  | the entry to rename |
| newName | `string` |  | the new name to assign |
| options | `any` |  |  |
| [options.overwrite] | `boolean` | `false` | if `true`, renaming can overwrite an existing entry |

**Example**  
```js
await myNovels.rename(myNovel, "myFantasticNovel.txt");
```


<a name="module-storage-folder-isfolder" id="module-storage-folder-isfolder"></a>

## isFolder(entry)
Checks if an entry is a folder. Safe to use if entry might be `null` or
`undefined`. Useful for type checking.

**Returns**: `boolean` - if `true`, the entry is a folder  

| Param | Type | Description |
| --- | --- | --- |
| entry | `any` | the entry to check |


