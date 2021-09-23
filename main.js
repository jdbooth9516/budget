const { app, BrowserWindow } = require("electron");
const closeDb = require("./server");

function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    heigth: 720,
  });

  win.loadURL("http://localhost:4200");
}

app.whenReady().then(() => {
  createWindow();
});

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
