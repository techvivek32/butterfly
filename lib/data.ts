// Butterfly — content adapted from GoHighLevel, styled like AiSensy.
// Single source of truth consumed by every section.

export const BRAND = {
  name: "Butterfly",
  tagline: "The AI-powered business operating system",
  email: "hello@butterfly.app",
  phone: "+1 888 732 4197",
  address: ["1801 N. Lamar St.", "Suite 600", "Dallas, Texas 75202"],
} as const;

export const NAV = [
  { label: "Pricing", href: "#pricing" },
  { label: "Product", href: "#solution" },
  { label: "Features", href: "#features" },
  { label: "Why Butterfly", href: "#included" },
  { label: "Stories", href: "#stories" },
  { label: "Integrations", href: "#integrations" },
] as const;

export const HERO = {
  badge: "Power up your business with AI",
  titleLines: ["The AI-powered", "business operating", "system"],
  subtitle:
    "All the tools you need to capture, nurture and close new leads into bookings, sales, reviews and repeat customers.",
  primaryCta: "Start 14 Day Free Trial",
  secondaryCta: "Watch demo",
} as const;

export const STATS = [
  { value: 7, suffix: "M+", label: "AI Voice Calls" },
  { value: 7.3, suffix: "B", label: "Leads Generated" },
  { value: 179, suffix: "M", label: "Appointments Booked" },
  { value: 5.2, prefix: "$", suffix: "B+", label: "Sales Facilitated in 2025" },
] as const;

export const AWARDS = [
  { top: "BEST SOFTWARE", main: "Top 50", sub: "Agentic AI", color: "#f59e0b" },
  { top: "CAPTERRA", main: "Shortlist", sub: "2026", color: "#0ea5e9" },
  { top: "BEST SOFTWARE", main: "Top 50", sub: "Content Mgmt", color: "#10b981" },
  { top: "BEST SOFTWARE", main: "Top 50", sub: "Marketing", color: "#7c3aed" },
  { top: "BEST SOFTWARE", main: "Top 50", sub: "Sales", color: "#d946ef" },
  { top: "USERS LOVE US", main: "Most Likely", sub: "To Recommend", color: "#14b8a6" },
  { top: "EASIEST", main: "To Do", sub: "Business With", color: "#0ea5e9" },
  { top: "BEST SOFTWARE", main: "Top 100", sub: "Products 2026", color: "#f59e0b" },
  { top: "EASIEST", main: "Admin", sub: "Mid-Market", color: "#10b981" },
] as const;

