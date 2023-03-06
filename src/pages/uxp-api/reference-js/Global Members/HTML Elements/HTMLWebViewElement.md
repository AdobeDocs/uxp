
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

WebViews are resource intensive since it launches multiple processes per plugin and therefore should be used only in cases where you cannot create the plugin using UXP features.

**Note:**<br></br>
1. WebViews support was introduced in UXP v6.0 to be used only in **Dialogs**. The reasoning here was to limit WebViews usage in persistent panels. Later due to overwhelming requests, WebView support was added for `Panels` with UXP v6.4.
2. WebViews will need manifest version v5 or above.
3. Checkout the template available in `UXP Developer Tool` for a quick getting starter plugin for WebView in UXP.
4. `requiredPermissions.webview.enableMessageBridge=“localAndRemote”` is required for Plugin & WebView communication via postMessage.

**Limitations:**<br></br>
1. Only remote content (including localhost) is allowed at present. This means you will not be able to load local html files from plugin folders in UXP WebView. This behaviour is due to limitations on WindowsOS and **<i>may</i>** be enabled in later releases.
2. Any links in a UXP WebView will not open in a new window.
e.g., In a browser, clicking `<a href="https://www.adobe.com" target="_blank">` would create a new Window
and open `https://www.adobe.com` from the new Window or JavaScript alert() pops up a new Window. UXP WebView doesn't permit this.

In your plugin's code, add a WebView element in the desired location.
The element can take attributes such as id , height , and src to specify the WebView's properties<br></br>

```
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
     <td>Allows access to the specified domains. Wildcards (except top-level) are supported. e.g "https://*.adobe.com". <br></br> Recommended</td>
     <td>Mandatory</td>
</tr>
<tr>
     <td>.domains</td>
     <td>"all"</td>
     <td>Allows access to all domains.<br></br>Not recommended, may affect performance, security and privacy. Plugin may be blocked by enterprises.</td>
     <td>Mandatory</td>
</tr>
<tr>
     <td>.allow</td>
     <td>"yes"</td>
     <td>Enables WebView access to the plugin</td>
     <td>Mandatory</td>
</tr>
<tr>
     <td>.enableMessageBridge</td>
     <td>"localAndRemote"</td>
     <td>Allows Plugin & the content loaded on WebView to communicate regardless of where the content is loaded from **locally or remotely.**<br></br>
         **Note: ** At this stage only remote content is allowed. Refer **Limitations** section for more details</td>
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
The url to load in the WebView. Only remote content (including `localhost`) is allowed at present.



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
    webViewDisplay.postMessage(" Thanks, Message1 recieved successfully");
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

  