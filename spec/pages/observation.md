# Make Observation Page Specification

## Purpose
Allow authenticated monitors to record detailed observations at a specific location, including weather conditions, evidence types, written notes, and photo/video uploads.

## Target Audience
- Registered volunteer monitors
- Users responding to observation request emails
- Active contributors making regular observations

## Page URL
`/observation/new` or `/observe`
`/observation/new?location=5` (pre-selected location)

## Authentication
- **Required**: User must be logged in
- Redirect to `/login?returnTo=/observation/new` if not authenticated

## Layout & Structure

### Header
- Standard site header
- Breadcrumb: Home > Locations > Make Observation

### Page Title Section
**Content**
- H1: "Record Your Observation"
- Subtitle: "Document water flow and drainage patterns to help our research"
- Context banner (if from email): "⚠️ Heavy rain forecast - Observations needed within 24 hours"

### Progress Indicator
Multi-step form indicator (optional but recommended):
1. Select Location
2. Observation Details
3. Upload Media
4. Review & Submit

Stepper shows current step highlighted

---

## Form Structure

Form organized in clear sections with visual separation

---

## Section 1: Location Selection

### If Location Pre-selected (from URL parameter)
**Display**:
- Card showing selected location:
  - Location #[X]
  - Location name
  - Research question in emphasized text
  - Small map showing location
- Button: "Change Location" (opens location selector)

### If No Location Pre-selected
**Display**:
- H3: "Select Observation Location *"
- Two selection methods (tabs or buttons):

**Method 1: Map Selection**
- Interactive map showing all 20 locations
- Click marker to select location
- Selected marker highlighted in yellow
- Info popup shows location details

**Method 2: List Selection**
- Dropdown/searchable select:
  - Option format: "#1 - Highway Drainage North"
  - Grouped by area (if applicable)
  - Search functionality
- Show research question when location selected

**Validation**
- Location must be selected to continue
- Error message: "Please select an observation location"

---

## Section 2: Observation Details

### Date and Time

**Observation Date & Time** (Required)
- Combined date-time picker
- Default: Current date and time (auto-populated)
- Can be edited if observing past event
- Label: "When did you make this observation? *"
- Note: "Set to now, or adjust if observing historical evidence"

**Validation**
- Cannot be future date
- Warning if date > 7 days ago: "Are you sure? Observations are most valuable when recent."

### Weather Conditions

**Heading**: "Weather Conditions *"
**Description**: "What was the weather like when you observed?"

**Weather at Time of Observation** (Required, checkboxes - multiple selection)
- ☔ Heavy rain
- 🌧️ Light rain
- 🌤️ Recently stopped raining
- ⛅ Dry (observing past evidence)
- 🌫️ Overcast
- ☀️ Sunny/clear

**Rain Duration** (Conditional - shows if rain selected)
- Radio buttons:
  - Less than 1 hour
  - 1-3 hours
  - 3-6 hours
  - More than 6 hours
  - Multiple days

**Rain Intensity** (Conditional - shows if rain selected)
- Radio buttons or slider:
  - Light drizzle
  - Moderate rain
  - Heavy rain
  - Very heavy/torrential

**Additional Weather Notes** (Optional)
- Textarea
- Placeholder: "e.g., rain started 30 minutes ago, wind from the north"
- Character limit: 200
- Character counter

### Evidence Types Observed

**Heading**: "What Evidence Did You Observe? *"
**Description**: "Select all that apply. These help us understand water movement patterns."

**Checkboxes** (Required - at least one):
- ✓ **Active Flow**: Water actively flowing (during/shortly after rain)
- ✓ **Pooling/Standing Water**: Water accumulating in specific areas
- ✓ **Erosion Patterns**: Bare soil, gullies, washouts from water movement
- ✓ **Sediment Deposits**: Silt, debris, or sediment accumulation
- ✓ **Water Staining**: Discoloration showing past water flow paths
- ✓ **Drainage Entry Points**: Water entering gullies, manholes, or drains
- ✓ **Highway/Road Runoff**: Water flowing on or along roads
- ✓ **Other** (specify) - opens text input

**Other Evidence Description** (Conditional text input)
- Shows if "Other" checked
- Required if Other selected
- Placeholder: "Describe what you observed"

**Validation**
- At least one evidence type must be selected
- Error: "Please select at least one type of evidence observed"

### Observation Details

**Heading**: "Detailed Observation Notes *"
**Description**: "Describe what you saw. Be as specific as possible about water flow, sources, and destinations."

