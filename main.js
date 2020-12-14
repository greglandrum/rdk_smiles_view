const {app, BrowserWindow} = require('electron')

let mainWindow = null;

function createWindow() {
  mainWindow = new BrowserWindow(
      {width: 800, height: 600, webPreferences: {nodeIntegration: true}})

  mainWindow.loadFile('index.html')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on(
    'activate',
    () => {
      if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
      }
    })

    // const {Menu, MenuItem} = require('electron')

    // const menu = new Menu()
    // menu.append(new MenuItem({label: 'File', role: 'fileMenu'}))
    // menu.append(new MenuItem({label: 'Edit', role: 'editMenu'}))
    // menu.append(new MenuItem({label: 'View', role: 'viewMenu'}))
    // menu.append(new MenuItem({
    //   label: 'Options',
    //   submenu: [
    //     {
    //       label: 'atom indices',
    //       type: 'checkbox',
    //       click: (itm, window, evt) => {
    //         console.log('atom indices');
    //         // mainWindow.webContents.send(
    //         //     'option-changed', 'addAtomIndices', itm.checked);
    //       }
    //     },
    //     {
    //       label: 'bond indices',
    //       type: 'checkbox',
    //       click: () => {
    //         console.log('bond indices');
    //       }
    //     }
    //   ]
    // }))
    // menu.append(new MenuItem({
    //   label: 'RDKit',
    //   submenu: [{
    //     role: 'help',
    //     accelerator: process.platform === 'darwin' ? 'Alt+Cmd+I' :
    //     'Alt+Shift+I', click: () => {
    //       console.log('RDKit rocks!');
    //     }
    //   }]
    // }))

    // Menu.setApplicationMenu(menu)