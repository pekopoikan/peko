/* Libraries */
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import * as stylex from '@stylexjs/stylex'
import { IconSquare, IconSquareRoundedChevronDown } from '@tabler/icons-react'
/* Style */
import { dropdownStyle } from './DropdownStyle'

/**
 * 
 * @param {string=} imgSrc - Url of the image to display next to the text **make sure it is a media.pekopoikan.com img**
 * @param {string} text - Dropdown text
 * @param {[{text: string, onClick: () => void}]} items - Dropdown items
 * @returns 
 */
export default function Dropdown({
    imgSrc = null,
    text,
    items
}) {
    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger {...stylex.props(dropdownStyle.trigger)}>
                { imgSrc && <img {...stylex.props(dropdownStyle.avatar)} src={imgSrc} /> }
                <text>{text}</text>
                <IconSquareRoundedChevronDown {...stylex.props(dropdownStyle.icon)} />
            </DropdownMenu.Trigger>
            <DropdownMenu.DropdownMenuPortal>
                {items && (
                <DropdownMenu.Content {...stylex.props(dropdownStyle.content)}>
                    {items.map((item, key) => (
                        <DropdownMenu.Item {...stylex.props(dropdownStyle.item)} onClick={item.onClick} key={key}>{item.text}</DropdownMenu.Item>
                    ))}
                </DropdownMenu.Content>
                )}
            </DropdownMenu.DropdownMenuPortal>
        </DropdownMenu.Root>
    )
}