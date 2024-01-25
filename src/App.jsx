import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import TvShow from "./pages/TvShow";
import SearchMovie from "./pages/SearchMovie";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movie />} />
            <Route path="/tv" element={<TvShow />} />
            <Route path="/search/:id" element={<SearchMovie />} />
            <Route path="*" element={<SearchMovie />} />
        </Routes>
    );
}

export default App;
