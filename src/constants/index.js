import {
  mobile,
  app_interne,
  espace_pro,
  api_platform,
  backend,
  backpower,
  creator,
  web,
  php,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  github2,
  prestashop,
  symfony,
  meta,
  powade,
  batteriesprod,
  sql,
  carrent,
  jobit,
  tripguide,
  velobatterie,
  vscode,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "À propos",
  },
  {
    id: "work",
    title: "Carrière",
  },
  {
    id: "project",
    title: "Project",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Développeur FullStack",
    icon: web,
  },
  {
    title: "Backend Symfony",
    icon: backend,
  },
  {
    title: "Frontend React JS",
    icon: mobile,
  },
  {
    title: "Gestion de Projets",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "Symfony",
    icon: symfony,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "Api Platform",
    icon: api_platform,
  },
  {
    name: "prestashop",
    icon: prestashop,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "github",
    icon: github2,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "vscode",
    icon: vscode,
  },
];

const experiences = [
  {
    title: "Développeur junior",
    company_name: "Batteries Prod",
    dipslayIcon: "",
    icon: batteriesprod,
    iconBg: "#383E56",
    date: "Juin 2020 - Juil 2021",
    points: [
      "Développement de modules Prestashop 1.6 & 1.7",
      "Reporitngs des donnés en SQL & PHP",
    ],
  },
  {
    title: "Développeur Fullstack - Symfony",
    company_name: "Batteries Prod",
    dipslayIcon: "none",
    icon: "tesla",
    iconBg: "",
    date: "Juil 2021 - Nov 2022",
    points: [
      "Développement d'une application interne (ERP)",
      "Développement d'une application Gestion de stock",
      "Conception d'applicatifs avec le service QSE pour la norme ISO-9001.",
      "Développement et intégration de site e-commerce",
    ],
  },
  {
    title: "Développeur & Manageur",
    company_name: "Batteries Prod",
    dipslayIcon: "none",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Nov 2022 - Présent",
    points: [
      "Responsable de la gestion de projets",
      "Responsable de l'équipe de développement",
      "Développement d'une application tableau de bord",
      "Maintenance des applications et outils informatique.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Sylvain proved me wrong.",
    name: "Mikael Zezza",
    designation: "CEO",
    company: "Batteries Prod",
    // image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Sylvain does.",
    name: "Gabin Vengeon",
    designation: "Head of sales",
    company: "Loewi",
    // image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Sylvain optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Éva Goncalvez",
    designation: "Web design & Marketing",
    company: "Batteries Prod",
    // image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Gestion de stock",
    description:
      "Une application gestion de stock pour gérer toute la partie logistique et commandes fournisseurs.",
    tags: [
      {
        name: "symfony",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "api-platform",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Tableau de bord",
    description:
      "Une application tableau de bord pour afficher les donnés et statistiques sur l'activité de l'entreprise.",
    tags: [
      {
        name: "symfony",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "api-platform",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Application interne (ERP)",
    description:
      "Un ERP contenant tous les outils necessaires au fonctionnement de l'activité : administration, communication, logistique, production, QSE, RH et SAV",
    tags: [
      {
        name: "symfony",
        color: "blue-text-gradient",
      },
      {
        name: "symfony-ux",
        color: "violet-text-gradient",
      },
      {
        name: "api-platform",
        color: "pink-text-gradient",
      },
    ],
    image: app_interne,
    source_code_link: "https://github.com/",
  },
  {
    name: "Espace client pro",
    description:
      "Un espace dédié aux clients professionnels pour faciliter leur expérience BTB.",
    tags: [
      {
        name: "symfony",
        color: "blue-text-gradient",
      },
      {
        name: "prestashop",
        color: "orange-text-gradient",
      },
    ],
    image: espace_pro,
    source_code_link: "https://github.com/",
  },
  {
    name: "Drive interne",
    description:
      "Une application de gestion de documents pour stocker et partager les informations internes de l'entreprise.",
    tags: [
      {
        name: "symfony",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "api-platform",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "Powade",
    description:
      "Un site e-commerce proposant des batteries au lithium pour véhicules électriques.",
    tags: [
      {
        name: "prestashop",
        color: "orange-text-gradient",
      },
    ],
    image: powade,
    source_code_link: "https://github.com/",
  },
  {
    name: "Backpower",
    description:
      "Une boutique en ligne proposant un service de reconditionnement de batteries pour tout type d'appareils.",
    tags: [
      {
        name: "prestashop",
        color: "orange-text-gradient",
      },
    ],
    image: backpower,
    source_code_link: "https://github.com/",
  },
  {
    name: "Vélobatterie",
    description:
      "Une boutique en ligne proposant un service de reconditionnement de batteries pour les vélos éléctriques.",
    tags: [
      {
        name: "prestashop",
        color: "orange-text-gradient",
      },
    ],
    image: velobatterie,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
