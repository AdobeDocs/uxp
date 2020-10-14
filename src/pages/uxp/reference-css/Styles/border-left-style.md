---
jsDoc: true
---
# border-left-style

**Since:**  UXP 2, PS 22.0.0

Specifies the [style](../border-style/) of left border to render.

**See**: https://developer.mozilla.org/en/docs/Web/CSS/border-left-style  

**Example**

```css
.button {
    border-left-width: 2px;
    border-left-style: solid;
    border-left-color: white;
}
```

## Quirks and Exceptions

* Not all Spectrum UXP components allow border overrides.
* Border styles do not work for specific sides; they can only be applied to the entire element.