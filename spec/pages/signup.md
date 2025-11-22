# Signup/Registration Page Specification

## Purpose
Enable new users to create an account to become volunteer monitors. The registration process collects necessary contact information and consent while remaining GDPR compliant and user-friendly.

## Target Audience
- First-time visitors interested in becoming volunteer monitors
- People referred from bidwellbrook.org
- Community members wanting to contribute observations

## Page URL
`/signup` or `/register`

## Layout & Structure

### Header
- Standard site header with navigation
- Login link prominent for users who already have an account: "Already have an account? Log in"

### Page Title Section
**Visual**
- Simple, clean design with focus on the form
- Optional: Small icon or image representing community/volunteering

**Content**
- H1: "Become a Volunteer Monitor"
- Subtitle: "Join our community of observers helping to understand local water drainage patterns"
- Brief text: "Registration takes less than 2 minutes. We'll send you a verification email to get started."

### Registration Form

#### Form Container
- Clean, card-style container
- Maximum width: 600px, centered on page
- White background with subtle shadow
- Adequate padding (20-30px)

#### Form Fields

**1. Personal Information Section**

**Full Name** (Required)
- Input type: text
- Label: "Full Name *"
- Placeholder: "John Smith"
- Validation: minimum 2 characters
- Error message: "Please enter your full name"

**Email Address** (Required)
- Input type: email
- Label: "Email Address *"
- Placeholder: "your.email@example.com"
- Validation: valid email format
- Error message: "Please enter a valid email address"
- Helper text: "We'll send a verification link to this address"

**Confirm Email** (Required)
- Input type: email
- Label: "Confirm Email Address *"
- Placeholder: "your.email@example.com"
- Validation: must match email field
- Error message: "Email addresses do not match"

**2. Authentication Section**

**Choose Authentication Method**
Radio buttons or toggle:
- Option 1: "Email verification only (magic link)" [Default]
  - Helper text: "Log in using a secure link sent to your email each time"
- Option 2: "Password"
  - Shows password fields when selected

**If Password Selected:**

**Password** (Conditional Required)
- Input type: password
- Label: "Create Password *"
- Show/hide toggle button
- Validation rules:
  - Minimum 8 characters
  - At least one uppercase letter
  - At least one lowercase letter
  - At least one number
- Password strength indicator (weak/medium/strong)
- Error message: "Password must meet security requirements"

**Confirm Password** (Conditional Required)
- Input type: password
- Label: "Confirm Password *"
- Show/hide toggle
- Validation: must match password
- Error message: "Passwords do not match"

**3. Optional Information Section**

**Heading**: "Tell Us About Yourself (Optional)"
Helper text: "This helps us understand our monitor community better"

**Organization/Affiliation** (Optional)
- Input type: text
- Label: "Organization or Affiliation"
- Placeholder: "e.g., Dartington Community Group, Local resident"
- Character limit: 200

**Previous Experience** (Optional)
- Input type: textarea
- Label: "Previous Monitoring or Environmental Experience"
- Placeholder: "Tell us about any relevant experience (volunteer work, education, professional background)"
- Rows: 4
- Character limit: 500
- Character counter displayed

**4. Communication Preferences Section**

**Email Notifications** (Required checkbox)
- Checkbox: "I want to receive email notifications when observations are needed (when heavy rain is forecast)"
- Default: checked
- Helper text: "You can change this preference anytime in your account settings"

**5. Consent & Terms Section**

**Terms and Conditions** (Required checkbox)
- Checkbox: "I agree to the Terms of Service and Privacy Policy *"
- Links: "Terms of Service" and "Privacy Policy" open in modal or new tab
- Validation: must be checked to proceed
- Error message: "You must agree to the terms to create an account"

**Data Processing Consent** (Required checkbox, GDPR)
- Checkbox: "I consent to the Bidwell Brook Partnership storing and processing my personal data for the purpose of coordinating water monitoring observations *"
- Helper text: "Your data will only be used for this project. See our Privacy Policy for details."
- Validation: must be checked to proceed

**Optional Newsletter** (Optional checkbox)
- Checkbox: "I'd like to receive occasional newsletters about the project and related environmental initiatives"
- Default: unchecked

### Form Actions

