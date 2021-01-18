export const View = state => div({ class: 'Team' }, [
  h4('TEAM'),

  ul(
    state.team.map(member =>
      li([h5(a({ href: member.url }, member.name)), member.job.map(j => p(j))]),
    ),
  ),
])

export const style = {
  display: 'inline-block',

  li: {
    border: '1px solid',
    float: 'left',
    height: '35vw',
    margin: '0 2vw 2vw 0',
    maxHeight: '200px',
    maxWidth: '200px',
    textAlign: 'center',
    width: '35vw',

    h5: {
      margin: '0.2em 0',
      fontSize: '14px',
      lineHeight: '25px',
    },

    p: {
      fontSize: '12px',
      lineHeight: '1.3em',
      margin: 0,
    },
  },
}