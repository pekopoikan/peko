import * as stylex from '@stylexjs/stylex'
import { tokens } from '@/app/tokens.stylex'

export const sectionStyle = stylex.create({
    base: {
        display: 'flex',
        flexDirection: 'column',
        gap: '8px'
    },

    title: {
        color: tokens.colorTextPrimary,
        fontSize: '1.2rem'
    },

    description: {
        color: tokens.colorTextTertiary
    },

    divider: {
        margin: '16px 0px',
        height: '1px',
        width: '100%',
        background: tokens.colorBgSecondary
    }
})