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

# Spectrum Web Component


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
npm install @swc-uxp-wrappers/button
```


__Step 3__: Import the component

```js
import '@swc-uxp-wrappers/button/sp-button.js';
```


```html
<sp-button variant="primary">I'm a button</sp-button>
```


This [sample plugin](https://github.com/AdobeDocs/uxp-photoshop-plugin-samples/tree/main/swc-uxp-starter) and [react sample plugin](https://github.com/AdobeDocs/uxp-photoshop-plugin-samples/tree/main/swc-uxp-react-starter) can get you started quickly. Make sure you follow the instructions in the README.


## List of supported SWC
Refer to the table below for the list of the components and their variants.

<InlineAlert variant="info" slots="text"/>

**Note** SWC in UXP is locked to a version. Refer to the `version` column in the table below. While referring to the documentation on the [Adobe SWC site](https://opensource.adobe.com/spectrum-web-components/), pay attention to the version number.


The status color of each variant represents its development state: <br></br>
🟢 (Ready) Component and variants are working as per the specs of the latest SWC(web) version.<br></br>
🟠 (Known Issues) Component/Variants have known issues and the fixes are in the pipeline.<br></br>
🌑 (Pending) Component/Variants have issues due to missing UXP core platform features. Will be addressed only in later releases.<br></br>
🔵 (N/A) Versions of locked Component/Variants do not support the variant. This would be fixed when UXP  moves to newer versions of the SWC components.

<br></br>

| Components      | Variants with status | Version |
| --------------- | -------------------- | ------- |
| Action-Bar      |   🟢 Fixed    <br></br>   🌑 Sticky       |      0.5.9 |
| Action-Button   |  🟢 Standard    <br></br>  🟢 Selected  <br></br>  🟢 Disabled <br></br> 🟢 Quiet  <br></br>  🟢 Emphasized  <br></br> 🟢 Toggles (Since UXP v7.2) <br></br>  🟢 hold-affordance  | 0.8.7 |
| Action-group |   🟢 Standard  <br></br> 🟢 selects (single/multiple) (Since UXP v7.2)  <br></br> 🟢 Selected  <br></br> 🟠 Vertical   | 0.12.4 |
| Avatar |  🟢 Standard   | 0.10.3 |
| Banner |  🟢 Info  <br></br> 🟢 Error  <br></br>  🟢 Corner placement   | 0.9.2 |
| Button (Since UXP v7.2)|  🟢 Accent  <br></br> 🟢  Primary  <br></br> 🟢 Secondary  <br></br> 🟢 Negative  <br></br> 🟢 Black  <br></br> 🟢 White  <br></br> 🟢 Content with label  <br></br>  🟢 Content with icon <br></br> 🟢 Content with svg <br></br> | 0.19.8 |
| Button-group (Since UXP v7.2)|  🟢 Horizontal  <br></br>🟢 Vertical | 0.10.8 |
| Card |  🟢 Normal  <br></br> 🌑 Action  <br></br> 🟢 No preview Image  <br></br> 🟢 Quiet  <br></br> 🟢 Gallery  <br></br> 🟢 Horizontal <br></br> 🟢 Linking  | 0.13.4 |
| Checkbox (Since UXP v7.2)|  🟢 Standard  <br></br>🟢 Emphasized <br></br>🟢 Sizes (s,m,l,xl) <br></br>🟢 Read only| 0.14.0 |
| Dialog (Since UXP v7.2)| 🟠 Standard  <br></br> 🟠  Dismissible  <br></br>  🟠  No Divider  <br></br> 🟠  Hero  <br></br>| 0.11.12 |
| Divider | 🟢 Horizontal  <br></br> 🟢  Vertical  <br></br> | 0.5.0 |
| Field-group (Since UXP v7.2)| 🟢 Horizontal  <br></br> 🟢  Vertical  <br></br>🟢 With help-text | 0.8.2 |
| Field-Label |   🟢 Standard <br></br> 🟢 Start <br></br> 🟢 End (Since UXP v7.2) <br></br> | 0.10.3 |
| Help-text (Since UXP v7.2)|  🟢 Standard  <br></br>  🟢 Disabled  <br></br>  🟢 Icon  <br></br> 🟢 Negative  <br></br> 🟢 Sizes(s, m, l and xl)  <br></br>| 0.2.7 |
| icons-workflow |  🟢 Standard  <br></br> | 0.9.5 |
| Icons-ui |  🟢 Standard  <br></br> | 0.9.5 |
| Illustrated-message |   🟢 Standard  | 0.9.8 |
| Link |   🟢 Standard  <br></br>  🟢 Secondary <br></br> 🟢 Static colored <br></br> 🟢 Quiet  <br></br>| 0.14.1 |
| Menu |  🟢 Standard <br></br> 🟢 With pop-over <br></br> 🟢 Selects = Single (Since UXP v7.2) <br></br> 🟠 Selects = Multiple | 0.16.9 |
| Menu-group | 🟢  Standard  <br></br> | 0.16.9 |
| Menu-item | 🟢  Standard  <br></br> 🟢 Icon-slot <br></br> 🟠 Value-slot  <br></br> 🌑 Sub menu <br></br> | 0.16.9 |
| Picker-button (Since UXP v7.2) | 🟢  Standard | 0.1.4 |
| Popover |  🟢 No Tip  <br></br> 🟢 With Tip (Since UXP v7.2)<br></br> 🟢 Dialog Popover<br></br> | 0.12.4 |
| Radio (Since UXP v7.2)<br></br> Radio-Group (Since UXP v7.2)| 🔵 Sizes (S,M,L, XL)  <br></br> 🟠 Standard <br></br> 🟢 Checked<br></br>🟢 Emphasized <br></br>🟢 With help-text radio group <br></br>🟢 Default| 0.10.0 |
| sidenav (Since UXP v7.2)|  🟢 Multi level  <br></br> 🟢 With Icon <br></br> 🟢 Heading<br></br> 🌑 manageTabIndex<br></br>| 0.13.7 |
| Switch (Since UXP v7.2)|  🔵 Sizes (S,M,L, XL)  <br></br> 🟢 Default <br></br> 🟢 Checked<br></br> 🟢 ReadOnly<br></br> 🟢 Emphasized<br></br>| 0.10.0 |
| Table (Since UXP v7.2)|  🟢 Standard <br></br> 🌑 Selects single<br></br> 🌑 Selects multiple<br></br> 🌑 Virtualized<br></br>| 0.1.7 |
| Tags (Since UXP v7.2)|  🟢 Sizes (S,M,L)  <br></br> 🟢 Default<br></br> 🟢 Deletable <br></br>🟢 ReadOnly<br></br>🟢 With Icon<br></br>🟠 With avatar<br></br> | 0.10.1 |
| Textfield (Since UXP v7.2)|  🟠 Standard  <br></br> 🟠 Valid<br></br> 🟠 Invalid <br></br>🟠 Quiet<br></br>🟠 With Types (Phone/Password)<br></br>🟠 Help text<br></br>🌑 Multiline (Textarea)<br></br> | 0.13.8 |
| Toast (Since UXP v7.2)|  🟢 Default  <br></br> 🟢 Negative<br></br>🟢 Positive <br></br>🟢 Info<br></br>🟢 With action <br></br>🟢 Wrapping| 0.11.9 |
| Tooltip (Since UXP v7.2)|  🟢 Standard  <br></br> 🟢 Informative<br></br>🟢 Positive <br></br>🟢 Negative<br></br>🌑 Overlaid| 0.11.9 |
