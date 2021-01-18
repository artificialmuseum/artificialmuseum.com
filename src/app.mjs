export const state = {
  title: 'Artificial Museum',
  description:
    'The Artificial Museum connects virtual, imaginary worlds with reality. We are timeless, have unlimited space and are always open.',

  team: [
    { name: 'LITTO', job: ['ARTISTIC DIRECTION', '3D ART, DESIGN'], url: 'https://litto.work' },
    { name: 'JASCHA', job: ['DEVELOPMENT'], url: 'https://jaeh.at' },
    { name: 'DAVID', job: ['3D ART'], url: 'https://wuchte.at' },
  ],

  staticUrl: 'https://static.thesystem.at',

  seo: {
    name: 'ArtificialMuseum',
    url: 'https://artificialmuseum.com/',
    about:
      'The Artificial Museum connects virtual, imaginary worlds with reality. We are timeless, have unlimited space and are always open.',
    // image: `https://artificialmuseum.com/artificialmuseum-preview.jpg`,
    author: [
      {
        '@type': 'person',
        name: 'Jascha Ehrenreich',
        jobTitle: 'Technomancer',
        image: 'https:/jaeh.at/img/jascha.ehrenreich.jpg',
        url: 'https://jaeh.at',
      },
      {
        '@type': 'person',
        name: 'Daniela Weiss',
        additionalName: 'Litto',
        jobTitle: 'Artistic Direction',
        // image: 'https:/',
        url: 'https://litto.work',
      },
    ],
  },
}
