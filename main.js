// main.js

// https://www.electronforge.io/config/makers/squirrel.windows
if (require('electron-squirrel-startup')) return;

const { app, BrowserWindow, Menu, Tray, nativeImage  } = require('electron')
const { getHA } = require('./settings')
const trayTemplate = require('./tray')
const menuTemplate = require('./menu')
let title = 'Chrome Remote Desktop'

// Disable Hardware Acceleration
// https://www.electronjs.org/docs/latest/tutorial/offscreen-rendering
if (!getHA()) {
    app.disableHardwareAcceleration()
}

createWindow = () => {
    const win = new BrowserWindow({
        width: 1280,
        height: 720,
        title: title,
        icon: __dirname + '/images/RemoteDesktop.ico',
        autoHideMenuBar: true
    })

    win.loadURL('https://remotedesktop.google.com');
}

app.whenReady().then(() => {
    createWindow()

    // Create Tray
    let trayIcon = nativeImage.createFromPath(__dirname + '/images/RemoteDesktop.ico')
    let tray = new Tray(trayIcon)
    tray.setToolTip(title)
    tray.setTitle(title)
    tray.setContextMenu(trayTemplate)

    // Create Menu
    Menu.setApplicationMenu(menuTemplate)

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})