// Interactive "Your all-in-one solution" tabs
export const SOLUTION_TABS = [
  {
    key: "capture",
    label: "Capture",
    heading: "Get more leads in the door",
    blurb:
      "Attract the right people, turn interest into leads and keep your pipeline full.",
    features: [
      "CRM",
      "Voice AI",
      "Forms, Surveys & Quizzes",
      "Websites, Funnels & Landing Pages",
      "Webinar Funnels",
      "Chat Widget / Conversation AI",
      "Call Tracking",
      "Inbound SMS & Social DMs",
      "Social Planner",
      "Missed Call Text-Back",
      "AI Biz Card Scanner",
      "QR Codes",
      "Prospecting Tool",
      "Ad Manager (Google/FB/Insta)",
    ],
    mock: "crm",
  },
  {
    key: "nurture",
    label: "Nurture",
    heading: "Build relationships that convert",
    blurb: "The tools you need to follow up, stay relevant and build trust.",
    features: [
      "Conversation AI",
      "Consolidated conversation stream (SMS, Messenger, Instagram DM, Whatsapp, Livechat)",
      "Sales Pipelines",
      "Workflows & Automations",
      "Calendars Text Snippets",
      "Appointment Reminders",
      "Ringless Voicemail",
      "Mobile App (with video messages)",
      "Automated Outbound Call Connect",
    ],
    mock: "chat",
  },
  {
    key: "close",
    label: "Close",
    heading: "Close deals with less back-and-forth",
    blurb: "Remove friction and turn conversations into paying customers.",
    features: [
      "Lead Scoring",
      "Estimate & Proposals",
      "Invoicing",
      "Payment Integrations",
      "Paid Calendars",
      "Order Forms / Upsells / Downsells",
      "Membership Offers / Courses (paid content access)",
      "One-click Upsell Funnels",
      "Text-2-Pay",
      "Tap-2-Pay",
      "Gift Cards",
      "Loyalty programs",
    ],
    mock: "calendar",
  },
  {
    key: "evangelize",
    label: "Evangelize",
    heading: "Create fans, not just customers",
    blurb:
      "Everything you need to turn happy customers into reviews, referrals and buzz.",
    features: [
      "Reputation Management",
      "Automated Review Requests",
      "Affiliate Manager (for referral tracking)",
      "Website Review Widgets",
      "Video Review Capture",
      "Video Review Widgets",
      "Workflow Automations for Recommendation Requests",
      "AI Review Reply",
      "Social Planner Auto-Review Posts",
      "Communities",
      "Loyalty Programs",
    ],
    mock: "reviews",
  },
  {
    key: "reactivate",
    label: "Reactivate",
    heading: "Get back on their radar",
    blurb:
      "Re-engage past leads and customers with timely messages that drive repeat sales.",
    features: [
      "Broadcast Campaigns - Email/SMS/Whatsapp/Messenger",
      "Smart Lists / Segmentation",
      "Automated Birthday Campaigns",
      "Automated Seasonal Campaigns",
      "Database Reactivation Templates",
      "Newsletter Automation",
      "Content AI",
      "Loyalty Programs",
    ],
    mock: "analytics",
  },
] as const;

export const PILLARS = [
  {
    title: "All-in-one",
    body: "A truly all-in-one platform built for operators, not just marketers.",
    icon: "layers",
  },
  {
    title: "AI as the foundation",
    body: "Deep AI integration across the full business lifecycle.",
    icon: "sparkles",
  },
  {
    title: "Community-driven",
    body: "A community-led ecosystem focused on execution and outcomes.",
    icon: "users",
  },
] as const;

// "Advanced features that drive conversions" — AiSensy-style mockup grid
export const FEATURE_GRID = [
  {
    title: "Multiple Human Live Chat",
    body: "Drive live chat support with your whole team on one unified inbox. Route by tags, campaigns and attributes for smart agent assignment.",
    mock: "inbox",
    tint: "violet",
  },
  {
    title: "Real-Time Analytics",
    body: "Track campaign results in real time. Monitor read, replied and clicked rates and retarget smartly for higher conversions.",
    mock: "analytics",
    tint: "amber",
  },
  {
    title: "Build no-code Workflows in minutes",
    body: "Build your own automation flows your way. An easy drag-and-drop builder to design conversational journeys without code.",
    mock: "flow",
    tint: "sky",
  },
  {
    title: "Import & Broadcast Instantly",
    body: "Import all your contacts and broadcast approved messages instantly. See real-time delivery and read analytics.",
    mock: "import",
    tint: "teal",
  },
] as const;

export const WHY_STATS = [
  { value: "98%", label: "Open Rates" },
  { value: "45-60%", label: "Click Rates" },
  { value: "2.6Bn+", label: "Reach" },
  { value: "70%", label: "Engagement Rate" },
] as const;

// "What's included with Butterfly" comparison table
export const INCLUDED = [
  { feature: "CRM & Pipeline Management", price: 99 },
  { feature: "Unlimited Sales Funnels", price: 297 },
  { feature: "Website Builder", price: 29 },
  { feature: "Surveys & Forms", price: 49 },
  { feature: "Email Marketing", price: 99 },
  { feature: "2-Way SMS Marketing", price: 99 },
  { feature: "Booking & Appointments", price: 29 },
  { feature: "Workflow Automations", price: 169 },
  { feature: "Courses / Products", price: 99 },
  { feature: "Call Tracking", price: 49 },
  { feature: "Reputation Management", price: 159 },
  { feature: "Tracking & Analytics", price: 299 },
  { feature: "Communities", price: 89 },
  { feature: "Document Signing", price: 47 },
] as const;

