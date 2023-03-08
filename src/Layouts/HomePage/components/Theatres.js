import { Link } from 'react-router-dom';
import { useEffect } from "react";
import { useDispatch ,useSelector} from "react-redux";
import { fetchTheatres } from "../../../store";

function Theatres(){
    
    const dispatch = useDispatch();
    const {isLoading, data, error} = useSelector((state) => {
       return state.theatres;
       
    })

    useEffect(() => {
        dispatch(fetchTheatres());
    }, [dispatch]);

    if(isLoading) {
        return <div>Loading...</div>
    }

    if(error){
        return <div>Error fetching data...</div>
    }
    return (
        <div className='container'>
            <div className="row justify-content-center">
                <div className="col-sm-8">
                    <h4>Theatres</h4>
                    {data.map(theatre => (
                        <div className='card mt-3 shadow p-3 mb-3 bg-body rounded' key={theatre.theatreId}>
                            <div className='row g-0'>
                                <div className='col-md-2'>
                                    <h4>
                                        {theatre.theatreName}
                                    </h4>

                                </div>
                                <div className='col-md-6'>
                                    <div className='card-body'>

                                        <h4>
                                            {theatre.city}
                                        </h4>
                                

                                    </div>
                                </div>
                                <div className='col-md-4 d-flex justify-content-center align-items-center'>
                                    <Link to={`/moviespage/${theatre.theatreId}`}  className='btn btn-outline-success text-dark' >
                                        View Movies
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Theatres;