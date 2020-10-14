---
jsDoc: true
---
# border-right-style

**Since:**  UXP 2, PS 22.0.0

Specifies the [style](../border-style/) of right border to render.

**See**: https://developer.mozilla.org/en/docs/Web/CSS/border-right-style  

**Example**

```css
.button {
    border-right-width: 2px;
    border-right-style: solid;
    border-right-color: white;
}
```

## Quirks and Exceptions

* Not all Spectrum UXP components allow border overrides.
* Border styles do not work for specific sides; they can only be applied to the entire element.