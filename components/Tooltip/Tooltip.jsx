/* Libraries */
import * as stylex from '@stylexjs/stylex'
import * as Tip from '@radix-ui/react-tooltip'
/* Style */
import { tooltipStyle } from './TooltipStyle'

export default function Tooltip({
    text,
    children
}) {
    return (
        <Tip.Provider>
            <Tip.Root>
                <Tip.Trigger asChild>
                    {children}
                </Tip.Trigger>
                <Tip.Portal>
                    <Tip.Content {...stylex.props(tooltipStyle.base)} side='bottom' sideOffset={5}>
                        {text}
                    </Tip.Content>
                </Tip.Portal>
            </Tip.Root>
        </Tip.Provider>
    )
}