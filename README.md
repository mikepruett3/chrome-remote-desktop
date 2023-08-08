# Chrome Remote Desktop

![RemoteDesktop](https://github.com/mikepruett3/chrome-remote-desktop/blob/main/images/RemoteDesktop.png?raw=true)

Chrome Remote Desktop is a simple Desktop application, built using [ElectronJS](https://www.electronjs.org). The project was created forthe simple fact that I have multiple Google accounts, and switching between the accounts to access Remote Desktop is a pain!

This app makes it easy. Now I can have my main Google account signed in to my normal browser, and a seperate Remote Desktop app signed in to the alternative Google account.

I am sure there are other uses, but this was my _selfish_ need...

## Features

- Control for Hardware Acceleration

## Installation

Dowload the latest [release](https://github.com/mikepruett3/chrome-remote-desktop/releases) for Windows, Linux and MacOS.

For Windows... a standard Exectuable is provided, as well as a NuGet package.

## Launching

To run, just launch the executable via the Desktop Shortcut, or the Executable directly.

## Building

To build locally, clone the repository and install the dependencies.

```powershell
git clone https://github.com/mikepruett3/chrome-remote-desktop.git
cd chrome-remote-desktop
npm install
```

To run the application locally.

```powershell
npm run start
```

To build the application installer.

```powershell
npm run make
```

## Dependencies

- electron-squirrel-startup
- publisher-github
- electron-forge
- electron-settings
- electron
