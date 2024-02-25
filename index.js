const { app, BrowserWindow } = require('electron');

if (require('electron-squirrel-startup')) {
    app.quit();
}

let win;

const createWindow = () => {
    win = new BrowserWindow({
        width: 1100,
        height: 600,
        minWidth: 1100,
        minHeight: 600,
        // icon: '.ico path',
        center: true,
        vibrancy: 'under-window', // transparence on macOS
        webPreferences: {
            nodeIntegration: true,
        },
    });

    // Usefull for launching the app with a react server open beside
    // const startUrl = 'http://localhost:3000/';
    // win.loadURL(startUrl);

    win.loadFile('./build/index.html');
    win.webContents.openDevTools()

    win.on('closed', () => {
        win = null;
    });

    // Usefull for launching the app with a react server open beside
    // win.webContents.on('did-finish-load', () => {
    //     win.webContents.send('electron-ready');
    // });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (win === null) {
        createWindow();
    }
});