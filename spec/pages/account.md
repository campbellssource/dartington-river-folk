# Account/Profile Page Specification

## Purpose
Allow authenticated users to view and manage their account settings, observation history, notification preferences, and personal information.

## Target Audience
- Registered volunteer monitors
- Active users who want to update their preferences
- Users checking their observation contributions

## Page URL
`/account` or `/profile` or `/dashboard`

## Authentication
- **Required**: User must be logged in
- Redirect to `/login` if not authenticated

## Layout & Structure

### Header
- Standard site header with navigation
- User name displayed in header (e.g., "Hi, John")
- Logout option visible

### Page Title
- H1: "My Account" or "Hi, [First Name]!"
- Welcome message: "Manage your settings and view your observation history"

### Main Layout
Two-column layout on desktop, stacked on mobile:
- **Sidebar**: Navigation tabs/links (left, ~250px width)
- **Content Area**: Active section content (right, remaining width)

## Sidebar Navigation Sections

1. **Dashboard** (default/landing)
2. **My Observations**
3. **Account Settings**
4. **Notification Preferences**
5. **Privacy & Security**
6. **Help & Support**

Each section link shows icon + text, with active state highlighting

---

## Section 1: Dashboard

### Overview Stats Cards
Grid of 3-4 stat cards showing:

**Card 1: Total Observations**
- Large number: Total observations made
- Icon: Clipboard/checkmark
- Subtext: "Observations recorded"

**Card 2: Locations Visited**
- Large number: Number of unique locations observed
- Icon: Map pin
- Subtext: "Different locations"

**Card 3: Recent Activity**
- Text: "Last observation: [X days ago]"
- Icon: Clock
- Subtext: Date of last observation

**Card 4: Notifications**
- Text: "Email alerts: ON" or "OFF"
- Icon: Bell
- Link: "Manage preferences"

### Quick Actions
Button row with common actions:
- "Make New Observation" (primary button)
- "View All Observations"
- "View Locations"

### Recent Observations
**Heading**: "Your Recent Observations"
**Content**: 
- List of 5 most recent observations
- Each shows: date, location name, thumbnail image (if available)
- "View all observations" link at bottom

### Upcoming Observations
**Heading**: "Active Observation Requests"
**Content**:
- Show if coordinator has requested observations
- Display: location, urgency, timeframe
- "Make observation" button for each
- Empty state: "No active requests. Check back soon!"

---

## Section 2: My Observations

### Filters & Search
**Search Bar**
- Placeholder: "Search observations by location or notes..."
- Real-time search

**Filter Options**
- Date range picker (From/To dates)
- Location dropdown (multi-select)
- Evidence type checkboxes (erosion, sediment, etc.)
- Sort: Newest first, Oldest first, By location

**Results Count**
- Text: "Showing X observations"

### Observations List
**List View** (default)
Each observation card shows:
- Date and time
- Location name and number
- Weather conditions icon
- Evidence types (chips/badges)
- Thumbnail images (up to 3)
- Observation excerpt (first 100 characters)
- View details button

**Grid View** (toggle option)
- Thumbnail image (or placeholder)
- Location name
- Date
- Click to expand

### Observation Actions
For each observation:
- View details (opens detail modal or page)
- Edit (if within 24 hours of submission)
- Delete (with confirmation)

### Empty State
- Icon: Empty box or clipboard
- Text: "You haven't made any observations yet"
- CTA: "Make Your First Observation"

### Pagination
- Show 20 observations per page
- Standard pagination controls

---

## Section 3: Account Settings

### Personal Information

**Full Name**
- Input field with current value
- Edit button or always editable
- Save button when changed

**Email Address**
- Display current email
- "Change email" button
- Verification required for changes
- Note: "Changing your email will require verification"

**Organization/Affiliation**
- Input field (optional)
- Can be edited

**Experience/Bio**
- Textarea (optional)
- Character limit: 500
- Character counter

**Profile Visibility**
- Radio buttons:
  - "Public: Other users can see my name on observations"
  - "Anonymous: Display as 'Anonymous Observer' (coordinators can still see your info)"

### Save Changes
- Primary button: "SAVE CHANGES"
- Success message: "Profile updated successfully"
- Positioned at bottom of section

---

## Section 4: Notification Preferences

### Email Notifications

**Observation Requests**
- Toggle: ON/OFF
- Description: "Receive emails when new observations are needed (heavy rain forecast)"
- Frequency options:
  - "Immediate (as soon as request is made)"
  - "Daily digest"

**New Observation Alerts** (for coordinators)
- Toggle: ON/OFF
- Description: "Get notified when monitors submit new observations"

**Newsletter**
- Toggle: ON/OFF
- Description: "Receive occasional project updates and environmental news"

**Reminders**
- Toggle: ON/OFF
- Description: "Remind me about pending observation requests"

### Communication Settings

