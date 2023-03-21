import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { saveMovie } from "../../../store/slices/dataSlice";


function ReturnMovie({ movie }) {

    const dispatch = useDispatch();
    return (
        <div className='col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-3'>
            <div className='text-center'>

                <img
                    src={movie.image}
                    width='200'
                    height='250'
                    alt="movie"
                />

                <h5 className='mt-2'>{movie.title}</h5>
                <Link to={`/theatresPage/${movie.id}`} className='btn btn-primary fs-5' onClick={() => { dispatch(saveMovie(movie)); }} > Reserve</Link>
            </div>
        </div>
    );
}
export default ReturnMovie;