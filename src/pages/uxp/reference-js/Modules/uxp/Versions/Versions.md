---
jsDoc: true
---

<a name="versions" id="versions"></a>

# require('uxp').versions
Version information. To get an instance: require("uxp").versions



<a name="versions-uxp" id="versions-uxp"></a>

## uxp : `string`
Returns the version of UXP. For example, `uxp-4.1.2.214`.

**Example**  
```js
const [uxpMajor, uxpMinor] = require("uxp").versions.uxp.substr(4).split(".");
```


<a name="versions-plugin" id="versions-plugin"></a>

## plugin : `string`
Returns the version of the plugin. This matches the version as specified in your plugin's manifest.


