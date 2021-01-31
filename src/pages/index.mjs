export const View = ({ artists, collectives, staticUrl, team }) => [
  CallToAction({ src: `${staticUrl}/about/about_header.jpg` }),

  Slogan(["WE DON'T NEED SPACE,", 'TIME IS IRRELEVANT,', 'OBJECTS STAY AS USEFUL', 'AS THE USER.']),

  div({ class: 'text' }, [
    p([
      b('The Artificial Museum'),
      ' is the connection between physical, digital, and imaginary worlds,',
      ' transforming analog art into digital experiences.',
    ]),
    p([
      'These "augmented" artworks form the foundation of an artificial museum,',
      ' allowing artists to bridge the chasm between their art',
      ' and the evolving digitized world around them.',
    ]),
  ]),

  AboutImage({ src: `${staticUrl}/about/about_preview.jpg` }),

  div({ class: 'text' }, [
    b('TheSystemCollective'),
    ' is a syndicate of independent artists, makers, programmers,',
    ' engineers, philosophers, activists, and scientists,',
    ' collectively using art and technology to transform our world.',
    ' We believe in a literal definition of "common goods",',
    ' and convert public spaces into a museum,',
    ' ready for artists to freely position their art.',
  ]),

  Collectives({ collectives, title: 'Collectives' }),

  Artists({ artists, title: 'Artists' }),

  Team({ team }),

  Commissioned({ staticUrl, title: 'Commissioned by:' }),
]
