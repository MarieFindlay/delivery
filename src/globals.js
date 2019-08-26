import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    body {
        @import url('https://fonts.googleapis.com/css?family=Actor&display=swap');
        padding: 0;
        margin: 0;
        font-family: 'Actor', sans-serif;
        box-sizing: border-box;
    }
`

export default {
    IMAGES: {
        WOMAN_HERO: require('./assets/woman-hero-image.jpg'),
        DOVE: require('./assets/dove.png'),
        GROUP: require('./assets/group.png'),
        BOX_ICON: require('./assets/box_icon.jpg'),
        DANCING_ICON: require('./assets/dancing_icon.jpg'),
        LIST_ICON: require('./assets/list_icon.jpg'),

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
        DARK_CRIMSON: '#310404',
        CRIMSON: '#674343',
        MUTED_CRIMSON: '#674343',
        CREAM: 'white',
        BEIGE: '#F9D194',
        MUTED_BEIGE: '#F9EDEB'
    },
    EFFECTS: {
        SHADOW: '2px 2px 4px rgba(0, 0, 0, 0.25)',
        INSET_SHADOW: 'inset 2px 2px 4px rgba(0, 0, 0, 0.25)',
    },
    API_KEYS: {
        STRIPE: "pk_test_uGLYOYBuOKBYFlqIcY7RFcc600aGtHolkS",
    },
    API_URLS: {
        CREATE_SUBSCRIPTION: '/.netlify/functions/createSubscription',
    }
}