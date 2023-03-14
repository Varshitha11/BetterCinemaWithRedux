import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchMoviesById, fetchShowsById } from '../../../store';
import { saveShows } from '../../../store/slices/dataSlice';
import Navbar from '../../Navbar/Navbar';


function ShowsPage() {

    const { id } = useParams();
    const { theatreId } = useParams();

    const [time, setTime] = useState(null);

    const dispatch = useDispatch();
    const { moviedata, showdata } = useSelector((state) => {
        return {
            moviedata: state.movies.moviedata,
            showdata: state.shows.showdata,
        }
    });


    useEffect(() => {
        dispatch(fetchMoviesById(id));
        dispatch(fetchShowsById([id, theatreId, time]))
    }, [dispatch, time]);

    // const HandleClick = (e) => {
    //     dispatch(fetchShowsById([id, theatreId, e]));
    // }

    return (
        <div>
            <Navbar />
            <div className='container'>
                <div className='row pt-5'>
                    <div className='col-sm-2 col-md-4' >
                        {moviedata.image ?
                            <img src={moviedata.image} width='226' height='349' alt='Book' />
                            :
                            <img src={require('./../../../images/MVEImages/Dhamaka.png')} width='226'
                                height='349' alt='Movie' />
                        }
                    </div>
                    <div className='col-4 col-md-4 '>
                        <div className='shows-info'>
                            <h1>{moviedata.title}</h1>
                            <h4>{moviedata.language}</h4>
                            <p className='lead'>{moviedata.description}</p>

                        </div>
                    </div>
                </div>
                <hr />
                <div className='container'>
                    <div className="row mt-5 justify-content-center">
                        <div className='col-sm-8'>
                            <div className=" buttons">
                                <button className='btn btn-success fs-5' onClick={() => setTime("today")} >today</button>
                                <button className='btn btn-success fs-5' onClick={() => setTime("tomorrow")} >tomorrow</button>
                                <button className='btn btn-success fs-5' onClick={() => setTime("wednesday")} >wednesday</button>
                                <button className='btn btn-success fs-5' onClick={() => setTime("thursday")} >thursday</button>
                            </div>
                        </div>
                    </div>
                </div>
                {[...showdata].sort((a, b) => a.showId - b.showId).map(show => (
                    <Link to={`/seatsPage`} className=' btn btn-warning fs-5  m-2'
                        key={show.showId} onClick={() => { dispatch(saveShows(show)); }} >
                        {show.day} &nbsp;
                    </Link>
                ))}
            </div>
        </div>


    );

}
export default ShowsPage;