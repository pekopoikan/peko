/* Libraries */
import * as stylex from '@stylexjs/stylex'
/* Style */
import { tokens } from '@/app/tokens.stylex'

export const inputStyle = stylex.create({
    base: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        width: '100%',
        height: '39px',
        minHeight: '39px',
        padding: '0 30px',
        borderBottomStyle: 'solid',
        borderBottomWidth: '1px',
        borderBottomColor: tokens.colorBorderSecondary,
    },

    input: {
        flexGrow: '1',
        background: 'none',
        border: 'none',
        outline: 'none',
        color: tokens.colorTextPrimary
    },

    icon: {
        width: '16px',
        height: 'auto',
        color: tokens.colorTextTertiary
    },

    iconClickable: {
        cursor: 'pointer'
    }
})
