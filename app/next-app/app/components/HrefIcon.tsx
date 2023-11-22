import Image from 'next/image'
import React from 'react'

type Props = {
    href: string
    src: string
    alt: string
}

const HrefIcon = ({ href, src, alt }: Props) => {
    return (
        <span className='h-full p-1 hover:animate-pulse'>
            <a href={href} target='_blank'>
                <Image src={src} alt={alt} className='h-full' />
            </a>
        </span>
    )
}

export default HrefIcon