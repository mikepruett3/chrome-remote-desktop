// menu.js

module.exports = function () {
    const isMac = process.platform === 'darwin'

    var menu = [
        // { role: 'appMenu' }
        ...(isMac ? [{
            label: app.name,
            submenu: [
                { role: 'about' },
                { type: 'separator' },
                { role: 'services' },
                { type: 'separator' },
                { role: 'hide' },
                { role: 'hideOthers' },
                { role: 'unhide' },
                { type: 'separator' },
                { role: 'quit' }
            ]
        }] : []),
        // { role: 'fileMenu' }
        {
            label: 'File',
            submenu: [
                { type: 'separator' },
                isMac ? { role: 'close' } : { role: 'quit' },
            ]
        },
        // { role: 'viewMenu' }
        {
            label: 'View',
            submenu: [
                { role: 'reload' },
                { role: 'forceReload' },
                { role: 'toggleDevTools' },
                { role: 'togglefullscreen' },
                { type: 'separator' },
                { role: 'minimize' },
                { role: 'close' }
            ]
        },
        {
            label: 'About',
            submenu: [
                {
                    label: 'Github Project',
                    click: async () => {
                        const { shell } = require('electron')
                        await shell.openExternal('https://github.com/mikepruett3/chrome-remote-desktop')
                    }
                }
            ]
        }
    ]

    return menu
}