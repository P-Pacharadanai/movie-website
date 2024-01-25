import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useMovie } from "../../contexts/MovieData";

function Navbar(props) {
    const { search, setSearch, setKeyword } = useMovie();
    const navigate = useNavigate();

    const handleClick = () => {
        if (search !== "") {
            setKeyword(search);
            setSearch("");
            navigate("/search");
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            handleClick();
        }
    };

    return (
        <nav className={`w-full bg-black/25 backdrop-blur-sm py-5 ${props.position}`}>
            <div className="max-w-[1140px] mx-auto flex justify-between items-center ">
                <div className="flex items-center">
                    <Link className="text-4xl font-bold text-cyan-700 " to="/">
                        MovieNight
                    </Link>
                    <ul className="flex gap-8 ml-8 font-bold">
                        <li>
                            <Link to="/" className="hover:text-cyan-600 duration-200">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/movies"
                                className="hover:text-cyan-600 duration-200"
                            >
                                Movies
                            </Link>
                        </li>
                        <li>
                            <Link to="/tv" className="hover:text-cyan-600 duration-200">
                                TV Shows
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="bg-gray-700 p-2 rounded-md">
                    <input
                        type="text"
                        name="search"
                        autoComplete="off"
                        placeholder="Type to search..."
                        className="bg-transparent mx-3  focus:outline-none"
                        onChange={(event) => setSearch(event.target.value)}
                        onKeyDown={handleKeyDown}
                        value={search}
                    />
                    <FontAwesomeIcon
                        icon={faMagnifyingGlass}
                        size="lg"
                        className="hover:cursor-pointer"
                        onClick={handleClick}
                    />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
