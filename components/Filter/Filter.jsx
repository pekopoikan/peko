/* Libraries */
import { useEffect, useState } from 'react'
import * as stylex from '@stylexjs/stylex'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
/* Style */
import './FilterStyle.css'
import { filterStyle } from './FilterStyle'
import { dropdownStyle } from '../Dropdown/DropdownStyle'

/* Constants */
const isOptions = ['is', 'is not']
const typeOptions = ['Cc', 'Dps', 'Tank', 'Air']

export default function Filter({
    store
}) {
    const [is, setIs] = useState(isOptions[0])
    const [type, setType] = useState(typeOptions[0])

    useEffect(() => { store.setIs(is) }, [is])

    useEffect(() => { store.setType(type) }, [type])

    /**
     * @param {string} parent - Text to be displayed BEFORE clickable button
     * @param {{ list: [string], updater: (string) => void }, state: string} options - Array of Objects containing information about clickable buttons
     */
    var filters = [
        {
            title: 'Formation',
            options: [{list: [...isOptions], updater: setIs, state: is}]
        },
        {
            title: 'of type',
            options: [{list: [...typeOptions], updater: setType, state: type}]
        }
    ]

    return (
        <div {...stylex.props(filterStyle.base)}>
            <div className={'filter'}>
                {filters.map((filter, key) => (
                    <>
                    {filter.title && <div {...stylex.props(filterStyle.option, filterStyle.disabled)} key={key}>{filter.title}</div>}

                    {filter.options.map((option, key) => (
                        <DropdownMenu.Root key={key}>
                            <DropdownMenu.Trigger {...stylex.props(filterStyle.option, filterStyle.selectable)}>{option.state}</DropdownMenu.Trigger>
                            <DropdownMenu.Portal>
                                <DropdownMenu.Content {...stylex.props(dropdownStyle.content, filterStyle.content)}>
                                    {option.list.map((item, key) => (
                                        <DropdownMenu.Item {...stylex.props(dropdownStyle.item)} onClick={() => option.updater(item)} key={key}>{item}</DropdownMenu.Item>
                                    ))}
                                </DropdownMenu.Content>
                            </DropdownMenu.Portal>
                        </DropdownMenu.Root>
                    ))}
                    </>
                ))}
            </div>
        </div>
    )
}