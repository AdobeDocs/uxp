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

- Use `manifestVersion` version 5 or above
- Enable the `enableSWCSupport` feature flag


```json
"manifestVersion": 5,
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

## Sample plugin

The following samples are available for you to get started quickly

### Photoshop
- [Photoshop SWC starter plugin](https://github.com/AdobeDocs/uxp-photoshop-plugin-samples/tree/main/swc-uxp-starter)
- [Photoshop React-based SWC starter plugin](https://github.com/AdobeDocs/uxp-photoshop-plugin-samples/tree/main/swc-uxp-react-starter) (since UXP v7.3).

### InDesign
- [InDesign SWC starter plugin](https://github.com/AdobeDocs/uxp-indesign-samples/tree/main/plugins/swc-uxp-starter)
- [InDesign React-based SWC starter plugin](https://github.com/AdobeDocs/uxp-indesign-samples/tree/main/plugins/swc-uxp-react-starter) (since UXP v7.3).

Make sure you follow the `README` of the above `plugins`.

## List of supported SWC
Refer to the table below for the list of the components and their variants.

<InlineAlert variant="info" slots="text"/>

**Note** SWC in UXP is locked to a version. Refer to the `version` column in the table below. While referring to the documentation on the [Adobe SWC site](https://opensource.adobe.com/spectrum-web-components/), pay attention to the version number.


The status color of each variant represents its development state: <br></br>
🟢 (Ready) Component and variants are working as per the specs of the latest SWC(web) version. <br></br>
🟠 (Known Issues) Component/Variants have known issues and the fixes are in the pipeline.<br></br>
🌑 (Pending) Component/Variants have issues due to missing UXP core platform features. Will be addressed only in later releases.
<br></br>
🔵 (N/A) Versions of locked Component/Variants do not support the variant. This would be fixed when UXP  moves to newer versions of the SWC components.

#### Known Issues
There are some known issues across components which include :
1. `RTL` Direction parameter not working with sp-theme.
2. Keyboard accessibility issues with some components(tab-navigation issue with Tags, side-nav , Switch, Checkbox, Picker-button, radio, Toast, button and Spacebar action on buttons)



| Components      | Variants with status | @spectrum-web-component lib version | @swc-react lib versions (Since UXP v7.3) |
| --------------- | -------------------- | ------- | -------- |
| Action-Bar      |   🟢 Fixed    <br></br>   🌑 Sticky       |      0.5.9 | 0.5.9-react.2993 |
| Action-Button   |  🟢 Standard    <br></br>  🟢 Selected  <br></br>  🟢 Disabled <br></br> 🟢 Quiet  <br></br>  🟢 Emphasized  <br></br> 🟢 Toggles (Since UXP v7.2) <br></br>  🟢 hold-affordance  | 0.8.7 | 0.10.8-react.2993  |
| Action-group |   🟢 Standard  <br></br> 🟢 selects (single/multiple) (Since UXP v7.2)  <br></br> 🟢 Selected  <br></br> 🟠 Vertical   | 0.12.4 |  0.12.4-react.2993 |
| Avatar |  🟢 Standard   | 0.10.3 |0.31.0 |
| Banner |  🟢 Info  <br></br> 🟢 Error  <br></br>  🟢 Corner placement   | 0.9.2 |0.9.5-react.3120|
| Button (Since UXP v7.2)|  🟢 Accent  <br></br> 🟢  Primary  <br></br> 🟢 Secondary  <br></br> 🟢 Negative  <br></br> 🟢 Black  <br></br> 🟢 White  <br></br> 🟢 Content with label  <br></br>  🟢 Content with icon <br></br> 🟢 Content with svg <br></br> | 0.19.8 | 0.19.8-react.3029+c59ca07be  |
| Button-group (Since UXP v7.2)|  🟢 Horizontal  <br></br>🟢 Vertical | 0.10.8 |0.10.6-react.3163|
| Card |  🟢 Normal  <br></br> 🌑 Action  <br></br> 🟢 No preview Image  <br></br> 🟢 Quiet  <br></br> 🟢 Gallery  <br></br> 🟢 Horizontal <br></br> 🟢 Linking  | 0.13.4 |0.13.4-react.2993 |
| Checkbox (Since UXP v7.2)|  🟢 Standard  <br></br>🟢 Emphasized <br></br>🟢 Sizes (s,m,l,xl) <br></br>🟢 Read only| 0.14.0 |0.14.6-react.2993|
| Dialog (Since UXP v7.2)| 🟠 Standard  <br></br> 🟠  Dismissible  <br></br>  🟠  No Divider  <br></br> 🟠  Hero  <br></br>| 0.11.12 |0.11.12|
| Divider | 🟢 Horizontal  <br></br> 🟢  Vertical  <br></br> | 0.5.0 |0.6.6-react.3163|
| Field-group (Since UXP v7.2)| 🟢 Horizontal  <br></br> 🟢  Vertical  <br></br>🟢 With help-text | 0.8.2 |0.8.3-react.3120|
| Field-Label |   🟢 Standard <br></br> 🟢 Start <br></br> 🟢 End (Since UXP v7.2) <br></br> | 0.10.3 |0.10.3-react.3029|
| Help-text (Since UXP v7.2)|  🟢 Standard  <br></br>  🟢 Disabled  <br></br>  🟢 Icon  <br></br> 🟢 Negative  <br></br> 🟢 Sizes(s, m, l and xl)  <br></br>| 0.2.7 | 0.2.7-react.2993 |
| icons-workflow |  🟢 Standard  <br></br> | 0.9.5 | 0.9.5-react.2993	|
| Icons-ui |  🟢 Standard  <br></br> | 0.9.5 | 0.9.5-react.2993	|
| Illustrated-message |   🟢 Standard  | 0.9.8 | 0.9.8-react.2993	|
| Link |   🟢 Standard  <br></br>  🟢 Secondary <br></br> 🟢 Static colored <br></br> 🟢 Quiet  <br></br>| 0.14.1 | 0.14.1-react.3029	|
| Menu |  🟢 Standard <br></br> 🟢 With pop-over <br></br> 🟢 Selects = Single (Since UXP v7.2) <br></br> 🟠 Selects = Multiple | 0.16.9 | 0.16.9-react.3029	|
| Menu-group | 🟢  Standard  <br></br> | 0.16.9 | 0.16.9-react.3029	|
| Menu-item | 🟢  Standard  <br></br> 🟢 Icon-slot <br></br> 🟠 Value-slot  <br></br> 🌑 Sub menu <br></br> | 0.16.9 | 0.16.9-react.3029	|
| Picker-button (Since UXP v7.2) | 🟢  Standard | 0.1.4 | 0.1.4-react.2993	|
| Popover |  🟢 No Tip  <br></br> 🟢 With Tip (Since UXP v7.2)<br></br> 🟢 Dialog Popover<br></br> | 0.12.4 | 0.12.13	|
| Radio (Since UXP v7.2)<br></br> Radio-Group (Since UXP v7.2)| 🔵 Sizes (S,M,L, XL)  <br></br> 🟠 Standard <br></br> 🟢 Checked<br></br>🟢 Emphasized <br></br>🟢 With help-text radio group <br></br>🟢 Default| 0.10.0 | 0.11.7-react.2993	|
| sidenav (Since UXP v7.2)|  🟢 Multi level  <br></br> 🟢 With Icon <br></br> 🟢 Heading<br></br> 🌑 manageTabIndex<br></br>| 0.13.7 | 0.13.6-react.3029	|
| Switch (Since UXP v7.2)|  🔵 Sizes (S,M,L, XL)  <br></br> 🟢 Default <br></br> 🟢 Checked<br></br> 🟢 ReadOnly<br></br> 🟢 Emphasized<br></br>| 0.10.0 | 0.11.5-react.2993	|
| Table (Since UXP v7.2)|  🟢 Standard <br></br> 🌑 Selects single<br></br> 🌑 Selects multiple<br></br> 🌑 Virtualized<br></br>| 0.1.7 | 0.1.10	|
| Tags (Since UXP v7.2)|  🟢 Sizes (S,M,L)  <br></br> 🟢 Default<br></br> 🟢 Deletable <br></br>🟢 ReadOnly<br></br>🟢 With Icon<br></br>🟠 With avatar<br></br> | 0.10.1 | 0.10.3-react.3120	|
| Textfield (Since UXP v7.2)|  🟠 Standard  <br></br> 🟠 Valid<br></br> 🟠 Invalid <br></br>🟠 Quiet<br></br>🟠 With Types (Phone/Password)<br></br>🟠 Help text<br></br>🌑 Multiline (Textarea)<br></br> | 0.13.8 | 0.13.11-react.3163	|
| Toast (Since UXP v7.2)|  🟢 Default  <br></br> 🟢 Negative<br></br>🟢 Positive <br></br>🟢 Info<br></br>🟢 With action <br></br>🟢 Wrapping| 0.11.9 | 0.11.11-react.3163	|
| Tooltip (Since UXP v7.2)|  🟢 Standard  <br></br> 🟢 Informative<br></br>🟢 Positive <br></br>🟢 Negative<br></br>🌑 Overlaid| 0.11.9 |  0.11.13
