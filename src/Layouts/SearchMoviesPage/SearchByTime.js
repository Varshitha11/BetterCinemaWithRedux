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

                        <button className='btn btn-success  fs-5' onClick={() => HandleClick("2023-03-20")} >2023-03-20</button>
                        <button className='btn btn-success  fs-5' onClick={() => HandleClick("2023-03-21")} >2023-03-21</button>
                        <button className='btn btn-success fs-5' onClick={() => HandleClick("2023-03-22")} >2023-03-22</button>
                        <button className='btn btn-success fs-5' onClick={() => HandleClick("2023-03-23")} >2023-03-23</button>
                    </div>
                </div>
            </div>
            <>
                {[...searchByTime].sort((a, b) => a.id - b.id).map(movie => (
                    <SearchMovie key={movie.id} movie={movie} />
                ))}
            </>

        </div>


    );
}

export default SearchByTime;