
import React, {useState} from 'react';
import Class from './Paginator.module.css';


let Paginator = ({totalItemsCount, pageSize, onPageChanged, currentPage, portionSize = 8}) => {

    let pages = [];

    // const [itemsPerPage, setItemPerPage] = useState(8);
    // const indexOfLastItem = currentPage * itemsPerPage;
    // const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    for ( let i = 1; i <= pagesCount; i++){
        pages.push(i);
    }
    debugger
    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    console.log(`portion number ${portionNumber}`)

    let leftPortionPageNum = (portionNumber - 1) * portionSize + 1 ;
    console.log(`left portion page num ${leftPortionPageNum}`)
    let rightPortionPageNum = portionNumber * portionSize;
    console.log(`right portion page num ${rightPortionPageNum}`)

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