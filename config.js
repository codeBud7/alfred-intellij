'use strict';
const alfy = require('alfy');
const alfredNotifier = require('alfred-notifier');

alfredNotifier();

alfy.config.set('alfred-intellij-projectDirectory', alfy.input);
