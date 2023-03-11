import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { bookings, fetchScreens } from '../../../store';

function Payments(props) {
   
    const dispatch = useDispatch();
    const { screendata,saveSeat,saveShows,movieData} = useSelector((state) => {
        return {
            saveSeat: state.reserveSeat.saveSeat,
            saveShows : state.reserveSeat.saveShows,
            movieData : state.alldata.movieData,
            screendata: state.theatres.screendata,
        }
    });

    console.log("showId " + saveShows.showId);

   
    useEffect(() => {
        dispatch(fetchScreens(saveShows.showId));
    } , [dispatch]);


    const handleClick = (e) => {
        const booking = e.target.value;
        console.log(booking);
        console.log("i am showId:" + saveShows.showId )
        dispatch(bookings([booking,saveShows.showId]));
    }

    return (
        <div className='container'>
        <div className="row justify-content-center">
            <div className="col-sm-6">
                <div className='card mt-3 shadow p-3 mb-3 bg-body rounded'>
                    <div className='row g-0'>
                        <div className='col-md-6'>
                            { <img
                                src={movieData.image}
                                width='220'
                                height='250'
                                alt='Book'

                            /> }

                        </div>

                        <div className='col-md-6'>
                            <div className='card-body'>

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
                            <button className='btn btn-primary mt-3' onClick={handleClick} value={`${saveSeat.seatId}`}> Confirm Booking
                            </button>
                        </Link>
                        <Link className="btn btn-primary mx-2 mt-3" to={`/seatsPage`}>
                            Back to Seats
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Payments;