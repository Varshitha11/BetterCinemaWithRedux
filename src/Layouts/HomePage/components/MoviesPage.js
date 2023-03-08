import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchMoviesByTheatre } from '../../../store';

function MoviesPage() {

    console.log(useParams());
    const { theatreId } = useParams();

    const dispatch = useDispatch();
    const { isLoading, data } = useSelector((state) => {
        return state.movies;
    });

    useEffect(() => {
        dispatch(fetchMoviesByTheatre(theatreId));
    }, [dispatch]);

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <div className='container'>
            <div className="row justify-content-center">
                <div className="col-sm-6">

                    {data.map(movie => (
                        <div className='card mt-3 shadow p-3 mb-3 bg-body rounded' key={movie.id}>
                            <div className='row g-0'>
                                <div className='col-sm-2 col-md-4'>
                                    <div className='movies'>
                                        {movie.image ?
                                            <img src={movie.image}
                                                width='160'
                                                height='196'
                                                alt='Book'
                                            />
                                            :
                                            <img src={require('./../../../images/MVEImages/Dhamaka.png')}
                                                width='123'
                                                height='196'
                                                alt='Book'
                                            />}

                                    </div>


                                </div>
                                <div className='col-md-4'>
                                    <div className='card-body'>

                                        <h4>
                                            {movie.title}
                                        </h4>
                                        <h5>
                                            {movie.language}
                                        </h5>

                                    </div>
                                </div>
                                <div className='col-md-3 d-flex justify-content-center align-items-center'>
                                    <Link to={`/showspage/${movie.id}/${theatreId}`} className='btn btn-primary main-color text-white' >
                                        Book Tickets
                                    </Link>
                                </div>
                            </div>

                        </div>

                    ))}
                </div>

            </div>
        </div>

    );
}

export default MoviesPage;