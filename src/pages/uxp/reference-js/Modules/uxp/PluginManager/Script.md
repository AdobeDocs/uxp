
<a name="script" id="script"></a>

## Script : `require('uxp').script;`
Script module, which contains essential properties and methods while writing scripts.

**Kind**: global class  
**Access**: public  

* [Script](#script)
    * [.args](#script-args)
    * [.executionContext](#script-executioncontext)
    * [.setResult(result)](#script-setresult)


<a name="script-args" id="script-args"></a>

### script.args
To get the arguments(if any) passed by host app, while invoking the script.

**Kind**: instance property of [`Script`](#script)  

<a name="script-executioncontext" id="script-executioncontext"></a>

### script.executionContext
ExecutionContext Passed by the host app, while invoking the script.

**Kind**: instance property of [`Script`](#script)  

<a name="script-setresult" id="script-setresult"></a>

### script.setResult(result)
To send the execution result back to the host (if required).

**Kind**: instance method of [`Script`](#script)  

| Param | Type | Description |
| --- | --- | --- |
| result | `\*` | Host defines the contract on as to what can be returned from scripts and its format. |

  