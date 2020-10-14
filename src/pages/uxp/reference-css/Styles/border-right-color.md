---
jsDoc: true
---
# border-right-color

**Since:** UXP 2, PS 22.0.0

Specifies the top border color for an element. Supported color formats are as follows:

* Named Colors (See https://github.com/colorjs/color-name/blob/master/index.js)
* Hex colors
* RGB and RGBA colors
* HSL and HSLA colors

**See**

- https://developer.mozilla.org/en/docs/Web/CSS/color
- https://github.com/colorjs/color-name/blob/master/index.js

**Example**

```css
.someElement {
    border-style: solid;
    border-right-color: blue;
}
```

## Quirks and Exceptions

* Not all Spectrum UXP components allow color overrides.
* When specifying a border color, the border must also include a border style.
* Borders can only support a single color; the last specified border color will take precedence.