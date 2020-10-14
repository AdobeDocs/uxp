---
jsDoc: true
---
# background-image

**Since:**  UXP 2, PS 22.0.0

Specifies a background image. Supports multiple background images, as well as linear and radial gradients.

**See**: https://developer.mozilla.org/en/docs/Web/CSS/background-image  

**Example**:

```css
.someElement {
    background-image: url('plugin://assets/star.png');
}
```

## Quirks and Exceptions

* Background repeat is not yet supported. As such, background images will *not* repeat by default.