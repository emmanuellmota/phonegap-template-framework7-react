# Framework7 React Hot Reloading Template

Cordova / PhoneGap Template using Framework7, React, ES2017, Webpack, and hot module reloading

![Demo](phonegap-template-framework7-react.gif)

## Getting Started

### Prerequisites

To use this template, you'll need Node.js v4 or newer.

### Installation

To use this as a template, use Cordova 6.0.0+ and create a new project:

```
cordova create MyAppName com.cordova.myappname MyAppName --template https://github.com/emmanuellmota/phonegap-template-framework7-react
```

or

```
phonegap create MyAppName --id "com.phonegap.myappname" --name "MyAppName" --template "https://github.com/emmanuellmota/phonegap-template-framework7-react"
```

then

```
cd MyAppName && cordova platform add browser && npm i
```
or
```
cd MyAppName && phonegap platform add browser && npm i
```

### Run the app in the browser / simulator

Run this to start the development webpack server:

```
cordova serve
```
or
```
phonegap serve
```

You can then open the app in your browser by visiting [localhost:3000](http://localhost:3000)


# License

MIT. Copyright (c) 2017 Emmanuel Mota.
