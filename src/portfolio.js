// import { link } from "fs";

const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Killian Hinard | Portfolio",
  description:
    "A Data Science practitioner who thrives to leverage startups with AI based solutions with a blend of UI/UX",
  og: {
    title: "Killian Portfolio",
    type: "website",
    url: "https://killianhinard.com/",
  },
};

//Home Page
const greeting = {
  title: "Bonjour!",
  sub: "Killian Hinard",
  logo_name: "Killian Hinard",
  // resumeLink: "www.google.com",
};

// home logos
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Github",
      iconifyClassname: "simple-icons:github",
      style: {
        color: "white",
      },
      profileLink: "https://github.com/yseoo",
    },
    // {
    //   siteName: "HackerRank",
    //   iconifyClassname: "simple-icons:hackerrank",
    //   style: {
    //     color: "#2EC866",
    //   },
    //   profileLink: "https://www.hackerrank.com/rohankokkula01",
    // },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/rohan0301",
    // },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@rohankokkula",
    // },
    // {
    //   siteName: "LinkedIn",
    //   iconifyClassname: "simple-icons:linkedin",
    //   style: {
    //     color: "#0077b5",
    //   },
    //   profileLink: "https://www.linkedin.com/in/rohankokkula/",
    // },
    // {
    //   siteName: "HashNode",
    //   iconifyClassname: "simple-icons:hashnode",
    //   style: {
    //     color: "#2962ff",
    //   },
    //   profileLink: "",
    // },
  ],
};

//what i do?
const skills = {
  data: [
    {
      title: "Machine Learning & AI (Computer Vision)",
      fileName: "FullStackImg",
      skills: [
        "⚡ Designing and implementing computer vision models using OpenCV, PyTorch and basic python librairies for real-time image and video analysis.",
        "⚡ Applying advanced machine learning algorithms like CNNs and Transformers for action recognition, object detection, and autonomous driving applications.",
        "⚡ Developing and integrating computer vision systems into applications, enhancing user interaction and automation.",
        "⚡ Applying transfer learning and feature extraction techniques to leverage pre-trained models for rapid development and improved performance in domain-specific tasks.",
      ],
      softwareSkills: [
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "devicon:pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "TensorFlow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "logos-python",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "NumPy",
          fontAwesomeClassname: "logos-numpy",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "OpenCV",
          fontAwesomeClassname: "logos-opencv",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Scikit-Learn",
          fontAwesomeClassname: "devicon:scikitlearn",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Cuda",
          fontAwesomeClassname: "vscode-icons:file-type-cuda",
          style: {
            backgroundColor: "transparent",
            color: "red",
          },
        },
      ],
    },
    {
      title: "Data Science & Analysis",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Proficient in programming languages such as Python and SQL for data manipulation, analysis, and visualization.",
        "⚡ Skilled in statistical analysis, hypothesis testing, and experimental design for drawing insights from data.",
        "⚡ Experience with data preprocessing, cleaning, and feature engineering to prepare datasets for modeling and analysis.",
        "⚡ Knowledgeable in working with big data technologies, such as Apache Hadoop, Spark, and Hive, for processing and analyzing large-scale datasets.",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "logos-python",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "NumPy",
          fontAwesomeClassname: "logos-numpy",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "tabler:sql",
          style: {
            backgroundColor: "transparent",
            color: "#F29111",
          },
        },
        {
          skillName: "Hadoop",
          fontAwesomeClassname: "logos-hadoop",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Spark",
          fontAwesomeClassname: "logos-apache-spark",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "logos-javascript",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "Robotics & Control Systems",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing and programming robotic systems using Python, C++, C for complex tasks and missions.",
        "⚡ Implementing control systems and algorithms, such as PID, LQR, and MPC, for precise and efficient robot navigation and manipulation.",
        "⚡ Integrating machine learning algorithms with robotic systems for adaptive and intelligent behavior.",
        "⚡ Applying genetic algorithms (GAs), genetic programming (GP), and neuroevolution techniques to enhance robot learning and adaptation.",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "logos-python",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "C",
          fontAwesomeClassname: "logos-c",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            backgroundColor: "transparent",
            color: "#00599C",
          },
        },
        {
          skillName: "MatLab",
          fontAwesomeClassname: "devicon:matlab",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Arduino",
          fontAwesomeClassname: "logos-arduino",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Raspberry Pi",
          fontAwesomeClassname: "logos-raspberry-pi",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Welcome! Here you’ll find a collection of projects that blend robotics, data science, computer vision, mechanical designs and sensor based systems. Please feel free to explore, and don’t hesitate to contact me if you have any questions or are interested in collaboration.",
};

