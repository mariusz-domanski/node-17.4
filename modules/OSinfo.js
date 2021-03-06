var timeFormatting = require('../modules/timeFormatting');
var os = require('os');

function getOSinfo() {
	var type = os.type();
	if(type === 'Darwin') {
	    type = 'OSX';
	} else if(type === 'Windows_NT') {
	    type = 'Windows';
	}
	var release = os.release();
	var cpu = os.cpus()[0].model;
	var uptime = os.uptime();
	var userInfo = os.userInfo();
	console.log('System:', type);
	console.log('Release:', release);
	console.log('CPU model:', cpu);
	timeFormatting.print();
	console.log('User name:', userInfo.username);
	console.log('Home dir:', userInfo.homedir);
}

exports.print = getOSinfo;