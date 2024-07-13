/* Libraries */
import { useState, useCallback, useEffect } from 'react';
import * as stylex from '@stylexjs/stylex'
import { IconSearch, IconSquareRoundedMinus } from '@tabler/icons-react';
/* Style */
import { inputStyle } from './InputStyle';

/**
 * 
 * @param {string} placeholder - Placeholder text 
 * @param {(string) => void } onType - Function to be called when user types something
 * @returns 
 */
export default function Input({
    placeholder,
    onType
}) {
    const [input, setInput] = useState('')

    /**
     * @param {string} userInput
     */
    const onUserInput = useCallback((userInput) => {
        setInput(userInput)
    }, [])

    useEffect(() => {
        onType(input)
    }, [input])

    return (
        <div {...stylex.props(inputStyle.base)}>
            {input
                ? <IconSquareRoundedMinus
                    {...stylex.props(inputStyle.icon, inputStyle.iconClickable)}
                    onClick={() => onUserInput('')} />
                : <IconSearch {...stylex.props(inputStyle.icon)} />
            }

            <input
                {...stylex.props(inputStyle.input)}
                placeholder={placeholder}
                value={input}
                onChange={(userInput) => setInput(userInput.target.value)}
            />
        </div>
    )
}