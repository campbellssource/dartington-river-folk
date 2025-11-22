# Coordinator Dashboard Specification

## Purpose
Provide coordinators with an overview of all monitoring activity, recent observations, monitor engagement, and quick access to management tools.

## Target Audience
- Project coordinators
- Study administrators
- Research team members with elevated permissions

## Page URL
`/coordinator` or `/dashboard` or `/admin`

## Authentication & Authorization
- **Required**: Must be logged in
- **Role Required**: Coordinator role
- Redirect to `/login` if not authenticated
- Show 403 error if logged in but not coordinator

## Layout & Structure

### Header
- Standard site header
- Additional indicator: Badge showing "Coordinator"
- Quick links: Manage Locations, View All Observations, Send Notification

### Page Title
- H1: "Coordinator Dashboard"
- Subtitle: "Monitor and manage the Heavy Rain Monitoring study"
- Date range selector: Last 7 days (default) | Last 30 days | All time | Custom

---

## Dashboard Layout

Grid of cards and sections organized by priority and frequency of use

---

## Section 1: Key Metrics (Top)

Grid of 4-6 stat cards showing high-level KPIs

**Card 1: Total Observations**
- Large number: Total count
- Trend indicator: ↑ +5 from previous period
- Icon: Clipboard
- Click: View all observations

**Card 2: Active Monitors**
- Number: Active users (submitted in date range)
- Total registered users below
- Icon: People
- Click: View monitor list

**Card 3: Locations Covered**
- Fraction: "18 of 20 locations"
- Progress bar
- Icon: Map pin
- Click: View locations map

**Card 4: Pending Reviews**
- Number: Observations awaiting review
- Urgency indicator if > threshold
- Icon: Clock
- Click: View pending observations

**Card 5: Recent Media**
- Number: Photos/videos uploaded
- Icon: Camera
- Click: View media gallery

**Card 6: Alerts**
- Number: Items needing attention
- Icon: Alert bell
- Click: View alerts list

---

## Section 2: Quick Actions

Button row with common coordinator tasks:
- "SEND OBSERVATION REQUEST" (primary button)
- "ADD NEW LOCATION"
- "EXPORT DATA"
- "MANAGE MONITORS"
- "VIEW REPORTS"

---

## Section 3: Recent Observations

**Title**: "Recent Observations"
**Subtitle**: "Last 10 submissions"

**Table or Card List:**

Each row/card shows:
- Timestamp: "2 hours ago"
- Location: "#5 - Highway Drainage"
- Observer: Name with avatar
- Status: Badge (New, Verified, Flagged)
- Media: Icon showing count of photos/videos
- Quick actions:
  - View (eye icon)
  - Verify (checkmark icon)
  - Flag (flag icon)

**Filtering:**
- Toggle: "Show only unverified"
- Toggle: "Show only flagged"

**Footer:**
- Link: "View all observations"

---

## Section 4: Activity Timeline

**Title**: "Recent Activity"

**Timeline view showing:**
- New observations submitted
- New monitors registered
- Observations verified
- Locations updated
- Notifications sent

**Each item shows:**
- Icon indicating activity type
- Description: "John Smith submitted observation at Location #5"
- Timestamp: "10 minutes ago"
- Link to related item (if applicable)

**Load more:** "Show earlier activity"

---

## Section 5: Monitor Engagement

**Title**: "Monitor Participation"

**Stats:**
- Total registered: 45 monitors
- Active (last 7 days): 12 monitors
- Inactive (>30 days): 8 monitors
- Average observations per monitor: 3.2

**Chart/Visualization:**
- Bar chart: Observations by monitor (top 10)
- Or line chart: Observations over time

**Most Active Monitors:**
- List of top 5 contributors
- Each shows: name, observation count, last active
- "View all monitors" link

**Engagement Actions:**
- Button: "Send Thank You Email"
- Button: "Remind Inactive Monitors"

---

## Section 6: Location Coverage

**Title**: "Observation Coverage by Location"

**Visualization:**
- Heat map or bar chart showing observation count per location
- Color-coded:
  - Green: Well covered (>10 observations)
  - Yellow: Moderate (5-10 observations)
  - Orange: Sparse (1-4 observations)
  - Red: No observations

**Table or List:**
Each location shows:
- Number and name
- Observation count
- Last observed date
- Status: "Needs more observations" or "Well documented"
- Quick action: "Request observations here"

**Footer:**
- Link: "Manage locations"

---

## Section 7: Weather & Alerts

**Title**: "Weather & Observation Requests"

