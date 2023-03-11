import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchSeats } from '../../../store';
import { reserveSeat, saveSeat } from '../../../store/slices/dataSlice';

function SeatsPage(props) {

   // const { showId } = useParams();

    const dispatch = useDispatch();
    const { seatsData, saveShows} = useSelector((state) => {
        return {
            seatsData: state.seats.seatsData,
            saveShows : state.reserveSeat.saveShows,
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
        <div className='container'>
            <div className="text-center py-3">
                <h1>Select Seats</h1>
            </div>
            <div className="row pt-5 justify-content-center">
                <div className="col-md-6 text-center">
                    {

                        [...seatsData].sort((a, b) => a.seatId - b.seatId).slice(0, 20).map(seats => (
                            <button className='btn btn-outline-success'
                                onClick={(e) => {dispatch(saveSeat(seats))}} key={seats.seatId} value={`${seats.seatId}`} >
                                {seats.seatNumber}</button>
                        ))
                    }
                </div >
            </div>

            <div className="row mt-5 justify-content-center">
                <div className="col-md-6 text-center">
                    {

                        [...seatsData].sort((a, b) => a.seatId - b.seatId).slice(20, 40).map(seats => (
                            <button className='btn btn-outline-success'
                            onClick={(e) => {dispatch(saveSeat(seats))}} key={seats.seatId} value={`${seats.seatId}`} >
                                {seats.seatNumber}</button>
                        ))
                    }
                </div >
            </div>


            <div className='col-md-12 mt-4 d-flex justify-content-center align-items-center'>
                <Link to={`/paymentPage`} >
                    <button className='btn btn-outline-primary mt-3' > Book Tickets </button>
                </Link>
                <Link className="btn btn-outline-primary mx-2 mt-3" to={"/"}>
                    Back to Home
                </Link>
            </div>

        </div>
    );
}

export default SeatsPage;