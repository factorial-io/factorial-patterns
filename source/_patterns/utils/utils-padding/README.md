# Factorial utils-padding

> Low-level and immutable padding utilities. 

* These are helper utilities that set paddings based on a global white space scale. 
* These utilities use a shorthand naming convention.
* Heaviliy inspired by [Basscss padding utils](http://www.basscss.com/#basscss-padding). 
* Read more about [SUIT CSS's design principles](https://github.com/suitcss/suit/).

## Installation 

    $ npm install factorial-utils-padding

## Available classes

### Paddings

* `.u-p1`
* `.u-p2`
* `.u-p3`
* `.u-p4`
* `.u-p5`
* `.u-p6`
* `.u-p7`
* `.u-p8`

### Top paddings

* `.u-pt1`
* `.u-pt2`
* `.u-pt3`
* `.u-pt4`
* `.u-pt5`
* `.u-pt6`
* `.u-pt7`
* `.u-pt8`

### Right paddings

* `.u-pr1`
* `.u-pr2`
* `.u-pr3`
* `.u-pr4`
* `.u-pr5`
* `.u-pr6`
* `.u-pr7`
* `.u-pr8`

### Bottom paddings

* `.u-pb1`
* `.u-pb2`
* `.u-pb3`
* `.u-pb4`
* `.u-pb5`
* `.u-pb6`
* `.u-pb7`
* `.u-pb8`

### Left paddings

* `.u-pl1`
* `.u-pl2`
* `.u-pl3`
* `.u-pl4`
* `.u-pl5`
* `.u-pl6`
* `.u-pl7`
* `.u-pl8`

### Horizontal paddings

* `.u-ph1`
* `.u-ph2`
* `.u-ph3`
* `.u-ph4`
* `.u-ph5`
* `.u-ph6`
* `.u-ph7`
* `.u-ph8`

### Vertical paddings

* `.u-pv1`
* `.u-pv2`
* `.u-pv3`
* `.u-pv4`
* `.u-pv5`
* `.u-pv6`
* `.u-pv7`
* `.u-pv8`

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
