<img src="https://github.com/codeBud7/tellij/blob/master/doc/screenshot.png">

tellij - IntelliJ Workflow for Alfred
==============================

[![NPM](https://nodei.co/npm/tellij.png)](https://nodei.co/npm/tellij/)

Prerequisites
----------------
You need [Node.js 4+](https://nodejs.org) and [Alfred 3](https://www.alfredapp.com) with the paid [Powerpack](https://www.alfredapp.com/powerpack/) upgrade.

Install
----------------
Install by npm
```
$ npm install -g tellij
```
Adjust the config.json placed in '~/Library/Preferences/alfy-nodejs/config.json'
(Alfred 3 config could be possible located here '/Users/{user}/Library/Application Support/Alfred 3/Workflow Data/com.codebud7.tellij')
```
{
  "directories" : "/Volumes/repos/"
}
```

Key Combinations
----------------

Key Combination        | Action
---------------------- | ------
`enter`                | Open project in IntelliJ
`ctrl`                | Open project in finder

Related
----------------
- Create Alfred workflows with ease - [alfy](https://github.com/sindresorhus/alfy)
- Scaffold out an Alfred workflow - [yeoman alfred generator](https://github.com/SamVerschueren/generator-alfred)
- Icon made by Freepik from www.flaticon.com
- Alfred [Dracula Theme](https://draculatheme.com/alfred/) Theme by [Zeno Rocha](https://zenorocha.com/)
- Alfred workflow updater - [alfred-updater](https://github.com/SamVerschueren/alfred-updater)

License
----------------
MIT © [Sebastian Puskeiler](https://twitter.com/ebud7)
