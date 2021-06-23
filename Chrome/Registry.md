# Chrome Windows Registry

Windows user must have a registry key set to the path of the [Manifest](/Host%202Manifest.json).

The keys are located at:

Level | Path
:--: | :--
System | `HKEY_LOCAL_MACHINE\SOFTWARE\Google\Chrome\NativeMessagingHosts\`
User | `HKEY_CURRENT_USER\SOFTWARE\Google\Chrome\NativeMessagingHosts\`

The keys name __must__ the `appId`.

---

To set the registry key the following command can be used:

`REG ADD "` [ key ]`"`

__Parameter:__
* `/ve` to set a value without name
* `/t <type>` to specify the datatype of the value
* `/d <data>` to set the value
* `/f` to force overwrite an existing key


__Example:__

`reg add "HKLM\Software\Google\Chrome\NativeMessagingHosts\cakemakers.editor" /f /ve /t REG_SZ /d "C:\cakeMaker\Manifest.json"`


Here we register the `path` to the [Manifest](/Host%202Manifest.json) with our `appId` as registry key, force overwrite<br>
 it while specifying the keys name to be empty and its datatype to be a null terminated string.


[MS Docs](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/reg-add) for reg-add.
