var $ = window.require('jquery');

var $iframe;

var playerClass = null;
var opposingClass = null;
var user;

function init(config, events, appEvents) {
	getDom();

	//on load, load the app into the iframe
	$iframe.attr('src', 'http://' + config.services.app.domain);

	// whenever the iframe url changes, check to see if the user is logged in
	$iframe.on('load', function() {
		var loc = this.contentWindow.location;
		//detect if auth server has completed auth
		if (loc.host === config.services.auth.domain && loc.pathname === '/user') {
			//set the currently active user
			user = JSON.parse(this.contentWindow.document.body.childNodes[0].innerHTML);
			$iframe.attr('src', 'http://' + config.services.app.domain);
		//detect if the user has been redirected to the app after authenticating
		} else if (loc.host === config.services.app.domain && user) {
			appEvents.emit('user', user);
		}
	});
}
function getDom() {
	$iframe = $('iframe');
}

exports.init = init;