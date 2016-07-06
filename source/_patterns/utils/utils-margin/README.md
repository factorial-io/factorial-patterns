# Factorial utils-margin

> Low-level and immutable margin utilities. 

* These are helper utilities that set margins based on a global white space scale. 
* These utilities use a shorthand naming convention.
* Heaviliy inspired by [Basscss margin utils](http://www.basscss.com/#basscss-margin). 
* Read more about [SUIT CSS's design principles](https://github.com/suitcss/suit/).

## Installation 

    $ npm install factorial-utils-margin

## Available classes

### Top margins

* `.u-mt1`
* `.u-mt2`
* `.u-mt3`
* `.u-mt4`
* `.u-mt5`
* `.u-mt6`
* `.u-mt7`
* `.u-mt8`

### Right margins

* `.u-mr1`
* `.u-mr2`
* `.u-mr3`
* `.u-mr4`
* `.u-mr5`
* `.u-mr6`
* `.u-mr7`
* `.u-mr8`
* `.u-mrAuto`

### Bottom margins

* `.u-mb1`
* `.u-mb2`
* `.u-mb3`
* `.u-mb4`
* `.u-mb5`
* `.u-mb6`
* `.u-mb7`
* `.u-mb8`

### Left margins

* `.u-ml1`
* `.u-ml2`
* `.u-ml3`
* `.u-ml4`
* `.u-ml5`
* `.u-ml6`
* `.u-ml7`
* `.u-ml8`
* `.u-mlAuto`

### Horizontal margins

* `.u-mh1`
* `.u-mh2`
* `.u-mh3`
* `.u-mh4`
* `.u-mh5`
* `.u-mh6`
* `.u-mh7`
* `.u-mh8`
* `.u-mhAuto`

### Vertical margins

* `.u-mh1`
* `.u-mh2`
* `.u-mh3`
* `.u-mh4`
* `.u-mh5`
* `.u-mh6`
* `.u-mh7`
* `.u-mh8`

## Configuration

property | default
---|---
--space-1 | .125rem
--space-2 | .25rem
--space-3 | .5rem
--space-4 | 1rem
--space-5 | 2rem
--space-6 | 4rem
--space-7 | 8rem
--space-8 | 16rem

## Browser support

Refer to the [caniuse](http://caniuse.com/#feat=rem) page for rem units.

## Development

### Prerequisites

* [node.js](https://nodejs.org/en/)

### Installation

    $ npm install

### Available tasks
 
`npm run ...` | Description
---|---
build | Compile and bundle all CSS and JS files.
build:css | Compile and bundle all CSS files to `build/index.css`.
build:js | Compile and bundle all JS files to `build/index.js`.
build:test | Copy and preprocess idiomatic test files to `build`.
deploy | Deploy `gh-pages` branch.
start | Start a development server at `http://localhost:8080`.
test | Run all tests. 
test:browser | Run all browser tests.
test:lint-css | Lint all CSS files.
test:lint-js | Lint all JS files.
watch | Watch for file changes in `lib` and trigger a new build.
