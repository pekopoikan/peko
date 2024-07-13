/* Libraries */
import * as stylex from '@stylexjs/stylex'
import { observer } from 'mobx-react'
import { motion } from 'framer-motion'
/* Components */
import Loader from '../Loader/Loader'
import Tooltip from '../Tooltip/Tooltip'
/* Stores */
import formationStore from '@/stores/FormtationStore'
/* Styles */
import { gearStyle } from './NinjaGearStyle'

const NinjaGear = observer(() => {
    return (
        <div {...stylex.props(gearStyle.base)}>
            {!formationStore.activeNinja && <Loader />}
            {formationStore.activeNinja && (
                <div {...stylex.props(gearStyle.col)}>
                    <div {...stylex.props(gearStyle.title)}>Equipment</div>
                    <div {...stylex.props(gearStyle.equipment)}>
                        {formationStore.activeNinja.teamninja_gear.map((gear, key) => (
                            <div {...stylex.props(gearStyle.col)} key={key}>
                                <div {...stylex.props(gearStyle.col)}>
                                    <motion.img
                                        {...stylex.props(gearStyle.image)}
                                        src={gear.gear.gear_image}
                                        initial={{scale: 0}}
                                        animate={{scale: 1}}
                                    />
                                    <div {...stylex.props(gearStyle.box, gearStyle.title)}>{gear.gear.gear_name}</div>
                                </div>
                                <div {...stylex.props(gearStyle.box)}>
                                    <motion.div
                                        {...stylex.props(gearStyle.jades)}
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
                                        {gear.jades.map((jade, key) => (
                                            <Tooltip text={jade.jade.jade_name}>
                                                <motion.img
                                                    {...stylex.props(gearStyle.jadeImage)}
                                                    src={jade.jade.jade_image}
                                                    variants={{
                                                        hidden: { y: 20, opacity: 0},
                                                        visible: { y: 0, opacity: 1},
                                                    }}
                                                />
                                            </Tooltip>
                                        ))}
                                    </motion.div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div {...stylex.props(gearStyle.title)}>Accessory</div>
                    <div {...stylex.props(gearStyle.accessory)}>
                        {formationStore.activeNinja.teamninja_accessory.map((accessory, key) => (
                            <div {...stylex.props(gearStyle.col)}>
                                <img {...stylex.props(gearStyle.image)} src={accessory.accessory.accessory_image} />
                                <div {...stylex.props(gearStyle.box, gearStyle.title)}>
                                    {accessory.accessory.accessory_name}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
})

export default NinjaGear