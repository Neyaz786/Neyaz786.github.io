import nitLogo from '../images/Screenshot 2025-11-09 145645.png';
import patnaMuslimLogo from '../images/patna_muslim.jpeg';
import holyCrossLogo from '../images/holy_cross.png';

export const Bio = {
  name: "Neyaz Ahmed",
  roles: [
    "4th Year Undergraduate",
    "software developer",
  ],
  description:
    "I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.",
  github: "https://github.com/Neyaz786",
  resume:
    "https://drive.google.com/file/d/1od4El6vxo8bxkzDrgyf_BRaaXBpN_Qq5/view?usp=drivesdk",
  linkedin: "https://www.linkedin.com/in/neyaz-ahmed-81106927b",
  email: "neyazahmed2026@gmail.com",
  twitter: " ",
  insta: " ",
  facebook: " ",
};

export const skills = [
  {
    title: "Languages",
    skills: [
      {
        name: "C",
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg",
      },
      {
        name: "Python",
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      },
      {
        name: "SQL",
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "JavaScript",
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
      },
    ],
  },
  {
    title: "Libraries",
    skills: [
      {
        name: "NumPy",
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/numpy/numpy-original.svg",
      },
      {
        name: "Pandas",
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/pandas/pandas-original.svg",
      },
      {
        name: "Matplotlib",
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/matplotlib/matplotlib-original.svg",
      },
      {
        name: "Scikit-learn",
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/scikitlearn/scikitlearn-original.svg",
      },
      {
        name: "TensorFlow",
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tensorflow/tensorflow-original.svg",
      },
      {
        name: "Seaborn",
        image: "https://seaborn.pydata.org/_images/logo-mark-lightbg.svg",
      },
      {
        name: "Streamlit",
        image: "https://streamlit.io/images/brand/streamlit-mark-color.png",
      },
      {
        name: "Power BI",
        image: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg",
      },
    ],
  },
  {
    title: "Database",
    skills: [
      {
        name: "MySQL",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      },
      {
        name: "PostgreSQL",
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg",
      },
      {
        name: "MongoDB",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
      },
      {
        name: "Neon SQL",
        image: "https://neon.tech/favicon.ico",
      },
    ],
  },
  {
    title: "Web Development",
    skills: [
      {
        name: "MERN Stack",
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
      },
      {
        name: "REST APIs",
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Bootstrap",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original-wordmark.svg",
      },
      {
        name: "Tailwind CSS",
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original-wordmark.svg",
      },
    ],
  },
  {
    title: "Tools/Cloud",
    skills: [
      {
        name: "Git",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
      },
      {
        name: "GitHub",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg",
      },
      {
        name: "Jupyter Notebook",
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/jupyter/jupyter-original-wordmark.svg",
      },
      {
        name: "AWS",
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      },
    ],
  },
];

export const experiences = [];

export const education = [
  {
    id: 0,
    img: nitLogo,
    school: "National Institute of Technology Jamshedpur",
    date: "2022 - Present",
    grade: "7.29 CGPA",
    desc: "I am currently pursuing a Bachelor's degree in Mechanical Engineering at National Institute of Technology Jamshedpur. I am a 4th year undergraduate student with a CGPA of 7.29.",
    degree: "B.Tech, Mechanical Engineering",
  },
  {
    id: 1,
    img: patnaMuslimLogo,
    school: "Patna Muslim High School +2, Patna",
    date: "2021",
    grade: "87%",
    desc: "I completed my class 12 education at Patna Muslim High School +2, Patna.",
    degree: "BSEB(XII)",
  },
  {
    id: 2,
    img: holyCrossLogo,
    school: "Holy Cross School, Pachamba",
    date: "2019",
    grade: "90%",
    desc: "I completed my class 10 education at Holy Cross School, Pachamba.",
    degree: "CBSE(X)",
  },
];

