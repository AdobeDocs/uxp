---
jsDoc: true
---
# border-top-style

**Since:**  UXP 2, PS 22.0.0

Specifies the [style](../border-style/) of top border to render.

**See**: https://developer.mozilla.org/en/docs/Web/CSS/border-top-style  

**Example**

```css
.button {
    border-top-width: 2px;
    border-top-style: solid;
    border-top-color: white;
}
```

## Quirks and Exceptions

* Not all Spectrum UXP components allow border overrides.
* Border styles do not work for specific sides; they can only be applied to the entire element.