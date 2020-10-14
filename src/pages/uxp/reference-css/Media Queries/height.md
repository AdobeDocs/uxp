---
jsDoc: true
---
# height

**Since:** UXP 4.1, PS 22.0.0

Enables you to restrict a set of CSS rules to match when the size of the plugin's dialog or panel meets your specified criteria.

**See:** https://developer.mozilla.org/en-US/docs/Web/CSS/@media/height

**Example**

```css
@media (max-height: 700px) {
    .someElement {
        background-color: red;
    }
}
```

## Known Issues

* When a plugin has multiple panels, only the size of the first panel is used for this calculation. As such, media queries based on viewport size do not make much sense when a plugin as two or more panels.