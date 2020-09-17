# ddlan.github.io
This is Danny Lan's personal website, created using React, Gulp, Sass, and hard work.


### Deployment instructions (for myself)
1. Use `npm start` to test locally.
1. Gulp is set up so calling `gulp` in the repo root directory starts `watch_scss`, which automatically rebuilds the minified CSS whenever the .scss files are saved.
1. When finished, commit changes to the `source` branch.
1. Run `npm run deploy` to build website and deploy to `gh-pages` branch. When deployment finishes, `https://www.dannylan.me` will be updated!
