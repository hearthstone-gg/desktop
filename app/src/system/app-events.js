var $ = window.require('jquery');

var $iframe;
var config;

exports.emit = function emit(type, data) {
	$iframe[0].contentWindow.postMessage({type: type, data: data}, 'http://' + config.services.app.domain);
};

exports.init = function init(conf, events) {
	config = conf;
	getElements();
};

function getElements() {
	$iframe = $('iframe');
}