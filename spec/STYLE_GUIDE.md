# Bidwell monitors - Style Guide Specification

> Based on reverse engineering of https://bidwellbrook.org
> Generated: 13 November 2025

## Color Palette

### Primary Colors
```css
--primary-accent: #E1AE86;        /* Warm terracotta/tan - primary accent */
--primary-light: #D8C4B6;         /* Light beige - secondary accent */
--primary-dark: #142E2C;          /* Deep teal/forest green - body text */
--primary-navy: #00102E;          /* Deep navy blue - headings/dark elements */
```

### Secondary Colors
```css
--secondary-grey: #6d7685;        /* Medium grey - meta text */
--secondary-white: #ffffff;       /* Pure white - backgrounds */
--secondary-light-grey: #F4F5F7;  /* Very light grey - subtle backgrounds */
--secondary-border-grey: #dbdbdb; /* Border grey */
```

### Header & Footer Colors
```css
--header-bg: #3E5879;             /* Slate blue - main header background */
--footer-bg: #00102E;             /* Deep navy - footer background */
--header-mobile-menu: #00102E;    /* Deep navy - mobile menu background */
```

### Interactive Colors
```css
--button-primary: #FFD00A;        /* Bright yellow - primary buttons */
--button-primary-hover: rgba(255,208,10,0.78); /* Yellow hover state */
--button-text: #00102E;           /* Dark navy - button text */
--link-color: #E1AE86;            /* Terracotta - links */
--link-hover: #D8C4B6;            /* Light beige - link hover */
```

### Overlay & Transparency
```css
--overlay-dark: rgba(0,0,0,0.9);  /* Dark overlay */
--header-transparent: rgba(255,255,255,0);
--border-light: rgba(234,234,234,0.1);
```

## Typography

### Font Families
```css
--font-primary: 'Inter Tight', sans-serif;  /* All text */
--font-headings: 'Inter Tight', sans-serif; /* Headings */
```

### Font Sizes

#### Desktop (≥992px)
```css
--h1-size: 50px;
--h2-size: 40px;
--h3-size: 30px;
--h4-size: 22px;
--h5-size: 20px;
--h6-size: 18px;
--body-size: 16px;
--meta-size: 12px;
--button-size: 14px;
```

#### Tablet (576px - 991px)
```css
--h1-size: 42px;
--h2-size: 32px;
--h3-size: 24px;
--h4-size: 18px;
--h5-size: 16px;
--h6-size: 16px;
--body-size: 16px;
```

#### Mobile (≤575px)
```css
--h1-size: 32px;
--h2-size: 24px;
--h3-size: 20px;
--h4-size: 16px;
--h5-size: 16px;
--h6-size: 16px;
--body-size: 16px;
```

### Font Properties
```css
--heading-line-height: 1.2;
--body-line-height: 1.68;
--heading-letter-spacing: 0px;
--body-letter-spacing: 0px;
--font-weight-regular: 400;
--font-weight-bold: 700;
```

### Text Transforms
- Headings: None (normal case)
- Buttons: UPPERCASE
- Body text: None

## Spacing & Layout

### Container & Padding
```css
--page-padding-top: 83px;
--page-padding-bottom: 100px;
```

### Header Heights
```css
--header-height-desktop: 100px;
--header-height-tablet: 100px;
--header-height-mobile: 75px;
```

### Footer Padding
```css
--footer-padding-desktop: 50px 0;
--footer-padding-tablet: 50px 0;
--footer-padding-mobile: 50px 0;
```

### Element Spacing
```css
--element-gap-default: 25px;
--element-gap-vertical: 25px;
--section-gap: 30px;
--widget-gap: 24px;
--entry-header-margin: 40px;
```

## Buttons

### Primary Button
```css
.button-primary {
  background-color: #FFD00A;
  color: #00102E;
  border-radius: 0;
  padding: 12px 35px;
  font-size: 14px;
  text-transform: uppercase;
  border: none;
}

.button-primary:hover {
  background-color: rgba(255,208,10,0.78);
  color: #00102E;
}
```

### Button Variants
- **Border Radius**: 0 (square corners)
- **Min Height**: Auto (content-based)
- **Font Weight**: Regular
- **Letter Spacing**: Normal

## Forms & Inputs

### Input Fields
```css
.input-field {
  background-color: #ffffff;
  border-color: #dbdbdb;
  color: #142E2C;
  border-radius: 0;
  padding: 12px 15px;
  font-size: 16px;
}

.input-field:focus {
  border-color: #E1AE86;
  outline: none;
}

.input-field::placeholder {
  color: #6d7685;
  opacity: 1;
}
```

