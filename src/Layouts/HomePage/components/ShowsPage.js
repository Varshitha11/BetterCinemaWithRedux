import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchMoviesById, fetchShowsById, } from '../../../store';


function ShowsPage() {

    const { id } = useParams();
    const { theatreId } = useParams();

    const[time , setTime ] = useState(null);

    const dispatch = useDispatch();
    const { isLoading, data, showdata } = useSelector((state) => {
        return {
            data: state.movies.data,
            showdata: state.shows.showdata,
        }
    })

    useEffect(() => {
        dispatch(fetchMoviesById(id));
        dispatch(fetchShowsById([id,theatreId,time]))
    }, [dispatch ,time]);


    if (isLoading) {
        return <div>Loading...</div>
    }

    // const HandleClick = (e) => {
    //     dispatch(fetchShowsById([id, theatreId, e]));
    // }

    return (
        <div>
            <div className='container'>
                <div className='row pt-5'>
                    {
                        data.map(movie => (
                            <>
                                <div key={movie.id}  className='col-sm-2 col-md-4' >
                                    {movie.image ?
                                        <img src={movie.image} width='226' height='349' alt='Book' />
                                        :
                                        <img src={require('./../../../images/MVEImages/Dhamaka.png')} width='226'
                                            height='349' alt='Movie' />
                                    }
                                </div>
                                <div className='col-4 col-md-4 '>
                                    <div className='ml-2'>
                                        <h2>{movie.title}</h2>
                                        <h5 className='text-primary'>{movie.language}</h5>
                                        <p className='lead'>{movie.description}</p>

                                    </div>
                                </div>
                            </>
                        ))
                    }
                </div>
                <hr />
                <div className='container'>
                    <div className="row mt-5 justify-content-center">
                        <div className='col-sm-8'>
                            <div className=" buttons">
                                <button className='btn btn-outline-success' onClick={() => setTime("today")} >today</button>
                                <button className='btn btn-outline-success' onClick={() => setTime("tomorrow")} >tomorrow</button>
                                <button className='btn btn-outline-success' onClick={() => setTime("wednesday")} >wednesday</button>
                                <button className='btn btn-outline-success' onClick={() => setTime("thursday")} >thursday</button>
                            </div>
                        </div>
                    </div>
                </div>
                {showdata.map(show => (
                    <Link to={`/seatsPage/${show.showId}/${show.time}`} className=' btn btn-success main-color  m-2'
                        key={show.showId} >  {show.day} &nbsp;
                    </Link>
                ))}
                <div className='col-sm-3 mt-5'>
                    <Link className="btn btn-primary  " to={"/"}>
                        Back to home
                    </Link>
                </div>
            </div>
        </div>


    );

}
export default ShowsPage;