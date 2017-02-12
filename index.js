'use strict';
const alfy = require('alfy');
const alfredNotifier = require('alfred-notifier');

const dirs = alfy.config.get('alfred-intellij-projectDirectory');
const exec = require('child_process').exec;

alfredNotifier();

exec('find ' + dirs + ' -iname ' + alfy.input + '*.iml -maxdepth 2', (error, stdout, stderr) => {
	if (error) {
		alfy.error(stderr);
		return;
	}

	var projects = stdout.split("\n");
	projects.pop();

	var items = projects.map(x => ({
		title: x.replace(/.*\//, '')
			.replace(/.iml/i, '')
			.charAt(0).toUpperCase() +
			x.replace(/.*\//, '')
			.replace(/.iml/i, '').slice(1),
		subtitle: x,
		arg: x.substring(0, x.lastIndexOf("/"))
	}));

	alfy.output(items);
});
