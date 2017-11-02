# NaNoGenMo 2017

This is my repository for [NaNoGenMo 2017](https://github.com/NaNoGenMo/2017). I am tracking my progress on [this issue](https://github.com/NaNoGenMo/2017/issues/59).

I'm working to write a fairly generic fantasy novel using Dan Harmon's ["story circle"](http://patricklickman.com/storycircle/) as a way of thinking about narrative structures and story. I am using [Tracery](http://tracery.io) to do this.

The Tracery grammar is in [`circle.json`](circle.json) and most of the code is a simple, livereload-ing Express server to let me see output of the current grammar in the browser.

If you want to run it, clone the repo, run `npm i` (or `yarn install`) and `npm run start` (or `yarn run start`) to start the server. The output will appear at [http://localhost:3000](http://localhost:3000).