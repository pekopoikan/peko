/* Libraries */
import * as stylex from '@stylexjs/stylex'
import { IconListSearch, IconCubePlus } from '@tabler/icons-react'
/* Components */
import { default as ProfileDropdown } from '../Dropdown/Dropdown'
/* Style */
import { navStyle } from './NavStyle'
import { useRouter } from 'next/router'

/**
 * Navigation Item
 * @param {JSX.Element=} Icon - Icon to display next to the text
 * @param {string=} text - Text of the item, should be the name of the page or related
 * @constructor
 */
function NavItem({
    Icon = null,
    text,
    link
}) {
    const router = useRouter()

    return (
        <div {...stylex.props(navStyle.item)} onClick={() => router.push(link)}>
            {Icon && <Icon {...stylex.props(navStyle.icon)} />}
            {text && <a>{text}</a>}
        </div>
    )
}

/**
 * Nav component
 * @constructor 
 */
export default function Nav() {
    return (
        <nav {...stylex.props(navStyle.base)}>
            <ProfileDropdown text='Pekopoikan' imgSrc='https://media.pekopoikan.com/dexbackground.jpg'
                items={
                    [{text: 'Profile Settings', onClick: () => {}}, {text: 'View Profile', onclick: () => {}}]
                }
                />
            <NavItem Icon={IconListSearch} text='Browse Formations' link='/' />
            <NavItem Icon={IconCubePlus} text='Create Formation' link='/create' />
        </nav>
    )
}