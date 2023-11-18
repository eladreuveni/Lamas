import React from 'react'

function TopBar() {
    return (
        <menu className='w-full h-16 px-10 flex justify-between items-center bg-sns-light-blue shadow-xl'>
            <span className='text-2xl font-semibold no-select'>אלעד משחק בנתונים של הלמ"ס</span>
            <img src="/icons/elad.svg" alt="me" className='h-full hover:animate-waves' />
        </menu>
    )
}

export default TopBar