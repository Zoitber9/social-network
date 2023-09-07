import React, {useState} from "react";
import s from './paginator.module.css'

type PaginatorPropsType = {
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    totalUsersCount: number
    pageSize: number
    portionSize?: number
}

const Paginator: React.FC<PaginatorPropsType> = (props) => {
    let {currentPage, onPageChanged, totalUsersCount, pageSize, portionSize = 10} = props

    let pagesCount = Math.ceil(totalUsersCount / pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let portionCount = Math.ceil(pagesCount / portionSize)
    const [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize
    console.log(portionNumber)

    return (
        <div>
            {
                portionNumber > 1 &&
                <button onClick={() => {
                    setPortionNumber(portionNumber - 1)
                }}>Prev</button>
            }
            {pages
                .filter(p => p >= leftPortionPageNumber && p < rightPortionPageNumber)
                .map(p => {
                        return <span onClick={() => {
                            onPageChanged(p)
                        }} className={currentPage === p
                            ? s.selectedPage + ' ' + s.numberPage : s.numberPage}>{p}</span>
                    }
                )}
            {
                portionCount > portionNumber &&
                <button onClick={() => {
                    setPortionNumber(portionNumber + 1)
                }}>Next</button>
            }

        </div>

    );
};

export default Paginator;