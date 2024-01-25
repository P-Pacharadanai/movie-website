import { useNavigate } from "react-router-dom";

const PaginationItem = (props) => {
    const { page, pageNumber, nextPage } = props;
    const navigate = useNavigate();

    const navigatePage = () => {
        if (typeof pageNumber === "number") {
            navigate(`/search/${pageNumber}`);
        } else if (pageNumber === "Prev" && page.current !== 1) {
            navigate(`/search/${page.current - 1}`);
        } else if (pageNumber === "Next" && page.current !== page.total) {
            navigate(`/search/${page.current + 1}`);
        } else if (pageNumber === "First") {
            navigate(`/search/${1}`);
        } else if (pageNumber === "Last") {
            navigate(`/search/${page.total}`);
        }
    };

    const onPageChange = () => {
        nextPage(pageNumber);
        navigatePage();
    };

    const activeฺBgColor = () => {
        const bgColor = page.current === pageNumber ? "bg-cyan-500" : "bg-cyan-700";
        return bgColor;
    };

    return (
        <li
            key={pageNumber}
            onClick={() => onPageChange()}
            className={`w-12 h-12 flex justify-center items-center text-lg rounded-lg  hover:cursor-pointer hover:bg-cyan-600  
                        ${activeฺBgColor(pageNumber)} ${page.total <= 1 && "hidden"}`}
        >
            {pageNumber}
        </li>
    );
};

export default PaginationItem;
