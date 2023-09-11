import React, {useState} from "react";
import s from './paginator.module.css'
import cn from 'classnames'

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
                .map(p =>  {
                return <span
                className={cn({
                [s.selectedPage]: currentPage === p
            }, s.numberPage)}
            key={p}
            onClick={() => {
                onPageChanged(p)
            }}
        >{p}</span>
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