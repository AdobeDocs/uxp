---
jsDoc: true
---

<a name="uxppanelinfo" id="uxppanelinfo"></a>

# UxpPanelInfo
Class describing a panel of the plugin.



<a name="uxppanelinfo-id" id="uxppanelinfo-id"></a>

## id ⇒ `string`
Get panel id

**Returns**: `string`  


<a name="uxppanelinfo-label" id="uxppanelinfo-label"></a>

## label ⇒ `string`
Get panel label

**Returns**: `string` - - a localized string  


<a name="uxppanelinfo-description" id="uxppanelinfo-description"></a>

## description ⇒ `string`
Get panel description

**Returns**: `string` - - a localized string  


<a name="uxppanelinfo-shortcut" id="uxppanelinfo-shortcut"></a>

## shortcut ⇒ `Object`
Get panel shortcut

**Returns**: `Object` - which consists of following keys:
                 {string} shortcutKey
                 {boolean} commandKey
                 {boolean} altKey
                 {boolean} shiftKey
                 {boolean} ctrlKey  


<a name="uxppanelinfo-title" id="uxppanelinfo-title"></a>

## title ⇒ `string`
Get panel title

**Returns**: `string` - - a localized string  


<a name="uxppanelinfo-icons" id="uxppanelinfo-icons"></a>

## icons ⇒ `Array.<Object>`
Get panel icons

**Returns**: `Array.<Object>` - each object contains following properties:
                           {string} path
                           {Array of Number} scale
                           {Array of string} theme
*                          {Array of string} species  


<a name="uxppanelinfo-minimumsize" id="uxppanelinfo-minimumsize"></a>

## minimumSize ⇒ `Object`
Get panel minimum size

**Returns**: `Object` - each object contains following properties:
                           {Number} width
                           {Number} height  


<a name="uxppanelinfo-maximumsize" id="uxppanelinfo-maximumsize"></a>

## maximumSize ⇒ `Object`
Get panel maximum size

**Returns**: `Object` - each object contains following properties:
                           {Number} width
                           {Number} height  


<a name="uxppanelinfo-preferreddockedsize" id="uxppanelinfo-preferreddockedsize"></a>

## preferredDockedSize ⇒ `Object`
Get panel preferred docked size

**Returns**: `Object` - each object contains following properties:
                           {Number} width
                           {Number} height  


<a name="uxppanelinfo-preferredfloatingsize" id="uxppanelinfo-preferredfloatingsize"></a>

## preferredFloatingSize ⇒ `Object`
Get panel preferred floating size

**Returns**: `Object` - each object contains following properties:
                           {Number} width
                           {Number} height  


<a name="uxppanelinfo-menuitems" id="uxppanelinfo-menuitems"></a>

## menuItems ⇒ `UxpMenuItems`
Get panel menu items

**Returns**: `UxpMenuItems`  

