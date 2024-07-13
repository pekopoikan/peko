/* Libraries */
import * as stylex from '@stylexjs/stylex'
import { observer } from 'mobx-react'
import { motion, AnimatePresence } from 'framer-motion'
/* Components */
import Nav from '../Nav/Nav'
import NinjaGear from '../NinjaGear/NinjaGear'
/* Style */
import { layoutStyle } from './LayoutStyle'

export default function Layout({
    children
}) {
    return (
        <div {...stylex.props(layoutStyle.base)}>
            <div {...stylex.props(layoutStyle.nav)}>
                <Nav />
            </div>
            <div {...stylex.props(layoutStyle.content)}>
                {children}
            </div>
            <div {...stylex.props(layoutStyle.ninjagear)}>
                <NinjaGear />
            </div>
        </div>
    )
}