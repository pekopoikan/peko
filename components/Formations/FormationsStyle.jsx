/* Libraries */
import * as stylex from '@stylexjs/stylex'
/* Style */
import { tokens } from '@/app/tokens.stylex'

export const formationsStyle = stylex.create({
    base: {
        display: 'grid',
        gridTemplateColumns: {
            default: 'repeat(2, minmax(0, 1fr))',
            '@media only screen and (max-width: 1400px)': 'repeat(1, minmax(0, 1fr))',
        },
        gap: '8px',
        margin: '30px',
        overflow: 'hidden',
        overflowY: 'auto',
    },

    card: {
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        background: tokens.colorBgQuinary,
        borderRadius: '4px',
        padding: '8px',
    },

    cardHeader: {
        display: 'flex',
        flexDirection: 'column',
        gap: '18px',
    },

    ninjas: {
        flex: '1',
        display: 'grid',
        justifyContent: 'space-between',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gridTemplateRows: 'repeat(2, 1fr)',
        gap: '4px',
    },

    box: {
        display: 'flex',
        alignItems: 'center',
        padding: '4px',
        borderRadius: '4px',
        background: {
            default: 'none',
            ':hover': tokens.colorBgQuaternary
        },
        transition: 'background .2s ease-in-out',
        cursor: 'pointer',
        minWidth: '0'
    },

    avatar: {
        width: '42px',
        height: '42px',
        borderRadius: '50%',
        cursor: 'pointer'
    },

    ninjaAvatar: {
        height: '20px',
        width: '20px',
        borderRadius: '50%'
    },

    text: {
        color: tokens.colorTextSecondary,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
    },

    title: {
        color: tokens.colorTextPrimary
    },
    
    creator: {
        color: tokens.colorTextSecondary
    },

    row: {
        display: 'flex',
        gap: '8px',
    },

    icon: {
        color: tokens.colorTextSecondary,
        height: '16px',
        width: '16px'
    }
})