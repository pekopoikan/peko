/* Libraries */
import * as stylex from '@stylexjs/stylex'
/* Style */
import { tokens } from '@/app/tokens.stylex'

export const filterStyle = stylex.create({
    base: {
        width: '100%',
        height: '39px',
        minHeight: '39px',
        padding: '0 30px',
        borderBottomStyle: 'solid',
        borderBottomWidth: '1px',
        borderBottomColor: tokens.colorBorderSecondary,
    },

    content: {
        minWidth: '100px'
    },

    option: {
        padding: '4px 6px',
        background: tokens.colorBgSecondary,
        color: tokens.colorTextSecondary,
        fontSize: '0.8rem',
        border: 'none',
        outline: 'none',
    },

    selectable: {
        cursor: 'pointer',
        background: {
            default: tokens.colorBgSecondary,
            ':hover': tokens.colorBgTertiary
        }
    },

    disabled: {
        color: tokens.colorTextTertiary,
    },
})