# Factorial Patterns

This repository is a collection of reusable UI patterns.

**Warning: This is heavily work in progress and subject to change.**

## Semantic-versioning policy

- Everything below `1.0.0` should be considered unstable/prerelease. Breaking changes are likely to be introduced at MINOR 0.x.0 level. Do not depend on them in production or use `--exact` version matching. 
- Everthing above `1.0.0` should be conidered stable. Breaking changes will bump MAJOR x.0.0 and new features with backwards compatible API will bump MINOR 0.x.0. 

## Patterns

### Components

Components are distinct UI pieces that can be included and provide their own 
twig template and accept variables. 

* [components-button](https://github.com/factorial-io/factorial-patterns/tree/master/source/_patterns/components/components-button)
* [components-flex-embed](https://github.com/factorial-io/factorial-patterns/tree/master/source/_patterns/components/components-flex-embed)
* [components-image](https://github.com/factorial-io/factorial-patterns/tree/master/source/_patterns/components/components-image)
* [components-image-contain](https://github.com/factorial-io/factorial-patterns/tree/master/source/_patterns/components/components-image-contain)
* [components-image-cover](https://github.com/factorial-io/factorial-patterns/tree/master/source/_patterns/components/components-image-cover)
* [components-modal](https://github.com/factorial-io/factorial-patterns/tree/master/source/_patterns/components/components-modal)
* [components-pagination](https://github.com/factorial-io/factorial-patterns/tree/master/source/_patterns/components/components-pagination)
* [components-rte](https://github.com/factorial-io/factorial-patterns/tree/master/source/_patterns/components/components-rte)

### Utils 

Utils are low-level CSS classes that can be used to build bigger UI parts. Their 
twig templates are only for demonstration purposes. 

* [utils-display-responsive](https://github.com/factorial-io/factorial-patterns/tree/master/source/_patterns/utils/utils-display-responsive)
* [utils-font](https://github.com/factorial-io/factorial-patterns/tree/master/source/_patterns/utils/utils-font)
* [utils-font-weight](https://github.com/factorial-io/factorial-patterns/tree/master/source/_patterns/utils/utils-font-weight)
* [utils-margin](https://github.com/factorial-io/factorial-patterns/tree/master/source/_patterns/utils/utils-margin)
* [utils-padding](https://github.com/factorial-io/factorial-patterns/tree/master/source/_patterns/utils/utils-padding)

## Installation

### Prerequisites 

* [composer](https://getcomposer.org/)
* [Node.js](https://nodejs.org/en/)
* [Yarn](https://yarnpkg.com/en/)

### Pattern Lab

    composer install

Merge (m) everything and no (n) to updates.

### Build tools

    yarn install

This will install all the necessary build tools.

## Build

    yarn run build

This will build all patterns to `public`.

Caveat: patternlab currently also builds `node_modules` within patterns.
Use `lerna clean` to remove the dependencies of all patterns.

## Serve

    yarn run dev

View patternlab at http://localhost:8080.

## Deploy

### GitHub Pages

    yarn run deploy

This will commit the `public` folder and push the `gh-pages` branch.

### npm

Log into npm, then.

    lerna publish 

This will `diff` all packages and ask you about version bumping anything that has 
changed. SEE: https://github.com/lerna/lerna/#publish