//project cards
// colors:[primary,secondary,success,danger,warning,info,light,dark,]
const projectcards = {
  list: [
    {
      title: "MBAimCLR",
      img_path: "mbaimclr.png",
      date: "Winter 2023",
      description:
        "Investigate the performance of a specific contrastive learning framework with extreme data augmentation for training a state-of-the-art transformer-based network in action recognition.",
      tags: [
        {
          lang: "Computer Vision",
          color: "#00a100",
        },
        {
          lang: "Action Recognition",
          color: "#7f09e6",
        },
        {
          lang: "Deep Learning",
          color: "#e6a009",
        },
        {
          lang: "Python",
          color: "#0961e6",
        },
        {
          lang: "PyTorch",
          color: "#Ed3437",
        },
      ],
      link: "pdfs/mbaimclr.pdf",
      code: "https://github.com/yseoo/MBAimCLR",
      linkcolor: "white",
    },
    {
      title: "FireFighter",
      img_path: "firefighter.gif",
      date: "Winter 2022",
      description:
        "In a controlled environment, we designed a mobile robot named SuperThymio that employs computer vision and pattern recognition to effectively navigate through a simulated city with 3D obstacles, utilizing global planning and local avoidance algorithms, as well as a Kalman filter for accurate localization, to locate and extinguish modeled fires using high-contrast components for enhanced performance.",
      tags: [
        {
          lang: "Robotics",
          color: "#1809e6",
        },
        {
          lang: "Computer Vision",
          color: "#00a100",
        },
        {
          lang: "Control",
          color: "#e60909",
        },
        {
          lang: "Python",
          color: "#0961e6",
        },
      ],
      link: "",
      code: "https://github.com/yseoo/FireFighter",
      linkcolor: "white",
    },
    {
      title: "Evolved Robot",
      img_path: "evolved.gif",
      date: "Spring 2024",
      description:
        "Developed a robot by evolving its brain and morphology using a genetic algorithm. The goal was to create a robot that would learn legged locomotion through evolution and that would be able to adapt to different environments.",
      tags: [
        {
          lang: "Robotics",
          color: "#1809e6",
        },
        {
          lang: "Evolutionary Algorithms",
          color: "#00a100",
        },
        {
          lang: "Prototyping",
          color: "#e60909",
        },
        {
          lang: "Simulation",
          color: "#0961e6",
        },
      ],
      link: "pdfs/evolved.pdf",
      code: "",
      linkcolor: "white",
    },
    {
      title: "SileX project",
      img_path: "silex.png",
      date: "Spring 2021",
      description:
        "The SileX project, part of the second-year 'Conception de Mécanisme' course at EPFL, aims to create a dynamically balanced mechanism with two degrees of freedom in roll and pitch. This mechanism facilitates the movement of a mirror that reflects a laser in microfabrication processes.",
      tags: [
        {
          lang: "Mechanical Design",
          color: "#e60909",
        },
        {
          lang: "flexible mechanism",
          color: "#00a100",
        },
        {
          lang: "microfabrication",
          color: "#0974e6",
        },
      ],
      link: "pdfs/silex.pdf",
      code: "",
      linkcolor: "white",
    },
    {
      title: "Logical Circuit Multifunction Clock",
      img_path: "syslog.gif",
      date: "Autumn 2020",
      description:
        "Designed a digital watch using only logical circuits, featuring an adjustable clock, alarm, stopwatch, timer, and timezone adjustments. Made from scratch in the context of 'Système Logique' course at EPFL in 2nd year, it included intuitive controls and audio notifications.",
      tags: [
        {
          lang: "Logical Circuit",
          color: "#e60909",
        },
        {
          lang: "Microcontroller",
          color: "#c47206",
        },
      ],
      link: "pdfs/syslog.pdf",
      code: "",
      linkcolor: "white",
    },
    {
      title: "Pedestrian Intention Prediction",
      img_path: "pedestrian.gif",
      date: "Spring 2023",
      description:
        "This project propose a model to predict the intention of pedestrians in a video. The model is based on the MotionBert model and is trained and evaluated on the JAAD dataset.",
      tags: [
        {
          lang: "Computer Vision",
          color: "#00a100",
        },
        {
          lang: "Action Recognition",
          color: "#7f09e6",
        },
        {
          lang: "Deep Learning",
          color: "#e6a009",
        },
        {
          lang: "Python",
          color: "#0961e6",
        },
        {
          lang: "PyTorch",
          color: "#Ed3437",
        },
      ],
      link: "",
      code:
        "https://github.com/yseoo/Pedestrian-Intention-Prediction/tree/main",
      linkcolor: "white",
    },
    {
      title: "Probabilistic Trip Planner",
      img_path: "planner.gif",
      date: "Spring 2023",
      description:
        "Developed a robust public transport route planner for Zurich using big data analytics and real-time data integration. Utilized Spark and distributed file systems to process large-scale datasets, designing predictive algorithms to optimize route reliability and efficiency within specified confidence intervals. Enhanced user experience by incorporating and interactive visualizations.",
      tags: [
        {
          lang: "Data Science",
          color: "#00a100",
        },
        {
          lang: "Large-scale data",
          color: "#303030",
        },
        {
          lang: "Python",
          color: "#0961e6",
        },
        {
          lang: "Spark",
          color: "#c47206",
        },
      ],
      link: "",
      code: "https://github.com/yseoo/Probabilistic-Trip-Planner",
      linkcolor: "white",
    },
    {
      title: "Autonomous Hydroponic Farm",
      img_path: "proto_farm.png",
      date: "Spring 2022",
      description:
        "Developed a self-regulating hydroponic farm capable of managing heat, light, pH, and nutrient concentration for optimal plant growth. Crafted custom sensors for nutrient concentration and pH using basic materials.",
      tags: [
        {
          lang: "Sensor based system",
          color: "#00a100",
        },
        {
          lang: "Prototyping",
          color: "#ff4b4b",
        },
        {
          lang: "Arduino",
          color: "#0961e6",
        },
      ],
      link: "pdfs/sensor.pdf",
      code: "",
      linkcolor: "white",
    },
    {
      title: "Archipelago City Maker",
      img_path: "archipellago.png",
      date: "Spring 2020",
      description:
        "This project developed an application to build island cities with houses, production sites, and transport nodes on interconnected islands. Users can create, save, and load city layouts, ensuring logical setups. The application evaluates cities based on distance to work, balance between living and working spaces, and population capacity.",
      tags: [
        {
          lang: "Application",
          color: "#00a100",
        },
        {
          lang: "C++",
          color: "#004782",
        },
      ],
      link: "",
      code: "https://github.com/yseoo/Archipelago",
      linkcolor: "white",
    },
    {
      title: "Mechanical Design of a Seeder",
      img_path: "semoir.png",
      date: "Spring 2020",
      description:
        "This project was developed for the first-year course 'Construction mécannique' at EPFL. We were tasked with designing a seeder from scratch, adhering to specific requirements.",
      tags: [
        {
          lang: "Mechanical Design",
          color: "#e60909",
        },
      ],
      link: "pdfs/semoir.pdf",
      code: "",
      linkcolor: "white",
    },
    {
      title: "Conveyor Belt Waste Type Detection",
      img_path: "waste_detection.jpg",
      date: "Spring 2024",
      description:
        "Develop a real-time object detection and segmentation model to optimize recycling facility operations, ensuring sufficient performance for practical implementation. Made in collaboration with the CVLAB at EPFL and the startup WasteFlow.",
      tags: [
        {
          lang: "Computer Vision",
          color: "#00a100",
        },
        {
          lang: "Object Detection",
          color: "#7f09e6",
        },
        {
          lang: "Deep Learning",
          color: "#e6a009",
        },
        {
          lang: "Python",
          color: "#0961e6",
        },
        {
          lang: "PyTorch",
          color: "#Ed3437",
        },
        {
          lang: "OpenVino",
          color: "#08a893",
        },
      ],
      link: "https://www.wasteflow.ai",
      code: "",
      linkcolor: "white",
    },
    {
      title: "The Stellar Chronicles of History",
      img_path: "dataviz.png",
      date: "Spring 2024",
      description:
        "Developed an interactive website enabling users to explore world history through creative visualizations. Utilized basic JavaScript libraries for the front-end development and employed Python for data cleaning and processing.",
      tags: [
        {
          lang: "Data Science",
          color: "#00a100",
        },
        {
          lang: "Data Visualization",
          color: "#303030",
        },
        {
          lang: "JavaScript",
          color: "#0961e6",
        },
        {
          lang: "Web Development",
          color: "#ff4b4b",
        },
      ],
      link:
        "https://com-480-data-visualization.github.io/project-2024-DataBeez/",
      code:
        "https://github.com/com-480-data-visualization/project-2024-DataBeez",
      linkcolor: "white",
    },
    {
      title: "A Tale of Acting Careers",
      img_path: "ada.webp",
      date: "Winter 2023",
      description:
        "We developed a data analysis project that included creating a data storytelling website to provide insights through meaningful analysis and visualizations of the IMDB movie and CMU movie and character datasets. The project involved data cleaning, analysis, and visualization.",
      tags: [
        {
          lang: "Data Science",
          color: "#00a100",
        },
        {
          lang: "Data Visualization",
          color: "#303030",
        },
        {
          lang: "Python",
          color: "#0961e6",
        },
        {
          lang: "Web Development",
          color: "#ff4b4b",
        },
      ],
      link: "https://yseoo.github.io/las-empanadas-story/",
      code: "https://github.com/epfl-ada/ada-2023-project-lasempanadas",
      linkcolor: "white",
    },
    {
      title: "MEMS Project",
      img_path: "mems.gif",
      date: "Winter 2021",
      description:
        "The project focused on developing a MEMS device capable of manipulating a micro-mirror within optical fiber paths. The device included a laterally moving actuator with locking capabilities at extended and retracted positions. The process encompassed design, simulation via COMSOL, fabrication in clean rooms, and evaluation to address performance discrepancies like stiction.",
      tags: [
        {
          lang: "Mechanical Design",
          color: "#e60909",
        },
        {
          lang: "Micro-tech",
          color: "#00a100",
        },
        {
          lang: "Microfabrication",
          color: "#0974e6",
        },
      ],
      link: "pdfs/mems.pdf",
      code: "",
      linkcolor: "white",
    },
    {
      title: "Temperature Controller in Assembly",
      img_path: "micro.png",
      date: "Spring 2021",
      description:
        "Our app, developed entirely in assembly for the second-year 'Microcontrôleurs' course at EPFL, allow the user to control room temperatures. It measures temperature, adjusts a vent via a servo motor based on user-set thresholds on an LCD interface, and alerts users with an alarm if the temperature exceeds these limits, facilitating manual adjustment.",
      tags: [
        {
          lang: "Microcontroller",
          color: "#c47206",
        },
        {
          lang: "Assembly",
          color: "#0974e6",
        },
        {
          lang: "Electronics",
          color: "#e60909",
        },
      ],
      link: "pdfs/micro.pdf",
      code: "",
      linkcolor: "white",
    },
  ],
};

