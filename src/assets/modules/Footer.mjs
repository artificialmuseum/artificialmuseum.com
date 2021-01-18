export const View = state =>
  footer({ class: 'Footer' }, [
    div({ class: 'Container' }, [
      div([
        svg({ class: 'logo', viewBox: '0 0 54 60' }, [
          path({ d: 'M36 0v10h9v40h-9v10h18V0zM0 0v60h18V50H9V10h9V0z', fill: '#ffffff' }),
        ]),

        div([
          h2('Impressum'),

          h3('Address:'),
          p('TheSystemCollective, z.H. Daniela Weiss'),
          p('Yppenplatz 5'),
          p('1170 Wien'),
          p('Austria'),
        ]),

        h3('Represented by:'),
        p('Litto / Daniela Weiss'),

        h3('Email:'),
        Link({
          to: 'mailto:thesystemcollective@gmail.com',
          text: 'thesystemcollective@gmail.com',
        }),
      ]),

      div([
        h2('Privacy notice'),

        h3('No spying'),
        p('We promise to never analyze, track or sell any data about you.'),
        p('We will also never save any data without asking explicitly.'),

        h3('Local data'),
        p([
          'All browser features that collect sensitive data',
          ' (device orientation, 3d-map of your surroundings, camera video streams, geolocation)',
          ' DO NOT and NEVER WILL transmit this data to our servers.',
        ]),

        h3('Session storage'),
        p([
          'We save some data in your browser (your last gps location).',
          'This information gets deleted as soon as you close the browser tab.',
        ]),
      ]),

      Social(state),

      Credits(),
    ]),
  ])

export const style = v => ({
  position: 'relative',
  padding: `5em 0 .5em ${v.paddingLeft}`,
  clear: 'both',
  margin: '2em 0 0',
  backgroundColor: v.background.dark,
  color: v.text.dark,

  a: {
    color: v.link.dark,

    '&:hover': {
      color: v.link.hover.dark,
    },
  },

  '.Container': {
    textAlign: 'left',
  },

  '.Credits': {
    textAlign: 'center',
  },
})
