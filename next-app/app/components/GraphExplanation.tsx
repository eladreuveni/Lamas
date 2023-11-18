import Image from 'next/image';
import Tag from './Tag';
import CaretLeft from './icons/caret-left.svg'
import Lightbulb from './icons/lightbulb.svg'

interface Props {
    fullSize?: boolean;
    data: GraphData;
}
const GraphExplanation = ({ fullSize, data }: Props) => {
    const tagsClasses = fullSize ? 'order-3 self-center' : '';
    const titleClasses = fullSize ? 'font-semibold text-2xl pb-5' : '';

    return (
        <>
            <div className={`flex flex-wrap gap-2 ${tagsClasses} flex-1 items-end`}>
                {data.tags.map(tag => <Tag key={tag} val={tag} disabled={fullSize} />)}
            </div>
            <div className={`${titleClasses} flex items-start gap-2 text-right`}>
                {!fullSize && <Image className='w-4' priority src={CaretLeft} alt="title" />}
                {data.text}
            </div>
            {fullSize ? <div className=''>
                {data.insights.map(ins => <div className='flex items-start gap-2 py-2 text-right'>
                    <Image className='w-4' priority src={Lightbulb} alt="insight" />
                    <span className=''>{ins}</span>
                </div>)}
            </div> : ''}
        </>
    )
}

export default GraphExplanation