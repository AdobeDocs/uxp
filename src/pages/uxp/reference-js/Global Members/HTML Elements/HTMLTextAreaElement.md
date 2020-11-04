---
jsDoc: true
---

<a name="htmltextareaelement" id="htmltextareaelement"></a>

# window.HTMLTextAreaElement
**See**: https://developer.mozilla.org/en-US/docs/Web/API/HTMLTextAreaElement  


<a name="htmltextareaelement-value" id="htmltextareaelement-value"></a>

## value : `string`


<a name="htmltextareaelement-placeholder" id="htmltextareaelement-placeholder"></a>

## placeholder : `string`


<a name="htmltextareaelement-readonly" id="htmltextareaelement-readonly"></a>

## readOnly : `boolean`


<a name="htmltextareaelement-selectionstart" id="htmltextareaelement-selectionstart"></a>

## selectionStart : `Number`
Returns the beginning index of the selected text. When nothing is selected,
this returns the position of the text input cursor (caret) inside of the `<textarea>` element.



<a name="htmltextareaelement-selectionend" id="htmltextareaelement-selectionend"></a>

## selectionEnd : `Number`
Returns the end index of the selected text. When there's no selection,
this returns the offset of the character immediately following the current text input cursor position.



<a name="htmlelement-dataset" id="htmlelement-dataset"></a>

## dataset
Access to all the custom data attributes (data-*) set.

**See**: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset  


<a name="element-nodename" id="element-nodename"></a>

## nodeName : `string`
**Read only**


<a name="element-localname" id="element-localname"></a>

## localName : `string`
**Read only**


<a name="element-tagname" id="element-tagname"></a>

## tagName : `string`
**Read only**


<a name="element-nodetype" id="element-nodetype"></a>

## nodeType : `number`
**Read only**


<a name="element-namespaceuri" id="element-namespaceuri"></a>

## namespaceURI : `string`
**Read only**


<a name="element-id" id="element-id"></a>

## id : `string`


<a name="element-tabindex" id="element-tabindex"></a>

## tabIndex : `number`


<a name="element-classname" id="element-classname"></a>

## className : `string`


<a name="element-attributes" id="element-attributes"></a>

## attributes : `NamedNodeMap`
**Read only**


<a name="element-style" id="element-style"></a>

## style : `Style`
**Read only**


<a name="element-clientleft" id="element-clientleft"></a>

## clientLeft : `number`
**Read only**


<a name="element-clienttop" id="element-clienttop"></a>

## clientTop : `number`
**Read only**


<a name="element-clientwidth" id="element-clientwidth"></a>

## clientWidth : `number`
**Read only**


<a name="element-clientheight" id="element-clientheight"></a>

## clientHeight : `number`
**Read only**


<a name="element-height" id="element-height"></a>

## height : `string` \| `Number`
The height of the element



<a name="element-width" id="element-width"></a>

## width : `string` \| `Number`
The width of the element



<a name="element-offsetparent" id="element-offsetparent"></a>

## offsetParent : `Element`
**Read only**


<a name="element-offsetleft" id="element-offsetleft"></a>

## offsetLeft : `number`
**Read only**


<a name="element-offsettop" id="element-offsettop"></a>

## offsetTop : `number`
**Read only**


<a name="element-offsetwidth" id="element-offsetwidth"></a>

## offsetWidth : `number`
**Read only**


<a name="element-offsetheight" id="element-offsetheight"></a>

## offsetHeight : `number`
**Read only**


<a name="element-scrollleft" id="element-scrollleft"></a>

## scrollLeft : `number`


<a name="element-scrolltop" id="element-scrolltop"></a>

## scrollTop : `number`


<a name="element-scrollwidth" id="element-scrollwidth"></a>

## scrollWidth : `number`
**Read only**


<a name="element-scrollheight" id="element-scrollheight"></a>

## scrollHeight : `number`
**Read only**


<a name="element-uxpcontainer" id="element-uxpcontainer"></a>

## uxpContainer : `number`
**Read only**


<a name="element-disabled" id="element-disabled"></a>

