// All site copy lives here so the components stay presentational.

export type Accent = "teal" | "gold" | "tealDark" | "navy";

export const person = {
  name: "Vikas Gupta",
  location: "New Delhi, India",
  tagline: "Entrepreneur · Educator · Board Advisor · Leadership Coach",
  email: "vrv.gupta@gmail.com",
  phone: { display: "(+91) 9212201149", href: "tel:+919212201149" },
  linkedin: { display: "linkedin.com/in/vikas1gupta", href: "https://linkedin.com/in/vikas1gupta" },
};

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#ventures", label: "Ventures" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#advisory", label: "Advisory" },
  { href: "#academic", label: "Academic" },
];

export const hero = {
  eyebrow: "Serial Entrepreneur · Venture Builder · Board Advisor",
  intro:
    "IIM Ahmedabad alumnus, Company Secretary, and differently abled entrepreneur with two decades of experience founding and scaling businesses across distribution, real estate, food & agri, investing, and retail innovation.",
  stats: [
    { value: "20+", label: "Years of Entrepreneurship" },
    { value: "5", label: "Ventures Founded" },
    { value: "6", label: "Portfolio Investments" },
    { value: "IIMA", label: "PGDM Alumnus" },
  ],
};

export const about = {
  overline: "Profile Summary",
  heading: "Operator. Investor. Ecosystem Builder.",
  paragraphs: [
    "Vikas Gupta brings a rare combination of operator instinct, institutional rigour, investor perspective, and governance expertise. He has founded and scaled businesses across distribution, real estate, food & agri, early-stage tech investing, and retail innovation — each built around category-driven models, capital-efficient scaling, and systems built to last.",
    "As a differently abled entrepreneur, he is also a committed advocate for inclusive and sustainable growth — bringing lived experience to governance, policy, and social impact work.",
  ],
  credentials: [
    { title: "PGDM", detail: "IIM Ahmedabad, 2003", accent: "teal" as Accent },
    { title: "Company Secretary", detail: "ICSI, New Delhi, 2001", accent: "gold" as Accent },
  ],
  competenciesOverline: "Core Competencies",
  competencies: [
    {
      title: "Venture Building",
      body: "0-1 company building · Business model design · Go-to-market strategy · P&L ownership",
      accent: "teal" as Accent,
    },
    {
      title: "Investment & Incubation",
      body: "Early-stage investment · Portfolio management · Deal structuring · Founder mentoring",
      accent: "gold" as Accent,
    },
    {
      title: "Governance & Compliance",
      body: "Board advisory · Regulatory compliance · Corporate governance · Legal structuring",
      accent: "tealDark" as Accent,
    },
    {
      title: "Ecosystem Building",
      body: "Accelerator programs · Sector ecosystem mapping · D2C brand support · Policy research",
      accent: "navy" as Accent,
    },
  ],
};

export const ventures = {
  overline: "Entrepreneurial Track Record",
  heading: "Ventures Founded & Built",
  featured: [
    {
      name: "LandEdge Projects",
      role: "Founder & Promoter",
      period: "Current",
      badge: "Real Estate & Infrastructure",
      accent: "teal" as Accent,
      description:
        "Next-generation industrial and commercial park development venture — building purpose-designed, category-driven infrastructure clusters in high-growth Tier-2/3 markets of India. Replaces fragmented industrial areas with planned, well-serviced commercial ecosystems.",
      features: [
        { title: "Category-Driven Model", body: "Co-locates complementary manufacturers, distributors & D2C brands" },
        { title: "End-to-End Execution", body: "Land identification, regulatory approvals & capital structure" },
        { title: "Replicable Template", body: "Designed for deployment across multiple high-growth corridors" },
      ],
    },
    {
      name: "Growth Originator",
      role: "Founder",
      period: "Current",
      badge: "Food & Agri Accelerator",
      accent: "gold" as Accent,
      description:
        "Food & Agri Venture Accelerator enabling entrepreneurs to create innovative and sustainable enterprises. Accelerates market access for D2C food brands, food-tech platforms, and agri-based ventures through structured programming, ecosystem connections, and hands-on operational support.",
      features: [
        { title: "Accelerator Design", body: "Stage-gate milestones from validation to commercial traction" },
        { title: "Market Access", body: "Distribution partners, institutional buyers & channel intermediaries" },
        { title: "D2C Brand Building", body: "Digital & offline channel strategies for consumer acquisition" },
      ],
    },
  ],
  compact: [
    {
      name: "Spring Lake Mart",
      role: "Founder",
      period: "2022",
      badge: "Retail-Tech",
      accent: "tealDark" as Accent,
      description:
        "Retail-tech venture upgrading India's traditional Kirana stores — automating supply chains and digitising in-store and online ordering without replacing the neighbourhood retail model.",
      highlights: [
        "Supply-chain automation · Real-time inventory · Online ordering integration",
        "Hyper-local rollout · Capital-efficient · Tier II/III store operators",
      ],
    },
    {
      name: "Commsoft Infotech",
      role: "Founding Director",
      period: "Early 2000s – 2016–17",
      badge: "B2B Digital",
      accent: "navy" as Accent,
      description:
        "Pioneering digital company operating marquee B2B portals across travel and utility domains. One of India's first companies to take e-commerce to Tier II & III towns — establishing a template for digital distribution in non-metro markets.",
      highlights: [
        "Multi-category B2B internet platform · Tier II/III pioneer",
        "Structured divestment 2016–17 · Capital recycled into next-gen ventures",
      ],
    },
  ],
  platform: {
    name: "Imaginitiate Ventures",
    role: "Founder, Chief Mentor & Lead Investor",
    period: "2017 – Ongoing",
    badge: "Early-Stage Incubation & Investment",
    description:
      "Early-stage incubation and investment platform supporting passionate entrepreneurial teams. Built a portfolio of six ventures across home décor, B2B consumer durables, employment assessment, jewellery, wholesale, and medical appliances — spanning D2C and B2B models.",
    portfolio: [
      { name: "BrandBuy Store", body: "B2B consumer durables — branded mobiles & smart TVs for neighbourhood stores" },
      { name: "TestMerit", body: "Online employment assessment & HR screening platform" },
      { name: "TenSky Wholesale", body: "Internet-first wholesale serving 300+ wholesalers across North India" },
      { name: "RatnaLalit", body: "Design-centric jewellery — traditional craft meets contemporary aesthetics" },
      { name: "Urban MediMart", body: "Medical appliances marketplace for hospitals, labs & institutions" },
      { name: "Full Investment Cycle", body: "Deal sourcing · Investment structuring · Post-investment governance" },
    ],
  },
};

