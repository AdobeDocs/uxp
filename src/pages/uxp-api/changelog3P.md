<!--
index_desc: Changelog in UXP version
-->

# UXP Changelog
## UXP v7.1.0

### New
- [setPointerCapture](./reference-js/Global%20Members/HTML%20DOM/Element.md#setpointercapturepointerid)
- [releasePointerCapture](./reference-js/Global%20Members/HTML%20DOM/Element.md#releasepointercapturepointerid)
- [hasPointerCapture](./reference-js/Global%20Members/HTML%20DOM/Element.md#haspointercapturepointerid)
- [dir - Styles](./reference-js/Global%20Members/HTML%20Elements/HTMLHtmlElement.md#dir--string): Direction related styles are being applied on the plugin launch

### Updated
- Documentation for `shell` moved to [new location](./reference-js/Modules/uxp/shell/)

### Fixed
- `fill` color attribute is now being honoured for SVGElement<br></br>
   <b>Example</b>
   ```html
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <style>
                html {
                    --iconColor: yellow;
                }   
            </style>
        </head>
        <body>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                <g id="ImportedIcons">
                <path d="M30.8565,27.8785c.0065-.0095-13.53-26.7855-13.53-26.7855a1.47449,1.47449,0,0,0-2.6625.0135L1.15,27.8535a1.48221,1.48221,0,0,0,.66469,1.97524,1.46548,1.46548,0,0,0,.66181.15376l27.011.0055A1.5025,1.5025,0,0,0,31,28.5,1.479,1.479,0,0,0,30.8565,27.8785ZM18,25.5a.5.5,0,0,1-.5.5h-3a.5.5,0,0,1-.5-.5v-3a.5.5,0,0,1,.5-.5h3a.5.5,0,0,1,.5.5Zm0-6a.5.5,0,0,1-.5.5h-3a.5.5,0,0,1-.5-.5V8.5a.5.5,0,0,1,.5-.5h3a.5.5,0,0,1,.5.5Z" fill="var(--iconColor, green)" fill-rule="evenodd"/>
                </g>
            </svg>
        </body>
        </html>
   ```
    In the above example, `fill` is applied as an `inline style` and its value is being set as a `var(--iconColor, green)`. In UXP 7.0 and below, they wont apply `--iconColor var of yellow` to the fill attribute instead it will apply the fallback value of `green`. With UXP 7.1, `fill` will honor this value, in this case `yellow`. <br></br>
    Currently this feature is behind a feature flag `enableFillAsCustomAttribute` which can be enabled as mentioned below
    ```json
    "featureFlags" : {
        "enableFillAsCustomAttribute" : true
    }
    ```
    <b>Note:</b><br></br>
    1. The above feature flag `enableFillAsCustomAttribute` will be set to `true` by default in the upcoming UXP release.
    2. Requesting Plugin developers to test their respective plugins with the feature flag `enableFillAsCustomAttribute` set to `true` in UXP 7.1 and handle them appropriately.
    
## UXP v7.0.0

### New
- Support for Web Components in UXP Plugins. Various HTML elements and methods have been added to support this feature.
    - Classes
        - [HTMLSlotElement](./reference-js/Global%20Members/HTML%20Elements/HTMLSlotElement.md)
        - [HTMLTemplateElement](./reference-js/Global%20Members/HTML%20Elements/HTMLTemplateElement.md)
    - Methods
        - [Element.assignedSlot](./reference-js/Global%20Members/HTML%20DOM/Element.md#assignedslot--htmlslotelement)
        - [Element.slot](./reference-js/Global%20Members/HTML%20DOM/Element.md#slot--string)
        - [Element.attachShadow](./reference-js/Global%20Members/HTML%20DOM/Element.md#attachshadowinit)
        - [Element.shadowRoot](./reference-js/Global%20Members/HTML%20DOM/Element.md#shadowroot--shadowroot)
        - [CustomElementRegistry.upgrade](./reference-js/Global%20Members/HTML%20DOM/CustomElementRegistry.md#upgraderoot)
        - [CustomElementRegistry.whenDefined](./reference-js/Global%20Members/HTML%20DOM/CustomElementRegistry.md#whendefinedname)
- [Spectrum Web Components (Beta)](./reference-spectrum-web-component/index.md) Support for Adobe SWC.
- Several augmentations to the JS API set
    - Properties
        - [HTMLElement.lang](./reference-js/Global%20Members/HTML%20Elements/HTMLElement.md#lang--string)
    - Classes added to the global scope
        - [TreeWalker](./reference-js/Global%20Members/HTML%20DOM/TreeWalker.md)
        - [NodeFilter](./reference-js/Global%20Members/HTML%20DOM/NodeFilter.md)
    - Methods
        - [Element.hasAttributes](./reference-js/Global%20Members/HTML%20DOM/Element.md#hasattributes)
        - [Element.getAttributeNames](./reference-js/Global%20Members/HTML%20DOM/Element.md#getattributenames)
        - [Event.composed](./reference-js/Global%20Members/HTML%20Events/Event.md#composed--boolean)
        - [Event.composedPath](./reference-js/Global%20Members/HTML%20Events/Event.md#composedpath)
        - [DocumentFragment.append](./reference-js/Global%20Members/HTML%20DOM/DocumentFragment.md#appendargs)
        - [DocumentFragment.querySelector](./reference-js/Global%20Members/HTML%20DOM/DocumentFragment.md#queryselectorselector)
        - [DocumentFragment.querySelectorAll](./reference-js/Global%20Members/HTML%20DOM/DocumentFragment.md#queryselectorallselector)
- New focus events to support React 16
    - [Focusin Event](https://developer.mozilla.org/en-US/docs/Web/API/Element/focusin_event)
    - [Focusout Event](https://developer.mozilla.org/en-US/docs/Web/API/Element/focusout_event)
- HTML [2D Canvas Support](./reference-js/Global%20Members/HTML%20Elements/HTMLCanvasElement.md) for Basic Shapes and Styling.
- Alerts
    - [alert()](./reference-js/Global%20Members/HTML%20DOM/alert.md)
    - [prompt()](./reference-js/Global%20Members/HTML%20DOM/prompt.md)
    - [confirm()](./reference-js/Global%20Members/HTML%20DOM/confirm.md)
- Support for [pipeThrough](./reference-js/Global%20Members/Streams/ReadableStream.md#pipeThroughtransform,-options) and [tee](./reference-js/Global%20Members/Streams/ReadableStream.md#tee) in ReadableStream](./reference-js/Global%20Members/Streams/ReadableStream.md). Refer to [Streams](./reference-js/Global%20Members/Streams/index.md) for more details
- [ImageBlob](./reference-js/Global%20Members/ImageBlob/ImageBlob.md) to render an uncompressed image buffer in UXP

### Changed
- [HTMLVideoElement](./reference-js/Global%20Members/HTML%20Elements/HTMLVideoElement.md): 'metadata' is the default value for `preload` attribute
- [FS API](./reference-js/Modules/fs/): No need for the `file://` protocol

## UXP v6.5.0

### New
- [UXP Hybrid plugins](../../guides/hybrid-plugins/)
- Allow unrestricted relative paths in require from scripts
- [getEntryWithUrl](./reference-js/Modules/uxp/Persistent%20File%20Storage/FileSystemProvider.md#getentrywithurlurl) in LocalFileProvider


## UXP v6.4

### New
- [WebView](./reference-js/Global%20Members/HTML%20Elements/HTMLWebViewElement.md) for anels
- [Path Module APIs](./reference-js/Global%20Members/Path/Path.md)
- UXP Scripts can run fsapi with full access in localFileSystem

### Bugs Fixes
- PluginManifest parsing / Load Plugin errors not logged in UDT
- Error shown in UDT APP logs on Plugin UnLoad
- UXP script : file session tokens are not getting created
- Error message and stack are empty in case of reject("error string") executed in script
- [Win only]-Volume is being muted automatically for 3rd video in the tutorial while opening the video in Theatre mode
- After closing the theatre mode, video's are Overlapping while scrolling up and down in DP
- Provide an API to programmatically close dialog in pop-out/theatre mode.
- Plugin Data folder shouldn't be created for scripts
- Crash on exit
- script.setResult("kSuccess") not working
- Resource Leaks in Window Dialog on UWP
- Privilege plugin fail to add in XD in certain cases
- Fixed mouse/keyboard events within Webview in XD v55 and Win 10.

## UXP v6.3

### New
- [Blob](./reference-js/Global%20Members/Data%20Transfers/Blob.md) APIs.
- Blob support in Fetch API.
- [Crypto APIs](./reference-js/Global%20Members/Crypto/Crypto.md)
- UXP Developer Tools v1.7.0 has supports for Debugging UXP Scripts in Photoshop and InDesign, refer [here](https://developer.adobe.com/photoshop/uxp/2022/scripting/getting-started/) for more details
- UXP Developer Tools has new templates in the Create Plugin Dialog. This includes examples for using WebView and Multiple Menus in a Plugin. For more details on Webview refer [HTMLWebViewElement](./reference-js/Global%20Members/HTML%20Elements/HTMLWebViewElement.md) module under `Global Members/HTML Elements` in JavaScript Reference

### Bugs Fixes
- Plugin cannot open its own folders because version dots are rejected
- PS crashes frequently during UDT watch reload
- UDT Window / Bring all to Front does not work
- UDT console closed when PS crashes or quits
- UDT fails to launch with "sign-in required" error
- PS crashes with empty `<svg> <polygon>`
- Manifest v5 breaks file permissions dialog
- Many stability Fixes and performance improvements