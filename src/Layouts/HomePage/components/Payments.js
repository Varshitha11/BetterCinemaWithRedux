import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { bookings, fetchScreens } from '../../../store';
import Navbar from '../../Navbar/Navbar';

function Payments(props) {

    const user = JSON.parse(localStorage.getItem("user"));

    const dispatch = useDispatch();
    const { screendata, saveSeat, saveShows, movieData } = useSelector((state) => {
        return {
            saveSeat: state.data.saveSeat,
            saveShows: state.data.saveShows,
            movieData: state.data.movieData,
            screendata: state.theatres.screendata,
        }
    });

    useEffect(() => {
        dispatch(fetchScreens(saveShows.showId));
    }, [dispatch]);


    const handleClick = (e) => {
        const seatId = e.target.value;
        console.log(seatId);
        dispatch(bookings([seatId, saveShows.showId, user.user.userName]));
    }

    return (
        <>
            <Navbar />
            <div className='container'>
                <div className="row justify-content-center">
                    <div className="col-sm-6">
                        <div className='card'>
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
                                    <div className='card-body border border-grey'>

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
                            <div className='buttons-group'>
                                <Link to={`/ticketsPage`}>
                                    <button className='btn btn-primary fs-5 ' onClick={handleClick} value={`${saveSeat.seatId}`}> Confirm Booking
                                    </button>
                                </Link>
                                <Link className="btn btn-primary mx-2  fs-5" to={`/seatsPage`}>
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