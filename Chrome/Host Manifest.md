
# Chrome Host Manifest

The host manifest file describes the relationship<br>
between an application an browser extensions.


`My Host Manifest.json`

```json
  {
    "name": "appId",
    "type": "communicationType",
    "description": "",
    "path": "appPath",
    "allowed_origins": [ "extensionUrl" ]
  }

```

Check out the [Example Manifest](/example/app/Manifest.json)

---

### Name
Uniquely identifies an app and is used in<br>
the extension to connect to one another.

For `windows users` the appId will also be the<br>
name of the `registry key` that points towards<br>
the host manifest (this).

__Format:__
* `a - Z`
* `0 - 9`
* `.` `_`
* Cannot start nor end with `.`
* Cannot have multiple `.` in a row

__Examples:__
* `microsoft.graph_editor.updater`
* `mike00341.important_project`
* `cakemakers.editor`


---

### Type

The communication interface used.<br>
Currently only has one valid type.

__Types:__
* `stdio`: Indicates communication with <b>stdin</b> / <b>stdout</b>


---

### Description

Describes the native application.


---

### Path

System path to the application that will be used<br>
when in communication with the extension.

Operating System | Path can be relative
:---: | :---:
OSX | :x:
Linux | :x:
Windows | :heavy_check_mark:

`Relative paths` start from the host manifest (this) files path.

__Examples:__
* Relative: `/Editor.js` (if the manifest is located in the same folder as `Editor.js`)
* Absolute: `C:/cakeMaker/Editor.js`

The host process is started in the folder of it's binary,<br>
i.e. if the binary is located at `C:\myApplication\App.exe`,<br>
the current directory will be set to `C:\myApplication\`.

---

### Allowed Origins

Limits what extension can communicate with the native app.<br>
List the extension urls with the following format:

`chrome-extension://extensionId/`

The id of your extension can be found at <br>
`chrome://extensions/` once you have loaded it.

__Example:__ `chrome-extension://bgfcmdaggdanlogtkdephpqcojfbobmm/`
