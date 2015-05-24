/*
loader
*/
var config = require('hs.gg-config').get('local');
var EventEmitter = require('events').EventEmitter;
var appGui = window.require('./system/gui.js');
var hsLogs = window.require('./system/hslogs.js');
var appEvents = window.require('./system/app-events.js');
var dom = window.require('./system/dom.js');
var notifications = window.require('./system/notifications.js');


var gui = window.require('nw.gui');
var win = gui.Window.get();
win.showDevTools();

//create the shared event listener
var events = new EventEmitter();
//add the appGui
appGui.init(config, events, gui, win);

//start the appevents notifier
appEvents.init(config, events);

//start notifications
notifications.init(config, events);

//init the dom
dom.init(config, events, appEvents);

//start watching the log file
hsLogs.init(config, events, appEvents);