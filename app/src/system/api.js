function init(config, events) {

	events.on('friendly-hero', function() {
		console.log('make api request', arguments);
	});
	events.on('opposing-hero', function() {
		console.log('make api request', arguments);
	});
	events.on('game-start', function() {
		console.log('make api request', arguments);
	});
	events.on('game-over', function() {
		console.log('make api request', arguments);
	});
}

exports.init = init;