export const pricingContent = {
  title: 'Transparent pricing for every stage',
}

export const pricingPlans = [
  {
    id: 'plan-starter',
    name: 'Starter',
    price: '$49',
    period: '/month',
    whatsIncludedTitle: 'What’s included',
    description: 'Lorem ipsum dolor sit amet for small teams getting started.',
    featureGroups: [
      {
        label: 'Features',
        items: [
          'AI contract review',
          'Risk flag detection',
          'Document summaries',
          'Basic clause insights',
        ],
      },
      {
        label: 'Best for',
        items: [
          'Solo legal teams',
          'Early-stage startups',
          'Light contract volume',
          'Faster first reviews',
        ],
      },
    ],
    cta: 'Get started',
    highlighted: false,
  },
  {
    id: 'plan-professional',
    name: 'Professional',
    price: '$149',
    period: '/month',
    whatsIncludedTitle: 'Everything you need to scale',
    description: 'Lorem ipsum dolor sit amet for growing organizations.',
    featureGroups: [
      {
        label: 'Features',
        items: [
          'Everything in Starter',
          'Clause comparison',
          'Approval workflows',
          'Team collaboration',
          'Priority support',
        ],
      },
      {
        label: 'Ideal for',
        items: [
          'Growing legal teams',
          'In-house operations',
          'Shared review workflows',
          'Higher contract volume ',
        ],
      },
    ],
    cta: 'Start free trial',
    highlighted: true,
  },
  {
    id: 'plan-enterprise',
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    whatsIncludedTitle: 'Built for enterprise teams',
    description: 'Lorem ipsum dolor sit amet for large-scale operations.',
    featureGroups: [
      {
        label: 'Features',
        items: [
          'Everything in Pro',
          'Custom playbooks',
          'Compliance controls',
          'SSO and permissions',
          'Dedicated onboarding',
          'Enterprise support',
        ],
      },
      {
        label: 'Best for',
        items: [
          'Multi-team access',
          'Custom requirements teams',
          'Large legal teams',
          'Complex agreements setup',
        ],
      },
    ],
    cta: 'Contact sales',
    highlighted: false,
  },
]
