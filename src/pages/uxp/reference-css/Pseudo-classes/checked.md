---
jsDoc: true
---
# :checked

**Since:** UXP 3, PS 22.0.0

Matches when the selected element is checked. 

**See:** https://developer.mozilla.org/en-US/docs/Web/CSS/:checked

**Example:**

```css
input:checked {
    background-color: blue;
}
```

## Quirks and Exceptions

* Only works for `<input type="checkbox">`. Does not work for Spectrum UXP components or radio buttons. For Spectrum UXP checkboxes, use an attribute selector (e.g., `[checked]`).
