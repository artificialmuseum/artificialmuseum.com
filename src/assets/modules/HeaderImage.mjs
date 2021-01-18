export const View = ({ staticUrl }) =>
  img({
    class: 'HeaderImage',
    src: `${staticUrl}/about/about_header.jpg`,
    width: '1200',
    height: '900',
  })

export const style = {
  float: 'right',
  position: 'relative',
  clear: 'both',
  margin: '0 0 60px',
}
