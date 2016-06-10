# Factorial utils-font

> Mostly sane typographic base utilities.

These are helper utilities that set font-size/line-height pairs. The naming convention is inspired by Harry Robert's [inuit.css](https://github.com/inuitcss)

## Installation 

    $ npm install factorial-utils-font --save-dev

## Available classes

### Headlines

* `.u-fontAlpha`
* `.u-fontBeta`
* `.u-fontGamma`
* `.u-fontDelta`
* `.u-fontEpsilon`
* `.u-fontZeta`

### Mastheads

* `.u-fontGiga`
* `.u-fontMega`
* `.u-fontKilo`

### Smallprint

* `.u-fontMilli`
* `.u-fontMicro`
* `.u-fontNano`

## Configuration

* `--alpha-font-size`
* `--alpha-line-height`
* `--beta-font-size`
* `--beta-line-height`
* `--gamma-font-size`
* `--gamma-line-height`
* `--delta-font-size`
* `--delta-line-height`
* `--epsilon-font-size`
* `--epsilon-line-height`
* `--zeta-font-size`
* `--zeta-line-height`
* `--giga-font-size`
* `--giga-line-height`
* `--mega-font-size`
* `--mega-line-height`
* `--kilo-font-size`
* `--kilo-line-height`
* `--milli-font-size`
* `--milli-line-height`
* `--micro-font-size`
* `--micro-line-height`
* `--nano-font-size`
* `--nano-line-height`


## Responsive typography

Pro tip: For basic responsive typography change the base font size on the body tag. This will scale all utilities if based on rem units. Example using [postcss-custom-media](https://github.com/postcss/postcss-custom-media):

    @media (--sm-viewport) {
      body {
        font-size: 1.1em;
      }
    }

    @media (--md-viewport) {
      body {
        font-size: 1.2em;
      }
    }

    @media (--lg-viewport) {
      body {
        font-size: 1.3em;
      }
    }


## Usage

Combine at free will. Use semantic headlines and apply the sizes using the utility classes. NB: The order of headlines and class names doesn't need to match. 

``` html
<h1 class="u-fontDelta">
  Lorem ipsum dolor
</h1>
<h2 class="u-fontAlpha">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam enim nibh, 
  mattis ac orci vitae, pretium finibus tortor. Donec purus velit, molestie ac ullamcorper ac, gravida at nibh.
</h2>
<p class="u-fontMilli">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam enim nibh, 
  mattis ac orci vitae, pretium finibus tortor. Donec purus velit, molestie ac ullamcorper ac, gravida at nibh.  
</p>
```

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
