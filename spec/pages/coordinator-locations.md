# Coordinator Location Management Page Specification

## Purpose
Allow coordinators to create, edit, and manage the 20 observation locations, including research questions, descriptions, coordinates, and status.

## Target Audience
- Project coordinators
- Study administrators
- Research team setting up or modifying observation sites

## Page URL
`/coordinator/locations` or `/admin/locations`

## Authentication & Authorization
- **Required**: Must be logged in
- **Role Required**: Coordinator role
- Redirect to `/login` if not authenticated
- Show 403 error if not coordinator

## Layout & Structure

### Header
- Standard site header with coordinator badge
- Breadcrumb: Dashboard > Manage Locations

### Page Title
- H1: "Manage Observation Locations"
- Subtitle: "Configure the 20 observation sites for the Heavy Rain Monitoring study"
- Stats: "20 locations • 18 active • 145 total observations"

### Action Bar
**Buttons:**
- "ADD NEW LOCATION" (primary button)
- "IMPORT LOCATIONS" (from CSV/JSON)
- "EXPORT LOCATIONS" (to CSV/JSON)
- "VIEW PUBLIC MAP" (opens public locations page)

---

## Main Content Layout

Two-pane or tabbed interface:
- **Left**: Interactive map view
- **Right**: Location list/editor
- **Toggle**: Switch between map-focused and list-focused views

---

## Interactive Map Section

### Map Display
- Full map of study area
- All 20 locations shown as markers
- Numbered markers (1-20)
- Color-coded by status:
  - Green: Active
  - Grey: Inactive
  - Orange: Draft/incomplete
  - Red: Has issues/flagged

### Map Interactions

**Add New Location:**
- Button above map: "Click map to add location"
- Cursor changes to crosshair
- Click anywhere: places temporary marker
- Opens location form with coordinates pre-filled

**Edit Existing Location:**
- Click marker: shows popup with:
  - Location number and name
  - Status badge
  - Quick stats: observation count
  - Actions: Edit, Delete, Toggle Active/Inactive
- Edit button: opens location form
- Drag marker: repositions location (with confirmation)

**Map Controls:**
- Zoom in/out
- Full screen
- Drawing tools (future):
  - Draw area polygon around location
  - Add notes on map
- Layer toggles:
  - Show observation heatmap
  - Show elevation
  - Show street view

### Map Markers
- Custom numbered markers
- Size indicates importance/priority
- Badge showing observation count
- Hover: tooltip with location name
- Selected: highlighted with yellow border

---

## Location List Section

### List Header
**Search & Filter:**
- Search bar: "Search locations..."
- Filters:
  - Status: All, Active, Inactive, Draft
  - Observation count: All, >10, 5-10, <5, None
  - Sort by: Number, Name, Most observations, Least observations, Recently updated

**Results:** "Showing 20 locations"

### Location List/Table

**Table Columns:**
1. **Number**: Location #
2. **Name**: Location name (editable inline)
3. **Status**: Badge (Active/Inactive/Draft)
4. **Observations**: Count (link to view observations)
5. **Last Observed**: Date or "Never"
6. **Last Updated**: Date (by coordinator)
7. **Actions**: Quick action buttons

**Row Styling:**
- Zebra striping for readability
- Hover: highlight row
- Selected: bold border
- Click row: open in editor

**Quick Actions** (icon buttons per row):
- 👁️ View details
- ✏️ Edit
- 📍 Center on map
- 📊 View observations
- 🗑️ Delete (with confirmation)
- ⚡ Quick toggle active/inactive

### Bulk Actions
**Checkboxes** per row to select multiple:
- "Select All" checkbox in header
- Actions for selected:
  - Set as active
  - Set as inactive
  - Delete selected (with confirmation)
  - Export selected

---

## Location Editor (Slide-in Panel or Modal)

Opens when adding new or editing existing location

### Form Sections

#### Section 1: Basic Information

**Location Number** (Required)
- Input: number
- Label: "Location Number *"
- Range: 1-99
- Validation: Must be unique
- Helper: "Corresponds to site numbers in study plan"
- Auto-increment suggestion for new locations

