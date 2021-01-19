export const View = ({ staticUrl, title }) =>
  div({ class: 'Commissioned' }, [
    h2(title),

    Link({ to: 'https://koer.or.at' }, [
      img({
        class: 'koer',
        height: '60',
        src: `${staticUrl}/support/koer.svg`,
        alt: 'Kunst im öffentlichen Raum Wien GmbH',
      }),
      img({
        height: '60',
        src: `${staticUrl}/support/wien-kultur.svg`,
        alt: 'Stadt Wien',
      }),
    ]),
  ])

export const style = v => ({
  display: 'inline-block',
  width: '100%',
  clear: 'both',
  float: 'none',
  margin: `0 0 2em ${v.paddingLeft}`,

  img: {
    clear: 'none',
    float: 'left',
    margin: '0 3% 0 0',
    maxHeight: '60px',
    maxWidth: '40%',
    width: 'auto',
  },
})
