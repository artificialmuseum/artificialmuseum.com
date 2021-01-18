export const View = ({ staticUrl }) =>
  img({
    class: 'AboutImage',
    src: `${staticUrl}/about/about_preview.jpg`,
    width: '1200',
    height: '900',
  })

export const style = {
  float: 'left',
  position: 'relative',
  clear: 'both',
  margin: '0 0 60px',
}
