import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { bookings, fetchScreens } from '../../../store';
import Navbar from '../../Navbar/Navbar';

function Payments(props) {

    const dispatch = useDispatch();
    const { screendata, saveSeat, saveShows, movieData } = useSelector((state) => {
        return {
            saveSeat: state.data.saveSeat,
            saveShows: state.data.saveShows,
            movieData: state.data.movieData,
            screendata: state.theatres.screendata,
        }
    });

  

    console.log("showId " + saveShows.showId);


    useEffect(() => {
        dispatch(fetchScreens(saveShows.showId));
    }, [dispatch]);


    const handleClick = (e) => {
        const seatId = e.target.value;
        console.log(seatId);
        console.log("i am showId:" + saveShows.showId)
        dispatch(bookings([seatId, saveShows.showId]));
    }

    return (
        <>
        <Navbar/>
        <div className='container'>
            <div className="row justify-content-center">
                <div className="col-sm-6">
                    <div className='card mt-3 shadow p-3 mb-3 bg-body rounded'>
                        <div className='row g-0'>
                            <div className='col-md-6'>
                                {<img
                                    src={movieData.image}
                                    width='220'
                                    height='250'
                                    alt='Book'

                                />}

                            </div>

                            <div className='col-md-6'>
                                <div className='card-body rounded border border-grey'>

                                    <h4>
                                        {movieData.title}
                                    </h4>
                                    <h4>
                                        {saveShows.time} ,{saveShows.day}
                                    </h4>
                                    <h4>
                                        seat number: {saveSeat.seatNumber}
                                    </h4>
                                    <h4>
                                        {screendata.screenName}
                                    </h4>
                                    <h4>
                                        price: {saveSeat.showSeatMapping[0].price}
                                    </h4>

                                </div>
                            </div>

                        </div>
                        <div className='text-center mt-3'>
                            <Link to={`/ticketsPage`}>
                                <button className='btn btn-primary fs-5 mt-3' onClick={handleClick} value={`${saveSeat.seatId}`}> Confirm Booking
                                </button>
                            </Link>
                            <Link className="btn btn-primary mx-2 mt-3 fs-5" to={`/seatsPage`}>
                                Back to Seats
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Payments;