# Observation Locations Page Specification

## Purpose
Display all 20 observation locations for the Heavy Rain Monitoring study, allowing users to explore locations, understand research questions, and select where to make observations.

## Target Audience
- Monitors looking for locations to observe
- New users exploring the project
- Coordinators reviewing location setup
- Public users interested in the study

## Page URL
`/locations`

## Authentication
- **Optional**: Public page but some features require login
- "Make observation" buttons require authentication

## Layout & Structure

### Header
- Standard site header
- Breadcrumb: Home > Observation Locations

### Page Title Section
**Content**
- H1: "Observation Locations"
- Subtitle: "20 sites monitoring water drainage in the Dartington and Totnes area"
- Brief description: "Each location has specific research questions about water flow and drainage patterns. Visit during heavy rain to capture the most useful observations."

### View Toggle
**Controls** (top right)
- Toggle between: Map View | List View
- Default: Map View
- Toggle persists user preference (localStorage)

---

## Map View (Default)

### Interactive Map
**Container**
- Full width of content area
- Height: 600px on desktop, 500px tablet, 400px mobile
- Map provider: Leaflet with OpenStreetMap or Google Maps
- Initial center: 50.446551, -3.709278 (Dartington)
- Initial zoom: appropriate to show all 20 locations

### Map Markers
**Visual**
- Numbered markers 1-20 (matching study site numbers)
- Custom marker icons:
  - Default state: Blue/grey marker with white number
  - Hover state: Larger with shadow
  - Active/selected state: Yellow (#FFD00A) marker
  - Has observations: Green marker
  - Needs attention: Red/orange marker (coordinator set)

### Marker Interaction
**On Hover**
- Show tooltip with location name
- Highlight marker

**On Click**
- Open info popup/card with:
  - Location number and name
  - Research question
  - Brief description
  - Number of observations made
  - Last observation date
  - "View Details" button
  - "Make Observation" button (primary, requires login)

### Info Popup/Card Design
**Size**: ~300px width
**Content**:
- Header: "Location #[X]"
- Location name (if available)
- Research question in blockquote style
- Stats:
  - 📊 "[X] observations made"
  - 📅 "Last observed: [date]"
- Actions:
  - Button: "MAKE OBSERVATION" (primary yellow)
  - Link: "View all observations at this location"
  - Link: "View full details"

### Map Controls
- Zoom in/out buttons
- Full screen toggle
- Reset view button (returns to initial center/zoom)
- My location button (geolocation, if enabled)
- Legend showing marker colors/meanings

### Map Sidebar (Optional, desktop only)
**Location List** (left side, ~250px width, scrollable)
- Compact list of all 20 locations
- Each shows:
  - Number and name
  - Observation count badge
- Click to center map on that location
- Search/filter locations by name or number

---

## List View

### Search & Filter Bar
**Search**
- Input: "Search locations..."
- Searches: location number, name, research question

**Filters**
- Dropdown: "Sort by"
  - Location number (1-20)
  - Most observations
  - Fewest observations
  - Recently observed
  - Needs observations
- Dropdown: "Show"
  - All locations (default)
  - Observed by me
  - Never observed
  - Observed in last 7 days

**Results Count**
- Text: "Showing X of 20 locations"

### Location Cards Grid
**Layout**
- Grid: 2 columns on desktop, 1 column on tablet/mobile
- Card spacing: 24px gap

**Card Design** (for each location)

**Visual**
- Border: 1px solid #dbdbdb
- Padding: 20px
- Background: white
- Hover state: subtle shadow

**Content**:

**Header**
- Badge: "Location #[X]"
- Location name (if available)
- Status badge: "Active" | "Needs attention" | "New"

**Research Question**
- Displayed as blockquote or emphasized text
- Truncate if too long with "..." and expand option

**Statistics**
- Icon + text layout:
  - 📊 "[X] observations recorded"
  - 📅 "Last observed: [date]" or "Never observed"
  - 📍 "Coordinates: lat, lng"

**Observation Highlights** (if observations exist)
- "Recent observation summary": Brief preview from most recent observation
- Thumbnail image from recent observation (if available)

**Actions**
- Primary button: "MAKE OBSERVATION"
- Secondary button: "VIEW OBSERVATIONS" (opens observations at this location)
- Text link: "View on map"

**Empty State** (no observations yet)
- Icon: Map pin with question mark
- Text: "Be the first to observe this location!"
- CTA: Prominent "Make First Observation" button

---

## Location Detail Modal/Page

When "View Details" clicked from map or card:

### Modal or Slide-in Panel
**Header**
- Location number and name
- Close button

**Tabs** (if modal) or **Sections** (if page):

**Tab 1: Overview**
- Full research question
- Detailed description/context
- What to look for:
  - Erosion patterns
  - Sediment deposits
  - Water staining
  - Pooling areas
  - Active flow
- Best time to observe: "During or shortly after heavy rain"
- Safety notes (if any)

**Tab 2: Location Info**
- Coordinates (with copy button)
- Address/directions (if available)
- Map showing just this location (zoomed in)
- "Get directions" link (opens Google Maps)
- Parking/access information

**Tab 3: Observations**
- Count: "[X] observations at this location"
- Recent observations list (5 most recent)
- Each shows: date, observer (if public), summary, thumbnail
- "View all observations" link

**Actions** (bottom of modal)
- Primary button: "MAKE OBSERVATION HERE"
- Secondary button: "VIEW ALL OBSERVATIONS"
- Link: "Report an issue with this location"

---

## Quick Stats Section (Above map/list)

**Cards showing study-wide statistics:**

**Card 1: Total Observations**
- Number: Count of all observations
- Icon: Clipboard

**Card 2: Locations Covered**
- Number: "X of 20 locations observed"
- Progress bar visual

**Card 3: Active Monitors**
- Number: Count of active users
- Icon: People/community

**Card 4: Last Updated**
- Text: "Last observation: X hours ago"
- Icon: Clock

---

## Responsive Behavior

### Desktop (≥992px)
- Map view: full width with optional sidebar
- List view: 2-column grid
- Info popups: 300px width

### Tablet (576px - 991px)
- Map view: full width, no sidebar (or collapsible)
- List view: 2 columns (may reduce to 1 if narrow)
- Reduced map height

### Mobile (≤575px)
- Map view: full width, 400px height
- List view: single column
- Info popups: full width (or near full)
- Simplified cards with less detail

## Interactions & Behaviors

### Map Interactions
- Click marker: open popup
- Click outside popup: close popup
- Zoom: mousewheel or touch pinch
- Pan: click-drag or touch-drag
- Double-click: zoom in

### List Interactions
- Hover card: subtle shadow/elevation
- Click card: expand details or navigate to detail page
- Click button: navigate to make observation

### Loading States
- Map: show loading spinner while map loads
- Location data: skeleton screens for cards
- Images: lazy load with placeholders

### Error States
- Map load failure: "Unable to load map. Please refresh."
- No locations: "No locations found matching your filters."
- Network error: "Unable to load location data. Please try again."

## Accessibility Requirements

### Map Accessibility
- ARIA label: "Interactive map of observation locations"
- Keyboard controls: Tab through markers, Enter to select
- Screen reader: Announce location details when marker selected
- Alternative: List view always available for non-visual users

### List View
- Heading hierarchy: proper H2, H3 usage
- Card links: descriptive text
- Focus indicators: visible on all interactive elements

### Forms & Controls
- View toggle: ARIA role and state
- Search input: proper label
- Filter dropdowns: keyboard accessible

## Performance Considerations

### Map Performance
- Lazy load map library (only when needed)
- Use marker clustering if many observations shown
- Optimize marker icons (SVG or small PNGs)

### List Performance
- Lazy load images
- Paginate or virtual scroll if list grows
- Cache location data

### Data Loading
- Load location metadata first (fast)
- Load observation counts asynchronously
- Load images lazily

## SEO Requirements

### Meta Tags
- Title: "Observation Locations - Dartington River Folk"
- Description: "Explore 20 water monitoring locations in Dartington and Totnes. Learn about research questions and make observations."

### Structured Data
- Place schema for each location
- Map schema
- Breadcrumb schema

## API Integration

### Get All Locations
**GET** `/api/locations`

**Response:**
```json
{
  "locations": [
    {
      "id": 1,
      "number": 1,
      "name": "Highway Drainage North",
      "coordinates": { "lat": 50.446551, "lng": -3.709278 },
      "researchQuestion": "Is runoff from land to the north flowing onto the highway and into the drainage gullies?",
      "description": "...",
      "observationCount": 15,
      "lastObserved": "2025-11-15T10:30:00Z",
      "status": "active"
    },
    // ... 19 more locations
  ]
}
```

### Get Location Details
**GET** `/api/locations/:id`

### Get Observations for Location
**GET** `/api/locations/:id/observations`

## Analytics & Tracking

### Events to Track
- Page viewed (map vs list view)
- View toggle clicked
- Map marker clicked
- Location card clicked
- "Make observation" button clicked (by location)
- Search used
- Filters applied
- Detail modal opened
- Directions requested

## Future Enhancements
- Real-time observation updates on map
- Weather overlay on map (rainfall data)
- Distance calculator (from user location)
- Favorite/bookmark locations
- Custom location notes (personal)
- Notification preferences per location
- Community photos gallery per location
- Historical observation data visualization
- Heatmap of observation density
