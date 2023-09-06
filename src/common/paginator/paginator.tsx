import React from "react";
import s from './paginator.module.css'

type PaginatorPropsType = {
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    totalUsersCount: number
    pageSize: number
}

const Paginator: React.FC<PaginatorPropsType> = (props) => {
    let {currentPage, onPageChanged, totalUsersCount, pageSize} = props
    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            {pages.map(p => {
                    return <span onClick={() => {
                        onPageChanged(p)
                    }} className={currentPage === p
                        ? s.selectedPage + ' ' + s.numberPage : s.numberPage}>{p}</span>
                }
            )}

        </div>

    );
};

export default Paginator;