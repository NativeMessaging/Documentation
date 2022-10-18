
# Native App

Native applications use **[Manifest]**s to declare <br>
their relationship with extensions they want <br>
to communicate with.

*[» Check out the example][Example]*

<br>
<br>

## Windows

The manifest can be placed anywhere but the <br>
path to the it must be stored in a registry key.

*[» Check out how to set registry keys][Registry]*

<br>
<br>

## Linux

| Browser | Level | Location
|:-------:|:-----:|----------:
| Chromium | System | `/etc/chromium/native-messaging-hosts/<appId>.json`
| Chromium | User | `~/.config/chromium/NativeMessagingHosts/<appId>.json`
| Google Chrome | System | `/etc/opt/chrome/native-messaging-hosts/<appId>.json`
| Google Chrome | User | `~/.config/google-chrome/NativeMessagingHosts/<appId>.json`

<br>
<br>

## OSX

| Browser | Level | Location
|:-------:|:-----:|----------:
Chromium | System | `/Library/Application Support/Chromium/NativeMessagingHosts/<appId>.json`
Chromium | User | `~/Library/Application Support/Chromium/NativeMessagingHosts/<appId>.json`
Google Chrome | System | `/Library/Google/Chrome/NativeMessagingHosts/<appId>.json`
Google Chrome | User | `~/Library/Application Support/Google/Chrome/NativeMessagingHosts/<appId>.json`

<br>


<!----------------------------------------------------------------------------->

[Manifest]: Host%20Manifest.md
[Registry]: Registry.md
[Example]: example/app/Manifest.json
