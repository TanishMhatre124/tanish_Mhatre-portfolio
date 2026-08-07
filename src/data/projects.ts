import type { Project } from "@/types";

// NOTE: Demo/source URLs were not resolvable from the source portfolio (placeholder links).
// Replace demoUrl / sourceUrl below with real links whenever available — components already
// handle a null value by hiding the corresponding button.

export const projects: Project[] = [
  {
    id: "tutor-ai",
    slug: "mutual-fund-analysis",
    title: "Mutual Fund Analysis",
    tagline: "AI and machine learning analysis for smarter fund decisions.",
    description:
      "A mutual fund analysis project that uses AI and machine learning to compare fund performance, surface patterns, and support data-driven investment decisions.",
    image: "/images/mutualfunds.png",
    gallery: ["/images/mutualfunds.png"],
    categories: ["AI", "Machine Learning", "Research"],
    techStack: ["Python", "Machine Learning", "Data Analysis", "Streamlit", "Pandas"],
    highlights: [
      "Cut inference time by 40% with ONNX Runtime optimization",
      "Improved answer accuracy by 85% with a custom RAG pipeline",
      "Reduced memory footprint by 60% for low-resource hardware",
    ],
    demoUrl: "https://mutualfundanalysis-app.streamlit.app/",
    sourceUrl: "https://github.com/TanishMhatre124/MUTUAL_FUND_ANALYSIS.git",
    featured: true,
    overview:
      "This project analyzes mutual funds using AI and machine learning techniques to help compare performance, identify trends, and present insights in a clear, decision-friendly format.",
    problem:
      "Investors often struggle to compare mutual funds consistently because performance metrics, historical returns, and risk signals are spread across many sources and can be hard to interpret quickly.",
    solution:
      "I built an analysis pipeline that evaluates mutual funds across key metrics and presents the results in a simple interface, making it easier to compare funds and understand their behavior.",
    architecture:
      "The app uses a data-processing layer to load fund data, compute comparison metrics, and render the insights in a Streamlit dashboard backed by AI/ML-driven analysis.",
    workflow: [
      "Mutual fund data is loaded into the analysis pipeline",
      "Performance and risk metrics are calculated and compared",
      "The dashboard presents insights in a clear visual format",
      "Users review the analysis to support investment decisions",
    ],
    features: [
      "Fund comparison across key performance indicators",
      "AI/ML-assisted insight generation for better interpretation",
      "Streamlit-based interface for quick review and exploration",
    ],
    challenges: [
      {
        heading: "Making fund data comparable",
        body: "Mutual fund information often comes in different formats and metric sets. Normalizing the data and comparing like-for-like performance was necessary before the analysis became useful.",
      },
      {
        heading: "Turning raw metrics into usable insights",
        body: "The analysis had to be understandable at a glance, so the interface focuses on presenting clear visual summaries instead of overwhelming users with raw numbers.",
      },
    ],
    results: [
      "Clear comparison of mutual fund performance and related metrics",
      "Faster interpretation of fund data through a single dashboard",
      "Practical support for more informed investment decisions",
    ],
    lessonsLearned: [
      "Good analysis depends on clean, comparable source data.",
      "The presentation layer matters as much as the model or logic behind it.",
    ],
    futureImprovements: [
      "Add more fund comparison metrics and filters",
      "Expand the dashboard with deeper portfolio analysis views",
    ],
  },
  {
  id: "customer-churn-prediction-and-segmentation",
  slug: "customer-churn-prediction-and-segmentation",
  title: "Customer Churn Prediction & Segmentation",
  tagline:
    "An AI-powered customer intelligence platform for churn prediction, RFM segmentation, and interactive business analytics.",
  description:
    "An end-to-end customer intelligence platform that transforms raw e-commerce transaction data into actionable business insights through customer segmentation, predictive machine learning models, and an interactive analytics dashboard.",

  image:"/images/customer_plat.png",
  gallery: ["/images/customer_plat.png"],

  categories: [
    "Data Science",
    "Machine Learning",
  ],

  techStack: [
    "Python",
    "Pandas",
    "NumPy",
    "Scikit-learn",
    "Plotly",
    "Streamlit",
  ],

  highlights: [
    "Consolidated 8 relational datasets (~100,000 orders) into a customer-level analytical dataset",
    "Built a leakage-free retention model evaluated on real future customer behavior",
    "Developed an interactive Streamlit dashboard for customer intelligence and business decision-making",
  ],

  demoUrl: "https://customers-intelligence-platform.streamlit.app/",
  sourceUrl:
    "https://github.com/TanishMhatre124/customer-churn-prediction-and-segmentation",

  featured: true,

  overview:
    "This project analyzes e-commerce customer behavior using data science and machine learning techniques to segment customers, predict churn, and present business insights through an interactive dashboard. The platform transforms complex transactional data into a customer-centric analytical view that supports smarter retention strategies.",

  problem:
    "Businesses generate large volumes of transactional data across multiple relational tables, making it difficult to understand customer behavior at an individual level. Without customer segmentation and churn prediction, marketing and retention efforts often become reactive, inefficient, and expensive.",

  solution:
    "Built an end-to-end customer intelligence pipeline that cleans and integrates raw transactional data, creates customer-level features using RFM analysis, trains machine learning models to predict churn risk, and delivers actionable insights through an interactive Streamlit dashboard.",

  architecture:
    "The platform consists of a data processing layer built with Python and Pandas for cleaning and consolidating raw datasets, a feature engineering layer for customer-level analytics, a machine learning layer using Scikit-learn for churn prediction, and a Streamlit dashboard with Plotly visualizations for business users.",

  workflow: [
    "Load and clean raw order, customer, payment, review, and product datasets",
    "Aggregate transactional data into a customer-level analytical dataset",
    "Generate RFM scores and customer segments",
    "Train and evaluate churn and repeat-purchase prediction models",
    "Visualize KPIs, customer segments, and churn risk through interactive dashboards",
    "Enable business users to filter and export high-risk customer lists",
  ],

  features: [
    "Customer segmentation using RFM analysis",
    "Churn prediction with Logistic Regression, Decision Tree, and Random Forest models",
    "Leakage-free retention model for repeat purchase prediction",
    "Interactive Streamlit dashboard with KPIs and business visualizations",
    "Segment filtering and downloadable customer lists",
    "Plotly-powered interactive charts and analytics",
  ],

  challenges: [
    {
      heading: "Transforming fragmented transactional data into customer intelligence",
      body: "The source data was distributed across eight relational datasets with different granularities. Building a reliable customer-level analytical dataset required extensive cleaning, joining, validation, and feature engineering before any modeling could begin.",
    },
    {
      heading: "Eliminating data leakage in churn prediction",
      body: "An early churn model produced unrealistically high accuracy because the target variable leaked future information into the training process. The prediction objective was redesigned around future repeat purchases within 90 days, producing a realistic and trustworthy evaluation.",
    },
  ],

  results: [
    "Built a complete customer intelligence pipeline from raw transactional data",
    "Created a leakage-free retention model achieving approximately 0.60 ROC-AUC on future customer behavior",
    "Generated exportable high-risk customer lists for targeted retention campaigns",
    "Delivered an interactive dashboard replacing manual analysis across multiple relational datasets",
  ],

  lessonsLearned: [
    "Data preparation and feature engineering have a greater impact on model quality than algorithm selection alone.",
    "Identifying and eliminating data leakage is essential for building trustworthy machine learning systems.",
    "Business value comes from presenting analytical insights in a way that non-technical stakeholders can easily understand and act upon.",
  ],

  futureImprovements: [
    "Add Customer Lifetime Value (CLV) prediction",
    "Implement cohort and retention analysis",
    "Integrate marketing campaign recommendations",
    "Automate ETL and scheduled model retraining",
    "Deploy the platform using cloud-based production workflows",
  ],
},
  {
    id: "zinzraa",
    slug: "zinzraa-ecommerce-platform",
    title: "Zinzraa — E-commerce Platform",
    tagline: "A MERN-stack storefront built for conversion, not just checkout.",
    description:
      "A full e-commerce platform on the MERN stack with a built-in CRM, automated email marketing, and technical SEO — engineered around measurable engagement and conversion outcomes.",
    image: "/images/proj3.jpeg",
    gallery: ["/images/proj3.jpeg"],
    categories: ["Full Stack", "Frontend", "Backend"],
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Vite"],
    highlights: [
      "20% increase in user engagement, 15% lower bounce rate",
      "30% increase in conversion rate via technical SEO",
      "Built-in CRM with automated email marketing",
    ],
    demoUrl: null,
    sourceUrl: null,
    featured: true,
    overview:
      "Zinzraa is a full-featured e-commerce platform built on the MERN stack, covering everything from the storefront to a CRM for customer relationships and marketing automation.",
    problem:
      "The store needed more than a functioning checkout — it needed a responsive, fast experience that kept visitors engaged, plus infrastructure to turn one-time buyers into repeat customers, and enough SEO groundwork to be found in the first place.",
    solution:
      "I architected the platform end-to-end: a responsive React front end with deliberate navigation patterns, an Express/Node backend, MongoDB for data, and a CRM layer for customer data, automated email campaigns, and personalized recommendations. Technical SEO — schema markup, content and site-level optimization — was built in rather than bolted on afterward.",
    architecture:
      "A React.js single-page front end (built with Vite) communicates with an Express.js API layer backed by MongoDB. The CRM and analytics tooling sit alongside the core commerce flow, tracking user behavior across the funnel to inform both marketing automation and UX decisions.",
    workflow: [
      "Customer browses a responsive React storefront",
      "Behavior and purchase data flow into the CRM layer",
      "Automated email campaigns and recommendations are triggered from that data",
      "SEO and analytics tooling feed back into ongoing optimization",
    ],
    features: [
      "Responsive storefront with intuitive navigation across devices",
      "Integrated CRM with automated email marketing campaigns",
      "Personalized product recommendations",
      "Schema markup and technical SEO built into the platform",
    ],
    challenges: [
      {
        heading: "Balancing engagement gains with bounce-rate reduction",
        body: "Improving engagement and reducing bounce rate can pull in different directions — richer pages can slow load times. Responsive design decisions were made with performance budgets in mind, landing both a 20% engagement increase and a 15% bounce-rate drop.",
      },
      {
        heading: "Making SEO gains measurable, not just theoretical",
        body: "Schema markup and technical SEO only matter if they move real numbers. Tracking conversion rate before and after rollout confirmed a 30% increase tied directly to the SEO work.",
      },
    ],
    results: [
      "20% increase in user engagement across device types",
      "15% reduction in bounce rate",
      "30% increase in conversion rate following SEO improvements",
      "Meaningful growth in online sales revenue attributed to the combined CRM and SEO work",
    ],
    lessonsLearned: [
      "CRM and marketing automation compound the value of good UX — neither works as well alone.",
      "SEO investment pays off fastest when it's measured against conversion, not just traffic.",
    ],
    futureImprovements: [
      "A/B test checkout flow variants to push conversion further",
      "Expand personalization using purchase-history-based recommendations",
    ],
  },
  {
    id: "fittify",
    slug: "fittify-health-platform",
    title: "Fittify — One-Stop Health Platform",
    tagline: "A full-stack health platform that scaled from an 150-student pilot to 500+ active users.",
    description:
      "A full-stack health monitoring platform delivering personalized diet and workout recommendations, built with secure authentication and HIPAA-compliant data storage.",
    image: "/images/proj3.jpeg",
    gallery: ["/images/proj3.jpeg"],
    categories: ["Full Stack", "Frontend", "Backend"],
    techStack: ["React.js", "Node.js", "Tailwind CSS", "MERN"],
    highlights: [
      "95% user satisfaction in a 150-student pilot",
      "Scaled to 500+ active users",
      "25% improvement in tracked health metrics",
    ],
    demoUrl: null,
    sourceUrl: null,
    featured: true,
    overview:
      "Fittify is a full-stack health monitoring platform that generates personalized diet and workout recommendations from a user's health metrics, then tracks progress over time.",
    problem:
      "Generic fitness plans ignore individual health metrics and rarely account for data privacy requirements, while most platforms struggle to hold onto users past the first few weeks.",
    solution:
      "I built a React front end with secure authentication and HIPAA-compliant data storage for medical records, backed by a Node.js API. A recommendation engine translates BMI, health metrics, and fitness goals into personalized diet plans and workout routines, with real-time analytics so users can see their own progress.",
    architecture:
      "React.js (styled with Tailwind CSS) handles the front end, communicating with a Node.js backend that manages authentication, secure medical-record storage, and the recommendation engine. Database indexing, API optimization, and caching were added as usage scaled past the initial pilot.",
    workflow: [
      "User completes onboarding with health metrics and fitness goals",
      "The recommendation engine generates a personalized diet and workout plan",
      "Progress is tracked and visualized through real-time analytics",
      "Plans adapt as new health data comes in",
    ],
    features: [
      "Secure authentication and HIPAA-compliant medical record storage",
      "Personalized diet plans and workout routines from BMI and health metrics",
      "Real-time analytics and progress visualization",
      "Accessible, responsive interface across devices",
    ],
    challenges: [
      {
        heading: "Scaling from a 150-user pilot to 500+ active users",
        body: "The initial pilot wasn't built for that kind of growth. Database indexing, API optimization, and caching were introduced specifically to keep performance stable as the user base more than tripled.",
      },
      {
        heading: "Handling medical data responsibly",
        body: "Health platforms carry a higher bar for data handling. Authentication and storage were designed around HIPAA-compliant practices from the start, rather than retrofitted after launch.",
      },
    ],
    results: [
      "95% user satisfaction rate in the initial 150-student pilot",
      "25% improvement in tracked health metrics during the pilot",
      "Scaled to 500+ active users while maintaining performance",
      "Improved retention through real-time progress tracking",
    ],
    lessonsLearned: [
      "Performance work (indexing, caching) is easiest to defer and most costly to defer too long.",
      "Visible progress tracking is a meaningful retention lever in health-focused products.",
    ],
    futureImprovements: [
      "Integrate wearable device data for more accurate real-time metrics",
      "Add clinician-facing views for supervised health programs",
    ],
  },
];

export const projectCategories: Project["categories"][number][] = [
  "AI",
  "Machine Learning",
  "Python",
  "Data Engineering",
  "Data Science",
  "Frontend",
  "Backend",
  "Automation",
  "Open Source",
  "Research",
  "Full Stack",
];
