
<a name="htmlwebviewelement" id="htmlwebviewelement"></a>

# window.HTMLWebViewElement
**Since**: v6.0  


<a name="new-htmlwebviewelement-new" id="new-htmlwebviewelement-new"></a>

## HTMLWebViewElement()
WebViews in Adobe UXP is a component that allows you to embed web content in your plugins.
They are essentially a browser window that is displayed inside the plugin, allowing you to load web pages,
and interact with them using JavaScript.
WebViews can be used to display complex web pages inside the plugin.
WebViews can be controlled by the plugin using the JavaScript API provided by UXP.
They can also communicate with the plugin using `postMessage`,
allowing the plugin to interact with WebView and vice versa.
WebViews can be used to access external web services, to create custom UI
and to isolate the web content from the rest of the plugin.<br></br>

<InlineAlert variant="warning" slots="text"/>

WebViews are resource intensive since it launches multiple processes per plugin
and therefore should be used only in cases where you cannot create the plugin using UXP features.
<br></br>

**Note:**br></br>
1. WebViews need manifest version v5 or above.
2. Checkout the template available in `UXP Developer Tool` for getting a quick starter plugin for WebView in UXP.
3. `requiredPermissions.webview.enableMessageBridge=“localAndRemote”` is required for Plugin & WebView communication via postMessage.

**Limitations:**<br></br>
1. UXP v7.4.3 and below allows only remote content. This means you will not be able to load local HTML files from plugin folders in UXP WebView unless you have UXP v8.0 or higher.
2. Any links in a UXP WebView will not open in a new window.
e.g., In a browser, clicking `<a href="https://www.adobe.com" target="_blank">` would create a new Window
and open `https://www.adobe.com` from the new Window or JavaScript alert() pops up a new Window. UXP WebView doesn't permit this.
3. The manifest permission `requiredPermissions.webview.domains` does not allow `wildcard(*)` in the top-level domain names.
e.g., Domain lists below are NOT supported

```json
"requiredPermissions": {
  "webview": {
    "domains": ["https://www.*", "https://www.adobe.*"],
    "allow": "yes"
  }
}
```

<h2>Add a webview to your plugin</h2>
In your plugin's code, add a WebView element in the desired location.
The element can take attributes such as id , height , and src to specify the WebView's properties.<br></br>
```js
<webview id="webviewsample" width="100%" height="360px" src="https://www.adobe.com" uxpAllowInspector="true" ></webview>
```

<br></br>
<h3>Manifest requirements for UXP WebView</h3>
In order to use UXP WebView, the plugin should have the following manifest v5 permissions.<br></br>

<table>
 <tr>
     <th>Key</th>
     <th>Value</th>
     <th>Description</th>
     <th>Mandatory/Optional</th>
</tr>
<tr>
     <td>.domains</td>
     <td>string[]</td>
     <td>Allows access to the specified domains. Wildcards (except top-level) are supported. e.g "https://*.adobe.com".<br></br> Recommended</td>
     <td>Mandatory</td>
</tr>
<tr>
     <td>.domains</td>
     <td>"all"</td>
     <td>Allows access to all domains.<br></br> Not recommended, may affect performance, security and privacy. Plugin may be blocked by enterprises.</td>
     <td>Mandatory</td>
</tr>
<tr>
     <td>.allow</td>
     <td>"yes"</td>
     <td>Enables WebView access to the plugin</td>
     <td>Mandatory</td>
</tr>
<tr>
     <td>.allowLocalRendering</td>
     <td>"yes"</td>
     <td>Enables WebView to load local contents (supported from UXP v8.0.0❗) </td>
     <td>Optional</td>
</tr>
<tr>
     <td>.enableMessageBridge</td>
     <td>"localAndRemote"</td>
     <td>Allows Plugin & the content loaded on WebView to communicate regardless of where the content is loaded from **locally or remotely.**
     <td>Optional</td>
</tr>
<tr>
     <td>.enableMessageBridge</td>
     <td>"localOnly"</td>
     <td>Allows Plugin & the content loaded on WebView to communicate if the content is loaded from **locally.** (supported from UXP v8.0.0❗)
     <td>Optional</td>
