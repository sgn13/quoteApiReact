import React, { useState, useEffect } from 'react'
import Posts from './posts';
// import Pagination from "react-js-pagination";
import ReactPaginate from 'react-paginate';
import RandomQuotes from './RandomQuotes'

// import { Pagination } from './pagination';

function Home() {

    // const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(true);
    const [items, setItems] = useState([]);
    const [randomQuotes, setRandomQuotes] = useState('')
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);
    // const [pageCount, setPageCount] = useState(0);
    const [offset, setOffset] = useState(0);


    useEffect(() => {

        fetch("https://type.fit/api/quotes")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(false);
                    setItems(result);
                    setCurrentPage(Math.ceil(result.length / postsPerPage))
                },

                (error) => {
                    setIsLoaded(true);
                    // setError(error);
                    console.log(error);

                }
            )

    }, [offset])
    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        setOffset(selectedPage + 1)
        console.log(e);

    }


    // const paginate = (num) => {
    //     console.log(num);
    //     setCurrentPage(num)



    // }
    // const handlePageChange = (pageNumber) => {
    //     console.log(`active page is ${pageNumber}`);
    //     setCurrentPage(pageNumber)
    // };
    // const indexOfLastPage = currentPage * postsPerPage;
    // const indexOfFirstPage = indexOfLastPage - postsPerPage;
    // const currentItems = items.slice(indexOfFirstPage, indexOfLastPage)

    const getRandom = () => {
        const random = Math.floor(Math.random() * 1643);
        const giveme = " ' " + items[random].text + " ' "
        setRandomQuotes(giveme)
        console.log(randomQuotes);

    }
    const handleSort = () => {
        const sort = items.text;
        console.log(sort);
        setItems(items.sort())
    }

    const currentItems = items.slice(offset, offset + postsPerPage)



    return (
        <div className="container">
            <h1 style={{ textAlign: "center" }}>Quotes lists</h1>
            <button onClick={handleSort}>Sort</button>
            <Posts items={currentItems} loading={isLoaded} />

            <ReactPaginate
                previousLabel={"prev"}
                nextLabel={"next"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={currentPage}
                marginPagesDisplayed={3}
                pageRangeDisplayed={3}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"} />
            <RandomQuotes getRandomQuotes={getRandom} randomQuotes={randomQuotes} />
        </div>
    )
}

export default Home