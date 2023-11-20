'use client'
import { Card } from '@mui/material'
import GraphExplanation from './GraphExplanation'
import { useAppContext } from '../context/AppContext';

const classes = {
    card: {
        full: 'z-10 h-fit w-fit p-5 flex gap-5',
        mini: 'cursor-pointer w-80 h-80'
    },
    imgCont: {
        full: 'basis-3/5',
        mini: 'w-full h-1/2'
    },
    expCont: {
        full: 'basis-2/5',
        mini: 'px-1 pt-2'
    }
}

interface Props {
    fullSize?: boolean;
    data: GraphData;
}

const GraphCard = ({ fullSize, data }: Props) => {
    const { setSelectedCard } = useAppContext();
    const cIndex = fullSize ? 'full' : 'mini'; // classes index

    return (
        <Card sx={{ boxShadow: 10 }} onClick={() => { !fullSize && setSelectedCard(data) }} className={classes.card[cIndex]}>
            {fullSize && <img onClick={(e) => { console.log(e); setSelectedCard(null) }}
                className='cursor-pointer fixed top-2 left-2 w-5 h-5'
                src='/icons/x.svg' alt="x" />}
            <div className={` ${classes.imgCont[cIndex]}`}>
                <img src={data.img_path} alt='' className={'h-full w-full'} />
            </div>
            <div className={`flex flex-col gap-2 ${classes.expCont[cIndex]}`}>
                <GraphExplanation fullSize={fullSize} data={data} />
            </div>
        </Card>
    )
}

export default GraphCard