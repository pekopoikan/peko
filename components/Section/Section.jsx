import * as stylex from '@stylexjs/stylex'
import { sectionStyle } from './SectionStyle'

export default function Section({
    title,
    description,
    children
}) {
    return (
        <section {...stylex.props(sectionStyle.base)}>
            <text {...stylex.props(sectionStyle.title)}>{title}</text>
            <text {...stylex.props(sectionStyle.description)}>{description}</text>
            {children}
            <div {...stylex.props(sectionStyle.divider)} />
        </section>
    )
}