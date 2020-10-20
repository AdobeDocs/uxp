# Spectrum UXP Reference

Spectrum UXP is an implementation of the [Spectrum Web Components](https://opensource.adobe.com/spectrum-web-components/) API and the [Spectrum](https://spectrum.adobe.com/) Design System.

<InlineAlert variant="warning" slots="text"/>

The Spectrum UXP component API for UXP 4.1 is not perfectly compatible with the published version of the Spectrum Web Components API. Future versions of UXP will have a way to specify the version you need to use, but this is not yet availablein UXP 4.1.

## Why Spectrum UXP?

* **Based on Web Components standard** - The [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components) standard means that it's easy to work with Spectrum UXP widgets, just as if they were any other HTML tag. 
* **Framework agnostic** - Because web components are framework agnostic, you can use Spectrum UXP with any framework that works with UXP. Do note, however, that some frameworks do have special idioms for working with web components, so be sure to read the documentation for your framework.
* **Prepare for the future**  - Spectrum UXP components will become the only supported user-interface controls in UXP in the future. Prepare now by using them instead of the HTML correlates.

## Sample usage

Using a Spectrum UXP component in a UXP plugin is easy. There are no libraries or stylesheets to include. Just use them as you would any other HTML tag.

```html
<sp-button variant="primary">I'm a Spectrum button</sp-button>
```

## Pages in this section


* [Overview](/uxp/reference-spectrum/Overview/)
* [Typography](/uxp/reference-spectrum/Typography/)
* [User Interface](/uxp/reference-spectrum/User%20Interface/)
