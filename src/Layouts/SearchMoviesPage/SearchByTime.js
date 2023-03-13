import { Link } from "react-router-dom";
import SearchMovie from "./SearchMovie";
import { useDispatch, useSelector } from "react-redux";
import { fetchMoviesByTime } from "../../store";


function SearchByTime() {


    
    const dispatch = useDispatch();
    const { searchByTime } = useSelector((state) => {
        return state.movies;
    })


    const HandleClick = (e) => {
        dispatch(fetchMoviesByTime(e));
    }

    return (
        <div className='container'>
            <div className="row justify-content-center">
                <div className="buttons col-sm-12">
                    <div className='d-flex'>

                        <button className='btn btn-success  fs-5' onClick={() => HandleClick("today")} >today</button>
                        <button className='btn btn-success  fs-5' onClick={() => HandleClick("tomorrow")} >tomorrow</button>
                        <button className='btn btn-success fs-5' onClick={() => HandleClick("wednesday")} >wednesday</button>
                        <button className='btn btn-success fs-5' onClick={() => HandleClick("thursday")} >thursday</button>
                    </div>
                </div>
            </div>
            <>
                {[...searchByTime].sort((a,b) => a.id - b.id).map(movie => (
                    <SearchMovie key={movie.id} movie={movie} />
                ))}
            </>

        </div>


    );
}

export default SearchByTime;