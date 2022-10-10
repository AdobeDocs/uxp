
<a name="htmlwebviewelement" id="htmlwebviewelement"></a>

## HTMLWebViewElement : `window.HTMLWebViewElement` ⇐ [`HTMLElement`](#htmlelement)
**Kind**: global class  
**Extends**: [`HTMLElement`](#htmlelement)  
**Access**: public  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| uxpallowinspector | `boolean` | Enable Developer tools for WebView <br>&nbsp;&nbsp;e.g., \<webview src="https://www.adobe.com" uxpallowinspector="true"\>\<\/webview\> |


* [HTMLWebViewElement](#htmlwebviewelement) ⇐ [`HTMLElement`](#htmlelement)
    * [.src](#htmlwebviewelement-src) : `string`
    * [.dataset](#htmlelement-dataset)
    * [.innerText](#htmlelement-innertext) : `string`
    * [.nodeName](#element-nodename) : `string`
    * [.localName](#element-localname) : `string`
    * [.tagName](#element-tagname) : `string`
    * [.nodeType](#element-nodetype) : `number`
    * [.namespaceURI](#element-namespaceuri) : `string`
    * [.id](#element-id) : `string`
    * [.tabIndex](#element-tabindex) : `number`
    * [.className](#element-classname) : `string`
    * [.attributes](#element-attributes) : [`NamedNodeMap`](#namednodemap)
    * [.style](#element-style) : `Style`
    * [.clientLeft](#element-clientleft) : `number`
    * [.clientTop](#element-clienttop) : `number`
    * [.clientWidth](#element-clientwidth) : `number`
    * [.clientHeight](#element-clientheight) : `number`
    * [.height](#element-height) : `string` \| `Number`
    * [.width](#element-width) : `string` \| `Number`
    * [.offsetParent](#element-offsetparent) : [`Element`](#element)
    * [.offsetLeft](#element-offsetleft) : `number`
    * [.offsetTop](#element-offsettop) : `number`
    * [.offsetWidth](#element-offsetwidth) : `number`
    * [.offsetHeight](#element-offsetheight) : `number`
    * [.scrollLeft](#element-scrollleft) : `number`
    * [.scrollTop](#element-scrolltop) : `number`
    * [.scrollWidth](#element-scrollwidth) : `number`
    * [.scrollHeight](#element-scrollheight) : `number`
    * [.autofocus](#element-autofocus) : `boolean`
    * [.uxpContainer](#element-uxpcontainer) : `number`
    * [.disabled](#element-disabled) : `boolean`
    * [.innerHTML](#element-innerhtml) : `string`
    * [.outerHTML](#element-outerhtml) : `string`
    * [.contentEditable](#node-contenteditable)
    * [.isConnected](#node-isconnected) : `boolean`
    * [.parentNode](#node-parentnode) : [`Node`](#node)
    * [.parentElement](#node-parentelement) : [`Element`](#element)
    * [.firstChild](#node-firstchild) : [`Node`](#node)
    * [.lastChild](#node-lastchild) : [`Node`](#node)
    * [.previousSibling](#node-previoussibling) : [`Node`](#node)
    * [.nextSibling](#node-nextsibling) : [`Node`](#node)
    * [.firstElementChild](#node-firstelementchild) : [`Node`](#node)
    * [.lastElementChild](#node-lastelementchild) : [`Node`](#node)
    * [.previousElementSibling](#node-previouselementsibling) : [`Node`](#node)
    * [.nextElementSibling](#node-nextelementsibling) : [`Node`](#node)
    * [.textContent](#node-textcontent) : `string`
    * [.childNodes](#node-childnodes) : [`NodeList`](#nodelist)
    * [.children](#node-children) : [`HTMLCollection`](#htmlcollection)
    * [.ownerDocument](#node-ownerdocument)
    * [.postMessage(message, targetOrigin, transfer)](#htmlwebviewelement-postmessage)
    * [.scrollTo(xOrOptions, y)](#element-scrollto)
    * [.scrollIntoView(alignToTop)](#element-scrollintoview)
    * [.scrollIntoViewIfNeeded()](#element-scrollintoviewifneeded)
    * [.focus()](#element-focus)
    * [.blur()](#element-blur)
    * [.getAttribute(name)](#element-getattribute) ⇒ `string`
    * [.setAttribute(name, value)](#element-setattribute)
    * [.removeAttribute(name)](#element-removeattribute)
    * [.hasAttribute(name)](#element-hasattribute) ⇒ `boolean`
    * [.getAttributeNode(name)](#element-getattributenode) ⇒ `\*`
    * [.setAttributeNode(newAttr)](#element-setattributenode)
    * [.removeAttributeNode(oldAttr)](#element-removeattributenode)
    * [.click()](#element-click)
    * [.getElementsByClassName(name)](#element-getelementsbyclassname) ⇒ [`NodeList`](#nodelist)
    * [.getElementsByTagName(name)](#element-getelementsbytagname) ⇒ [`NodeList`](#nodelist)
    * [.querySelector(selector)](#element-queryselector) ⇒ [`Element`](#element)
    * [.querySelectorAll(selector)](#element-queryselectorall) ⇒ [`NodeList`](#nodelist)
    * [.getBoundingClientRect()](#element-getboundingclientrect) ⇒ `\*`
    * [.closest(selectorString)](#element-closest) ⇒ [`Element`](#element)
    * [.matches(selectorString)](#element-matches) ⇒ `boolean`
    * [.insertAdjacentHTML(position, value)](#element-insertadjacenthtml)
    * [.insertAdjacentElement(position, node)](#element-insertadjacentelement) ⇒ [`Node`](#node)
    * [.insertAdjacentText(position, text)](#element-insertadjacenttext)
    * [.hasChildNodes()](#node-haschildnodes) ⇒ `boolean`
    * [.cloneNode(deep)](#node-clonenode) ⇒ [`Node`](#node)
    * [.appendChild(child)](#node-appendchild) ⇒ [`Node`](#node)
    * [.insertBefore(child, before)](#node-insertbefore) ⇒ [`Node`](#node)
    * [.replaceChild(newChild, oldChild)](#node-replacechild) ⇒ [`Node`](#node)
    * [.removeChild(child)](#node-removechild) ⇒ [`Node`](#node)
    * [.remove()](#node-remove)
    * [.before(...nodes)](#node-before)
    * [.after(...nodes)](#node-after)
    * [.replaceWith(...nodes)](#node-replacewith)
    * [.contains(node)](#node-contains)
    * [.addEventListener(eventName, callback, [capture])](#EventTarget+addEventListener)
    * [.removeEventListener(eventName, callback, [capture])](#EventTarget+removeEventListener)
    * [.dispatchEvent(event)](#eventtarget-dispatchevent)


<a name="htmlwebviewelement-src" id="htmlwebviewelement-src"></a>

### htmlWebViewElement.src : `string`
The url of the webview

**Kind**: instance property of [`HTMLWebViewElement`](#htmlwebviewelement)  

<a name="htmlelement-dataset" id="htmlelement-dataset"></a>

### htmlWebViewElement.dataset
Access to all the custom data attributes (data-*) set.

**Kind**: instance property of [`HTMLWebViewElement`](#htmlwebviewelement)  
**Overrides**: [`dataset`](#htmlelement-dataset)  
**See**: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset  

<a name="htmlelement-innertext" id="htmlelement-innertext"></a>

### htmlWebViewElement.innerText : `string`
**Kind**: instance property of [`HTMLWebViewElement`](#htmlwebviewelement)  
**Overrides**: [`innerText`](#htmlelement-innertext)  

<a name="element-nodename" id="element-nodename"></a>

### htmlWebViewElement.nodeName : `string`
**Kind**: instance property of [`HTMLWebViewElement`](#htmlwebviewelement)  
**Overrides**: [`nodeName`](#element-nodename)  
**Read only**: true  

<a name="element-localname" id="element-localname"></a>

### htmlWebViewElement.localName : `string`
**Kind**: instance property of [`HTMLWebViewElement`](#htmlwebviewelement)  
**Overrides**: [`localName`](#element-localname)  
**Read only**: true  

<a name="element-tagname" id="element-tagname"></a>

### htmlWebViewElement.tagName : `string`
**Kind**: instance property of [`HTMLWebViewElement`](#htmlwebviewelement)  
**Overrides**: [`tagName`](#element-tagname)  
**Read only**: true  

<a name="element-nodetype" id="element-nodetype"></a>

### htmlWebViewElement.nodeType : `number`
**Kind**: instance property of [`HTMLWebViewElement`](#htmlwebviewelement)  
**Overrides**: [`nodeType`](#element-nodetype)  
**Read only**: true  

<a name="element-namespaceuri" id="element-namespaceuri"></a>

### htmlWebViewElement.namespaceURI : `string`
**Kind**: instance property of [`HTMLWebViewElement`](#htmlwebviewelement)  
**Overrides**: [`namespaceURI`](#element-namespaceuri)  
**Read only**: true  

<a name="element-id" id="element-id"></a>

### htmlWebViewElement.id : `string`
**Kind**: instance property of [`HTMLWebViewElement`](#htmlwebviewelement)  
**Overrides**: [`id`](#element-id)  

<a name="element-tabindex" id="element-tabindex"></a>

### htmlWebViewElement.tabIndex : `number`
**Kind**: instance property of [`HTMLWebViewElement`](#htmlwebviewelement)  
**Overrides**: [`tabIndex`](#element-tabindex)  

<a name="element-classname" id="element-classname"></a>

### htmlWebViewElement.className : `string`
**Kind**: instance property of [`HTMLWebViewElement`](#htmlwebviewelement)  
**Overrides**: [`className`](#element-classname)  

<a name="element-attributes" id="element-attributes"></a>

### htmlWebViewElement.attributes : [`NamedNodeMap`](#namednodemap)
**Kind**: instance property of [`HTMLWebViewElement`](#htmlwebviewelement)  
**Overrides**: [`attributes`](#element-attributes)  
**Read only**: true  

<a name="element-style" id="element-style"></a>

### htmlWebViewElement.style : `Style`
**Kind**: instance property of [`HTMLWebViewElement`](#htmlwebviewelement)  
**Overrides**: [`style`](#element-style)  
**Read only**: true  

<a name="element-clientleft" id="element-clientleft"></a>

### htmlWebViewElement.clientLeft : `number`
**Kind**: instance property of [`HTMLWebViewElement`](#htmlwebviewelement)  
**Overrides**: [`clientLeft`](#element-clientleft)  
**Read only**: true  

<a name="element-clienttop" id="element-clienttop"></a>

### htmlWebViewElement.clientTop : `number`
**Kind**: instance property of [`HTMLWebViewElement`](#htmlwebviewelement)  
**Overrides**: [`clientTop`](#element-clienttop)  
**Read only**: true  

<a name="element-clientwidth" id="element-clientwidth"></a>

### htmlWebViewElement.clientWidth : `number`
**Kind**: instance property of [`HTMLWebViewElement`](#htmlwebviewelement)  
**Overrides**: [`clientWidth`](#element-clientwidth)  
**Read only**: true  

<a name="element-clientheight" id="element-clientheight"></a>

### htmlWebViewElement.clientHeight : `number`
**Kind**: instance property of [`HTMLWebViewElement`](#htmlwebviewelement)  
**Overrides**: [`clientHeight`](#element-clientheight)  
**Read only**: true  

<a name="element-height" id="element-height"></a>

### htmlWebViewElement.height : `string` \| `Number`
The height of the element

**Kind**: instance property of [`HTMLWebViewElement`](#htmlwebviewelement)  
**Overrides**: [`height`](#element-height)  

<a name="element-width" id="element-width"></a>

### htmlWebViewElement.width : `string` \| `Number`
The width of the element

**Kind**: instance property of [`HTMLWebViewElement`](#htmlwebviewelement)  
**Overrides**: [`width`](#element-width)  

<a name="element-offsetparent" id="element-offsetparent"></a>

### htmlWebViewElement.offsetParent : [`Element`](#element)
**Kind**: instance property of [`HTMLWebViewElement`](#htmlwebviewelement)  
**Overrides**: [`offsetParent`](#element-offsetparent)  
**Read only**: true  

<a name="element-offsetleft" id="element-offsetleft"></a>

### htmlWebViewElement.offsetLeft : `number`
**Kind**: instance property of [`HTMLWebViewElement`](#htmlwebviewelement)  
**Overrides**: [`offsetLeft`](#element-offsetleft)  
**Read only**: true  

<a name="element-offsettop" id="element-offsettop"></a>

### htmlWebViewElement.offsetTop : `number`
**Kind**: instance property of [`HTMLWebViewElement`](#htmlwebviewelement)  
**Overrides**: [`offsetTop`](#element-offsettop)  
**Read only**: true  

<a name="element-offsetwidth" id="element-offsetwidth"></a>

### htmlWebViewElement.offsetWidth : `number`
**Kind**: instance property of [`HTMLWebViewElement`](#htmlwebviewelement)  
**Overrides**: [`offsetWidth`](#element-offsetwidth)  
**Read only**: true  

<a name="element-offsetheight" id="element-offsetheight"></a>

### htmlWebViewElement.offsetHeight : `number`
**Kind**: instance property of [`HTMLWebViewElement`](#htmlwebviewelement)  
**Overrides**: [`offsetHeight`](#element-offsetheight)  
**Read only**: true  

<a name="element-scrollleft" id="element-scrollleft"></a>

### htmlWebViewElement.scrollLeft : `number`
**Kind**: instance property of [`HTMLWebViewElement`](#htmlwebviewelement)  
**Overrides**: [`scrollLeft`](#element-scrollleft)  

<a name="element-scrolltop" id="element-scrolltop"></a>

### htmlWebViewElement.scrollTop : `number`
**Kind**: instance property of [`HTMLWebViewElement`](#htmlwebviewelement)  
**Overrides**: [`scrollTop`](#element-scrolltop)  

<a name="element-scrollwidth" id="element-scrollwidth"></a>

### htmlWebViewElement.scrollWidth : `number`
**Kind**: instance property of [`HTMLWebViewElement`](#htmlwebviewelement)  
**Overrides**: [`scrollWidth`](#element-scrollwidth)  
**Read only**: true  

<a name="element-scrollheight" id="element-scrollheight"></a>

### htmlWebViewElement.scrollHeight : `number`
**Kind**: instance property of [`HTMLWebViewElement`](#htmlwebviewelement)  
**Overrides**: [`scrollHeight`](#element-scrollheight)  
**Read only**: true  

<a name="element-autofocus" id="element-autofocus"></a>

### htmlWebViewElement.autofocus : `boolean`
Indicates if the element will focus automatically when it is loaded

**Kind**: instance property of [`HTMLWebViewElement`](#htmlwebviewelement)  
**Overrides**: [`autofocus`](#element-autofocus)  

<a name="element-uxpcontainer" id="element-uxpcontainer"></a>

### htmlWebViewElement.uxpContainer : `number`
**Kind**: instance property of [`HTMLWebViewElement`](#htmlwebviewelement)  
**Overrides**: [`uxpContainer`](#element-uxpcontainer)  
**Read only**: true  

<a name="element-disabled" id="element-disabled"></a>

### htmlWebViewElement.disabled : `boolean`
**Kind**: instance property of [`HTMLWebViewElement`](#htmlwebviewelement)  
**Overrides**: [`disabled`](#element-disabled)  

<a name="element-innerhtml" id="element-innerhtml"></a>

### htmlWebViewElement.innerHTML : `string`
**Kind**: instance property of [`HTMLWebViewElement`](#htmlwebviewelement)  
**Overrides**: [`innerHTML`](#element-innerhtml)  

<a name="element-outerhtml" id="element-outerhtml"></a>

### htmlWebViewElement.outerHTML : `string`
**Kind**: instance property of [`HTMLWebViewElement`](#htmlwebviewelement)  
**Overrides**: [`outerHTML`](#element-outerhtml)  

<a name="node-contenteditable" id="node-contenteditable"></a>

### htmlWebViewElement.contentEditable
**Kind**: instance property of [`HTMLWebViewElement`](#htmlwebviewelement)  
**Overrides**: [`contentEditable`](#node-contenteditable)  
**Read only**: true  

<a name="node-isconnected" id="node-isconnected"></a>

### htmlWebViewElement.isConnected : `boolean`
**Kind**: instance property of [`HTMLWebViewElement`](#htmlwebviewelement)  
**Overrides**: [`isConnected`](#node-isconnected)  
**Read only**: true  

<a name="node-parentnode" id="node-parentnode"></a>

### htmlWebViewElement.parentNode : [`Node`](#node)
**Kind**: instance property of [`HTMLWebViewElement`](#htmlwebviewelement)  
**Overrides**: [`parentNode`](#node-parentnode)  
**Read only**: true  

<a name="node-parentelement" id="node-parentelement"></a>

### htmlWebViewElement.parentElement : [`Element`](#element)
**Kind**: instance property of [`HTMLWebViewElement`](#htmlwebviewelement)  
**Overrides**: [`parentElement`](#node-parentelement)  
**Read only**: true  

<a name="node-firstchild" id="node-firstchild"></a>

### htmlWebViewElement.firstChild : [`Node`](#node)
**Kind**: instance property of [`HTMLWebViewElement`](#htmlwebviewelement)  
**Overrides**: [`firstChild`](#node-firstchild)  
**Read only**: true  

<a name="node-lastchild" id="node-lastchild"></a>

### htmlWebViewElement.lastChild : [`Node`](#node)
**Kind**: instance property of [`HTMLWebViewElement`](#htmlwebviewelement)  
**Overrides**: [`lastChild`](#node-lastchild)  
**Read only**: true  

<a name="node-previoussibling" id="node-previoussibling"></a>

### htmlWebViewElement.previousSibling : [`Node`](#node)
**Kind**: instance property of [`HTMLWebViewElement`](#htmlwebviewelement)  
**Overrides**: [`previousSibling`](#node-previoussibling)  
**Read only**: true  

<a name="node-nextsibling" id="node-nextsibling"></a>

### htmlWebViewElement.nextSibling : [`Node`](#node)
**Kind**: instance property of [`HTMLWebViewElement`](#htmlwebviewelement)  
**Overrides**: [`nextSibling`](#node-nextsibling)  
**Read only**: true  

<a name="node-firstelementchild" id="node-firstelementchild"></a>

### htmlWebViewElement.firstElementChild : [`Node`](#node)
**Kind**: instance property of [`HTMLWebViewElement`](#htmlwebviewelement)  
**Overrides**: [`firstElementChild`](#node-firstelementchild)  
**Read only**: true  

<a name="node-lastelementchild" id="node-lastelementchild"></a>

### htmlWebViewElement.lastElementChild : [`Node`](#node)
**Kind**: instance property of [`HTMLWebViewElement`](#htmlwebviewelement)  
**Overrides**: [`lastElementChild`](#node-lastelementchild)  
**Read only**: true  

<a name="node-previouselementsibling" id="node-previouselementsibling"></a>

### htmlWebViewElement.previousElementSibling : [`Node`](#node)
**Kind**: instance property of [`HTMLWebViewElement`](#htmlwebviewelement)  
**Overrides**: [`previousElementSibling`](#node-previouselementsibling)  
**Read only**: true  

<a name="node-nextelementsibling" id="node-nextelementsibling"></a>

### htmlWebViewElement.nextElementSibling : [`Node`](#node)
**Kind**: instance property of [`HTMLWebViewElement`](#htmlwebviewelement)  
**Overrides**: [`nextElementSibling`](#node-nextelementsibling)  
**Read only**: true  

<a name="node-textcontent" id="node-textcontent"></a>

### htmlWebViewElement.textContent : `string`
**Kind**: instance property of [`HTMLWebViewElement`](#htmlwebviewelement)  
**Overrides**: [`textContent`](#node-textcontent)  

<a name="node-childnodes" id="node-childnodes"></a>

### htmlWebViewElement.childNodes : [`NodeList`](#nodelist)
**Kind**: instance property of [`HTMLWebViewElement`](#htmlwebviewelement)  
**Overrides**: [`childNodes`](#node-childnodes)  
**Read only**: true  

<a name="node-children" id="node-children"></a>

### htmlWebViewElement.children : [`HTMLCollection`](#htmlcollection)
**Kind**: instance property of [`HTMLWebViewElement`](#htmlwebviewelement)  
**Overrides**: [`children`](#node-children)  
**Read only**: true  

<a name="node-ownerdocument" id="node-ownerdocument"></a>

### htmlWebViewElement.ownerDocument
**Kind**: instance property of [`HTMLWebViewElement`](#htmlwebviewelement)  
**Overrides**: [`ownerDocument`](#node-ownerdocument)  
**Read only**: true  

<a name="htmlwebviewelement-postmessage" id="htmlwebviewelement-postmessage"></a>

### htmlWebViewElement.postMessage(message, targetOrigin, transfer)
Post a message to the content in the webview.Note that the content in the webview can also post a message to plugin via window.uxpHost.postMessage(msg).The message sent to HTMLWebViewElement is also stringified & parsed by JSON.Plugin can receive the messages from WebView via 'message' event.[Plugin]- send messages to the content in the WebView<br>&nbsp;&nbsp;HTMLWebViewElement.postMessage(msg)- receive messages from the content in the WebView<br>&nbsp;&nbsp;window.addEventListener("message", (e) => { ... })<br>&nbsp;&nbsp;     e: Event {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; origin: URL of the content<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; source: window.uxpHost,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; data: message<br>&nbsp;&nbsp;&nbsp;}[Content in the WebView]- send messages to plugin<br>&nbsp;&nbsp;window.uxpHost.postMessage(message)- receive messages from plugin<br>&nbsp;&nbsp;window.addEventListener("message", (e) => { ... })<br>&nbsp;&nbsp;     e: Event {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; origin: plugin id,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; source: WebView element<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; data: message<br>&nbsp;&nbsp;&nbsp;}

**Kind**: instance method of [`HTMLWebViewElement`](#htmlwebviewelement)  

| Param | Type | Description |
| --- | --- | --- |
| message | `Object` | A message sent to the webview. Please note that the message is stringified & parsed by JSON |
| targetOrigin | `String` | The origin of webview for the event to be dispatched. The literal string "*" indicates no preference |
| transfer | `Object` | Not supported yet. |


<a name="element-scrollto" id="element-scrollto"></a>

### htmlWebViewElement.scrollTo(xOrOptions, y)
Scrolls the element to the new x and y positions. If options object is used with behavior: "smooth" then the element is smoothly scrolled.

**Kind**: instance method of [`HTMLWebViewElement`](#htmlwebviewelement)  
**Overrides**: [`scrollTo`](#element-scrollto)  
**See**: https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTo  

| Param | Type | Description |
| --- | --- | --- |
| xOrOptions | `\*` | either the new scrollLeft position or an options object. |
| y | `\*` | the optional new scrollTop position. |


<a name="element-scrollintoview" id="element-scrollintoview"></a>

### htmlWebViewElement.scrollIntoView(alignToTop)
**Kind**: instance method of [`HTMLWebViewElement`](#htmlwebviewelement)  
**Overrides**: [`scrollIntoView`](#element-scrollintoview)  

| Param | Type |
| --- | --- |
| alignToTop | `boolean` | 


<a name="element-scrollintoviewifneeded" id="element-scrollintoviewifneeded"></a>

### htmlWebViewElement.scrollIntoViewIfNeeded()
**Kind**: instance method of [`HTMLWebViewElement`](#htmlwebviewelement)  
**Overrides**: [`scrollIntoViewIfNeeded`](#element-scrollintoviewifneeded)  

<a name="element-focus" id="element-focus"></a>

### htmlWebViewElement.focus()
**Kind**: instance method of [`HTMLWebViewElement`](#htmlwebviewelement)  
**Overrides**: [`focus`](#element-focus)  

<a name="element-blur" id="element-blur"></a>

### htmlWebViewElement.blur()
**Kind**: instance method of [`HTMLWebViewElement`](#htmlwebviewelement)  
**Overrides**: [`blur`](#element-blur)  

<a name="element-getattribute" id="element-getattribute"></a>

### htmlWebViewElement.getAttribute(name) ⇒ `string`
**Kind**: instance method of [`HTMLWebViewElement`](#htmlwebviewelement)  
**Overrides**: [`getAttribute`](#element-getattribute)  

| Param | Type |
| --- | --- |
| name | `string` | 


<a name="element-setattribute" id="element-setattribute"></a>

### htmlWebViewElement.setAttribute(name, value)
**Kind**: instance method of [`HTMLWebViewElement`](#htmlwebviewelement)  
**Overrides**: [`setAttribute`](#element-setattribute)  

| Param | Type |
| --- | --- |
| name | `string` | 
| value | `string` | 


<a name="element-removeattribute" id="element-removeattribute"></a>

### htmlWebViewElement.removeAttribute(name)
**Kind**: instance method of [`HTMLWebViewElement`](#htmlwebviewelement)  
**Overrides**: [`removeAttribute`](#element-removeattribute)  

| Param | Type |
| --- | --- |
| name | `string` | 


<a name="element-hasattribute" id="element-hasattribute"></a>

### htmlWebViewElement.hasAttribute(name) ⇒ `boolean`
**Kind**: instance method of [`HTMLWebViewElement`](#htmlwebviewelement)  
**Overrides**: [`hasAttribute`](#element-hasattribute)  

| Param | Type |
| --- | --- |
| name | `string` | 


<a name="element-getattributenode" id="element-getattributenode"></a>

### htmlWebViewElement.getAttributeNode(name) ⇒ `\*`
**Kind**: instance method of [`HTMLWebViewElement`](#htmlwebviewelement)  
**Overrides**: [`getAttributeNode`](#element-getattributenode)  

| Param | Type |
| --- | --- |
| name | `string` | 


<a name="element-setattributenode" id="element-setattributenode"></a>

### htmlWebViewElement.setAttributeNode(newAttr)
**Kind**: instance method of [`HTMLWebViewElement`](#htmlwebviewelement)  
**Overrides**: [`setAttributeNode`](#element-setattributenode)  

| Param | Type |
| --- | --- |
| newAttr | `\*` | 


<a name="element-removeattributenode" id="element-removeattributenode"></a>

### htmlWebViewElement.removeAttributeNode(oldAttr)
**Kind**: instance method of [`HTMLWebViewElement`](#htmlwebviewelement)  
**Overrides**: [`removeAttributeNode`](#element-removeattributenode)  

| Param | Type |
| --- | --- |
| oldAttr | `\*` | 


<a name="element-click" id="element-click"></a>

### htmlWebViewElement.click()
**Kind**: instance method of [`HTMLWebViewElement`](#htmlwebviewelement)  
**Overrides**: [`click`](#element-click)  

<a name="element-getelementsbyclassname" id="element-getelementsbyclassname"></a>

### htmlWebViewElement.getElementsByClassName(name) ⇒ [`NodeList`](#nodelist)
**Kind**: instance method of [`HTMLWebViewElement`](#htmlwebviewelement)  
**Overrides**: [`getElementsByClassName`](#element-getelementsbyclassname)  

| Param | Type |
| --- | --- |
| name | `string` | 


<a name="element-getelementsbytagname" id="element-getelementsbytagname"></a>

### htmlWebViewElement.getElementsByTagName(name) ⇒ [`NodeList`](#nodelist)
**Kind**: instance method of [`HTMLWebViewElement`](#htmlwebviewelement)  
**Overrides**: [`getElementsByTagName`](#element-getelementsbytagname)  

| Param | Type |
| --- | --- |
| name | `string` | 


<a name="element-queryselector" id="element-queryselector"></a>

### htmlWebViewElement.querySelector(selector) ⇒ [`Element`](#element)
**Kind**: instance method of [`HTMLWebViewElement`](#htmlwebviewelement)  
**Overrides**: [`querySelector`](#element-queryselector)  

| Param | Type |
| --- | --- |
| selector | `string` | 


<a name="element-queryselectorall" id="element-queryselectorall"></a>

### htmlWebViewElement.querySelectorAll(selector) ⇒ [`NodeList`](#nodelist)
**Kind**: instance method of [`HTMLWebViewElement`](#htmlwebviewelement)  
**Overrides**: [`querySelectorAll`](#element-queryselectorall)  

| Param | Type |
| --- | --- |
| selector | `string` | 


<a name="element-getboundingclientrect" id="element-getboundingclientrect"></a>

### htmlWebViewElement.getBoundingClientRect() ⇒ `\*`
**Kind**: instance method of [`HTMLWebViewElement`](#htmlwebviewelement)  
**Overrides**: [`getBoundingClientRect`](#element-getboundingclientrect)  

<a name="element-closest" id="element-closest"></a>

### htmlWebViewElement.closest(selectorString) ⇒ [`Element`](#element)
**Kind**: instance method of [`HTMLWebViewElement`](#htmlwebviewelement)  
**Overrides**: [`closest`](#element-closest)  
**See**: https://developer.mozilla.org/en-US/docs/Web/API/Element/closest  

| Param | Type |
| --- | --- |
| selectorString | `string` | 


<a name="element-matches" id="element-matches"></a>

### htmlWebViewElement.matches(selectorString) ⇒ `boolean`
**Kind**: instance method of [`HTMLWebViewElement`](#htmlwebviewelement)  
**Overrides**: [`matches`](#element-matches)  
**See**: https://developer.mozilla.org/en-US/docs/Web/API/Element/matches  

| Param | Type |
| --- | --- |
| selectorString | `string` | 


<a name="element-insertadjacenthtml" id="element-insertadjacenthtml"></a>

### htmlWebViewElement.insertAdjacentHTML(position, value)
**Kind**: instance method of [`HTMLWebViewElement`](#htmlwebviewelement)  
**Overrides**: [`insertAdjacentHTML`](#element-insertadjacenthtml)  

| Param | Type |
| --- | --- |
| position |  | 
| value | `string` | 


<a name="element-insertadjacentelement" id="element-insertadjacentelement"></a>

### htmlWebViewElement.insertAdjacentElement(position, node) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLWebViewElement`](#htmlwebviewelement)  
**Overrides**: [`insertAdjacentElement`](#element-insertadjacentelement)  

| Param | Type |
| --- | --- |
| position | `\*` | 
| node | `\*` | 


<a name="element-insertadjacenttext" id="element-insertadjacenttext"></a>

### htmlWebViewElement.insertAdjacentText(position, text)
**Kind**: instance method of [`HTMLWebViewElement`](#htmlwebviewelement)  
**Overrides**: [`insertAdjacentText`](#element-insertadjacenttext)  

| Param | Type |
| --- | --- |
| position | `\*` | 
| text | `\*` | 


<a name="node-haschildnodes" id="node-haschildnodes"></a>

### htmlWebViewElement.hasChildNodes() ⇒ `boolean`
**Kind**: instance method of [`HTMLWebViewElement`](#htmlwebviewelement)  
**Overrides**: [`hasChildNodes`](#node-haschildnodes)  

<a name="node-clonenode" id="node-clonenode"></a>

### htmlWebViewElement.cloneNode(deep) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLWebViewElement`](#htmlwebviewelement)  
**Overrides**: [`cloneNode`](#node-clonenode)  

| Param | Type |
| --- | --- |
| deep | `boolean` | 


<a name="node-appendchild" id="node-appendchild"></a>

### htmlWebViewElement.appendChild(child) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLWebViewElement`](#htmlwebviewelement)  
**Overrides**: [`appendChild`](#node-appendchild)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 


<a name="node-insertbefore" id="node-insertbefore"></a>

### htmlWebViewElement.insertBefore(child, before) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLWebViewElement`](#htmlwebviewelement)  
**Overrides**: [`insertBefore`](#node-insertbefore)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 
| before | [`Node`](#node) | 


<a name="node-replacechild" id="node-replacechild"></a>

### htmlWebViewElement.replaceChild(newChild, oldChild) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLWebViewElement`](#htmlwebviewelement)  
**Overrides**: [`replaceChild`](#node-replacechild)  

| Param | Type |
| --- | --- |
| newChild | [`Node`](#node) | 
| oldChild | [`Node`](#node) | 


<a name="node-removechild" id="node-removechild"></a>

### htmlWebViewElement.removeChild(child) ⇒ [`Node`](#node)
**Kind**: instance method of [`HTMLWebViewElement`](#htmlwebviewelement)  
**Overrides**: [`removeChild`](#node-removechild)  

| Param | Type |
| --- | --- |
| child | [`Node`](#node) | 


<a name="node-remove" id="node-remove"></a>

### htmlWebViewElement.remove()
**Kind**: instance method of [`HTMLWebViewElement`](#htmlwebviewelement)  
**Overrides**: [`remove`](#node-remove)  

<a name="node-before" id="node-before"></a>

### htmlWebViewElement.before(...nodes)
**Kind**: instance method of [`HTMLWebViewElement`](#htmlwebviewelement)  
**Overrides**: [`before`](#node-before)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 


<a name="node-after" id="node-after"></a>

### htmlWebViewElement.after(...nodes)
**Kind**: instance method of [`HTMLWebViewElement`](#htmlwebviewelement)  
**Overrides**: [`after`](#node-after)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 


<a name="node-replacewith" id="node-replacewith"></a>

### htmlWebViewElement.replaceWith(...nodes)
**Kind**: instance method of [`HTMLWebViewElement`](#htmlwebviewelement)  
**Overrides**: [`replaceWith`](#node-replacewith)  

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) | 


<a name="node-contains" id="node-contains"></a>

### htmlWebViewElement.contains(node)
**Kind**: instance method of [`HTMLWebViewElement`](#htmlwebviewelement)  
**Overrides**: [`contains`](#node-contains)  

| Param | Type |
| --- | --- |
| node | [`Node`](#node) | 


<a name="eventtarget-addeventlistener" id="eventtarget-addeventlistener"></a>

### htmlWebViewElement.addEventListener(eventName, callback, [capture])
**Kind**: instance method of [`HTMLWebViewElement`](#htmlwebviewelement)  
**Overrides**: [`addEventListener`](#eventtarget-addeventlistener)  

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  | 
| callback | `\*` |  | 
| [capture] | `boolean` | <code>false</code> | 


<a name="eventtarget-removeeventlistener" id="eventtarget-removeeventlistener"></a>

### htmlWebViewElement.removeEventListener(eventName, callback, [capture])
**Kind**: instance method of [`HTMLWebViewElement`](#htmlwebviewelement)  
**Overrides**: [`removeEventListener`](#eventtarget-removeeventlistener)  

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  | 
| callback | `\*` |  | 
| [capture] | `boolean` | <code>false</code> | 


<a name="eventtarget-dispatchevent" id="eventtarget-dispatchevent"></a>

### htmlWebViewElement.dispatchEvent(event)
**Kind**: instance method of [`HTMLWebViewElement`](#htmlwebviewelement)  
**Overrides**: [`dispatchEvent`](#eventtarget-dispatchevent)  

| Param | Type |
| --- | --- |
| event | `\*` | 

  