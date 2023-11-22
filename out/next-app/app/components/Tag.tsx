'use client'
import React from 'react'
import { useAppContext } from '../context/AppContext'

const Tag = ({ val, disabled }: { val: string, disabled?: boolean }) => {
    const { selectedTags, toggleTag } = useAppContext()
    const tagClick = (e: any) => {
        if (!disabled) {
            toggleTag(val);
            e.stopPropagation();
        }
    }
    return (
        <div onClick={tagClick}
            className={`no-select ${!disabled && 'hover:animate-bounce2 cursor-pointer'} ${selectedTags.has(val) ?
                'text-sns-light-blue bg-sns-dark-blue' :
                'bg-sns-light-blue text-sns-dark-blue'}
            shadow-xl rounded-lg p-1 transition-colors`}>
            {val}
        </div>
    )
}

export default Tag