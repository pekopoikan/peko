/* Libraries */
import * as stylex from '@stylexjs/stylex'
/* Style */
import { tokens } from '@/app/tokens.stylex'

export const dropdownStyle = stylex.create({
    content: {
        minWidth: '220px',
        backgroundColor: tokens.colorBgSecondary,
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: tokens.colorBorderQuaternary,
        borderRadius: '8px',
        boxShadow: 'rgba(0, 0, 0, 0.184) 0px 3px 8px, rgba(0, 0, 0, 0.184) 0px 2px 5px, rgba(0, 0, 0, 0.184) 0px 1px 1px'
    },

    /* Treat it as a button */
    trigger: {
        display: 'flex',
        flex: '0 1 1',
        gap: '8px',
        alignItems: 'center',
        padding: '6px',
        color: tokens.colorTextSecondary,
        background: {
            default: 'none',
            ':hover': tokens.sidebarBgPrimary,
        },
        border: 'none',
        borderRadius: '4px',
        transition: 'background .2s ease-in-out',
        cursor: 'pointer',
        outline: 'none'
    },

    item: {
        margin: '4px',
        padding: '8px',
        background: {
            default: 'none',
            ':hover': tokens.colorBgSixnary,
        },
        transition: 'all .2s ease',
        outline: 'none',
        borderRadius: '8px',
        color: {
            default: tokens.colorTextSecondary,
            ':hover': tokens.colorTextPrimary
        },
        cursor: 'pointer',
        fontSize: '0.85rem'
    },

    separator: {
        height: '1px',
        backgroundColor: tokens.colorBorderQuaternary
    },

    icon: {
        width: '16px',
        height: 'auto'
    },
    
    avatar: {
        width: '20px',
        height: 'auto',
        borderRadius: '50%'
    }
})