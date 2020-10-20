---
jsDoc: true
---
# footer

**Since:** UXP 3, PS 22.0.0

The `<footer>` element is used in dialogs to help align buttons to the right-side of a dialog. You aren't required to use this element, and you can override any styles if you so choose.

**See**: https://developer.mozilla.org/en/docs/Web/HTML/Element/footer

**Example**

```html
<dialog>
    <form method="dialog">
        <sp-heading>A heading</sp-heading>
        <sp-divider size="large"></sp-divider>
        <sp-body>Hello!</sp-body>
        <footer>
            <sp-button>Close</sp-button>
        </footer>
    </form>
</dialog>
```

```js
document.querySelector("dialog").uxpShowModal({size: {width: 480, height: 360}});
```
