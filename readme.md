# Libsass with LiveReload support

This repo is a simple example of a Gruntfile that will process the Sass in your project and provide LiveReload support.

## To download

This is not a project to use specifically, but the parts you need to run libsass locall with `grunt-watch` and have LiveReload support are here.

You can either clone down this repo and use it, but be sure to delete the `.git/` file! Or, you can use `bower install linsass-grunt-livereload` and this will pull the repo down without any Git history.

Or, you can simply copy and paste from the code examples into your project to get up and running.

## Using

The key parts to this repo are the `Gruntfile.js` and `package.json` files. You will need `sass` and `stylesheets` directories, or rename them as needed but be sure to update the `Gruntfile.js`.

## npm install

When you have the `package.json` file in your project, be sure to run `npm install` and this will load the needed libraries. Also, remember to put `node_modules/` in your `.gitignore`. You don't need to commit those libraries to version control.

## Runnign grunt

The `Gruntfile.js` provided has grunt watch support with LiveReload. When ready to process Sass, run, `grunt watch`.

You can simply run `grunt` if you just want a quick compile

