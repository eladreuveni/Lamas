'use client'
import GraphsPool from './GraphsPool'
import Search from './Search'
import { useAppContext } from '../context/AppContext'
import GraphCard from './GraphCard'

const Content = () => {
    const { selectedCard, setSelectedCard } = useAppContext()


    return (
        <>
            <div className='m-auto w-11/12'>
                <h1>כותרת</h1>
                <Search />
                <GraphsPool />
            </div>
            {selectedCard && <div onClick={() => setSelectedCard(null)} className='w-full h-full fixed top-0 bottom-0 bg-black bg-opacity-50'>
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10/12'>
                    <GraphCard fullSize={true} data={selectedCard} />
                </div>
            </div>}
        </>
    )
}

export default Content