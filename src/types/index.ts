export type Language = "en" | "ar";

export type Theme = "light" | "dark";

export interface Project {
  id: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  technologies: string[];
  category: string;
  categoryAr: string;
  featured?: boolean;
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface ExperienceEntry {
  position: string;
  positionAr: string;
  company: string;
  companyAr: string;
  date: string;
  dateAr: string;
  location: string;
  locationAr: string;
  description: string;
  descriptionAr: string;
  technologies: string[];
}

export interface EducationEntry {
  degree: string;
  degreeAr: string;
  field: string;
  fieldAr: string;
  institution: string;
  institutionAr: string;
  dates: string;
  datesAr: string;
  status: "completed" | "ongoing";
  statusAr: string;
  score?: number;
  universityLogo: string;
}

export interface SkillCategory {
  title: string;
  titleAr: string;
  skills: string[];
}

export interface SocialLink {
  icon: string;
  url: string;
  label: string;
  labelAr: string;
}

export interface SiteConfig {
  name: string;
  nameAr: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  email: string;
  github: string;
  linkedin: string;
  profileImage: string;
  cvPath: string;
  canonicalUrl: string;
}

export interface Translations {
  nav: {
    home: string;
    experience: string;
    education: string;
    skills: string;
    projects: string;
    contact: string;
  };
  hero: {
    greeting: string;
    title: string;
    subtitle: string;
    description: string;
    viewProjects: string;
    downloadCV: string;
    contactMe: string;
  };
  experience: {
    sectionTitle: string;
    description: string;
    empty: string;
  };
  education: {
    sectionTitle: string;
    ongoing: string;
    completed: string;
  };
  skills: {
    sectionTitle: string;
    description: string;
  };
  projects: {
    sectionTitle: string;
    description: string;
    featured: string;
    viewProject: string;
    viewCode: string;
    viewLive: string;
    all: string;
    web: string;
    mobile: string;
  };
  contact: {
    sectionTitle: string;
    description: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    subjectLabel: string;
    subjectPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    sendButton: string;
    successMessage: string;
    errorMessage: string;
  };
  footer: {
    description: string;
    copyright: string;
    builtWith: string;
  };
  common: {
    languageLabel: string;
    themeLabel: string;
    switchToDark: string;
    switchToLight: string;
    switchToEnglish: string;
    switchToArabic: string;
  };
}
