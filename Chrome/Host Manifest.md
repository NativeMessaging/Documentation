
# Host Manifest

*The host manifest file describes the relationship* <br>
*between an application a browser extensions.*

<br>

`My Host Manifest.json`

```json
{
    "allowed_origins" : [ "<Extension Url>" ] ,
    "description" : "" ,
    "type" : "<Communication Type>" ,
    "path" : "<App Path>" ,
    "name" : "<App Id>"
}
```

*[» Check out the example][Example]*

<br>
<br>

## Name

*Unique identifier that, in extensions,* <br>
*is used to connect to one another.*

<br>

### Windows

For windows users, the appId is the name of the <br>
registry key that points towards this host manifest.

<br>

### Format

-   Cannot have multiple `.` in a row

-   Cannot start / end with `.`

-   `a - Z` `0 - 9` `.` `_`

<br>

### Examples

-   `microsoft.graph_editor.updater`

-   `mike00341.important_project`

-   `cakemakers.editor`

<br>
<br>

## Type

*The communication interface used.* <br>
*Currently only has one valid type.*

<br>

### Types

<br>

-   `stdio`
    
    *Indicates communication with `stdin` / `stdout`*

<br>
<br>

## Description

*A simple description of the native app.*

<br>
<br>

## Path

System path to the application that will be used<br>
when in communication with the extension.

<br>

### Relative

*Relative paths start from this host manifest.*

| OS | Windows | Linux | OSX
|:--:|:-------:|:-----:|:---:
|    |    🟢   |   🔴  | 🔴

<br>

### Examples

<br>

-   #### Relative

    `/Editor.js`
    
    *With the manifest located in* <br>
    *the same folder as `Editor.js`*

    <br>

-   #### Absolute

    `C:/cakeMaker/Editor.js`

<br>

### Process

The current working directory will be set <br>
to the folder of the binary as it is started.

`C:\myApplication\App.exe` <br>
⤷ `C:\myApplication\`

<br>
<br>

## Allowed Origins

*A list of extensions that are allowed* <br>
*to communicate with the native app.*

<br>

### Format

`chrome-extension://<Extension Id>/`

<br>

### Extension Id

You can find your extension's <br>
Id at [`chrome://extensions/`]

<br>

### Example

```
chrome-extension://bgfcmdaggdanlogtkdephpqcojfbobmm/
```

<br>


<!----------------------------------------------------------------------------->

[Example]: example/app/Manifest.json

[`chrome://extensions/`]: `chrome://extensions/`
