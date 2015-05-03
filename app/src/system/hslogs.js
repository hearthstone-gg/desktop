exports.init = function() {
	var LogWatcher = window.require('hearthstone-log-watcher');
	var logWatcher = new LogWatcher();

	logWatcher.on('zone-change', function(data) {
		console.log(data.cardName + ' has moved to ' + data.team + ' ' + data.zone);
	});
	logWatcher.on('game-start', function(players) {
		console.log(players);
	});
	logWatcher.on('game-over', function(players) {
		console.log(players);
	});

	logWatcher.start();
	console.log('watching log file')
};