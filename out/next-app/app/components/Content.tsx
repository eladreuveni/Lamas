'use client'
import GraphsPool from './GraphsPool'
import Search from './Search'
import { useAppContext } from '../context/AppContext'
import GraphCard from './GraphCard'
import { MouseEventHandler, useRef } from 'react'

const Content = () => {
    const { selectedCard, setSelectedCard } = useAppContext();
    const cardRef = useRef<HTMLDivElement>(null);

    const clicked = (e: any) => {
        if (!(cardRef.current?.contains(e.target))) setSelectedCard(null);
    }

    return (
        <>
            <div className='m-auto w-11/12 mt-6'>
                <Search />
                <GraphsPool />
            </div>
            {selectedCard && <div onClick={clicked} className='w-full h-full fixed top-0 bottom-0 bg-black bg-opacity-50'>
                <div ref={cardRef} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10/12'>
                    <GraphCard fullSize={true} data={selectedCard} />
                </div>
            </div>}
        </>
    )
}

export default Content