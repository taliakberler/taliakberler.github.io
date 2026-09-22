// Selected work. `featured: true` gets the large treatment at the top.
//
// To add a project: copy a block. Drop any image into public/work/ and set
// `image`. Entries without an image render as a typographic card, so nothing
// breaks while assets are still coming.

export const work = [
  {
    slug: "climate-finance-story",
    featured: true,
    title: "Climate Change: Responsibility & Investment",
    kind: "Data story",
    org: "Independent",
    year: "2026",
    summary:
      "A scrollytelling investigation into who caused the climate crisis and who is paying to adapt to it. High and upper-middle income countries produced 80% of 2024 emissions; the countries least responsible are the least prepared. The piece walks a general reader from that asymmetry through to where mitigation and adaptation finance is actually going.",
    note:
      "The clearest evidence of how I work: original analysis of ND-GAIN, emissions and climate-finance data, built into something a non-technical reader will finish.",
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
    summary:
      "Leading design and build of an AI-enriched literature collection and visualisation that tracks climate resilience investment across the full value chain of interventions — so that financing and funding decisions can be made against evidence rather than intuition.",
    note:
      "A knowledge graph rather than a document dump: the structure is what lets you see which parts of the value chain are well funded and which the field keeps asking about but never answers.",
    tags: ["LLM enrichment", "Knowledge graph", "Retrieval", "Stakeholder research"],
    links: [],
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
      "An interactive dashboard putting urban heat island intensity, vegetation cover and social vulnerability side by side across the South Florida metro — so you can see where the hottest, least green and least resourced areas overlap, which is where heat policy has to land first.",
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
      "A public-facing ArcGIS StoryMap on the rising danger of extreme heat in Miami-Dade: what the trend actually means, which communities carry the most of it, and what interventions are available. Written for residents and decision-makers rather than for a GIS audience.",
    note: "The precursor to the urban heat dashboard — narrative first, then the interactive tool.",
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
      "An interactive 3D scene of every building in the City of Miami Beach at risk of inundation by 2030, 2050 and 2090 under a moderate climate pathway, modelled from surface elevation and proximity to water bodies. Buildings are coloured by the decade they become exposed, which makes the timeline legible at a glance.",
    note:
      "Building-level rather than parcel-level, so a property owner can find their own address in it.",
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
      "California grows roughly half of US vegetables and three quarters of its fruit and nuts, most of it in the Central Valley. This GIS multi-criteria evaluation combines WorldClim, SoilGrids, NLCD land cover, 3DEP elevation and NHD hydrology into a weighted suitability index, then re-runs it under SSP245 and SSP585 for 2050 and maps where suitability is gained, lost or holds.",
    note:
      "Cluster, outlier and hot-spot analysis on the difference surfaces, so the result is specific places rather than a national-scale shrug. With Devoux Deysel.",
    tags: ["ArcGIS Pro", "Multi-criteria evaluation", "CMIP6 / SSP", "Hot-spot analysis"],
    links: [{ label: "Slides (PDF)", href: "/work/agricultural-suitability-gis.pdf" }],
  },
  {
    slug: "classinsight",
    title: "ClassInsight",
    kind: "Applied AI · Education",
    org: "Miami Law & AI Lab (MiLA)",
    year: "2024 — 2026",
    summary:
      "An LLM-based real-time classroom-feedback application. I owned project management for a small team taking it from concept through prototype and beta to an open-source release, and ran demos for 25+ educators and 150+ law students to gather feedback and build AI literacy across the school.",
    note: "Shortlisted finalist, AIREA 2025 (Hong Kong). Published in Research Square, 2026.",
    tags: ["Agentic LLM", "OpenAI & Anthropic APIs", "Product management", "User research"],
    links: [{ label: "Paper", href: "https://doi.org/10.21203/rs.3.rs-8078768/v1" }],
  },
  {
    slug: "medical-rag",
    title: "Clinical retrieval system for The Blue Scrubs",
    kind: "ML research",
    org: "Moffitt Cancer Center",
    year: "2025",
    summary:
      "Led data collection strategy for a B2B health-tech platform, managing a small team sourcing and extracting clinical guideline text and growing the corpus by 67%. Spearheaded evaluation of six state-of-the-art retrieval algorithms across a million medical records, building benchmark Q&A datasets with LLM inference to tune a clinical RAG system.",
    note:
      "The deliverable wasn't the ranking — it was a benchmark the clinical team could re-run and argue with themselves.",
    tags: ["RAG evaluation", "Benchmark design", "Data strategy", "Team lead"],
    links: [
      { label: "Dataset", href: "https://huggingface.co/datasets/TheBlueScrubs/TheBlueScrubs-v2" },
    ],
  },
  {
    slug: "cancer-classifier",
    title: "Cancer-type classifier, Blue Scrubs v2.0",
    kind: "ML research",
    org: "Moffitt Cancer Center",
    year: "2025",
    summary:
      "A TF-IDF and logistic regression pipeline applying cancer-type labels to the largest publicly available annotated clinical text dataset, at 82% accuracy and training in under three minutes on CPU.",
    note:
      "Deliberately the simplest model that met the bar — cheap to retrain, and legible to the people who had to trust it.",
    tags: ["scikit-learn", "TF-IDF", "Dataset curation", "Evaluation"],
    links: [],
  },
];
