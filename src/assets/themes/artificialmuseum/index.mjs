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
      dark: '#f0f0f0',
      light: '#0f0f0f',
    },
  },

  widths: {
    tablet: '500px',
    laptop: '730px',
    desktop: '940px',
    agency: '1200px',
  },
}

export default (v = {}) => {
  v = { ...vars, ...v }

  return {
    '@font-face': {
      family: 'notosans',
      url: 'https://static.thesystem.at/font/',
      weights: [400, 600],
      styles: ['normal', 'italic'],
      types: ['woff', 'woff2'],
      unicodeRange:
        'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
    },

    body: {
      fontSize: '18px',
      fontFamily: 'notosans, sans-serif',
      overflowX: 'initial',
      lineHeight: 1.4,
    },

    '.Wrapper': {
      width: '100%',
      maxWidth: 'inherit',
    },

    img: {
      height: 'auto',
      width: '100%',
    },

    '.header': {
      'svg.logo': {
        height: '96px',
        float: 'left',
        margin: '20px 20px 20px 0',
      },

      h2: {
        fontSize: '2.7em',
        margin: 0,
        padding: 0,
        lineHeight: '1.2',
        padding: '9px 0 0',
        fontWeight: 600,
      },

      h3: {
        fontSize: '1.5em',
        margin: '31px 0 0',
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
