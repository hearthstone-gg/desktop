var notifier = require('node-notifier');
var appGui = window.require('./system/gui.js');

var gui = window.require('nw.gui');
var win = gui.Window.get();

//add the appGui
appGui.init(gui,win);

win.showDevTools();

//notification example
// notifier.notify({
//   title: 'My awesome title',
//   message: 'Hello from node, Mr. User!',
//   //icon: 'coulson.jpg', // absolute path (not balloons) 
//   sound: true, // Only Notification Center or Windows Toasters 
//   wait: true // wait with callback until user action is taken on notification 
// }, function (err, response) {
//   // response is response from notification 
// });
 
// notifier.on('click', function (notifierObject, options) {
//   window.focus();
// });
 
// notifier.on('timeout', function (notifierObject, options) {

// });