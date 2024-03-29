
<a name="confirm" id="confirm"></a>

# window.confirm()
**Returns**: `boolean` - true If OK button is pressed and false when Cancel button is pressed.

The following are additional simple alerts supported by UXP
1. [alert()](./alert.md)
2. [prompt()](./prompt.md)  
**Since**: v7.0.0
Displays a Confirm message dialog putting the application in a modal state while <b>not blocking</b> the Javascript thread and still allowing processing of events in the main event loop.

<InlineAlert variant="info" slots="text"/>

UXP behaviour is different from the standard behaviour of blocking the javascript thread of execution until the dialog has been dismissed.  

| Param | Type | Description |
| --- | --- | --- |
| message | `string` | A string you want to display in the confirmation dialog. |

**Example**  
```js
confirm("This is confirmation message");
```

