
# Windows Registry

*Windows users require a registry key to* <br>
*be set to the location of the **[Manifest]** file.*

<br>

## Locations

*The following are the relevant registry locations.*

| Level | 
|:-----:|-:
| System | `HKEY_LOCAL_MACHINE\SOFTWARE\Google\Chrome\NativeMessagingHosts\<appId>`
| User   | `HKEY_CURRENT_USER\SOFTWARE\Google\Chrome\NativeMessagingHosts\<appId>`

<br>
<br>

## Command

*The **[Reg Add]** command can be used to insert these registry keys.*

<br>

```sh
REG ADD <key>
```

<br>

### Parameters

-   `/t <type>`

    *Specifies the datatype of the value.*

-   `/d <data>`

    *Sets the value.*

-   `/ve`
    
    *Sets a value without name.*

-   `/f`

    *Forces any existing keys to be overwritten.*


<br>

### Example

```sh
reg add 
    "HKLM\Software\Google\Chrome\NativeMessagingHosts\cakemakers.editor"    \
    /d "C:\cakeMaker\Manifest.json"                                         \
    /t REG_SZ                                                               \
    /ve                                                                     \
    /f
```

<br>


<!----------------------------------------------------------------------------->

[Manifest]: ./Host%20Manifest.md

[Reg Add]: https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/reg-add
