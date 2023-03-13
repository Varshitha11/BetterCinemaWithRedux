import { Link } from "react-router-dom";


function Navbar(props) {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-4">
                <div className="container-fluid">
                    <Link to= '/home' className="navbar-brand ">BetterCinemaExperience</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to ='/home'  className="nav-link ">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to ='/search'  className="nav-link ">Search Movies</Link>
                            </li>
                            <li className="nav-item ">
                                <Link to ='/'  className="btn btn-light " >Logout</Link>
                            </li>
                        </ul>
                    </div>
                    {/* <div className="float-right mx-2" id="navbarNav">
                        <Link className="btn btn-light " >
                            Logout
                        </Link>

                    </div> */}
                </div>
            </nav>
        </>

    );
}

export default Navbar;