**Location Name** (Optional but recommended)
- Input: text
- Label: "Location Name"
- Placeholder: "e.g., Highway Drainage North"
- Character limit: 100
- Helper: "Descriptive name for easy identification"

**Status** (Required)
- Radio buttons or toggle:
  - Active: Visible to monitors, observations enabled
  - Inactive: Hidden from monitors, observations disabled
  - Draft: Visible to coordinators only
- Default: Draft (for new locations)

**Priority Level** (Optional)
- Dropdown:
  - Critical
  - High
  - Normal (default)
  - Low
- Affects display order and notification priority

#### Section 2: Location & Coordinates

**Map Selector:**
- Small interactive map
- Marker showing current position
- Click or drag to adjust
- "Use my current location" button (geolocation)

**Coordinates** (Required)
- Latitude: Input field (e.g., 50.446551)
- Longitude: Input field (e.g., -3.709278)
- Validation: Valid coordinate format
- "Get from map" button
- "Validate coordinates" button (checks if valid UK coordinates)

**Address/Directions** (Optional)
- Textarea
- Label: "Address or Directions to Location"
- Placeholder: "e.g., Off A384, near Dartington Hall entrance"
- Character limit: 300
- Helper: "Help monitors find the location"

**Area/Boundary** (Optional, advanced)
- Draw polygon on map to define observation area
- Store as GeoJSON
- Display on public map as shaded area

#### Section 3: Research Question

**Research Question** (Required)
- Textarea
- Label: "What Question Are We Answering at This Location? *"
- Placeholder: "e.g., Is runoff from land to the north flowing onto the highway and into the drainage gullies?"
- Character limit: 500
- Rich text editor (optional): bold, italic, lists
- Helper: "This question will be shown to monitors when observing"

**Background/Context** (Optional)
- Textarea
- Label: "Background Information"
- Placeholder: "Additional context about why this location is important..."
- Character limit: 1000
- Helper: "Detailed information for coordinators and researchers"

#### Section 4: Observation Guidance

**What to Look For** (Optional but recommended)
- Textarea or checklist
- Label: "What Should Monitors Look For?"
- Default template provided:
  - Erosion patterns
  - Sediment deposits
  - Water staining
  - Pooling areas
  - Active flow
  - Drainage entry points
- Editable per location
- Character limit: 1000

**Best Time to Observe** (Optional)
- Dropdown:
  - During heavy rain
  - Shortly after rain (within 1 hour)
  - After rain (1-6 hours)
  - Days after rain (evidence only)
  - Anytime
- Default: "During heavy rain"
- Custom text field if "Other"

**Safety Notes** (Optional)
- Textarea
- Label: "Safety Considerations"
- Placeholder: "e.g., Watch for traffic, private property, slippery surfaces"
- Character limit: 300
- Displayed prominently to monitors

#### Section 5: Access Information

**Access Type** (Optional)
- Dropdown:
  - Public access (road, footpath)
  - Permission required (private land)
  - Restricted (do not enter)
- Affects visibility to monitors

**Parking Information** (Optional)
- Text input
- Placeholder: "e.g., Roadside parking available"
- Character limit: 200

**Accessibility** (Optional)
- Checkboxes:
  - Wheelchair accessible
  - Requires hiking
  - Vehicle access only
  - No special requirements

#### Section 6: Metadata

**Created By:** Display only (system field)
**Created Date:** Display only
**Last Modified By:** Display only
**Last Modified Date:** Display only

### Form Actions

**Bottom of form:**
- Button: "SAVE LOCATION" (primary, yellow)
- Button: "SAVE AS DRAFT"
- Button: "CANCEL"
- Link: "Delete this location" (red, with confirmation)

**Validation:**
- Real-time validation as fields filled
- Highlight missing required fields
- Show error summary at top if submission fails

**Save States:**
- Loading: "Saving..." with spinner
- Success: "Location saved!" with checkmark, auto-close after 2 seconds
- Error: Display error message, keep form open

---

## Location Detail View (Read-Only)

