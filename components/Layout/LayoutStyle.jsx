/* Libraries */
import * as stylex from '@stylexjs/stylex'
/* Style */
import { tokens } from '../../app/tokens.stylex'

export const layoutStyle = stylex.create({
    base: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'stretch',
        height: '100vh',
        backgroundColor: tokens.colorBgQuinary,
    },

    nav: {
        position: 'relative',
        minWidth: {
            default: '265px',
            '@media only screen and (max-width: 800px)': '0',
        },
        width: {
            default: '265px',
            '@media only screen and (max-width: 800px)': '0',
        },
        left: {
            default: 0,
            '@media only screen and (max-width: 800px)': '-330px',
        },
        margin: 0,
        padding: 0,
        transition: 'all .2s ease-in-out'
    },

    content: {
        display: 'flex',
        flexDirection: 'column',
        flex: '1 1 auto',
        placeItems: 'stretch',
        backgroundColor: tokens.colorBgPrimary,
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: tokens.colorBorderSecondary,
        borderRadius: '4px',
        margin: {
            default: '8px 8px 8px 0',
            '@media only screen and (max-width: 800px)': '8px',
        },
    },

    ninjagear: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        minWidth: {
            default: '265px',
        },
        width: {
            default: '265px',
        },
        backgroundColor: tokens.colorBgPrimary,
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: tokens.colorBorderSecondary,
        borderRadius: '4px',
        margin: {
            default: '8px 8px 8px 0',
        },
        transition: 'all .2s ease-in-out'
    }
})