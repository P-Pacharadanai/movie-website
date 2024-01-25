import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import MovieList from "../components/pages/SearchMovie/MovieList";

function SearchMovie() {
    return (
        <div className="min-h-screen bg-default text-white ">
            <Navbar />
            <MovieList />
            <Footer />
        </div>
    );
}

export default SearchMovie;
