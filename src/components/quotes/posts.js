import React, { useState } from 'react'
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Search from './search';



function Posts({ items, loading }) {
    const [search, setSearch] = useState('')

    const changeSearch = (e) => {
        setSearch(e.target.value)
        console.log(e.target.value);

    }

    if (loading) {
        return <h2>Loading .....</h2>
    }

    return (

        <div>
            <Search changeSearch={changeSearch} />


            <TableContainer component={Paper}>
                <Table aria-label="caption table">
                    <TableHead color="secondary" variant="occupied">
                        <TableRow>
                            <TableCell>Quotes</TableCell>
                            <TableCell align="right">Author</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {items.filter((val) => {
                            if (search == "") {
                                return val
                            }
                            else if (val.text.toLowerCase().includes(search.toLowerCase())) {
                                return val
                            }
                        }).map((item) => (
                            <TableRow key={item.id}>
                                <TableCell component="th" scope="row">
                                    {item.text}

                                </TableCell>
                                <TableCell align="right">{item.author}</TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    )
}

export default Posts
