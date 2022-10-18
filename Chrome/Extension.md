
# Native Extension

*The extension manifest must declare* <br>
*the  `nativeMessaging`  permission.*

<br>

## Example

```json
{
    "manifest_version" : 2 ,

    "description" : "A showcase for native messaging." ,
    "version" : "1.0.0" ,
    "name" : "Native Extension" ,

    "background" : {
        "persistent" : true ,
        "scripts" : [ "Script.js" ]
    },

    "permissions" : [ "nativeMessaging" ]
}
```

<br>

*[» Check out the example][Example]*

<br>


<!----------------------------------------------------------------------------->

[Example]: example

