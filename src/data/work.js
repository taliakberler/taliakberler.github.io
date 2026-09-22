// Selected work. `featured: true` gets the large treatment at the top.
//
// To add a project: copy a block, and drop any image into public/work/ then set
// `image: "/work/your-file.png"`. Projects without an image render a typographic
// card instead, so nothing breaks while assets are still coming.

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
      { label: "Read the story", href: "https://taliakberler.github.io/Climate-Finance-Story/", primary: true },
      { label: "Source", href: "https://github.com/taliakberler/Climate-Finance-Story" },
    ],
  },
  {
    slug: "resilience-finance-repository",
    title: "Resilience Finance Repository",
    kind: "Product · Knowledge systems",
    org: "Climate Resilience Institute",
    year: "2025 — present",
    summary:
      "The Resilience Finance Lab convenes practitioners who each hold a piece of how resilience actually gets funded — and had no shared place to put it. I'm building the repository that fixes that: a searchable, AI-enriched body of knowledge serving 40+ stakeholders, designed as much around what practitioners need to find as around how documents get indexed.",
    note:
      "The enrichment layer surfaces absence as well as content — the questions the field keeps asking that nobody has answered yet.",
    tags: ["LLM enrichment", "Retrieval", "Stakeholder research", "MVP"],
    links: [],
  },
  {
    slug: "classinsight",
    title: "ClassInsight",
    kind: "Applied AI · Education",
    org: "UM Law & AI Lab (MiLA)",
    year: "2024 — 2026",
    summary:
      "An agentic classroom-feedback application that gives instructors structured, timely insight into how a session actually landed. I led it as student developer from prototype through to a beta prepared for open-source release, working with a UI developer to get it into faculty hands.",
    note: "Shortlisted finalist, AIREA 2025 (Hong Kong). Published in Research Square, 2026.",
    tags: ["Agentic LLM", "OpenAI & Anthropic APIs", "Prompt engineering", "RAG"],
    links: [
      { label: "Paper", href: "https://doi.org/10.21203/rs.3.rs-8078768/v1" },
    ],
  },
  {
    slug: "medical-rag",
    title: "Medical retrieval system for The Blue Scrubs",
    kind: "ML research",
    org: "Moffitt Cancer Center",
    year: "2025",
    summary:
      "Led a month-long evaluation with an external consulting team, benchmarking six state-of-the-art retrieval algorithms across 20+ databases and over a million medical text records. Collected and processed 500K+ clinical trial records and guideline documents to build the retrieval corpus behind the Blue Scrubs virtual clinicians.",
    note:
      "The deliverable wasn't the ranking — it was a benchmark the clinical team could re-run and argue with themselves.",
    tags: ["RAG evaluation", "Benchmark design", "Data engineering", "Web scraping"],
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
      "A TF-IDF and logistic regression classifier for cancer types within a 692B-token clinical corpus, built on a curated 30K-sample breast-cancer dataset distilled from 11.5M records via keyword bootstrapping and sampling filters. F1 0.86, AUC 0.94 on hold-out and out-of-sample sets, training in under three minutes on CPU.",
    note:
      "Deliberately the simplest model that met the bar — cheap to retrain, and legible to the people who had to trust it.",
    tags: ["scikit-learn", "TF-IDF", "Dataset curation", "Evaluation"],
    links: [],
  },
  {
    slug: "agricultural-suitability-gis",
    title: "Agricultural land suitability under future climate scenarios",
    kind: "Geospatial analysis",
    org: "California's Central Valley · GIS II",
    year: "2025",
    summary:
      "An ArcGIS multi-criteria evaluation model combining soil, climate, hydrology, elevation and land-cover data to map where agriculture remains viable. Compared a 2050 baseline against SSP2-4.5 and SSP5-8.5, producing change maps that separate gains, losses and stable zones.",
    note: "Certified in ESRI's GIS for Climate Action, 2026.",
    tags: ["ArcGIS", "Multi-criteria evaluation", "SSP scenarios", "Raster analysis"],
    links: [],
  },
];
