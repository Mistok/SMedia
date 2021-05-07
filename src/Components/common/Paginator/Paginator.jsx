import React, {useState} from 'react';
import Class from './Paginator.module.css';

let Paginator = ({totalItemsCount, pageSize, onPageChanged, currentPage, portionSize = 8}) => {

    let pages = [];

    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    for ( let i = 1; i <= pagesCount; i++){
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNum = (portionNumber - 1) * portionSize + 1 ;
    let rightPortionPageNum = portionNumber * portionSize;

    return(
        <nav className={Class.paginationContainer}>
            {portionNumber > 1 && <button onClick={ () => {setPortionNumber(portionNumber - 1);
            }}>prev</button>}
            {pages
                .filter(page => page    >= leftPortionPageNum && page <= rightPortionPageNum)
                .map((pageNumber) =>{
                    return <span onClick={(e) => {onPageChanged(pageNumber)}}
                                 className={`${Class.paginationPage} ${currentPage === pageNumber && Class.selected}`}>
                        {pageNumber}</span>})
                }
            {portionCount > portionNumber &&
                <button onClick={ () => {setPortionNumber(portionNumber + 1);
            }}>next</button>}
        </nav>
    )
};
export default Paginator;