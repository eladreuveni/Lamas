import { TextField, TextFieldProps, styled } from '@mui/material';
import React from 'react'

const MyTextField = styled((props: TextFieldProps) => (
    <TextField
        InputLabelProps={{
            shrink: false,
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiFormLabel-root': {
        'left': 'unset',
        'right': '27px'
    },
}));

const SearchTextField = ({ ...props }) => {
    return (
        <MyTextField {...props} />
    )
}

export default SearchTextField