---
jsDoc: true
---
# letter-spacing

**Since:** UXP 2, PS 22.0.0

Sets the width inserted between letters.

**See**: https://developer.mozilla.org/en/docs/Web/CSS/letter-spacing

**Example**

```css
.someElement {
    letter-spacing: 3px;
}
```

## Quirks and Exceptions

* Negative values are not valid, and will result in the letters printing on top of each other.
* Not all Spectrum UXP components support overriding the letter spacing.
