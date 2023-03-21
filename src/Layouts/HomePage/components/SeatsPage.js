import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchSeats } from '../../../store';
import { saveSeat } from '../../../store/slices/dataSlice';
import Navbar from '../../Navbar/Navbar';

function SeatsPage(props) {

    const dispatch = useDispatch();

    const { seatsData, saveShows } = useSelector((state) => {
        return {
            seatsData: state.seats.seatsData,
            saveShows: state.data.saveShows,
        }
    });

    useEffect(() => {
        dispatch(fetchSeats(saveShows.showId));
    }, [dispatch]);


    return (
        <>
            <Navbar />
            <div className='container'>
                <div className="seats-heading">
                    <h1>Select Seats</h1>
                </div>
                <div className="seats-selection row">
                    <div className="col-md-6">
                        {

                            [...seatsData].sort((a, b) => a.seatId - b.seatId).slice(0, 20).map(seats => (
                                <button className=' btn btn-outline-success'
                                    onClick={(e) => { dispatch(saveSeat(seats)) }} key={seats.seatId} value={`${seats.seatId}`} >
                                    {seats.seatNumber}</button>
                            ))
                        }
                    </div >
                </div>

                <div className="seats-selection row">
                    <div className="col-md-6">
                        {

                            [...seatsData].sort((a, b) => a.seatId - b.seatId).slice(20, 40).map(seats => (
                                <button className='btn btn-outline-success'
                                    onClick={(e) => { dispatch(saveSeat(seats)) }} key={seats.seatId} value={`${seats.seatId}`} >
                                    {seats.seatNumber}</button>
                            ))
                        }
                    </div >
                </div>


                <div className='buttons-group col-md-12 '>
                    <Link to={`/paymentPage`} >
                        <button className='btn btn-primary fs-5' > Book Tickets </button>
                    </Link>
                </div>

            </div>
        </>
    );
}

export default SeatsPage;