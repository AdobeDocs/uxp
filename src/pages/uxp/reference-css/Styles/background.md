---
jsDoc: true
---
# background

**Since:**  UXP 2, PS 22.0.0

Specifies an element's background. Supports colors, multiple background images, as well as linear and radial gradients.

**See**: https://developer.mozilla.org/en/docs/Web/CSS/background

**Example**:

```css
.someElement {
    background: url('plugin://assets/star.png') red;
}
```

## Quirks and Exceptions

* Background repeat is not yet supported. As such, background images will *not* repeat by default.