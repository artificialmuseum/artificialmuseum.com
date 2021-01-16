export const vars = {
  text: {
    dark: '#212121',
  },

  neutral: 'green',
}

export default (v = {}) => {
  v = { ...vars, ...v }

  return {
    img: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },

    '.Footer': {
      position: 'fixed',
      right: '1em',
      bottom: 0,
      width: 'auto',
      padding: 0,
      margin: 0,
    },
  }
}
