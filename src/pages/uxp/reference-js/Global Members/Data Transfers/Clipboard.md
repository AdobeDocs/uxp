---
jsDoc: true
---

<a name="clipboard" id="clipboard"></a>

# document.clipboard
Clipboard support.

**See**: https://developer.mozilla.org/en-US/docs/Web/API/Clipboard  


<a name="clipboard-setcontent" id="clipboard-setcontent"></a>

## setContent(data)
**Returns**: `Promise`  
**Nonstandard**: This method is non-standard.  

| Param | Type | Description |
| --- | --- | --- |
| data | `Object` | The data to store in the clipboard. The object keys are the mime types, so for text, use `text/plain` as a key. |

**Example**  
```js
navigator.clipboard.setContent({"text/plain": "Hello!"});
```


<a name="clipboard-writetext" id="clipboard-writetext"></a>

## writeText(text)
Sets the clipboard's contents.

**Bugged**: The standard does not support an object for `text`; when this is fixed in the future, your plugin may break.  
**See**: https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/writeText  

| Param | Type | Description |
| --- | --- | --- |
| text | `*` | The text to set. Note, currently this will fail unless this is an object of the form `{"text/plain": "text to set"}`. This will be fixed in a future release. |



<a name="clipboard-clearcontent" id="clipboard-clearcontent"></a>

## clearContent()
Clears the contents of the clipboard.

**Returns**: `Promise`  
**Nonstandard**: This method is non-standard.  

