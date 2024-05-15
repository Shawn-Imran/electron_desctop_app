const { app, BrowserWindow, Menu } = require('electron');

const template = [
  // {
  //   label: 'Custom Menu',
  //   submenu: [
  //     {
  //       label: 'Custom Option 1',
  //       click: () => {
  //         // Handle the click event for this menu option
  //       }
  //     },
  //     {
  //       label: 'Custom Option 2',
  //       click: () => {
  //         // Handle the click event for this menu option
  //       }
  //     },
  //     // Add more custom menu items as needed
  //   ]
  // }
];

function createWindow() {
    const win = new BrowserWindow({
        width: 400,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.loadFile('dist/calculator-app/index.html');
    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
