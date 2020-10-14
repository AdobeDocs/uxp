---
jsDoc: true
---
# padding

**Since:**  UXP 2, PS 22.0.0

Specifies the padding for an element.

**See**: https://developer.mozilla.org/en/docs/Web/CSS/padding

**Example**:

```css
.someElement {
    padding: 3px 1em;
}
```

## Quirks and Exceptions

* UXP does not support the `content-sizing` box layout model. As such, the width and height of all elements include the padding and border width.