const resumeleft = {
  left: [
    {
      title: ["Education"],
      data: [
        {
          title: "MSc in Robotics, minor in Data Science",
          subtitle:
            "École polytechnique Fédérale de Lausanne (EPFL), Lausanne, Switzerland",
          date: "September 2022 - March 2026",
          content: [
            "Technical Coursework and Projects in Machine Learning, Deep Learning, Computer Vision, Reinforcement learning, Mechanical Engineering, Multivariable Control, Automatic, Model Predictive Control, Evolutive and Genetic Algorithms, Intelligent Agent, DevOps.",
            "Minor in Data Science with courses in Applied Data Analysis, Computer Networks, Data Visualisation, Database, Large-scale data management and analysis, Data cleaning",
            "🔸 GPA: 5.52/6",
          ],
        },
        {
          title: "Academic Exchange",
          subtitle: "Royal Institute of Technology (KTH), Stockholm, Sweden",
          date: "August 2021 - June 2022",
          content: [
            "Signal/Stochastic Processing, Embedded and real-time systems, Automatic Control, MEMS, Sensor based systems, Machine Learning and Neuroscience.",
          ],
        },
        {
          title: "BSc in Microengineering",
          subtitle:
            "École polytechnique Fédérale de Lausanne (EPFL), Lausanne, Switzerland",
          date: "September 2019 - June 2022",
          content: [
            "Basic sciences (Physics, Linear Algebra, Calculus, Chemistry), Object Oriented Programming (C++), Experimental Statistics, Computer Science Theory, Analog Devices, Micro-Mechanical engineering, Basic of Electronics.",
            "🔸 GPA: 5/6",
          ],
        },
        {
          title: "Baccalaureate in Science",
          subtitle:
            "High School, Lycée Madame de Staël, Saint-Julien-en-Genevois, France",
          date: "September 2016 - July 2019",
          content: [
            "High School Diploma with a focus on Sciences (Mathematics, Physics, Chemistry, Biology).",
            "🔸 Grade: 18.28/20, Congratulations from the jury",
          ],
        },
      ],
    },
    {
      title: ["Extracurricular Activities"],
      data: [
        {
          title: "Webmaster, EPFL-SIC",
          subtitle: "EPFL Sustainable Innovation Challenge",
          date: "September 2024 - January 2025",
          content: [
            "Joined as one of the founding members shortly after the association's creation, taking on the role of initial webmaster.",
            "Designed, built and deployed the association's first website from scratch.",
            "Handed over website ownership and maintenance to another member after a few months to focus on a concurrent internship.",
          ],
        },
        {
          title: "Board Member, Webmaster ESN EPFL",
          subtitle: "Erasmus Student Network Association (ESN) of EPFL",
          date: "January 2024 - July 2024",
          content: [
            "Managing of the Erasmus Student Network (ESN) website and digital resources, ensuring efficient operation and user accessibility.",
            "Contribute to the strategic leadership of the association, participating actively in decision-making processes, organizational management and recruiting process.",
            "Collaboration with the communication team to ensure the quality and accuracy of event descriptions published on the website.",
          ],
        },
        {
          title: "Committee Member ESN EPFL",
          subtitle: "Erasmus Student Network Association (ESN) of EPFL",
          date: "September 2023 - January 2024",
          content: [
            "Organized events for Erasmus students, overseeing all aspects including budget management, ticket pricing, promotional activities, and staff recruitment.",
            "Actively engaged in the association's life, participating in weekly meetings",
          ],
        },
      ],
    },
  ],
};

