export const navItems = [
  { label: 'Home', href: '/' },
  {
    label: 'Tutoring',
    href: '/services',
    children: [
      { label: 'Virtual Tutoring', href: '/services/virtualtutoring' },
      { label: 'In-Person Tutoring', href: '/services/inpersontutoring' },
    ],
  },
  {
    label: 'Lessons',
    href: '/lessons',
    children: [
      { label: 'Mathematics', href: '/lessons/math' },
      { label: 'English', href: '/lessons/english' },
      { label: 'Science', href: '/lessons/science' },
      { label: 'Health', href: '/lessons/health' },
      { label: 'Adult Education', href: '/lessons/adults' },
    ],
  },
  {
    label: 'Resources',
    href: '/resources',
    // children: [
    //   { label: 'Diagnostic Tests', href: '/resources/diagnostic-tests' },
    //   { label: 'Accessibility Tools', href: '/resources/accessibility' },
    //   { label: 'Extra Resources', href: '/resources/templates' },
    // ],
  },
  { label: 'Gallery', href: '/photos' },
  { label: 'Feedback Form', href: '/form' },
  { label: 'Help', href: '/faq' },
  { label: 'Our Mentors', href: '/tutors' },
];

export const subjects = [
  'maths',
  'language',
  'science',
  'history',
  'coding',
  'economics',
];

export const subjectsColors = {
  science: '#E5D0FF',
  maths: '#FFDA6E',
  language: '#BDE7FF',
  coding: '#FFC8E4',
  history: '#FFECC8',
  economics: '#C8FFDF',
};

export const faqData = [
  {
    category: 'For Students',
    icon: '🧑‍🎓',
    questions: [
      {
        id: 1,
        question: 'Who is eligible to receive tutoring from GRMR?',
        answer: [
          'GRMR provides tutoring services to:',
          '- K-12 students (elementary through high school)',
          '- Adult learners seeking educational support',
          '- Refugee and immigrant students needing academic assistance',
          'All our services are completely free of charge!',
        ],
      },
      {
        id: 2,
        question: 'How often can I schedule tutoring sessions?',
        answer:
          'Students can typically schedule one session per week per subject. Sessions last 60 minutes for virtual tutoring. For in-person events, check our calendar for upcoming dates and times.',
      },
      {
        id: 3,
        question: 'What subjects do you offer help with?',
        answer: [
          'We offer tutoring in a variety of subjects including:',
          '- Mathematics',
          '- Science',
          '- English Language Arts',
          '- English as a Second Language (ESL)',
          '- Social Studies/History',
          '- Standardized Exam Preparation (PSAT, SAT, etc.)',
        ],
      },
      {
        id: 4,
        question: 'Do I need to bring anything to my tutoring session?',
        answer:
          'For virtual sessions, you should have your schoolwork, textbook, or specific questions ready. A quiet space and a device with internet access are essential. For in-person events, bring any relevant materials, notebooks, and writing utensils.',
      },
      {
        id: 5,
        question: 'What if I need to cancel a session?',
        answer:
          'We understand that circumstances change. Please give at least 24 hours notice if you need to cancel or reschedule a session by contacting your tutor directly or emailing our coordinator at education@grmruf.org.',
      },
    ],
  },
  {
    category: 'For Volunteers',
    icon: '🤝',
    questions: [
      {
        id: 6,
        question: 'What are the requirements to become a tutor?',
        answer: [
          'To become a GRMR tutor, you should:',
          '- Be a student or professional with expertise in your subject area',
          '- Commit to at least one semester of volunteering',
          '- Complete our volunteer orientation and training',
          '- Pass a background check (for working with minors)',
          '- Have reliable internet access for virtual tutoring',
        ],
      },
      {
        id: 7,
        question: 'How many hours am I expected to volunteer?',
        answer:
          'Most tutors volunteer 1-3 hours per week. We ask for a minimum commitment of one session per week throughout the semester to provide consistency for students.',
      },
      {
        id: 8,
        question: 'Do I need teaching experience?',
        answer:
          'No formal teaching experience is required! We provide training and resources to help you become an effective tutor. The most important qualities are patience, reliability, and a genuine desire to help students succeed.',
      },
      {
        id: 9,
        question: 'Can I receive volunteer hour verification for my service?',
        answer:
          'Yes! We can provide documentation of your volunteer hours for school requirements, scholarship applications, or professional development purposes. Just let our volunteer coordinator know what you need.',
      },
    ],
  },
  {
    category: 'About GRMR',
    icon: '🏫',
    questions: [
      {
        id: 10,
        question: 'Is GRMR a non-profit organization?',
        answer:
          'Yes, GRMR (Gators for Refugee Medical Relief) is a registered non-profit educational organization. We operate through donations, grants, and volunteer work to provide free educational services.',
      },
      {
        id: 11,
        question: 'How did GRMR begin?',
        answer:
          'GRMR was founded in 2017 by University of Florida students who recognized the need for educational support among refugee communities. What began as a small initiative has grown into a comprehensive program supporting students across multiple subjects and age groups.',
      },
      {
        id: 12,
        question: 'How is GRMR funded?',
        answer:
          'GRMR operates through a combination of grants, private donations, fundraising events, and university partnerships. All services remain free to students thanks to these funding sources and our dedicated volunteers.',
      },
      {
        id: 13,
        question: "Can I donate to support GRMR's mission?",
        answer: [
          'Yes! We greatly appreciate donations that help us expand our services and reach more students. You can donate:',
          '- Through our website donation portal',
          '- By check made out to "Gators for Refugee Medical Relief"',
          '- By sponsoring specific programs or events',
          'All donations are tax-deductible. Contact our development team at donations@grmruf.org for more information.',
        ],
      },
    ],
  },
];