When clicking "View details" (not editing)

**Display:**
- All location information in readable format
- Map showing location
- Statistics:
  - Total observations: count
  - First observed: date
  - Last observed: date
  - Active monitors: count
- Recent observations preview (3-5 most recent)
- Actions:
  - Edit
  - View all observations
  - Send observation request
  - Deactivate/activate

---

## Delete Location Confirmation Modal

**Title:** "Delete Location #[X]?"

**Warning:**
"⚠️ This will permanently delete this location. All existing observations at this location will be preserved but marked as archived."

**Checkbox:**
- "I understand this action cannot be undone"

**Actions:**
- Button: "CANCEL" (default focus)
- Button: "DELETE LOCATION" (red, destructive)

**Alternative** (softer option):
- Instead of delete, offer "Deactivate" which hides location but preserves all data

---

## Import Locations Feature

**Modal/Page for bulk import:**

**Upload File:**
- File input: CSV or JSON
- Template download: "Download template file"
- File format specification shown

**CSV Template Format:**
```
number,name,latitude,longitude,researchQuestion,description,status
1,Location Name,50.446551,-3.709278,"Research question here","Description",active
```

**Import Process:**
1. Upload file
2. Validate format
3. Show preview table with any errors
4. Confirm import
5. Process and save
6. Show summary: "15 locations imported, 2 errors"

**Error Handling:**
- Show row-by-row errors
- Allow fixing errors inline
- Option to skip errored rows

---

## Export Locations Feature

**Export Options:**
- Format: CSV, JSON, GeoJSON
- Include: All fields or selected fields
- Filter: Active only, all locations
- Button: "EXPORT"
- Downloads file immediately

---

## Responsive Behavior

### Desktop (≥992px)
- Side-by-side map and list
- Full editing interface
- Drag-and-drop functionality

### Tablet (576px - 991px)
- Tabbed view: Map tab, List tab
- Full forms
- Simplified editing

### Mobile (≤575px)
- Stacked layout
- List view primary
- Map in modal or separate view
- Simplified forms
- Touch-optimized

## Accessibility Requirements

### Map Accessibility
- Keyboard navigation for markers
- ARIA labels for map controls
- Screen reader descriptions
- Alternative list view always available

### Forms
- All fields labeled
- Error messages associated
- Logical tab order
- Clear focus indicators

### Tables
- Sortable column headers
- Row selection keyboard accessible
- Screen reader friendly

## Security Considerations

### Authorization
- Verify coordinator role for all actions
- Log all location changes
- Audit trail for deletions

### Data Validation
- Sanitize all text inputs
- Validate coordinates
- Prevent XSS in descriptions
- Rate limiting on saves

## API Integration

### Get All Locations (Coordinator View)
**GET** `/api/coordinator/locations`

### Get Single Location
**GET** `/api/coordinator/locations/:id`

### Create Location
**POST** `/api/coordinator/locations`

### Update Location
**PUT** `/api/coordinator/locations/:id`

### Delete Location
**DELETE** `/api/coordinator/locations/:id`

### Bulk Import
**POST** `/api/coordinator/locations/import`

### Export
**GET** `/api/coordinator/locations/export?format=csv`

### Reorder Locations
**PUT** `/api/coordinator/locations/reorder`

## Analytics & Tracking

### Events to Track
- Page viewed
- Location added
- Location edited
- Location deleted
- Location activated/deactivated
- Import/export performed
- Map interaction

## Performance Considerations

### Map Performance
- Lazy load map library
- Optimize marker rendering
- Debounce drag events
- Cache location data

### List Performance
- Virtual scrolling for large lists
- Paginate if > 50 locations
- Optimize table rendering

## Future Enhancements
- Location templates (reusable configurations)
- Location groups/categories
- Historical location changes (versioning)
- Location-based permissions (assign specific coordinators)
- Automated location suggestions based on data
- Integration with GIS systems
- Field validation with external data sources
- Mobile app for field setup (add locations on-site)
- Photo upload for location reference
- 360° view integration
- Collaborative editing (multiple coordinators)
- Change requests/approval workflow
