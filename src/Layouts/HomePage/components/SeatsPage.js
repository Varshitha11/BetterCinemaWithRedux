import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchSeats } from '../../../store';
import {saveSeat } from '../../../store/slices/dataSlice';
import Navbar from '../../Navbar/Navbar';

function SeatsPage(props) {

    // const { showId } = useParams();

    const dispatch = useDispatch();
    const { seatsData, saveShows } = useSelector((state) => {
        return {
            seatsData: state.seats.seatsData,
            saveShows: state.data.saveShows,
            //bookSeat: state.reserveSeat.bookSeat,
        }
    });

    useEffect(() => {
        dispatch(fetchSeats(saveShows.showId));
    }, [dispatch]);


    // const handleClick = (e) => {
    //     dispatch(reserveSeat(e.target.value));
    // }

    return (
        <>
            <Navbar />
            <div className='container'>
                <div className="text-center text-white py-3">
                    <h1>Select Seats</h1>
                </div>
                <div className="row pt-5 justify-content-center">
                    <div className="col-md-6 text-center">
                        {

                            [...seatsData].sort((a, b) => a.seatId - b.seatId).slice(0, 20).map(seats => (
                                <button className='btn btn-outline-light'
                                    onClick={(e) => { dispatch(saveSeat(seats)) }} key={seats.seatId} value={`${seats.seatId}`} >
                                    {seats.seatNumber}</button>
                            ))
                        }
                    </div >
                </div>

                <div className="row mt-5 justify-content-center">
                    <div className="col-md-6 text-center">
                        {

                            [...seatsData].sort((a, b) => a.seatId - b.seatId).slice(20, 40).map(seats => (
                                <button className='btn btn-outline-light'
                                    onClick={(e) => { dispatch(saveSeat(seats)) }} key={seats.seatId} value={`${seats.seatId}`} >
                                    {seats.seatNumber}</button>
                            ))
                        }
                    </div >
                </div>


                <div className='col-md-12 mt-4 d-flex justify-content-center align-items-center'>
                    <Link to={`/paymentPage`} >
                        <button className='btn btn-primary fs-5 mt-3' > Book Tickets </button>
                    </Link>
                </div>

            </div>
        </>
    );
}

export default SeatsPage;