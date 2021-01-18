export const View = state => div({ class: 'Team' }, [
  h4('TEAM'),

  ul(
    state.team.map(member =>
      li([h5(a({ href: member.url }, member.name)), member.job.map(j => p(j))]),
    ),
  ),
])

export const style = {
  li: {
    h5: {
      fontSize: 'inherit',
      lineHeight: 'inherit',
      margin: '1em 0 0.2em',
    },

    p: {
      fontSize: '15px',
      lineHeight: 'inherit',
    },
  },
}