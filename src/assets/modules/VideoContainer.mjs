export const View = url =>
  div({ class: 'VideoContainer' }, [
    VideoEmbed({ src: 'D6i50aYe-X8' }), // demo video
  ])

export const style = vars => ({
  zIndex: 1,
  position: 'relative',
  margin: '0 0 2em',

  img: {
    width: '100%',
    height: 'auto',
    display: 'inline-block',
  },

  '.VideoEmbed': {
    paddingTop: '0',
  },

  [`@media screen and (min-width: ${vars.widths.laptop})`]: {
    width: '70vw',
    height: '39.375vw',
    float: 'right',
    margin: '2vw 2vw 4em 0',
    top: 0,
    right: 0,

    img: {
      maxWidth: '100%',
      maxHeight: '100%',
    },
  },

  [`@media screen and (min-width: ${vars.widths.agency})`]: {
    width: '50vw',
    height: '28.125vw',
  },
})
