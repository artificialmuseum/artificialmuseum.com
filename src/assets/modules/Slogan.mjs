export const View = children =>
  div(
    { class: 'Slogan' },
    children.map(c => p(c)),
  )

export const style = v => ({
  clear: 'both',
  fontSize: '1.5em',
  fontWeight: 600,
  lineHeight: 1,
  margin: '2em 0',
  padding: `0 ${v.paddingLeft}`,
  width: '100%',
})