export const sectors = {
  overline: "Investment Focus",
  heading: "Sector Expertise",
  items: [
    {
      title: "Food & Agri / D2C Brands",
      body: "D2C food brands · food-tech platforms · agri-supply chain · sustainable farming · accelerator ecosystems",
      accent: "teal" as Accent,
    },
    {
      title: "Consumer & Retail-Tech",
      body: "Home décor · B2B consumer durables · Kirana digitisation · internet-first wholesale",
      accent: "gold" as Accent,
    },
    {
      title: "Real Estate & Infrastructure",
      body: "Industrial parks · commercial park development · Tier-2/3 market activation",
      accent: "tealDark" as Accent,
    },
    {
      title: "EdTech, SaaS & Assessment",
      body: "Online assessment platforms · entrepreneurship learning · e-commerce infrastructure",
      accent: "navy" as Accent,
    },
  ],
};

export const advisory = {
  overline: "Board & Advisory",
  heading: "Governance Engagements",
  items: [
    {
      title: "Founding Board Member — Diksha Foundation",
      body: "Nonprofit creating transformative, inclusive learning spaces for children rooted in economic inclusivity and socio-cultural innovation.",
      accent: "gold" as Accent,
      warm: true,
    },
    {
      title: "Strategic Advisory Board — ICWAI Railway Project",
      body: "Government infrastructure initiative driving railway sector reform.",
      accent: "teal" as Accent,
      warm: false,
    },
    {
      title: "Jury Member — ET 'Power of Ideas' (2015 & 2018)",
      body: "CII / CIIE, IIM-A Partnership — evaluated and selected India's most promising startup ideas.",
      accent: "teal" as Accent,
      warm: false,
    },
    {
      title: "Contributor — GEM India Report 2014",
      body: "Global Entrepreneurship Monitor — national research team producing the annual entrepreneurial ecosystem report.",
      accent: "navy" as Accent,
      warm: false,
    },
  ],
};

export const academic = {
  overline: "Knowledge & Thought Leadership",
  heading: "Academic & Publications",
  faculty: {
    title: "Adjunct Faculty",
    institution: "Institute of Management Technology (IMT), Ghaziabad",
    period: "2013–2016",
    specialisation: "Entrepreneurship, Strategy, Public Policy & Marketing",
    points: [
      "Headed the Research Centre for grass-root innovation research",
      "Delivered sessions at IIM Ahmedabad, IMI New Delhi, JGU Business School",
      "Designed curriculum to build entrepreneurial mindset in management students",
    ],
  },
  executiveEducation: {
    title: "Executive Education",
    programmes: [
      { title: "MDP — Creativity & Problem Solving", detail: "Conducted for senior scientists of CSIR (2005–2009)" },
      { title: "LDP — Appreciating the Macro Environment", detail: "Community leaders of Chinmay Tapovan Trust (Nov 2004)" },
    ],
  },
  publications: [
    {
      kind: "Case Study · 2009",
      title: "Sulabh International: Social Transformation Through Sanitation",
      venue: "Vikalpa, IIMA Journal",
    },
    {
      kind: "Research Article · 2005",
      title: "Augmenting Entrepreneurship Among the Privileged Class",
      venue: "ICFAI Journal of Entrepreneurship Development",
    },
    {
      kind: "Article · 2025",
      title: "India's Disability Rights Crisis: 27 Million Left Behind",
      venue: "Disabled World, USA",
    },
  ],
  honours: [
    "ABILIS Foundation, Finland — Emerging disability leader; World Social Forum delegate (2004)",
    "Leadership Development Programme in Human Rights — ActionAid India (2004)",
    "Scholarship, ICSI — Top performance in CS Foundation & Intermediate Exams (1999–2000)",
    "ET Power of Ideas Jury — Recognised evaluator (2015, 2018)",
    "GEM India Report Contributor (2014)",
  ],
};

export const contact = {
  overline: "Available For",
  heading: "Board Advisory & Consulting Engagements",
  body: "Open to board advisory roles, early-stage investment opportunities, accelerator partnerships, academic collaborations, and speaking engagements.",
  tags: ["Board Advisory", "Early-Stage Investment", "Venture Consulting", "Speaking", "Academic"],
};