**Textarea** (Required)
- Rows: 8
- Placeholder: "Describe:
  - Where water is coming from (land, roads, fields)
  - Flow patterns and direction
  - Where water is going (drains, pooling, flowing away)
  - Intensity and volume
  - Any interactions with infrastructure
  - Anything relevant to the research question"
- Character limit: 2000
- Character counter
- Minimum: 50 characters

**Validation**
- Required field
- Minimum 50 characters
- Error: "Please provide detailed observation notes (minimum 50 characters)"

### Location-Specific Questions

**Heading**: "Answer the Research Question"
**Display**: Show the specific research question for selected location

**Question Response** (Required)
- Textarea
- Placeholder: "Based on your observation, answer the specific question for this location"
- Character limit: 1000
- Minimum: 20 characters

Example questions:
- Location 1: "Is runoff from land to the north flowing onto the highway and into the drainage gullies?"
- Answer should directly address this

**Quick Response Options** (Optional, to help users)
- Radio buttons first:
  - ✓ Yes, clear evidence
  - → Some evidence, unclear
  - ✗ No evidence
  - ? Unable to determine
- Then textarea for explanation (required regardless of selection)

---

## Section 3: Upload Photos and Videos

### Media Upload Area

**Heading**: "Upload Photos or Videos"
**Description**: "Visual evidence is extremely valuable. Upload photos/videos showing water flow, drainage patterns, or other evidence."

**Upload Component**
- Drag-and-drop area (large, visually clear)
- "Click to browse" alternative
- Multiple file upload supported
- File types accepted: .jpg, .jpeg, .png, .heic, .mp4, .mov
- File size limits:
  - Photos: 10MB each
  - Videos: 100MB each
- Total uploads: up to 20 files

**Upload States**
- Default: "Drag photos/videos here or click to browse"
- Hover: Highlight border when dragging over
- Uploading: Progress bar for each file
- Success: Thumbnail preview with checkmark
- Error: Red border with error message

**Preview Grid**
Once uploaded, show grid of thumbnails:
- Thumbnail size: 120px x 120px
- Show file name below thumbnail
- Actions on hover:
  - View full size (modal)
  - Delete (with confirmation)
  - Reorder (drag to reorder)

**Image Annotation** (Optional, advanced feature)
- Click thumbnail to open annotation tool
- Draw arrows, circles, add text labels
- Highlight areas of interest

**Video Thumbnail**
- Show video duration
- Play icon overlay
- First frame as thumbnail

**Metadata Capture**
- Automatically extract EXIF data from photos:
  - GPS coordinates (if available)
  - Timestamp
  - Device info
- Ask permission: "Allow location data from photos?"

**Validation**
- Not required, but highly encouraged
- Warning if no media: "📷 Consider adding photos/videos to support your observation"

---

## Section 4: Additional Information (Optional)

**Collapsible/Accordion Section**

### Accessibility & Safety

**Access Difficulty** (Optional)
- Radio buttons:
  - Easy (roadside, public access)
  - Moderate (short walk, public footpath)
  - Difficult (private land, challenging terrain)

**Safety Concerns** (Optional)
- Textarea
- Placeholder: "Note any safety concerns for future observers (traffic, slippery surfaces, private property, etc.)"
- Character limit: 300

### Additional Context

**Compared to Previous Observations** (Optional)
- Radio buttons:
  - First time at this location
  - Similar to previous observations
  - More severe than usual
  - Less severe than usual

**Additional Notes** (Optional)
- Textarea
- Placeholder: "Any other relevant information"
- Character limit: 500

---

## Form Actions

### Bottom Action Bar
Fixed to bottom on mobile, regular position on desktop

**Save as Draft** (Optional button)
- Text: "SAVE DRAFT"
- Style: Secondary button
- Saves to localStorage or database
- Shows confirmation: "Draft saved"

**Cancel**
- Text: "Cancel"
- Style: Text link
- Confirmation if form has data: "Are you sure? Your observation will not be saved."

