/**
 * resume.ts — education, professional experience, and extracurriculars.
 * Rendered as vertical timelines on the Experience & Education page.
 */

export type ResumeItem = {
  title: string; // role or degree
  org: string; // institution / company
  location: string;
  date: string;
  points: string[];
};

export type ResumeSection = {
  title: string;
  items: ResumeItem[];
};

export const experience: ResumeSection = {
  title: "Professional Experience",
  items: [
    {
      title: "Computer Vision Research Intern",
      org: "Richemont Automation & Machine Vision Lab",
      location: "Buttes, Switzerland",
      date: "Sep 2025 — Mar 2026",
      points: [
        "Conducting a state-of-the-art review of AI-based visual anomaly-detection algorithms.",
        "Benchmarking selected algorithms on image datasets specific to the watchmaking domain.",
        "Studying the solution's potential to generalize to new pieces.",
        "Delivering the solution in line with the team's standards.",
      ],
    },
    {
      title: "AI Research Intern",
      org: "Richemont AI Lab",
      location: "Lausanne, Switzerland",
      date: "Oct 2024 — Feb 2025",
      points: [
        "Developed and implemented state-of-the-art computer-vision models for object detection and segmentation.",
        "Handled dataset collection, annotation, and preprocessing for training and evaluation.",
        "Collaborated with cross-functional teams to design and ship AI solutions for luxury goods.",
      ],
    },
    {
      title: "Teaching Assistant in Mathematics",
      org: "Université de Lausanne (UNIL)",
      location: "Lausanne, Switzerland",
      date: "Sep 2022 — Jul 2024",
      points: [
        "Explained mathematical concepts to students alongside the lecturer.",
        "Supported students through exercise sessions.",
        "Assisted with examination supervision.",
      ],
    },
    {
      title: "Laboratory Assistant",
      org: "Geneva University Hospitals (HUG)",
      location: "Geneva, Switzerland",
      date: "Summers 2022 & 2023",
      points: [
        "Received medical samples and applied the necessary treatments before analysis.",
        "Routed samples to the correct laboratories in the central laboratory building.",
        "Prepared laboratory equipment orders and deliveries.",
      ],
    },
  ],
};

export const education: ResumeSection = {
  title: "Education",
  items: [
    {
      title: "MSc in Robotics, minor in Data Science",
      org: "École Polytechnique Fédérale de Lausanne (EPFL)",
      location: "Lausanne, Switzerland",
      date: "Sep 2022 — Mar 2026",
      points: [
        "Coursework and projects in Machine Learning, Deep Learning, Computer Vision, Reinforcement Learning, Multivariable & Model Predictive Control, Evolutionary Algorithms, Intelligent Agents, and DevOps.",
        "Data Science minor: Applied Data Analysis, Computer Networks, Data Visualization, Databases, Large-scale Data Management, Data Cleaning.",
        "GPA: 5.52 / 6",
      ],
    },
    {
      title: "Academic Exchange",
      org: "KTH Royal Institute of Technology",
      location: "Stockholm, Sweden",
      date: "Aug 2021 — Jun 2022",
      points: [
        "Signal & Stochastic Processing, Embedded and Real-time Systems, Automatic Control, MEMS, Sensor-based Systems, Machine Learning and Neuroscience.",
      ],
    },
    {
      title: "BSc in Microengineering",
      org: "École Polytechnique Fédérale de Lausanne (EPFL)",
      location: "Lausanne, Switzerland",
      date: "Sep 2019 — Jun 2022",
      points: [
        "Basic sciences (physics, linear algebra, calculus, chemistry), object-oriented programming (C++), experimental statistics, computer-science theory, analog devices, micro-mechanical engineering, and electronics.",
        "GPA: 5 / 6",
      ],
    },
    {
      title: "Baccalauréat in Science",
      org: "Lycée Madame de Staël",
      location: "Saint-Julien-en-Genevois, France",
      date: "Sep 2016 — Jul 2019",
      points: [
        "Science focus: mathematics, physics, chemistry, biology.",
        "Grade: 18.28 / 20 — Congratulations from the jury.",
      ],
    },
  ],
};

export const extracurricular: ResumeSection = {
  title: "Extracurricular",
  items: [
    {
      title: "Webmaster",
      org: "EPFL Sustainable Innovation Challenge (EPFL-SIC)",
      location: "Lausanne, Switzerland",
      date: "Sep 2024 — Jan 2025",
      points: [
        "Joined as a founding member shortly after the association's creation, as its first webmaster.",
        "Designed, built, and deployed the association's first website from scratch.",
        "Handed over website ownership and maintenance to focus on a concurrent internship.",
      ],
    },
    {
      title: "Board Member & Webmaster",
      org: "Erasmus Student Network (ESN) EPFL",
      location: "Lausanne, Switzerland",
      date: "Jan 2024 — Jul 2024",
      points: [
        "Managed the ESN website and digital resources for reliable operation and accessibility.",
        "Contributed to strategic leadership: decision-making, organizational management, and recruiting.",
        "Worked with the communication team to ensure accurate event descriptions.",
      ],
    },
    {
      title: "Committee Member",
      org: "Erasmus Student Network (ESN) EPFL",
      location: "Lausanne, Switzerland",
      date: "Sep 2023 — Jan 2024",
      points: [
        "Organized events for Erasmus students — budget, ticket pricing, promotion, and staffing.",
        "Actively engaged in the association's life, including weekly meetings.",
      ],
    },
  ],
};

// Convenience bundle for the page.
export const resume = { experience, education, extracurricular };
