# Factorial components-pagination

> A simple bullet-style pagination

* Read more about [SUIT CSS's design principles](https://github.com/suitcss/suit/).

## Installation 

    $ npm install factorial-components-pagination

## Features

* Inherits color

## Available classes

* `.Pagination`: The core container
* `.Pagination-bullet`: Individual items
* `.Pagination-bullet.is-active`: Item active state 
* `.Pagination--vertical`: Modifier for vertical alignment
* `.Pagination--clickable`: Modifier for clickable bullet points

## Configuration

property | default
---|---
--Pagination-margin | .25rem
--Pagination-bullet-size | .5rem
--Pagination-border-width | .0625rem
--Pagination-border-style | solid

## Usage

NB: Make sure you don't render white space between bullets as they are rendered 
using `inline-block`.

``` html
<nav class="Pagination">
  <a class="Pagination-bullet is-active">Go to slide 1</a><a
    class="Pagination-bullet">Go to slide 2</a><a
    class="Pagination-bullet">Go to slide 3</a>
</nav>
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
