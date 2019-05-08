import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    @import url(‘https://fonts.googleapis.com/css?family=Actor');
    body {
        padding: 0;
        margin: 0;
        font-family: Actor, sans-serif;
        box-sizing: border-box;
    }
`

export default {
    IMAGES: {
        WOMAN_HERO: require('./assets/woman-hero-image.png'),
        DOVE: require('./assets/dove.png'),

    },
    DIMENSIONS: {
        MARGIN: 50,
        FONT_SIZE_BIGGEST: '50px',
        FONT_SIZE_BIG: '30px',
        FONT_SIZE_MEDIUM: '22px',
        FONT_SIZE_SMALL_MEDIUM: '20px',
        FONT_SIZE_SMALL: '16px',
        FONT_SIZE_SMALLEST: '14xpx',
        FONT_SIZE_TINY: '12px'
    },
    COLORS: {
        PURPLE: '#7F4EF5',
        CRIMSON: '#310404',
        MUTED_CRIMSON: '#674343',
        CREAM: '#F1E6E4',
        BEIGE: '#F9D194',
        MUTED_BEIGE: '#FEDFAE'
    },
}