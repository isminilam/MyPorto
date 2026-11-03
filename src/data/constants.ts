import {
  BarChart3,
  Brain,
  Code2,
  Database,
  GitBranch,
  Globe,
  Layers,
  LineChart,
  Server,
  Smartphone,
  Terminal,
  Cpu,
  type LucideIcon,
} from 'lucide-react';


/* ============================
   Type Definitions
   ============================ */
export interface PersonalInfo {
  name: string;
  firstName: string;
  title: string;
  subtitle: string;
  email: string;
  phone: string;
  location: string;
  university: string;
  degree: string;
  bio: string;
  resumeUrl: string;
  social: {
    github: string;
    linkedin: string;
    kaggle: string;
  };
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SkillItem {
  name: string;
  level: number;
}

export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  color: string;
  skills: SkillItem[];
}

export interface TechStackItem {
  name: string;
  icon: LucideIcon;
}

export interface ProjectItem {
  title: string;
  description: string;
  tags: string[];
  category: string;
  github?: string | null;
  demo?: string | null;
  image: string | null;
  downloadUrl?: string | null;
  downloadLabel?: string | null;
}

export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
  type: 'work' | 'research' | 'freelance';
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  gpa: string;
  highlights: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  credentialUrl: string;
  icon?: LucideIcon;
  color?: string;
  image?: string | null;
}


export interface StatItem {
  label: string;
  value: string;
}

/* ============================
   Personal Information
   ============================ */
export const personalInfo: PersonalInfo = {
  name: 'Ismi Nilam Anggraini',
  firstName: 'Ismi',
  title: 'Data Science & Machine Learning Engineer',
  subtitle: 'Data Science & Machine Learning Engineer',
  email: 'isminilamng@gmail.com',
  phone: '+6281223748126',
  location: 'Bekasi, Indonesia',
  university: 'Universitas Gunadarma',
  degree: 'S1 Informatika',
  bio: `Bachelor of Informatics graduate from Gunadarma University with experienced in Data Analytics, Data Science, Machine Learning, and Data Engineering. Through academic and collaborative projects, I have developed experience in analyzing data, building machine learning models, and contributing to the development of AI-powered applications.`,
  resumeUrl: '/Ismi_Nilam_Anggraini_CV.pdf',
  social: {
    github: 'https://github.com/isminilam',
    linkedin: 'https://www.linkedin.com/in/isminilam',
    kaggle: 'https://www.kaggle.com/isminilamng',
  },
};

/* ============================
   Navigation Links
   ============================ */
export const navLinks: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
];

/* ============================
   Skills Data
   ============================ */
export const skillCategories: SkillCategory[] = [
  {
    title: 'Data Analytics',
    icon: BarChart3,
    color: 'from-blue-500 to-cyan-400',
    skills: [
      { name: 'Python (Pandas, NumPy)', level: 90 },
      { name: 'SQL & Database Design', level: 85 },
      { name: 'Data Visualization (Matplotlib, Seaborn)', level: 88 },
      { name: 'Tableau / Power BI', level: 80 },
      { name: 'Statistical Analysis', level: 82 },
    ],
  },
  {
    title: 'Machine Learning',
    icon: Brain,
    color: 'from-violet-500 to-purple-400',
    skills: [
      { name: 'Scikit-Learn', level: 85 },
      { name: 'TensorFlow / Keras', level: 78 },
      { name: 'NLP (Natural Language Processing)', level: 75 },
      { name: 'Computer Vision', level: 72 },
      { name: 'Model Deployment (Flask/FastAPI)', level: 80 },
    ],
  },
  {
    title: 'Software Development',
    icon: Code2,
    color: 'from-emerald-500 to-teal-400',
    skills: [
      { name: 'JavaScript / React.js', level: 85 },
      { name: 'Python (Django / FastAPI)', level: 82 },
      { name: 'RESTful API Design', level: 85 },
      { name: 'Git & Version Control', level: 88 },
      { name: 'Docker & CI/CD', level: 75 },
    ],
  },
  {
    title: 'Tools & Technologies',
    icon: Terminal,
    color: 'from-amber-500 to-orange-400',
    skills: [
      { name: 'Jupyter Notebook', level: 92 },
      { name: 'VS Code', level: 90 },
      { name: 'Linux / Bash', level: 80 },
      { name: 'Google Cloud Platform', level: 70 },
      { name: 'Figma (UI Design)', level: 72 },
    ],
  },
];

