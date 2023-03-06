
<a name="plugin" id="plugin"></a>

# Plugin
Plugin object received in the PluginManager.getPlugins list,
used for IPC(Inter Plugin Communication)



<a name="plugin-id" id="plugin-id"></a>

## id ⇒ `String`
Get plugin id

**Returns**: `String`  


<a name="plugin-version" id="plugin-version"></a>

## version ⇒ `String`
Get plugin version

**Returns**: `String`  


<a name="plugin-name" id="plugin-name"></a>

## name ⇒ `String`
Get plugin name

**Returns**: `String`  


<a name="plugin-manifest" id="plugin-manifest"></a>

## manifest ⇒ `JSON`
Get plugin manifest

**Returns**: `JSON`  


<a name="plugin-enabled" id="plugin-enabled"></a>

## enabled ⇒ `Boolean`
Get plugin enabled/disabled state

**Returns**: `Boolean`  


<a name="plugin-showpanel" id="plugin-showpanel"></a>

## showPanel(panelId)
Show panel with the given ID. This api may be routed to the host app which can chose to disallow it.
Used for commmunicating with other plugins (IPC : Inter Plugin Communication)
Note: Currently there is no API to hide a panel, panels can be shown but can not be hidden.

**Returns**: `Promise`  

| Param | Type | Description |
| --- | --- | --- |
| panelId | `String` | id of the panel to be shown |



<a name="plugin-invokecommand" id="plugin-invokecommand"></a>

## invokeCommand(commandId, ...params)
Invoke command with given ID. This api may be routed to the host app which can chose to disallow it.
Used for commmunicating with other plugins (IPC : Inter Plugin Communication)

**Returns**: `Promise`  

| Param | Type | Description |
| --- | --- | --- |
| commandId | `String` | id of the command to be invoked |
| ...params |  | command arguments to be passed to invokeCommand |


  