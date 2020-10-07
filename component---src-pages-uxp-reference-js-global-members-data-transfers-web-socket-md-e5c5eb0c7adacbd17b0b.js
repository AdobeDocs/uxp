(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{hRCA:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return b})),a.d(t,"default",(function(){return s}));var n,r=a("wx14"),o=a("zLVn"),d=(a("q1tI"),a("7ljp")),l=a("LHWr"),b=(a("qKvR"),{}),c=(n="JsDocParameters",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(d.mdx)("div",e)}),m={_frontmatter:b},i=l.a;function s(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(d.mdx)(i,Object(r.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(d.mdx)("a",{name:"module-global-websocket",id:"module-global-websocket"}),Object(d.mdx)("h1",{id:"windowwebsocket"},"window.WebSocket"),Object(d.mdx)(c,{mdxType:"JsDocParameters"}),Object(d.mdx)("a",{name:"new-module-global-websocket-new",id:"new-module-global-websocket-new"}),Object(d.mdx)("h2",{id:"websocketurl-protocols"},"WebSocket(url, protocols)"),Object(d.mdx)("table",null,Object(d.mdx)("thead",{parentName:"table"},Object(d.mdx)("tr",{parentName:"thead"},Object(d.mdx)("th",Object(r.a)({parentName:"tr"},{align:null}),"Param"),Object(d.mdx)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(d.mdx)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(d.mdx)("tbody",{parentName:"table"},Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",Object(r.a)({parentName:"tr"},{align:null}),"url"),Object(d.mdx)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(d.mdx)("inlineCode",{parentName:"td"},"string")),Object(d.mdx)("td",Object(r.a)({parentName:"tr"},{align:null}),"The URL to which to connect; this should be the URL to which the WebSocket server will respond.")),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",Object(r.a)({parentName:"tr"},{align:null}),"protocols"),Object(d.mdx)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(d.mdx)("inlineCode",{parentName:"td"},"string")," ","|"," ",Object(d.mdx)("inlineCode",{parentName:"td"},"Array.<string>")),Object(d.mdx)("td",Object(r.a)({parentName:"tr"},{align:null}),'Either a single protocol string or an array of protocol strings. Example usage: var ws = new WebSocket("ws://demos.kaazing.com/echo","xmpp"); Throws an exception of Error Object if invalid url or protocols is passed')))),Object(d.mdx)("a",{name:"module-global-websocket-protocol",id:"module-global-websocket-protocol"}),Object(d.mdx)("h2",{id:"protocol-⇒-string"},"protocol ⇒ ",Object(d.mdx)("inlineCode",{parentName:"h2"},"string")),Object(d.mdx)("p",null,Object(d.mdx)("strong",{parentName:"p"},"Returns"),": ",Object(d.mdx)("inlineCode",{parentName:"p"},"string")," - returns a string indicating the name of the sub-protocol the server selected;\nthis will be one of the strings specified in the protocols parameter when creating the WebSocket object.  "),Object(d.mdx)("a",{name:"module-global-websocket-bufferedamount",id:"module-global-websocket-bufferedamount"}),Object(d.mdx)("h2",{id:"bufferedamount-⇒-number"},"bufferedAmount ⇒ ",Object(d.mdx)("inlineCode",{parentName:"h2"},"number")),Object(d.mdx)("p",null,Object(d.mdx)("strong",{parentName:"p"},"Returns"),": ",Object(d.mdx)("inlineCode",{parentName:"p"},"number")," - returns the number of bytes of data that have been queued using calls to send() but not yet transmitted to the network.\nThis value resets to zero once all queued data has been sent.\nThis value does not reset to zero when the connection is closed;\nif you keep calling send(), this will continue to climb. Read only  "),Object(d.mdx)("a",{name:"module-global-websocket-binarytype",id:"module-global-websocket-binarytype"}),Object(d.mdx)("h2",{id:"binarytype"},"binaryType"),Object(d.mdx)("table",null,Object(d.mdx)("thead",{parentName:"table"},Object(d.mdx)("tr",{parentName:"thead"},Object(d.mdx)("th",Object(r.a)({parentName:"tr"},{align:null}),"Param"),Object(d.mdx)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(d.mdx)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(d.mdx)("tbody",{parentName:"table"},Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",Object(r.a)({parentName:"tr"},{align:null}),"data"),Object(d.mdx)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(d.mdx)("inlineCode",{parentName:"td"},"string")),Object(d.mdx)("td",Object(r.a)({parentName:"tr"},{align:null}),'A string indicating the type of binary data being transmitted by the connection. This should be either "blob" if DOM Blob objects are being used or "arraybuffer" if ArrayBuffer objects are being used.')))),Object(d.mdx)("a",{name:"module-global-websocket-binarytype",id:"module-global-websocket-binarytype"}),Object(d.mdx)("h2",{id:"binarytype-⇒-string"},"binaryType ⇒ ",Object(d.mdx)("inlineCode",{parentName:"h2"},"string")),Object(d.mdx)("p",null,Object(d.mdx)("strong",{parentName:"p"},"Returns"),": ",Object(d.mdx)("inlineCode",{parentName:"p"},"string")," - returns the string indicating the binary data type.  "),Object(d.mdx)("a",{name:"module-global-websocket-send",id:"module-global-websocket-send"}),Object(d.mdx)("h2",{id:"senddata"},"send(data)"),Object(d.mdx)("p",null,"Enqueues the specified data to be transmitted to the other end over the WebSocket connection,\nincreasing the value of bufferedAmount by the number of bytes needed to contain the data.\nIf the data can't be sent (for example, because it needs to be buffered but the buffer is full), the socket is closed automatically."),Object(d.mdx)("table",null,Object(d.mdx)("thead",{parentName:"table"},Object(d.mdx)("tr",{parentName:"thead"},Object(d.mdx)("th",Object(r.a)({parentName:"tr"},{align:null}),"Param"),Object(d.mdx)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(d.mdx)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(d.mdx)("tbody",{parentName:"table"},Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",Object(r.a)({parentName:"tr"},{align:null}),"data"),Object(d.mdx)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(d.mdx)("inlineCode",{parentName:"td"},"string")," ","|"," ",Object(d.mdx)("inlineCode",{parentName:"td"},"ArrayBuffer")," ","|"," ",Object(d.mdx)("inlineCode",{parentName:"td"},"ArrayBufferView")),Object(d.mdx)("td",Object(r.a)({parentName:"tr"},{align:null}),"Data to be sent Example usage: ws.send(new Float32Array(","[ 5, 2, 1, 3, 6, -1 ]","))                ws.send(new Int32Array(","[5,-1]",").buffer)")))),Object(d.mdx)("a",{name:"module-global-websocket-close",id:"module-global-websocket-close"}),Object(d.mdx)("h2",{id:"closecode-reason"},"close(","[code]",", ","[reason]",")"),Object(d.mdx)("p",null,"Closes the websocket connection"),Object(d.mdx)("table",null,Object(d.mdx)("thead",{parentName:"table"},Object(d.mdx)("tr",{parentName:"thead"},Object(d.mdx)("th",Object(r.a)({parentName:"tr"},{align:null}),"Param"),Object(d.mdx)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(d.mdx)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default"),Object(d.mdx)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(d.mdx)("tbody",{parentName:"table"},Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",Object(r.a)({parentName:"tr"},{align:null}),"[code]"),Object(d.mdx)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(d.mdx)("inlineCode",{parentName:"td"},"integer")),Object(d.mdx)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(d.mdx)("inlineCode",{parentName:"td"},"1000")),Object(d.mdx)("td",Object(r.a)({parentName:"tr"},{align:null}),"A integer value as per ",Object(d.mdx)("a",Object(r.a)({parentName:"td"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/WebSocket#close()",target:"_blank",rel:"nofollow noopener noreferrer"}),"https://developer.mozilla.org/en-US/docs/Web/API/WebSocket#close()"),".")),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",Object(r.a)({parentName:"tr"},{align:null}),"[reason]"),Object(d.mdx)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(d.mdx)("inlineCode",{parentName:"td"},"string")),Object(d.mdx)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(d.mdx)("inlineCode",{parentName:"td"},"&quot;\\&quot;\\&quot;&quot;")),Object(d.mdx)("td",Object(r.a)({parentName:"tr"},{align:null}),"A human-readable string explaining why the connection is closing. Throws an exception of Error Object if invalid code or reason is passed Refer ",Object(d.mdx)("a",Object(r.a)({parentName:"td"},{href:"https://wiki.corp.adobe.com/pages/viewpage.action?pageId=1455687313#FileandNetworkI/OTestCases-CloseMethodbehaviorforWebSockets",target:"_blank",rel:"nofollow noopener noreferrer"}),"https://wiki.corp.adobe.com/pages/viewpage.action?pageId=1455687313#FileandNetworkI/OTestCases-CloseMethodbehaviorforWebSockets"))))))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-uxp-reference-js-global-members-data-transfers-web-socket-md-e5c5eb0c7adacbd17b0b.js.map