
# Errors

*[» You may want to check out the Chrome Docs as well][Chrome Docs]*

<br>

#### Failed to start native Messaging host

You may be missing permissions to execute <br>
the application specified with the `path` value.

<br>

### Invalid native messaging host name specified

Check f the appId is valid by following the <br>
format described in the **[Manifest]** section.

<br>

### Native host has exited.

The communication interface has broken before <br>
Chrome has read any messages, it is very likely <br>
the fault of the native application.

<br>

### Specified native messaging host not found.

-   The name specified in the extension may <br>
    differ from the one in the **[Manifest]**.

-   The manifests filename may be spelled wrong.

    *On Linux and OSX the manifests filename must be the `appId`.*

-   The manifest file may be in the wrong location.

    *On Windows make sure the registry key points to the **[Manifest]**.*

-   The manifest file may not be a proper `JSON` file.

-   The manifest file may have a JSON `syntax error`.

-   The manifest file may not use the correct <br>
    `key / value` pairs as described in **[Manifest]**.

-   The file specified in `path` may not exist.

-   The `path` may have the wrong type.

    *Only Windows allows for `relative` paths.*

<br>

### Native messaging host `appId` is not registered.

( Windows Only )

The registry key for the specified appId was missing. <br>
Make sure the key exists and points to the **[Manifest]**.

<br>

### Access to the specified native messaging host is forbidden.

The `extensions url` may not be listed in `allowed_origins` ,<br>
please refer to the **[Manifest]** on how to format the Id.

<br>

### Error when communicating with the native messaging host.

Common error indicating an incorrect communication protocol implementation.

<br>

-   Check the format of data going to `stdout`

    *Use `stderr` for debugging.*

-   Check the 32-bit message length for <br>
    the platforms native integer format 

    `little / big-endian`

-   A message's length must be < `1024 * 1024`

    ( 1,048,576 )

-   Message size == byte count 

    *Message length may differ when multi-byte encoding is used.*

-   (Windows Only)
    
    By default the IO mode is set to `O_TEXT` which uses `\r\n` <br>
    ( `0x0D0A` ) instead of `\n` ( `0x0A` ) for line breaks, as such <br>
    please use `__setmode` to change the IO mode to `O_BINARY` <br>
    to avoid message corruption.

<br>


<!----------------------------------------------------------------------------->

[Chrome Docs]: https://developer.chrome.com/docs/apps/nativeMessaging/

[Manifest]: Host%20Manifest.md
