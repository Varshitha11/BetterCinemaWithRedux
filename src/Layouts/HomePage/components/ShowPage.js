import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchMoviesById, fetchShowsById } from '../../../store';
import { saveShows } from '../../../store/slices/dataSlice';
import Navbar from '../../Navbar/Navbar';

function ShowPage() {

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


    const currentDate = new Date().toISOString().slice(0, 10); // get current date in yyyy-mm-dd format
    const currentTime = new Date().toLocaleTimeString("en-US", { hour12: false }); // get current time in 24-hour format

    useEffect(() => {
        dispatch(fetchMoviesById(id));
        dispatch(fetchShowsById([id, theatreId, time]))
    }, [dispatch, time]);


    const HandleClick = (e) => {
        setTime(e);
    }

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
                                <button className='btn btn-success fs-5' onClick={() => HandleClick("2023-03-21")} >2023-03-21</button>
                                <button className='btn btn-success fs-5' onClick={() => HandleClick("2023-03-22")} >2023-03-22</button>
                                <button className='btn btn-success fs-5' onClick={() => HandleClick("2023-03-23")} >2023-03-23</button>
                                <button className='btn btn-success fs-5' onClick={() => HandleClick("2023-03-24")} >2023-03-24</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" d-flex col-md-6">
                    {[...showdata].sort((a, b) => a.showId - b.showId).map((show, index) => {
                        if (show.time === currentDate && show.day >= currentTime) {
                            return <div key={index}>
                                <Link to={`/seatsPage`} className=' btn btn-warning fs-5  m-2'
                                    key={index} onClick={() => { dispatch(saveShows(show)); }} >
                                    {show.day} &nbsp;
                                </Link>
                            </div>;
                        }

                        else if (show.time > currentDate) {
                            return <div key={index}>
                                <Link to={`/seatsPage`} className=' btn btn-warning fs-5  m-2'
                                    key={index} onClick={() => { dispatch(saveShows(show)); }} >
                                    {show.day} &nbsp;
                                </Link>
                            </div>;
                        }
                    })}
                </div>
            </div>
        </div>
    );
}

export default ShowPage;