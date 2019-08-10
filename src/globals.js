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
        GROUP: require('./assets/group.png'),

    },
    DIMENSIONS: {
        MARGIN: 50,
        RESP_MARGIN: '5vh',
        HORIZONTAL_MARGIN: '10vw',
        BORDER_RADIUS: '1px',
        FONT_SIZE_BIGGEST: '45px',
        FONT_SIZE_BIG: '25px',
        FONT_SIZE_MEDIUM: '18px',
        FONT_SIZE_SMALL_MEDIUM: '16px',
        FONT_SIZE_SMALL: '14px',
        FONT_SIZE_SMALLEST: '14xpx',
        FONT_SIZE_TINY: '12px'
    },
    COLORS: {
        PURPLE: '#7F4EF5',
        CRIMSON: '#310404',
        MUTED_CRIMSON: '#674343',
        CREAM: 'white',
        BEIGE: '#F9D194',
        MUTED_BEIGE: '#F9EDEB'
    },
    EFFECTS: {
        SHADOW: '2px 2px 4px rgba(0, 0, 0, 0.25)',
    }
}