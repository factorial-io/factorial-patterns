---
title: factorial-components-button
---

WIP: A UI pattern for buttons

This provides normalized button styles for customization/extension. 

SEE: [https://github.com/suitcss/components-button](https://github.com/suitcss/components-button)

## Installation

    yarn add factorial-components-button

## Twig Variables

name | description
---|---
`label` | A string for the button text. Renders `raw` if `tag_name` is `a` or `button`. 
`modifier` | A modifier class that lets you differentiate additional button styles, e.g. `Button--primary`.
`tag_name` | A string for the tag that should be rendered. `a` (default), `button`, `input` |
`target` | A string for the target attribute, e.g. `_blank`. Will only be rendered if `tag_name` is `a`.
`url` | An url string. Will only be rendered if `tag_name` is `a`.
