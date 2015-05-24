/*
	Proxies events from the logger to the app
*/
exports.init = function(config, events, appEvents) {
	var LogWatcher = window.require('hearthstone-log-watcher');
	var logWatcher = new LogWatcher();

	logWatcher.on('zone-change', function(data) {
		if (data.zone === 'PLAY (Hero)' && data.team === 'FRIENDLY') {
			events.emit('friendly-hero', data);
			appEvents.emit('friendly-hero', data);
		}

		if (data.zone === 'PLAY (Hero)' && data.team === 'OPPOSING') {
			events.emit('opposing-hero', data);
			appEvents.emit('opposing-hero', data);
		}
	});
	logWatcher.on('game-start', function(players) {
		events.emit('game-start', players);
		appEvents.emit('game-start', players);
	});
	logWatcher.on('game-over', function(players) {
		events.emit('game-over', players);
		appEvents.emit('game-over', players);
	});

	logWatcher.start();
};