/* ============================
   Tech Stack Icons
   ============================ */
export const techStack: TechStackItem[] = [
  { name: 'Python', icon: Code2 },
  { name: 'React', icon: Globe },
  { name: 'Database', icon: Database },
  { name: 'ML/AI', icon: Cpu },
  { name: 'API', icon: Server },
  { name: 'Mobile', icon: Smartphone },
  { name: 'Analytics', icon: LineChart },
  { name: 'DevOps', icon: Layers },
  { name: 'Git', icon: GitBranch },
];

/* ============================
   Projects Data
   ============================ */
export const projects: ProjectItem[] = [
  {
    title: 'MERAPAT',
    description:
      'A web-based application used by all organizational units to manage meeting activities, including room reservations based on predefined schedules, digital signatures, attendance management with Excel/PDF report exports, and centralized management of executive agendas.',
    tags: ['React', 'Express.js', 'PostgreSQL', 'Docker', 'Nginx', 'Linux'],
    category: 'Web Development',
    github: '',
    demo: '',
    image: '/merapat_web.png',
  },
  {
    title: 'AI Image Detection',
    description:
      'An AI image detection website built with Streamlit that classifies uploaded images as Fake or Real using a ConvNeXt-Tiny deep learning model trained on a dataset of 62,000 images, allowing users to upload an image and receive a prediction result along with its confidence score.',
    tags: ['Python'],
    category: 'Deep Learning',
    github: '#',
    demo: 'https://ai-real-image-detection.streamlit.app/',
    image: '/ai_real_image_web.png',
  },
  {
    title: 'MaintEase',
    description:
      'The MaintEase platform is an AI-powered predictive maintenance solution that uses machine learning models to predict potential machine failures and help users take preventive action before breakdowns occur. It also integrates an AI chatbot to provide quick, accessible information and support users in understanding machine conditions and maintenance insights.',
    tags: ['Python', 'React', 'Express.js', 'Node.js', 'Tailwind CSS', 'Supabase', 'OpenAI API'],
    category: 'Data Science & Web Development',
    github: null,
    demo: null,
    image: '/maintease.png',
  },
  {
    title: 'DiagnoSmart',
    description:
      'Diagnosmart is a web-based disease detection system that analyzes user-provided symptoms to identify potential diseases across general illness, orthopedics, dermatology, and digestive disorders. The system integrates a CNN model developed with TensorFlow to process symptom data and generate disease classification results.',
    tags: ['JavaScript', 'Express.js', 'Python', 'FastAPI', 'TensorFlow'],
    category: 'Data Science & Web Development',
    github: '#',
    demo: 'https://diagnosmart-a5d59.web.app/#/',
    image: '/diagnosmart.png',
  },
  {
    title: 'Sales Supermarket Dashboard',
    description:
      'Analyzed the Supermarket Sales dataset using Power BI to explore sales, revenue, profit, product performance, and customer trends through interactive visualizations, KPIs, and slicers to identify key business insights.',
    tags: ['Power BI'],
    category: 'Data Analytics',
    github: null,
    demo: null,
    downloadUrl: '/Sales_Supermarket_Dashboard_2019.pbix',
    image: '/sales_dashboard.png',
  },
  {
    title: 'Superstore Sales Analysis',
    description:
      'Analyzed the Superstore Sales dataset using Excel by creating PivotTables to explore sales and profitability, identifying key business insights and performance trends, and developing an interactive dashboard to visualize the findings.',
    tags: ['Microsoft Excel'],
    category: 'Data Analytics',
    github: null,
    demo: null,
    downloadUrl: '/Superstore_Sales_Analysis.xlsx',
    image: '/SuperstoreSalesAnalysis.jpeg',
  },
];

/* ============================
   Experience Data
   ============================ */
