# Native App

Uses a [Manifest](/Host%202Manifest.json) to declare it's relationship with<br>
the extension it wants to communicate with.

Check out the [Sample Manifest](/example/app/Manifest.json)

The manifest is located in different places<br>
depending on the users operating System.

---

### Windows

The manifest can be placed anywhere but the<br>
path to the it must be stored in a registry key.

Check out [how to set the registry key](/Registry.md)

---

### Linux

The manifest filename __must__ be the chosen appId.

Browser | Level | Location
:--: | :--: | --:
Chromium | System | `/etc/chromium/native-messaging-hosts/` [ appId ] `.json`
Chromium | User | `~/.config/chromium/NativeMessagingHosts/` [ appId ] `.json`
Google Chrome | System | `/etc/opt/chrome/native-messaging-hosts/` [ appId ] `.json`
Google Chrome | User | `~/.config/google-chrome/NativeMessagingHosts/` [ appId ] `.json`


### OSX

The manifest filename __must__ be the chosen appId.

Browser | Level | Location
:--: | :--: | --:
Chromium | System | `/Library/Application Support/Chromium/NativeMessagingHosts/` [ appId ] `.json`
Chromium | User | `~/Library/Application Support/Chromium/NativeMessagingHosts/` [ appId ] `.json`
Google Chrome | System | `/Library/Google/Chrome/NativeMessagingHosts/` [ appId ] `.json`
Google Chrome | User | `~/Library/Application Support/Google/Chrome/NativeMessagingHosts/` [ appId ] `.json`