**Current Weather:**
- Display current weather for study area
- 7-day forecast
- Rainfall predictions
- Data source: Weather API integration

**Active Observation Requests:**
- List of current requests sent to monitors
- Each shows:
  - Sent: date/time
  - Recipients: count
  - Locations: which locations
  - Responses: count of submissions
  - Status: Active, Expired
- Actions:
  - Resend
  - Edit
  - Cancel

**Quick Action:**
- Button: "SEND NEW OBSERVATION REQUEST"
  - Opens modal/form:
    - Select locations (all or specific)
    - Select monitors (all, location-based, specific)
    - Message template with personalization
    - Urgency level
    - Expiry time
    - Preview before sending

---

## Section 8: Data Quality

**Title**: "Data Quality Insights"

**Metrics:**
- Observations with photos: 85%
- Observations with videos: 45%
- Average note length: 280 words
- Complete responses: 92%

**Issues to Address:**
- Observations without media: [count]
- Very brief observations (<50 words): [count]
- Incomplete responses: [count]
- Duplicate observations: [count]

**Actions:**
- Link: "Review flagged observations"
- Link: "Contact observers for clarification"

---

## Section 9: System Status

**Title**: "System Health"

**Status Indicators:**
- ✓ Database: Operational
- ✓ File storage: 45% used (22GB of 50GB)
- ✓ Email service: Operational
- ⚠ Map service: Degraded (if issues)

**Recent Actions:**
- Data backup: Last run 2 hours ago
- Email queue: 3 pending
- Export jobs: None running

**Admin Actions:**
- Link: "Run manual backup"
- Link: "Clear cache"
- Link: "View system logs"

---

## Responsive Behavior

### Desktop (≥992px)
- Multi-column grid layout
- All sections visible
- Charts and visualizations full-size

### Tablet (576px - 991px)
- 2-column grid for metrics
- Stacked sections
- Simplified charts

### Mobile (≤575px)
- Single column layout
- Metric cards stack vertically
- Simplified tables (card view)
- Collapsible sections

## Interactions & Behaviors

### Auto-Refresh
- Dashboard auto-refreshes every 5 minutes
- Show "Updated X seconds ago" timestamp
- Manual refresh button

### Date Range Selector
- Changes affect all metrics and charts
- Smooth transition when changing
- Persist selection

### Quick Actions
- Modal dialogs for complex actions
- Inline editing where appropriate
- Confirmation for destructive actions

### Notifications
- Real-time notification badge in header
- Toast notifications for new activity
- Sound alert (optional, user preference)

## Accessibility Requirements

### Dashboard Structure
- Skip links to main sections
- Proper heading hierarchy
- ARIA landmarks for sections

### Data Visualizations
- Alternative text descriptions
- Data tables as alternatives to charts
- Keyboard navigation for interactive charts

### Interactive Elements
- All actions keyboard accessible
- Focus indicators visible
- Clear button labels

## Security Considerations

### Access Control
- Verify coordinator role on every request
- Log all coordinator actions
- Sensitive data access logged

### Data Privacy
- Aggregate data where possible
- Hide sensitive observer info
- Export audit trail

## API Integration

### Get Dashboard Data
**GET** `/api/coordinator/dashboard?dateRange=7d`

**Response:**
```json
{
  "metrics": {
    "totalObservations": 145,
    "activeMonitors": 12,
    "locationsCovered": 18,
    "pendingReviews": 5
  },
  "recentObservations": [...],
  "activityTimeline": [...],
  "monitorEngagement": {...},
  "locationCoverage": [...],
  "weatherAlerts": {...},
  "dataQuality": {...},
  "systemStatus": {...}
}
```

### Send Observation Request
**POST** `/api/coordinator/send-request`

### Export Data
**GET** `/api/coordinator/export?format=csv&dateRange=30d`

## Analytics & Tracking

### Events to Track
- Dashboard viewed
- Date range changed
- Quick action clicked
- Observation verified/flagged
- Request sent
- Export generated
- Section expanded/collapsed

## Performance Considerations

### Data Loading
- Cache dashboard data (5 min TTL)
- Lazy load charts
- Paginate large lists
- Progressive loading

### Visualizations
- Optimize chart rendering
- Use canvas for complex charts
- Responsive chart libraries

## Future Enhancements
- Custom dashboard layouts
- Drag-and-drop widgets
- Scheduled reports
- Mobile app for coordinators
- Real-time collaboration
- AI-powered insights
- Automated anomaly detection
- Integration with GIS systems
- Advanced analytics and predictions
- Multi-study management
- Role-based dashboards (different views for different coordinator types)
