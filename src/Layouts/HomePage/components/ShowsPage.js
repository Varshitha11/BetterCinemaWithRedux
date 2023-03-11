import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams} from 'react-router-dom';
import { fetchMoviesById, fetchShowsById } from '../../../store';
import { saveShows } from '../../../store/slices/dataSlice';


function ShowsPage() {

    const { id } = useParams();
    const {theatreId} = useParams();
    
    const[time , setTime ] = useState(null);

    const dispatch = useDispatch();
    const { moviedata, showdata } = useSelector((state) => {
        return {
            moviedata: state.movies.moviedata,
            showdata: state.shows.showdata,
        }
    });


    useEffect(() => {
        dispatch(fetchMoviesById(id));
        dispatch(fetchShowsById([id,theatreId,time]))
    }, [dispatch ,time]);

    // const HandleClick = (e) => {
    //     dispatch(fetchShowsById([id, theatreId, e]));
    // }

    return (
        <div>
            <div className='container'>
                <div className='row pt-5'>
                    {
                            <>
                                <div className='col-sm-2 col-md-4' >
                                    {moviedata.image ?
                                        <img src={moviedata.image} width='226' height='349' alt='Book' />
                                        :
                                        <img src={require('./../../../images/MVEImages/Dhamaka.png')} width='226'
                                            height='349' alt='Movie' />
                                    }
                                </div>
                                <div className='col-4 col-md-4 '>
                                    <div className='ml-2'>
                                        <h2>{moviedata.title}</h2>
                                        <h5 className='text-primary'>{moviedata.language}</h5>
                                        <p className='lead'>{moviedata.description}</p>

                                    </div>
                                </div>
                            </>
                       
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
                {[...showdata].sort((a,b) => a.showId - b.showId).map(show => (
                    <Link to={`/seatsPage`} className=' btn btn-success main-color  m-2'
                        key={show.showId} onClick={() => { dispatch(saveShows(show));}} >  
                        {show.day} &nbsp;
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