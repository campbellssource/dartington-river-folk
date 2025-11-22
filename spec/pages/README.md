# Page Specifications Overview

This directory contains comprehensive specifications for all pages in the Dartington River Folk observation app.

## Purpose

These specifications provide detailed blueprints for implementing the web application, covering:
- User interface layouts and components
- User interactions and workflows
- Responsive behavior across devices
- Accessibility requirements
- Security considerations
- API integration
- Performance optimization

## Study Context

The app supports the **Heavy Rain Monitoring Study (Autumn 2025)**, which investigates interactions between informal drainage systems (agricultural land and natural spaces) and formal drainage systems in the Dartington and Totnes area (postcode TQ9, Devon, UK).

**Study Details:**
- 20 designated observation locations
- Focus on water flow during/after heavy rainfall
- Evidence types: erosion, sediment, water staining, pooling, active flow
- Volunteer monitors document observations with photos, videos, and detailed notes

## Page Specifications

### Public/User Pages

#### 1. [homepage.md](./homepage.md) - Landing Page
**Lines of spec:** ~288
**Key features:**
- Hero section with call-to-action
- Current study overview
- Interactive map preview of 20 locations
- "How it works" process flow
- What we're looking for (evidence types)
- Responsive design for all devices

#### 2. [signup.md](./signup.md) - Registration Page
**Lines of spec:** ~387
**Key features:**
- Email-based registration with magic link OR password
- GDPR-compliant consent and terms
- Optional information (organization, experience)
- Email verification flow
- Notification preference selection

#### 3. [login.md](./login.md) - Authentication Page
**Lines of spec:** ~313
**Key features:**
- Dual authentication methods: magic link (default) and password
- Remember me functionality
- Forgot password flow
- Rate limiting and security features
- Responsive forms

#### 4. [account.md](./account.md) - User Dashboard
**Lines of spec:** ~432
**Key features:**
- Overview stats and contribution metrics
- Observation history with filters
- Account settings management
- Notification preferences
- Privacy and security settings
- Data download (GDPR compliance)
- Account deletion option

#### 5. [locations.md](./locations.md) - Observation Locations
**Lines of spec:** ~381
**Key features:**
- Interactive map view showing all 20 locations
- List view with search and filters
- Location detail cards with research questions
- Observation statistics per location
- Map/list view toggle
- Location selection for making observations

#### 6. [observation.md](./observation.md) - Make Observation Form
**Lines of spec:** ~519 (most detailed)
**Key features:**
- Multi-section form with progress indicator
- Location selection (map or list)
- Date/time picker with current default
- Weather conditions and duration
- Evidence type checklist
- Detailed observation notes (minimum 50 chars)
- Research question response
- Photo/video upload (up to 20 files)
- Additional context fields
- Save as draft functionality

#### 7. [observations-list.md](./observations-list.md) - Browse Observations
**Lines of spec:** ~465
**Key features:**
- Multiple views: list, grid, map
- Advanced filtering (location, date, weather, evidence)
- Search functionality
- Pagination or infinite scroll
- Sort options
- Observation preview cards
- Export functionality (coordinators)

#### 8. [observation-detail.md](./observation-detail.md) - Single Observation
**Lines of spec:** ~490
**Key features:**
- Complete observation details
- Media gallery with lightbox
- Location context and map
- Research question and response
- Observer information
- Related observations
- Edit/delete (owner, time-limited)
- Verification status (coordinators)
- Share functionality

### Coordinator/Admin Pages

#### 9. [coordinator-dashboard.md](./coordinator-dashboard.md) - Admin Overview
**Lines of spec:** ~402
**Key features:**
- Key metrics dashboard (observations, monitors, coverage)
- Recent activity timeline
- Monitor engagement statistics
- Location coverage heatmap
- Pending reviews queue
- Weather alerts and observation requests
- Data quality insights
- System health status

#### 10. [coordinator-locations.md](./coordinator-locations.md) - Location Management
**Lines of spec:** ~502
**Key features:**
- Interactive map editor
- Add/edit/delete locations
- Drag-and-drop marker positioning
- Research question configuration
- Observation guidance per location
- Status management (active/inactive)
- Bulk import/export (CSV, JSON, GeoJSON)
- Access and safety information

