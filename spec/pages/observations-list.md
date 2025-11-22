# Observations List Page Specification

## Purpose
Display all observations made across all locations, with filtering and search capabilities. Allow users to browse community contributions and see patterns in the data.

## Target Audience
- Monitors wanting to see what others have observed
- Coordinators reviewing submitted observations
- Researchers analyzing observation data
- Public users interested in the study (if public access enabled)

## Page URL
`/observations`
`/observations?location=5` (filtered by location)
`/observations?evidence=active-flow` (filtered by evidence type)

## Authentication
- **Optional**: Page can be public or require login
- Some features may require authentication (e.g., viewing private observations)

## Layout & Structure

### Header
- Standard site header
- Breadcrumb: Home > Observations

### Page Title Section
**Content**
- H1: "All Observations"
- Subtitle: "Community contributions helping us understand water drainage patterns"
- Stats bar: "Showing [X] observations from [Y] monitors at [Z] locations"

### View Options
**Controls** (top right)
- View toggle: Grid View | List View | Map View
- Default: List View
- Persist user preference

---

## Filter & Search Section

### Search Bar
- Large search input
- Placeholder: "Search observations by location, notes, or observer..."
- Search icon
- Clear button when text entered
- Search executes on Enter or after brief pause (debounce)
- Searches: location name, observation notes, observer name

### Filter Panel
Collapsible panel with filter options:

**Location Filter**
- Multi-select dropdown
- Shows all 20 locations with checkboxes
- Search within locations
- "Select All" / "Clear All"
- Badge showing count of selected: "(3)"

**Date Range Filter**
- Quick options (radio buttons or tabs):
  - Last 24 hours
  - Last 7 days
  - Last 30 days
  - All time
  - Custom range
- Custom date picker (shows if Custom selected):
  - From: [date picker]
  - To: [date picker]

**Weather Conditions Filter**
- Checkboxes:
  - Heavy rain
  - Light rain
  - Recently stopped
  - Dry (past evidence)
  - Other

**Evidence Type Filter**
- Checkboxes:
  - Active flow
  - Pooling/standing water
  - Erosion patterns
  - Sediment deposits
  - Water staining
  - Drainage entry points
  - Highway/road runoff

**Observer Filter** (if public names)
- Dropdown: All observers
- Or search/select specific observer

**Coordinator Filters** (coordinators only)
- Verification status:
  - All
  - Verified
  - Needs review
  - Flagged
- Quality:
  - All
  - With photos/videos
  - Without media
  - Detailed (>200 characters)

**Applied Filters Display**
- Show active filters as chips/badges above results
- Each chip has × to remove filter
- "Clear all filters" link

### Sort Options
Dropdown: "Sort by"
- Most recent first (default)
- Oldest first
- Location (1-20)
- Most photos/videos
- Longest notes

### Results Summary
- Text: "Showing X-Y of Z observations"
- Update dynamically as filters applied

---

## List View (Default)

### Observation Cards
Full-width cards, stacked vertically:

**Card Structure:**

**Header Row**
- Left: Location badge "#5 - Location Name"
- Right: Date and time "Nov 22, 2025 10:30 AM"

**Observer Info** (if public)
- Name: "John Smith" or "Anonymous Observer"
- Icon: User avatar (placeholder or actual)
- Badge: "Verified Monitor" (if applicable)

**Weather & Evidence**
- Icon row showing:
  - Weather icons (rain, sun, etc.)
  - Evidence type icons
- Hover: tooltip with label

**Main Content**
- Observation excerpt (first 200 characters)
- "Read more" link to expand or navigate to detail page
- Research question response highlighted (if brief)

**Media Preview**
- Thumbnail images (up to 3-4 shown)
- Image count badge: "+5 more"
- Video indicator: play button overlay on video thumbnails
- Click thumbnail: open lightbox or go to detail page

**Footer Actions**
- Button/Link: "View Details"
- Icon button: Share (if enabled)
- Icon: Comment count (future)
- Icon: Verification badge (coordinators)

**Card Styling**
- Border: 1px #dbdbdb
- Padding: 20px
- Background: white
- Hover: subtle shadow
- Spacing: 24px between cards

### Pagination
- Bottom of page
- Show: Previous | 1 2 3 ... 10 | Next
- Items per page: 20 (configurable in settings)
- Jump to page input
- "Load More" button alternative (infinite scroll option)

---

## Grid View

### Card Grid
- Layout: 3 columns desktop, 2 tablet, 1 mobile
- Gap: 24px

**Compact Card Design:**

**Visual**
- Featured image as card background/top (if available)
- Or placeholder with location number

**Content** (overlay or below image):
- Location badge
- Date
- Weather/evidence icons (small)
- Brief excerpt (50 characters)
- Photo count badge

**Hover State:**
- Elevation/shadow
- "View Details" overlay appears

**Click anywhere:** Navigate to detail page

---

## Map View

### Interactive Map
- Full width of content area
- Height: 600px (desktop), responsive on mobile
- Center: show all observations or filtered observations

### Clustered Markers
- If multiple observations at one location, show cluster
- Cluster number indicates count
- Click cluster: zoom in or show list

### Individual Markers
- Color-coded by:
  - Recency (green=recent, yellow=moderate, grey=old)
  - Or evidence type
