
<a name="path" id="path"></a>

## Path : `require('path')`
The `path` module provides utilities for working with file and directory paths.

**Kind**: global class  
**Access**: public  
**See**: https://nodejs.org/api/path.html  
**Since**: UXP 6.4  

* [Path](#path)
    * [.sep](#path-sep)
    * [.delimiter](#path-delimiter)
    * [.posix](#path-posix)
    * [.win32](#path-win32)
    * [.normalize(path)](#path-normalize) ⇒ `string`
    * [.join(paths)](#path-join) ⇒ `string`
    * [.resolve(paths)](#path-resolve) ⇒ `string`
    * [.isAbsolute(path)](#path-isabsolute) ⇒ `boolean`
    * [.relative(from, to)](#path-relative) ⇒ `string`
    * [.dirname(path)](#path-dirname) ⇒ `string`
    * [.basename(path, [ext])](#Path+basename) ⇒ `string`
    * [.extname(path)](#path-extname) ⇒ `string`
    * [.parse(path)](#path-parse) ⇒ `object`
    * [.format(pathObject)](#path-format) ⇒ `string`


<a name="path-sep" id="path-sep"></a>

### path.sep
The platform-specific file separator. '\\' or '/'.

**Kind**: instance property of [`Path`](#path)  

<a name="path-delimiter" id="path-delimiter"></a>

### path.delimiter
The platform-specific file delimiter. ';' or ':'.

**Kind**: instance property of [`Path`](#path)  

<a name="path-posix" id="path-posix"></a>

### path.posix
Posix specific pathing.

**Kind**: instance property of [`Path`](#path)  

<a name="path-win32" id="path-win32"></a>

### path.win32
Windows specific pathing.

**Kind**: instance property of [`Path`](#path)  

<a name="path-normalize" id="path-normalize"></a>

### path.normalize(path) ⇒ `string`
Normalize a string path, reducing '..' and '.' parts.

**Kind**: instance method of [`Path`](#path)  
**Returns**: `string` - normalized string path  
**Throws**:

- `Error` if `path` is not a string


| Param | Type | Description |
| --- | --- | --- |
| path | `string` \| `Entry` | path to normalize |


<a name="path-join" id="path-join"></a>

### path.join(paths) ⇒ `string`
Join all arguments together and normalize the resulting path.

**Kind**: instance method of [`Path`](#path)  
**Returns**: `string` - joined string path  
**Throws**:

- `Error` if any of the path segments is not a string


| Param | Type | Description |
| --- | --- | --- |
| paths | `Array.<(string\|Entry)>` | paths to join |


<a name="path-resolve" id="path-resolve"></a>

### path.resolve(paths) ⇒ `string`
The right-most parameter is considered {to}. Other parameters are considered an array of {from}.

**Kind**: instance method of [`Path`](#path)  
**Returns**: `string` - resolved string path  
**Throws**:

- `Error` if any of the arguments is not a string


| Param | Type | Description |
| --- | --- | --- |
| paths | `Array.<(string\|Entry)>` | a sequence of paths or path segments |


<a name="path-isabsolute" id="path-isabsolute"></a>

### path.isAbsolute(path) ⇒ `boolean`
Determines whether {path} is an absolute path. An absolute path will always resolve to the same location, regardless of the working directory.

**Kind**: instance method of [`Path`](#path)  
**Returns**: `boolean` - if the path is an absolute path or not  
**Throws**:

- `Error` if `path` is not a string


| Param | Type | Description |
| --- | --- | --- |
| path | `string` \| `Entry` | path to test |


<a name="path-relative" id="path-relative"></a>

### path.relative(from, to) ⇒ `string`
Solve the relative path from {from} to {to} based on the current working directory.

**Kind**: instance method of [`Path`](#path)  
**Returns**: `string` - relative string path  
**Throws**:

- `Error` if either `from` or `to` is not a string


| Param | Type | Description |
| --- | --- | --- |
| from | `string` | base path to find from |
| to | `string` | relative path to find to |


<a name="path-dirname" id="path-dirname"></a>

### path.dirname(path) ⇒ `string`
Return the directory name of a path. Similar to the Unix dirname command.

**Kind**: instance method of [`Path`](#path)  
**Returns**: `string` - the directory name of a path  
**Throws**:

- `Error` if `path` is not a string


| Param | Type | Description |
| --- | --- | --- |
| path | `string` \| `Entry` | the path to evaluate |


<a name="path-basename" id="path-basename"></a>

### path.basename(path, [ext]) ⇒ `string`
Return the last portion of a path. Similar to the Unix basename command.

**Kind**: instance method of [`Path`](#path)  
**Returns**: `string` - the last portion of a path  
**Throws**:

- `Error` if `path` is not a string or if `ext` is given and is not a string


| Param | Type | Description |
| --- | --- | --- |
| path | `string` \| `Entry` | the path to evaluate |
| [ext] | `string` | an extension to remove from the result |


<a name="path-extname" id="path-extname"></a>

### path.extname(path) ⇒ `string`
Return the extension of the path, from the last '.' to end of string in the last portion of the path.

**Kind**: instance method of [`Path`](#path)  
**Returns**: `string` - the extension of the path  
**Throws**:

- `Error` if `path` is not a string


| Param | Type | Description |
| --- | --- | --- |
| path | `string` \| `Entry` | the path to evaluate |


<a name="path-parse" id="path-parse"></a>

### path.parse(path) ⇒ `object`
Returns an object from a path string - the opposite of format().

**Kind**: instance method of [`Path`](#path)  
**Returns**: `object` - ParsedPath  
**Throws**:

- `Error` if `path` is not a string


| Param | Type | Description |
| --- | --- | --- |
| path | `string` \| `Entry` | path to evaluate |


<a name="path-format" id="path-format"></a>

### path.format(pathObject) ⇒ `string`
Returns a path string from an object - the opposite of parse().

**Kind**: instance method of [`Path`](#path)  
**Returns**: `string` - a path string from an object  

| Param | Type | Description |
| --- | --- | --- |
| pathObject | `object` | path to evaluate |

  