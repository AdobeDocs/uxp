---
jsDoc: true
---

<a name="uxpmenuitems" id="uxpmenuitems"></a>

# UxpMenuItems
Class describing the menu of a panel.
Todo(tagarg) : make Iterable



<a name="uxpmenuitems-size" id="uxpmenuitems-size"></a>

## size ⇒ `Number`
Get number of menu items

**Returns**: `Number`  


<a name="uxpmenuitems-getitem" id="uxpmenuitems-getitem"></a>

## getItem(id)
Get menu item with specified id

**Returns**: `UxpMenuItem`  

| Param | Type |
| --- | --- |
| id | `string` | 



<a name="uxpmenuitems-getitemat" id="uxpmenuitems-getitemat"></a>

## getItemAt(index)
Get menu item at specified index

**Returns**: `UxpMenuItem`  

| Param | Type |
| --- | --- |
| index | `Number` | 



<a name="uxpmenuitems-insertat" id="uxpmenuitems-insertat"></a>

## insertAt(index, newItem)
Inserts the new menu item at the specified index.


| Param | Type | Description |
| --- | --- | --- |
| index | `Number` |  |
| newItem | `Object` | see 'entrypoints.setup' api for menu item description. |



<a name="uxpmenuitems-removeat" id="uxpmenuitems-removeat"></a>

## removeAt(index)
Removes menu item from specified index.


| Param | Type |
| --- | --- |
| index | `Number` | 


