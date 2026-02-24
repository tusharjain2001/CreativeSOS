// src/data/projectsData.js
import image from "../Images/Result4.png";
import Infinitus from "../Images/Infinitus.png";
import Desifesst from "../Images/Desifesst.png";
import Mapmy from "../Images/Mapmy.png";
import Timor from "../Images/Timor.png";
import Naxatra from "../Images/Naxatra.png";
import InfintusBanner from "../Images/InfinitusOv.png";
import InfinitusStep2 from "../Images/infinitus_steps/infinitus_step2.png";
import InfinitusStep3A from "../Images/infinitus_steps/infinitus_step3a.png";
import InfinitusStep3B from "../Images/infinitus_steps/infinitus_step3b.png";
import InfinitusStep4 from "../Images/infinitus_steps/infinitus_step4.png";
import InfinitusStep5A from "../Images/infinitus_steps/infinitus_step5a.png";
import InfinitusStep5B from "../Images/infinitus_steps/infinitus_step5b.png";
import InfinitusStep5C from "../Images/infinitus_steps/infinitus_step5c.png";
import InfinitusStep5D from "../Images/infinitus_steps/infinitus_step5d.png";
import InfinitusStep6 from "../Images/infinitus_steps/infinitus_step6.png";
import InfinitusStep7 from "../Images/infinitus_steps/infinitus_step7.png";
import InfinitusStep8 from "../Images/infinitus_steps/infinitus_step8.png";
import InfinitusStep9A from "../Images/infinitus_steps/infinitus_step9a.png";
import InfinitusStep9B from "../Images/infinitus_steps/infinitus_step9b.png";
import InfinitusStep10 from "../Images/infinitus_steps/infinitus_step10.png";
import InfinitusStep11A from "../Images/infinitus_steps/infinitus_step11a.png";
import InfinitusStep11B from "../Images/infinitus_steps/infinitus_step11b.png";
import fusion from "../assets/fusion/fusionlogo.png";
import FusionStep1 from "../assets/fusion/stepone.png";
import FusionStep2 from "../assets/fusion/steptwo.png";
import FusionStep4 from "../assets/fusion/stepfour.png";
import FusionStep6 from "../assets/fusion/stepsix.png";
import FusionStep7 from "../assets/fusion/stepseven.png";
import FusionStep8light from "../assets/fusion/stepeightlight.png";
import FusionStep8Dark from "../assets/fusion/stepeightdark.png";
import FusionStep9 from "../assets/fusion/stepnine.png";
import collage from "../Images/infinitus_steps/collage.svg";

