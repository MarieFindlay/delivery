const width = {
    mobileS: '320px',
    mobileM: '360px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
  }

const height = {
    mobileS: '600px',
    mobileM: '675px',
}

  export const deviceWidth = {
    mobileS: `(max-width: ${width.mobileM})`,
    mobileM: `(max-width: ${width.mobileL})`,
    mobileL: `(max-width: ${width.tablet})`,
    tablet: `(max-width: ${width.laptop})`,
    laptop: `(max-width: ${width.laptopL})`,
    laptopL: `(max-width: ${width.desktop})`,
    desktop: `(min-width: ${width.desktop + 1})`,
  };

  export const deviceHeight = {
      mobileS: `(max-width: ${width.mobileS})`,
      mobileM: `(max-width: ${width.mobileM})`,
  }