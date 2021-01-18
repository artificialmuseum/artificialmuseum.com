export const vars = {
  text: {
    dark: '#f0f0f0',
    light: '#0f0f0f',
  },

  background: {
    dark: '#0f0f0f',
    light: '#f0f0f0',
  },

  neutral: '#0f0f0f',

  link: {
    dark: '#f0f0f0',
    light: '#0f0f0f',

    hover: {
      dark: '#ffffff',
      light: '#000000',
    },
  },

  widths: {
    tablet: '500px',
    laptop: '730px',
    desktop: '940px',
    agency: '1200px',
  },

  paddingLeft: '25px',
}

export default (v = {}) => {
  v = { ...vars, ...v }

  return {
    '@font-face': {
      family: 'notosans',
      url: 'https://static.thesystem.at/font/',
      styles: ['normal', 'italic'],
      types: ['woff', 'woff2'],
      weights: [400, 600],
      unicodeRange:
        'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
    },

    body: {
      fontFamily: 'notosans, sans-serif',
      fontSize: '20px',
      lineHeight: 1.4,
      overflowX: 'initial',
    },

    a: {
      color: v.link.light,

      '&:hover': {
        color: v.link.hover.light,
      },
    },

    h2: {
      fontSize: '1.5em',
    },

    '.Wrapper': {
      maxWidth: 'inherit',
      width: '100%',
    },

    img: {
      height: 'auto',
      maxHeight: '100%',
      maxWidth: '100%',
    },

    '.text': {
      clear: 'both',
      margin: '2em 0',
      maxWidth: '1000px',
      padding: `0 ${v.paddingLeft}`,

      p: {
        margin: '0 0 1em',
      },
    },

    footer: {
      'svg.logo': {
        float: 'right',
        height: '100px',
        position: 'absolute',
        right: '48px',
        width: '100px',
      },
    },
  }
}
