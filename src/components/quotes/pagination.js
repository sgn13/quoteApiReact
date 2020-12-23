import React from 'react'

export const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <div>
            <nav>
                <ul className="pagination">
                    {pageNumbers.map(number => (
                        <li className="page-item">
                            <a href="#" onClick={() => paginate(number)} className="page-link"> {number}</a>
                        </li>
                    ))}
                </ul>
            </nav>

            <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-center">
                    <li class="page-item disabled">
                        <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                    </li>
                    {pageNumbers.map(number => (
                        <li className="page-item">
                            <a href="#" onClick={() => paginate(number)} className="page-link"> {number}</a>
                        </li>
                    ))}
                    <li class="page-item">
                        <a class="page-link" href="#">Next</a>
                    </li>
                </ul>
            </nav>

        </div>
    )
}
