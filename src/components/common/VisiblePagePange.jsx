const VisiblePageRange = (totalPage, pageRange, currentPage) => {
    const setArrayPages = (start, end) => {
        const arrayPage = [];
        for (let i = start; i <= end; i++) {
            arrayPage.push(i);
        }
        return arrayPage;
    };

    const visiblePageRange = () => {
        const ceiling = Math.ceil(pageRange / 2);
        const floor = Math.floor(pageRange / 2);
        const range = {
            start: 0,
            end: 0,
        };

        if (totalPage < pageRange) {
            range.start = 1;
            range.end = 1;
        }
        // condition when current page within first page range and <= ceiling
        else if (currentPage >= 1 && currentPage <= ceiling) {
            range.start = 1;
            range.end = pageRange;
        }
        // condition when current page within last page range
        else if (currentPage + floor >= totalPage) {
            range.start = totalPage - pageRange + 1;
            range.end = totalPage;
        }
        // main condition
        else {
            range.start = currentPage - ceiling + 1;
            range.end = currentPage + floor;
        }

        return setArrayPages(range.start, range.end);
    };

    return visiblePageRange();
};

export default VisiblePageRange;
