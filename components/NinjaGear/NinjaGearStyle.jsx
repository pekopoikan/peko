/* Libraries */
import * as stylex from '@stylexjs/stylex'
/* Stylex */
import { tokens } from '@/app/tokens.stylex'

export const gearStyle = stylex.create({
    base: {
        display: 'flex',
        flexDirection: 'column',
        flex: '1',
        margin: '12px',
        overflow: 'hidden',
        overflowY: 'auto',
        scrollbarWidth: 'none'
    },

    row: {
        display: 'flex',
        alignItems: 'start',
        gap: '8px'
    },

    col: {
        display: 'flex',
        flexDirection: 'column',
        justifyItems: 'start',
        gap: '8px'
    },

    title: {
        color: tokens.colorTextSecondary,
        fontSize: '0.7rem'
    },

    equipment: {
        display: 'grid',
        gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
        gap: '8px'
    },

    accessory: {
        display: 'grid',
        gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
        gap: '8px'
    },

    jades: {
        display: 'grid',
        gridTemplateColumns: 'repeat(8, minmax(0, 1fr))',
        gap: '8px'
    },

    jadeImage: {
        height: '20px',
        width: '20px',
    },

    box: {
        padding: '6px 6px',
        backgroundColor: tokens.colorBgQuinary,
        color: tokens.colorTextSecondary,
        borderRadius: '4px'
    },

    image: {
        alignSelf: 'center',
        margin: '0',
        height: '40px',
        width: '40px',
        borderRadius: '4px'
    }
})