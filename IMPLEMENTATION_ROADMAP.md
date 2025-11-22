# Implementation Roadmap

This document provides a comprehensive roadmap for implementing the full Dartington River Folk application based on the specifications in the `/spec` directory.

## Current Status

### ✅ Completed

1. **Vercel Deployment Ready**
   - `vercel.json` configured with optimal settings
   - `.env.example` for environment variables documentation
   - `DEPLOYMENT.md` with comprehensive deployment guide
   - README updated with Vercel deployment instructions
   - Build tested and passing

2. **Foundation & Infrastructure**
   - Next.js 16.0.3 with App Router
   - TypeScript configuration
   - Tailwind CSS v4 setup
   - Bidwell Brook style guide implemented in `globals.css`
   - Responsive design system (Mobile ≤575px, Tablet 576-991px, Desktop ≥992px)
   - Leaflet map integration with OpenStreetMap

3. **Basic Pages (Functional but need enhancement)**
   - Homepage (`/`) - Basic project overview
   - Locations page (`/locations`) - Selection interface
   - Observation form (`/observe`) - Data entry form
   - Volunteer registration (`/volunteer`) - Sign-up form

4. **Components**
   - `InteractiveMap` - Leaflet-based map with 20 location markers
   - Location data structure with research questions

5. **Design System**
   - Colors: Terracotta (#E1AE86), Navy (#00102E), Yellow (#FFD00A)
   - Typography: Inter Tight font family (needs font loading implementation)
   - Spacing, buttons, forms, and accessibility standards defined

## Deployment to Vercel

### How to Deploy RIGHT NOW

The application is ready for immediate deployment to Vercel:

1. **Via Vercel Dashboard** (Recommended)
   - Go to [vercel.com](https://vercel.com) and sign in
   - Click "Add New..." → "Project"
   - Import `campbellssource/dartington-river-folk` repository
   - Click "Deploy" (Vercel auto-detects Next.js settings)
   - Your app will be live in ~2-3 minutes!

2. **Via Deploy Button**
   - Click the button in README.md
   - Follow the prompts
   - Done!

3. **Via CLI**
   ```bash
   npm install -g vercel
   vercel login
   cd /path/to/dartington-river-folk
   vercel --prod
   ```

See `DEPLOYMENT.md` for detailed instructions, troubleshooting, and configuration.

### What Gets Deployed

The current deployment includes:
- ✅ Responsive homepage with project overview
- ✅ 20 observation locations with research questions
- ✅ Interactive map (Leaflet + OpenStreetMap)
- ✅ Observation recording form (frontend only)
- ✅ Volunteer registration form (frontend only)
- ✅ Bidwell Brook visual design system
- ✅ Mobile, tablet, and desktop responsive layouts

### What's NOT Yet Implemented

- ❌ Backend/database (no data persistence)
- ❌ User authentication
- ❌ File uploads (photos/videos)
- ❌ Email notifications
- ❌ Data browsing/filtering
- ❌ Coordinator admin tools

**Current app is a functional frontend demonstration** - perfect for stakeholder review and feedback!

## Implementation Plan by Phase

### Phase 1: Enhanced Frontend (No Backend Required) - 1-2 Weeks

**Goal**: Polish the existing pages to match the spec exactly

#### 1.1 Font Loading & Optimization
- [ ] Install Inter Tight font via `next/font/google`
- [ ] Configure font loading in `layout.tsx`
- [ ] Test font rendering across all pages

#### 1.2 Homepage Enhancement (`spec/pages/homepage.md`)
- [ ] Hero section with compelling CTA
- [ ] Current study overview with key details
- [ ] Interactive map preview
- [ ] "How it works" process flow (3-4 steps)
- [ ] Evidence types showcase with icons/images
- [ ] Call-to-action buttons (Register, View Locations, Make Observation)
- [ ] Responsive hero image or background

#### 1.3 Locations Page Enhancement (`spec/pages/locations.md`)
- [ ] Map view (already implemented, needs polish)
- [ ] List view toggle
- [ ] Search/filter functionality (client-side)
- [ ] Location cards with:
  - Location name and number
  - Research question
  - Observation count (0 for now)
  - "Record Observation" button
- [ ] Sorting options (by number, name)
- [ ] Mobile-optimized layout

#### 1.4 Observation Form Enhancement (`spec/pages/observation.md`)
- [ ] Multi-step form with progress indicator
- [ ] Location selection (map or dropdown)
- [ ] Date/time picker (default to current)
- [ ] Weather conditions selector
- [ ] Evidence type checkboxes (5 types)
- [ ] Text area for observations (min 50 chars validation)
- [ ] Research question response field
- [ ] Photo/video upload UI (non-functional without backend)
- [ ] Additional notes field
- [ ] Form validation with error messages
- [ ] Success confirmation page

#### 1.5 Volunteer Registration Enhancement (`spec/pages/signup.md`)
- [ ] Email field with validation
- [ ] Name field (required)
- [ ] Organization/affiliation (optional)
- [ ] Experience level (optional)
- [ ] GDPR consent checkbox (required)
- [ ] Terms and privacy statement (create documents)
- [ ] Notification preferences
- [ ] Form validation
- [ ] Success message (can't actually register without backend)

#### 1.6 Navigation & Layout
- [ ] Create Header component
  - Logo/branding
  - Navigation menu
  - Mobile hamburger menu
- [ ] Create Footer component
  - Contact information
  - Links (About, Privacy, Terms)
  - Credits
  - Social links (if applicable)
- [ ] Update `layout.tsx` with Header and Footer
- [ ] Breadcrumb navigation

#### 1.7 Additional Pages (Static)
- [ ] About page - Project background and goals
- [ ] Privacy Policy page
- [ ] Terms of Service page
- [ ] Contact page

**Deliverable**: Fully polished frontend matching the spec, ready for user testing

---

### Phase 2: Backend & Database - 2-3 Weeks

**Goal**: Enable data persistence and user accounts

#### 2.1 Database Setup
- [ ] Choose database: **Vercel Postgres** (recommended) or PostgreSQL/MongoDB
- [ ] Design schema:
  - Users table (id, email, name, organization, created_at, preferences)
  - Observations table (id, user_id, location_id, date, time, weather, evidence_types, notes, created_at)
  - Locations table (id, name, lat, lng, question, description, active)
  - Media table (id, observation_id, url, type, caption)
- [ ] Set up Drizzle ORM or Prisma
- [ ] Create migration scripts
- [ ] Seed database with 20 locations

#### 2.2 API Routes (Next.js App Router)
- [ ] `GET /api/locations` - List all locations
- [ ] `GET /api/locations/[id]` - Get single location
- [ ] `POST /api/observations` - Create observation
- [ ] `GET /api/observations` - List observations with filters
- [ ] `GET /api/observations/[id]` - Get single observation
- [ ] `PUT /api/observations/[id]` - Update observation (owner only)
- [ ] `DELETE /api/observations/[id]` - Delete observation (owner only)
- [ ] `POST /api/auth/register` - User registration
- [ ] `POST /api/auth/login` - User login
- [ ] Error handling and validation middleware

#### 2.3 Authentication
- [ ] Install and configure NextAuth.js v5
- [ ] Email/password authentication
- [ ] Magic link authentication (passwordless)
- [ ] JWT token management
- [ ] Protected routes middleware
- [ ] Session management
- [ ] Logout functionality

#### 2.4 File Upload & Storage
- [ ] Set up **Vercel Blob Storage** (recommended) or AWS S3
- [ ] API route for file upload (`POST /api/upload`)
- [ ] Image optimization and resizing
- [ ] Video upload support
- [ ] File type validation (JPEG, PNG, MP4, MOV)
- [ ] Maximum file size limits (10MB per file, 20 files max)
- [ ] Secure file access with signed URLs

#### 2.5 Environment Variables
- [ ] `DATABASE_URL` - Database connection
- [ ] `NEXTAUTH_URL` - App URL
- [ ] `NEXTAUTH_SECRET` - JWT secret
- [ ] `BLOB_READ_WRITE_TOKEN` - File storage
- [ ] Configure in Vercel Dashboard

**Deliverable**: Fully functional app with data persistence and user accounts

---

### Phase 3: Observation Management & Browsing - 2 Weeks

**Goal**: Enable users to browse and view observations

#### 3.1 Login Page (`spec/pages/login.md`)
- [ ] Email field
- [ ] Password field (optional if using magic link)
- [ ] "Send magic link" button
- [ ] "Remember me" checkbox
- [ ] "Forgot password" link
- [ ] Social login options (optional)
- [ ] Redirect after login

#### 3.2 Account Dashboard (`spec/pages/account.md`)
- [ ] Overview stats (observations made, locations visited)
- [ ] Recent observations list
- [ ] Account settings form
  - Update name, email, organization
  - Change password
  - Update notification preferences
- [ ] Privacy settings
  - Download personal data (GDPR)
  - Delete account option
- [ ] Observation history with filters

#### 3.3 Observations List Page (`spec/pages/observations-list.md`)
- [ ] Multiple views: List, Grid, Map
- [ ] Advanced filters:
  - Location (multi-select)
  - Date range
  - Evidence types
  - Weather conditions
  - Observer (coordinators only)
- [ ] Search by keywords
- [ ] Sort options (newest, oldest, location)
- [ ] Pagination or infinite scroll
- [ ] Observation preview cards
- [ ] Export functionality (coordinators)

#### 3.4 Observation Detail Page (`spec/pages/observation-detail.md`)
- [ ] Complete observation details
- [ ] Media gallery with lightbox
- [ ] Location map
- [ ] Research question and response
- [ ] Observer information (name, date)
- [ ] Related observations at same location
- [ ] Edit button (owner, within 24 hours)
- [ ] Delete button (owner, within 24 hours)
- [ ] Verification status badge (coordinators)
- [ ] Share functionality (copy link, email)

**Deliverable**: Complete observation browsing and viewing experience

---

### Phase 4: Email Notifications - 1 Week

**Goal**: Notify users when observations are needed

#### 4.1 Email Service Setup
- [ ] Choose provider: **Resend** (recommended) or SendGrid
- [ ] Configure SMTP credentials
- [ ] Design email templates:
  - Welcome email
  - Email verification
  - Magic link login
  - Observation request (heavy rain forecast)
  - Observation confirmation
  - Weekly digest (optional)
- [ ] Unsubscribe mechanism
- [ ] Email preferences management

#### 4.2 Notification System
- [ ] Database table for notifications
- [ ] API route for sending notifications
- [ ] Scheduled jobs (Vercel Cron) for:
  - Weather alerts
  - Weekly reminders
  - Digest emails
- [ ] User notification preferences
- [ ] Email queue for bulk sends

**Deliverable**: Automated email notifications to volunteers

---

### Phase 5: Coordinator Tools - 2-3 Weeks

**Goal**: Enable coordinators to manage locations and observations

#### 5.1 Role-Based Access Control
- [ ] Add `role` field to Users table (user, coordinator, admin)
- [ ] Middleware for protecting coordinator routes
- [ ] Permission checks in API routes

#### 5.2 Coordinator Dashboard (`spec/pages/coordinator-dashboard.md`)
- [ ] Key metrics:
  - Total observations (by time period)
  - Active monitors count
  - Location coverage percentage
  - Recent activity timeline
- [ ] Monitor engagement stats
- [ ] Location coverage heatmap
- [ ] Pending reviews queue
- [ ] Weather alerts integration (optional)
- [ ] Data quality insights
- [ ] Quick actions (send notification, view reports)

#### 5.3 Location Management (`spec/pages/coordinator-locations.md`)
- [ ] Interactive map editor (drag markers)
- [ ] Add new location:
  - Click on map or enter coordinates
  - Set name, number, research question
  - Add description and guidance
  - Mark as active/inactive
  - Set priority level
- [ ] Edit existing locations
- [ ] Delete locations (archive observations)
- [ ] Bulk import/export (CSV, JSON, GeoJSON)
- [ ] Access and safety information per location

#### 5.4 Observation Management
- [ ] Review queue with filters
- [ ] Flag observations for quality issues
- [ ] Add coordinator notes/comments
- [ ] Mark as verified
- [ ] Request clarification from observer
- [ ] Bulk actions (approve, flag, export)
- [ ] Data export (CSV, PDF)

#### 5.5 Notification Management
- [ ] Send targeted observation requests
  - Select specific locations
  - Choose recipients (all, nearby, specific users)
  - Compose message
  - Schedule or send immediately
- [ ] View notification history
- [ ] Notification templates
- [ ] Response tracking

**Deliverable**: Full coordinator toolkit for managing the observation network

---

## Technical Specifications

### Technology Stack

- **Framework**: Next.js 16.0.3 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Database**: Vercel Postgres (or PostgreSQL)
- **ORM**: Drizzle ORM or Prisma
- **Authentication**: NextAuth.js v5
- **File Storage**: Vercel Blob Storage
- **Email**: Resend or SendGrid
- **Maps**: Leaflet with OpenStreetMap
- **Forms**: React Hook Form + Zod validation
- **Testing**: Vitest + React Testing Library (optional)
- **Hosting**: Vercel

### Architecture Decisions

1. **Serverless First**: Use Vercel's edge functions for API routes
2. **Static Generation**: Pre-render pages where possible for performance
3. **Progressive Enhancement**: Core functionality works without JavaScript
4. **Mobile First**: Responsive design starting from mobile breakpoint
5. **Accessibility**: WCAG 2.1 AA compliance throughout
6. **Security**: HTTPS only, CSRF protection, input sanitization, rate limiting

### Performance Goals

- **Lighthouse Score**: 90+ on all metrics
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.5s
- **Cumulative Layout Shift**: < 0.1
- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic via Next.js App Router

### Accessibility Standards

- **WCAG 2.1 AA Compliance**
- Semantic HTML5 elements
- ARIA labels and landmarks
- Keyboard navigation
- Screen reader support
- Color contrast ratios (4.5:1 minimum)
- Focus indicators
- Alt text for images
- Form labels and error messages
- Skip links for main content

### Security Considerations

- HTTPS only (automatic on Vercel)
- CSRF protection on all forms
- XSS prevention (input sanitization)
- SQL injection prevention (parameterized queries)
- Rate limiting on API routes
- Authentication on protected routes
- File upload validation
- Secure file storage with signed URLs
- Environment variable protection
- Audit logging for coordinator actions

## Estimated Effort

| Phase | Duration | Developer Days |
|-------|----------|----------------|
| Phase 1: Enhanced Frontend | 1-2 weeks | 7-10 days |
| Phase 2: Backend & Database | 2-3 weeks | 12-15 days |
| Phase 3: Observation Management | 2 weeks | 8-10 days |
| Phase 4: Email Notifications | 1 week | 4-5 days |
| Phase 5: Coordinator Tools | 2-3 weeks | 12-15 days |
| **Total** | **8-11 weeks** | **43-55 days** |

*Estimates assume 1 experienced full-stack developer working full-time*

## Testing Strategy

### Development Testing
- [ ] Local testing on development server
- [ ] Browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Mobile testing (iOS, Android)
- [ ] Responsive design testing (various screen sizes)

### User Acceptance Testing
- [ ] Stakeholder review after Phase 1
- [ ] Volunteer beta testing after Phase 3
- [ ] Coordinator testing after Phase 5

### Automated Testing (Optional but Recommended)
- [ ] Unit tests for utility functions
- [ ] Integration tests for API routes
- [ ] End-to-end tests for critical user flows
- [ ] Accessibility automated tests (axe-core)

## Deployment Strategy

### Development Workflow
1. Feature branches for each task
2. Pull requests with code review
3. Vercel preview deployments for each PR
4. Merge to `main` after approval
5. Automatic production deployment

### Environment Setup
- **Development**: Local with `.env.local`
- **Preview**: Vercel preview deployments (PR)
- **Production**: Vercel production (main branch)

### Monitoring & Maintenance
- Vercel Analytics for usage metrics
- Error tracking (Sentry recommended)
- Performance monitoring
- Database backups
- Regular security updates

## Success Metrics

### User Engagement
- Number of registered volunteers
- Observations submitted per week
- Location coverage (% of 20 locations with recent observations)
- Return rate (users making multiple observations)

### Data Quality
- Observations with photos/videos (%)
- Average observation detail length
- Coordinator verification rate

### Technical Performance
- Page load times
- API response times
- Error rates
- Uptime (99.9% target)

## Questions & Decisions Needed

Before proceeding with implementation, consider:

1. **Database Choice**: Vercel Postgres (easiest) vs self-hosted PostgreSQL?
2. **File Storage**: Vercel Blob (easiest) vs AWS S3 (more control)?
3. **Email Provider**: Resend (modern) vs SendGrid (established)?
4. **Authentication**: Email/password, magic link, or both?
5. **Weather API**: Which service for rain forecasts? (OpenWeather, Weather API)
6. **Analytics**: Vercel Analytics (built-in) vs Google Analytics?
7. **Budget**: Vercel Pro plan needed for team features? (~$20/month per user)

## Next Steps

### For Immediate Deployment (Today)
1. Push code to GitHub `main` branch
2. Connect repository to Vercel
3. Deploy and get production URL
4. Share with stakeholders for feedback

### For Full Implementation (Next Sprint)
1. Review this roadmap with team
2. Prioritize phases based on business needs
3. Make technology decisions (database, storage, email)
4. Set up development environment
5. Begin Phase 1 implementation

## Resources & Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Leaflet Documentation](https://leafletjs.com/reference.html)
- [NextAuth.js Documentation](https://authjs.dev/)
- [Vercel Postgres Documentation](https://vercel.com/docs/storage/vercel-postgres)
- [Vercel Blob Storage Documentation](https://vercel.com/docs/storage/vercel-blob)

## Support

For questions about this roadmap or implementation:
- Create an issue in the GitHub repository
- Contact the project maintainer
- Review the detailed specs in `/spec/pages/`

---

**Status**: ✅ Ready for Deployment | 🚧 Implementation in Progress | 📋 Planning Phase

*Last Updated*: November 22, 2025