</tr>
<tr>
     <td>.enableMessageBridge</td>
     <td>"no"</td>
     <td>Not allow WebView & the content loaded on WebView to communicate</td>
     <td>Optional</td>
</tr>
</table><br></br>

**Example**  
```js
// In your `manifest.json` update the following
{
"manifestVersion": 5,
"requiredPermissions": {
    "webview": {
       "allow": "yes",
        // domains --> string[] | "all"
        "domains": [ "https://*.adobe.com", "https://*.google.com"],
        // enableMessageBridge can use either of these data "localAndRemote" | "localOnly" | "no"
        "enableMessageBridge": "localAndRemote"
     }
  }
}
```

<a name="htmlwebviewelement-local-contents" id="htmlwebviewelement-local-contents"></a>

# Load local content onto WebView
From UXP v8.0.0 onwards, UXP plugins can load contents located in plugin, plugin-data and plugin-temp folders.

## Manifest Permissions

Manifest Permission is required to load local contents onto WebView<br></br>
requiredPermissions.webview.allowLocalRendering should be "yes".<br></br>
requiredPermissions.webview.enableMessageBridge should be either "localOnly" or "localAndRemote" for plugin & WebView communication via postMessage.

## Example
```json
"requiredPermissions": {
  "webview": {
    "allow": "yes",
    "domains": [],
    "allowLocalRendering": "yes",
    "enableMessageBridge": "localOnly"
  }
}
```

## Best Practice

**Using a relative path for the internal resouces are highly recommended when loading local contents onto WebView.**<br></br>
UXP WebView does not understand 'plugin:', 'plugin-data:' and 'plugin-temp:' protocols. If WebView.src property is in the form of plugin protocol URL,
UXP internally converts those protocol URLs to URLs that WebView can understand, and then WebView loads the contents using the converted URLs.
The contents loaded onto WebView may refer to other resources such as css, js, images and other html files.
As mentioned, WebView does not understand plugin protocols. So if the resource is pointed out as an absolute path such as "plugin:/main.css",
WebView would not load the resource. It should be expressed as a relative path such as "./main.css".

## Limitations

For security reasons, WebView does not support JS localStorage APIs if local contents are loaded onto WebView.
When the local contents access the properties (length) or methods (setItem, getItem and so on) of JS localStorage property,
it would return nothing (zero or null according to the return type) or throw an error.

## Examples

Let's assume that webview.html is located in plugin folder.
Plugin is able to load 'webview.html' in plugin folder as follows:

```html
<webview src="plugin:/webview.html"></webview>
```

Similarly, for webview-in-plugin-data.html in plugin data folder and webview-in-plugin-temp.html in plugin temp folder:

```html
<webview src="plugin-data:/webview-in-plugin-data.html"></webview>
<webview src="plugin-temp:/webview-in-plugin-temp.html"></webview>
```

For reference, the root folders of 'plugin', 'plugin-data', and 'plugin-temp' can be found in the following way.

```json
// Manifest permission
"requiredPermissions": {
  // required for localFileSystem
  "localFileSystem": "request"
}
```

```js
const localFileSystem = require("uxp").storage.localFileSystem;
const pluginFolder = await localFileSystem.getPluginFolder();
const pluginDataFolder = await localFileSystem.getDataFolder();
const tempFolder = await localFileSystem.getTemporaryFolder();

console.log(`pluginFolder = ${pluginFolder.nativePath}`);
console.log(`pluginDataFolder = ${pluginDataFolder.nativePath}`);
console.log(`pluginTempFolder = ${tempFolder.nativePath}`);
```


<a name="htmlwebviewelement-htmlwebviewelement-new" id="htmlwebviewelement-htmlwebviewelement-new"></a>

## HTMLWebViewElement()
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| uxpallowinspector | `boolean` | Enable Developer tools for debugging in UXP WebView<br></br>                                       **Note:** Not supported in UWP platform<br></br>                                       eg: `<webview id="webviewsample" width="100%" height="360px" src="https://www.adobe.com" uxpAllowInspector="true" ></webview>` |
| src | `string` | The url to load in the WebView |
| width | `string` | Width of the WebView |
| height | `string` | Height of the WebView |



