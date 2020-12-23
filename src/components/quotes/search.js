import React from 'react'
import { TextField } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';

const Search = ({ changeSearch }) => {
    return (
        <div className="searchClass">
            <SearchIcon ></SearchIcon>
            <TextField
                id="standard-basic"
                placeholder="Search quotes"
                onChange={changeSearch} />
        </div>
    )
}

export default Search
