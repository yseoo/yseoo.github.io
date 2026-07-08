/**
 * profile.ts — identity, hero copy, "at a glance" highlights, social links,
 * and skills. Plain typed data: edit here to update the site; components read it.
 */

// A `type` describes the shape of a value. TypeScript then checks every use of
// it, so a typo like `highlight.lable` becomes an error while you type.
export type Highlight = {
  label: string;
  value: string;
};

export type SkillGroup = {
  title: string;
  summary: string;
  tools: string[];
  // Longer bullets kept from the old site; available if we want more detail.
  points: string[];
};

export type SocialLink = {
  label: string;
  href: string;
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
    { label: "Now", value: "Open to work" },
    { label: "Education", value: "MSc Robotics & Data Science, EPFL" },
    { label: "Based in", value: "Geneva, Switzerland" },
    { label: "Focus", value: "Computer Vision · Machine Learning" },
  ] satisfies Highlight[],

  email: "killian.hd@gmail.com",
  socials: [
    { label: "GitHub", href: "https://github.com/yseoo" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/killian-hinard/" },
  ] satisfies SocialLink[],

  skills: [
    {
      title: "Machine Learning & Computer Vision",
      summary:
        "Designing and shipping real-time image and video models — detection, segmentation, and action recognition — from research to deployment.",
      tools: [
        "PyTorch",
        "TensorFlow",
        "OpenCV",
        "Python",
        "NumPy",
        "scikit-learn",
        "CUDA",
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
      summary:
        "Turning large, messy datasets into insight — from statistical analysis and feature engineering to big-data pipelines.",
      tools: ["Python", "SQL", "Pandas", "NumPy", "Spark", "Hadoop", "JavaScript"],
      points: [
        "Proficient in Python and SQL for data manipulation, analysis, and visualization.",
        "Skilled in statistical analysis, hypothesis testing, and experimental design.",
        "Experienced in preprocessing, cleaning, and feature engineering.",
        "Comfortable with big-data tools such as Hadoop, Spark, and Hive for large-scale datasets.",
      ],
    },
    {
      title: "Robotics & Control Systems",
      summary:
        "Programming robots and control algorithms, and blending learning-based methods with classical control for adaptive behavior.",
      tools: ["Python", "C++", "C", "MATLAB", "Arduino", "Raspberry Pi"],
      points: [
        "Designing and programming robotic systems in Python, C++, and C for complex tasks.",
        "Implementing control algorithms — PID, LQR, MPC — for precise navigation and manipulation.",
        "Integrating machine learning with robotic systems for adaptive, intelligent behavior.",
        "Applying genetic algorithms, genetic programming, and neuroevolution to robot learning.",
      ],
    },
  ] satisfies SkillGroup[],
} as const;
