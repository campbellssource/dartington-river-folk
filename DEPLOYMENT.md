# Deployment Guide - Vercel Hosting

This guide provides step-by-step instructions for deploying the Bidwell monitors application to Vercel.

## Prerequisites

1. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
2. **GitHub Account**: Repository must be hosted on GitHub
3. **Node.js 18+**: Ensure your local environment matches production

## Quick Deploy to Vercel

### Method 1: Deploy Button (Fastest)

Click the button below to deploy directly to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/campbellssource/dartington-river-folk)

### Method 2: Vercel Dashboard (Recommended)

1. **Log in to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with your GitHub account

2. **Import Project**
   - Click "Add New..." → "Project"
   - Select "Import Git Repository"
   - Choose `campbellssource/dartington-river-folk`
   - Click "Import"

3. **Configure Project**
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `.next` (auto-detected)
   - **Install Command**: `npm install` (auto-detected)

4. **Environment Variables** (Optional for now)
   - Currently no environment variables are required
   - See `.env.example` for future configuration options
   - When backend features are added, you'll need to configure:
     - Database connection strings
     - Authentication secrets
     - File storage tokens
     - Email service credentials

5. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes for the build to complete
   - Your app will be live at `https://your-project-name.vercel.app`

### Method 3: Vercel CLI (For Advanced Users)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy from Project Directory**
   ```bash
   cd /path/to/dartington-river-folk
   # Note: Application is branded as "Bidwell monitors"
   vercel
   ```

4. **Follow the prompts**:
   - Set up and deploy? **Y**
   - Which scope? Select your account/team
   - Link to existing project? **N** (first time)
   - Project name? Use default or customize
   - Directory? `.` (current directory)
   - Override settings? **N** (use defaults)

5. **Production Deployment**
   ```bash
   vercel --prod
   ```

## Configuration Details

### vercel.json