## Navigation

### Main Navigation
```css
.main-nav-link {
  color: #FFFFFF;
  font-size: 16px;
  text-decoration: none;
}

.main-nav-link:hover {
  color: #FFD00A;
}
```

### Sub-menu
```css
.sub-menu {
  background-color: #1c1c1c;
  color: #ffffff;
}

.sub-menu-link {
  color: #ffffff;
  padding: 10px 20px;
}
```

### Mobile Menu
```css
.mobile-menu {
  background-color: #00102E;
  color: #ffffff;
}

.mobile-menu-link {
  color: #ffffff;
  border-bottom: 1px solid rgba(238,238,238,0.14);
  padding-top: 5px;
}
```

## Images & Media

### Border Radius
```css
--image-border-radius: 0;         /* Square images */
```

### Logo Sizing
```css
--logo-width-desktop: 198px;
--logo-width-tablet: 100px;
--logo-width-mobile: 100px;
--logo-max-height-desktop: 198px;
--logo-max-height-tablet: 100px;
--logo-max-height-mobile: 100px;
```

## Cards & Content Blocks

### Post/Card Layout
```css
.content-card {
  margin-bottom: 24px;
}

.entry-title {
  color: #00102E;
  margin-bottom: 24px;
}

.entry-meta {
  color: #6d7685;
  font-size: 12px;
  margin: 15px 0;
}

.entry-post {
  color: #142E2C;
  font-size: 16px;
  line-height: 1.68;
}
```

### List Image Layout
```css
--list-image-width: 30%;
--list-content-width: 70%;
--list-image-gap: 24px;
```

## Footer

### Footer Widgets
```css
.footer-widgets {
  background-color: #00102E;
  color: #ffffff;
  padding: 95px 0;
  gap: 30px;
}

.footer-link {
  color: rgba(255,255,255,0.51);
}

.footer-link:hover {
  color: #E1AE86;
}

.footer-credits {
  color: #FFFFFF;
  background-color: #00102E;
  padding: 20px 0;
  border-top: 1px solid rgba(234,234,234,0.1);
  font-size: 16px;
}
```

## Back to Top Button
```css
.go-top {
  background-color: #E1AE86;
  border-radius: 2px;
  bottom: 10px;
  right: 20px;
  padding: 15px;
}

.go-top:hover {
  background-color: #FFFFFF;
  color: #E1AE86;
}

.go-top svg {
  width: 16px;
  height: 16px;
}
```

## Borders & Dividers

```css
--border-width: 1px;
--border-style: solid;
--border-color-light: rgba(234,234,234,0.1);
--border-color-default: rgba(234,234,234,1);
--border-radius-default: 0;
```

## Shadows
No box shadows are used - clean, flat design aesthetic

## Animations & Transitions
- Hover transitions: Standard CSS transitions (duration not specified, recommend 0.3s ease)
- No complex animations observed
- Sticky header behavior on scroll

## Breakpoints

```css
--breakpoint-mobile: 575px;
--breakpoint-tablet: 576px;
--breakpoint-desktop: 992px;
--breakpoint-large: 1025px;
```

## Design Principles

1. **Natural & Earthy**: Warm terracotta and forest green tones reflect river/nature theme
2. **Clean & Modern**: Zero border-radius, minimal shadows, flat design
3. **High Contrast**: Dark navy headings on light backgrounds for readability
4. **Accessible**: Good color contrast ratios, clear typography hierarchy
5. **Consistent Spacing**: 24-25px standard gaps throughout
6. **Mobile-First**: Responsive breakpoints with sensible defaults

## Special Considerations

### Content Areas
- Entry headers: 40px bottom margin
- Entry thumbs: 40px bottom margin
- Meta info: 24px spacing above/below
- Post content: 16px font, 1.68 line-height

### Sidebar
- Background: #ffffff
- Text color: #6d7685
- Widget title: 16px (desktop), 22px (tablet/mobile)

### Site Info/Credits
- Text and links: #ffffff
- SVG icons: Fill #ffffff
- Padding: 20px top and bottom

## Notes for Implementation

1. Use CSS custom properties (variables) for all colors and sizing
2. Implement mobile-first responsive design
3. Use semantic HTML5 elements
4. Ensure WCAG 2.1 AA accessibility compliance
5. No jQuery dependencies if possible - vanilla JS or React
6. Consider using Next.js built-in font optimization for Inter Tight
7. Test all interactive states (hover, focus, active)
8. Implement smooth scroll behavior for anchor links
