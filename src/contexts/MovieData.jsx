import { useState, createContext, useContext } from "react";
import { fetchDataFromApi } from "../utils/api";

const MovieDataContext = createContext();

function MovieDataProvider(props) {
    const [search, setSearch] = useState("");
    const [keyword, setKeyword] = useState("");
    const [movieList, setMovieList] = useState([]);
    const [page, setPage] = useState({
        total: 1,
        current: 1,
    });

    const img_path = "https://image.tmdb.org/t/p/w500";

    const getSearchData = async (pageNum) => {
        const url = `/search/multi?query=${keyword}&page=${pageNum}`;
        const data = await fetchDataFromApi(url);
        const newPage = { total: data.total_pages, current: pageNum };

        setMovieList(data.results);
        setPage(newPage);
    };

    const getMovieData = async (pageNum) => {
        const url = `/search/movie?query=${keyword}&page=${pageNum}`;
        const data = await fetchDataFromApi(url);
        const newPage = { total: data.total_pages, current: pageNum };

        setMovieList(data.results);
        setPage(newPage);
    };

    const getTvData = async (pageNum) => {
        const url = `/search/tv?query=${keyword}&page=${pageNum}`;
        const data = await fetchDataFromApi(url);
        const newPage = { total: data.total_pages, current: pageNum };

        setMovieList(data.results);
        setPage(newPage);
    };

    return (
        <MovieDataContext.Provider
            value={{
                search,
                setSearch,
                keyword,
                setKeyword,
                movieList,
                page,
                setPage,
                img_path,
                getSearchData,
                getMovieData,
                getTvData,
            }}
        >
            {props.children}
        </MovieDataContext.Provider>
    );
}

// this is a hook that consume MovieDataContext
const useMovie = () => useContext(MovieDataContext);

export { MovieDataProvider, useMovie };
