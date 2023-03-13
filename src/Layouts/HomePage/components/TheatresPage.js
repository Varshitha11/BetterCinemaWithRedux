import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchTheatresByMovie } from '../../../store';
import Navbar from '../../Navbar/Navbar';

function TheatresPage() {

    const { id } = useParams();

    const dispatch = useDispatch();
    const { theatredata } = useSelector((state) => {
        return {
            theatredata: state.theatres.theatredata,
        }
    })


    useEffect(() => {
        dispatch(fetchTheatresByMovie(id));
    }, [dispatch]);

    return (
        <div>
            <Navbar />
            <div className='container'>
                <div className="row justify-content-center pt-5">
                    <div className="col-sm-5">
                        {[...theatredata].sort((a, b) => a.theatreId - b.theatreId).map(theatre => (
                            <div className='card mt-3 shadow p-3 mb-3 bg-body rounded' key={theatre.theatreId}>
                                <div className='row'>
                                    <div className='col-md-2 text-center'>
                                        <Link to={`/showspage/${id}/${theatre.theatreId}`}
                                            className='btn btn-outline-success  m-2' > {theatre.theatreName}
                                        </Link>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className='card-body'>
                                            <h5>
                                                {theatre.city}
                                            </h5>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TheatresPage;