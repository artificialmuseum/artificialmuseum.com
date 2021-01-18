export const View = ({ title, artists }) =>
  div({ class: 'Artists text' }, [
    h2(title),

    ul(
      artists.map((artist, i) =>
        li([artist.to ? Link(artist) : artist.text, i < artists.length - 1 ? ', ' : '.']),
      ),
    ),
  ])

export const style = v => ({
  [`@media screen and (min-width: ${v.widths.tablet})`]: {
    li: {
      float: 'left',
      padding: '0 0.2em 0 0',
    },
  },
})
