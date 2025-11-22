# Bidwell Brook Partnership - Water/River Observation Survey App

A Next.js web application for volunteers to record water and river interaction observations to help understand drainage patterns and potential flooding issues.

## Overview

This application helps volunteers from the Bidwell Brook Partnership survey record observations at 20 designated locations. Each location has specific questions about water flow, runoff, and drainage interactions that need to be answered to understand the relationship between informal (agricultural land and natural spaces) and formal drainage systems.

## Features

### 1. Home Page
- Project overview and introduction
- Quick navigation to three main sections
- Guidance on what to look for during observations

### 2. Volunteer Registration
- Register as an observer with contact details
- Record organization/affiliation
- Note previous experience (optional)

### 3. Location Selection
- Choose from 20 observation points
- Each location displays its specific research question
- Search functionality to find locations quickly
- Observation tips and guidance

### 4. Observation Recording
- Record detailed observations for selected location
- Capture:
  - Observer name
  - Date and time
  - Weather conditions
  - Evidence types (erosion, sediment deposits, water staining, pooling, active flow)
  - Detailed written observations
  - Photos (recommended)
  - Additional notes

## Observation Locations

The app includes all 20 observation points from the BBP Survey Briefing Note, including locations monitoring:
- Highway drainage gully interactions
- Watercourse crossings and manholes
- Surface water accumulation points
- Combined sewer and watercourse interactions
- Farm track and road drainage patterns

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/campbellssource/dartington-river-folk.git
cd dartington-river-folk
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## Deployment to Vercel

This application is optimized for deployment on Vercel's platform.

### Quick Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/campbellssource/dartington-river-folk)

### Manual Deployment

1. Push your code to GitHub
2. Import the repository in [Vercel Dashboard](https://vercel.com/new)
3. Vercel will auto-detect Next.js and configure optimal settings
4. Click "Deploy" - your app will be live in minutes!

### Vercel CLI Deployment

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy to Vercel
vercel

# Deploy to production
vercel --prod
```

For detailed deployment instructions, troubleshooting, and configuration options, see [DEPLOYMENT.md](./DEPLOYMENT.md).

## Project Structure

```
├── app/
│   ├── data/
│   │   └── locations.ts          # Location data and evidence types
│   ├── locations/
│   │   └── page.tsx              # Location selection page
│   ├── observe/
│   │   └── page.tsx              # Observation recording page
│   ├── volunteer/
│   │   └── page.tsx              # Volunteer registration page
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Home page
│   └── globals.css               # Global styles
├── spec/
│   ├── BBP Survey Briefing Note.pdf
│   ├── BBP Survey Briefing Plan.pdf
│   └── map.png                   # Location map
└── public/                       # Static assets
```

## Technology Stack

- **Framework**: Next.js 16.0.3 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Maps**: Leaflet with OpenStreetMap
- **Deployment**: Optimized for Vercel (also supports Netlify or any Node.js hosting)

## Evidence Types to Look For

Volunteers should look for and record:
- **Erosion Patterns**: Bare soil, gullies, or washouts caused by water movement
- **Sediment Deposits**: Areas where silt or debris has accumulated
- **Water Staining**: Discoloration or staining on surfaces indicating past water flow
- **Pooling Areas**: Spots where water tends to accumulate
- **Active Flow**: Water flow during or shortly after rainfall

## Best Observation Practices

- Visit locations during or shortly after periods of heavy or prolonged rainfall
- Take multiple photos from different angles
- Record exact date and time of observations
- Note specific details about water flow paths and drainage patterns
- Mark locations on maps when possible

## Future Enhancements

Potential additions to the application:
- Backend API for data persistence
- Database integration
- Interactive map functionality
- Data visualization and reporting
- User authentication
- Export observations to CSV/PDF
- Admin dashboard for managing observations

## Contributing

This is a community project for the Bidwell Brook Partnership. For questions or contributions, please contact the project maintainers.

## License

This project is for use by the Bidwell Brook Partnership and associated volunteers.

## Support

For technical issues or questions about the survey, please contact the project team.

---

*Built with ❤️ for the Bidwell Brook Partnership*