## disabled : `boolean`


<a name="element-innerhtml" id="element-innerhtml"></a>

## innerHTML : `string`


<a name="element-outerhtml" id="element-outerhtml"></a>

## outerHTML : `string`


<a name="node-contenteditable" id="node-contenteditable"></a>

## contentEditable
**Read only**


<a name="node-isconnected" id="node-isconnected"></a>

## isConnected : `boolean`
**Read only**


<a name="node-parentnode" id="node-parentnode"></a>

## parentNode : `Node`
**Read only**


<a name="node-parentelement" id="node-parentelement"></a>

## parentElement : `Element`
**Read only**


<a name="node-firstchild" id="node-firstchild"></a>

## firstChild : `Node`
**Read only**


<a name="node-lastchild" id="node-lastchild"></a>

## lastChild : `Node`
**Read only**


<a name="node-previoussibling" id="node-previoussibling"></a>

## previousSibling : `Node`
**Read only**


<a name="node-nextsibling" id="node-nextsibling"></a>

## nextSibling : `Node`
**Read only**


<a name="node-firstelementchild" id="node-firstelementchild"></a>

## firstElementChild : `Node`
**Read only**


<a name="node-lastelementchild" id="node-lastelementchild"></a>

## lastElementChild : `Node`
**Read only**


<a name="node-previouselementsibling" id="node-previouselementsibling"></a>

## previousElementSibling : `Node`
**Read only**


<a name="node-nextelementsibling" id="node-nextelementsibling"></a>

## nextElementSibling : `Node`
**Read only**


<a name="node-textcontent" id="node-textcontent"></a>

## textContent : `string`


<a name="node-childnodes" id="node-childnodes"></a>

## childNodes : `NodeList`
**Read only**


<a name="node-children" id="node-children"></a>

## children : `HTMLCollection`
**Read only**


<a name="node-ownerdocument" id="node-ownerdocument"></a>

## ownerDocument
**Read only**


<a name="element-scrollto" id="element-scrollto"></a>

## scrollTo(xOrOptions, y)
Scrolls the element to the new x and y positions. If options object is used with behavior: "smooth" then the element is smoothly scrolled.

**See**: https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTo  

| Param | Type | Description |
| --- | --- | --- |
| xOrOptions | `*` | either the new scrollLeft position or an options object. |
| y | `*` | the optional new scrollTop position. |



<a name="element-scrollintoview" id="element-scrollintoview"></a>

## scrollIntoView(alignToTop)

| Param | Type |
| --- | --- |
| alignToTop | `boolean` | 



<a name="element-scrollintoviewifneeded" id="element-scrollintoviewifneeded"></a>

## scrollIntoViewIfNeeded()


<a name="element-focus" id="element-focus"></a>

## focus()


<a name="element-blur" id="element-blur"></a>

## blur()


<a name="element-getattribute" id="element-getattribute"></a>

## getAttribute(name)
**Returns**: `string`  

| Param | Type |
| --- | --- |
| name | `string` | 



<a name="element-setattribute" id="element-setattribute"></a>

## setAttribute(name, value)

| Param | Type |
| --- | --- |
| name | `string` | 
| value | `string` | 



<a name="element-removeattribute" id="element-removeattribute"></a>

## removeAttribute(name)

| Param | Type |
| --- | --- |
| name | `string` | 



<a name="element-hasattribute" id="element-hasattribute"></a>

## hasAttribute(name)
**Returns**: `boolean`  

| Param | Type |
| --- | --- |
| name | `string` | 



<a name="element-getattributenode" id="element-getattributenode"></a>

## getAttributeNode(name)
**Returns**: `*`  

| Param | Type |
| --- | --- |
| name | `string` | 



<a name="element-setattributenode" id="element-setattributenode"></a>

## setAttributeNode(newAttr)

| Param | Type |
| --- | --- |
| newAttr | `*` | 



<a name="element-removeattributenode" id="element-removeattributenode"></a>

## removeAttributeNode(oldAttr)

| Param | Type |
| --- | --- |
| oldAttr | `*` | 



