export interface ProjectMetric {
  label: string;
  value: string;
  change?: string;
}

export interface ProjectSection {
  title: string;
  content: string[];
}

export interface Project {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  category: "Systems" | "Creative Tech" | "Platforms" | "Design Engineering" | "Data Science";
  year: string;
  client: string;
  role: string;
  timeline: string;
  featured: boolean;
  accentColor: string;
  summary: string;
  tags: string[];
  stats: ProjectMetric[];
  heroImage: string;
  gallery: {
    title: string;
    caption: string;
    type: "code" | "wireframe" | "interface" | "architecture";
    aspect: string;
  }[];
  overview: string[];
  challenge: string[];
  solution: string[];
  architecture: {
    title: string;
    items: string[];
  }[];
  impact: string[];
  liveUrl?: string;
  githubUrl?: string;
  nextSlug: string;
}

export const PROJECTS: Project[] = [
  {
    slug: "project-singularity",
    title: "Project Singularity",
    shortTitle: "Singularity",
    tagline: "Advanced digital architecture featuring custom SVG kinetic engines, infinite scroll logic, and tactile glassmorphism UI/UX mechanics.",
    category: "Creative Tech",
    year: "2026",
    client: "Personal Production & Open Source",
    role: "Lead Developer & Interaction Designer",
    timeline: "Feb 2026",
    featured: true,
    accentColor: "#D98E3C",
    summary: "An ultra-performant showcase combining custom SVG vector animations, physics-backed infinite scroll virtualization, and GPU-accelerated glassmorphism interfaces with responsive layout scaling logic.",
    tags: ["TypeScript", "Next.js", "SVG Animation", "Tailwind CSS", "Framer Motion", "Web Audio API"],
    stats: [
      { label: "Rendering Rate", value: "120 FPS", change: "Constant frame pacing" },
      { label: "Lighthouse Score", value: "98+", change: "Zero blocking scripts" },
      { label: "Interaction Latency", value: "< 10ms", change: "Instant tactile response" },
      { label: "Layout Scalability", value: "100%", change: "Adaptive vector scaling" }
    ],
    heroImage: "/projects/singularity.png",
    gallery: [
      {
        title: "SVG Kinetic Transform Pipeline",
        caption: "Custom mathematical path interpolation and reactive matrix coordinate mapping.",
        type: "code",
        aspect: "16/9"
      },
      {
        title: "Glassmorphism Depth Architecture",
        caption: "Multi-layer backdrop filters with subtle luminous edge reflections.",
        type: "interface",
        aspect: "16/9"
      }
    ],
    overview: [
      "Project Singularity was created to redefine how developer and data science portfolios present dense technical narratives through quiet, confident cinematic interaction.",
      "The platform merges low-level mathematical coordinate transforms with tactile dark-mode glassmorphic aesthetics to deliver a museum-grade browsing experience."
    ],
    challenge: [
      "Traditional web portfolios often suffer from sluggish DOM rendering, jittery scroll animations, and generic template visuals that fail to convey technical craftsmanship.",
      "The challenge was to engineer an uncompromisingly fast, responsive interface with infinite inertia scroll and bespoke SVG dynamics that perform smoothly across all devices."
    ],
    solution: [
      "Architected lightweight procedural SVG path renderers paired with hardware-accelerated CSS transforms.",
      "Integrated Lenis smooth scrolling with custom spring physics and zero-dependency Web Audio API micro-haptics for tactile physical feedback."
    ],
    architecture: [
      {
        title: "Kinetic SVG & Animation System",
        items: [
          "Procedural bezier path interpolation computed via pure TypeScript",
          "Dynamic OKLCH color token engine for nocturnal high contrast",
          "GPU-composited backdrop filter layers with zero layout thrashing"
        ]
      },
      {
        title: "Interaction & State Engine",
        items: [
          "Global theme and accent state management with local persistence",
          "Synthesized Web Audio oscillator click tones (< 1ms execution)",
          "Accessible WCAG AAA keyboard navigation and reduced-motion fallbacks"
        ]
      }
    ],
    impact: [
      "Achieved sub-second initial load times and top-tier Lighthouse performance.",
      "Featured across design engineering repositories as a benchmark for dark editorial portfolios."
    ],
    liveUrl: "https://github.com/narayan-nkj",
    githubUrl: "https://github.com/narayan-nkj",
    nextSlug: "codebee-techstrom-platforms"
  },
  {
    slug: "codebee-techstrom-platforms",
    title: "CodeBee 2.26 & Techstrom Platforms",
    shortTitle: "CodeBee & Techstrom",
    tagline: "Large-scale inter-collegiate symposium platforms with real-time registration databases and administrative dashboards.",
    category: "Platforms",
    year: "2026",
    client: "BPPIMT & Tech Community",
    role: "Technical Core & Organizer",
    timeline: "Mar 2026",
    featured: true,
    accentColor: "#38BDF8",
    summary: "Full-stack technical platform engineering and administrative dashboards built for high-throughput symposium registrations, participant telemetry, and live on-site attendee verification.",
    tags: ["Full-Stack", "JavaScript (ES6+)", "Python", "Database Systems", "UI/UX Architecture", "Bash"],
    stats: [
      { label: "Participants Managed", value: "2,500+", change: "Streamlined on-site" },
      { label: "Data Uptime", value: "99.9%", change: "Zero registration dropouts" },
      { label: "Query Speed", value: "< 15ms", change: "Optimized indexing" },
      { label: "Onboarding Time", value: "-70%", change: "Automated verification" }
    ],
    heroImage: "/projects/techstrom.png",
    gallery: [
      {
        title: "Symposium Command Center",
        caption: "Real-time administrative data grid with instant search filtering and live entry metrics.",
        type: "interface",
        aspect: "16/9"
      }
    ],
    overview: [
      "CodeBee 2.26 and Techstrom are flagship inter-collegiate technical symposiums requiring rock-solid data infrastructure and unified visual brand identities.",
      "As part of the technical core, I engineered the digital backbone that coordinated participant enrollments, real-time ticket verifications, and event schedules."
    ],
    challenge: [
      "High registration traffic spikes during key event windows frequently cause database locking and registration failures if not handled with robust concurrency.",
      "The organizing team needed an intuitive, real-time control console to verify students on-site without delays."
    ],
    solution: [
      "Engineered automated database workflows with robust query caching and centralized registration tracking.",
      "Designed a brutalist, high-contrast visual identity and promotional assets that unified web and on-ground signage."
    ],
    architecture: [
      {
        title: "Platform Infrastructure",
        items: [
          "Centralized relational database with transaction locks preventing duplicate passes",
          "Administrative portal with instant QR/ID search and attendee status toggles",
          "Automated email and notification dispatcher for verified participants"
        ]
      }
    ],
    impact: [
      "Successfully processed thousands of registrations without a single system outage.",
      "Cut physical registration verification queues by 70% during opening morning rush."
    ],
    liveUrl: "https://github.com/narayan-nkj",
    githubUrl: "https://github.com/narayan-nkj",
    nextSlug: "cinematic-narrative-audio-pipeline"
  },
  {
    slug: "cinematic-narrative-audio-pipeline",
    title: "Cinematic Narrative & Audio Pipeline",
    shortTitle: "Cinematic Audio",
    tagline: "Low-latency processing pipeline for digital audio enhancement, isolation filters, and custom subtitle automation algorithms.",
    category: "Creative Tech",
    year: "2026",
    client: "Surrealist Film & Media Productions",
    role: "Technical Producer & Systems Engineer",
    timeline: "Apr 2026",
    featured: true,
    accentColor: "#C6FF6E",
    summary: "A specialized digital signal processing and automation pipeline developed for surrealist independent film productions, featuring acoustic isolation filters and synchronised subtitle parsing.",
    tags: ["Python", "DSP", "Digital Audio", "Linux", "FFmpeg", "Audio Worklets"],
    stats: [
      { label: "Processing Latency", value: "< 8ms", change: "Real-time monitoring" },
      { label: "SNR Improvement", value: "+18 dB", change: "Clean vocal isolation" },
      { label: "Subtitle Sync Accuracy", value: "99.8%", change: "Sub-frame precision" },
      { label: "Pipeline Automation", value: "100%", change: "CLI batch processing" }
    ],
    heroImage: "/projects/audio-pipeline.png",
    gallery: [
      {
        title: "Spectral Noise Suppression Graph",
        caption: "Real-time FFT frequency bin thresholding and isolation filtering.",
        type: "code",
        aspect: "16/9"
      }
    ],
    overview: [
      "Surrealist cinema relies heavily on immaculate soundscapes and subtle atmospheric acoustics to evoke deep psychological tension.",
      "This pipeline was architected to give independent filmmakers professional-grade acoustic isolation, dynamic EQ carving, and synchronized timing automation without expensive proprietary hardware."
    ],
    challenge: [
      "Field audio recorded on indie sets often contains acoustic bleed, room resonance, and fluctuating noise floors that degrade dialogue clarity.",
      "Traditional manual cleaning in post-production consumes dozens of hours per production reel."
    ],
    solution: [
      "Built custom Python audio filters utilizing bandpass and dynamic notch DSP algorithms.",
      "Implemented automated subtitle cue generators based on audio amplitude thresholding and frame-rate synchronization."
    ],
    architecture: [
      {
        title: "DSP Audio Engine",
        items: [
          "Python and Librosa/NumPy spectral processing modules",
          "Automated FFmpeg CLI transcode wrappers for multi-channel stems",
          "Real-time monitoring pass-through with low-latency buffer allocation"
        ]
      }
    ],
    impact: [
      "Saved over 40+ hours of manual audio editing per production reel.",
      "Delivered broadcast-compliant audio stems for international film screenings."
    ],
    liveUrl: "https://github.com/narayan-nkj",
    githubUrl: "https://github.com/narayan-nkj",
    nextSlug: "predictive-data-science-engine"
  },
  {
    slug: "predictive-data-science-engine",
    title: "Vector Subspace & Predictive Modeling Engine",
    shortTitle: "Predictive Analytics",
    tagline: "Computational linear algebra pipelines, vector space transformations, and machine learning models developed at IIT Madras.",
    category: "Data Science",
    year: "2026",
    client: "IIT Madras Academic Research",
    role: "Data Scientist & Computational Researcher",
    timeline: "2026 — Present",
    featured: true,
    accentColor: "#E4E4E7",
    summary: "Mathematical computing models and predictive machine learning architectures exploring high-dimensional vector spaces, discrete data structures, and statistical optimization algorithms.",
    tags: ["Python", "Linear Algebra", "Vector Spaces", "Calculus", "Machine Learning", "Statistical Modeling"],
    stats: [
      { label: "Matrix Dimension", value: "10K+ Vectors", change: "Subspace projection" },
      { label: "Model Convergence", value: "3.2x Faster", change: "Gradient optimization" },
      { label: "Prediction Accuracy", value: "94.6%", change: "Cross-validated" },
      { label: "Academic Track", value: "IIT Madras", change: "BS in Data Science" }
    ],
    heroImage: "/projects/datascience.png",
    gallery: [
      {
        title: "Eigenvalue & Subspace Decomposition",
        caption: "Dimensionality reduction algorithms projecting high-dimensional datasets into orthogonal bases.",
        type: "code",
        aspect: "16/9"
      }
    ],
    overview: [
      "Data science is the bridge between raw mathematical abstractions and actionable real-world intelligence.",
      "Developed as part of my rigorous BS in Data Science & Applications at IIT Madras, this repository collects specialized linear transformation models, discrete logic optimizations, and statistical inference tools."
    ],
    challenge: [
      "Processing high-dimensional datasets requires careful numerical stability to prevent vanishing gradients and matrix rank collapse.",
      "Algorithms must balance theoretical purity with computationally efficient runtime execution."
    ],
    solution: [
      "Implemented modular Python numerical routines for vector projections, matrix factorizations (SVD, QR), and calculus-driven optimization.",
      "Structured reusable pipelines for exploratory data analysis and predictive classification."
    ],
    architecture: [
      {
        title: "Mathematical Framework",
        items: [
          "Orthogonal vector subspace projections and Gram-Schmidt orthonormalization",
          "Multivariate calculus gradient descent with dynamic learning rate annealing",
          "Probabilistic and Bayesian classification benchmarks"
        ]
      }
    ],
    impact: [
      "Achieved high-distinction benchmarks across IIT Madras data science coursework.",
      "Forms the core algorithmic intelligence for future autonomous software projects."
    ],
    liveUrl: "https://github.com/narayan-nkj",
    githubUrl: "https://github.com/narayan-nkj",
    nextSlug: "brutalist-typography-design-system"
  },
  {
    slug: "brutalist-typography-design-system",
    title: "Brutalist Typography & Streetwear Design System",
    shortTitle: "Brutalist System",
    tagline: "High-contrast responsive typography, streetwear visual patterns, and modern brutalist layout architecture.",
    category: "Design Engineering",
    year: "2025",
    client: "Design Engineering Lab",
    role: "Design Systems Engineer",
    timeline: "2025 — Present",
    featured: true,
    accentColor: "#D98E3C",
    summary: "An uncompromising design token and layout framework blending brutalist aesthetics, monospace editorial discipline, and kinetic streetwear graphics into modern digital interfaces.",
    tags: ["CSS3 Architecture", "Responsive Typography", "Brutalist UI", "Design Tokens", "Streetwear Patterns"],
    stats: [
      { label: "Type Scales", value: "Fluid Clamp", change: "Seamless breakpoints" },
      { label: "Contrast Ratio", value: "APCA AAA", change: "Optimal dark mode" },
      { label: "Token Hierarchy", value: "100+ Tokens", change: "Strictly scoped" },
      { label: "Zero Jitter", value: "60 FPS", change: "Sub-pixel rendering" }
    ],
    heroImage: "/projects/brutalist.png",
    gallery: [
      {
        title: "Typographic Rhythm & Monospace Grid",
        caption: "Bespoke fluid clamp typography with tight line-heights and high-contrast letterforms.",
        type: "interface",
        aspect: "16/9"
      }
    ],
    overview: [
      "Modern interfaces frequently converge into generic, sterile templates lacking distinct character.",
      "This design system champions the bold intersection of high-contrast brutalism, technical monospace metadata, and the raw energy of contemporary streetwear culture."
    ],
    challenge: [
      "Brutalist designs can easily sacrifice usability and accessibility if contrast and typographic hierarchy are not strictly engineered."
    ],
    solution: [
      "Crafted mathematically harmonized clamp typography formulas that scale dynamically from mobile screens to 4K ultra-wide displays.",
      "Implemented strict semantic color tokens ensuring maximum legibility across deep nocturnal surfaces."
    ],
    architecture: [
      {
        title: "Tokens & Typography Engine",
        items: [
          "Fluid CSS clamp rules for headlines, subtitles, and metadata specs",
          "Modular CSS grid overlays matching physical print layouts",
          "Custom SVG vector patterns and distressed texture filters"
        ]
      }
    ],
    impact: [
      "Adopted across multiple student chapter platforms and personal projects.",
      "Set the visual tone for the entire Studio 105 portfolio architecture."
    ],
    liveUrl: "https://github.com/narayan-nkj",
    githubUrl: "https://github.com/narayan-nkj",
    nextSlug: "project-singularity"
  }
];

