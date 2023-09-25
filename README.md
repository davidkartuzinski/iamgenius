# iamgenius

This project, hosted at https://iamgenius.io, uses Next.js to highlight the "24 Characteristics that Geniuses have in Common" as written by Doctor Barrios.

I have had to learn how to do various things for this app. The following people wrote excellent posts or tutorials or instruction on the following subjects:

1. A thank you to [Augustin Mauroy](https://augustinmauroy.github.io/en). Augustin answered the call for help when I needed to know the strategy in using Nextjs 13 (app dir) to translate MDX based pages. He showed me his [repo](https://github.com/AugustinMauroy/augustinmauroy.github.io/tree/main) and answered questions as needed. Without his help, I would not have gotten very far.

2. How to properly import SVG images and some options to the excellent next/images import.

- [Joseph Mawa](https://github.com/nibble0101) wrote this [primer on next/images with SVGs on LogRocket](https://blog.logrocket.com/import-svgs-next-js-apps/).

3. A more modern CSS reset by [Josh Comeau](https://twitter.com/joshwcomeau) who wrote and shared his [modern CSS Reset](https://www.joshwcomeau.com/css/custom-css-reset/).

4. Fluid Typography by [Christian Diaz](https://www.itscrisdiaz.com/) writing over at [LogRocket - Fluid vs. responsive typography with CSS clamp](https://blog.logrocket.com/fluid-vs-responsive-typography-css-clamp/). Great tool for [fluid typography](https://www.fluid-type-scale.com/). This [fluid tool for a single element](https://min-max-calculator.9elements.com/) was helpful for determining the calc for my blockquote component.

5. To fine-tune the font and the line-height, I turned to two tools. For creating [clamp based font-size](https://clamp.font-size.app/). Calculating line-height was done with this excellent [line-height calculator tool](https://fluidtypography.com/#app-get-started). I used it for the automatic calc of line-height between 360px viewport and 640px largest container width.

6. Tool to ensure colors were accessible: [Accessible Color Generator by Erik Kennedy](https://www.learnui.design/tools/accessible-color-generator.html)

7. I used a few of the ready-made components from [React Aria](https://react-spectrum.adobe.com/react-aria/index.html). This helped with accessibility. For example, the hamburger menu on the website is using the [Menu Component](https://react-spectrum.adobe.com/react-aria/Menu.html) underneath it all.
