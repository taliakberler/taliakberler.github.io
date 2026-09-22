// Selected work. `featured: true` gets the large treatment at the top.
//
// Descriptions are deliberately short — one or two factual sentences. Expand
// any of them freely; the layout doesn't care how long they are.
//
// `credit` is for awards, collaborators and where the work ran. Drop any image
// into public/work/ and set `image`; entries without one render as a
// typographic card.

export const work = [
  {
    slug: "climate-finance-story",
    featured: true,
    title: "Climate Change: Responsibility & Investment",
    kind: "Data story",
    org: "Independent",
    year: "2026",
    summary:
      "A scrollytelling data story on who is responsible for global emissions, who is most exposed to the results, and where mitigation and adaptation finance is going. Built from ND-GAIN Country Index, emissions and climate finance data.",
    tags: ["D3.js", "GeoPandas", "Scrollytelling", "Data journalism"],
    links: [
      { label: "Read the story", href: "https://taliakberler.github.io/Climate-Finance-Story/" },
      { label: "Source", href: "https://github.com/taliakberler/Climate-Finance-Story" },
    ],
  },
  {
    slug: "resilience-finance-repository",
    title: "Resilience Finance Repository & Knowledge Graph",
    kind: "Product · Knowledge systems",
    org: "Climate Resilience Institute",
    year: "2025 — present",
    image: "/work/resilience-finance-repository.webp",
    imageAlt:
      "Resilience Finance Repository overview page, showing record count, date range, finance themes and case studies",
    summary:
      "A curated library of how risk reduction and resilience get funded, built for practitioners — project proponents, underwriters and capital allocators. Academic research, case studies, deal profiles and media coverage across 12 finance themes, each record scored against four inclusion criteria and summarised with AI.",
    credit:
      "Beta: 508 records from 577 organisations, published 2012–2026, as of September 2026. The Knowledge Explorer, which maps instruments to interventions, benefits and hazards, is in development.",
    tags: ["LLM enrichment", "Knowledge graph", "Curation", "Stakeholder research"],
    links: [
      { label: "Explore the repository", href: "https://resilience-finance-repository.github.io/" },
      {
        label: "Resilience Finance Lab",
        href: "https://resilience.miami.edu/initiatives/rfl/knowledge-graph/index.html",
      },
    ],
  },
  {
    slug: "uhi-tableau",
    title: "Urban heat, greenness and social vulnerability",
    kind: "Dashboard · Urban analytics",
    org: "South Florida metropolitan area",
    year: "2026",
    image: "/work/uhi-tableau.webp",
    imageAlt:
      "Tableau dashboard showing urban heat island intensity, greenness and social vulnerability across South Florida",
    summary:
      "Interactive dashboard mapping urban heat island intensity, vegetation cover and social vulnerability across the South Florida metro, by census tract.",
    tags: ["Tableau", "Urban analytics", "Spatial join", "Social vulnerability"],
    links: [
      {
        label: "Open the dashboard",
        href: "https://public.tableau.com/views/UrbanAnalytics/Dashboard1?:language=en-US&:display_count=n&:origin=viz_share_link",
      },
    ],
  },
  {
    slug: "extreme-heat-storymap",
    title: "Extreme Heat in Miami-Dade County",
    kind: "Story map · Geospatial",
    org: "University of Miami",
    year: "2025",
    image: "/work/extreme-heat.webp",
    imageAlt: "Cover of the Extreme Heat in Miami-Dade County ArcGIS StoryMap",
    summary:
      "ArcGIS StoryMap on extreme heat risk in Miami-Dade County: the trend, the populations most affected, and available interventions.",
    credit: "Precursor to the urban heat dashboard.",
    tags: ["ArcGIS StoryMaps", "Heat exposure", "Science communication"],
    links: [
      {
        label: "Read the story map",
        href: "https://storymaps.arcgis.com/stories/27279b89c25e41c0bc1d81f75cb88c55",
      },
    ],
  },
  {
    slug: "slr-miami-beach",
    title: "Sea level rise inundation risk, Miami Beach",
    kind: "3D scene · Geospatial",
    org: "University of Miami",
    year: "2026",
    summary:
      "Interactive 3D scene of buildings in the City of Miami Beach at risk of inundation by 2030, 2050 and 2090, modelled from surface elevation and proximity to water bodies under a moderate climate pathway.",
    tags: ["ArcGIS Scene Viewer", "3D visualisation", "Inundation modelling", "DEM"],
    links: [
      {
        label: "Explore the 3D scene",
        href: "https://umiami.maps.arcgis.com/apps/instant/3dviewer/index.html?appid=56a8e3ed523b4779a64e4e244a772f02",
      },
    ],
  },
  {
    slug: "agricultural-suitability-gis",
    title: "Climate-driven shifts in agricultural land suitability",
    kind: "Geospatial analysis",
    org: "California's Central Valley · GIS II",
    year: "2025",
    image: "/work/agricultural-suitability.webp",
    imageAlt:
      "Three suitability maps of California's Central Valley: baseline, SSP245 and SSP585 scenarios for 2050",
    summary:
      "GIS multi-criteria evaluation of agricultural suitability, weighting WorldClim climate, SoilGrids soils, NLCD land cover, 3DEP elevation and NHD hydrology. Compares a baseline against SSP245 and SSP585 for 2050, with difference, cluster/outlier and hot-spot analysis.",
    tags: ["ArcGIS Pro", "Multi-criteria evaluation", "CMIP6 / SSP", "Hot-spot analysis"],
    links: [{ label: "Slides (PDF)", href: "/work/agricultural-suitability-gis.pdf" }],
  },
  {
    slug: "classinsight",
    title: "ClassInsight",
    kind: "Applied AI · Education",
    org: "Miami Law & AI Lab (MiLA)",
    year: "2024 — 2026",
    image: "/work/classinsight.webp",
    imageAlt: "ClassInsight interface: starting a live or asynchronous assignment for a law class",
    summary:
      "LLM-based real-time classroom feedback application. An educator submits a question, model response and categories; the app returns anonymous aggregate visuals and individual student feedback. Project lead from concept through prototype, beta and open-source release.",
    credit:
      "Run at the PETAL conference and in University of Miami law classes. Finalist, AIREA 2025. With Or Cohen-Sasson and Roni Kennedy.",
    tags: ["Agentic LLM", "OpenAI & Anthropic APIs", "Product management", "User research"],
    links: [
      { label: "Paper", href: "https://doi.org/10.21203/rs.3.rs-8078768/v1" },
      { label: "Symposium talk (PDF)", href: "/work/classinsight-symposium.pdf" },
      { label: "AIREA certificate", href: "/credentials/airea-2025-finalist.pdf" },
    ],
  },
  {
    slug: "medical-rag",
    title: "Clinical retrieval system for The Blue Scrubs",
    kind: "ML research",
    org: "Moffitt Cancer Center",
    year: "2025",
    summary:
      "Clinical guideline and trial data collection for a medical RAG system — NCCN, ASCO, MedlinePlus and clinical trial records, structured into indexable search files and fuller source files. Evaluated 6+ retrieval algorithms across 1M+ medical text records against benchmark Q&A datasets built with LLM inference.",
    tags: ["RAG evaluation", "Benchmark design", "Data strategy", "Team lead"],
    links: [
      {
        label: "Dataset on Hugging Face",
        href: "https://huggingface.co/datasets/TheBlueScrubs/TheBlueScrubs-v2",
      },
      { label: "Project slides (PDF)", href: "/work/moffitt-blue-scrubs.pdf" },
    ],
  },
  {
    slug: "cancer-classifier",
    title: "Cancer-type classifier, Blue Scrubs v2.0",
    kind: "ML research",
    org: "Moffitt Cancer Center",
    year: "2025",
    summary:
      "TF-IDF and logistic regression pipeline for cancer-type labelling across a 692B-token clinical corpus, trained on a balanced 30K set distilled from 11.5M documents by keyword bootstrapping. 86% accuracy and 0.94 ROC-AUC on hold-out; 82% accuracy at 1.00 precision out-of-sample.",
    tags: ["scikit-learn", "TF-IDF", "Dataset curation", "Evaluation"],
    links: [
      {
        label: "Dataset on Hugging Face",
        href: "https://huggingface.co/datasets/TheBlueScrubs/TheBlueScrubs-v2",
      },
      { label: "Project slides (PDF)", href: "/work/moffitt-blue-scrubs.pdf" },
    ],
  },
];
