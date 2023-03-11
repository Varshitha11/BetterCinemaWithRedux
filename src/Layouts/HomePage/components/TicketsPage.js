import React from 'react';
import { Link } from 'react-router-dom';


function TicketsPage(props) {
    return (
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
                            <h4>
                                Enjoy the Show
                            </h4>
                            <Link className="btn btn-primary mx-2 mt-3" to={"/"}>
                                Back To Home Page
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default TicketsPage;