## Design System

All pages follow the **Bidwell Brook Partnership style guide** ([spec/STYLE_GUIDE.md](../STYLE_GUIDE.md)):
- **Colors:** Terracotta (#E1AE86), Navy (#00102E), Yellow buttons (#FFD00A)
- **Typography:** Inter Tight font family
- **Spacing:** 24-25px standard gaps
- **Components:** Clean, flat design with zero border radius
- **Responsive breakpoints:** Mobile (≤575px), Tablet (576-991px), Desktop (≥992px)

## Common Features Across All Pages

### Accessibility
- WCAG 2.1 AA compliance
- Keyboard navigation
- Screen reader support
- ARIA labels and landmarks
- Color contrast requirements
- Focus indicators

### Security
- HTTPS only
- CSRF protection
- XSS prevention
- Input sanitization
- Authentication/authorization checks
- Rate limiting
- Audit logging

### Performance
- Lazy loading
- Image optimization (Next.js Image component)
- Code splitting
- Caching strategies
- Progressive enhancement
- Mobile-first approach

### Analytics
- Page views
- User interactions
- Conversion tracking
- Error tracking
- Performance monitoring

## Technical Stack

- **Framework:** Next.js 16.0.3 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Maps:** Leaflet with OpenStreetMap or Google Maps
- **Authentication:** JWT + magic links
- **File Upload:** Multipart form data with image optimization

## API Patterns

All specifications include API integration details following RESTful conventions:
- `GET /api/resource` - List resources
- `GET /api/resource/:id` - Get single resource
- `POST /api/resource` - Create resource
- `PUT /api/resource/:id` - Update resource
- `DELETE /api/resource/:id` - Delete resource

## Implementation Priority

Suggested implementation order:

### Phase 1: Core User Journey (MVP)
1. Homepage (public marketing)
2. Signup page (user registration)
3. Login page (authentication)
4. Locations page (browse sites)
5. Observation form (submit observations)

### Phase 2: Observation Management
6. Observations list (browse submissions)
7. Observation detail (view single submission)
8. Account page (user dashboard)

### Phase 3: Coordinator Tools
9. Coordinator dashboard (admin overview)
10. Coordinator locations (site management)

## Usage

Each specification file contains:
1. **Purpose** - What the page does
2. **Target Audience** - Who uses it
3. **Layout & Structure** - UI components and organization
4. **Responsive Behavior** - Mobile, tablet, desktop adaptations
5. **Interactions & Behaviors** - User interactions and states
6. **Accessibility Requirements** - WCAG compliance details
7. **Security Considerations** - Authentication, validation, protection
8. **API Integration** - Endpoints and data structures
9. **Analytics & Tracking** - Metrics to monitor
10. **Performance Considerations** - Optimization strategies
11. **Future Enhancements** - Potential additions

## Related Documentation

- [../user-flows.md](../user-flows.md) - User journey flows and workflows
- [../heavy rain monitoring/introduction.md](../heavy%20rain%20monitoring/introduction.md) - Study details and research questions
- [../STYLE_GUIDE.md](../STYLE_GUIDE.md) - Design system and visual guidelines
- [../TODO.md](../TODO.md) - Future studies and features

## Next Steps

With these specifications complete, the next steps are:

1. **Create Implementation Plan**
   - Break down each page into development tasks
   - Estimate effort for each component
   - Define technical dependencies
   - Set up development environment

2. **Set Up Infrastructure**
   - Database schema design
   - API architecture
   - Authentication system
   - File storage solution

3. **Begin Development**
   - Start with Phase 1 (Core User Journey)
   - Implement pages iteratively
   - Test accessibility and responsiveness
   - Conduct security reviews

4. **User Testing**
   - Test with volunteer monitors
   - Gather feedback
   - Iterate on designs
   - Refine workflows

## Questions or Clarifications

For questions about these specifications or to suggest improvements, please contact the project team or create an issue in the repository.

---

**Total Specification Lines:** ~4,179 lines
**Total Pages Specified:** 10 pages
**Status:** ✅ Complete and ready for implementation planning
