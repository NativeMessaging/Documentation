# Chrome Errors

Errors that may occur. ([Chrome Docs](https://developer.chrome.com/docs/apps/nativeMessaging/))

---

#### Failed to start native Messaging host

* You may be missing permissions to execute the application specified with `path`

---

### Invalid native messaging host name specified

* Check for the validity of the appId, please format it as described in the [Manifest](/Host%20Manifest.md)

---

### Native host has exited.

* The communication interface has broken before Chrome has read any messages,<br>
it is very likely the fault of the native application.

---

### Specified native messaging host not found.

* The name specified in the extension may differ from the one specified in the [Manifest](/Host%20Manifest.md).
* The manifests filename may be spelled wrong (On Linux and OSX the manifests filename must be the `appId`).
* The manifest file may be in the wrong location (On Windows make sure the registry key points to the [Manifest](/Host%20Manifest.md)).
* The manifest file may not be a `JSON` file.
* The manifest file may have a JSON `syntax error`.
* The manifest file may not use the correct `key / value` pairs as described in [Manifest](/Host%20Manifest.md).
* The file specified in `path` may not exist.
* The `path` may have the wrong type (Only Windows allows for `relative` paths).

---

### Native messaging host `appId` is not registered.

(Windows Only)

* The registry key for the specified appId was not found in the registry,<br>
check by using `regedit` (`win + R  > regedit`). Make sure the key exists<br>
and points to the [Manifest](/Host%20Manifest.md)

---

### Access to the specified native messaging host is forbidden.

* The `extensions url` may not be listed in `allowed_origins`,<br>
please refer to the [Manifest](/Host%20Manifest.md) on how to format the Id.

---

### Error when communicating with the native messaging host.

Common error indicating an incorrect communication protocol implementation.


* Check the format of data going to `stdout` (Use `stderr` for debugging).
* Check the 32-bit message length for the platforms native integer format (`little / big - endian`).
* A messages length must be < `1024 * 1024` (1,048,576)
* Message size == byte count (Message length may differ as one char may use multiple bytes).
* (Windows Only)<br>
By default the I/O mode is set to `O_TEXT` which uses `\r\n` (0D0A) instead of `\n` (0A) for line breaks,<br>
as such please use `__setmode` to change the I/O mode to `O_BINARY` to avoid message corruption.
