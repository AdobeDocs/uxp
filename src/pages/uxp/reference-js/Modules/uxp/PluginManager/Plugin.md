
<a name="plugin" id="plugin"></a>

## Plugin 
Plugin object receveied in the PluginManager.getPlugins list,used for IPC(Inter Plugin Communication)

**Kind**: global class  
**Access**: public  

* [Plugin](#plugin)
    * [.id](#plugin-id) ⇒ `String`
    * [.version](#plugin-version) ⇒ `String`
    * [.name](#plugin-name) ⇒ `String`
    * [.manifest](#plugin-manifest) ⇒ `JSON`
    * [.enabled](#plugin-enabled) ⇒ `Boolean`
    * [.showPanel(panelId)](#plugin-showpanel) ⇒ `Promise`
    * [.invokeCommand(commandId, ...params)](#plugin-invokecommand) ⇒ `Promise`


<a name="plugin-id" id="plugin-id"></a>

### plugin.id ⇒ `String`
Get plugin id

**Kind**: instance property of [`Plugin`](#plugin)  

<a name="plugin-version" id="plugin-version"></a>

### plugin.version ⇒ `String`
Get plugin version

**Kind**: instance property of [`Plugin`](#plugin)  

<a name="plugin-name" id="plugin-name"></a>

### plugin.name ⇒ `String`
Get plugin name

**Kind**: instance property of [`Plugin`](#plugin)  

<a name="plugin-manifest" id="plugin-manifest"></a>

### plugin.manifest ⇒ `JSON`
Get plugin manifest

**Kind**: instance property of [`Plugin`](#plugin)  

<a name="plugin-enabled" id="plugin-enabled"></a>

### plugin.enabled ⇒ `Boolean`
Get plugin enabled/disabled state

**Kind**: instance property of [`Plugin`](#plugin)  

<a name="plugin-showpanel" id="plugin-showpanel"></a>

### plugin.showPanel(panelId) ⇒ `Promise`
Show panel with the given ID. This api may be routed to the host app which can chose to disallow it.Used for commmunicating with other plugins (IPC : Inter Plugin Communication)Note: There is API to hide a panel, panels can be shown but can not be hid.

**Kind**: instance method of [`Plugin`](#plugin)  

| Param | Type | Description |
| --- | --- | --- |
| panelId | `String` | id of the panel to be shown |


<a name="plugin-invokecommand" id="plugin-invokecommand"></a>

### plugin.invokeCommand(commandId, ...params) ⇒ `Promise`
Invoke command with given ID. This api may be routed to the host app which can chose to disallow it.Used for commmunicating with other plugins (IPC : Inter Plugin Communication)

**Kind**: instance method of [`Plugin`](#plugin)  

| Param | Type | Description |
| --- | --- | --- |
| commandId | `String` | id of the command to be invoked |
| ...params |  | command arguments to be passed to invokeCommand |

  