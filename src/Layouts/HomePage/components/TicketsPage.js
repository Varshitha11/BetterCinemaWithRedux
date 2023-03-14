import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Navbar/Navbar';


function TicketsPage(props) {
    return (
        <>
        <Navbar/>
        <div className='container'>
            <div className="row justify-content-center">
                <div className="col-sm-5">
                    <div className='card mt-5 shadow p-3 mb-3 bg-body rounded'>

                        <div className='col-md-12 text-center'>
                            <img src={require('./../../../images/MVEImages/Tickets.jpg')}
                                width='220'
                                height='220'
                                alt='Book'
                            />
                        </div>
                        <div className='text-center mt-3'>
                            <h3>
                                Enjoy the Show
                            </h3>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        </>
    );
}

export default TicketsPage;