- Click marker: open popup with observation summary

### Marker Popup
**Content:**
- Location name
- Date and time
- Observer name
- Thumbnail (if available)
- Brief excerpt
- Button: "View Full Observation"

### Map Controls
- Zoom, pan
- Full screen
- Legend explaining colors
- Filter: only show observations matching filters

---

## Empty States

### No Results (filters applied)
- Icon: Search/filter with X
- Text: "No observations match your filters"
- Suggestions:
  - Try different date range
  - Remove some filters
  - Search different terms
- Button: "Clear All Filters"

### No Observations Yet
- Icon: Clipboard with question mark
- Text: "No observations have been submitted yet"
- Message: "Be the first to contribute!"
- Button: "Make First Observation"

---

## Responsive Behavior

### Desktop (≥992px)
- Full filter panel visible (or in sidebar)
- List/grid: full layouts
- Map: large view
- Multiple columns where appropriate

### Tablet (576px - 991px)
- Filter panel: collapsible
- Grid: 2 columns
- List: full width
- Map: adjusted height

### Mobile (≤575px)
- Filter: collapsible panel or slide-in
- Grid: 1 column
- List: compact cards
- Map: reduced height
- Simplified card content

## Interactions & Behaviors

### Filter Interactions
- Apply filters immediately (live update)
- Show loading state while fetching
- Smooth animations when results update
- Preserve scroll position if possible

### Card Interactions
- Hover: show additional info or actions
- Click: navigate to detail page
- Thumbnail click: open lightbox (optional) or detail page
- Long-press (mobile): show quick actions menu

### Infinite Scroll (Optional)
- Instead of pagination
- Load more as user scrolls
- Show "Loading..." indicator
- "Back to top" button appears after scroll

### Keyboard Navigation
- Tab through cards
- Enter: open detail
- Arrow keys: navigate cards (optional)

## Accessibility Requirements

### ARIA Labels
- Filter panel: proper ARIA attributes
- Cards: semantic HTML (article elements)
- Buttons: descriptive labels
- Map: keyboard accessible

### Screen Readers
- Announce filter changes
- Announce new results loaded
- Card content properly structured
- Image alt text

### Keyboard Navigation
- All interactive elements accessible
- Logical tab order
- Focus indicators visible

## SEO Requirements

### Meta Tags
- Title: "Observations - Bidwell monitors"
- Description: "Browse water drainage observations from volunteer monitors in Dartington and Totnes."

### Structured Data
- ItemList schema for observations
- Article schema for each observation
- Breadcrumb schema

### URLs
- Clean, readable URLs
- Support for filtering via URL params
- Shareable filtered URLs

## API Integration

### Get Observations List
**GET** `/api/observations`

**Query Parameters:**
```
?page=1
&limit=20
&location=5,7,10
&dateFrom=2025-11-01
&dateTo=2025-11-22
&evidence=active-flow,pooling
&weather=heavy-rain
&search=highway
&sort=recent
```

**Response:**
```json
{
  "observations": [
    {
      "id": "obs_123",
      "locationId": 5,
      "locationName": "Location Name",
      "observedAt": "2025-11-22T10:30:00Z",
      "observer": {
        "id": "user_456",
        "name": "John Smith",
        "anonymous": false
      },
      "weather": ["heavy-rain"],
      "evidenceTypes": ["active-flow", "pooling"],
      "notes": "Observation text...",
      "mediaCount": 5,
      "thumbnails": ["url1", "url2", "url3"],
      "verified": true
    }
  ],
  "pagination": {
    "total": 150,
    "page": 1,
    "limit": 20,
    "pages": 8
  },
  "filters": {
    "applied": ["location", "dateRange"],
    "available": { /* available filter options */ }
  }
}
```

### Export Observations
**GET** `/api/observations/export?format=csv`
(Coordinators only)

## Analytics & Tracking

### Events to Track
- Page viewed
- View mode changed
- Filters applied (which filters)
- Search performed
- Observation card clicked
- Map marker clicked
- Sort changed
- Export triggered (coordinators)

### Metrics
- Most viewed observations
- Popular filters
- Average time on page
- Click-through rate to detail pages

## Performance Considerations

### Data Loading
- Paginate results (20 per page)
- Lazy load images
- Fetch thumbnails, not full-res images
- Cache filter options

### Map Performance
- Use marker clustering
- Lazy load map
- Optimize marker rendering

### Search Performance
- Debounce search input (300ms)
- Server-side search (don't filter client-side for large datasets)
- Search index optimization

## Coordinator Features

### Bulk Actions (Coordinators only)
- Select multiple observations (checkboxes)
- Actions:
  - Mark as verified
  - Flag for review
  - Export selected
  - Delete selected (with confirmation)

### Verification Badge
- Show verification status on cards
- Filter by verification status

### Quick Review Mode
- Simplified view for rapid review
- Approve/flag buttons
- Next/previous navigation

## Future Enhancements
- Comments on observations
- Like/upvote system
- Tags/categories
- Advanced search (boolean operators)
- Saved searches
- Email alerts for new observations
- Observation comparisons
- Data visualization (charts, graphs)
- Print view
- RSS feed
- Public API for data access
