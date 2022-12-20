
import path from 'path'
import { app, screen, BrowserWindow } from 'electron'

const lock = app.requestSingleInstanceLock()

if(!lock) {
	app.quit()
} else {
	app.on('second-instance',() => {
		if (win) {
			win.focus()
		}
	})
}

app.on('ready',() => {
	const {width,height} = screen.getPrimaryDisplay().workAreaSize
	let window = new BrowserWindow({
		width: 800,
		height: 600,
		minWidth: 400,
		minHeight: 400,
		maxHeight: height,
		maxWidth: width,
		show: false,
		backgroundColor:'#4e60ff',
		webPreferences: {
			nodeIntegration: true
		}
	})
	window.loadFile('renderer/index.html')

	window.on('ready-to-show', () =>{
		window.show()
	})
})