**Preferred Contact Method**
- Radio buttons: Email, SMS (future), Both
- Note: SMS notifications coming soon

**Quiet Hours**
- Toggle: Enable quiet hours
- Time pickers: From [time] to [time]
- Description: "Don't send notifications during these hours"

### Notification History
- Link: "View notification history"
- Opens list of recent emails/notifications sent

### Save Preferences
- Primary button: "SAVE PREFERENCES"
- Success message: "Preferences updated"

---

## Section 5: Privacy & Security

### Change Password
(Only if using password authentication)

**Current Password**
- Input type: password
- Required to change password

**New Password**
- Input type: password
- Show/hide toggle
- Password strength indicator
- Requirements displayed

**Confirm New Password**
- Input type: password
- Must match new password

**Button**: "UPDATE PASSWORD"
Success message: "Password updated successfully"

### Authentication Method
**Current Method**: Display "Magic Link" or "Password"
**Switch Method**:
- Link: "Switch to magic link authentication"
- Link: "Switch to password authentication"
- Requires re-authentication

### Two-Factor Authentication (Future)
- Toggle: Enable 2FA
- Setup wizard if enabling
- Recovery codes displayed

### Active Sessions
**Heading**: "Active Sessions"
**List**: 
- Current session (this device)
- Other sessions with device info, location, last active
- "Log out" button for each session
- "Log out all other sessions" button

### Data & Privacy

**Download Your Data**
- Button: "DOWNLOAD MY DATA"
- Generates export of all user data (GDPR compliance)
- Format: JSON or CSV
- Includes: profile, observations, uploads

**Delete Account**
- Link: "Delete my account"
- Opens confirmation modal
- Warning: "This action cannot be undone. All your observations will be archived but anonymized."
- Requires password/re-authentication
- Final confirmation: "Type DELETE to confirm"

---

## Section 6: Help & Support

### FAQ Links
Common questions:
- "How do I make an observation?"
- "When should I observe?"
- "What if I can't access a location?"
- "How do I upload photos/videos?"
- "Can I edit past observations?"

### Contact Support
**Form**:
- Subject dropdown: Technical issue, Question about observations, Account issue, Other
- Message textarea
- Attachments (optional)
- Submit button: "SEND MESSAGE"

**Alternative Contact**:
- Email: support@example.com
- Response time: "We typically respond within 24 hours"

### Guides & Resources
Links to:
- User guide (PDF)
- Video tutorials
- Study documentation
- Terms of Service
- Privacy Policy

---

## Responsive Behavior

### Desktop (≥992px)
- Two-column layout: sidebar + content
- Sidebar fixed position (sticky)
- Content area scrollable

### Tablet (576px - 991px)
- Sidebar collapses to dropdown menu at top
- Content full width below

### Mobile (≤575px)
- Hamburger menu for sections
- Single column layout
- Stats cards stack vertically
- Form fields full width
- Touch-optimized controls

## Validation & Error Handling

### Form Validation
- Real-time validation on form fields
- Clear error messages
- Prevent submission if errors exist

### Save Confirmation
- Show success message after saving
- Auto-dismiss after 5 seconds
- Keep form populated with new values

### Network Errors
- Display error message
- Offer retry option
- Preserve unsaved changes

## Accessibility Requirements

### Navigation
- ARIA landmarks for main sections
- Keyboard navigation through tabs
- Clear focus indicators
- Skip to content links

### Forms
- Labels for all inputs
- Error messages announced
- Success messages announced
- Fieldsets for grouped options

### Interactive Elements
- All controls keyboard accessible
- Toggle switches have clear states
- Buttons have descriptive labels

## Security Considerations

### Data Protection
- Only show user's own data
- Require re-authentication for sensitive changes
- Use HTTPS for all requests
- Sanitize user inputs

### Session Management
- Check authentication on page load
- Auto-logout after timeout
- Refresh token management

### Sensitive Actions
- Require password/re-auth for:
  - Email changes
  - Password changes
  - Account deletion
  - Downloading data

## API Integration

### Get User Profile
**GET** `/api/user/profile`

### Update Profile
**PUT** `/api/user/profile`

### Update Notifications
**PUT** `/api/user/notifications`

### Change Password
**POST** `/api/user/change-password`

### Delete Account
**DELETE** `/api/user/account`

### Get Observations
**GET** `/api/user/observations?page=1&limit=20`

## Analytics & Tracking

### Events to Track
- Account page viewed
- Section navigated to
- Settings changed
- Password updated
- Notifications toggled
- Data exported
- Support contacted

## Performance Considerations
- Lazy load observation images
- Paginate observation list
- Cache user profile data
- Optimize stats queries

## Future Enhancements
- Achievement badges/gamification
- Contribution leaderboard
- Social features (follow other monitors)
- Custom observation location alerts
- Mobile app push notifications
- Export observations as PDF report
