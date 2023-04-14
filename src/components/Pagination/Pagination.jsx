import css from "./Pagination.module.css"
import {getPageArray} from "../../utils/pages.js";

export const Pagination = ({totalPages, page, setPage}) => {
    let pageArray = getPageArray(totalPages);
    return (
        <div className={css.pagination__wrapper}>
            {pageArray.map(i => <span
                onClick={() => setPage(i)}
                className={page === i ? css.page__current : css.pagination__item}
                key={i}
            >{i}</span>)}
        </div>
    )
}