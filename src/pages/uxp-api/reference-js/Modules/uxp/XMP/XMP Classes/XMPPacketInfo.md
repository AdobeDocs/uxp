
<a name="xmppacketinfo" id="xmppacketinfo"></a>

# XMPPacketInfo
**Since**: v7.2.0
This object is returned by [XMPFile.getpacketinfo](./XMPFile.md#getpacketinfo).. The read-only properties describe the XMP packet for the file represented by the [XMPFile object](./XMPFile.md).  


<a name="xmppacketinfo-charform" id="xmppacketinfo-charform"></a>

## charForm : `number`
**Read only**
The character encoding in the packet, one of:                     0 - UTF8                     2 - UTF-16, MSB-first (big-endian)                     3 - UTF-16, LSB-first (little-endian)                     4 - UTF 32, MSB-first (big-endian)                     5 - UTF 32, LSB-first (little-endian)



<a name="xmppacketinfo-length" id="xmppacketinfo-length"></a>

## length : `number`
**Read only**
The length of the packet in bytes.



<a name="xmppacketinfo-offset" id="xmppacketinfo-offset"></a>

## offset : `number`
**Read only**
The byte-offset from the start of the file where the packet begins.



<a name="xmppacketinfo-packet" id="xmppacketinfo-packet"></a>

## packet : `string`
**Read only**
The raw packet data.



<a name="xmppacketinfo-padsize" id="xmppacketinfo-padsize"></a>

## padSize : `number`
**Read only**
The packet’s padding size in bytes, 0 if unknown.



<a name="xmppacketinfo-writeable" id="xmppacketinfo-writeable"></a>

## writeable : `boolean`
**Read only**
If true, the packet is writeable.


  