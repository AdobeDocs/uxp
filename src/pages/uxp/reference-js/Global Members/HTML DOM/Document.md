---
jsDoc: true
---

<a name="document" id="document"></a>

# window.Document
**See**: https://developer.mozilla.org/en-US/docs/Web/API/Document  


<a name="document-online" id="document-online"></a>

## onLine : `boolean`
**Read only**
Indicates if the computer is online



<a name="document-nodename" id="document-nodename"></a>

## nodeName : `string`
**Read only**


<a name="document-nodetype" id="document-nodetype"></a>

## nodeType : `number`
**Read only**


<a name="document-uxpcontainer" id="document-uxpcontainer"></a>

## uxpContainer ⇒ `UXPContainer`
**Returns**: `UXPContainer`  


<a name="document-activeelement" id="document-activeelement"></a>

## activeElement : `Node`
**Read only**


<a name="document-documentelement" id="document-documentelement"></a>

## documentElement : `Document`
**Read only**


<a name="document-head" id="document-head"></a>

## head : `HTMLHeadElement`
**Read only**


<a name="document-body" id="document-body"></a>

## body : `HTMLBodyElement`
**Read only**


<a name="document-clipboard" id="document-clipboard"></a>

## clipboard : `Clippoard`
**Read only**


<a name="document-stylesheets" id="document-stylesheets"></a>

## styleSheets : `StyleSheetList`
**Read only**


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


<a name="node-attributes" id="node-attributes"></a>

## attributes
**Read only**


<a name="document-createelement" id="document-createelement"></a>

## createElement(name)
**Returns**: `Element`  

| Param | Type |
| --- | --- |
| name | `string` | 



<a name="document-createelementns" id="document-createelementns"></a>

## createElementNS(ns, name)
**Returns**: `Element`  

| Param | Type |
| --- | --- |
| ns | `string` | 
| name | `string` | 



<a name="document-createattribute" id="document-createattribute"></a>

## createAttribute(nodeName)
**Returns**: `Attr`  
**See**: https://developer.mozilla.org/en-US/docs/Web/API/Document/createAttribute  

| Param | Type |
| --- | --- |
| nodeName | `string` | 



<a name="document-createtextnode" id="document-createtextnode"></a>

## createTextNode([text])
**Returns**: `Text`  

| Param | Type | Default |
| --- | --- | --- |
| [text] | `string` | `&quot;\&quot;\&quot;&quot;` | 



<a name="document-createcomment" id="document-createcomment"></a>

## createComment([comment])
**Returns**: `Comment`  

| Param | Type | Default |
| --- | --- | --- |
| [comment] | `string` | `&quot;\&quot;\&quot;&quot;` | 



<a name="document-createdocumentfragment" id="document-createdocumentfragment"></a>

## createDocumentFragment()
**Returns**: `DocumentFragment`  


<a name="document-clonenode" id="document-clonenode"></a>

## cloneNode(deep)
**Returns**: `Document`  

| Param | Type |
| --- | --- |
| deep | `boolean` | 



<a name="document-adoptnode" id="document-adoptnode"></a>

## adoptNode(externalNode, deep)
**Returns**: `Node`  

| Param | Type |
| --- | --- |
| externalNode | `Node` | 
| deep | `boolean` | 



<a name="document-importnode" id="document-importnode"></a>

## importNode(externalNode, deep)
**Returns**: `Node`  

| Param | Type |
| --- | --- |
| externalNode | `Node` | 
| deep | `boolean` | 



<a name="document-queryselector" id="document-queryselector"></a>

## querySelector(selector)
**Returns**: `Node`  

| Param | Type |
| --- | --- |
| selector | `string` | 



<a name="document-queryselectorall" id="document-queryselectorall"></a>

## querySelectorAll(selector)
**Returns**: `NodeList`  

| Param | Type |
| --- | --- |
| selector | `string` | 



<a name="document-getelementsbyclassname" id="document-getelementsbyclassname"></a>

## getElementsByClassName(name)
**Returns**: `NodeList`  

| Param | Type |
| --- | --- |
| name | `string` | 



<a name="document-getelementsbytagname" id="document-getelementsbytagname"></a>

## getElementsByTagName(name)
**Returns**: `NodeList`  

| Param | Type |
| --- | --- |
| name | `string` | 



<a name="document-getelementbyid" id="document-getelementbyid"></a>

## getElementById(id)
**Returns**: `Element`  

| Param | Type |
| --- | --- |
| id | `string` | 



<a name="node-haschildnodes" id="node-haschildnodes"></a>

## hasChildNodes()
**Returns**: `boolean`  


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



<a name="document-document" id="document-document"></a>

## Document


<a name="new-document-document-new" id="new-document-document-new"></a>

### Document()
Creates an instance of Document.


