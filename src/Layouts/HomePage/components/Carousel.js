import { useEffect } from "react";
import { useDispatch ,useSelector} from "react-redux";
import { fetchMovies } from "../../../store";
import ReturnMovie from "./ReturnMovie";

function Carousel(){

    const dispatch = useDispatch();
    const {isLoading, data, error} = useSelector((state) => {
       return state.movies;
    })
    
    useEffect(() => {
        dispatch(fetchMovies());
    }, [dispatch]);

    let content;
    if(isLoading) {
        content =  <div>Loading...</div>
    }

    if(error){
        content =  <div>Error fetching data...</div>
    }

    return (
        <div className='container mt-5' style={{ height: 550 }}>
             {content}
            <div className='homepage-carousel-title text-white'>
                <h3>New Movies </h3>
            </div>
            <div id='carouselExampleControls' className='carousel carousel-dark slide mt-5 
                d-none d-lg-block' data-bs-interval='false'>

                {/* Desktop */}
                <div className='carousel-inner'>
                    <div className='carousel-item active'>
                        <div className='row d-flex justify-content-center align-items-center'>
                            {
                            data.slice(0, 3).map(movie => (
                                <ReturnMovie key={movie.id} movie = {movie} />
                            ))}
                        </div>
                    </div>
                    <div className='carousel-item'>
                        <div className='row d-flex justify-content-center align-items-center'>
                           
                            {
                              data.slice(3, 6).map(movie => (
                                  <ReturnMovie key ={movie.id} movie = {movie}/>
                            ))}
                        </div>
                    </div>
                    <button className='carousel-control-prev' type='button'
                        data-bs-target='#carouselExampleControls' data-bs-slide='prev'>
                        <span className='carousel-control-prev-icon' aria-hidden='true'></span>
                        <span className='visually-hidden'>Previous</span>
                    </button>
                    <button className='carousel-control-next' type='button'
                        data-bs-target='#carouselExampleControls' data-bs-slide='next'>
                        <span className='carousel-control-next-icon' aria-hidden='true'></span>
                        <span className='visually-hidden'>Next</span>
                    </button>
                </div>
            </div>

            {/* Mobile */}
            <div className='d-lg-none mt-3'>
                <div className='row d-flex justify-content-center align-items-center'>
                   
                <ReturnMovie key={data.id} movie ={data}  />
                </div>
            </div>
        </div>
    );
}

export default Carousel;