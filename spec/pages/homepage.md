# Homepage Specification

## Purpose
The homepage serves as the primary landing page for the Dartington River Folk observation app. It introduces visitors to the current study, explains the purpose of the project, and guides them to take action (register or make an observation).

## Target Audience
- Potential volunteer monitors from bidwellbrook.org
- Existing registered monitors returning to make observations
- Community members interested in learning about the project

## Layout & Structure

### Header
- Site logo/branding: "Dartington River Folk" or "Bidwell Brook Partnership"
- Navigation menu:
  - Home (current)
  - Make Observation (requires login)
  - View Observations (public)
  - About
  - Login/Account (conditional: shows "Login" if not logged in, "My Account" if logged in)

### Hero Section
**Visual**
- Background: Hero image or graphic representing river/water monitoring
- Overlay: Semi-transparent overlay for text readability

**Content**
- H1: "Help Us Understand Our River"
- Subtitle: "Join volunteer monitors observing water drainage patterns in the Dartington area"
- Primary CTA button: "Become a Monitor" (links to signup page)
- Secondary CTA button: "View Observations" (links to observations list)

### Current Study Section
**Heading**: "Current Study: Heavy Rain Monitoring"

**Content**
- Study period: Autumn 2025
- Brief description: "We're investigating how informal drainage systems (agricultural land and natural spaces) interact with formal drainage systems that route runoff into the combined sewer system."
- Location: Dartington and Totnes area, Devon (TQ9 postcode)
- Number of observation sites: 20 designated locations

**Visual Elements**
- Small static map image showing general area
- Icon or image representing rain/water monitoring

### What We Need Section
**Heading**: "What We're Looking For"

**Content Grid** (3-4 columns on desktop, stacked on mobile)

**Card 1: When to Observe**
- Icon: Rain cloud with clock
- Text: "During or shortly after heavy rain events"
- Subtext: "We'll notify you when weather conditions are right"

**Card 2: What to Document**
- Icon: Camera/video
- Text: "Photos, videos, and detailed notes"
- Subtext: "Capture evidence of water flow and drainage patterns"

**Card 3: Types of Evidence**
- Icon: Checklist
- Text: "Erosion, sediment, water staining, pooling"
- Subtext: "Signs that help us understand water movement"

**Card 4: Your Impact**
- Icon: Community/people
- Text: "Help protect our community"
- Subtext: "Your observations inform flood prevention strategies"

### Interactive Map Preview
**Heading**: "Observation Locations"

**Content**
- Embedded interactive map showing all 20 observation sites
- Map markers: numbered 1-20 corresponding to observation sites
- Click marker to see basic info (location name and research question preview)
- Link below map: "View Full Location Details" (opens locations page)
- Map controls: zoom, pan, full screen option

**Alternative** (if interactive map not ready)
- Static map image with numbered locations
- Link: "Click here to see detailed location information"

### How It Works Section
**Heading**: "Getting Started is Easy"

**Process Steps** (horizontal timeline or numbered cards)

**Step 1: Register**
- Icon: User profile with checkmark
- Text: "Create your free account"
- Description: "Takes less than 2 minutes. We'll verify your email."

**Step 2: Get Notified**
- Icon: Email/bell notification
- Text: "Receive observation requests"
- Description: "We'll email you when heavy rain is forecast and observations are needed."

**Step 3: Observe & Document**
- Icon: Camera/clipboard
- Text: "Make your observations"
- Description: "Visit a location, record what you see, upload photos/videos."

**Step 4: Submit & Track**
- Icon: Upload/chart
- Text: "Share your findings"
- Description: "Submit your observation and see how it contributes to the overall data."

