/* Libraries */
import * as stylex from '@stylexjs/stylex'
import { motion } from 'framer-motion'
/* Style */
import { bubbleStyle } from './ChatBubbleStyle'

export default function ChatBubble({
    text
}) {
    return (
        <motion.div
            {...stylex.props(bubbleStyle.base) }
            variants={{
                visible: {
                    transition: {
                        delayChildren: 0.3,
                        staggerChildren: 0.2
                    }
                }
            }}
            initial='hidden'
            animate='visible'
        >
            <motion.span {...stylex.props(bubbleStyle.bubbleSmall) } variants={{hidden: { scale: 0, opacity: 0}, visible: { scale: 1, opacity: 1}}}/>
            <motion.span {...stylex.props(bubbleStyle.bubbleBig)} variants={{hidden: { scale: 0, opacity: 0}, visible: { scale: 1, opacity: 1}}}/>
            <motion.div {...stylex.props(bubbleStyle.description)} variants={{hidden: { scale: 0, opacity: 0}, visible: { scale: 1, opacity: 1}}}>{text}</motion.div>
        </motion.div>
    )
}