export const projects = [
  {
    id: 0,
    title: "NEXTGEN DELIVERY PREDICTION",
    date: "Self Project",
    description:
      "Performed end-to-end exploratory data analysis (EDA) using Python and Jupyter, uncovering delivery delay patterns through correlation heatmaps, carrier performance, and weather impact visualizations. Created derived features and preprocessing pipelines for numeric and categorical variables. Developed and deployed Random Forest classification and regression models to predict delivery delays and delay duration with high accuracy and interpretability. Optimized model performance using RandomizedSearchCV with 5-fold cross-validation.",
    image: "",
    tags: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Matplotlib",
      "Seaborn",
      "Jupyter",
    ],
    category: "machine learning",
    github: "https://github.com/Neyaz786/NextGen-Delivery-Prediction",
    webapp: "https://neyaz786-nextgen-delivery-prediction-app-qdpb0g.streamlit.app/",
  },
  {
    id: 1,
    title: "VOLTEDGE RETAIL DATA ANALYTICS (PYTHON + PANDAS)",
    date: "Hackathon Project",
    description:
      "Analyzed 2 years of retail data using Python (Pandas, Matplotlib) to generate business insights and performance metrics. Built quarterly profitability charts, brand/category comparisons, and store rankings using SQL-style transformations and plots. Identified top cities, weak stores, and suggested closures based on KPIs; performed loyalty and demographic analysis. Created visual dashboards to support decision-making using Plotly and Matplotlib.",
    image: "",
    tags: [
      "Python",
      "Pandas",
      "Matplotlib",
      "Plotly",
      "SQL",
      "Data Analysis",
    ],
    category: "machine learning",
    github: "https://github.com/Neyaz786/VoltEdge-data-analysis",
    webapp: "",
  },
  {
    id: 2,
    title: "ONLINE PAYMENT FRAUD DETECTION",
    date: "Self Project",
    description:
      "Conducted data exploration and preprocessing on 10,000+ transaction records from Kaggle, performing type distribution analysis, feature encoding, and correlation assessment to identify potential fraud indicators. Implemented a Decision Tree Classifier using Scikit-learn, achieving 99.97 percent accuracy on the test set and evaluated performance through confusion matrix and ROC-AUC analysis. Built a predictive system capable of detecting fraudulent transactions in real time based on transaction type, amount, and account balance patterns.",
    image: "",
    tags: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "Matplotlib",
      "Seaborn",
      "Machine Learning",
    ],
    category: "machine learning",
    github: "https://github.com/Neyaz786/Online-Payment-Fraud-Detection",
    webapp: "",
  },
  {
    id: 3,
    title: "ETL PIPELINE OLTP TO OLAP",
    date: "Self Project",
    description:
      "Built an automated ETL pipeline to extract data from the primary AWS RDS (OLTP) database, apply transformations, and load it into a newly provisioned AWS RDS instance for analytics. Transformed raw data into analysis-ready format, enabling the DS team to perform faster and more accurate predictive modeling. Utilized Python and Pandas for data transformation and optimization, ensuring high data quality and reliability for analytics.",
    image: "",
    tags: [
      "Python",
      "Pandas",
      "AWS RDS",
      "ETL",
      "SQL",
      "Data Engineering",
    ],
    category: "machine learning",
    github: "https://github.com/Neyaz786/Cloud-Based-ETL-for-Dream11-Fantasy-Sports-Predictions",
    webapp: "",
  },
  {
    id: 4,
    title: "Chat App",
    date: "Web App Project",
    description:
      "A real-time chat application built with React, Node.js, Express, and Socket.io. Features include user authentication, real-time messaging, group chats, and message history. The app provides a seamless communication experience with instant message delivery and a modern, responsive UI.",
    image: "",
    tags: [
      "React",
      "Node.js",
      "Express",
      "Socket.io",
      "MongoDB",
      "WebSocket",
    ],
    category: "web app",
    github: "https://github.com/Neyaz786/CHAT-APP",
    webapp: "https://chat-app-4es7.onrender.com/",
  },
  {
    id: 5,
    title: "React Native Mobile App",
    date: "Android App Project",
    description:
      "A cross-platform mobile application developed using React Native. The app features a modern UI, smooth navigation, and native performance. Built with React Native components and integrated with REST APIs for data fetching and state management.",
    image: "",
    tags: [
      "React Native",
      "JavaScript",
      "Android",
      "REST APIs",
      "Mobile Development",
    ],
    category: "android app",
    github: "https://github.com/Neyaz786/wallet-api",
    webapp: "",
  },
];
