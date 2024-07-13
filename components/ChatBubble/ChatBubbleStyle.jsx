import * as stylex from '@stylexjs/stylex'
import { tokens } from '@/app/tokens.stylex'

export const bubbleStyle = stylex.create({
    base: {
        position: 'relative',
        maxWidth: '300px',
    },

    description: {
        position: 'absolute',
        width: 'auto',
        padding: '12px 14px',
        borderRadius: '22px',
        backgroundColor: tokens.colorBgSecondary,
        color: tokens.colorTextSecondary,
        fontSize: '0.8rem',
        whiteSpace: 'nowrap'
    },

    bubbleBig: {
        position: 'absolute',
        top: '-15px',
        left: '10px',
        width: '35px',
        height: '35px',
        backgroundColor: tokens.colorBgSecondary,
        borderRadius: '50%',
    },

    bubbleSmall: {
        position: 'absolute',
        top: '-25px',
        left: '-10px',
        width: '15px',
        height: '15px',
        backgroundColor: tokens.colorBgSecondary,
        borderRadius: '50%',
    },
})