**Submit Button**
- Text: "CREATE ACCOUNT"
- Style: Primary button (yellow #FFD00A per style guide)
- Full width on mobile, auto width on desktop
- Disabled until required fields are valid
- Loading state: shows spinner and text "Creating Account..."

**Already Have Account Link**
- Text: "Already have an account? Log in"
- Style: Text link, centered below button
- Links to: `/login`

### Post-Submission States

#### Success State
After successful submission:
1. Show success message: "Account Created! Check Your Email"
2. Instructions: "We've sent a verification link to [email address]. Please check your inbox and click the link to verify your account."
3. Additional text: "Didn't receive the email? Check your spam folder or [resend verification email]"
4. CTA button: "Go to Homepage" or "View Observation Locations"

#### Error State
If registration fails:
1. Keep form data populated (except password fields)
2. Show error message at top of form:
   - Duplicate email: "This email address is already registered. Try logging in instead."
   - Server error: "We couldn't create your account. Please try again or contact support."
   - Validation errors: Highlight specific fields with error messages

### Email Verification Flow

**Verification Email Content:**
- Subject: "Verify Your Email - Bidwell monitors"
- Greeting: "Hi [Name],"
- Body: "Thanks for joining as a volunteer monitor! Click the button below to verify your email address and complete your registration."
- CTA Button: "VERIFY EMAIL ADDRESS"
- Link expiry: 24 hours
- Footer: "If you didn't create this account, you can safely ignore this email."

**Verification Success Page** (`/verify-email?token=...`)
- Success message: "Email Verified Successfully!"
- Welcome message: "Welcome to Bidwell monitors, [Name]!"
- Next steps:
  - "Explore observation locations"
  - "Make your first observation"
  - "Set up your account preferences"
- CTA button: "VIEW OBSERVATION LOCATIONS"

**Verification Failed/Expired Page**
- Error message: "Verification link expired or invalid"
- Text: "The verification link has expired or is no longer valid."
- Action: "Request new verification email"

## Responsive Behavior

### Desktop (≥992px)
- Form container: 600px max-width, centered
- Two-column layout for name fields (if desired)
- Standard field spacing

### Tablet (576px - 991px)
- Form container: 90% width, centered
- Single column layout
- Adjusted field spacing

### Mobile (≤575px)
- Form container: 95% width with 16px side margins
- All fields full width
- Larger touch targets (minimum 44px height)
- Submit button full width
- Font sizes per mobile style guide

## Validation & Error Handling

### Client-Side Validation
- Real-time validation as user types (with debounce)
- Show validation errors on blur (when field loses focus)
- Prevent form submission if any required fields invalid
- Scroll to first error on submit attempt

### Field-Level Errors
- Display below each field
- Red color (#dc3545 or similar)
- Include icon (⚠) for visibility
- Clear, actionable error messages

### Form-Level Errors
- Display at top of form in alert box
- Include error type (network, validation, duplicate, etc.)
- Provide action steps to resolve

### Success Indicators
- Green checkmark icon appears when field is valid
- Subtle green border or background

## Accessibility Requirements

### ARIA Labels
- Form: `<form aria-label="Registration form">`
- Required fields: aria-required="true"
- Error messages: aria-describedby linking to error text
- Live regions for form-level success/error messages

### Keyboard Navigation
- Tab through all fields in logical order
- Enter key submits form
- Checkbox/radio accessible via space bar
- Skip unnecessary tab stops

### Screen Readers
- Label all form fields properly
- Announce validation errors
- Announce form submission status
- Group related fields with fieldset/legend

### Color Contrast
- Error text: sufficient contrast
- Focus indicators: highly visible
- Required asterisks: visible but not only indicator

## Security Considerations

### Password Security
- Client-side password strength validation
- Server-side password hashing (bcrypt, Argon2)
- No password length maximum (within reason)
- Password requirements displayed upfront

### Email Security
- Verify email format and basic validity
- Check for disposable email domains (optional)
- Rate limiting on verification email sends

### CSRF Protection
- Include CSRF token in form
- Validate token on server

### Rate Limiting
- Limit registration attempts per IP
- Prevent automated bot submissions
- Consider CAPTCHA if abuse detected

### Data Privacy (GDPR)
- Only collect necessary data
- Clear consent checkboxes (not pre-checked)
- Explicit data processing consent
- Easy access to privacy policy
- Ability to delete account (in account settings)

## API Integration

### Registration Endpoint
**POST** `/api/auth/register`

**Request Body:**
```json
{
  "fullName": "John Smith",
  "email": "john@example.com",
  "authMethod": "magic-link" | "password",
  "password": "SecurePass123" (if authMethod is password),
  "organization": "Dartington Community Group",
  "experience": "Some relevant experience...",
  "emailNotifications": true,
  "newsletter": false,
  "termsAccepted": true,
  "dataConsentGiven": true
}
```

**Success Response (201):**
```json
{
  "success": true,
  "message": "Account created successfully",
  "userId": "user123",
  "email": "john@example.com",
  "verificationEmailSent": true
}
```

**Error Response (400):**
```json
{
  "success": false,
  "error": "Email already registered",
  "field": "email"
}
```

### Verification Endpoint
**GET** `/api/auth/verify-email?token=...`

Returns verification status and redirects to appropriate page

## Analytics & Tracking

### Events to Track
- Registration form viewed
- Registration started (first field filled)
- Validation errors encountered (which fields)
- Authentication method selected
- Optional fields completed
- Terms/privacy links clicked
- Form submitted (success/failure)
- Verification email sent
- Email verified successfully

### Conversion Funnel
1. Landing on signup page
2. Started filling form
3. Completed form
4. Submitted form
5. Verified email
6. Made first observation

## Performance Considerations

### Loading
- Minimal dependencies for form
- Lazy load Terms/Privacy modals
- Optimize form validation logic

### Form Submission
- Show loading state immediately
- Disable submit button to prevent double-submission
- Timeout after 30 seconds with error message

## Error Recovery

### Network Errors
- Preserve form data in localStorage (temporarily)
- Show clear error message
- Provide retry button
- Auto-retry with exponential backoff (optional)

### Validation Errors
- Focus first invalid field
- Show all errors at once (not one at a time)
- Allow user to fix and resubmit

## Future Enhancements
- Social authentication (Google, Facebook)
- SMS verification option
- Invite code system for closed registration periods
- Profile photo upload during registration
- Location preference selection
- Availability calendar setup
- Multi-step registration wizard (if form grows too complex)