**Submit Observation** (Primary button)
- Text: "SUBMIT OBSERVATION"
- Style: Primary button (yellow #FFD00A)
- Full width on mobile
- Loading state: "SUBMITTING..." with spinner
- Disabled until required fields complete

### Form Validation

**Real-time Validation**
- Validate on blur (when field loses focus)
- Show errors immediately
- Show success checkmarks for valid fields

**Submit Validation**
- Check all required fields
- Scroll to first error
- Highlight missing fields in red
- Show summary error at top: "Please complete all required fields marked with *"

---

## Post-Submission Flow

### Success Page/Modal

**Heading**: "✓ Observation Submitted Successfully!"

**Content**:
- Thank you message: "Thank you for your contribution! Your observation has been recorded."
- Confirmation details:
  - Location observed
  - Date and time
  - Number of photos/videos uploaded
- Reference number: "Observation #12345"

**Next Actions**:
- Button: "MAKE ANOTHER OBSERVATION" (returns to form, resets)
- Button: "VIEW MY OBSERVATIONS" (goes to account page)
- Link: "Return to locations"
- Link: "View all observations at this location"

**Share Options** (Optional)
- "Share your contribution" social sharing buttons
- Note: doesn't share details, just generic message

**Email Confirmation**
- Text: "A confirmation email has been sent to [email]"

---

## Responsive Behavior

### Desktop (≥992px)
- Form: max-width 800px, centered
- Two-column layout where appropriate (date/time side by side)
- Side-by-side for weather checkboxes
- Large media upload area

### Tablet (576px - 991px)
- Form: 90% width
- Mostly single column
- Adjusted spacing

### Mobile (≤575px)
- Form: 95% width
- Single column layout
- Stacked fields
- Full-width buttons
- Simplified date-time picker
- Smaller media thumbnails (3 per row)
- Fixed bottom action bar

## Accessibility Requirements

### Form Accessibility
- All fields properly labeled
- Required fields indicated with * and aria-required
- Error messages associated with fields (aria-describedby)
- Fieldsets for grouped options (weather, evidence)
- Keyboard accessible throughout

### Media Upload
- Keyboard accessible (Enter to activate file dialog)
- Screen reader announces upload status
- Alternative text for uploaded images
- Video transcripts (future consideration)

### Progress Indicator
- ARIA attributes for stepper
- Current step announced by screen reader

## Validation & Error Handling

### Field-Level Errors
- Display below each field
- Red color with icon
- Clear, actionable messages

### Form-Level Errors
- Summary at top of form
- Links to specific errors
- "Please fix the following errors:"

### Success States
- Green checkmark for valid fields
- Brief success message after submission

## Security Considerations

### File Upload Security
- Validate file types server-side
- Scan for malware
- Strip EXIF data on server (except GPS, timestamp)
- Generate thumbnails server-side
- Store original and processed versions

### Data Validation
- Sanitize all text inputs
- Validate date/time ranges
- Verify location ID exists
- Check user authentication on submit

### CSRF Protection
- Include CSRF token in form
- Validate on server

## API Integration

### Submit Observation
**POST** `/api/observations`

**Request** (multipart/form-data):
```json
{
  "locationId": 5,
  "observedAt": "2025-11-22T10:30:00Z",
  "weather": {
    "conditions": ["heavy-rain", "overcast"],
    "duration": "1-3-hours",
    "intensity": "heavy"
  },
  "evidenceTypes": ["active-flow", "pooling", "drainage-entry"],
  "detailsNotes": "Water flowing heavily from north field...",
  "questionResponse": "Yes, clear evidence of runoff entering gullies...",
  "quickResponse": "yes-clear",
  "additionalInfo": {
    "accessDifficulty": "easy",
    "comparedToPrevious": "more-severe"
  },
  "files": [/* file uploads */]
}
```

**Response (201):**
```json
{
  "success": true,
  "observationId": "obs_12345",
  "message": "Observation submitted successfully",
  "confirmationEmail": "sent"
}
```

### Save Draft
**POST** `/api/observations/draft`

### Upload Media
**POST** `/api/observations/media`
(May be separate endpoint for progressive upload)

## Analytics & Tracking

### Events to Track
- Form started
- Location selected
- Each section completed
- Draft saved
- Media uploaded (count)
- Form submitted
- Time to complete
- Abandonment (if draft not submitted)

### Observation Metrics
- Average observation length
- Most common evidence types
- Media upload rate
- Completion rate

## Performance Considerations

### Form Performance
- Progressive enhancement
- Autosave drafts periodically
- Optimize file uploads (compress images client-side)
- Lazy load map if not immediately visible

### File Handling
- Client-side image compression before upload
- Progressive upload (start uploading while form filling)
- Background upload (don't block submission)

## Future Enhancements
- Voice-to-text for observation notes
- Offline support (save draft locally, submit when online)
- Photo/video capture directly from camera
- GPS-based automatic location selection
- Templates/quick responses for common observations
- Collaborative observations (multiple users)
- Real-time weather data integration
- Suggested times to observe based on forecast
