# Login Page Specification

## Purpose
Allow registered users to authenticate and access their account to make observations, view their history, and manage settings.

## Target Audience
- Registered volunteer monitors returning to the app
- Users who need to make observations
- Users checking their account or observation history

## Page URL
`/login` or `/auth/login`

## Layout & Structure

### Header
- Standard site header with navigation
- Sign up link for new users: "Don't have an account? Sign up"

### Page Title Section
**Content**
- H1: "Log In to Your Account"
- Subtitle: "Access your monitoring dashboard and make observations"

### Login Form Container
- Clean, card-style container
- Maximum width: 500px, centered
- White background with subtle shadow
- Adequate padding (20-30px)

### Authentication Method Tabs
Two tabs at top of form:
1. "Magic Link" (Default active)
2. "Password"

## Tab 1: Magic Link Authentication (Default)

### Description
Brief explanation: "We'll send a secure login link to your email. No password needed!"

### Form Fields

**Email Address** (Required)
- Input type: email
- Label: "Email Address *"
- Placeholder: "your.email@example.com"
- Validation: valid email format
- Autofocus: yes
- Autocomplete: email

### Submit Button
- Text: "SEND LOGIN LINK"
- Style: Primary button (yellow #FFD00A)
- Full width on mobile
- Loading state: "SENDING..."

### Post-Submit State
After clicking "Send Login Link":
1. Disable form
2. Show success message: "Check Your Email!"
3. Instructions: "We've sent a login link to [email]. Click the link to log in."
4. Timer: "Link expires in 15 minutes"
5. Resend link: "Didn't receive it? [Resend link] (available after 60 seconds)"
6. Change email: "[Use different email]" button to reset form

### Magic Link Email Content
- Subject: "Your Login Link - Dartington River Folk"
- Body: "Click the button below to log in to your account. This link expires in 15 minutes."
- CTA Button: "LOG IN TO MY ACCOUNT"
- Footer: "If you didn't request this login, ignore this email."

## Tab 2: Password Authentication

### Form Fields

**Email Address** (Required)
- Input type: email
- Label: "Email Address *"
- Placeholder: "your.email@example.com"
- Validation: valid email format
- Autofocus: yes
- Autocomplete: email

**Password** (Required)
- Input type: password
- Label: "Password *"
- Placeholder: "Enter your password"
- Show/hide toggle button
- Autocomplete: current-password

**Remember Me** (Optional checkbox)
- Checkbox: "Keep me logged in"
- Default: unchecked
- Helper text: "Don't select on shared devices"

### Submit Button
- Text: "LOG IN"
- Style: Primary button (yellow #FFD00A)
- Full width on mobile
- Loading state: "LOGGING IN..."

### Forgot Password Link
- Link text: "Forgot your password?"
- Positioned below password field
- Links to: `/forgot-password`

## Common Elements (Both Tabs)

### Alternative Actions
**Divider**
- Text: "OR" centered with horizontal lines

**Sign Up Link**
- Text: "Don't have an account? Sign up"
- Style: Text link, centered
- Links to: `/signup`

**Help Link**
- Text: "Having trouble? Contact support"
- Style: Small text link
- Links to: `/support` or opens email client

## Post-Login Flow

### Successful Authentication
1. Show brief success message: "Welcome back!"
2. Redirect to:
   - Previous page if user was trying to access protected content
   - Dashboard/account page by default
   - Observation locations if first login after verification

### Failed Authentication
**Magic Link:**
- Expired link: "This login link has expired. Request a new one."
- Invalid link: "This login link is invalid. Please request a new one."
- Already used: "This link has already been used. Request a new one."

**Password:**
- Wrong credentials: "Email or password is incorrect. Please try again."
- Account not found: "No account found with this email. Please sign up."
- Account not verified: "Please verify your email before logging in. [Resend verification]"
- Account locked: "Your account has been locked due to too many failed attempts. Try again in [time] or reset your password."

### Rate Limiting
After 5 failed login attempts:
- Lock account temporarily (15-30 minutes)
- Show message with lockout duration
- Send security alert email to user
- Offer password reset option

## Responsive Behavior

### Desktop (≥992px)
- Form container: 500px max-width, centered
- Standard spacing and font sizes

### Tablet (576px - 991px)
- Form container: 90% width, centered
- Slightly reduced spacing

### Mobile (≤575px)
- Form container: 95% width
- Full-width buttons
- Larger touch targets (44px minimum)
- Font sizes per mobile style guide

## Validation & Error Handling

### Client-Side Validation
- Email format validation
- Required field validation
- Show errors on blur or submit attempt

### Server-Side Validation
- Verify credentials
- Check account status (active, locked, unverified)
- Rate limiting enforcement

### Error Display
- Field-level errors below each field
- Form-level errors at top in alert box
- Clear, actionable error messages
- Red color with warning icon

## Accessibility Requirements

### ARIA Labels
- Form: `<form aria-label="Login form">`
- Tab controls: proper ARIA tabs pattern
- Error messages: aria-describedby and aria-live
- Loading states: aria-busy

### Keyboard Navigation
- Tab between fields in logical order
- Arrow keys to switch between tabs
- Enter to submit form
- Show/hide password toggle accessible

### Screen Readers
- Label all form fields
- Announce tab changes
- Announce errors and success messages
- Announce loading states

### Color Contrast
- Sufficient contrast for all text
- Visible focus indicators
- Error messages meet contrast requirements

## Security Considerations

### Password Authentication
- Use HTTPS only
- Hash passwords server-side (never store plain text)
- Implement secure session management
- Set secure, HttpOnly cookies

### Magic Link Security
- Generate cryptographically secure random tokens
- Single-use tokens (expire after use)
- Time-limited (15 minutes)
- Bind token to IP address (optional, may cause issues with mobile)

### General Security
- CSRF protection
- Rate limiting on login attempts
- No user enumeration (same error for wrong email/password)
- Log failed login attempts
- Multi-factor authentication (future enhancement)

### Session Management
- Secure session cookies
- Session timeout after inactivity (24 hours default)
- "Remember me" extends session (30 days)
- Logout invalidates session immediately

## API Integration

### Magic Link Endpoint
**POST** `/api/auth/send-magic-link`

**Request:**
```json
{
  "email": "user@example.com"
}
```

**Response (200):**
```json
{
  "success": true,
  "message": "Magic link sent",
  "expiresIn": 900
}
```

### Password Login Endpoint
**POST** `/api/auth/login`

**Request:**
```json
{
  "email": "user@example.com",
  "password": "SecurePass123",
  "rememberMe": false
}
```

**Response (200):**
```json
{
  "success": true,
  "token": "jwt-token-here",
  "user": {
    "id": "user123",
    "name": "John Smith",
    "email": "user@example.com"
  }
}
```

### Verify Magic Link Endpoint
**GET** `/api/auth/verify-magic-link?token=...`

Returns authentication status and sets session cookie

## Analytics & Tracking

### Events to Track
- Login page viewed
- Authentication method selected (magic link vs password)
- Login attempted
- Login successful
- Login failed (without exposing sensitive info)
- "Forgot password" clicked
- "Sign up" clicked
- Magic link sent
- Magic link clicked

## Performance Considerations
- Fast page load (<1 second)
- Instant feedback on form submission
- Optimize authentication API calls
- Cache static assets

## Future Enhancements
- Social login (Google, Facebook)
- Two-factor authentication (2FA)
- Biometric authentication (fingerprint, face ID)
- Single Sign-On (SSO)
- Remember device option
- Login activity history
