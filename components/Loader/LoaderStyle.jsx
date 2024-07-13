/* Libraries */
import * as stylex from '@stylexjs/stylex'
/* Style */
import { tokens } from '@/app/tokens.stylex'

export const loaderStyle = stylex.create({
    base: {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    logo: {
        margin: '0',
        width: '80px',
        height: '80px',
    },

    finger: {
        fill: {
            default: tokens.colorTextTertiary,
            ':hover': tokens.colorTextSecondary
        },
        transition: 'fill .2s ease-in-out',
    },
})