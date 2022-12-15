---
jsDoc: true
---

<a name="module-storage-entrymetadata" id="module-storage-entrymetadata"></a>

# require('uxp').storage.EntryMetadata
Metadata for an entry. It includes useful information such as:

* size of the file (if a file)
* date created
* date modified
* name

You'll not instantiate this directly; use [Entry#getMetadata](/uxp/reference-js/Modules/uxp/Persistent%20File%20Storage/Entry/#module-storage-entry-getmetadata) to do so.



<a name="module-storage-entrymetadata-name" id="module-storage-entrymetadata-name"></a>

## name : `string`
The name of the entry.



<a name="module-storage-entrymetadata-size" id="module-storage-entrymetadata-size"></a>

## size : `number`
The size of the entry, if a file. Zero if a folder.



<a name="module-storage-entrymetadata-datecreated" id="module-storage-entrymetadata-datecreated"></a>

## dateCreated : `Date`
The date this entry was created.



<a name="module-storage-entrymetadata-datemodified" id="module-storage-entrymetadata-datemodified"></a>

## dateModified : `Date`
The date this entry was modified.



<a name="module-storage-entrymetadata-isfile" id="module-storage-entrymetadata-isfile"></a>

## isFile : `boolean`
Indicates if the entry is a file



<a name="module-storage-entrymetadata-isfolder" id="module-storage-entrymetadata-isfolder"></a>

## isFolder : `boolean`
Indicates if the entry is a folder


