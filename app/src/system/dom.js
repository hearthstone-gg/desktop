var $ = require('jquery');

var $div;
var $iframe;

var playerClass = null;
var opposingClass = null;
var user;

function init(config, events) {
	bindEvents(events);
	getDom();

	$iframe.attr('src', 'http://' + config.services.app.domain);
	$iframe.on('load', function() {
		var loc = this.contentWindow.location;
		if (loc.host === config.services.auth.domain && loc.pathname === '/user') {
			user = JSON.parse(this.contentWindow.document.body.childNodes[0].innerHTML);
			events.emit('user-logged', user);
			$iframe.attr('src', 'http://' + config.services.app.domain);
		} else if (loc.host === config.services.app.domain && user) {
			$iframe[0].contentWindow.postMessage({type: 'user', data: user}, 'http://' + config.services.app.domain);
		}
	});
}
function getDom() {
	$div = $('div');
	$iframe = $('iframe');
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