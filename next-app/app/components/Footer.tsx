'use client'
import React from 'react'
import HrefIcon from './HrefIcon'
import { useAppContext } from '../context/AppContext'

const Footer = () => {
    const { selectedCard } = useAppContext()
    const menuCN = selectedCard ? '-bottom-10' : 'bottom-0'
    return (
        <menu className={`${menuCN} transition-all duration-1000 fixed w-full h-10 px-10 flex justify-between items-center bg-sns-light-blue`}>
            <div className='h-full flex gap-5 items-center'>
                <span className='text-2xl font-bold no-select'>צרו איתי קשר: </span>
                <HrefIcon href='https://github.com/eladreuveni/Lamas' src='/icons/github.svg' alt="github" />
                <HrefIcon href='https://twitter.com/elado_blanco' src='/icons/x-twitter.svg' alt="twitter" />
                <HrefIcon href='mailto:elad.reuveni.7@gmail.com' src='/icons/email.svg' alt="email" />
                <HrefIcon href='https://www.linkedin.com/in/elad-reuveni-124609189/' src='/icons/linkedin.svg' alt="linkedin" />
            </div>
            <div className='flex flex-col justify-center items-center text-xs no-select'>
                <span>Ⓒ כל הזכויות שמורות לאלעד ראובני Ⓒ</span>
                <span>*הנתונים לקוחים מסקר הוצאות משקי בית בין השנים 2012-2021, הלמ&quot;ס*</span>
            </div>
        </menu>
    )
}

export default Footer