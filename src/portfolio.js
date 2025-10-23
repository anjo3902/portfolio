/* Change this file to get your personal Portfolio */
import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};
const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Anjo Jaison P",
  title: "AI/ML & Generative AI Enthusiast",
  subTitle: emoji(
    "Results-driven AI/ML practitioner with expertise in Machine Learning, Deep Learning, NLP, and Generative AI. Skilled in data pre-processing, model optimization, and end-to-end deployment of scalable ML pipelines. Experienced in building real-world applications leveraging Python, LangChain, Hugging Face, Streamlit, PyTorch, TensorFlow to deliver efficient LLM-powered solutions."
  ),
  resumeLink: "./src/containers/greeting/resume.pdf", // Local resume file; set empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/anjo3902",
  linkedin: "https://linkedin.com/in/anjo-jaison-p-b0373a249",
  gmail: "anjojaison3902@gmail.com",
  display: true // Only show these links
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Focused on AI/ML, NLP, and building production-ready ML applications",
  skills: [
    emoji("⚡ Deep learning (CNNs, RNNs, Transformers) with PyTorch & TensorFlow"),
    emoji("⚡ Fine-tuning & evaluating LLMs; prompt engineering"),
    emoji("⚡ RAG systems: embeddings + vector DBs (Chroma, FAISS) and LangChain"),
    emoji("⚡ Production ML: preprocessing, tracking, and inference optimization"),
    emoji("⚡ MLOps basics: monitoring and scalable serving"),
    emoji("⚡ Prototyping with Streamlit; analysis with pandas & scikit-learn")
  ],
  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    { skillName: "python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "numpy", fontAwesomeClassname: "fas fa-square-root-alt" },
    { skillName: "pandas", fontAwesomeClassname: "fas fa-table" },
    { skillName: "scikit-learn", fontAwesomeClassname: "fas fa-project-diagram" },
    { skillName: "xgboost", fontAwesomeClassname: "fas fa-bolt" },
    { skillName: "pytorch", fontAwesomeClassname: "fas fa-brain" },
    { skillName: "tensorflow", fontAwesomeClassname: "fas fa-robot" },
    { skillName: "transformers", fontAwesomeClassname: "fas fa-code" },
    { skillName: "huggingface", fontAwesomeClassname: "fas fa-robot" },
    { skillName: "langchain", fontAwesomeClassname: "fas fa-code-branch" },
  { skillName: "llms", fontAwesomeClassname: "fas fa-cogs" },
  { skillName: "html5", fontAwesomeClassname: "fab fa-html5" },
  { skillName: "css3", fontAwesomeClassname: "fab fa-css3-alt" },
  { skillName: "javascript", fontAwesomeClassname: "fab fa-js" },
  { skillName: "sql", fontAwesomeClassname: "fas fa-database" },
    { skillName: "faiss", fontAwesomeClassname: "fas fa-search" },
    { skillName: "chroma", fontAwesomeClassname: "fas fa-database" },
    { skillName: "streamlit", fontAwesomeClassname: "fas fa-window-maximize" },
    { skillName: "jupyter", fontAwesomeClassname: "fas fa-book" }
  ],
  display: true // Show skills section
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Digital University Kerala, Thiruvananthapuram",
      logo: require("./assets/images/logo_transparent_bg_caption.png"),
      subHeader: "M.Sc. in Computer Science with Data Analytics",
  duration: "AUG 2024 - JUNE 2026",
      desc: "Focused on advanced data analytics, machine learning, and practical ML pipeline deployment with hands-on projects in Python and Hugging Face.",
      descBullets: [
        "Specialization: Data Analytics, Machine Learning, Deep Learning and Generative AI",
        "Relevant coursework: Advanced Algorithms, Statistical Learning, Big Data Technologies"
      ]
      ,
      website: "https://duk.ac.in/"
    },
    {
      schoolName: "St. Thomas College, Calicut University, Thrissur",
      logo: require("./assets/images/stthomas-logo.png"),
      subHeader: "B.Sc. in Mathematics with Computer Science",
      duration: "JUNE 2021 - MAY 2024",
      desc: "Concentrated on pure and applied mathematics with a strong emphasis on statistics, probability, and mathematical modeling; supplemented with core computer science courses.",
      descBullets: [
        "Emphasis: Probability, Statistics, and Mathematical Modelling",
        "Coursework: Numerical Methods, Discrete Mathematics, Introductory Data Structures"
      ]
      ,
      website: "https://stthomas.ac.in/"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Data Analysis",
      progressPercentage: "90%"
    },
    {
      Stack: "Machine Learning",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Project Lead — Multimodal Offline RAG",
      company: "Personal Projects",
      companylogo: require("./assets/images/rag.jpg"),
      date: "2024 - Present",
      desc: "Offline multimodal RAG for local semantic search and LLM Q&A.",
      descBullets: [
        "Text/audio extraction and preprocessing.",
        "Embeddings indexed in Chroma for fast retrieval.",
        "Streamlit demo and reproducible docs."
      ],
      tech: ["Python", "PyMuPDF", "Whisper", "Hugging Face", "Chroma", "Streamlit"],
      footerLink: [
        { name: "View on GitHub", url: "https://github.com/anjo3902/multimodal_offline_rag" }
      ]
    },
    {
      role: "Lead Developer — Emotion Classifier",
      company: "Personal Projects",
      companylogo: require("./assets/images/emotion 2.jpg"),
      date: "2023 - Present",
      desc: "Text emotion classifier (joy/anger/sadness) using embeddings + XGBoost.",
      descBullets: [
        "Embedding pipeline and XGBoost model.",
        "Streamlit demo for live inference.",
        "Evaluation and docs on GitHub."
      ],
      tech: ["Python", "Hugging Face", "XGBoost", "Streamlit", "NLP"],
      footerLink: [
        { name: "View on GitHub", url: "https://github.com/anjo3902/Emotion_Classifier" }
      ]
    },
    {
      role: "Developer — Job Match Alert",
      company: "Personal Projects",
      companylogo: require("./assets/images/job match.jpg"),
      date: "2023 - Present",
      desc: "Job scraping and clustering pipeline with dashboard alerts.",
      descBullets: [
        "Maintained live jobs dataset.",
        "TF-IDF + KMeans for clustering.",
        "Streamlit dashboard for trends and alerts."
      ],
      tech: ["Python", "Web Scraping", "TF-IDF", "KMeans", "Streamlit"],
      footerLink: [
        { name: "View on GitHub", url: "https://github.com/anjo3902/job_match_alert" }
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Disabled: no open-source section
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Public projects from my GitHub — click to view the repository",
  projects: [
    {
      image: require("E:\\Portfolio_Anjo\\developerFolio\\src\\assets\\images\\multimodal offline rag.png"),
      projectName: "Multimodal Offline RAG System for Cross-Format Search",
  projectDesc: "Offline multimodal RAG system integrating PDFs, documents, images, and audio for semantic retrieval. Uses PyMuPDF/Whisper for extraction, Hugging Face embeddings stored in Chroma, and a Streamlit UI to provide LLM-powered answers.",
      footerLink: [
        { name: "View on GitHub", url: "https://github.com/anjo3902/multimodal_offline_rag" }
      ],
      featured: true
    },
    {
      image: require("./assets/images/emotion classifier.jpg"),
      projectName: "Emotion Classifier App",
  projectDesc: "Text-based emotion classifier using Hugging Face embeddings and XGBoost for accurate detection of joy, anger, and sadness. Deployed via Streamlit for real-time predictions and visualized model confidence and class distributions.",
      footerLink: [
        { name: "View on GitHub", url: "https://github.com/anjo3902/Emotion_Classifier" }
      ],
      featured: true
    },
    {
      image: require("E:\\Portfolio_Anjo\\developerFolio\\src\\assets\\images\\job match alert app.png"),
      projectName: "Job Match Alert App",
  projectDesc: "Job monitoring and classification system that scrapes listings and maintains a live dataset for analysis. Applies TF-IDF and KMeans for clustering and provides a Streamlit dashboard for trend monitoring and alerts.",
      footerLink: [
        { name: "View on GitHub", url: "https://github.com/anjo3902/job_match_alert" }
      ],
      featured: true
    },
    {
      image: require("E:\\Portfolio_Anjo\\developerFolio\\src\\assets\\images\\email spam detector.png"),
      projectName: "Spam Detector App",
      projectDesc:
        "NLP pipeline for email/spam detection combining classic features and deep-learning models. Includes preprocessing, model training, and a Streamlit demo for live inference and evaluation.",
      footerLink: [
        { name: "View on GitHub", url: "https://github.com/anjo3902/spam-detector" }
      ]
    },
    {
      image: require("./assets/images/AirPassengers.jpg"),
      projectName: "LSTM Based Forecasting For AirPassengers",
  projectDesc: "LSTM-based time-series forecasting on the AirPassengers dataset demonstrating sequence modelling and forecasting. Covers data preprocessing, model training, and evaluation for robust passenger predictions.",
      footerLink: [
        { name: "View on GitHub", url: "https://github.com/anjo3902/AirPassengers-LSTM-Forecast" }
      ]
    },
    {
      image: require("./assets/images/BMI-Prediction-Human-Photograph.jpg"),
      projectName: "BMI Prediction App Through Human Photographs",
      projectDesc:
        "CNN-based regression model to estimate BMI from human photographs, including preprocessing and augmentation. Focuses on training, evaluation, and considerations around privacy and bias mitigation.",
      footerLink: [
        { name: "View on GitHub", url: "https://github.com/anjo3902/BMI-Prediction-Human-Photograph" }
      ]
    }
  ],
  display: true // Show imported projects
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Cloud Data Analytics Certificate",
      subtitle: "Google · 2024",
      image: require("./assets/images/google cert1.jpeg"),
      imageAlt: "Google Cloud Data Analytics Certificate",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.linkedin.com/posts/anjo-jaison-p-b0373a249_i-am-excited-to-share-that-i-have-successfully-activity-7349315881924993025-e3wn/"
        }
      ]
    },
    {
      title: "Introduction to Git and GitHub",
      subtitle: "Google · 2024",
      image: require("./assets/images/git cert.jpeg"),
      imageAlt: "Introduction to Git and GitHub",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.coursera.org/account/accomplishments/verify/V6YFGWOFZO7Y"
        }
      ]
    },
    {
      title: "Google Cloud Career Launchpad Computing Foundations track",
      subtitle: "Google · 2025",
      image: require("./assets/images/google cert 2.png"),
      imageAlt: "Google Cloud Career Launchpad Computing Foundations Certificate",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.linkedin.com/posts/anjo-jaison-p-b0373a249_googlecloud-cloudcomputing-datascience-activity-7386828936963379200-P7Ll/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Disabled: no blogs to show
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Disabled: no talks to show
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "8891123483",
  email_address: "anjojaison3902@gmail.com"
  ,
  // Configure an in-site form endpoint. By default it's empty. Recommended: use Formspree or your own server endpoint.
  // Example Formspree: https://formspree.io/f/{form_id}
  contactForm: {
    endpoint: "/api/contact" // set to your POST endpoint to enable in-site submissions
  }
};

// Twitter Section

const twitterDetails = {
  userName: "",
  display: false // disabled per user request
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
