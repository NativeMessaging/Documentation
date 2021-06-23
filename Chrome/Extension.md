# Native Extension

The extension manifest must declare the `nativeMessaging` permission.

__Example:__

```json
  {
    "manifest_version": 2,

    "name": "Native Extension",
    "version": "1.0.0",
    "description": "A showcase for native messaging.",

    "background": {
      "persistent": true,
      "scripts": [ "Script.js" ]
    },

    "permissions": [ "nativeMessaging" ]
  }

```


Check the [Sample Extension](/example/)