export const PROJECTS_DATA = {
  infinitus: {
    // ========== PORTFOLIO PAGE DATA ==========
    portfolioTitle: "Infinitus Management Consulting",
    portfolioDesc:
      "Infinitus installs GTM systems for cybersecurity companies that need to scale continuously and fast. ",
    portfolioImage: Infinitus, // Your image path
    tags: ["Branding", "Industry Name"],

    // ========== PROJECT STEPS ==========
    steps: [
      "Project Overview",
      "Scope of the Project",
      "Logo Variations",
      "Mood Board",
      "Color",
      "Typography",
      "Shapes and Patterns",
      "UI Elements",
      "Icons",
      "Stationary",
      "Social Media",
      "Collage",
      "View Project",
    ],

    // ========== STEP 1: PROJECT OVERVIEW ==========
    step1: {
      projectName: "INFINITUS Management Consulting",
      overview:
        "Revamp the existing website into a modern, visually appealing, product-like AI website while maintaining simplicity for smooth web development. The goal is to elevate the brand from a typical IT services look to a premium AI product platform with clean UI, strong structure, and minimal animations.",
      industry: "AI Industrial Automation",
      client: "Safe Sight AI",
      deliverables:
        "Responsive Website Design, Brand Guidelines, Design System, Component Library",
      overviewImage: InfintusBanner,
    },

    // ========== STEP 2: SCOPE OF PROJECT ==========
    step2: {
      image: InfinitusStep2,
    },

    // ========== STEP 3: BRAND IDENTITY ==========
    step3: {
      logoImages: [InfinitusStep3A, InfinitusStep3B],
      brandImage: InfinitusStep3A,
    },

    // ========== STEP 4: OUR PROCESS ==========
    step4: {
      image: InfinitusStep4,
    },

    // ========== STEP 5: COLOR ==========
    step5: {
      colorImages: [
        InfinitusStep5A,
        InfinitusStep5B,
        InfinitusStep5C,
        InfinitusStep5D,
      ],
    },

    // ========== STEP 6: TYPOGRAPHY ==========
    step6: {
      image: InfinitusStep6,
    },

    // ========== STEP 7: SHAPES AND PATTERNS ==========
    step7: {
      image: InfinitusStep7,
      responsiveImage: InfinitusStep7,
    },
    step8: {
      image: InfinitusStep8,
      responsiveImage: InfinitusStep8,
    },
    step9: {
      lightImage: InfinitusStep9A,
      darkImage: InfinitusStep9B,
      responsiveImage: InfinitusStep9A,
    },
    step10: {
      image: InfinitusStep10,
      responsiveImage: InfinitusStep10,
    },
    step11: {
      lightImage: InfinitusStep11A,
      darkImage: InfinitusStep11B,
      responsiveImage: InfinitusStep11A,
    },
    step12: {
      image: collage,
      responsiveImage: collage,
    },
  },
  fusion: {
    portfolioTitle: "FUSION",
    portfolioDesc:
      "Godesyn is built on conversion-driven services; the brands and people we partner with.",
    portfolioImage: fusion,
    tags: ["Branding", "Industry Name"],

    steps: [
      "Project Overview",
      "Scope of the Project",
      "Logo Variations",
      "Mood Board",
      "Color",
      "Typography",
      "Shapes and elements",
      "Icons",
      "Design Collection",
      "View Project",
    ],

    step1: {
      projectName: "FUSION",
      overview:
        "For a brand tailored for corporate clients in manufacturing technology, the identity should convey reliability and technical expertise while showcasing the synergy between software and hardware.",
      industry: "Manufacturing Technology",
      client: "Fusion Platform",
      deliverables: "Brand Guidelines, Logo System, Social Media Kit",
      overviewImage: FusionStep1,
    },
    step2: {
      image: FusionStep2,
    },
    step3: {
      image: FusionStep2,
    },
    step4: {
      image: FusionStep4,
    },
    step5: {
      colorImages: [
        InfinitusStep5A,
        InfinitusStep5B,
        InfinitusStep5C,
        InfinitusStep5D,
      ],
    },
    step6: {
      image: FusionStep6,
    },
    step7: {
      image: FusionStep7,
    },
    step8: {
      lightImage: FusionStep8light,
      darkImage: FusionStep8Dark,
    },
    step9: {
      image: FusionStep9,
    },
    step10: {
      responsiveImage: FusionStep9,
    },
  },

  "demand-gen": {
    portfolioTitle: "Demand Generation Campaign",
    portfolioDesc:
      "Multi-channel marketing campaign driving 300% increase in qualified leads through strategic content and targeted advertising.",
    portfolioImage: image,
    tags: ["Branding", "Industry Name"],

    // ========== PROJECT STEPS ==========
    steps: [
      "Project Overview",
      "Scope of the Project",
      "Brand Identity",
      "Our Process",
      "System Design",
      "Design Details",
      "Responsive Design",
    ],

    step1: {
      projectName: "Demand Generation Campaign",
      overview:
        "Comprehensive demand generation strategy combining content marketing, social media, and targeted advertising to drive qualified leads and increase brand awareness in competitive B2B market.",
      industry: "SaaS Marketing",
      client: "TechFlow Solutions",
      deliverables:
        "Content Strategy, Ad Campaigns, Landing Pages, Email Sequences",
      overviewImage: "/images/projects/demand-gen/overview-banner.jpg",
    },

    step2: {
      clientGoal: {
        description: "Drive 300% increase in qualified leads within 6 months",
        image: "/images/projects/demand-gen/client-goal.jpg",
        pointers: [
          "Increase brand awareness in target markets",
          "Generate high-quality MQLs for sales team",
          "Reduce cost per acquisition by 40%",
          "Build sustainable content pipeline",
          "Establish thought leadership position",
        ],
      },
      targetAudience: {
        description: "B2B SaaS decision makers in mid-market companies",
        image: "/images/projects/demand-gen/target-audience.jpg",
        pointers: [
          "VPs of Marketing and Sales",
          "Revenue operations leaders",
          "Growth-focused startups and scale-ups",
          "Companies with 50-500 employees",
          "Tech-savvy early adopters",
        ],
      },
      constraints: {
        description: "Project scope and resource limitations",
        image: "/images/projects/demand-gen/constraints.jpg",
        pointers: [
          "Limited in-house content creation resources",
          "Competitive market with high CPCs",
          "Need for quick results within Q2",
          "Integration with existing MarTech stack",
          "Compliance with data privacy regulations",
        ],
      },
    },

    step3: {
      brandImage: "/images/projects/demand-gen/brand-identity-full.jpg",
    },

    step4: {
      sitemapImage: "/images/projects/demand-gen/sitemap.jpg",
      wireframeImage: "/images/projects/demand-gen/wireframe.jpg",
      finalDesignImage: "/images/projects/demand-gen/final-design.jpg",
    },

    step5: {
      images: [
        "/images/projects/demand-gen/system-1.jpg",
        "/images/projects/demand-gen/system-2.jpg",
        "/images/projects/demand-gen/system-3.jpg",
        "/images/projects/demand-gen/system-4.jpg",
        "/images/projects/demand-gen/system-5.jpg",
      ],
    },

    step6: {
      images: [
        "/images/projects/demand-gen/detail-1.jpg",
        "/images/projects/demand-gen/detail-2.jpg",
        "/images/projects/demand-gen/detail-3.jpg",
        "/images/projects/demand-gen/detail-4.jpg",
        "/images/projects/demand-gen/detail-5.jpg",
        "/images/projects/demand-gen/detail-6.jpg",
      ],
    },

    step7: {
      responsiveImage: "/images/projects/demand-gen/responsive.jpg",
    },
  },

  "product-launch": {
    portfolioTitle: "Product Launch Strategy",
    portfolioDesc:
      "Successfully launched new AI feature to 50K+ users with comprehensive go-to-market strategy and user onboarding.",
    portfolioImage: Desifesst,
    tags: ["UX/UI - Wesbite"],

    // ========== PROJECT STEPS ==========
    steps: [
      "Project Overview",
      "Scope of the Project",
      "Brand Identity",
      "Our Process",
      "System Design",
      "Design Details",
      "Responsive Design",
    ],

    step1: {
      projectName: "Product Launch Strategy",
      overview:
        "End-to-end product launch strategy for AI-powered analytics feature, including positioning, messaging, marketing campaigns, and customer onboarding flows.",
      industry: "Product Management",
      client: "DataViz Pro",
      deliverables:
        "Launch Strategy, Marketing Collateral, Product Videos, Onboarding Flows",
      overviewImage: "/images/projects/product-launch/overview-banner.jpg",
    },

    step2: {
      clientGoal: {
        description:
          "Successfully launch new AI analytics feature to existing user base",
        image: "/images/projects/product-launch/client-goal.jpg",
        pointers: [
          "Achieve 30% adoption within first month",
          "Generate buzz in analytics community",
          "Drive 25% increase in premium subscriptions",
          "Establish competitive differentiation",
          "Create scalable onboarding system",
        ],
      },
      targetAudience: {
        description: "Data analysts and business intelligence professionals",
        image: "/images/projects/product-launch/target-audience.jpg",
        pointers: [
          "Existing users of analytics platforms",
          "Data-driven decision makers",
          "Business analysts seeking automation",
          "Small to medium analytics teams",
          "Non-technical business users",
        ],
      },
      constraints: {
        description: "Launch timeline and resource constraints",
        image: "/images/projects/product-launch/constraints.jpg",
        pointers: [
          "Fixed launch date tied to conference",
          "Limited development resources for changes",
          "Simultaneous multi-market launch required",
          "Coordination across 5 departments",
          "Legacy system integration challenges",
        ],
      },
    },

    step3: {
      brandImage: "/images/projects/product-launch/brand-identity-full.jpg",
    },

    step4: {
      sitemapImage: "/images/projects/product-launch/sitemap.jpg",
      wireframeImage: "/images/projects/product-launch/wireframe.jpg",
      finalDesignImage: "/images/projects/product-launch/final-design.jpg",
    },

    step5: {
      images: [
        "/images/projects/product-launch/system-1.jpg",
        "/images/projects/product-launch/system-2.jpg",
        "/images/projects/product-launch/system-3.jpg",
        "/images/projects/product-launch/system-4.jpg",
        "/images/projects/product-launch/system-5.jpg",
      ],
    },

    step6: {
      images: [
        "/images/projects/product-launch/detail-1.jpg",
        "/images/projects/product-launch/detail-2.jpg",
        "/images/projects/product-launch/detail-3.jpg",
        "/images/projects/product-launch/detail-4.jpg",
        "/images/projects/product-launch/detail-5.jpg",
        "/images/projects/product-launch/detail-6.jpg",
      ],
    },

    step7: {
      responsiveImage: "/images/projects/product-launch/responsive.jpg",
    },
  },

  "content-hub": {
    portfolioTitle: "Content Hub Development",
    portfolioDesc:
      "Built comprehensive content management system with advanced search, personalization, and analytics for 100K+ monthly visitors.",
    portfolioImage: Mapmy,
    tags: ["Brand Identity"],

    // ========== PROJECT STEPS ==========
    steps: [
      "Project Overview",
      "Scope of the Project",
      "Brand Identity",
      "Our Process",
      "System Design",
      "Design Details",
      "Responsive Design",
    ],

    step1: {
      projectName: "Content Hub Development",
      overview:
        "Create a centralized content hub with advanced categorization, search functionality, and personalized content recommendations to improve user engagement and content discoverability.",
      industry: "Content Marketing",
      client: "MediaCorp Digital",
      deliverables:
        "Content Strategy, CMS Setup, Editorial Calendar, Analytics Dashboard",
      overviewImage: "/images/projects/content-hub/overview-banner.jpg",
    },

    step2: {
      clientGoal: {
        description:
          "Create centralized content hub to improve discoverability and engagement",
        image: "/images/projects/content-hub/client-goal.jpg",
        pointers: [
          "Increase content consumption by 200%",
          "Reduce bounce rate by 40%",
          "Implement personalized recommendations",
          "Create unified content taxonomy",
          "Enable multi-channel distribution",
        ],
      },
      targetAudience: {
        description: "Content consumers and professional researchers",
        image: "/images/projects/content-hub/target-audience.jpg",
        pointers: [
          "Industry professionals seeking insights",
          "Students and academic researchers",
          "Business decision makers",
          "Content marketers and strategists",
          "Casual readers interested in trends",
        ],
      },
      constraints: {
        description: "Technical and content migration challenges",
        image: "/images/projects/content-hub/constraints.jpg",
        pointers: [
          "Migration of 5000+ existing articles",
          "Limited budget for custom development",
          "Must maintain SEO rankings",
          "Integration with 3 legacy systems",
          "Tight 12-week timeline",
        ],
      },
    },

    step3: {
      brandImage: "/images/projects/content-hub/brand-identity-full.jpg",
    },

    step4: {
      sitemapImage: "/images/projects/content-hub/sitemap.jpg",
      wireframeImage: "/images/projects/content-hub/wireframe.jpg",
      finalDesignImage: "/images/projects/content-hub/final-design.jpg",
    },

    step5: {
      images: [
        "/images/projects/content-hub/system-1.jpg",
        "/images/projects/content-hub/system-2.jpg",
        "/images/projects/content-hub/system-3.jpg",
        "/images/projects/content-hub/system-4.jpg",
        "/images/projects/content-hub/system-5.jpg",
      ],
    },

    step6: {
      images: [
        "/images/projects/content-hub/detail-1.jpg",
        "/images/projects/content-hub/detail-2.jpg",
        "/images/projects/content-hub/detail-3.jpg",
        "/images/projects/content-hub/detail-4.jpg",
        "/images/projects/content-hub/detail-5.jpg",
        "/images/projects/content-hub/detail-6.jpg",
      ],
    },

    step7: {
      responsiveImage: "/images/projects/content-hub/responsive.jpg",
    },
  },

  "retention-campaign": {
    portfolioTitle: "Customer Retention Program",
    portfolioDesc:
      "Designed data-driven retention strategy reducing churn by 45% through personalized engagement and proactive support.",
    portfolioImage: Timor,
    tags: ["Print - Report"],

    // ========== PROJECT STEPS ==========
    steps: [
      "Project Overview",
      "Scope of the Project",
      "Brand Identity",
      "Our Process",
      "System Design",
      "Design Details",
      "Responsive Design",
    ],

    step1: {
      projectName: "Customer Retention Program",
      overview:
        "Comprehensive customer retention program leveraging behavioral data, personalized communications, and proactive support to reduce churn and increase customer lifetime value.",
      industry: "Customer Success",
      client: "RetainCo SaaS",
      deliverables:
        "Retention Strategy, Email Campaigns, Customer Journey Maps, Success Playbooks",
      overviewImage: "/images/projects/retention-campaign/overview-banner.jpg",
    },

    step2: {
      clientGoal: {
        description: "Reduce churn rate and increase customer lifetime value",
        image: "/images/projects/retention-campaign/client-goal.jpg",
        pointers: [
          "Reduce monthly churn from 8% to 4%",
          "Increase NPS score by 20 points",
          "Identify at-risk customers early",
          "Implement proactive support program",
          "Create customer health scoring system",
        ],
      },
      targetAudience: {
        description: "Existing SaaS customers at various lifecycle stages",
        image: "/images/projects/retention-campaign/target-audience.jpg",
        pointers: [
          "New customers in onboarding phase",
          "Active users with declining engagement",
          "Power users ready for upsells",
          "At-risk customers showing churn signals",
          "Recently churned customers for win-back",
        ],
      },
      constraints: {
        description: "Data and resource limitations",
        image: "/images/projects/retention-campaign/constraints.jpg",
        pointers: [
          "Limited customer success team size",
          "Fragmented data across platforms",
          "Manual processes for monitoring",
          "No existing health score system",
          "Budget constraints for automation tools",
        ],
      },
    },

    step3: {
      brandImage: "/images/projects/retention-campaign/brand-identity-full.jpg",
    },

    step4: {
      sitemapImage: "/images/projects/retention-campaign/sitemap.jpg",
      wireframeImage: "/images/projects/retention-campaign/wireframe.jpg",
      finalDesignImage: "/images/projects/retention-campaign/final-design.jpg",
    },

    step5: {
      images: [
        "/images/projects/retention-campaign/system-1.jpg",
        "/images/projects/retention-campaign/system-2.jpg",
        "/images/projects/retention-campaign/system-3.jpg",
        "/images/projects/retention-campaign/system-4.jpg",
        "/images/projects/retention-campaign/system-5.jpg",
      ],
    },

    step6: {
      images: [
        "/images/projects/retention-campaign/detail-1.jpg",
        "/images/projects/retention-campaign/detail-2.jpg",
        "/images/projects/retention-campaign/detail-3.jpg",
        "/images/projects/retention-campaign/detail-4.jpg",
        "/images/projects/retention-campaign/detail-5.jpg",
        "/images/projects/retention-campaign/detail-6.jpg",
      ],
    },

    step7: {
      responsiveImage: "/images/projects/retention-campaign/responsive.jpg",
    },
  },

  "sales-enablement": {
    portfolioTitle: "Sales Enablement Platform",
    portfolioDesc:
      "Created comprehensive sales enablement system with collateral management, training, and analytics resulting in 60% faster deal cycles.",
    portfolioImage: Naxatra,
    tags: ["Video - Corporate"],

    // ========== PROJECT STEPS ==========
    steps: [
      "Project Overview",
      "Scope of the Project",
      "Brand Identity",
      "Our Process",
      "System Design",
      "Design Details",
      "Responsive Design",
    ],

    step1: {
      projectName: "Sales Enablement Platform",
      overview:
        "End-to-end sales enablement platform providing sales teams with the right content, tools, and insights at the right time to accelerate deal cycles and improve win rates.",
      industry: "Sales Operations",
      client: "SalesPro Enterprise",
      deliverables:
        "Sales Collateral, Pitch Decks, Demo Videos, Training Materials, CRM Integration",
      overviewImage: "/images/projects/sales-enablement/overview-banner.jpg",
    },

    step2: {
      clientGoal: {
        description:
          "Empower sales team with tools and content to close deals faster",
        image: "/images/projects/sales-enablement/client-goal.jpg",
        pointers: [
          "Reduce sales cycle from 90 to 60 days",
          "Increase win rate by 25%",
          "Centralize all sales collateral",
          "Provide real-time competitive intelligence",
          "Enable data-driven coaching",
        ],
      },
      targetAudience: {
        description: "Sales representatives and managers",
        image: "/images/projects/sales-enablement/target-audience.jpg",
        pointers: [
          "Field sales representatives",
          "Inside sales development reps",
          "Sales managers and directors",
          "Sales operations team",
          "Channel partners and resellers",
        ],
      },
      constraints: {
        description: "Implementation and adoption challenges",
        image: "/images/projects/sales-enablement/constraints.jpg",
        pointers: [
          "Resistance to new tools and processes",
          "Complex integration requirements",
          "Distributed team across time zones",
          "Need for rapid onboarding",
          "Maintaining content freshness",
        ],
      },
    },

    step3: {
      brandImage: "/images/projects/sales-enablement/brand-identity-full.jpg",
    },

    step4: {
      sitemapImage: "/images/projects/sales-enablement/sitemap.jpg",
      wireframeImage: "/images/projects/sales-enablement/wireframe.jpg",
      finalDesignImage: "/images/projects/sales-enablement/final-design.jpg",
    },

    step5: {
      images: [
        "/images/projects/sales-enablement/system-1.jpg",
        "/images/projects/sales-enablement/system-2.jpg",
        "/images/projects/sales-enablement/system-3.jpg",
        "/images/projects/sales-enablement/system-4.jpg",
        "/images/projects/sales-enablement/system-5.jpg",
      ],
    },

    step6: {
      images: [
        "/images/projects/sales-enablement/detail-1.jpg",
        "/images/projects/sales-enablement/detail-2.jpg",
        "/images/projects/sales-enablement/detail-3.jpg",
        "/images/projects/sales-enablement/detail-4.jpg",
        "/images/projects/sales-enablement/detail-5.jpg",
        "/images/projects/sales-enablement/detail-6.jpg",
      ],
    },

    step7: {
      responsiveImage: "/images/projects/sales-enablement/responsive.jpg",
    },
  },

  "social-media-campaign": {
    portfolioTitle: "Social Media Campaign",
    portfolioDesc:
      "Viral social media campaign reaching 5M+ impressions and generating 50K engagements across multiple platforms.",
    portfolioImage: "/images/portfolio/social.jpg",
    tags: ["Social Media", "Viral"],

    // ========== PROJECT STEPS ==========
    steps: [
      "Project Overview",
      "Scope of the Project",
      "Brand Identity",
      "Our Process",
      "System Design",
      "Design Details",
      "Responsive Design",
    ],

    step1: {
      projectName: "Social Media Campaign",
      overview:
        "Multi-platform social media campaign combining organic content, influencer partnerships, and paid promotion to build brand awareness and drive community engagement.",
      industry: "Social Media Marketing",
      client: "SocialBrand Inc",
      deliverables:
        "Social Strategy, Content Calendar, Ad Campaigns, Influencer Program, Analytics Reports",
      overviewImage:
        "/images/projects/social-media-campaign/overview-banner.jpg",
    },

    step2: {
      clientGoal: {
        description: "Build brand awareness and engaged social community",
        image: "/images/projects/social-media-campaign/client-goal.jpg",
        pointers: [
          "Reach 5M impressions in 3 months",
          "Grow follower base by 200%",
          "Achieve 5% engagement rate",
          "Generate 1000+ UGC posts",
          "Establish brand voice and personality",
        ],
      },
      targetAudience: {
        description: "Millennials and Gen Z social media users",
        image: "/images/projects/social-media-campaign/target-audience.jpg",
        pointers: [
          "Ages 18-35 active on social platforms",
          "Early adopters of new trends",
          "Consumers who value authenticity",
          "Users who engage with branded content",
          "Potential brand advocates",
        ],
      },
      constraints: {
        description: "Budget and platform limitations",
        image: "/images/projects/social-media-campaign/constraints.jpg",
        pointers: [
          "Limited paid media budget",
          "Algorithm changes impacting reach",
          "Need for consistent daily content",
          "Platform-specific content requirements",
          "Measuring true ROI of social efforts",
        ],
      },
    },

    step3: {
      brandImage:
        "/images/projects/social-media-campaign/brand-identity-full.jpg",
    },

    step4: {
      sitemapImage: "/images/projects/social-media-campaign/sitemap.jpg",
      wireframeImage: "/images/projects/social-media-campaign/wireframe.jpg",
      finalDesignImage:
        "/images/projects/social-media-campaign/final-design.jpg",
    },

    step5: {
      images: [
        "/images/projects/social-media-campaign/system-1.jpg",
        "/images/projects/social-media-campaign/system-2.jpg",
        "/images/projects/social-media-campaign/system-3.jpg",
        "/images/projects/social-media-campaign/system-4.jpg",
        "/images/projects/social-media-campaign/system-5.jpg",
      ],
    },

    step6: {
      images: [
        "/images/projects/social-media-campaign/detail-1.jpg",
        "/images/projects/social-media-campaign/detail-2.jpg",
        "/images/projects/social-media-campaign/detail-3.jpg",
        "/images/projects/social-media-campaign/detail-4.jpg",
        "/images/projects/social-media-campaign/detail-5.jpg",
        "/images/projects/social-media-campaign/detail-6.jpg",
      ],
    },

    step7: {
      responsiveImage: "/images/projects/social-media-campaign/responsive.jpg",
    },
  },

  "landing-page-optimization": {
    portfolioTitle: "Landing Page Optimization",
    portfolioDesc:
      "Redesigned high-converting landing pages increasing conversion rate from 2% to 8% through data-driven optimization.",
    portfolioImage: "/images/portfolio/landing.jpg",
    tags: ["Landing Page", "CRO"],

    // ========== PROJECT STEPS ==========
    steps: [
      "Project Overview",
      "Scope of the Project",
      "Brand Identity",
      "Our Process",
      "System Design",
      "Design Details",
      "Responsive Design",
    ],

    step1: {
      projectName: "Landing Page Optimization",
      overview:
        "Comprehensive landing page redesign and optimization program using A/B testing, heat mapping, and user research to dramatically improve conversion rates.",
      industry: "Conversion Optimization",
      client: "ConvertCo Digital",
      deliverables:
        "Landing Page Design, A/B Tests, Conversion Optimization Strategy, Analytics Setup",
      overviewImage:
        "/images/projects/landing-page-optimization/overview-banner.jpg",
    },

    step2: {
      clientGoal: {
        description:
          "Increase landing page conversion rates through systematic optimization",
        image: "/images/projects/landing-page-optimization/client-goal.jpg",
        pointers: [
          "Increase conversion rate from 2% to 8%",
          "Reduce cost per acquisition by 50%",
          "Improve page load speed to under 2s",
          "Increase mobile conversion rate",
          "Create scalable testing framework",
        ],
      },
      targetAudience: {
        description: "High-intent visitors from paid campaigns",
        image: "/images/projects/landing-page-optimization/target-audience.jpg",
        pointers: [
          "Users clicking on paid search ads",
          "Social media campaign traffic",
          "Retargeting campaign audiences",
          "Email campaign recipients",
          "Partner referral traffic",
        ],
      },
      constraints: {
        description: "Technical and timeline constraints",
        image: "/images/projects/landing-page-optimization/constraints.jpg",
        pointers: [
          "Cannot change backend infrastructure",
          "Must maintain brand guidelines",
          "Need statistical significance in tests",
          "Limited development resources",
          "Active campaigns cannot be paused",
        ],
      },
    },

    step3: {
      brandImage:
        "/images/projects/landing-page-optimization/brand-identity-full.jpg",
    },

    step4: {
      sitemapImage: "/images/projects/landing-page-optimization/sitemap.jpg",
      wireframeImage:
        "/images/projects/landing-page-optimization/wireframe.jpg",
      finalDesignImage:
        "/images/projects/landing-page-optimization/final-design.jpg",
    },

    step5: {
      images: [
        "/images/projects/landing-page-optimization/system-1.jpg",
        "/images/projects/landing-page-optimization/system-2.jpg",
        "/images/projects/landing-page-optimization/system-3.jpg",
        "/images/projects/landing-page-optimization/system-4.jpg",
        "/images/projects/landing-page-optimization/system-5.jpg",
      ],
    },

    step6: {
      images: [
        "/images/projects/landing-page-optimization/detail-1.jpg",
        "/images/projects/landing-page-optimization/detail-2.jpg",
        "/images/projects/landing-page-optimization/detail-3.jpg",
        "/images/projects/landing-page-optimization/detail-4.jpg",
        "/images/projects/landing-page-optimization/detail-5.jpg",
        "/images/projects/landing-page-optimization/detail-6.jpg",
      ],
    },

    step7: {
      responsiveImage:
        "/images/projects/landing-page-optimization/responsive.jpg",
    },
  },
  "landing-page-optimizatio": {
    portfolioTitle: "Landing Page Optimization",
    portfolioDesc:
      "Redesigned high-converting landing pages increasing conversion rate from 2% to 8% through data-driven optimization.",
    portfolioImage: "/images/portfolio/landing.jpg",
    tags: ["Landing Page", "CRO"],

    step1: {
      projectName: "Landing Page Optimization",
      overview:
        "Comprehensive landing page redesign and optimization program using A/B testing, heat mapping, and user research to dramatically improve conversion rates.",
      industry: "Conversion Optimization",
      client: "ConvertCo Digital",
      deliverables:
        "Landing Page Design, A/B Tests, Conversion Optimization Strategy, Analytics Setup",
      overviewImage:
        "/images/projects/landing-page-optimization/overview-banner.jpg",
    },

    step2: {
      clientGoal: {
        description:
          "Increase landing page conversion rates through systematic optimization",
        image: "/images/projects/landing-page-optimization/client-goal.jpg",
        pointers: [
          "Increase conversion rate from 2% to 8%",
          "Reduce cost per acquisition by 50%",
          "Improve page load speed to under 2s",
          "Increase mobile conversion rate",
          "Create scalable testing framework",
        ],
      },
      targetAudience: {
        description: "High-intent visitors from paid campaigns",
        image: "/images/projects/landing-page-optimization/target-audience.jpg",
        pointers: [
          "Users clicking on paid search ads",
          "Social media campaign traffic",
          "Retargeting campaign audiences",
          "Email campaign recipients",
          "Partner referral traffic",
        ],
      },
      constraints: {
        description: "Technical and timeline constraints",
        image: "/images/projects/landing-page-optimization/constraints.jpg",
        pointers: [
          "Cannot change backend infrastructure",
          "Must maintain brand guidelines",
          "Need statistical significance in tests",
          "Limited development resources",
          "Active campaigns cannot be paused",
        ],
      },
    },

    step3: {
      brandImage:
        "/images/projects/landing-page-optimization/brand-identity-full.jpg",
    },

    step4: {
      sitemapImage: "/images/projects/landing-page-optimization/sitemap.jpg",
      wireframeImage:
        "/images/projects/landing-page-optimization/wireframe.jpg",
      finalDesignImage:
        "/images/projects/landing-page-optimization/final-design.jpg",
    },

    step5: {
      images: [
        "/images/projects/landing-page-optimization/system-1.jpg",
        "/images/projects/landing-page-optimization/system-2.jpg",
        "/images/projects/landing-page-optimization/system-3.jpg",
        "/images/projects/landing-page-optimization/system-4.jpg",
        "/images/projects/landing-page-optimization/system-5.jpg",
      ],
    },

    step6: {
      images: [
        "/images/projects/landing-page-optimization/detail-1.jpg",
        "/images/projects/landing-page-optimization/detail-2.jpg",
        "/images/projects/landing-page-optimization/detail-3.jpg",
        "/images/projects/landing-page-optimization/detail-4.jpg",
        "/images/projects/landing-page-optimization/detail-5.jpg",
        "/images/projects/landing-page-optimization/detail-6.jpg",
      ],
    },

    step7: {
      responsiveImage:
        "/images/projects/landing-page-optimization/responsive.jpg",
    },
  },
  "landing-page-optimizati": {
    portfolioTitle: "Landing Page Optimization",
    portfolioDesc:
      "Redesigned high-converting landing pages increasing conversion rate from 2% to 8% through data-driven optimization.",
    portfolioImage: "/images/portfolio/landing.jpg",
    tags: ["Landing Page", "CRO"],

    step1: {
      projectName: "Landing Page Optimization",
      overview:
        "Comprehensive landing page redesign and optimization program using A/B testing, heat mapping, and user research to dramatically improve conversion rates.",
      industry: "Conversion Optimization",
      client: "ConvertCo Digital",
      deliverables:
        "Landing Page Design, A/B Tests, Conversion Optimization Strategy, Analytics Setup",
      overviewImage:
        "/images/projects/landing-page-optimization/overview-banner.jpg",
    },

    step2: {
      clientGoal: {
        description:
          "Increase landing page conversion rates through systematic optimization",
        image: "/images/projects/landing-page-optimization/client-goal.jpg",
        pointers: [
          "Increase conversion rate from 2% to 8%",
          "Reduce cost per acquisition by 50%",
          "Improve page load speed to under 2s",
          "Increase mobile conversion rate",
          "Create scalable testing framework",
        ],
      },
      targetAudience: {
        description: "High-intent visitors from paid campaigns",
        image: "/images/projects/landing-page-optimization/target-audience.jpg",
        pointers: [
          "Users clicking on paid search ads",
          "Social media campaign traffic",
          "Retargeting campaign audiences",
          "Email campaign recipients",
          "Partner referral traffic",
        ],
      },
      constraints: {
        description: "Technical and timeline constraints",
        image: "/images/projects/landing-page-optimization/constraints.jpg",
        pointers: [
          "Cannot change backend infrastructure",
          "Must maintain brand guidelines",
          "Need statistical significance in tests",
          "Limited development resources",
          "Active campaigns cannot be paused",
        ],
      },
    },

    step3: {
      brandImage:
        "/images/projects/landing-page-optimization/brand-identity-full.jpg",
    },

    step4: {
      sitemapImage: "/images/projects/landing-page-optimization/sitemap.jpg",
      wireframeImage:
        "/images/projects/landing-page-optimization/wireframe.jpg",
      finalDesignImage:
        "/images/projects/landing-page-optimization/final-design.jpg",
    },

    step5: {
      images: [
        "/images/projects/landing-page-optimization/system-1.jpg",
        "/images/projects/landing-page-optimization/system-2.jpg",
        "/images/projects/landing-page-optimization/system-3.jpg",
        "/images/projects/landing-page-optimization/system-4.jpg",
        "/images/projects/landing-page-optimization/system-5.jpg",
      ],
    },

    step6: {
      images: [
        "/images/projects/landing-page-optimization/detail-1.jpg",
        "/images/projects/landing-page-optimization/detail-2.jpg",
        "/images/projects/landing-page-optimization/detail-3.jpg",
        "/images/projects/landing-page-optimization/detail-4.jpg",
        "/images/projects/landing-page-optimization/detail-5.jpg",
        "/images/projects/landing-page-optimization/detail-6.jpg",
      ],
    },

    step7: {
      responsiveImage:
        "/images/projects/landing-page-optimization/responsive.jpg",
    },
  },
  refresh: {
    // ========== PORTFOLIO PAGE DATA ==========
    portfolioTitle: "Brand Refresh — Acme Co.",
    portfolioDesc:
      "Complete brand identity redesign with modern UI/UX approach for enterprise SaaS platform. Transformed outdated visual language into contemporary design system.",
    portfolioImage: image, // Your image path
    tags: ["Brand Refresh", "UI/UX"],

    // ========== STEP 1: PROJECT OVERVIEW ==========
    step1: {
      projectName: "Brand Refresh — Acme Co.",
      overview:
        "Revamp the existing website into a modern, visually appealing, product-like AI website while maintaining simplicity for smooth web development. The goal is to elevate the brand from a typical IT services look to a premium AI product platform with clean UI, strong structure, and minimal animations.",
      industry: "AI Industrial Automation",
      client: "Safe Sight AI",
      deliverables:
        "Responsive Website Design, Brand Guidelines, Design System, Component Library",
      overviewImage: "/images/projects/brand-refresh/overview-banner.jpg",
    },

    // ========== STEP 2: SCOPE OF PROJECT ==========
    step2: {
      targetAudience: {
        description:
          "Enterprise clients seeking AI-powered industrial automation solutions",
        image: image,
        pointers: [
          "C-level executives in manufacturing",
          "Operations managers and safety officers",
          "IT decision makers in industrial sectors",
          "Forward-thinking companies adopting AI",
          "Quality assurance and compliance teams",
        ],
      },
      clientGoal: {
        description:
          "Revamp the existing website into a modern, visually appealing platform",
        image: image,
        pointers: [
          "Create a modern, premium AI product aesthetic",
          "Maintain simplicity for smooth development",
          "Elevate brand perception from IT services to AI product",
          "Implement clean UI with minimal animations",
          "Strong structure and intuitive navigation",
        ],
      },
      constraints: {
        description:
          "Technical and business limitations that shaped the project scope",
        image: image,
        pointers: [
          "Limited development timeline of 8 weeks",
          "Must work with existing tech stack",
          "Budget constraints for custom development",
          "Maintain brand recognition during transition",
          "Ensure mobile responsiveness across devices",
        ],
      },
    },

    // ========== STEP 3: BRAND IDENTITY ==========
    step3: {
      brandImage: image, // Large right-side image
    },

    // ========== STEP 4: OUR PROCESS ==========
    step4: {
      sitemapImage: image,
      wireframeImage: image,
      finalDesignImage: image,
    },

    // ========== STEP 5: SYSTEM DESIGN ==========
    step5: {
      images: [
        "/images/projects/brand-refresh/system-1.jpg",
        "/images/projects/brand-refresh/system-2.jpg",
        "/images/projects/brand-refresh/system-3.jpg",
        "/images/projects/brand-refresh/system-4.jpg",
        "/images/projects/brand-refresh/system-5.jpg",
      ],
    },

    // ========== STEP 6: DESIGN DETAILS ==========
    step6: {
      images: [image, image, image, image, image, image],
    },

    // ========== STEP 7: RESPONSIVE DESIGN ==========
    step7: {
      responsiveImage: "/images/projects/brand-refresh/responsive.jpg",
    },
  },
  brand: {
    // ========== PORTFOLIO PAGE DATA ==========
    portfolioTitle: "Brand Refresh — Acme Co.",
    portfolioDesc:
      "Complete brand identity redesign with modern UI/UX approach for enterprise SaaS platform. Transformed outdated visual language into contemporary design system.",
    portfolioImage: image, // Your image path
    tags: ["Brand Refresh", "UI/UX"],

    // ========== STEP 1: PROJECT OVERVIEW ==========
    step1: {
      projectName: "Brand Refresh — Acme Co.",
      overview:
        "Revamp the existing website into a modern, visually appealing, product-like AI website while maintaining simplicity for smooth web development. The goal is to elevate the brand from a typical IT services look to a premium AI product platform with clean UI, strong structure, and minimal animations.",
      industry: "AI Industrial Automation",
      client: "Safe Sight AI",
      deliverables:
        "Responsive Website Design, Brand Guidelines, Design System, Component Library",
      overviewImage: "/images/projects/brand-refresh/overview-banner.jpg",
    },

    // ========== STEP 2: SCOPE OF PROJECT ==========
    step2: {
      targetAudience: {
        description:
          "Enterprise clients seeking AI-powered industrial automation solutions",
        image: image,
        pointers: [
          "C-level executives in manufacturing",
          "Operations managers and safety officers",
          "IT decision makers in industrial sectors",
          "Forward-thinking companies adopting AI",
          "Quality assurance and compliance teams",
        ],
      },
      clientGoal: {
        description:
          "Revamp the existing website into a modern, visually appealing platform",
        image: image,
        pointers: [
          "Create a modern, premium AI product aesthetic",
          "Maintain simplicity for smooth development",
          "Elevate brand perception from IT services to AI product",
          "Implement clean UI with minimal animations",
          "Strong structure and intuitive navigation",
        ],
      },
      constraints: {
        description:
          "Technical and business limitations that shaped the project scope",
        image: image,
        pointers: [
          "Limited development timeline of 8 weeks",
          "Must work with existing tech stack",
          "Budget constraints for custom development",
          "Maintain brand recognition during transition",
          "Ensure mobile responsiveness across devices",
        ],
      },
    },

    // ========== STEP 3: BRAND IDENTITY ==========
    step3: {
      brandImage: image, // Large right-side image
    },

    // ========== STEP 4: OUR PROCESS ==========
    step4: {
      sitemapImage: image,
      wireframeImage: image,
      finalDesignImage: image,
    },

    // ========== STEP 5: SYSTEM DESIGN ==========
    step5: {
      images: [
        "/images/projects/brand-refresh/system-1.jpg",
        "/images/projects/brand-refresh/system-2.jpg",
        "/images/projects/brand-refresh/system-3.jpg",
        "/images/projects/brand-refresh/system-4.jpg",
        "/images/projects/brand-refresh/system-5.jpg",
      ],
    },

    // ========== STEP 6: DESIGN DETAILS ==========
    step6: {
      images: [image, image, image, image, image, image],
    },

    // ========== STEP 7: RESPONSIVE DESIGN ==========
    step7: {
      responsiveImage: "/images/projects/brand-refresh/responsive.jpg",
    },
  },
  redesign: {
    // ========== PORTFOLIO PAGE DATA ==========
    portfolioTitle: "Brand Refresh — Acme Co.",
    portfolioDesc:
      "Complete brand identity redesign with modern UI/UX approach for enterprise SaaS platform. Transformed outdated visual language into contemporary design system.",
    portfolioImage: image, // Your image path
    tags: ["Brand Refresh", "UI/UX"],

    // ========== STEP 1: PROJECT OVERVIEW ==========
    step1: {
      projectName: "Brand Refresh — Acme Co.",
      overview:
        "Revamp the existing website into a modern, visually appealing, product-like AI website while maintaining simplicity for smooth web development. The goal is to elevate the brand from a typical IT services look to a premium AI product platform with clean UI, strong structure, and minimal animations.",
      industry: "AI Industrial Automation",
      client: "Safe Sight AI",
      deliverables:
        "Responsive Website Design, Brand Guidelines, Design System, Component Library",
      overviewImage: "/images/projects/brand-refresh/overview-banner.jpg",
    },

    // ========== STEP 2: SCOPE OF PROJECT ==========
    step2: {
      targetAudience: {
        description:
          "Enterprise clients seeking AI-powered industrial automation solutions",
        image: image,
        pointers: [
          "C-level executives in manufacturing",
          "Operations managers and safety officers",
          "IT decision makers in industrial sectors",
          "Forward-thinking companies adopting AI",
          "Quality assurance and compliance teams",
        ],
      },
      clientGoal: {
        description:
          "Revamp the existing website into a modern, visually appealing platform",
        image: image,
        pointers: [
          "Create a modern, premium AI product aesthetic",
          "Maintain simplicity for smooth development",
          "Elevate brand perception from IT services to AI product",
          "Implement clean UI with minimal animations",
          "Strong structure and intuitive navigation",
        ],
      },
      constraints: {
        description:
          "Technical and business limitations that shaped the project scope",
        image: image,
        pointers: [
          "Limited development timeline of 8 weeks",
          "Must work with existing tech stack",
          "Budget constraints for custom development",
          "Maintain brand recognition during transition",
          "Ensure mobile responsiveness across devices",
        ],
      },
    },

    // ========== STEP 3: BRAND IDENTITY ==========
    step3: {
      brandImage: image, // Large right-side image
    },

    // ========== STEP 4: OUR PROCESS ==========
    step4: {
      sitemapImage: image,
      wireframeImage: image,
      finalDesignImage: image,
    },

    // ========== STEP 5: SYSTEM DESIGN ==========
    step5: {
      images: [
        "/images/projects/brand-refresh/system-1.jpg",
        "/images/projects/brand-refresh/system-2.jpg",
        "/images/projects/brand-refresh/system-3.jpg",
        "/images/projects/brand-refresh/system-4.jpg",
        "/images/projects/brand-refresh/system-5.jpg",
      ],
    },

    // ========== STEP 6: DESIGN DETAILS ==========
    step6: {
      images: [image, image, image, image, image, image],
    },

    // ========== STEP 7: RESPONSIVE DESIGN ==========
    step7: {
      responsiveImage: "/images/projects/brand-refresh/responsive.jpg",
    },
  },
  Maintain: {
    // ========== PORTFOLIO PAGE DATA ==========
    portfolioTitle: "Brand Refresh — Acme Co.",
    portfolioDesc:
      "Complete brand identity redesign with modern UI/UX approach for enterprise SaaS platform. Transformed outdated visual language into contemporary design system.",
    portfolioImage: image, // Your image path
    tags: ["Brand Refresh", "UI/UX"],

    // ========== STEP 1: PROJECT OVERVIEW ==========
    step1: {
      projectName: "Brand Refresh — Acme Co.",
      overview:
        "Revamp the existing website into a modern, visually appealing, product-like AI website while maintaining simplicity for smooth web development. The goal is to elevate the brand from a typical IT services look to a premium AI product platform with clean UI, strong structure, and minimal animations.",
      industry: "AI Industrial Automation",
      client: "Safe Sight AI",
      deliverables:
        "Responsive Website Design, Brand Guidelines, Design System, Component Library",
      overviewImage: "/images/projects/brand-refresh/overview-banner.jpg",
    },

    // ========== STEP 2: SCOPE OF PROJECT ==========
    step2: {
      targetAudience: {
        description:
          "Enterprise clients seeking AI-powered industrial automation solutions",
        image: image,
        pointers: [
          "C-level executives in manufacturing",
          "Operations managers and safety officers",
          "IT decision makers in industrial sectors",
          "Forward-thinking companies adopting AI",
          "Quality assurance and compliance teams",
        ],
      },
      clientGoal: {
        description:
          "Revamp the existing website into a modern, visually appealing platform",
        image: image,
        pointers: [
          "Create a modern, premium AI product aesthetic",
          "Maintain simplicity for smooth development",
          "Elevate brand perception from IT services to AI product",
          "Implement clean UI with minimal animations",
          "Strong structure and intuitive navigation",
        ],
      },
      constraints: {
        description:
          "Technical and business limitations that shaped the project scope",
        image: image,
        pointers: [
          "Limited development timeline of 8 weeks",
          "Must work with existing tech stack",
          "Budget constraints for custom development",
          "Maintain brand recognition during transition",
          "Ensure mobile responsiveness across devices",
        ],
      },
    },

    // ========== STEP 3: BRAND IDENTITY ==========
    step3: {
      brandImage: image, // Large right-side image
    },

    // ========== STEP 4: OUR PROCESS ==========
    step4: {
      sitemapImage: image,
      wireframeImage: image,
      finalDesignImage: image,
    },

    // ========== STEP 5: SYSTEM DESIGN ==========
    step5: {
      images: [
        "/images/projects/brand-refresh/system-1.jpg",
        "/images/projects/brand-refresh/system-2.jpg",
        "/images/projects/brand-refresh/system-3.jpg",
        "/images/projects/brand-refresh/system-4.jpg",
        "/images/projects/brand-refresh/system-5.jpg",
      ],
    },

    // ========== STEP 6: DESIGN DETAILS ==========
    step6: {
      images: [image, image, image, image, image, image],
    },

    // ========== STEP 7: RESPONSIVE DESIGN ==========
    step7: {
      responsiveImage: "/images/projects/brand-refresh/responsive.jpg",
    },
  },
  Complete: {
    // ========== PORTFOLIO PAGE DATA ==========
    portfolioTitle: "Brand Refresh — Acme Co.",
    portfolioDesc:
      "Complete brand identity redesign with modern UI/UX approach for enterprise SaaS platform. Transformed outdated visual language into contemporary design system.",
    portfolioImage: image, // Your image path
    tags: ["Brand Refresh", "UI/UX"],

    // ========== STEP 1: PROJECT OVERVIEW ==========
    step1: {
      projectName: "Brand Refresh — Acme Co.",
      overview:
        "Revamp the existing website into a modern, visually appealing, product-like AI website while maintaining simplicity for smooth web development. The goal is to elevate the brand from a typical IT services look to a premium AI product platform with clean UI, strong structure, and minimal animations.",
      industry: "AI Industrial Automation",
      client: "Safe Sight AI",
      deliverables:
        "Responsive Website Design, Brand Guidelines, Design System, Component Library",
      overviewImage: "/images/projects/brand-refresh/overview-banner.jpg",
    },

    // ========== STEP 2: SCOPE OF PROJECT ==========
    step2: {
      targetAudience: {
        description:
          "Enterprise clients seeking AI-powered industrial automation solutions",
        image: image,
        pointers: [
          "C-level executives in manufacturing",
          "Operations managers and safety officers",
          "IT decision makers in industrial sectors",
          "Forward-thinking companies adopting AI",
          "Quality assurance and compliance teams",
        ],
      },
      clientGoal: {
        description:
          "Revamp the existing website into a modern, visually appealing platform",
        image: image,
        pointers: [
          "Create a modern, premium AI product aesthetic",
          "Maintain simplicity for smooth development",
          "Elevate brand perception from IT services to AI product",
          "Implement clean UI with minimal animations",
          "Strong structure and intuitive navigation",
        ],
      },
      constraints: {
        description:
          "Technical and business limitations that shaped the project scope",
        image: image,
        pointers: [
          "Limited development timeline of 8 weeks",
          "Must work with existing tech stack",
          "Budget constraints for custom development",
          "Maintain brand recognition during transition",
          "Ensure mobile responsiveness across devices",
        ],
      },
    },

    // ========== STEP 3: BRAND IDENTITY ==========
    step3: {
      brandImage: image, // Large right-side image
    },

    // ========== STEP 4: OUR PROCESS ==========
    step4: {
      sitemapImage: image,
      wireframeImage: image,
      finalDesignImage: image,
    },

    // ========== STEP 5: SYSTEM DESIGN ==========
    step5: {
      images: [
        "/images/projects/brand-refresh/system-1.jpg",
        "/images/projects/brand-refresh/system-2.jpg",
        "/images/projects/brand-refresh/system-3.jpg",
        "/images/projects/brand-refresh/system-4.jpg",
        "/images/projects/brand-refresh/system-5.jpg",
      ],
    },

    // ========== STEP 6: DESIGN DETAILS ==========
    step6: {
      images: [image, image, image, image, image, image],
    },

    // ========== STEP 7: RESPONSIVE DESIGN ==========
    step7: {
      responsiveImage: "/images/projects/brand-refresh/responsive.jpg",
    },
  },
};
