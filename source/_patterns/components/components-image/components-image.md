---
title: factorial-components-image
---

WIP: A ui pattern for responsive images.

Proposoal for different cases of responsive images

1. Regular image, lazyloaded, with noscript fallback
2. Responsive image, same aspect ratio over all breakpoints (teasers)
3. Responsive image, aspect ratio changes over breakpoints (quote with image)
4. Different sources for mobile and desktop, dynamic aspect ratio (article diagrams)
5. Responsive Retina images

## Caveats 

* Injecting `style` tags into the `body` is technically non-valid HTML. 
* Implicit Mondernizr dependency to `html.no-js`.
