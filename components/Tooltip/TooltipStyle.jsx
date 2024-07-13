/* Libraries */
import * as stylex from '@stylexjs/stylex'
/* Style */
import { tokens } from '@/app/tokens.stylex'

export const tooltipStyle = stylex.create({
    base: {
        padding: '4px 6px',
        borderRadius: '4px',
        backgroundColor: tokens.colorBgQuaternary,
        color: tokens.colorTextSecondary,
        fontSize: '0.75rem',
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: tokens.colorBorderTertiary
    }
})