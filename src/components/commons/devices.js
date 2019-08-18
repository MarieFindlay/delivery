const width = {
    mobileS: '320px',
    mobileM: '360px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
  }

  export const deviceWidth = {
    mobileS: `(min-width: ${width.mobileS})`,
    mobileM: `(min-width: ${width.mobileM})`,
    mobileL: `(min-width: ${width.mobileL})`,
    tablet: `(min-width: ${width.tablet})`,
    laptop: `(min-width: ${width.laptop})`,
    laptopL: `(min-width: ${width.laptopL})`,
    desktop: `(min-width: ${width.desktop})`,
  };

  export const deviceHeight = {
      mobileS: `(max-width: ${width.mobileS})`,
      mobileM: `(max-width: ${width.mobileM})`,
  }