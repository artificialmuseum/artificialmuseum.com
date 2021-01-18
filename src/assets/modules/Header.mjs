export const View = () =>
  header({ class: 'Header' }, [
    svg({ class: 'logo', viewBox: '0 0 54 60' }, [
      path({ d: 'M36 0v10h9v40h-9v10h18V0zM0 0v60h18V50H9V10h9V0z', fill: '#0c0c0c' }),
    ]),

    h1(['Artificial', br(), 'Museum']),
  ])

export const style = v => ({
  margin: '5em 0',

  svg: {
    float: 'left',
    height: '58px',
    margin: '1em 0.5em 1em 0',
  },

  h1: {
    fontWeight: 600,
    margin: 0,
    padding: '0.5em 0 0',
  },

  [`@media screen and (min-width: ${v.widths.tablet})`]: {
    h1: {
      fontSize: '2.4em',
      lineHeight: '1.2',
      padding: '9px 0 0',
    },
    svg: {
      height: '96px',
    },
  },
})
