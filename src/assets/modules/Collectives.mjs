export const View = ({ title, collectives }) =>
  div({ class: 'Collectives text' }, [
    h2(title),

    div(
      collectives.map((collective, i) => [
        typeof collective === 'string' ? collective : Link(collective),
        i < collectives.length - 1 ? ', ' : '.',
      ]),
    ),
  ])

export const style = {
  li: {
    float: 'left',
  },
}
