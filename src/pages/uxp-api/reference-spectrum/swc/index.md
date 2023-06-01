---
keywords:
  - SWC
  - SWC in UXP
  - Spectrum Web Components
  - Spectrum Web Components in UXP
title: Spectrum Web Components in UXP
description: Describes the Spectrum Web Components within UXP 
contributors:
  - https://github.com/padmkris123
---

# Spectrum Web Component (Beta)


**Since UXP v7.0**


To understand Spectrum Web Components (popularly known as SWC), you must first familiarize yourself with
- [Web components](https://developer.mozilla.org/en-US/docs/Web/Web_Components): HTML5 Web technology that lets you define custom HTML tags.
- [Spectrum](https://spectrum.adobe.com/): An open-source design language and guidelines provided by Adobe.


[Spectrum Web Components](https://opensource.adobe.com/spectrum-web-components/) are open-source Adobe Spectrum-styled Web Components. UXP v7.0 introduces the support for Web Components and Spectrum Web Components (SWC).




## Getting started


__Step 1__: Enable SWC in manifest.json
- USE `manifestVersion` version 4 or above
- Enable the `enableSWCSupport` feature flag


```json
"manifestVersion": 4,
 "host": [
   {
     "app": "PS",
     "minVersion": "24.4"
   }
 ],
 "featureFlags": {
   "enableSWCSupport": true
 }
```


__Step 2__: Install the component. For example,
```
npm install @spectrum-web-components/button@0.19.8
```


**Note** that specifying the version is important. The table below lists the version of each component that UXP supports. Make sure that you install/use the exact version specified.
<br></br>


__Step 3__: Use the component
  
```js
import '@spectrum-web-components/button/sp-button.js';
```


```html
<sp-button variant="primary">I'm a button</sp-button>
```


This [sample plugin](https://github.com/AdobeDocs/uxp-photoshop-plugin-samples/tree/main/swc-uxp-starter) can get you started quickly. Make sure you follow the instructions in the README.




## List of supported SWC


<InlineAlert variant="info" slots="text"/>


The support for SWC is in the beta phase. We are working on supporting more components in the future.


Refer to the table below for the list of the components and their variants.


The status color of each variant represents its development state: <br></br>
🟢 Variant works as per the specs. <br></br>
🔴 Variant has issues due to missing UXP core platform feature which will be addressed later.<br></br>




| Components      | Variants with status | Version |  Workarounds (if any)
| --------------- | -------------------- | ------- |  ------------  |
| Action-Bar      |   🟢 Fixed    <br></br>   🔴 Sticky       |      0.5.9 |
| Action-Button   |  🟢 Standard    <br></br>  🟢 Selected  <br></br>  🟢 Disabled <br></br> 🟢 Quiet  <br></br>  🟢 Emphasized  <br></br> 🔴 Toggles  <br></br>  🟢 hold-affordance  | 0.8.7 |
| Action-group |   🟢 Standard  <br></br> 🔴 selects (single/multiple)  <br></br> 🟢 Selected  <br></br> 🟢 Vertical   | 0.12.4 |  ``` margin-right: 10px; ```
| Avatar |  🟢 Standard   | 0.10.3 |
| Banner |  🟢 Info  <br></br> 🟢 Error  <br></br>  🟢 Corner placement   | 0.9.2 |
| Button |  🔴 Accent  <br></br> 🔴  Primary  <br></br> 🔴 Secondary  <br></br> 🔴 Negative  <br></br> 🔴 Black  <br></br> 🔴 White  <br></br> 🟢 Content with label  <br></br>  🟢 Content with icon<br></br> 🔴 Content with svg <br></br> | 0.19.8 |   ``` document.querySelector("sp-button").style.color= 'black' ```
| Card |  🟢 Normal  <br></br> 🔴 Action  <br></br> 🟢 No preview Image  <br></br> 🟢 Quiet  <br></br> 🟢 Gallery  <br></br> 🟢 Horizontal <br></br> 🟢 Linking  | 0.13.4 |
| Divider | 🟢 Horizontal  <br></br> 🟢  Vertical  <br></br> | 0.5.0 |
| Field-Label |   🟢 Standard <br></br> 🟢 Start <br></br> 🔴 End  <br></br> | 0.10.3 | ``` Padding-left can be applied to emulate the 'side-aligned'='end' behaviour ```
| icons-workflow |  🟢 Standard  <br></br> | 0.9.5 |
| Icons-ui |  🟢 Standard  <br></br> | 0.9.5 |
| Illustrated-message |   🟢 Standard  | 0.9.8 |
| Link |   🟢 Standard  <br></br>  🟢 Secondary <br></br> 🟢 Static colored <br></br> 🟢 Quiet  <br></br>| 0.14.1 |
| Menu |  🟢 Standard <br></br> 🟢 With pop-over <br></br> 🔴 Selects (Single/Multiple)  <br></br> | 0.16.9 |
| Menu-group | 🟢  Standard  <br></br> | 0.16.9 |
| Menu-item | 🟢  Standard  <br></br> 🟢 Icon-slot <br></br> 🟢 Value-slot  <br></br> 🔴 Sub menu <br></br> | 0.16.9 | Add styling to sp-icon to render selection for sp-menu-item ```padding-left:-8px```
| Popover |  🟢 No Tip  <br></br> 🔴 With Tip <br></br> 🟢 Dialog Popover<br></br> | 0.12.4 |