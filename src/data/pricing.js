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
          'Up to 10 team members',
          'Core workflow tools',
          'Email support',
          'Standard reporting',
        ],
      },
      {
        label: 'Features',
        items: [
          'Team onboarding guide',
          'Knowledge base access',
          'Community forum',
          'Quarterly product updates',
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
          'Up to 50 team members',
          'Advanced analytics suite',
          'Priority support',
          'Custom integrations',
          'Dedicated account manager',
        ],
      },
      {
        label: 'Features',
        items: [
          'SSO and role-based access',
          'Audit logs and exports',
          'API rate limit increases',
          'Quarterly strategy reviews',
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
          'Unlimited team members',
          'Enterprise security controls',
          '24/7 dedicated support',
          'Custom SLA agreements',
          'On-site implementation',
        ],
      },
      {
        label: 'Features',
        items: [
          'Private cloud deployment',
          'Custom contract terms',
          'Executive business reviews',
          'Dedicated solutions engineer',
        ],
      },
    ],
    cta: 'Contact sales',
    highlighted: false,
  },
]
