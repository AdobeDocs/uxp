(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{Uao2:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return m})),a.d(t,"default",(function(){return b}));var n=a("wx14"),d=a("zLVn"),l=(a("q1tI"),a("7ljp")),r=a("LHWr"),m=(a("qKvR"),{}),i={_frontmatter:m},c=r.a;function b(e){var t=e.components,a=Object(d.a)(e,["components"]);return Object(l.mdx)(c,Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("a",{name:"module-storage-file",id:"module-storage-file"}),Object(l.mdx)("h2",{id:"file"},"File"),Object(l.mdx)("p",null,"Represents a file on a file system. Provides methods for reading from and\nwriting to the file. You'll never instantiate a ",Object(l.mdx)("inlineCode",{parentName:"p"},"File")," directly; instead\nyou'll get access via a ",Object(l.mdx)("a",Object(n.a)({parentName:"p"},{href:"#module-storage-filesystemprovider"}),"FileSystemProvider"),"."),Object(l.mdx)("a",{name:"module-storage-file-isfile",id:"module-storage-file-isfile"}),Object(l.mdx)("h3",{id:"isfile"},"isFile"),Object(l.mdx)("p",null,"Indicates that this instance is a file."),Object(l.mdx)("p",null,Object(l.mdx)("strong",{parentName:"p"},"Example"),"  "),Object(l.mdx)("pre",null,Object(l.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"if (anEntry.isFile) {\n    await anEntry.read();\n}\n")),Object(l.mdx)("a",{name:"module-storage-file-mode",id:"module-storage-file-mode"}),Object(l.mdx)("h3",{id:"mode--symbol"},"mode : ",Object(l.mdx)("inlineCode",{parentName:"h3"},"Symbol")),Object(l.mdx)("p",null,"Indicates whether this file is read-only or read-write. See ",Object(l.mdx)("a",Object(n.a)({parentName:"p"},{href:"readOnly"}),"readOnly")," and ",Object(l.mdx)("a",Object(n.a)({parentName:"p"},{href:"readWrite"}),"readWrite"),"."),Object(l.mdx)("p",null,Object(l.mdx)("strong",{parentName:"p"},"Example"),"  "),Object(l.mdx)("pre",null,Object(l.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'if (aFile.mode === modes.readOnly) {\n    throw new Error("Can\'t write to a file opened as read-only.");\n}\n')),Object(l.mdx)("a",{name:"module-storage-file-read",id:"module-storage-file-read"}),Object(l.mdx)("h3",{id:"readoptions"},"read(options)"),Object(l.mdx)("p",null,"Reads data from the file and returns it. The file format can be specified\nwith the ",Object(l.mdx)("inlineCode",{parentName:"p"},"format")," option. If a format is not supplied, the file is assumed\nto be a text file using UTF8 encoding."),Object(l.mdx)("p",null,Object(l.mdx)("strong",{parentName:"p"},"Returns"),": ",Object(l.mdx)("inlineCode",{parentName:"p"},"Promise.<(string\\|ArrayBuffer)>")," - the contents of the file  "),Object(l.mdx)("table",null,Object(l.mdx)("thead",{parentName:"table"},Object(l.mdx)("tr",{parentName:"thead"},Object(l.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Param"),Object(l.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(l.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.mdx)("tbody",{parentName:"table"},Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"options"),Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.mdx)("inlineCode",{parentName:"td"},"any")),Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"[options.format]"),Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.mdx)("inlineCode",{parentName:"td"},"Symbol")),Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.mdx)("inlineCode",{parentName:"td"},"formats.utf8")),Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"The format of the file; see ",Object(l.mdx)("a",Object(n.a)({parentName:"td"},{href:"utf8"}),"utf8")," and ",Object(l.mdx)("a",Object(n.a)({parentName:"td"},{href:"binary"}),"binary"),".")))),Object(l.mdx)("p",null,Object(l.mdx)("strong",{parentName:"p"},"Example"),"  "),Object(l.mdx)("pre",null,Object(l.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const text = await myNovel.read();\n")),Object(l.mdx)("p",null,Object(l.mdx)("strong",{parentName:"p"},"Example"),"  "),Object(l.mdx)("pre",null,Object(l.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const data = await myNovel.read({format: formats.binary});\n")),Object(l.mdx)("a",{name:"module-storage-file-write",id:"module-storage-file-write"}),Object(l.mdx)("h3",{id:"writedata-options"},"write(data, options)"),Object(l.mdx)("p",null,"Writes data to a file, appending if desired. The format of the file\nis controlled via the ",Object(l.mdx)("inlineCode",{parentName:"p"},"format")," option, and defaults to UTF8."),Object(l.mdx)("p",null,Object(l.mdx)("strong",{parentName:"p"},"Throws"),":"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("inlineCode",{parentName:"li"},"FileIsReadOnly")," if writing to a read-only file"),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("inlineCode",{parentName:"li"},"OutOfSpace")," If writing to the file causes the file system to exceed the available space (or quota)")),Object(l.mdx)("table",null,Object(l.mdx)("thead",{parentName:"table"},Object(l.mdx)("tr",{parentName:"thead"},Object(l.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Param"),Object(l.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(l.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.mdx)("tbody",{parentName:"table"},Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"data"),Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.mdx)("inlineCode",{parentName:"td"},"string")," ","|"," ",Object(l.mdx)("inlineCode",{parentName:"td"},"ArrayBuffer")),Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"the data to write to the file")),Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"options"),Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.mdx)("inlineCode",{parentName:"td"},"any")),Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"[options.format]"),Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.mdx)("inlineCode",{parentName:"td"},"Symbol")),Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.mdx)("inlineCode",{parentName:"td"},"formats.utf8")),Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"the format of the file; see ",Object(l.mdx)("a",Object(n.a)({parentName:"td"},{href:"utf8"}),"utf8")," and ",Object(l.mdx)("a",Object(n.a)({parentName:"td"},{href:"binary"}),"binary"))),Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"[options.append]"),Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.mdx)("inlineCode",{parentName:"td"},"boolean")),Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.mdx)("inlineCode",{parentName:"td"},"false")),Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"if ",Object(l.mdx)("inlineCode",{parentName:"td"},"true"),", the data is written to the end of the file")))),Object(l.mdx)("p",null,Object(l.mdx)("strong",{parentName:"p"},"Example"),"  "),Object(l.mdx)("pre",null,Object(l.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'await myNovel.write("It was a dark and stormy night.\\n");\nawait myNovel.write("Cliches and tropes aside, it really was.", {append: true});\n')),Object(l.mdx)("p",null,Object(l.mdx)("strong",{parentName:"p"},"Example"),"  "),Object(l.mdx)("pre",null,Object(l.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const data = new ArrayBuffer();\nawait aDataFile.write(data, {format: formats.binary});\n")),Object(l.mdx)("a",{name:"module-storage-file-isfile",id:"module-storage-file-isfile"}),Object(l.mdx)("h3",{id:"isfileentry"},"isFile(entry)"),Object(l.mdx)("p",null,"Determines if the entry is a file or not. This is safe to use even if the\nentry is ",Object(l.mdx)("inlineCode",{parentName:"p"},"null")," or ",Object(l.mdx)("inlineCode",{parentName:"p"},"undefined"),"."),Object(l.mdx)("p",null,Object(l.mdx)("strong",{parentName:"p"},"Returns"),": ",Object(l.mdx)("inlineCode",{parentName:"p"},"boolean")," - if ",Object(l.mdx)("inlineCode",{parentName:"p"},"true"),", the entry is a file.  "),Object(l.mdx)("table",null,Object(l.mdx)("thead",{parentName:"table"},Object(l.mdx)("tr",{parentName:"thead"},Object(l.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Param"),Object(l.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.mdx)("tbody",{parentName:"table"},Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"entry"),Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.mdx)("inlineCode",{parentName:"td"},"any")),Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"the entry to check")))))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-reference-js-uxp-storage-non-instantiatable-file-md-224502ccc68d70e403be.js.map