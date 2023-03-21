import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovieByUserName, fetchOrders } from '../../../store';
import Navbar from '../../Navbar/Navbar';

function Orders(props) {

    const [data, setData] = useState([]);

    const user = JSON.parse(localStorage.getItem("user"));

    const dispatch = useDispatch();
    
    const { orders, movieByUserName } = useSelector((state) => {
        return {
            orders: state.bookings.orders,
            movieByUserName: state.bookings.movieByUserName,
        }
    })

    useEffect(() => {
        dispatch(fetchOrders(user.user.userName));
        dispatch(fetchMovieByUserName(user.user.userName));

        const array1 = orders;
        const array2 = movieByUserName;
        const mergedArray = array1.map((element, index) => ({
            number: element,
            letter: array2[index],
        }));
        setData(mergedArray);
        
    }, [dispatch]);


    return (
        <>
            <Navbar />
            <div className='container table-responsive py-3'>
                <div className='text-center py-3'>
                    <h2>Booking Details</h2>
                </div>
                <div>

                    <table className='table table-bordered table-hover'>
                        <thead className='thead-dark'>
                            <tr className='table table-dark'>
                                <th>BookingId</th>
                                <th>UserName</th>
                                <th>MovieName</th>
                                <th>Movie Language</th>
                                <th>show time</th>
                                <th>date</th>
                              
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr className='table-success' key={index}>
                                    <td>{item.number.bookingId}</td>
                                    <td>{item.number.user.userName}</td>
                                    <td>{item.letter.title}</td>
                                    <td>{item.letter.language}</td>
                                    <td>{item.number.show.day}</td>
                                    <td>{item.number.show.time}</td>
                                   
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Orders;