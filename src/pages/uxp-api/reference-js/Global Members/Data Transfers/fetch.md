
<a name="module-global-fetch" id="module-global-fetch"></a>

# window.fetch(input, [init])
Fetches a resource from the network.

**Returns**: `Promise<Response>` Promise that resolves to a Response object.  
**Throws**:

- `TypeError` If init.body is set and init.method is either "GET" or "HEAD".
- `TypeError` If either network error or network time-out occurs after a http request is made.
- `TypeError` If there is a failure in reading files in FormData during posting FormData.


| Param | Type | Description |
| --- | --- | --- |
| input | `string` \| `Request` | Either the URL string to connect with or a Request object having the URL and the init option. |
| [init] | `Object` | Custom settings for a HTTP request. |
| [init.method] | `string` | HTTP request method. The default value is "GET". |
| [init.headers] | `Headers` | HTTP request headers to add. |
| [init.body] | `string` \| `ArrayBuffer` \| `TypedArray` \| `Blob` \| `FormData` \| `ReadableStream` \| `URLSearchParams` | Body to add to HTTP request. |
| [init.credentials] | `string` | Indicates whether to send cookies. The default value is "include". Possible values and functions are as follows: <ul style="list-style: none;">  <li>"omit" : cookies are NOT sent.  <li>"include" : cookies are sent. </ul> |


