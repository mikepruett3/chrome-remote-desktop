// main.js

// https://www.electronforge.io/config/makers/squirrel.windows
if (require('electron-squirrel-startup')) return;

const { app, BrowserWindow, Menu } = require('electron')
const menuTemplate = require('./menu')
const process = require('process')

// Disable Hardware Acceleration
// https://www.electronjs.org/docs/latest/tutorial/offscreen-rendering
args = process.argv
if (args[2] == "disableHardware") {
    //console.log(args[2])
    app.disableHardwareAcceleration()
}

createWindow = () => {
    const win = new BrowserWindow({
        width: 1280,
        height: 720,
        title: 'Chrome Remote Desktop',
        icon: __dirname + '/images/RemoteDesktop.ico',
        autoHideMenuBar: true
    })

    win.loadURL('https://remotedesktop.google.com');
}

// Create Menu
const menu = Menu.buildFromTemplate(menuTemplate())
Menu.setApplicationMenu(menu)

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
})