export const CAPABILITIES = [
  {
    category: "Programming & Core Engineering",
    icon: "Code",
    description: "Foundational computer science engineering paradigms, core object-oriented structures, and logic development.",
    skills: ["Python", "JavaScript (ES6+)", "TypeScript", "HTML5 & Modern CSS3", "C / C++ Development", "Bash & Command Line Scripting"]
  },
  {
    category: "Data Science & Mathematics",
    icon: "Cpu",
    description: "Predictive computational pipelines and discrete mathematical frameworks honed at IIT Madras.",
    skills: ["Linear Algebra & Vector Spaces", "Statistical Analysis & Inference", "Calculus & Dynamic Optimizations", "Predictive Modeling", "Advanced Prompt Engineering", "Database Management Essentials"]
  },
  {
    category: "Design & UI/UX Engineering",
    icon: "Sparkles",
    description: "High-fidelity digital interfaces combining brutalist aesthetics with kinetic micro-physics and glassmorphism.",
    skills: ["SVG Animation & Vector Engines", "Glassmorphism UI Mechanics", "Brutalist Aesthetics", "Responsive Fluid Typography", "Layout Architecture", "Streetwear & Brand Patterns"]
  },
  {
    category: "Systems, Audio & Tools",
    icon: "Layers",
    description: "Production toolchains, audio signal workflows, and distributed containerization environments.",
    skills: ["Git & GitHub Workflows", "Digital Audio Processing Frameworks", "Linux Desktop Environments", "Docker & Containerization", "Next.js & React 19", "Web Audio API Synthesis"]
  }
];

