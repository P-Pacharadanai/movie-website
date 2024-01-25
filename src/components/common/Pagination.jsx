import PaginationItem from "./PaginationItem";
import VisiblePageRange from "./VisiblePagePange";

const Pagination = (props) => {
    const { page, filterData } = props;

    const pages = VisiblePageRange(page.total, 5, page.current);

    const nextPage = (pageNum) => {
        filterData(pageNum);
        window.scrollTo(0, 0);
    };

    return (
        <ul className="w-fit mx-auto my-10 list-none flex gap-1">
            <PaginationItem pageNumber="First" page={page} nextPage={() => nextPage(1)} />
            <PaginationItem
                pageNumber="Prev"
                page={page}
                nextPage={() => page.current !== 1 && nextPage(page.current - 1)}
            />
            {pages.map((pageNumber) => {
                return (
                    <PaginationItem
                        key={pageNumber}
                        page={page}
                        pageNumber={pageNumber}
                        nextPage={nextPage}
                    />
                );
            })}
            <PaginationItem
                pageNumber="Next"
                page={page}
                nextPage={() => page.current !== page.total && nextPage(page.current + 1)}
            />
            <PaginationItem
                pageNumber="Last"
                page={page}
                nextPage={() => nextPage(page.total)}
            />
        </ul>
    );
};

export default Pagination;
