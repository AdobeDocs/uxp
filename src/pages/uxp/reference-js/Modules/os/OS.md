---
jsDoc: true
---

<a name="os" id="os"></a>

# require('os')
Class to give info about the operating system. To get an instance: `require("os")`.

**See**: https://nodejs.org/api/os.html  


<a name="os-platform" id="os-platform"></a>

## platform()
Gets the platform we are running on (eg. "win10", "darwin")

**Returns**: `string` - the string representing the platform  


<a name="os-release" id="os-release"></a>

## release()
Gets the release number of the os (eg. "10.0.1.1032")

**Returns**: `string` - the string representing the release  


<a name="os-arch" id="os-arch"></a>

## arch()
Gets the platform architecture we are running on (eg. "x32, x64, x86_64 etc")

**Returns**: `string` - the string representing the architecture  

## networkInterfaces()
Gets the network interfaces that have been assigned a network address

**Returns**: `Object` - an object containing network interfaces that have been assigned a network address. Each key on the returned object identifies a network interface. The associated value is an object that has the following properties.

| Name | Type | Description |
| --- | --- | --- |
| mac | `string` | The MAC address of the network interface |

Note that networkInterfaces() is available only for 1P plugins.

**Example**
```
const os = require("torq-native").os;
let networkInterfaces = os.networkInterfaces();
for (let name in networkInterfaces) {
  console.log(`NetworkInterface name=[${name}], MAC address=[${interfaces[name].mac}`);
}
```
