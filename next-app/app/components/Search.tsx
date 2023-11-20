'use client'
import { TextField } from '@mui/material'
import React, { useState } from 'react'
import { useAppContext } from '../context/AppContext';
import Tag from './Tag';
import SearchField from './SearchField';

const Search = () => {
    const { allTags } = useAppContext();
    return (
        <div className='flex justify-between items-center'>
            <h1 className='basis-1/5 font-semibold text-xl'>אלו הגרפים המגניבים שלי</h1>
            <SearchField />
            <div className='basis-2/5 flex items-center justify-center flex-wrap gap-2'>
                {Array.from(allTags).map(t => <Tag key={t} val={t} />)}
            </div>
        </div>
    )
}

export default Search