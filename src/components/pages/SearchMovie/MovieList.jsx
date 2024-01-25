import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMovie } from "../../../contexts/MovieData";
import MovieBox from "../../common/MovieBox";
import Pagination from "../../common/Pagination";

function MovieList() {
    const { keyword, movieList, page, img_path, getSearchData, getMovieData, getTvData } =
        useMovie();

    const [typeSearch, setTypeSearch] = useState("all");

    const navigate = useNavigate();

    const onChangeHandle = (event) => {
        setTypeSearch(event.target.value);
        navigate("/search/1");
    };

    const filterData = (num) => {
        const pageNum = num ?? 1;
        if (typeSearch === "all") {
            getSearchData(pageNum);
        } else if (typeSearch === "movies") {
            getMovieData(pageNum);
        } else if (typeSearch === "tv") {
            getTvData(pageNum);
        }
    };
    console.log(typeSearch);

    useEffect(() => {
        filterData();
    }, [keyword, typeSearch]);

    return (
        <div className="max-w-[1140px] mx-auto mt-20 flex-1">
            {movieList[0] ? (
                <div className="flex justify-between">
                    <h3 className="text-3xl">Search results of '{keyword}'</h3>
                    <select
                        name="status"
                        value={typeSearch}
                        onChange={(event) => onChangeHandle(event)}
                        className="bg-gray-700 p-2 rounded-lg active:border-none active:outline-none "
                    >
                        <option value="" disabled>
                            Filter
                        </option>
                        <option value="all">All</option>
                        <option value="movies">Movies</option>
                        <option value="tv">TV Shows</option>
                    </select>
                </div>
            ) : (
                <h3 className="text-3xl text-center">No Result</h3>
            )}
            <div className="grid grid-cols-5 gap-x-4 gap-y-16 mt-10">
                {movieList.map((movie) => {
                    return (
                        <MovieBox
                            key={movie.id}
                            image={
                                movie.poster_path ? img_path + movie.poster_path : null
                            }
                            title={movie.title || movie.name}
                            date={movie.release_date || movie.first_air_date}
                        />
                    );
                })}
            </div>
            <Pagination page={page} filterData={filterData} />
        </div>
    );
}
export default MovieList;
