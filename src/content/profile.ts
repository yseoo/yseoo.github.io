/**
 * profile.ts — identity, hero copy, "at a glance" highlights, social links,
 * and skills. Plain typed data: edit here to update the site; components read it.
 */

// A `type` describes the shape of a value. TypeScript then checks every use of
// it, so a typo like `highlight.lable` becomes an error while you type.
export type Highlight = {
  icon: string; // Iconify name
  label: string;
  value: string;
};

// One tech logo shown in a skill card. `icon` is an Iconify name (browse at
// https://icon-sets.iconify.design); `color` is only needed for monochrome icons.
export type TechLogo = {
  name: string;
  icon: string;
  color?: string;
};

export type SkillGroup = {
  title: string;
  logos: TechLogo[];
  points: string[];
};

export type SocialLink = {
  label: string;
  href: string;
  icon: string; // Iconify name
};

export type Stat = {
  value: string;
  label: string;
};

export const profile = {
  name: "Killian Hinard",
  role: "Computer Vision & AI Engineer",
  eyebrow: "Computer Vision · Machine Learning · Robotics",
  tagline:
    "I build computer-vision and AI systems that turn deep-learning research into real-world solutions.",
  bio: "Robotics MSc with a Data Science minor at EPFL. Driven by a passion for innovative technologies, my goal is to develop solutions that not only advance the field but also tackle real-world challenges, improve quality of life, and deliver a positive impact on the world. Outside of my technical pursuits, I enjoy exploring nature and traveling, which broaden my perspectives and inspire my professional endeavors.",
  metaDescription:
    "Portfolio of Killian Hinard — Computer Vision & AI engineer (Robotics MSc, EPFL).",
  location: "Geneva, Switzerland",

  // "At a glance" card in the hero.
  highlights: [
    { icon: "mdi:briefcase-outline", label: "Now", value: "Open to work" },
    {
      icon: "mdi:school-outline",
      label: "Education",
      value: "MSc Robotics & Data Science @ EPFL",
    },
    {
      icon: "mdi:map-marker-outline",
      label: "Based in",
      value: "Geneva, Switzerland",
    },
    {
      icon: "mdi:eye-outline",
      label: "Focus",
      value: "Computer Vision · Machine Learning",
    },
  ] satisfies Highlight[],

  // Headline numbers shown in the stat band on the home page.
  stats: [
    { value: "MSc", label: "Robotics · Data Science @ EPFL" },
    { value: "5.52", label: "Master's GPA / 6" },
    { value: "15", label: "Projects archived" },
    { value: "2", label: "Internship CV research" },
  ] satisfies Stat[],

  email: "killian.hd@gmail.com",
  socials: [
    { label: "GitHub", href: "https://github.com/yseoo", icon: "mdi:github" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/killian-hinard/",
      icon: "mdi:linkedin",
    },
  ] satisfies SocialLink[],

  skills: [
    {
      title: "Machine Learning & Computer Vision",
      logos: [
        { name: "PyTorch", icon: "devicon:pytorch" },
        { name: "TensorFlow", icon: "logos:tensorflow" },
        { name: "Python", icon: "logos:python" },
        { name: "NumPy", icon: "logos:numpy" },
        { name: "OpenCV", icon: "logos:opencv" },
        { name: "scikit-learn", icon: "devicon:scikitlearn" },
        { name: "CUDA", icon: "vscode-icons:file-type-cuda" },
      ],
      points: [
        "Designing and implementing computer-vision models with OpenCV, PyTorch and core Python libraries for real-time image and video analysis.",
        "Applying CNNs and Transformers for action recognition, object detection, and autonomous-driving applications.",
        "Integrating vision systems into applications to enhance interaction and automation.",
        "Using transfer learning and feature extraction to adapt pre-trained models to domain-specific tasks.",
      ],
    },
    {
      title: "Data Science & Analysis",
      logos: [
        { name: "Python", icon: "logos:python" },
        { name: "Pandas", icon: "simple-icons:pandas", color: "#5a9bd4" },
        { name: "NumPy", icon: "logos:numpy" },
        { name: "SQL", icon: "tabler:sql", color: "#f2a93b" },
        { name: "Hadoop", icon: "logos:hadoop" },
        { name: "Spark", icon: "logos:apache-spark" },
        { name: "JavaScript", icon: "logos:javascript" },
      ],
      points: [
        "Proficient in Python and SQL for data manipulation, analysis, and visualization.",
        "Skilled in statistical analysis, hypothesis testing, and experimental design.",
        "Experienced in preprocessing, cleaning, and feature engineering.",
        "Comfortable with big-data tools such as Hadoop, Spark, and Hive for large-scale datasets.",
      ],
    },
    {
      title: "Robotics & Control Systems",
      logos: [
        { name: "Python", icon: "logos:python" },
        { name: "C", icon: "logos:c" },
        { name: "C++", icon: "simple-icons:cplusplus", color: "#649ad2" },
        { name: "MATLAB", icon: "devicon:matlab" },
        { name: "Arduino", icon: "logos:arduino" },
        { name: "Raspberry Pi", icon: "logos:raspberry-pi" },
      ],
      points: [
        "Designing and programming robotic systems in Python, C++, and C for complex tasks.",
        "Implementing control algorithms — PID, LQR, MPC — for precise navigation and manipulation.",
        "Integrating machine learning with robotic systems for adaptive, intelligent behavior.",
        "Applying genetic algorithms, genetic programming, and neuroevolution to robot learning.",
      ],
    },
  ] satisfies SkillGroup[],
} as const;
