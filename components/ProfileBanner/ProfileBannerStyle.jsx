import * as stylex from '@stylexjs/stylex'
import { tokens } from '@/app/tokens.stylex'

export const bannerStyle = stylex.create({
    base: {
        margin: '20px',
        height: '200px',
        position: 'relative',
        borderRadius: '0.8em',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        marginBottom: '100px'
    },

    picture: {
        position: 'absolute',
        height: '160px',
        width: '160px',
        borderRadius: '50%',
        borderWidth: '6px',
        borderColor: tokens.colorBgPrimary,
        borderStyle: 'solid',
        left: '70px',
        top: '100px',
    },

    description: {
        width: 'auto',
        position: 'absolute',
        left: '230px',
        top: '250px',
    }
})