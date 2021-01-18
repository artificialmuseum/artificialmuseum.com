export const View = state =>
  div({ class: 'Team text' }, [
    h2('TEAM'),

    ul(
      state.team.map(member =>
        li([h3(a({ href: member.url }, member.name)), member.job.map(j => p(j))]),
      ),
    ),
  ])

export const style = {
  display: 'inline-block',

  li: {
    border: '1px solid',
    // float: 'left',
    height: '40vw',
    margin: '0 2vw 2vw 0',
    maxHeight: '200px',
    maxWidth: '200px',
    textAlign: 'center',
    width: '40vw',

    h5: {
      fontSize: '14px',
      lineHeight: '25px',
      margin: '0.2em 0',
    },

    p: {
      fontSize: '12px',
      lineHeight: '1.3em',
      margin: 0,
    },
  },
}