<a name="element-click" id="element-click"></a>

## click()


<a name="element-getelementsbyclassname" id="element-getelementsbyclassname"></a>

## getElementsByClassName(name)
**Returns**: `NodeList`  

| Param | Type |
| --- | --- |
| name | `string` | 



<a name="element-getelementsbytagname" id="element-getelementsbytagname"></a>

## getElementsByTagName(name)
**Returns**: `NodeList`  

| Param | Type |
| --- | --- |
| name | `string` | 



<a name="element-queryselector" id="element-queryselector"></a>

## querySelector(selector)
**Returns**: `Element`  

| Param | Type |
| --- | --- |
| selector | `string` | 



<a name="element-queryselectorall" id="element-queryselectorall"></a>

## querySelectorAll(selector)
**Returns**: `NodeList`  

| Param | Type |
| --- | --- |
| selector | `string` | 



<a name="element-getboundingclientrect" id="element-getboundingclientrect"></a>

## getBoundingClientRect()
**Returns**: `*`  


<a name="element-insertadjacenthtml" id="element-insertadjacenthtml"></a>

## insertAdjacentHTML(position, value)

| Param | Type |
| --- | --- |
| position |  | 
| value | `string` | 



<a name="element-insertadjacentelement" id="element-insertadjacentelement"></a>

## insertAdjacentElement(position, node)
**Returns**: `Node`  

| Param | Type |
| --- | --- |
| position | `*` | 
| node | `*` | 



<a name="element-insertadjacenttext" id="element-insertadjacenttext"></a>

## insertAdjacentText(position, text)

| Param | Type |
| --- | --- |
| position | `*` | 
| text | `*` | 



<a name="node-haschildnodes" id="node-haschildnodes"></a>

## hasChildNodes()
**Returns**: `boolean`  


<a name="node-clonenode" id="node-clonenode"></a>

## cloneNode(deep)
**Returns**: `Node`  

| Param | Type |
| --- | --- |
| deep | `boolean` | 



<a name="node-appendchild" id="node-appendchild"></a>

## appendChild(child)
**Returns**: `Node`  

| Param | Type |
| --- | --- |
| child | `Node` | 



<a name="node-insertbefore" id="node-insertbefore"></a>

## insertBefore(child, before)
**Returns**: `Node`  

| Param | Type |
| --- | --- |
| child | `Node` | 
| before | `Node` | 



<a name="node-replacechild" id="node-replacechild"></a>

## replaceChild(newChild, oldChild)
**Returns**: `Node`  

| Param | Type |
| --- | --- |
| newChild | `Node` | 
| oldChild | `Node` | 



<a name="node-removechild" id="node-removechild"></a>

## removeChild(child)
**Returns**: `Node`  

| Param | Type |
| --- | --- |
| child | `Node` | 



<a name="node-remove" id="node-remove"></a>

## remove()


<a name="node-before" id="node-before"></a>

## before(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | `Array.<Node>` | 



<a name="node-after" id="node-after"></a>

## after(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | `Array.<Node>` | 



<a name="node-replacewith" id="node-replacewith"></a>

## replaceWith(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | `Array.<Node>` | 



<a name="node-contains" id="node-contains"></a>

## contains(node)

| Param | Type |
| --- | --- |
| node | `Node` | 



<a name="eventtarget-addeventlistener" id="eventtarget-addeventlistener"></a>

## addEventListener(eventName, callback, [capture])

| Param | Type | Default |
| --- | --- | --- |
| eventName | `*` |  | 
| callback | `*` |  | 
| [capture] | `boolean` | `false` | 



<a name="eventtarget-removeeventlistener" id="eventtarget-removeeventlistener"></a>

## removeEventListener(eventName, callback, [capture])

| Param | Type | Default |
| --- | --- | --- |
| eventName | `*` |  | 
| callback | `*` |  | 
| [capture] | `boolean` | `false` | 



<a name="eventtarget-dispatchevent" id="eventtarget-dispatchevent"></a>

## dispatchEvent(event)

| Param | Type |
| --- | --- |
| event | `*` | 


