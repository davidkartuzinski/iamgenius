# iamgenius

This project, hosted at https://iamgenius.io, uses Next.js to highlight the "24 Characteristics that Geniuses have in Common" as written by Doctor Barrios.

I have had to learn how to do various things for this app. The following people wrote excellent posts or tutorials or instruction on the following subjects:

1. Creating a multilanguage app in Next.js 13, using the new App directory and using .js (as opposed to .ts).

- [Adriano Raiano](https://github.com/adrai) and [Jan Mühlemann](https://github.com/jamuhl) in their excellent tutorial on [how to translate a Next.js app](https://locize.com/blog/next-13-app-dir-i18n/). And a fully functioning repo [GitHub](https://github.com/i18next/next-13-app-dir-i18next-example/tree/main) The [i18next docs](https://www.i18next.com/) are really helpful as well.

2. How to properly import SVG images and some options to the excellent next/images import.

- [Joseph Mawa](https://github.com/nibble0101) wrote this [primer on next/images with SVGs on LogRocket](https://blog.logrocket.com/import-svgs-next-js-apps/).

3. A more modern CSS reset by [Josh Comeau](https://twitter.com/joshwcomeau) who wrote and shared his [modern CSS Reset](https://www.joshwcomeau.com/css/custom-css-reset/).

4. Fluid Typography by [Christian Diaz](https://www.itscrisdiaz.com/) writing over at [LogRocket - Fluid vs. responsive typography with CSS clamp](https://blog.logrocket.com/fluid-vs-responsive-typography-css-clamp/). Great tool for [fluid typography](https://www.fluid-type-scale.com/). This [fluid tool for a single element](https://min-max-calculator.9elements.com/) was helpful for determining the calc for my blockquote component.

5. To fine-tune the font and the line-height, I turned to two tools. For creating [clamp based font-size](https://clamp.font-size.app/). Calculating line-height was done with this excellent [line-height calculator tool](https://fluidtypography.com/#app-get-started). I used it for the automatic calc of line-height between 360px viewport and 640px largest container width.

6. Tool to ensure colors were accessible: [Accessible Color Generator by Erik Kennedy](https://www.learnui.design/tools/accessible-color-generator.html)
