# Observation Detail Page Specification

## Purpose
Display complete details of a single observation including all notes, media, location context, and related observations.

## Target Audience
- Monitors reviewing specific observations
- Coordinators verifying observations
- Researchers examining detailed data
- Users following up on observations they've seen

## Page URL
`/observations/:id`
Example: `/observations/obs_12345`

## Authentication
- **Optional**: Public or login required (configurable)
- Some features require authentication (edit, delete, coordinator actions)

## Layout & Structure

### Header
- Standard site header
- Breadcrumb: Home > Observations > Observation #12345

### Page Title Section
**Content**
- Badge: "Observation #12345"
- H1: Location name (e.g., "Location #5 - Highway Drainage North")
- Date and time: "Observed on November 22, 2025 at 10:30 AM"

---

## Main Content Area

Two-column layout on desktop, single column on mobile:
- **Left Column**: Observation details (70% width)
- **Right Column**: Context sidebar (30% width)

---

## Left Column: Observation Details

### Observer Information

**Card/Section:**
- Avatar: User profile image or placeholder
- Name: "John Smith" or "Anonymous Observer"
- Badge: "Verified Monitor" (if applicable)
- Member since: "Member since Oct 2025"
- Contribution count: "15 observations"
- Link: View observer's profile (if public)

**Coordinator View Only:**
- Contact info: Email, phone (if provided)
- IP address
- User ID
- Edit access button

### Weather Conditions

**Section Title**: "Weather Conditions"

**Visual Display:**
- Weather icons representing conditions
- Grid or card layout:
  - Conditions: Heavy rain, Overcast
  - Duration: 1-3 hours
  - Intensity: Heavy rain
  - Temperature: (if recorded)
  
**Additional Weather Notes:**
- Display verbatim if provided
- Styled as callout or quote

### Evidence Observed

**Section Title**: "Evidence Documented"

**Visual Display:**
- Badge/chip for each evidence type:
  - ✓ Active Flow
  - ✓ Pooling/Standing Water
  - ✓ Drainage Entry Points
- Icons with labels
- Color-coded for quick scanning

**Description for each type** (if provided):
- Expandable sections with details

### Observation Notes

**Section Title**: "Detailed Observations"

**Content:**
- Full text of observation notes
- Formatted with paragraphs
- Preserve line breaks
- Highlight keywords (optional): water, flow, drain, etc.
- Text size: readable, 16-18px

**Word count**: "450 words"

### Research Question Response

**Section Title**: "Response to Research Question"

**Display:**
- Show the location's research question in emphasized style
- Example: *"Is runoff from land to the north flowing onto the highway and into the drainage gullies?"*
- Separator line
- Observer's response in full
- Quick response indicator if provided:
  - ✓ Yes, clear evidence
  - → Some evidence, unclear
  - ✗ No evidence
  - ? Unable to determine

### Photos and Videos

**Section Title**: "Visual Evidence ([X] items)"

**Gallery Layout:**
- Masonry or grid layout
- Photo thumbnails: 200-300px width
- Video thumbnails with play button overlay
- Hover: show overlay with view icon

**Click behavior:**
- Open lightbox/modal
- Show full-resolution image/video
- Navigation: prev/next arrows
- Zoom functionality for images
- Download option
- Fullscreen option

**Lightbox Features:**
- Image counter: "3 of 12"
- Caption: display if provided
- EXIF data viewer (toggle):
  - Camera model
  - Timestamp
  - GPS coordinates
  - Settings (aperture, shutter, ISO)
- Close button: X or ESC key

**Video Player:**
- Play/pause controls
- Volume control
- Fullscreen
- Quality selector (if multiple versions)
- Playback speed

**No Media State:**
- Icon: Camera with X
- Text: "No photos or videos were uploaded with this observation"

### Additional Information

**Collapsible Section** (if data provided)

**Access Difficulty:**
- Icon + label: "Easy access (roadside)"

