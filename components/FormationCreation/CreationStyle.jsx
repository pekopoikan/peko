import * as stylex from '@stylexjs/stylex'
import { tokens } from '@/app/tokens.stylex'

export const creationStyle = stylex.create({
    base: {
        margin: '80px',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        overflow: 'hidden',
        overflowY: 'auto'
    },

    input: {
        width: '100%',
        padding: '8px',
        background: 'none',
        border: 'none',
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: tokens.colorBorderSecondary,
        borderRadius: '4px',
        outline: 'none',
        color: tokens.colorTextPrimary
    },

    row: {
        width: '100%',
        display: 'flex',
        gap: '16px',
        alignItems: 'center'
    },

    col: {
        display: 'flex',
        flexDirection: 'column',
        gap: '8px'
    },

    setup: {
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        padding: '16px',
        background: tokens.colorBgQuaternary,
        borderStyle: 'solid',
        borderWidth: '1px',
        borderRadius: '4px',
        borderColor: tokens.colorBorderSecondary
    },

    setupTitle: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '8px',
        background: tokens.colorBgTertiary,
        color: tokens.colorTextTertiary,
        borderRadius: '4px'
    },

    setupIcon: {
        width: '8px',
        height: '8px',
    },

    setupIconContainer: {
        color: tokens.colorTextTertiary,
        display: 'flex',
        alignContent: 'center',
        backgroundColor: {
            default: 'none',
            ':hover': tokens.colorBgSecondary
        },
        padding: '4px',
        borderRadius: '4px',
        cursor: 'pointer',
        transition: 'all .2s ease-in-out'
    },
    
    ninjaImage: {
        height: '35px',
        width: '35px',
        borderRadius: '4px',
        borderStyle: 'solid',
        borderWidth: '2px',
        borderColor: tokens.colorBorderSecondary
    }
})