export const INCLUDED_TOTAL = "$1,600+";
export const INCLUDED_PRICE = "$97";

export const ONTHEGO = {
  title: "Everything you need to grow your business; even on the go!",
  blurb:
    "We make it easy to run your business top to bottom and on the go, with real support when you need it.",
  points: [
    { title: "Mobile App", body: "Run your business from anywhere." },
    { title: "Award-winning support", body: "Get real help from real people." },
    { title: "Automation", body: "Set it up once and let it run." },
  ],
} as const;

export const PRICING = [
  {
    name: "Starter",
    price: 97,
    blurb: "Perfect for freelancers & solo marketers",
    popular: false,
    features: [
      "3 Sub-Accounts",
      "Unlimited Contacts",
      "Unlimited Users",
      "24/7 Support",
      "All Core Features",
    ],
  },
  {
    name: "Unlimited",
    price: 297,
    blurb: "Built for growing agencies",
    popular: true,
    features: [
      "Everything in Starter Plan and…",
      "Unlimited Sub-Accounts",
      "User/Agent Reporting",
      "Rebill Phone & Email (no markup)",
      "Basic API Access",
    ],
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "Gustavo Muñuz Castro",
    role: "Agency Owner",
    quote:
      "A really groundbreaking product, particularly for marketing agency owners.",
    color: "#f59e0b",
  },
  {
    name: "Matt Plapp",
    role: "Founder",
    quote:
      "It's a great product and I look forward to working with you for a long time.",
    color: "#0ea5e9",
  },
  {
    name: "Ian Almasi",
    role: "Marketing Lead",
    quote:
      "When you join Butterfly you get to join a really amazing community.",
    color: "#10b981",
  },
  {
    name: "Christine Seale",
    role: "Consultant",
    quote:
      "I've been able to provide my clients with automated follow-up and lead nurturing.",
    color: "#7c3aed",
  },
] as const;

export const BIG_TESTIMONIAL = {
  name: "Debbie DuBois",
  role: "Compass Marketing Creative",
  color: "#10b981",
  quote:
    "I felt completely supported as soon as I join the platform...These guys care about my business and have taken my business to the next level. The technology is continuing to shift and change while getting better and better. They are providing new services and things that I love.",
} as const;

export const MOVEMENT = [
  {
    title: "By Marketers, For Marketers",
    body: "Axnix was built and powered by marketers focused on the traditional issues marketing professionals face day to day. Once success was found, it was introduced to the market to help marketers face common challenges.",
  },
  {
    title: "Community Driven Development",
    body: "Axnix is committed to helping the Marketing world. We've built a community-driven Ideas Board where you can share and vote on ideas to help lead the direction of development.",
  },
  {
    title: "Network With Other Successful Marketers",
    body: "Connect with other ambitious agency owners, entrepreneurs and marketing professionals who are scaling successful businesses with Axnix.",
  },
] as const;

export const INTEGRATIONS = [
  "Printful", "Xero", "Zapier", "WhatsApp", "Wave", "Facebook",
  "Clio", "Stripe", "Shopify", "TikTok", "QuickBooks", "LinkedIn",
  "Slack", "Mailgun", "Twilio", "Google", "Instagram", "PayPal",
] as const;

export const FOOTER = {
  vs: [
    "Butterfly Vs ActiveCampaign",
    "Butterfly Vs Hubspot",
    "Butterfly Vs ClickFunnels",
    "Butterfly Vs Keap",
    "Butterfly Vs Kartra",
    "Butterfly Vs Salesforce",
  ],
  about: ["Who We Are", "Careers", "Blogs", "Events", "Affiliate Program", "Affiliate Login"],
} as const;

export const ANNOUNCEMENT =
  "This week only — 50% off Butterfly for 3 months. Claim it before it flutters away.";
