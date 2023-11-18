'use client'
import React from 'react'
import GraphCard from './GraphCard'
import { useAppContext } from '../context/AppContext'


const GraphsPool = () => {
    const { filteredCards } = useAppContext()

    return (
        <div className='flex mt-5 gap-10 m-auto flex-wrap'>
            {filteredCards.map(c => <GraphCard key={c.graph_id} data={c} />)}
        </div>
    )
}

export default GraphsPool