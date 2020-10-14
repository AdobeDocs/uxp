---
jsDoc: true
---
# :disabled

**Since:** UXP 3, PS 22.0.0

Matches when the selected element is disabled. 

**See:** https://developer.mozilla.org/en-US/docs/Web/CSS/:disabled

**Example:**

```css
input:disabled {
    border: 1px solid blue;
}
```

## Quirks and Exceptions

* Only works for `<input>`s. Does not work for Spectrum UXP components. For Spectrum UXP checkboxes, use an attribute selector (e.g., `[disabled]`).
