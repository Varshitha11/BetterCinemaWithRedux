import { Link } from "react-router-dom";
import SearchMovie from "./SearchMovie";
import { useDispatch, useSelector } from "react-redux";
import { fetchMoviesByTime } from "../../store";


function SearchByTime() {

    const dispatch = useDispatch();
    const { data } = useSelector((state) => {
        return state.searchByTime;
    })


    const HandleClick = (e) => {
        dispatch(fetchMoviesByTime(e));
    }

    return (
        <div className='container'>
            <div className="row justify-content-center">
                <div className="buttons col-sm-12">
                    <div className='d-flex'>

                        <button className='btn btn-outline-success' onClick={() => HandleClick("today")} >today</button>
                        <button className='btn btn-outline-success' onClick={() => HandleClick("tomorrow")} >tomorrow</button>
                        <button className='btn btn-outline-success' onClick={() => HandleClick("wednesday")} >wednesday</button>
                        <button className='btn btn-outline-success' onClick={() => HandleClick("thursday")} >thursday</button>
                    </div>
                </div>
            </div>
            <>
                {[...data].sort((a,b) => a.id - b.id).map(movie => (
                    <SearchMovie key={movie.id} movie={movie} />
                ))}
            </>


            <Link className="btn btn-primary mt-4" to={"/"}>
                Back to Home
            </Link>

        </div>


    );
}

export default SearchByTime;