const resumeright = {
  right: [
    {
      title: ["Professional Experience"],
      data: [
        {
          title: "CV Research Intern",
          subtitle:
            "Richemont Automation and Machine Vision Lab, Buttes, Switzerland",
          date: "September 2025 - March 2026",
          content: [
            "Conducting a state-of-the-art review of AI-based visual anomaly detection algorithms.",
            "Comparing selected algorithms on image datasets specific to the watchmaking domain.",
            "Studying the solution's potential to generalize to new pieces.",
            "Delivering the solution in line with the team's standards.",
          ],
        },
        {
          title: "AI Research Intern",
          subtitle: "Richemont AI Lab, Lausanne, Switzerland",
          date: "October 2024 - February 2025",
          content: [
            "Developing and implementing state-of-the-art computer vision models for object detection and segmentation.",
            "Dataset collection, annotation, and preprocessing for training and evaluation.",
            "Collaborating with cross-functional teams to design and implement AI solutions for luxury goods.",
          ],
        },
        {
          title: "Teaching assistant in Mathematics",
          subtitle: "Université de Lausanne (UNIL), Lausanne, Switzerland",
          date: "September 2022 - July 2024",
          content: [
            "Assist the teacher in explaining to student mathematical concept.",
            "Help student during exercises session.",
            "Help the teacher with examination surveillance.",
          ],
        },
        {
          title: "Laboratory assistant",
          subtitle: "Geneva Hospital (HUG), Geneva, Switzerland",
          date: "Summer 2022 and 2023",
          content: [
            "Reception of medical samples, applying the necessary treatments before analysis",
            "Distribution to the correct laboratories in the central laboratory building of the hospital",
            "Preparation of laboratory equipment orders, and deliveries to the right laboratories.",
          ],
        },
      ],
    },
  ],
};