**Safety Concerns:**
- ⚠️ Warning icon if present
- Text of safety notes

**Compared to Previous:**
- Icon: Trend arrow
- Text: "More severe than usual"

**Additional Notes:**
- Any other context provided

### Metadata

**Small text section** at bottom:
- Submitted: "Nov 22, 2025 at 10:35 AM"
- Last updated: "Nov 22, 2025 at 11:00 AM" (if edited)
- Observation ID: "obs_12345"
- Verification status: Badge (Verified, Pending, Flagged)

---

## Right Column: Context Sidebar

### Location Map

**Interactive Map Card:**
- Small map centered on observation location
- Single marker showing exact spot
- Zoom controls
- Link: "View larger map"
- Link: "Get directions" (opens Google Maps)

**Location Details:**
- Coordinates: lat, lng (with copy button)
- Address: (if available)
- Area: Dartington, Totnes

### Research Question

**Card:**
- Title: "Research Focus"
- Full research question for this location
- Icon: Question mark or research icon

### Location Statistics

**Card:**
- Title: "Location #5 Statistics"
- Total observations: 24
- Last observed: "2 days ago"
- Most common evidence: "Active flow, Pooling"
- Link: "View all observations at this location"

### Related Observations

**Card:**
- Title: "Other Observations Here"
- List of 3-5 most recent observations at same location
- Each shows:
  - Date
  - Observer name (if public)
  - Thumbnail
  - Brief excerpt
- Link: "View all [24] observations"

### Weather Context

**Card** (if available):
- Title: "Weather Data"
- Rainfall data for the day/week
- Link to weather service
- Graph showing precipitation (future)

---

## Action Buttons Section

Fixed action bar at bottom of content (mobile) or button group (desktop)

### Public/Monitor Actions
- Button: "SHARE" - share this observation
  - Opens share modal with:
    - Copy link
    - Social media options
    - Email link
- Button: "PRINT" - printer-friendly view

### Owner Actions (if current user is observer)
- Button: "EDIT" (if within 24 hours)
  - Opens edit form
- Button: "DELETE" (with confirmation)
  - Modal: "Are you sure? This cannot be undone."
  - Require password confirmation

### Coordinator Actions (coordinators only)
- Button: "VERIFY" (if not verified)
- Button: "FLAG FOR REVIEW"
- Button: "ADD INTERNAL NOTE"
- Button: "DOWNLOAD DATA"
- Dropdown: "MORE ACTIONS"
  - Contact observer
  - View history
  - Change visibility
  - Merge with another observation

---

## Responsive Behavior

### Desktop (≥992px)
- Two-column layout
- Sidebar sticky (scrolls with content)
- Large image gallery
- Full-width map in sidebar

### Tablet (576px - 991px)
- Sidebar below main content
- Gallery: 2-3 columns
- Adjusted spacing

### Mobile (≤575px)
- Single column
- Stacked layout
- Gallery: 2 columns
- Smaller map
- Fixed action bar at bottom

## Interactions & Behaviors

### Image Gallery
- Click: open lightbox
- Keyboard: arrow keys navigate
- Swipe: navigate on mobile
- Pinch zoom: on mobile

### Share Modal
- Copy link: click to copy, show "Copied!"
- Social: open in new window
- Close: click outside or X button

### Edit/Delete
- Edit: navigate to edit form with pre-populated data
- Delete: require confirmation, show loading, redirect after success

### Verification (Coordinator)
- Click verify: show confirmation
- Add note (optional)
- Update status immediately

## Accessibility Requirements

### Structure
- Semantic HTML: article, sections, headings
- Proper heading hierarchy (H1 → H2 → H3)
- Landmarks: main, aside, navigation

### Images
- Alt text for all images
- Descriptive captions
- High-contrast borders

### Interactive Elements
- All buttons keyboard accessible
- Focus indicators visible
- ARIA labels for icon buttons
- Screen reader announcements for actions