### Call to Action Section
**Background**: Accent color (following style guide #E1AE86 or #FFD00A)

**Content**
- H2: "Ready to Make a Difference?"
- Text: "Join our community of volunteer monitors helping to understand and protect our local waterways."
- Primary button: "Sign Up Now" (links to signup page)
- Secondary link: "Learn More About the Project" (links to about page or expands more info)

### Footer
**Column 1: About**
- Brief description of Bidwell Brook Partnership
- Link to bidwellbrook.org
- Link to About page

**Column 2: Quick Links**
- Make Observation
- View Observations
- Observation Locations
- Contact Us

**Column 3: Resources**
- Study Information (PDF links)
- Terms & Privacy
- FAQ
- Help/Support

**Column 4: Contact**
- Email address
- Social media links (if applicable)

**Bottom Bar**
- Copyright notice
- Designed/built by credits

## Responsive Behavior

### Desktop (≥992px)
- Full navigation bar always visible
- Hero section full-width with large heading text
- Grid layouts: 3-4 columns
- Map: 60-70% viewport width, 500px height

### Tablet (576px - 991px)
- Navigation may collapse to hamburger menu
- Hero text size reduced per style guide
- Grid layouts: 2 columns
- Map: full width, 400px height

### Mobile (≤575px)
- Hamburger menu navigation
- Hero text size per mobile style guide
- All grids stack to single column
- Buttons full-width
- Map: full width, 300px height

## Interactions & Behaviors

### Navigation
- Sticky header (remains visible on scroll)
- Active page indicator in navigation
- Smooth scroll to anchor links (if any)
- Mobile hamburger menu animation

### Buttons
- Hover state: per style guide (yellow button: rgba(255,208,10,0.78))
- Active state: slightly darker
- Disabled state (if applicable): reduced opacity

### Map
- Interactive markers with hover tooltip showing location name
- Click marker: show popup with location number, name, and research question preview
- Zoom controls always visible
- Map loads asynchronously (show loading state)

### Links
- Color: #E1AE86 (terracotta)
- Hover: #D8C4B6 (light beige)
- External links: open in new tab (with icon indicator)

## Content Management

### Editable Content Areas
- Hero heading and subtitle
- Current study description
- Cards content in "What We Need" section
- Process steps descriptions
- CTA section text

### Static/Dynamic Content
- Map: pulls from location database (dynamic)
- Study information: can be updated via CMS or configuration
- Navigation: reflects user login state (dynamic)

## Accessibility Requirements

### ARIA Labels
- Navigation: `<nav aria-label="Main navigation">`
- CTA buttons: descriptive labels
- Map: `<div role="application" aria-label="Observation locations map">`

### Keyboard Navigation
- All interactive elements accessible via Tab
- Logical tab order
- Skip to main content link
- Map: keyboard accessible controls

### Screen Readers
- Alt text for all images
- Descriptive link text (avoid "click here")
- Heading hierarchy (H1 → H2 → H3)
- Form labels properly associated

### Color Contrast
- Text on background: minimum 4.5:1 ratio
- Button text: ensure readability
- Focus indicators: highly visible

## Performance Considerations

### Loading
- Hero image: optimized, lazy load if below fold
- Map: lazy load, load only when near viewport
- Images: WebP format with fallbacks
- Critical CSS: inline for above-the-fold content

### Assets
- Icons: SVG or icon font
- Images: Next.js Image component for optimization
- Fonts: preload Inter Tight font

## SEO Requirements

### Meta Tags
- Title: "Dartington River Folk - Volunteer Water Monitoring"
- Description: "Join volunteer monitors observing water drainage patterns in Dartington and Totnes. Help us understand flooding and protect our community."
- Keywords: river monitoring, water observation, Dartington, Totnes, volunteer, flooding, drainage

### Structured Data
- Organization schema for Bidwell Brook Partnership
- LocalBusiness schema with location
- Event schema if applicable

### Social Media
- Open Graph tags for Facebook/LinkedIn
- Twitter Card tags
- Shared image: hero image or project logo

## Analytics & Tracking

### Events to Track
- Button clicks: "Become a Monitor", "View Observations"
- Map interactions: marker clicks, zoom
- Scroll depth: how far users scroll
- Time on page
- External link clicks

### Conversion Goals
- Registration started
- Observation form accessed
- Location map viewed

## Error States

### Map Loading Error
- Display message: "Unable to load map. Please refresh the page."
- Provide fallback: link to locations list page

### Network Error
- Graceful degradation
- Cache static content when possible
- Display appropriate error messages

## Future Enhancements
- Live weather widget showing current conditions
- Recent observations carousel
- Monitor spotlight: feature active contributors
- Statistics: total observations, active monitors
- Multi-language support (if needed)
