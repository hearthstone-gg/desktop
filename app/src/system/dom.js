var $ = require('jquery');

var $div;

var playerClass = null;
var opposingClass = null;

function init(events) {
	bindEvents(events);
	getDom();
}
function getDom() {
	$div = $('div');
}
function bindEvents(events) {
	events.on('game-start', function(players){
		$div.append(JSON.stringify(players));
	});
	events.on('friendly-hero', function(data){
		console.log(data)
		$div.append('<p>Your Hero is: ' + data.cardName+'</p>');
	});
	events.on('opposing-hero', function(data){
		console.log(data)
		$div.append('<p>Opponents Hero is: ' + data.cardName+'</p>');
	});
	events.on('game-over', function(players){
		$div.append(JSON.stringify(players));
	});
}

exports.init = init;