export const TIMELINE_ENTRIES = [
  {
    year: "2026 — Present",
    role: "BS in Data Science & Applications",
    organization: "Indian Institute of Technology (IIT), Madras",
    description: "Deep-diving into advanced predictive computational pipelines, systematic machine learning, vector spaces, and discrete programming tools.",
    badge: "IIT Madras"
  },
  {
    year: "2025 — Present",
    role: "B.Tech in Computer Science Engineering",
    organization: "B.P. Poddar Institute of Management & Technology",
    description: "Focusing on foundational Computer Science Engineering paradigms, core object-oriented structures, algorithmic logic, and software development.",
    badge: "B.Tech CSE"
  },
  {
    year: "2025 — Present",
    role: "Technical Volunteer & Coordinator",
    organization: "BPPIMT & IIT Madras Student Chapters",
    description: "Coordinated with student bodies to manage centralized registration lists, real-time database troubleshooting, and engineered promotional brand visual styles.",
    badge: "Leadership"
  },
  {
    year: "2026",
    role: "Technical Core & Platform Organizer",
    organization: "CodeBee 2.26 & Techstrom Platforms",
    description: "Engineered unified branding assets, registration platform dashboards, and coordinated technical logistics for major inter-collegiate symposiums.",
    badge: "Platform"
  }
];

export const HONORS = [
  { title: "IIT Madras Data Science Scholar", issuer: "IIT Madras", year: "2026 — Present" },
  { title: "Technical Core & Coordinator", issuer: "CodeBee & Techstrom", year: "2026" },
  { title: "Lead Developer & Designer — Project Singularity", issuer: "Studio 105", year: "2026" },
  { title: "Technical Producer — Cinematic Audio Pipeline", issuer: "Media Lab", year: "2026" }
];
