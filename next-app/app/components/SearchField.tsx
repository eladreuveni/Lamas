import { TextField, TextFieldProps, styled } from '@mui/material';
import React, { useState } from 'react'
import { useAppContext } from '../context/AppContext';
import Image from 'next/image';
// import SearchIcon from '@mui/icons-material/Search';

const MyTextField = styled((props: TextFieldProps) => (
    <TextField
        value={props.value}
        InputLabelProps={{
            shrink: false,
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiFormLabel-root': {
        'left': 'unset',
        'right': '27px',
    },
}));

const SearchField = () => {
    const [searchVal, setSearchVal] = useState('');
    const { setSearchText: search, setSelectedCard, filteredCards } = useAppContext()

    const type = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchVal(e.target.value);
    }
    const randomCard = () => {
        const rand = Math.floor(Math.random() * filteredCards.length);
        setSelectedCard(filteredCards[rand])
    }
    return (
        <div className='flex items-center gap-3'>
            <MyTextField
                onChange={type}
                onKeyDown={(e) => { (e.key === 'Enter') && search(searchVal) }}
                value={searchVal}
                className='flex-1 text-right'
                placeholder="פה מחפשים"
                variant="outlined"
            />
            <Image onClick={() => search(searchVal)} src="/icons/search.svg" alt="חיפוש" className='cursor-pointer h-8' />
            <Image onClick={randomCard} src="/icons/random.png" alt="רנדומלי" className='cursor-pointer h-10' />
        </div>
    )
}

export default SearchField