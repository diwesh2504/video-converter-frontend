const { app, BrowserWindow ,Menu,ipcMain} = require('electron')

const path = require('path')
const isDev = require('electron-is-dev')



require('@electron/remote/main').initialize()

function handle(){
    console.log("working")
}
function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      preload: __dirname + '/preload.js'

    }
  })

  
  win.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`
  )
}
const dockMenu = Menu.buildFromTemplate([
    {
      label: 'New Window',
      submenu:[{label:"New Project",click(){ handle()}}]
    }, 
  ])
app.whenReady().then(()=>{
    
        Menu.setApplicationMenu(dockMenu)
        
      
}).then(()=>createWindow())

ipcMain.on('ACTION_FROM_FRONTEND',(event,arg)=>{
    console.log(arg)
})

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})