---
jsDoc: true
---

<a name="entrypoints" id="entrypoints"></a>

# require('uxp').entrypoints


<a name="entrypoints-setup" id="entrypoints-setup"></a>

## setup(entrypoints)
API for plugin to add handlers and menu items for entrypoints defined in manifest.
This API can only be called once and there after other apis can be used to modify menu items.
The function throws in case of any error in entrypoints data or if its called more than once.


| Param | Type | Description |
| --- | --- | --- |
| entrypoints | `Object` | Describes your plugin's entrypoint functions and properties. |
| entrypoints.plugin | `Object` \| `function` | (Not in 4.1) This can be an object or a function. If this is a function, it is                                           assumed as the `create` handler (described below). |
| entrypoints.plugin.create | `function` | (Not in 4.1) This is called after plugin is loaded. `this` can be used to access                                         [UxpPluginInfo](/uxp/reference-js/Modules/uxp/Entry%20Points/UxpPluginInfo/#uxpplugininfo) object. This function can return a promise. If `plugin`                                         object is defined, `create` must be defined.                                         To signal failure, you should throw an exception or return a rejected promise. |
| entrypoints.plugin.destroy | `function` | (Not in 4.1) This is called before plugin is unloaded. `this` can be used to access                                          [UxpPluginInfo](/uxp/reference-js/Modules/uxp/Entry%20Points/UxpPluginInfo/#uxpplugininfo) object. |
| entrypoints.panels | `Array.<(Object\|function())>` | This contains a list of key-value pairs where each key is a panel id (string) and                               value is the data for the panel whose type can be object/function.                               If a function, it is assumed to be the `show` method (described below).                               If an object, it can contain following properties but it must                               define either of `create` or 'show'. |
| entrypoints.panels[].create | `function` | (Not in 4.1) This is called when a panel is created. `this` can be used to access                                         [UxpPanelInfo](/uxp/reference-js/Modules/uxp/Entry%20Points/UxpPanelInfo/#uxppanelinfo) object. This function can return a promise.                                         To signal failure, throw an exception or return a rejected promise. |
| entrypoints.panels[].show | `function` | This is called when a panel is shown. `this` can be used to access                                         [UxpPanelInfo](/uxp/reference-js/Modules/uxp/Entry%20Points/UxpPanelInfo/#uxppanelinfo) object. This function can return a promise.                                         To signal failure, throw an exception or return a rejected promise.                                         The callback function will be passed an object with a `node` field. You can attach your root UI node to this node using `node.appendChild(yourRoot)`. |
| entrypoints.panels[].hide | `function` | This is called when a panel is hidden. `this` can be used to access                                       [UxpPanelInfo](/uxp/reference-js/Modules/uxp/Entry%20Points/UxpPanelInfo/#uxppanelinfo) object. This function can return a promise.                                       To signal failure, throw an exception or return a rejected promise. |
| entrypoints.panels[].destroy | `function` | (Not in 4.1) This is called when a panel is going to be destroyed. `this` can be                                          used to access [UxpPanelInfo](/uxp/reference-js/Modules/uxp/Entry%20Points/UxpPanelInfo/#uxppanelinfo) object. This function can return a promise.                                          To signal failure, throw an exception or return a rejected promise. |
| entrypoints.panels[].invokeMenu | `function` | This is called when a panel menu item is invoked.                                             The associated menu id is passed as the first argument to this function. `this` can be                                             used to access [UxpPanelInfo](/uxp/reference-js/Modules/uxp/Entry%20Points/UxpPanelInfo/#uxppanelinfo) object. This function can return a promise.                                             To signal failure, throw an exception or return a rejected promise. |
| entrypoints.panels[].menuItems | `Array` | array of menu items. Each menu item can be a string or an object with                                         properties defined below. Menu items are displayed in the                                         same order as specified in this array. For specifying a separator,                                         a value of "-" can be used at required place in the array. |
| entrypoints.panels[].menuItems.id | `string` | Identifier of the menu item. **Must be unique across the entire plugin, including commands in the manifest.** |
| entrypoints.panels[].menuItems.label | `string` | Display text for the menu item. Should be localized. If label is not                                              specified, id is used as label. |
| entrypoints.panels[].menuItems.enabled | `boolean` | Enabled/disabled state for the menu item. Default - true. |
| entrypoints.panels[].menuItems.checked | `boolean` | Checked state for the menu item. Default - false. |
| entrypoints.panels[].menuItems.submenu | `Array` | Submenu for this menu item again as an array of 'menuItems'.                                               `id` of submenus should still be unique across panel. |
| entrypoints.commands | `Array.<Object>` | This object contains a list of key-value pairs where each key is the command id and                                 value is command's data whose type can be an object or function.                                 If a function, it is assumed to be `run` method (described below).                                 If an object, it can contain following properties but `run` is required. |
| entrypoints.commands[].run | `function` | This is called when the command is invoked via menu entry. `this` can be used                                      to access [UxpCommandInfo](/uxp/reference-js/Modules/uxp/Entry%20Points/UxpCommandInfo/#uxpcommandinfo) object. This function can return a promise.                                      To signal failure, throw an exception or return a rejected promise. |
| entrypoints.commands[].cancel | `function` | (Not in 4.1) Reserved for future use. |

**Example**  
```
 const { entrypoints } = require("uxp");
 entrypoints.setup({
      plugin: {
         create() {..},
         destroy() {..}
     },
     panels: {
         "panel1": {
             create() {..},
             show() {..},
             hide() {..},
             destroy() {..},
             invokeMenu() {..},
             menuItems: [
                 {
                     id: "signIn",
                     label: "Sign In...",
                     enabled: false,
                     checked: false
                     submenu: [
                         { id: "submenu1", label: "submenu1", enabled: false, checked: false},
                         { "submenu2" }
                     ]
                 },
                 "-",  // separator.
                 "Sign out",  // by default enabled, and the id will be same with the label.
             ]
         },
         "panel2": {..}
     },
     commands: {
         "command1": {
             run() {..},
             cancel() {..}
         },
         "command2": function(){..}
     }
 });
```


<a name="entrypoints-getpanel" id="entrypoints-getpanel"></a>

## getPanel(id)
Get panel with specified id

**Returns**: `UxpPanelInfo` - - Information about the associated panel or `null` if the panel with the requested `id` was not found.  

| Param | Type | Description |
| --- | --- | --- |
| id | `String` | panel id |



<a name="entrypoints-getcommand" id="entrypoints-getcommand"></a>

## getCommand(id)
Get command with specified id

**Returns**: `UxpCommandInfo` - - Information about the associated command or `null` if the command with the requested `id` was not found.  

| Param | Type | Description |
| --- | --- | --- |
| id | `String` | command id |