The `vercel.json` file is already configured with optimal settings:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs",
  "regions": ["lhr1"]
}
```

- **Region**: `lhr1` (London) - optimal for UK users
- **Framework**: Next.js auto-optimization enabled
- **Git deployments**: Enabled for `main` branch

### Custom Domain Setup (Optional)

1. **Add Domain in Vercel Dashboard**
   - Go to Project Settings → Domains
   - Enter your domain (e.g., `monitors.BidwellBrook.org`)
   - Follow DNS configuration instructions

2. **DNS Configuration**
   - Add A record pointing to Vercel's IP: `76.76.21.21`
   - Or add CNAME record pointing to `cname.vercel-dns.com`
   - Wait 24-48 hours for DNS propagation

3. **SSL Certificate**
   - Automatically provisioned by Vercel
   - Usually ready within minutes of DNS verification

## Automatic Deployments

Once configured, Vercel automatically deploys:

- **Production**: Every push to `main` branch
- **Preview**: Every pull request gets a unique URL
- **Branch**: Optionally deploy other branches

### Preview Deployments

Every pull request automatically gets a preview URL:
- Review changes before merging
- Test with team members
- Share with stakeholders

## Environment Variables

When you need to add environment variables:

1. **In Vercel Dashboard**
   - Go to Project Settings → Environment Variables
   - Add variables for Production, Preview, and Development
   - Variables are encrypted and secure

2. **Variable Scopes**
   - **Production**: Used in production deployments
   - **Preview**: Used in PR preview deployments
   - **Development**: Used with `vercel dev` command

3. **Example Variables** (when backend is implemented):
   ```
   DATABASE_URL=postgresql://...
   NEXTAUTH_SECRET=your-secret-key
   NEXTAUTH_URL=https://your-domain.vercel.app
   BLOB_READ_WRITE_TOKEN=vercel_blob_token
   ```

## Monitoring and Analytics

### Built-in Vercel Analytics

1. **Enable Analytics**
   - Go to Project → Analytics
   - Enable Web Analytics (free tier available)
   - Add `@vercel/analytics` package if needed

2. **View Metrics**
   - Page views and unique visitors
   - Top pages and referrers
   - Performance scores

### Error Tracking

1. **Enable Error Reporting** (when needed)
   - Integrate with Sentry, LogRocket, or similar
   - Add error boundary components
   - Monitor production issues

## Build Optimization

The project is already optimized for Vercel:

- ✅ **Next.js 16**: Latest version with Turbopack
- ✅ **Static Generation**: Fast page loads
- ✅ **Image Optimization**: Automatic with Next.js Image
- ✅ **Code Splitting**: Automatic with App Router
- ✅ **Edge Caching**: Vercel CDN enabled

### Performance Tips

1. **Images**: Use Next.js `<Image>` component
2. **Fonts**: Use `next/font` for optimal loading
3. **Static Assets**: Place in `/public` directory
4. **API Routes**: Keep minimal for serverless limits

## Troubleshooting

### Build Fails

1. **Check Build Logs**
   - View detailed logs in Vercel dashboard
   - Look for missing dependencies or TypeScript errors

2. **Test Locally**
   ```bash
   npm run build
   npm start
   ```

3. **Common Issues**
   - Missing environment variables
   - TypeScript errors
   - Import path issues

### Deployment Issues

1. **DNS Not Resolving**
   - Wait up to 48 hours for propagation
   - Verify DNS records with `dig your-domain.com`

2. **Build Timeout**
   - Optimize build process
   - Remove unused dependencies
   - Contact Vercel support for increased limits

### Performance Issues

1. **Check Web Vitals**
   - Use Vercel Analytics
   - Run Lighthouse audits
   - Optimize images and fonts

2. **Monitor Function Execution**
   - Review serverless function logs
   - Check execution time and memory usage

## Rollback Procedure

If a deployment causes issues:

1. **Via Dashboard**
   - Go to Deployments
   - Find previous working deployment
   - Click "⋯" → "Promote to Production"

2. **Via CLI**
   ```bash
   vercel rollback
   ```

## Support and Resources

- **Vercel Documentation**: [vercel.com/docs](https://vercel.com/docs)
- **Next.js Documentation**: [nextjs.org/docs](https://nextjs.org/docs)
- **Vercel Support**: [vercel.com/support](https://vercel.com/support)
- **Community Discord**: [vercel.com/discord](https://vercel.com/discord)

## Security Best Practices

1. **Environment Variables**: Never commit secrets to Git
2. **HTTPS**: Always enabled on Vercel (automatic)
3. **Security Headers**: Add in `next.config.ts` if needed
4. **Rate Limiting**: Implement when adding API routes
5. **CORS**: Configure when adding external API access

## Cost Considerations

**Free Tier Includes:**
- Unlimited personal projects
- Automatic HTTPS
- 100GB bandwidth/month
- Serverless function executions (100GB-hours)
- Edge Network (CDN)

**Upgrade When:**
- Need more bandwidth (>100GB/month)
- Team collaboration features
- Password protection
- Advanced analytics

## Next Steps After Deployment

Once deployed, you can:

1. ✅ **Verify deployment** at your Vercel URL
2. ✅ **Test all pages** and functionality
3. ✅ **Share with stakeholders** for feedback
4. ✅ **Set up custom domain** (optional)
5. ✅ **Enable analytics** to track usage
6. 🔄 **Implement backend** (database, auth, API routes)
7. 🔄 **Add full functionality** per specification

## Current Status

**What's Deployed:**
- ✅ Homepage with project overview
- ✅ Location selection page (20 sites)
- ✅ Observation recording form
- ✅ Volunteer registration page
- ✅ Responsive design
- ✅ Basic navigation

**What's Next to Implement:**
- Database for storing observations
- User authentication system
- File upload for photos/videos
- Interactive map integration
- Observation browsing and search
- Coordinator dashboard
- Email notifications

---

**Questions or Issues?** Open an issue in the GitHub repository or contact the project team.
