export const CALENDLY_URL = 'https://calendly.com/samy-khelfa94/30min'
export const EMAIL = 'contact@devnights.com'
export const GITHUB_URL = 'https://github.com/SamyKhelfa'
export const LINKEDIN_URL = 'https://www.linkedin.com/in/samy-khelfa/'

export const navLinks = [
  { label: 'Services', href: '/#services' },
  { label: 'Stack', href: '/#stack' },
  { label: 'Réalisations', href: '/#realisations' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Contact', href: '/#contact' },
]

export const keyTechs = ['React', 'React Native', 'Next.js', 'TypeScript', 'NestJS']

export const services = [
  {
    icon: '🔁',
    title: 'Refonte & migration frontend',
    description:
      "Passer d'un site PHP/Laravel vieillissant à une app React moderne, sans casser l'existant. Je reprends l'UX, je découpe en composants et je livre un code que l'équipe pourra maintenir.",
    example: { label: 'Noralsy', href: '/experiences/noralsy' },
  },
  {
    icon: '📱',
    title: 'App mobile de A à Z',
    description:
      "De la maquette au store avec React Native. Auth, chat temps réel, API : je construis l'app et le back qui va avec.",
    example: { label: 'FrostApp', href: '/experiences/frostapp' },
  },
  {
    icon: '🧩',
    title: 'API & back-end',
    description:
      'APIs REST propres et documentées avec NestJS, Prisma et Swagger. Je structure les données pour que le front reste simple.',
    example: { label: 'FrostApp', href: '/experiences/frostapp' },
  },
  {
    icon: '🎧',
    title: "Pensé pour l'utilisateur",
    description:
      "Des années de support technique m'ont appris où les gens bloquent. Je conçois les écrans pour éviter ces blocages avant qu'ils arrivent.",
    example: null,
  },
]

export const stack = [
  { icon: '⚛️', title: 'Front', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
  { icon: '📱', title: 'Mobile', items: ['React Native', 'iOS & Android'] },
  { icon: '🟢', title: 'Back', items: ['Node.js', 'NestJS', 'REST API'] },
  { icon: '🗄️', title: 'Données', items: ['Prisma', 'Modélisation SQL'] },
  { icon: '🔐', title: 'Temps réel & Auth', items: ['JWT', 'WebSockets', 'Micro-services'] },
  { icon: '🛠️', title: 'Outils', items: ['Git & GitHub', 'Swagger', 'CI/CD'] },
]

export type Experience = {
  slug: string
  name: string
  role: string
  current: boolean
  monogram: string
  logoClass: string
  logo?: string
  summary: string
  tags: string[]
  context: string
  missions: string[]
  challenges: string[]
  results: string[]
}

export const experiences: Experience[] = [
  {
    slug: 'noralsy',
    name: 'Noralsy',
    role: 'Développeur Fullstack · Refonte frontend',
    current: true,
    monogram: 'N',
    logoClass: 'bg-sky-500/15 border-sky-500/30 text-sky-300',
    logo: '/noralsy.png',
    summary: 'Migration complète d’un site PHP/Laravel vers React.',
    tags: ['React', 'TypeScript', 'Laravel', 'UX'],
    context:
      "Noralsy disposait d'un site en PHP/Laravel devenu difficile à faire évoluer. L'objectif est de le reconstruire en React, avec une interface plus moderne et un code que l'équipe peut maintenir sur le long terme.",
    missions: [
      'Audit du site existant et inventaire des parcours utilisateurs',
      'Refonte du frontend from scratch en React',
      "Modernisation de l'UX et du design des écrans clés",
      "Découpage en composants réutilisables pour l'équipe",
    ],
    challenges: [
      "Migrer sans interrompre le service pour les utilisateurs actuels",
      'Retrouver la logique métier enfouie dans les templates PHP',
      'Garder un code lisible pour les développeurs qui prendront la suite',
    ],
    results: [
      'Une base React moderne et maintenable',
      'Des parcours utilisateurs simplifiés',
      "Une équipe qui peut faire évoluer le produit sans tout réécrire",
    ],
  },
  {
    slug: 'frostapp',
    name: 'FrostApp',
    role: 'Créateur · Projet perso',
    current: true,
    monogram: 'F',
    logoClass: 'bg-cyan-400/15 border-cyan-400/30 text-cyan-200',
    logo: '/frostapp.svg',
    summary: 'App mobile communautaire avec chat temps réel.',
    tags: ['React Native', 'NestJS', 'JWT', 'WebSockets'],
    context:
      "FrostApp est une application mobile communautaire que je construis de bout en bout. Elle me sert de terrain pour une architecture complète, du mobile jusqu'aux micro-services.",
    missions: [
      "Conception et développement de l'app mobile en React Native",
      'Authentification sécurisée par JWT',
      'Chat en temps réel entre membres',
      'Back-end découpé en micro-services',
    ],
    challenges: [
      'Synchroniser les messages en temps réel de façon fiable',
      "Sécuriser l'auth sans alourdir l'expérience mobile",
      'Faire communiquer plusieurs services proprement',
    ],
    results: [
      'Une architecture complète, du mobile au back',
      'Un chat temps réel fonctionnel',
      'Une base solide pour ajouter de nouvelles fonctionnalités',
    ],
  },
]

export const faq = [
  {
    q: 'Que recherches-tu en ce moment ?',
    a: "Une alternance en tant que développeur fullstack. Je cherche une équipe où je peux livrer du vrai produit, côté front comme côté back.",
  },
  {
    q: 'Sur quels types de projets peux-tu intervenir ?',
    a: 'Apps web en React/Next.js, apps mobiles en React Native, et APIs en NestJS. Je suis particulièrement à l’aise sur les refontes et migrations frontend.',
  },
  {
    q: "D'où vient ton profil support technique ?",
    a: "J'ai passé plusieurs années à gérer des incidents et à accompagner des utilisateurs. Ça m'a appris à comprendre un besoin avant de coder et à communiquer clairement.",
  },
  {
    q: 'Travailles-tu à distance ?',
    a: 'Oui, en remote comme sur site. On en parle lors d’un premier appel pour trouver le rythme qui convient.',
  },
  {
    q: 'Comment se passe un premier contact ?',
    a: 'Le plus simple est de réserver un créneau de 30 minutes sur Calendly. Sinon, un email suffit et je réponds rapidement.',
  },
]
