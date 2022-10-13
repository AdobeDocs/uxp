
<a name="script" id="script"></a>

## `require('uxp').script;`
Script module, which contains essential properties and methods while writing scripts.



<a name="script-args" id="script-args"></a>

### args
To get the arguments(if any) passed by host app, while invoking the script.



<a name="script-executioncontext" id="script-executioncontext"></a>

### executionContext
ExecutionContext Passed by the host app, while invoking the script.



<a name="script-setresult" id="script-setresult"></a>

### setResult(result)
To send the execution result back to the host (if required).


| Param | Type | Description |
| --- | --- | --- |
| result | `\*` | Host defines the contract on as to what can be returned from scripts and its format. |


  