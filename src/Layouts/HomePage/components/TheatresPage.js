import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchTheatresByMovie } from '../../../store';

function TheatresPage( ) {
    const { id } = useParams();

    const dispatch = useDispatch();
    const {isLoading, data} = useSelector((state) => {
       return state.theatres;
    })

    useEffect(() => {
        dispatch(fetchTheatresByMovie(id));
    }, [ dispatch]);

    if(isLoading) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <div className='container'>
                <div className="row justify-content-center">
                    <div className="col-sm-8">
                        <h4>Theatres</h4>
                        {data.map(theatre => (
                            <div className='card mt-3 shadow p-3 mb-3 bg-body rounded' key={theatre.theatreId}>
                                <div className='row g-0'>
                                    <div className='col-md-2'>

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
                    <div className='col-sm-8'>
                        <Link className="btn btn-primary  mt-2 " to={"/"}>
                            Back to home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TheatresPage;