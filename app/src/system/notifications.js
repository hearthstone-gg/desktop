/*
notifies the user when things happen with system notifications
*/
var notifier = require('node-notifier');
var path = require('path');

var friendlyClass;
var opposingClass;
var players;

function notify() {
	if (!friendlyClass || !opposingClass || !players) { return; }
	notifier.notify({
		title: 'Classes Detected',
		message: 'Opponents Hero is: ' + opposingClass + '\n'+'Your Hero is: ' + friendlyClass,
		icon: path.join(__dirname , '../images/logo.png'), // absolute path (not balloons) 
		sound: true, // Only Notification Center or Windows Toasters 
		wait: true // wait with callback until user action is taken on notification 
		}, function (err, response) {
		// response is response from notification 
	});
}

function init(config, events) {
	events.on('friendly-hero', function(data){
		friendlyClass = data.cardName;
		notify();
	});
	events.on('opposing-hero', function(data){
		opposingClass = data.cardName;
		notify();
	});
	events.on('game-start', function(data){
		players = data;
	});


	notifier.on('click', function (notifierObject, options) {
		window.focus();
	});

	notifier.on('timeout', function (notifierObject, options) {

	});
}

exports.init = init;