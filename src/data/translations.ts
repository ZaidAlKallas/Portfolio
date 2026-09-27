import { Translations } from "@/types";

export const translations: Record<"en" | "ar", Translations> = {
  en: {
    nav: {
      home: "Home",
      experience: "Experience",
      education: "Education",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      greeting: "Hello, I'm",
      title: ".NET Backend Developer",
      subtitle: "Software Engineer & .NET Backend Developer",
      description:
        "Building secure, scalable Web APIs and backend systems using C# and modern .NET technologies. Focused on backend architecture, API design, data access, and building real-world products.",
      viewProjects: "View Projects",
      downloadCV: "Download CV",
      contactMe: "Contact Me",
      processTitle: "Development Process",
    },
    experience: {
      sectionTitle: "Experience",
      description:
        "My professional journey and the technologies I've worked with.",
      empty:
        "I'm actively building experience. Check out my projects to see what I've been working on.",
    },
    education: {
      sectionTitle: "Education",
      ongoing: "Ongoing",
      completed: "Completed",
    },
    skills: {
      sectionTitle: "Skills",
      description:
        "Technologies and tools I work with to build modern applications.",
    },
    projects: {
      sectionTitle: "Projects",
      description:
        "A selection of projects I've built to solve real problems.",
      featured: "Featured Project",
      viewProject: "View Project",
      viewCode: "View Code",
      viewLive: "View Live",
      all: "All",
      web: "Web",
      mobile: "Mobile",
    },
    contact: {
      sectionTitle: "Get in Touch",
      description:
        "Have a project in mind or want to discuss an opportunity? I'd love to hear from you.",
      nameLabel: "Name",
      namePlaceholder: "Your name",
      emailLabel: "Email",
      emailPlaceholder: "your@email.com",
      subjectLabel: "Subject",
      subjectPlaceholder: "What's this about?",
      messageLabel: "Message",
      messagePlaceholder: "Your message...",
      sendButton: "Send Message",
      successMessage: "Message sent successfully!",
      errorMessage: "Something went wrong. Please try again.",
    },
    footer: {
      description: "Building reliable software with modern .NET technologies.",
      copyright: "All rights reserved.",
      builtWith: "Built with Next.js & Tailwind CSS",
    },
    common: {
      languageLabel: "Language",
      themeLabel: "Theme",
      switchToDark: "Switch to dark mode",
      switchToLight: "Switch to light mode",
      switchToEnglish: "Switch to English",
      switchToArabic: "Switch to Arabic",
    },
  },
  ar: {
    nav: {
      home: "الرئيسية",
      experience: "الخبرة",
      education: "التعليم",
      skills: "المهارات",
      projects: "المشاريع",
      contact: "التواصل",
    },
    hero: {
      greeting: "مرحباً، أنا",
      title: "مطور Backend باستخدام .NET",
      subtitle: "مهندس برمجيات ومطور Backend .NET",
      description:
        "أبني واجهات برمجية وأنظمة Backend آمنة وقابلة للتوسع باستخدام C# وتقنيات .NET الحديثة. أركز على هندسة الأنظمة، وتصميم واجهات البرمجة، والوصول إلى البيانات، وبناء منتجات تعالج احتياجات حقيقية.",
      viewProjects: "عرض المشاريع",
      downloadCV: "تحميل السيرة الذاتية",
      contactMe: "تواصل معي",
      processTitle: "عملية التطوير",
    },
    experience: {
      sectionTitle: "الخبرة",
      description:
        "رحلتي المهنية والتقنيات التي عملت معها.",
      empty:
        "أنا أبني خبرتي بنشاط. تحقق من مشاريعي لترى ما كنت أعمل عليه.",
    },
    education: {
      sectionTitle: "التعليم",
      ongoing: "مستمر",
      completed: "مكتمل",
    },
    skills: {
      sectionTitle: "المهارات",
      description:
        "التقنيات والأدوات التي أعمل بها لبناء تطبيقات حديثة.",
    },
    projects: {
      sectionTitle: "المشاريع",
      description:
        "مجموعة من المشاريع التي بنيت لحل مشاكل حقيقية.",
      featured: "مشروع مميز",
      viewProject: "عرض المشروع",
      viewCode: "عرض الكود",
      viewLive: "عرض مباشر",
      all: "الكل",
      web: "ويب",
      mobile: "محمول",
    },
    contact: {
      sectionTitle: "تواصل معي",
      description:
        "هل لديك مشروع في ذهنك أو تريد مناقشة فرصة؟ أحب أن أسمع منك.",
      nameLabel: "الاسم",
      namePlaceholder: "اسمك",
      emailLabel: "البريد الإلكتروني",
      emailPlaceholder: "بريدك@الإلكتروني.com",
      subjectLabel: "الموضوع",
      subjectPlaceholder: "بخصوص ماذا؟",
      messageLabel: "الرسالة",
      messagePlaceholder: "رسالتك...",
      sendButton: "إرسال الرسالة",
      successMessage: "تم إرسال الرسالة بنجاح!",
      errorMessage: "حدث خطأ. يرجى المحاولة مرة أخرى.",
    },
    footer: {
      description: "بناء برمجيات موثوقة بتقنيات .NET الحديثة.",
      copyright: "جميع الحقوق محفوظة.",
      builtWith: "بُني باستخدام Next.js و Tailwind CSS",
    },
    common: {
      languageLabel: "اللغة",
      themeLabel: "المظهر",
      switchToDark: "التبديل إلى الوضع الداكن",
      switchToLight: "التبديل إلى الوضع الفاتح",
      switchToEnglish: "التبديل إلى الإنجليزية",
      switchToArabic: "التبديل إلى العربية",
    },
  },
};