//certificate cards
// const certifications = {
//   certifications: [
//     {
//       title: "Tableau Analyst",
//       subtitle: "Tableau",
//       logo_path: "tabana-01.png",
//       certificate_link:
//         "https://www.credly.com/badges/2d43f401-7be0-407d-9a77-7477dda8cade/linked_in_profile",
//       alt_name: "Tableau",
//       color_code: "#000000",
//     },
//     {
//       title: "Tableau Consumer",
//       subtitle: "Tableau",
//       logo_path: "tabcon-01.png",
//       certificate_link:
//         "https://www.credly.com/badges/e5befe7b-2eec-486f-b77e-bd2458c18b26/linked_in_profile",
//       alt_name: "Tableau",
//       color_code: "#000000",
//     },
//     {
//       title: "Problem solving",
//       subtitle: "HackerRank",
//       logo_path: "problem-01.png",
//       certificate_link: "https://www.hackerrank.com/rohankokkula",
//       alt_name: "HackerRank",
//       color_code: "#000000",
//     },
//     {
//       title: "Python",
//       subtitle: "HackerRank",
//       logo_path: "python-01.png",
//       certificate_link: "https://www.hackerrank.com/rohankokkula",
//       alt_name: "HackerRank",
//       color_code: "#000000",
//     },
//     {
//       title: "Certificate of Merit",
//       subtitle: "Summer Analytics | IIT Guwahati",
//       logo_path: "iitg-01.png",
//       certificate_link:
//         "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
//       alt_name: "IITG",
//       color_code: "#000000",
//     },
//     {
//       title: "Tableau Desktop Qualified Associate",
//       subtitle: "SimpliLearn",
//       logo_path: "simplilearn-01.png",
//       certificate_link:
//         "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
//       alt_name: "Simplilearn",
//       color_code: "#000000",
//     },
//     {
//       title: "Question Generation using Transformers",
//       subtitle: "Udemy",
//       logo_path: "udemy-01.png",
//       certificate_link:
//         "https://www.udemy.com/certificate/UC-b17c4c21-91e3-4f8b-b9c2-259468910985/",
//       alt_name: "Udemy",
//       color_code: "#000000",
//     },
//     {
//       title: "Machine Learning",
//       subtitle: "Stanford University",
//       logo_path: "coursera-01.png",
//       certificate_link:
//         "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
//       alt_name: "Stanford University",
//       color_code: "#000000",
//     },
//     {
//       title: "Data Visualization",
//       subtitle: "University of Michigan",
//       logo_path: "coursera-01.png",
//       certificate_link:
//         "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
//       alt_name: "University of Michigan",
//       color_code: "#000000",
//     },
//     {
//       title: "Data Scientist Career Track",
//       subtitle: "DataCamp",
//       logo_path: "datacamp-01.png",
//       certificate_link:
//         "https://www.datacamp.com/statement-of-accomplishment/track/29f2ddab3fbfd0a470713a19c729c0f9d89c88aa",
//       alt_name: "DataCamp",
//       color_code: "#000000",
//     },
//     {
//       title: "PowerBI Masters",
//       subtitle: "iNeuron.ai",
//       logo_path: "ineuron-01.png",
//       certificate_link:
//         "https://academy.ineuron.ai/certificates/downloads/PB009929.pdf",
//       alt_name: "HackerRank",
//       color_code: "#000000",
//     },
//     {
//       title: "Tableau Masters",
//       subtitle: "iNeuron.ai",
//       logo_path: "ineuron-01.png",
//       certificate_link:
//         "https://academy.ineuron.ai/certificates/downloads/TB000634.pdf",
//       alt_name: "HackerRank",
//       color_code: "#000000",
//     },
//   ],
// };

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "contact.jpg",
    description:
      "If you have any questions or would like to discuss potential opportunities, please don't hesitate to contact me. I'm always open to new connections and look forward to hearing from you!",
  },
  addressSection: {
    title: "",
    subtitle: "",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

//contact icons
const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/yseoo",
    iconifyClassname: "simple-icons:hackerrank",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "Gmail",
    link: "mailto:killian.hd@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  projectsHeader,
  contactPageData,
  projectcards,
  //certifications,
  resumeleft,
  resumeright,
};
