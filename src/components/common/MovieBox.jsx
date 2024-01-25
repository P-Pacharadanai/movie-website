function MovieBox(props) {
    return (
        <div>
            <div className="w-[215px] h-[325px] rounded-lg overflow-hidden">
                {props.image ? (
                    <img src={props.image} alt="" className="w-full h-full object-cover" />
                ) : (
                    <div className="w-full h-full bg-gray-500 flex justify-center items-center">
                        <p className="text-xl text-gray-300">No image</p>
                    </div>
                )}
            </div>
            <div className="mt-4">
                <h3 className="text-xl">{props.title.length < 19 ? props.title : props.title.slice(0, 19) + "..."}</h3>
                <p className="text-sm text-gray-400">{props.date}</p>
            </div>
        </div>
    );
}

export default MovieBox;
