import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { saveMovie } from "../../store/slices/saveDataSlice";

function SearchMovie({movie}) {
    const dispatch = useDispatch();
  return (
      <div className='card mt-3 shadow p-3 mb-3 bg-body rounded'>
          <div className='row g-0'>
              <div className='col-md-2'>
                  <div className='d-none d-lg-block'>
              
                          <img src={movie.image}
                              width='130'
                              height='196'
                              alt='Book'
                          />
                  </div>

              </div>
              <div className='col-md-6'>
                  <div className='card-body'>
                      <h4>
                          {movie.title}
                      </h4>
                      <p className='card-text'>
                         {movie.description}
                      </p>
                  </div>
              </div>
              <div className='col-md-4 d-flex justify-content-center align-items-center'>
                  <Link to={`/theatresPage/${movie.id}`} className='btn btn-primary main-color text-white' onClick={() => { dispatch(saveMovie(movie));}} >
                      Book Ticket
                  </Link>
              </div>
          </div>
      </div>

  );
}

export default SearchMovie;