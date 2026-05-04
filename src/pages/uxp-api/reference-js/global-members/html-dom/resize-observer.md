
<a name="resizeobserver" id="resizeobserver"></a>

# window.ResizeObserver
**See**: [ResizeObserver](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver)  
**Since**: v8.1  


<a name="new-resizeobserver-new" id="new-resizeobserver-new"></a>

## ResizeObserver(callback)
Provides a mechanism to observe changes to the size of an element's content or border box.


| Param | Type | Description |
| --- | --- | --- |
| callback | `ResizeObserverCallback` | The function called whenever a resize event is triggered. |



<a name="resizeobserver-observe" id="resizeobserver-observe"></a>

## observe(target, [options])
Starts observing the specified target element for size changes.

**See**: [ResizeObserver - observe](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver/observe)  
**Since**: v8.1  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| target | `Element` |  | The element to be observed. |
| [options] | `Object` | `{}` | Options to configure the observation. Default is `{ box: "content-box" }`. |
| [options.box] | `string` |  | Specifies which box model to observe. Can be "content-box" or "border-box". |



<a name="resizeobserver-unobserve" id="resizeobserver-unobserve"></a>

## unobserve(target)
Stops observing the specified target element.

**See**: [ResizeObserver - unobserve](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver/unobserve)  
**Since**: v8.1  

| Param | Type | Description |
| --- | --- | --- |
| target | `Element` | The element to stop observing. |



<a name="resizeobserver-disconnect" id="resizeobserver-disconnect"></a>

## disconnect()
Disconnects the ResizeObserver instance from all observed target elements.

**See**: [ResizeObserver - disconnect](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver/disconnect)  
**Since**: v8.1  

  