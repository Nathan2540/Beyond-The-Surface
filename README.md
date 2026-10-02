# Beyond the Surface — Landing Page

A clean vanilla HTML/CSS/JS implementation based on the supplied UI direction and brand guide.

## Brand tokens
- Midnight Navy: #172C3B
- Discovery Gold: #D6AD62
- Soft Ivory: #F7F4EC
- Deep Teal: #397C78
- White: #FFFFFF
- Headings/logo: Montserrat ExtraBold
- Subheadings: Montserrat SemiBold
- Body: Lato Regular
- Buttons/navigation: Montserrat Medium

## Run
Open `index.html` directly in a browser, or use VS Code Live Server.

## Replace the visual placeholders
The page deliberately keeps the photo areas easy to replace:
- `.person-placeholder` = hero image
- `.portrait-art` = editorial/about image
- `.founder-art` = founder portrait
- `.vision-card` = final CTA background

If you want actual images, add them under `assets/` and replace the corresponding CSS backgrounds with `url("../assets/filename.jpg")`.

## Main interactions
- Sticky / glass navigation on scroll
- Responsive mobile menu
- Active navigation state
- Scroll-reveal animations using IntersectionObserver
- Hover lift effects on cards
- Hero visual parallax
- Reduced-motion accessibility support
- Front-end contact form confirmation

The contact form is intentionally front-end only. Connect it to Formspree, Netlify Forms, a custom backend, or another form service before launch.
