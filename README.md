# Factorial Patterns

This repository is a collection of reusable UI patterns.

This is heavily work in progress and subject to change.

## Installation

### Pattern Lab

    composer install

Merge (m) everything and no (n) to updates.

### Build tools

    yarn install

This will install all the necessary build tools.

## Build

    yarn run build:pattern-lab
    lerna bootstrap
    yarn run build:css
    lerna clean

This will build the CSS and pattern lab.

Caveat: patternlab currently also builds `node_modules` within patterns.
Use `lerna clean` to remove the dependencies of all patterns.

## Serve

    yarn run dev

View patternlab at http://localhost:8080.