export const experiences: ExperienceItem[] = [
  {
    title: 'Web Development Intern',
    company: 'Badan Nasional Pencarian dan Prtolongan (BASARNAS)',
    period: 'Jan 2026 – March 2026',
    description: [
      'Contributed to the development of an internal web-based system for meeting scheduling and coordination to support the organizational units operational activities.',
      'Designed and implemented user interfaces and front-end features using React.js based on user requirements, focusing on usability, consistency, and user experience.',
      'Conducted functional testing and quality checks to identify and resolve interface and feature issues, ensuring the system functioned according to the requirements.',
    ],
    type: 'work',
  },
  {
    title: 'React & Back-End with AI Cohort',
    company: 'Asah Ied by Dicoding',
    period: 'Aug 2025 – Jan 2026',
    description: [
      'Collaborated with Machine Learning and Back-End teams to develop an AI-powered predictive maintenance copilot platform called MaintEase, integrating the front-end with system functionalities.',
      'Designed and developed responsive, user-friendly interfaces using React.js, including contributing to the implementation and integration of the AI chatbot feature.',
      'Contributed to feature refinement and successfully delivered the Minimum Viable Product (MVP) within the project timeline, achieving a final project score of 90/100.',
    ],
    type: 'research',
  },
  {
    title: 'Machine Learning Engineer Cohort',
    company: 'Coding Camp Powered by DBS Foundation',
    period: 'Feb 2025 – July 2025',
    description: [
      'Developed a disease diagnosis website called Diagnosmart for early detection based on user-inputted symptoms, covering four medical categories: general illness, orthopedics, dermatology, and digestive disorders.',
      'Implemented an CNN model using TensorFlow to classify disease types based on collected symptom data.',
      'Achieved a final project score of 92/100, evaluated based on system functionality, model accuracy, and user interface design.'
    ],
    type: 'freelance',
  },
];

/* ============================
   Education Data
   ============================ */
export const education: EducationItem[] = [
  {
    degree: 'S1 Informatika (Bachelor of Informatics)',
    institution: 'Universitas XYZ',
    period: '2023 – 2027 (Expected)',
    gpa: '3.85 / 4.00',
    highlights: [
      "Dean's List — 4 consecutive semesters",
      'Focus: Data Science, Artificial Intelligence, Software Engineering',
      'Thesis: "Hybrid Deep Learning Approach for Indonesian Text Sentiment Analysis"',
      'Active member of ACM Student Chapter & Google Developer Student Club',
    ],
  },
];

/* ============================
   Certifications Data
   ============================ */
export const certifications: CertificationItem[] = [
  {
    title: 'Associate Data Engineer',
    issuer: 'Badan Nasional Sertifikasi Profesi (BNSP)',
    date: 'Jul 2026',
    credentialUrl: '/Sertifikat_BNSP_IDM.pdf',
    image: '/cert_bnsp_idm.webp',
  },
  {
    title: 'Asah led by Dicoding 2025',
    issuer: 'Dicoding',
    date: 'Jan 2026',
    credentialUrl: '/[Asah 2025] Sertifikat - Ismi Nilam Anggraini.pdf',
    image: '/cert_asah_2025.webp',
  },
  {
    title: 'Coding Camp Powered by DBS Foundation 2025',
    issuer: 'Dicoding X DBS Foundation',
    date: 'Nov 2025',
    credentialUrl: '/[Coding Camp 2025] Certificate - Ismi Nilam Anggraini.pdf',
    image: '/cert_codingcamp.webp',
  },
  {
    title: 'Associate Data Scientist',
    issuer: 'Badan Nasional Sertifikasi Profesi (BNSP)',
    date: 'Oct 2025',
    credentialUrl: '/Sertifikat_BNSP.pdf',
    image: '/cert_bnsp.webp',
  },
];

/* ============================
   Stats Data
   ============================ */
export const stats: StatItem[] = [
  { label: 'Projects Completed', value: '15+' },
  { label: 'Certifications', value: '4' },
  { label: 'GitHub Contributions', value: '500+' },
  { label: 'GPA', value: '3.85' },
];
