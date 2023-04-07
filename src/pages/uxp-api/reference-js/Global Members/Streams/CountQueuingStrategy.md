
<a name="countqueuingstrategy" id="countqueuingstrategy"></a>

# window.CountQueuingStrategy
**See**: [Web APIs - CountQueuingStrategy](https://developer.mozilla.org/en-US/docs/Web/API/CountQueuingStrategy)  


<a name="new-countqueuingstrategy-new" id="new-countqueuingstrategy-new"></a>

## CountQueuingStrategy(init)
Creates a new CountQueuingStrategy object with the provided high water mark.

**Returns**: `CountQueuingStrategy`  

| Param | Type | Description |
| --- | --- | --- |
| init | `Object` | Object with high water mark property. |
| init.highWaterMark | `number` | The total number of chunks that can be contained in the internal queue before backpressure is applied. |



<a name="countqueuingstrategy-highwatermark" id="countqueuingstrategy-highwatermark"></a>

## highWaterMark : `number`
The high water mark.



<a name="countqueuingstrategy-size" id="countqueuingstrategy-size"></a>

## size()
The size of chunk, always 1.


  