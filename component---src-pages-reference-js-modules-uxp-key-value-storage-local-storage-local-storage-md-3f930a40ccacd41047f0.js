(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{hLDD:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return d})),a.d(t,"default",(function(){return O}));var n=a("wx14"),r=a("zLVn"),l=(a("q1tI"),a("7ljp")),m=a("LHWr"),d=(a("qKvR"),{}),c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(l.mdx)("div",t)}},o=c("InlineAlert"),b=c("JsDocParameters"),i={_frontmatter:d},j=m.a;function O(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.mdx)(j,Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("a",{name:"localstorage",id:"localstorage"}),Object(l.mdx)("h1",{id:"windowlocalstorage"},"window.localStorage"),Object(l.mdx)("p",null,"Provides a local key-value store useful for setting preferences and other kinds of data.\nThis data is technically persistent, but can be cleared in a variety of ways, so you should not\nstore data using ",Object(l.mdx)("inlineCode",{parentName:"p"},"localStorage")," that you cannot otherwise reconstruct."),Object(l.mdx)(o,{variant:"warning",slots:"text",mdxType:"InlineAlert"}),Object(l.mdx)("p",null,"Do not store passwords or other secure forms of data using ",Object(l.mdx)("inlineCode",{parentName:"p"},"localStorage"),". Instead, use ",Object(l.mdx)("a",Object(n.a)({parentName:"p"},{href:"/uxp/reference-js/Modules/uxp/Key-Value%20Storage/secureStorage/SecureStorage/"}),"storage.secureStorage"),"."),Object(l.mdx)(b,{mdxType:"JsDocParameters"}),Object(l.mdx)("a",{name:"localstorage-length",id:"localstorage-length"}),Object(l.mdx)("h2",{id:"length-⇒-int"},"length ⇒ ",Object(l.mdx)("inlineCode",{parentName:"h2"},"int")),Object(l.mdx)("p",null,Object(l.mdx)("strong",{parentName:"p"},"Read only"),"\nReturns number of items stored in the local storage."),Object(l.mdx)("p",null,Object(l.mdx)("strong",{parentName:"p"},"Returns"),": ",Object(l.mdx)("inlineCode",{parentName:"p"},"int")," - returns the number of items  "),Object(l.mdx)("a",{name:"localstorage-key",id:"localstorage-key"}),Object(l.mdx)("h2",{id:"key"},"key()"),Object(l.mdx)("p",null,"Returns key which is stored at the given index"),Object(l.mdx)("p",null,Object(l.mdx)("strong",{parentName:"p"},"Returns"),": ",Object(l.mdx)("inlineCode",{parentName:"p"},"int")," - Returns key which is stored at the given index.  "),Object(l.mdx)("table",null,Object(l.mdx)("thead",{parentName:"table"},Object(l.mdx)("tr",{parentName:"thead"},Object(l.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Param"),Object(l.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(l.mdx)("tbody",{parentName:"table"},Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"index."),Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.mdx)("inlineCode",{parentName:"td"},"number"))))),Object(l.mdx)("a",{name:"localstorage-getitem",id:"localstorage-getitem"}),Object(l.mdx)("h2",{id:"getitemkey"},"getItem(key)"),Object(l.mdx)("p",null,"Get value from the local storage for the key."),Object(l.mdx)("p",null,Object(l.mdx)("strong",{parentName:"p"},"Returns"),": ",Object(l.mdx)("inlineCode",{parentName:"p"},"string")," - returns value corresponding to the key as string. If key doesn't exist, this function returns null.  "),Object(l.mdx)("table",null,Object(l.mdx)("thead",{parentName:"table"},Object(l.mdx)("tr",{parentName:"thead"},Object(l.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Param"),Object(l.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.mdx)("tbody",{parentName:"table"},Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"key"),Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.mdx)("inlineCode",{parentName:"td"},"string")),Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"A key to get value.")))),Object(l.mdx)("a",{name:"localstorage-setitem",id:"localstorage-setitem"}),Object(l.mdx)("h2",{id:"setitemkey-value"},"setItem(key, value)"),Object(l.mdx)("p",null,"Set key and value to the local storage.\nIf the key is newly set or value is different from old value, an update event will be fired later."),Object(l.mdx)("table",null,Object(l.mdx)("thead",{parentName:"table"},Object(l.mdx)("tr",{parentName:"thead"},Object(l.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Param"),Object(l.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.mdx)("tbody",{parentName:"table"},Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"key"),Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.mdx)("inlineCode",{parentName:"td"},"string")),Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"A key to set value")),Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"value"),Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.mdx)("inlineCode",{parentName:"td"},"string")),Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"A value for the key")))),Object(l.mdx)("a",{name:"localstorage-removeitem",id:"localstorage-removeitem"}),Object(l.mdx)("h2",{id:"removeitemkey"},"removeItem(key)"),Object(l.mdx)("p",null,"Remove a key/value pair from the local storage.\nIf the key exists in the local storage, an update event will be fired later."),Object(l.mdx)("table",null,Object(l.mdx)("thead",{parentName:"table"},Object(l.mdx)("tr",{parentName:"thead"},Object(l.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Param"),Object(l.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.mdx)("tbody",{parentName:"table"},Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"key"),Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.mdx)("inlineCode",{parentName:"td"},"string")),Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"A key to set value")))),Object(l.mdx)("a",{name:"localstorage-clear",id:"localstorage-clear"}),Object(l.mdx)("h2",{id:"clear"},"clear()"),Object(l.mdx)("p",null,"Remove all key/value pairs from the local storage.\nAn update event will be fired later."))}O.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-reference-js-modules-uxp-key-value-storage-local-storage-local-storage-md-3f930a40ccacd41047f0.js.map