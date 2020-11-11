---
title: factorial-components-image
---

WIP: A ui pattern for responsive images.

Proposoal for different cases of responsive images

1. Regular image, lazyloaded, with noscript fallback
2. Responsive image, same aspect ratio over all breakpoints
3. Responsive image, aspect ratio changes over breakpoints
4. Different sources for mobile and desktop, dynamic aspect ratio
5. Responsive Retina images

## Installation

    yarn add factorial-components-image

## Configuration

property | default
---|---
--Image-transition-duration | 100ms


## Twig Variables

name | description
---|---
`width` | Image width
`height` | Image height
`src` | url string to the source of the image
`alt` | text string with alternative image description
`sources` | An array of objects that contain source definitions for different breakpoints

## Caveats 

* Implicit Mondernizr dependency to `html.no-js`.
