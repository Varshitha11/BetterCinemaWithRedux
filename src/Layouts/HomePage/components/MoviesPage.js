import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchMoviesByTheatre } from '../../../store';
import { saveMovie } from '../../../store/slices/dataSlice';
import Navbar from '../../Navbar/Navbar';

function MoviesPage() {

    const { theatreId } = useParams();

    const dispatch = useDispatch();
    
    const { data } = useSelector((state) => {
        return {
            data: state.movies.data,
        }
    });

    useEffect(() => {
        dispatch(fetchMoviesByTheatre(theatreId));
    }, [dispatch]);

    return (
        <>
            <Navbar />
            <div className='container'>
                <div className="row justify-content-center">
                    <div className="col-sm-6">

                        {[...data].sort((a, b) => a.id - b.id).map(movie => (
                            <div className='card' key={movie.id}>
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
                                    <div className='col-md-3 showlink'>
                                        <Link to={`/showspage/${movie.id}/${theatreId}`} className='btn btn-primary' onClick={() => { dispatch(saveMovie(movie)); }} >
                                            Book Tickets
                                        </Link>
                                    </div>
                                </div>

                            </div>

                        ))}
                    </div>

                </div>
            </div>
        </>

    );
}

export default MoviesPage;