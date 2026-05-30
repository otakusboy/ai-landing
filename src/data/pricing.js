export const pricingContent = {
  title: 'Transparent pricing for every stage',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis.',
}

export const pricingPlans = [
  {
    id: 'plan-starter',
    name: 'Starter',
    price: '$49',
    period: '/month',
    description: 'Lorem ipsum dolor sit amet for small teams getting started.',
    features: [
      'Up to 10 team members',
      'Core workflow tools',
      'Email support',
      'Standard reporting',
    ],
    cta: 'Get started',
    highlighted: false,
  },
  {
    id: 'plan-professional',
    name: 'Professional',
    price: '$149',
    period: '/month',
    description: 'Lorem ipsum dolor sit amet for growing organizations.',
    features: [
      'Up to 50 team members',
      'Advanced analytics suite',
      'Priority support',
      'Custom integrations',
      'Dedicated account manager',
    ],
    cta: 'Start free trial',
    highlighted: true,
  },
  {
    id: 'plan-enterprise',
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'Lorem ipsum dolor sit amet for large-scale operations.',
    features: [
      'Unlimited team members',
      'Enterprise security controls',
      '24/7 dedicated support',
      'Custom SLA agreements',
      'On-site implementation',
    ],
    cta: 'Contact sales',
    highlighted: false,
  },
]
