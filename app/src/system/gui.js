var appWidth = 300;

exports.init = function(events, gui, win) {

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