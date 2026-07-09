/**
 * projects.ts — the project catalogue. Each project has a primary `category`
 * (used by the filter on the Projects page) plus free-form `tags` for display,
 * and a `links` array (external sites, GitHub, or PDFs served from /public/pdfs).
 */

// The set of filter categories. Deriving the union type from this array means
// each project's `category` MUST be one of these — a typo won't compile.
export const CATEGORIES = [
  "Computer Vision",
  "Data Science",
  "Robotics",
  "Hardware",
  "Software",
] as const;

export type Category = (typeof CATEGORIES)[number];

export type ProjectLink = {
  label: string; // e.g. "Code", "Report", "Live", "Website"
  href: string;
};

export type Project = {
  title: string;
  image: string; // path under /public
  date: string;
  category: Category;
  blurb: string;
  tags: string[];
  links: ProjectLink[];
};

export const projects: Project[] = [
  {
    title: "MBAimCLR",
    image: "/projects/mbaimclr.png",
    date: "Winter 2023",
    category: "Computer Vision",
    blurb:
      "Investigated a contrastive-learning framework with extreme data augmentation for training a state-of-the-art transformer network on action recognition.",
    tags: ["Action Recognition", "Deep Learning", "PyTorch", "Python"],
    links: [
      { label: "Report", href: "/pdfs/mbaimclr.pdf" },
      { label: "Code", href: "https://github.com/yseoo/MBAimCLR" },
    ],
  },
  {
    title: "Pedestrian Intention Prediction",
    image: "/projects/pedestrian.gif",
    date: "Spring 2023",
    category: "Computer Vision",
    blurb:
      "A model to predict pedestrian intention from video, built on MotionBERT and trained and evaluated on the JAAD dataset.",
    tags: ["Action Recognition", "Deep Learning", "PyTorch", "Python"],
    links: [
      {
        label: "Code",
        href: "https://github.com/yseoo/Pedestrian-Intention-Prediction/tree/main",
      },
    ],
  },
  {
    title: "Conveyor Belt Waste Type Detection",
    image: "/projects/waste_detection.jpg",
    date: "Spring 2024",
    category: "Computer Vision",
    blurb:
      "Real-time object detection and segmentation to optimize recycling-facility operations, with performance fit for practical deployment. In collaboration with the CVLAB at EPFL and the startup WasteFlow.",
    tags: ["Object Detection", "Deep Learning", "PyTorch", "OpenVINO"],
    links: [{ label: "Website", href: "https://www.wasteflow.ai" }],
  },
  {
    title: "FireFighter",
    image: "/projects/firefighter.gif",
    date: "Winter 2022",
    category: "Robotics",
    blurb:
      "SuperThymio, a mobile robot using computer vision and pattern recognition to navigate a simulated city with 3D obstacles — combining global planning, local avoidance, and a Kalman filter to locate and extinguish modeled fires.",
    tags: ["Robotics", "Computer Vision", "Control", "Python"],
    links: [{ label: "Code", href: "https://github.com/yseoo/FireFighter" }],
  },
  {
    title: "Probabilistic Trip Planner",
    image: "/projects/planner.gif",
    date: "Spring 2023",
    category: "Data Science",
    blurb:
      "A robust public-transport route planner for Zurich using big-data analytics and real-time data. Built on Spark and distributed file systems, with predictive algorithms that optimize route reliability within given confidence intervals.",
    tags: ["Large-scale Data", "Spark", "Python"],
    links: [
      {
        label: "Code",
        href: "https://github.com/yseoo/Probabilistic-Trip-Planner",
      },
    ],
  },
  {
    title: "Evolved Robot",
    image: "/projects/evolved.gif",
    date: "Spring 2024",
    category: "Robotics",
    blurb:
      "Evolved a robot's brain and morphology with a genetic algorithm, so it learns legged locomotion through evolution and adapts to different environments.",
    tags: ["Evolutionary Algorithms", "Simulation", "Prototyping"],
    links: [{ label: "Report", href: "/pdfs/evolved.pdf" }],
  },
  {
    title: "The Stellar Chronicles of History",
    image: "/projects/dataviz.png",
    date: "Spring 2024",
    category: "Data Science",
    blurb:
      "An interactive website to explore world history through creative visualizations — JavaScript on the front end, Python for data cleaning and processing.",
    tags: ["Data Visualization", "JavaScript", "Web Development"],
    links: [
      {
        label: "Live",
        href: "https://com-480-data-visualization.github.io/project-2024-DataBeez/",
      },
      {
        label: "Code",
        href: "https://github.com/com-480-data-visualization/project-2024-DataBeez",
      },
    ],
  },
  {
    title: "A Tale of Acting Careers",
    image: "/projects/ada.png",
    date: "Winter 2023",
    category: "Data Science",
    blurb:
      "A data-storytelling website surfacing insights from the IMDb and CMU movie/character datasets, spanning data cleaning, analysis, and visualization.",
    tags: ["Data Visualization", "Python", "Web Development"],
    links: [
      { label: "Live", href: "https://yseoo.github.io/las-empanadas-story/" },
      {
        label: "Code",
        href: "https://github.com/epfl-ada/ada-2023-project-lasempanadas",
      },
    ],
  },
  {
    title: "Autonomous Hydroponic Farm",
    image: "/projects/proto_farm.png",
    date: "Spring 2022",
    category: "Hardware",
    blurb:
      "A self-regulating hydroponic farm managing heat, light, pH, and nutrient concentration for optimal plant growth — including custom-built sensors for nutrient concentration and pH from basic materials.",
    tags: ["Sensor Systems", "Arduino", "Prototyping"],
    links: [{ label: "Report", href: "/pdfs/sensor.pdf" }],
  },
  {
    title: "MEMS Micro-Mirror Actuator",
    image: "/projects/mems.gif",
    date: "Winter 2021",
    category: "Hardware",
    blurb:
      "A MEMS device to manipulate a micro-mirror within optical-fiber paths, with a laterally moving actuator that locks at extended and retracted positions. Spanned design, COMSOL simulation, clean-room fabrication, and evaluation of issues like stiction.",
    tags: ["Mechanical Design", "Microfabrication", "Micro-tech"],
    links: [{ label: "Report", href: "/pdfs/mems.pdf" }],
  },
  {
    title: "SileX Balanced Mechanism",
    image: "/projects/silex.png",
    date: "Spring 2021",
    category: "Hardware",
    blurb:
      "A dynamically balanced mechanism with two degrees of freedom in roll and pitch, moving a mirror that reflects a laser for microfabrication. Built for EPFL's second-year 'Conception de Mécanisme' course.",
    tags: ["Mechanical Design", "Flexible Mechanism", "Microfabrication"],
    links: [{ label: "Report", href: "/pdfs/silex.pdf" }],
  },
  {
    title: "Temperature Controller in Assembly",
    image: "/projects/micro.png",
    date: "Spring 2021",
    category: "Hardware",
    blurb:
      "An app written entirely in assembly that controls room temperature: it measures temperature, drives a vent via a servo based on user thresholds set on an LCD, and raises an alarm past the limits. Built for EPFL's 'Microcontrôleurs' course.",
    tags: ["Microcontroller", "Assembly", "Electronics"],
    links: [{ label: "Report", href: "/pdfs/micro.pdf" }],
  },
  {
    title: "Logic-Circuit Multifunction Clock",
    image: "/projects/syslog.gif",
    date: "Autumn 2020",
    category: "Hardware",
    blurb:
      "A digital watch built from logic circuits alone — adjustable clock, alarm, stopwatch, timer, and timezone control, with intuitive inputs and audio notifications. Made from scratch for EPFL's 'Système Logique' course.",
    tags: ["Logic Circuits", "Digital Design"],
    links: [{ label: "Report", href: "/pdfs/syslog.pdf" }],
  },
  {
    title: "Archipelago City Maker",
    image: "/projects/archipellago.png",
    date: "Spring 2020",
    category: "Software",
    blurb:
      "An application to build island cities with houses, production sites, and transport nodes across interconnected islands — create, save, and load layouts, scored on commute distance, live/work balance, and population capacity.",
    tags: ["C++", "Application"],
    links: [{ label: "Code", href: "https://github.com/yseoo/Archipelago" }],
  },
  {
    title: "Mechanical Design of a Seeder",
    image: "/projects/semoir.png",
    date: "Spring 2020",
    category: "Hardware",
    blurb:
      "A seeder designed from scratch to a fixed specification, for EPFL's first-year 'Construction mécanique' course.",
    tags: ["Mechanical Design", "CAD"],
    links: [{ label: "Report", href: "/pdfs/semoir.pdf" }],
  },
];
