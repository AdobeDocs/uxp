
<a name="htmldialogelement" id="htmldialogelement"></a>

# window.HTMLDialogElement
**See**: https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement  


<a name="htmldialogelement-open" id="htmldialogelement-open"></a>

## open : `boolean`
**Read only**


<a name="htmldialogelement-isminimized" id="htmldialogelement-isminimized"></a>

## isMinimized : `boolean`
**Read only**


<a name="htmldialogelement-returnvalue" id="htmldialogelement-returnvalue"></a>

## returnValue : `*`


<a name="htmldialogelement-rejection-reason-not-allowed" id="htmldialogelement-rejection-reason-not-allowed"></a>

## REJECTION\_REASON\_NOT\_ALLOWED
When the promise returned from openDialog() is rejected, error.code can be equal to this value,
which means that the application does not allow showing dialogs (e.g. only one dialog is allowed).



<a name="htmldialogelement-rejection-reason-detached" id="htmldialogelement-rejection-reason-detached"></a>

## REJECTION\_REASON\_DETACHED
When the promise returned from openDialog() is rejected, error.code can be equal to this value,
which means that the node has been detached from DOM tree.



<a name="htmlelement-dataset" id="htmlelement-dataset"></a>

## dataset
Access to all the custom data attributes (data-*) set.

**See**: [HTMLElement - dataset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset)  


<a name="htmlelement-innertext" id="htmlelement-innertext"></a>

## innerText : `string`


<a name="htmlelement-lang" id="htmlelement-lang"></a>

## lang : `string`
Base language of an element's attribute values and text content.

**See**: [HTMLElement - lang](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/lang)  


<a name="htmldialogelement-show" id="htmldialogelement-show"></a>

## show([options])
Show the non modal dialog.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | `object` | `{}` | Options for the show. |
| [options.anchorOffset] | `object` |  | Offset from the anchor for the initial positioning of the dialog. |
| [options.anchorOffset.top] | `number` |  | Top offset from the anchor for the initial positioning of the dialog. |
| [options.anchorOffset.left] | `number` |  | Left offset from the anchor for the initial positioning of the dialog. |



<a name="htmldialogelement-showmodal" id="htmldialogelement-showmodal"></a>

## showModal()
Show the modal dialog.

**Returns**: `Promise` - A promise that resolves when the dialog is closed (**NSC**)
                   after calling the close() method or clicking the "submit" button.
                   The promise will be resolved with returnValue as a parameter.
                   The promise can be rejected if the dialog was closed for other reasons
                   e.g. the user hit escape or closed the window, or if the application
                   does not allow showing the dialog. The error parameter will give more details.
                   error.code will be one of the values from HTMLDialogElement.rejectionReasons.  


<a name="htmldialogelement-close" id="htmldialogelement-close"></a>

## close([returnValue])
Closes the dialog; setting the return value (optional)


| Param | Type |
| --- | --- |
| [returnValue] | `*` | 


  