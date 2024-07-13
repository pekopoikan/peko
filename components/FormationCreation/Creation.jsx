/* Libraries */
import * as stylex from '@stylexjs/stylex'
import { IconPlus } from '@tabler/icons-react'
import { AnimatePresence } from 'framer-motion'
/* Component */
import Section from '../Section/Section'
import Dropdown from '../Dropdown/Dropdown'
/* Style */
import { creationStyle } from './CreationStyle'
import { useState } from 'react'
import Input from '../Input/Input'
import prisma from '@/lib/prisma'

export default function FormationCreation() {
    const [ninjas, setNinjas] = useState(false)

    const [search, setSearch] = useState('')

    const [aninja, setNinja] = useState(null)

    const onNinjaSearch = async (name) => {
        const ninja = await prisma.ninja.findUnique({
            where: {
                ninja_name: name
            }
        })

        if (ninja) setNinja(ninja)
    }

    return (
        <div {...stylex.props(creationStyle.base)}>
            <Section title='Formation Name' description='Choose the name for your Formation, make sure it is related to the game'>
                <input {...stylex.props(creationStyle.input)} placeholder='Formation Name' />
            </Section>
            <Section title='Quick Info' description='Set the type of the Formation and indicate if its currently meta or not'>
                <div {...stylex.props(creationStyle.row)}>
                    <Dropdown
                        text='Formation Meta'
                        items={[{text: 'Meta', onClick: () => {}}, {text: 'Not Meta', onClick: () => {}}]}
                    />
                    <Dropdown
                        text='Formation Type'
                        items={[{text: 'Cc', onClick: () => {}}, {text: 'Air', onClick: () => {}}]}
                    />
                </div>
            </Section>
            <Section title='Set up' description='Choose the Ninjas, Gear and the incrusted jades for your desired Formation'>
                <div {...stylex.props(creationStyle.setup)}>
                    <div {...stylex.props(creationStyle.col)}>
                        <div {...stylex.props(creationStyle.setupTitle)}>
                            <text>Ninjas</text>
                        </div>
                        <div {...stylex.props(creationStyle.row)}>
                            <img {...stylex.props(creationStyle.ninjaImage)} src='https://avatars.githubusercontent.com/u/74865146?v=4' />
                            <input {...stylex.props(creationStyle.input)} placeholder='Ninja name' onChange={(e) => setNinja(e.target)}/>
                            <div {...stylex.props(creationStyle.setupIconContainer)} onClick={() => setNinjas(!ninjas)}>
                                <IconPlus size={24} />
                            </div>
                        </div>
                    </div>
                    <div {...stylex.props(creationStyle.setupTitle)}>
                        <text>Equipment</text>
                        <div {...stylex.props(creationStyle.setupIconContainer)}>
                            <IconPlus size={14} />
                        </div>
                    </div>
                    <div {...stylex.props(creationStyle.setupTitle)}>
                        <text>Accessories</text>
                        <div {...stylex.props(creationStyle.setupIconContainer)}>
                            <IconPlus size={14} />
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    )
}