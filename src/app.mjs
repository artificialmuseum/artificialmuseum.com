export const state = {
  title: 'Artificial Museum',
  description:
    'The Artificial Museum connects virtual, imaginary worlds with reality. We are timeless, have unlimited space and are always open.',

  team: [
    { name: 'LITTO', job: ['ARTISTIC DIRECTION', '3D ART, DESIGN'], url: 'https://litto.work' },
    { name: 'JASCHA', job: ['PROGRAMMING', '3D ART'], url: 'https://jaeh.at' },
    { name: 'DAVID', job: ['3D ART'], url: 'https://wuchte.at' },
  ],

  staticUrl: 'https://static.artificialmuseum.com',

  social: {
    instagram: 'https://www.instagram.com/theartificialmuseum/',
    youtube: 'https://www.youtube.com/channel/UCBwKwgk_eU8w-ccmTOFXADQ',
  },

  collectives: [
    'Dachsbau',
    { to: 'https://metalab.at', text: 'Metalab' },
    { to: 'https://notgalerie.at', text: 'Notgalerie' },
    { to: 'https://www.facebook.com/sandkastensyndikat/', text: 'Sandkasten Syndikat' },
    { to: 'https://setzkastenwien.at/', text: 'Setzkasten Wien' },
    'Villa Schapira',
    { to: 'http://mysoundofmusic.at', text: 'Zirkus Mops' },
  ],

  artists: [
    {
      text: 'Adam Lebesmühlbacher',
      to: 'http://www.mysoundofmusic.at',
    },
    {
      text: 'Chora Malik',
    },
    {
      text: 'Litto / Daniela Weiss',
      to: 'https://litto.work',
    },
    {
      text: 'Dagmar Rohm',
      to: 'http://dagmarrohm.at/',
    },
    {
      text: 'David Wuchte',
      to: 'https://wuchte.at',
    },
    {
      text: 'Elet.Irrlicht',
      to: 'https://elet.cc/',
    },
    {
      text: 'Guillermo Tellechea',
    },
    {
      text: 'Heinz Seidenbusch',
    },
    {
      text: 'Jascha Ehrenreich',
      to: 'https://jaeh.at',
    },
    {
      text: 'Jay Vaughan',
      to: 'https://soundcloud.com/ibisum',
    },
    {
      text: 'Marco Otoya',
    },
    {
      text: 'Markus Liszt',
    },
    {
      text: 'Meks',
      to: 'https://soundcloud.com/user-945933947',
    },
    {
      text: 'Miss Bubblebliss',
      to: 'http://missbubblebliss.at/',
    },
    {
      text: 'Noémi Kiss',
      to: 'http://noemikiss.at/',
    },
    {
      text: 'Oktogon',
      to: 'https://www.instagram.com/saveokto/',
    },
    {
      text: 'Reinhold Zisser',
      to: 'http://reinholdzisser.com/',
    },
    {
      text: 'Selina Novak',
      to: 'http://www.mysoundofmusic.at',
    },
    {
      text: 'Stefan Stürzer',
      to: 'https://absturz.info/',
    },
    {
      text: 'Stefan Voglsinger',
      to: 'https://setzkastenwien.at/',
    },
    {
      text: 'Zirkus Mops',
      to: 'http://www.mysoundofmusic.at',
    },
  ],

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
