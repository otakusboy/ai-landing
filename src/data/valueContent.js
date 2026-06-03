export const valueIntro = {
  eyebrow: 'Our Features',
  title: 'Designed for modern legal teams',
  description:
    'Veridoc brings together AI-powered contract review, secure workflows, and clear legal insight to help legal and business teams review faster.',
}

const featureImages = {
  1: new URL('../assets/features/1.png', import.meta.url).href,
  2: new URL('../assets/features/2.png', import.meta.url).href,
  3: new URL('../assets/features/3.png', import.meta.url).href,
  4: new URL('../assets/features/4.png', import.meta.url).href,
  5: new URL('../assets/features/5.png', import.meta.url).href,
  6: new URL('../assets/features/6.png', import.meta.url).href,
}

export const valueSections = [
  {
    id: 'value-a',
    title: 'Review With Precision',
    items: [
      {
        id: 1,
        icon: 'layers',
        headline: 'AI contract analysis',
        description:
          'Quickly scan agreements, surface key terms, and identify issues that need closer legal review.',
        image: featureImages[1],
        imageLabel: 'Unified workflow management',
      },
      {
        id: 2,
        icon: 'alert-triangle',
        headline: 'Risk flag detection',
        description:
          'Spot unclear clauses, missing protections, and contract language that may introduce unnecessary risk.',
        image: featureImages[2],
        imageLabel: 'Real-time performance insights',
      },
    ],
  },
  {
    id: 'value-b',
    title: 'Work With Clarity',
    items: [
      {
        id: 3,
        icon: 'file-text',
        headline: 'Smarter legal summaries',
        description:
          'Turn dense legal documents into clear, structured insights your team can review and act on faster.',
        image: featureImages[3],
        imageLabel: 'Enterprise-grade security protocols',
      },
      {
        id: 4,
        icon: 'columns',
        headline: 'Clause comparison tools',
        description:
          'Compare language across contracts to maintain consistency and improve decision-making across reviews.',
        image: featureImages[4],
        imageLabel: 'Compliance-ready audit frameworks',
      },
    ],
  },
  {
    id: 'value-c',
    title: 'Move With Confidence',
    items: [
      {
        id: 5,
        icon: 'shield',
        headline: 'Secure team workflows',
        description:
          'Keep contract reviews organized with secure collaboration built for legal and business stakeholders.',
        image: featureImages[5],
        imageLabel: 'Dedicated account management team',
      },
      {
        id: 6,
        icon: 'life-buoy',
        headline: 'Reliable review support',
        description:
          'Support every stage of the review process with AI assistance designed for speed, control, and trust.',
        image: featureImages[6],
        imageLabel: 'Proactive onboarding and training',
      },
    ],
  },
]
