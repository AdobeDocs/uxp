
<a name="alert" id="alert"></a>

# window.alert()
Displays an Alert message dialog putting the application in a modal state while <b>not blocking</b> the JavaScript thread and still allowing processing of events in the main event loop.
<br></br> Note that UXP behaviour is different from the standard behaviour of blocking the JavaScript thread of execution until the dialog has been dismissed.

**See**: The following are additional simple alerts supported by UXP
1. [confirm()](./confirm.md)
2. [prompt()](./prompt.md)  
**Since**: v7.0.0  

| Param | Type | Description |
| --- | --- | --- |
| message | `string` | A message you want to display in the alert dialog |

**Example**  
```js
alert("This is alert message");
```

