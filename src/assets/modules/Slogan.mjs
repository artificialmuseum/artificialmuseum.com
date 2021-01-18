export const View = () =>
  div({ class: 'Slogan' }, [
    p("WE DON'T NEED SPACE,"),
    p('TIME IS IRRELEVANT,'),
    p('OBJECTS STAY AS USEFUL'),
    p('AS THE USER.'),
  ])

export const style = v => ({
  fontSize: '40px',
  fontWeight: 600,
  lineHeight: 1,
  padding: `0 ${v.paddingLeft}`,
  width: '100%',
  margin: '2em 0',
})