<a name="htmlwebviewelement-src" id="htmlwebviewelement-src"></a>

## src : `string`
The url to load in the WebView.



<a name="htmlwebviewelement-postmessage" id="htmlwebviewelement-postmessage"></a>

## postMessage(message, targetOrigin, transfer)
The plugin and the content within the WebView can communicate with each other using `postMessage` and listening to the 'message' event.

[Plugin]
- send messages to the content in the WebView `HTMLWebViewElement.postMessage(msg)`
- receive messages from the content in the WebView `window.addEventListener("message", (e) => {...})` where `e: Event { origin: url of the content, source: window.HTMLWebViewElement, data: message }`

[Content in the WebView]
- send messages to plugin `window.uxpHost.postMessage(msg)`
- receive messages from plugin `window.addEventListener("message", (e) => { ... })` where `e: Event { origin: plugin id, source: window.uxpHost, data: message }`


| Param | Type | Description |
| --- | --- | --- |
| message | `Object` | A message sent to the WebView. Please note that the message is stringified & parsed by JSON |
| targetOrigin | `string` | `[Optional]` - The origin of WebView for the event to be dispatched. The literal string "*" indicates no preference |
| transfer | `Object` | `Optional` and `not functional yet`. Will be enabled in future release. |

**Example**  
```js
// Send message from plugin to WebView
let webViewDisplay = document.getElementById("webviewSample");
webViewDisplay.postMessage("PluginMessage1");

// Plugin receives message from WebView via "message" event.
window.addEventListener("message", (e) => {
  console.log(`Message from WebView(Origin:${e.origin}): ${e.data}\n`);

  if (e.data === "webviewmessage1") {
    webViewDisplay.postMessage("Thanks, Message1 recieved successfully");
  }
});
```
**Example**  
```js
// WebView sends message to Plugin
window.uxpHost.postMessage("webviewmessage1");

// WebView receives messages from Plugin
window.addEventListener("message", (e) => {
  // (e) from Plugin
  // e.origin would be 'plugin id'
  // e.source would be 'window.uxpHost'
  // e.data is 'JSON.parse(JSON.stringify("PluginMessage1"))' which is "PluginMessage1"
  if (e.data === "PluginMessage1") {
    console.log(e.data);
  }
});
```


<a name="htmlwebviewelement-event-loadstart" id="htmlwebviewelement-event-loadstart"></a>

## loadstart
Event fired when loading has started.

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| type | `string` | "loadstart" |
| url | `string` | url which WebView navigates to |

**Example**  
```js
const webview = document.getElementById("webviewSample");
// Print the url when loading has started
webview.addEventListener("loadstart", (e) => {
  console.log(`webview.loadstart ${e.url}`);
});
```


<a name="htmlwebviewelement-event-loadstop" id="htmlwebviewelement-event-loadstop"></a>

## loadstop
Event fired when loading has completed.

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| type | `string` | "loadstop" |
| url | `string` | url which WebView navigates to |

**Example**  
```js
// Print the url when loading has completed
webview.addEventListener("loadstop", (e) => {
  console.log(`webview.loadstop ${e.url}`);
});
```


<a name="htmlwebviewelement-event-loaderror" id="htmlwebviewelement-event-loaderror"></a>

## loaderror
Event fired when loading has failed.

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| type | `string` | "loaderror" |
| url | `string` | url which WebView navigates to |
| code | `number` | Platform specific error code. Below are the Error Code details for the following platforms<br></br> 1. [Mac Error Codes](https://developer.apple.com/documentation/foundation/1448136-nserror_codes)<br></br> 2. [Windows Error Code](https://learn.microsoft.com/en-us/dotnet/api/microsoft.web.webview2.core.corewebview2weberrorstatus?view=webview2-dotnet-1.0.1587.40)<br></br> 3. [Windows Common HRESULT codes](https://learn.microsoft.com/en-us/windows/win32/seccrypto/common-hresult-values)<br></br> |
| message | `string` | Error description |

**Example**  
```js
// Print the url, code and message when loading has failed
webview.addEventListener("loaderror", (e) => {
     console.log(`webview.loaderror ${e.url}, code:${e.code}, message:${e.message}`);
});
```

  