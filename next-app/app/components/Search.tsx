'use client'
import { TextField } from '@mui/material'
import React from 'react'
import { useAppContext } from '../context/AppContext';
import Tag from './Tag';
import SearchTextField from './SearchTextField';

const Search = () => {
    const { allTags } = useAppContext();
    return (
        <div className='flex items-center gap-2'>
            <SearchTextField className='text-right w-1/4' placeholder="מחפשים פה" variant="outlined" />
            {Array.from(allTags).map(t => <Tag key={t} val={t} />)}
        </div>
    )
}

export default Search