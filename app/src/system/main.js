var EventEmitter = require('events').EventEmitter;

var appGui = window.require('./system/gui.js');
var hsLogs = window.require('./system/hslogs.js');
var dom = window.require('./system/dom.js');
var notifications = window.require('./system/notifications.js');

var gui = window.require('nw.gui');
var win = gui.Window.get();
win.showDevTools();

//create the shared event listener
var events = new EventEmitter();
//add the appGui
appGui.init(events,gui,win);

//start notifications
notifications.init(events);

//init the dom
dom.init(events);

//start watching the log file
hsLogs.init(events);