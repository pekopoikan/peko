/* Libraries */
import { observer } from 'mobx-react'
import * as stylex from '@stylexjs/stylex'
import { IconMoodUp, IconMoodMinus, IconSword, IconShield, IconTornado, IconSpiral } from '@tabler/icons-react'
import { useScroll } from 'framer-motion'
/* Style */
import { formationsStyle } from './FormationsStyle'
import { useRouter } from 'next/router'
import Tooltip from '../Tooltip/Tooltip'

function FormationCard({
    store,
    formation
}) {
    const router = useRouter()

    return (
        <div {...stylex.props(formationsStyle.card)}>
            <Tooltip text='Visit profile'>
                <img {...stylex.props(formationsStyle.avatar)} src={formation.formation_profile.profile_picture} onClick={() => router.push(`/profile/${formation.formation_creator}`)}/>
            </Tooltip>
            <div {...stylex.props(formationsStyle.cardHeader)}>
                <text {...stylex.props(formationsStyle.text, formationsStyle.title)}>{formation.formation_title}</text>
                <text {...stylex.props(formationsStyle.creator, formationsStyle.text)}>{formation.formation_creator}</text>
            </div>
            <div {...stylex.props(formationsStyle.cardHeader)}>
                <div {...stylex.props(formationsStyle.row)}>
                    {formation.formation_type == 'Cc' && <IconSpiral {...stylex.props(formationsStyle.icon)} />}
                    {formation.formation_type == 'Air' && <IconTornado {...stylex.props(formationsStyle.icon)} />}
                    {formation.formation_type == 'Tank' && <IconShield {...stylex.props(formationsStyle.icon)} />}
                    {formation.formation_type == 'Dps' && <IconSword {...stylex.props(formationsStyle.icon)} />}
                    <span {...stylex.props(formationsStyle.creator)}>{formation.formation_type}</span>
                </div>
                <div {...stylex.props(formationsStyle.row)}>
                    <IconMoodUp {...stylex.props(formationsStyle.icon)} />
                    <span {...stylex.props(formationsStyle.creator)}>Meta</span>
                </div>
            </div>
            <div {...stylex.props(formationsStyle.ninjas)}>
                {formation.formation_team.map((team, key) => (
                    <div {...stylex.props(formationsStyle.box, formationsStyle.row)} key={key} onClick={() => store.setActiveNinja(team)}>
                        <img {...stylex.props(formationsStyle.ninjaAvatar)} src={team.teamninja_ninja.ninja_image} />
                        <span {...stylex.props(formationsStyle.text)}>{team.teamninja_ninja.ninja_name}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

const Formations = observer(({
    store
}) => {
    return (
        <div {...stylex.props(formationsStyle.base)}>
            {store.filteredFormations.map((formation, key) => (
                <FormationCard store={store} formation={formation} />
            ))}
        </div>
    )
})

export default Formations