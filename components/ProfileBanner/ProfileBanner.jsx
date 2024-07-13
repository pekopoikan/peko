/* Libraries */
import * as stylex from '@stylexjs/stylex'
import { motion } from 'framer-motion'
/* Components */
import ChatBubble from '../ChatBubble/ChatBubble'
/* Style */
import { bannerStyle } from './ProfileBannerStyle'

export default function ProfileBanner({
    profile
}) {
    return (
        <div {...stylex.props(bannerStyle.base)} style={{ backgroundImage: `url(${profile.profile_background}`}}>
            <motion.img src={profile.profile_picture} {...stylex.props(bannerStyle.picture)} initial={{scale: 0}} animate={{scale: 1}}/>
            <div {...stylex.props(bannerStyle.description)}>
                <ChatBubble text={profile.profile_description} />
            </div>
        </div>
    )
}