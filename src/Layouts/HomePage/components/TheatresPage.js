import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchTheatresByMovie } from '../../../store';
import { saveTheatre } from '../../../store/slices/saveDataSlice';

function TheatresPage() {

    const { id } = useParams();

    const dispatch = useDispatch();
    const {theatredata } = useSelector((state) => {
        return {
            theatredata: state.theatres.theatredata,
        }
    })


    useEffect(() => {
        dispatch(fetchTheatresByMovie(id));
    }, [dispatch]);

    return (
        <div>
            <div className='container'>
                <div className="row justify-content-center">
                    <div className="col-sm-8">
                        <h4>Theatres</h4>
                        {[...theatredata].sort((a, b) => a.theatreId - b.theatreId).map(theatre => (
                            <div className='card mt-3 shadow p-3 mb-3 bg-body rounded' key={theatre.theatreId}>
                                <div className='row g-0'>
                                    <div className='col-md-2'>
                                        <Link to={`/showspage/${id}/${theatre.theatreId}`} onClick={() => { dispatch(saveTheatre(theatre)); }}
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