# Vantage Clinical Strategy - Website Setup

## Overview

This is a premium, single-page lead generation website for Vantage Clinical Strategy, built with Next.js, React, and Tailwind CSS. The site is designed to present a clinical psychology and organisational governance firm with institutional credibility and professional design.

## Features

- **Responsive Design**: Mobile-first approach with full responsiveness across all devices
- **Premium Typography**: Custom fonts (Century Gothic for headings, Plus Jakarta Sans for body)
- **Brand Color System**: Midnight Navy, Strategic Gold, Forensic Charcoal, Architectural Grey, and Clinical White
- **Smooth Scrolling Navigation**: Sticky header with anchor links
- **Contact Form**: Ready-to-integrate contact form with validation
- **Team Showcase**: Professional team member section with imagery
- **SEO Optimized**: Proper metadata and semantic HTML

## Installation

### Using shadcn CLI (Recommended)

```bash
npx shadcn-cli@latest init -d
cd [your-project-name]
git clone https://github.com/[your-repo] .
npm install
npm run dev
```

### Manual Installation

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` to see your site.

## Project Structure

```
app/
  ├── layout.tsx           # Root layout with fonts and metadata
  ├── page.tsx             # Main landing page
  ├── globals.css          # Global styles and design tokens
  ├── api/
  │   └── contact/
  │       └── route.ts     # Contact form API endpoint
components/
  ├── header.tsx           # Sticky navigation header
  ├── hero.tsx             # Hero section with CTA
  ├── services.tsx         # Services overview
  ├── about.tsx            # About section with values
  ├── team.tsx             # Team member showcase
  ├── contact-form.tsx     # Contact form component
  └── footer.tsx           # Footer with links
```

## Customization Guide

### Colors

All brand colors are defined in:
- `app/globals.css` (CSS variables)
- `tailwind.config.ts` (Tailwind color utilities)

Current palette:
- `--midnight-navy: #1B2151` (Primary)
- `--strategic-gold: #ECB96A` (Accent)
- `--forensic-charcoal: #161616` (Dark text)
- `--architectural-grey: #919799` (Secondary)
- `--clinical-white: #FEFFFC` (Background)

### Typography

- **Display/Headings**: Century Gothic (custom font)
- **Body**: Plus Jakarta Sans (Google Fonts)

Fonts are configured in:
- `app/layout.tsx` (Font imports)
- `app/globals.css` (@font-face and custom properties)
- `tailwind.config.ts` (Font family extensions)

### Contact Form

The contact form in `components/contact-form.tsx` currently:
- Validates form inputs
- Submits to `/api/contact`
- Shows success/error messages

To fully integrate:
1. Update `/app/api/contact/route.ts` with your email service
2. Add SendGrid, Resend, AWS SES, or similar
3. Implement email notifications

### Team Images

Update the team section in `components/team.tsx`:
- Replace image URLs in the `team` array
- Update names, titles, and email addresses
- Add additional team members as needed

## Environment Variables

Currently, no environment variables are required. To add email integration, add:

```env
# For SendGrid
SENDGRID_API_KEY=your_key

# For Resend
RESEND_API_KEY=your_key

# Email recipients
CONTACT_EMAIL=enquiries@vantageclinicalstrategy.com
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel dashboard
3. Add any required environment variables
4. Deploy

```bash
vercel deploy
```

### Other Platforms

This is a standard Next.js app and works on any platform supporting Node.js:
- Netlify
- AWS Amplify
- Google Cloud Run
- Digital Ocean
- Heroku

## Form Integration

The contact form is ready to integrate with email services. Choose one:

### Option 1: Resend (Recommended)

```bash
npm install resend
```

Update `app/api/contact/route.ts`:
```typescript
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

// In POST handler:
await resend.emails.send({
  from: 'noreply@vantageclinicalstrategy.com',
  to: formData.email,
  subject: 'Vantage Strategic Briefing Inquiry',
  // ... email template
})
```

### Option 2: SendGrid

```bash
npm install @sendgrid/mail
```

### Option 3: AWS SES

Configure AWS credentials and use `@aws-sdk/client-ses`

## Performance

- Optimised images with Next.js Image component
- CSS-in-JS for minimal CSS payload
- Server-side rendering for fast initial load
- Responsive images for different screen sizes

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- Proper heading hierarchy (h1 → h2 → h3)
- Color contrast compliance (WCAG AA)
- Keyboard navigation support

## SEO

- Dynamic meta tags set in `layout.tsx`
- Semantic HTML elements (main, header, footer, section)
- Proper heading structure
- Image alt text
- Mobile-responsive design

## Support & Next Steps

1. **Email Integration**: Set up your preferred email service for contact form
2. **Analytics**: Add Google Analytics or Vercel Analytics
3. **CMS**: Consider Contentful, Sanity, or Notion for dynamic content
4. **Booking**: Integrate Calendly for scheduling calls
5. **Payments**: Add Stripe if offering paid services

## License

This site template is custom built for Vantage Clinical Strategy.
