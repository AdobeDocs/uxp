---
jsDoc: true
---

<a name="host" id="host"></a>

# require("uxp").host

Includes useful information about the operating environment the plugin finds itself executing in.

<JsDocParameters/>

<a name="host-uilocale" id="host-uilocale"></a>

## uiLocale : `string`
**Read only**

Allows you to obtain the language and region used to render the user interface for the host application. This property is useful in that it allows you to localize and internationalize your plugin's content to match that of the host application.

**Returns**: `string` - the locale for the user interface. For example, `en_US`.

<a name="host-name" id="host-name"></a>

## name : `string`
**Read only**

Indicates the name of the hosting application. This is useful if your plugin needs to adapt its behavior based upon the hosting application.

Values      | Application
------------|------------
`Photoshop` | Adobe Photoshop 2021 or better

**Returns**: `string` - the name of the hosting application. For example, `Photoshop`.

<a name="host-version" id="host-version"></a>

## version : `string`
**Read only**

Indicates the version of the hosting application. This is useful if your plugin needs to adapt its behavior depending upon the version of the host application. This may be due to new APIs being introduced in a given version, or to work around a bug in a specific version.

**Returns**: `string` - the version of the hosting application. For example, `22.0.0`.
