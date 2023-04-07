
<a name="prompt" id="prompt"></a>

# window.prompt()
**Summary**: Displays a Prompt message dialog putting the application in a modal state while <b>not blocking</b> the Javascript thread and still allowing processing of events in the main event loop.
<br></br> Note that UXP behaviour is different from the standard behaviour of blocking the javascript thread of execution until the dialog has been dismissed.  
**Returns**: `string` - message entered by the user in the prompt field or default value if nothing entered.  
**See**: The following are additional simple alerts supported by UXP
1. [confirm()](./confirm.md)
2. [alert()](./alert.md)  
**Since**: v7.0.0  

| Param | Type | Description |
| --- | --- | --- |
| message | `string` | A string of text to display to the user. |
| prompt | `string` | Default value for the field. |

**Example**  
```js
// Below prompt function has 2 params
// "Enter your name: " - Message to display
// "Adobe" - Default value that will be present in the Prompt pop-up at launch
prompt("Enter your name: ","Adobe");
```

