export const valueIntro = {
  eyebrow: 'Our Features',
  title: 'Partnership built on lasting mutual trust',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
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
    title: 'Command the room, every time',
    items: [
      {
        id: 1,
        headline: 'Unified workflow management',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio praesent libero sed cursus ante dapibus diam.',
        image: featureImages[1],
        imageLabel: 'Unified workflow management',
      },
      {
        id: 2,
        headline: 'Real-time performance insights',
        description:
          'Sed nisi nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum praesent mauris fusce nec tellus sed augue semper.',
        image: featureImages[2],
        imageLabel: 'Real-time performance insights',
      },
    ],
  },
  {
    id: 'value-b',
    title: 'Secure foundations built for enterprise scale',
    items: [
      {
        id: 3,
        headline: 'Enterprise-grade security protocols',
        description:
          'Vestibulum id ligula porta felis euismod semper. Cras mattis consectetur purus sit amet fermentum donec sed odio dui.',
        image: featureImages[3],
        imageLabel: 'Enterprise-grade security protocols',
      },
      {
        id: 4,
        headline: 'Compliance-ready audit frameworks',
        description:
          'Morbi leo risus porta ac consectetur ac vestibulum at eros. Praesent commodo cursus magna vel scelerisque nisl consectetur.',
        image: featureImages[4],
        imageLabel: 'Compliance-ready audit frameworks',
      },
    ],
  },
  {
    id: 'value-c',
    title: 'Dedicated support available at every stage',
    items: [
      {
        id: 5,
        headline: 'Dedicated account management team',
        description:
          'Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet maecenas faucibus.',
        image: featureImages[5],
        imageLabel: 'Dedicated account management team',
      },
      {
        id: 6,
        headline: 'Proactive onboarding and training',
        description:
          'Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes nascetur.',
        image: featureImages[6],
        imageLabel: 'Proactive onboarding and training',
      },
    ],
  },
]
