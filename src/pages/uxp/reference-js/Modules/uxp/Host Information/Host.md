
<a name="host" id="host"></a>

# require('uxp').host
Includes useful information about the operating environment the plugin finds itself executing in.
`require("uxp").host`



<a name="host-name" id="host-name"></a>

## name ⇒ `string`
**Returns**: `string` - name of the host application. For ex, returns "photoshop" for Photoshop  


<a name="host-appcode" id="host-appcode"></a>

## appCode ⇒ `string`
**Returns**: `string` - sap code of host application. For ex, "PHXS"  


<a name="host-version" id="host-version"></a>

## version ⇒ `string`
**Returns**: `string` - version of host application. For ex, "20.0.0"  


<a name="host-uilocale" id="host-uilocale"></a>

## uiLocale ⇒ `string`
**Returns**: `string` - 5 letter UI locale of host application. For ex, "en_US"  


<a name="host-buildnumber" id="host-buildnumber"></a>

## buildNumber ⇒ `string`
**Returns**: `string` - buildNumber. For ex, "20190911.m.418"  


<a name="host-backgroundcolor" id="host-backgroundcolor"></a>

## backgroundColor ⇒ `string`
Represents background color of host application,

**Returns**: `string` - , when resolved gets backgroundColor in following format
{
        type  : "rgb",
        value : {string} representing antialiaslevel, alpha, red, green and blue values
}
type can be "css", "rgb" or srgb"; css format represents 6 digit hex value such as #BB3232,
other formats return return rgb values in {string}  


<a name="host-font" id="host-font"></a>

## font ⇒ `string`
Represents font settings of host application

**Returns**: `string` - , when resolved gets font in following format
{
   family: {string},
   size : {unsigned int}
}  


<a name="host-theme" id="host-theme"></a>

## theme ⇒ `string`
Represents color theme of host application.

**Returns**: `string` - when resolved, gets one of ("light", "lightest", "dark", "darkest")  

  