// menu.js

const { app, session, Menu, dialog } = require('electron/main')
const {getHA, setHA} = require('./settings')

const template = [
    {
        role: 'fileMenu'
    },
    {
        role: 'viewMenu'
    },
    {
        label: 'Extras',
        submenu: [
            {
                label: 'Hardware Acceleration',
                accelerator: 'CommandOrControl+Shift+H',
                type: 'checkbox',
                checked: getHA(),
                click({ checked }) {
                    setHA(checked)
                    dialog.showMessageBox(
                        null,
                        {
                            type: 'info',
                            title: 'info',
                            message: 'Exiting Applicatiom, as Hardware Acceleration setting has been changed...'
                        })
                        .then(result => {
                            if (result.response === 0) {
                                app.relaunch();
                                app.exit()
                            }
                        }
                    )
                }
            },
            {
                label: 'Clear Cache',
                click: () => {
                    session.defaultSession.clearStorageData()
                    app.relaunch();
                    app.exit();
                }
            }
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

module.exports = Menu.buildFromTemplate(template)