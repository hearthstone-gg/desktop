/*
sets up the application's stystem gui
*/
var appWidth = 400;

exports.init = function(config, events, gui, win) {

	function menu() {
		var m = new gui.Menu({
			'type': 'menubar'
		});

		if (window.process.platform === "darwin") {
			m.createMacBuiltin('Hearthstone.gg');
		}
		win.menu = m;
	}

	function title() {
		win.title = 'Hearthstone.gg';
	}

	function position() {
		//position to the right and top of the screen
		win.moveTo(window.window.screen.availWidth - appWidth, 40);
	}

	menu();
	title();
	position();

	win.show();

};