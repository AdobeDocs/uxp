---
jsDoc: true
---
# sp-label

**Since:** UXP 4.1, PS 22.0.0

Renders a text label. Can also be used to add a label to many Spectrum UXP UI elements when using the `slot="label"` attribute.

**See**:
- https://spectrum.adobe.com/page/label

**Example**

```html
<sp-label>This is a label</sp-label>
```

## Attributes

You can indicate that a label is required by using the `isrequired="true"` attribute.A

```html
<sp-textfield>
    <sp-label slot="label" isrequired="true">This is a label</sp-label>
</sp-textfield>
```
