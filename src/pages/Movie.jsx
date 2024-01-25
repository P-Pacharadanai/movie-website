import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

function Movie() {
    return (
        <div className="min-h-screen bg-default text-white flex flex-col ">
            <Navbar />
            <div className="flex flex-col flex-1  justify-center items-center">
                <h1 className="text-5xl font-bold">Under Construction</h1>
                <h3 className="text-xl mt-6">
                    Movie page is currently under development.
                </h3>
            </div>
            <Footer />
        </div>
    );
}

export default Movie;