### Media
- Keyboard controls for video
- Captions for videos (future)
- Transcripts (future)

## SEO Requirements

### Meta Tags
- Title: "Observation at [Location Name] - [Date]"
- Description: First 160 characters of observation notes
- Keywords: location, evidence types, date

### Structured Data
- Article schema
- Place schema for location
- ImageObject schema for photos
- VideoObject schema for videos

### Social Sharing
- Open Graph tags
- Twitter Card tags
- Share image: first photo or placeholder

## API Integration

### Get Observation Detail
**GET** `/api/observations/:id`

**Response:**
```json
{
  "id": "obs_12345",
  "location": {
    "id": 5,
    "number": 5,
    "name": "Highway Drainage North",
    "researchQuestion": "Is runoff from land...",
    "coordinates": { "lat": 50.446551, "lng": -3.709278 }
  },
  "observer": {
    "id": "user_456",
    "name": "John Smith",
    "anonymous": false,
    "memberSince": "2025-10-01",
    "observationCount": 15
  },
  "observedAt": "2025-11-22T10:30:00Z",
  "weather": {
    "conditions": ["heavy-rain", "overcast"],
    "duration": "1-3-hours",
    "intensity": "heavy",
    "notes": "Rain started 30 minutes ago"
  },
  "evidenceTypes": ["active-flow", "pooling", "drainage-entry"],
  "notes": "Full observation text...",
  "questionResponse": "Yes, clear evidence...",
  "quickResponse": "yes-clear",
  "media": [
    {
      "id": "media_1",
      "type": "image",
      "thumbnail": "url",
      "full": "url",
      "caption": "Water entering drain",
      "metadata": { /* EXIF data */ }
    }
  ],
  "additionalInfo": {
    "accessDifficulty": "easy",
    "safetyNotes": "Watch for traffic",
    "comparedToPrevious": "more-severe",
    "additionalNotes": "..."
  },
  "verification": {
    "status": "verified",
    "verifiedBy": "coordinator_789",
    "verifiedAt": "2025-11-22T14:00:00Z"
  },
  "metadata": {
    "submittedAt": "2025-11-22T10:35:00Z",
    "lastModified": "2025-11-22T11:00:00Z"
  }
}
```

### Related Observations
**GET** `/api/observations/:id/related`

### Update Observation
**PUT** `/api/observations/:id`
(Owner only, within timeframe)

### Delete Observation
**DELETE** `/api/observations/:id`
(Owner or coordinator only)

### Verify Observation
**POST** `/api/observations/:id/verify`
(Coordinators only)

## Analytics & Tracking

### Events to Track
- Page viewed
- Media viewed (photo/video)
- Share button clicked
- External links clicked (directions, etc.)
- Edit initiated
- Delete initiated
- Related observation clicked
- Time on page

## Performance Considerations

### Image Loading
- Lazy load images below fold
- Progressive image loading
- Optimized thumbnails
- Full-res loaded on demand

### Video
- Lazy load video player
- Streaming for large videos
- Multiple quality options

### Map
- Lazy load map library
- Cache map tiles
- Optimize marker rendering

## Security Considerations

### Data Privacy
- Hide observer contact info from public
- Obfuscate coordinates if needed
- EXIF stripping option

### Access Control
- Verify ownership for edit/delete
- Verify coordinator role for admin actions
- Rate limit API calls

### Content Security
- Sanitize displayed text (XSS prevention)
- Content security policy for embedded media
- Validate image/video sources

## Future Enhancements
- Comments/discussion thread
- Reactions (helpful, interesting, etc.)
- Comparison view (side-by-side with other observations)
- Timeline view (all observations at location chronologically)
- Weather data overlay
- 3D view (if elevation data available)
- Augmented reality view (mobile)
- Download as PDF
- Citation generator for research
- Version history (if edited)
- Related scientific data integration
