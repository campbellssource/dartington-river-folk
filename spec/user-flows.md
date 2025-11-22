# Core user flows

This app exists to capture observations about the state of the river.
At different times there will be different studies taking place with users being asked to record different types of observations. To start with we are asking users to observe how surface water flows in times of heavy rain.

## Current Study: Heavy Rain Monitoring (Autumn 2025)

This study focuses on observing suspected interactions between the informal (agricultural land and natural spaces) and formal drainage systems that route runoff into the combined sewer system around Dartington, Totnes, Devon, UK (postcode: TQ9).

### Study Details
- **Location**: 50.446551, -3.709278
- **Observation Sites**: 20 numbered locations, each with specific research questions
- **Study Period**: Autumn 2025
- **Evidence Needed**: Photos, videos, points marked on maps with written notes, times and dates

### What Monitors Should Look For
During or shortly after periods of heavy or prolonged rainfall:
- Obvious points of entry into sewers where surface flow paths cross over or near the network
- Evidence of runoff from surrounding land entering road drainage gullies
- Erosion patterns: bare soil, gullies, or washouts caused by water movement
- Sediment deposits: areas where silt or debris has accumulated
- Water staining: discoloration or staining on surfaces indicating past water flow
- Pooling areas: spots where water tends to pool
- Active flow paths and water movement patterns

## Monitor user flows

### First visit
- users will have landed on bidwellbrook.org and followed a link here to find out more about making observations 
- we need to tell them that we need people who can go out when asked and observe water in key areas
- they will be interested in where we are making observations, and what information we will require. An interactive map should show where observations are needed
- they should see:
    - Project overview and purpose (understanding drainage system interactions)
    - Current study information (Heavy Rain Monitoring, 20 locations in Dartington/Totnes area)
    - What makes a good observation (timing, evidence types, documentation)
    - Interactive map showing all 20 observation sites with their specific research questions
- they will need to register an account so that we can contact them when we need observations and to log in to make observations
- To record an observation they will be asked questions about an area, upload photos/videos to support their observation
### Register, ready to get notifications, learn how to make an observation
- We will use email based registration with a magic link email to verify the email address.
- they can access their account again with a password or magic link
- they should have to agree to some GDPR compliant Terms and privacy statement
- Registration should collect:
    - Full name
    - Email address
    - Organization/affiliation (optional)
    - Previous experience with water monitoring (optional)
    - Consent to be contacted for observations
- Once registered they will be invited to:
    - Sign up for the mailing list
    - Make an observation
    - See observations others have made
    - View their account settings
- In their account they can:
    - Opt out of receiving emails, or opt back in if they had previously opted out
    - Update their contact information
    - View their observation history
    - See their contribution statistics
    

### Make an observation
- users will be sent an email when we need observations making, suggesting when heavy rain is forecast
    - email should contain a link to unsubscribe from these notifications
    - email should explain current weather conditions and urgency
- they will follow a link to a page where they can make an observation, or navigate here themselves
- they will be asked to select a location from a map or list of locations:
    - Each location displays its specific research question (e.g., "Is runoff from land to the north flowing onto the highway and into the drainage gullies?")
    - Map view shows all 20 locations with markers
    - List view allows searching/filtering by location name or number
- For the selected location, they will record:
    - Date and time of observation (auto-populated, editable)
    - Weather conditions at time of observation
    - Evidence types observed (checkboxes for: erosion patterns, sediment deposits, water staining, pooling areas, active flow)
    - Detailed written observations (free text describing what they see)
    - Photos and/or videos (multiple uploads supported)
    - Additional notes or context
- Form validation ensures required fields are completed
- once submitted they will see a confirmation page with:
    - Summary of their observation
    - Thank you message
    - Options to: make another observation, see other observations, or return to account
### See other observations
- Navigate to a specific observation site and see observations made by others
    - View location on map with all observations for that site
    - See chronological list of observations at that location
    - Summary cards show: date/time, observer name, weather conditions, evidence types, thumbnail images
    - Click any observation to drill into full details
- See a list of all observations across all sites:
    - Filters available for:
        - Specific locations (one or multiple)
        - Date range
        - Evidence types
        - Weather conditions
    - Sort options: newest first, oldest first, by location
    - Pagination for large result sets
- Observation detail view shows:
    - All recorded information
    - Full-size photos and videos
    - Map showing exact location
    - Context about the research question for that site
    - Related observations at the same location (if any)


## Co-ordinator user flows

### Configure interactive map
- A co-ordinator needs to be able to use an interactive map (Google Maps or OpenStreetMap) to set up locations where observations are needed
- Add new location:
    - Click on map or enter coordinates (latitude/longitude)
    - Set location name/number
    - Enter specific research question for that location
    - Add description and guidance for observers
    - Mark as active or inactive
    - Set priority level (urgent, normal, low)
- Edit existing location:
    - Update coordinates, name, or research question
    - Modify description and observer guidance
    - Change status (active/inactive)
- Delete location:
    - Remove location from map and observation system
    - Archived observations at that location are preserved but no new observations can be made

### Manage observations
- View dashboard showing:
    - Recent observations
    - Observations requiring review/approval
    - Statistics: total observations, observations per location, active monitors
- Review individual observations:
    - Flag observations for quality issues
    - Add coordinator notes/comments
    - Mark as verified or needs clarification
    - Export observation data (CSV, PDF)
- Send targeted requests for observations:
    - Select specific locations needing more data
    - Draft message to monitors
    - Choose which monitors to notify (all, specific individuals, or those near specific locations)

### Notification management
- Get notification when new observations are made:
    - Email alerts with observation summary
    - Configurable: immediate, daily digest, weekly digest
- Opt in or out of email notifications about new observations
- Configure notification preferences:
    - Which types of observations trigger alerts
    - Which locations to monitor
    - Format of notifications

### View observations
- Access same observation viewing interface as regular users
- Additional coordinator-only features:
    - See observer contact information
    - View observation metadata (IP address, submission timestamp)
    - Download all media files in bulk
    - Export observation reports
    - Filter by verification status
    - See internal coordinator notes