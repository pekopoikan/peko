/* Libraries */
import * as stylex from '@stylexjs/stylex'
/* Style */
import { tokens } from '@/app/tokens.stylex'

export const navStyle = stylex.create({
    base: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        height: '100%',
        padding: '14px 8px',
        overflowY: 'auto',
        scrollbarGutter: 'stable',
    },

    item: {
        display: 'flex',
        gap: '8px',
        alignItems: 'center',
        padding: '6px',
        color: tokens.colorTextSecondary,
        background: {
            default: 'none',
            ':hover': tokens.sidebarBgPrimary
        },
        borderRadius: '4px',
        transition: 'background .2s ease-in-out',
        cursor: 'pointer'
    },

    icon: {
        width: '18px',
        height: '18px',
        color: tokens.colorTextTertiary
    },
})