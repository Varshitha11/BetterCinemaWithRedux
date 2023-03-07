import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import SearchMovie from "./SearchMovie";
import { fetchMoviesByTitle } from "../../store";
import { fetchMovies } from "../../store";

function SearchByTitle(){

    const[search ,setSearch] = useState('');

    const dispatch = useDispatch();
    const { data } = useSelector((state) => {
       return state.movies;
       
    })

    useEffect(() => {
        dispatch(fetchMovies());
    }, [dispatch]);

     const searchHandleChange = (e) => {
       if(search)
        dispatch(fetchMoviesByTitle(search));
       else
       dispatch(fetchMovies());
        
    }

    return (
        <div className='container'>
            <div className="row justify-content-center">
                <div className="col-sm-6">
                    <div className='d-flex'>
                        <input className='form-control me-2' type='search'
                            placeholder='Search' aria-labelledby='Search'
                            onChange={e => setSearch(e.target.value)} 
                        />
                        <button className='btn btn-outline-success'
                            onClick={searchHandleChange}>
                            Search
                        </button>
                    </div>
                </div>
            </div>
            <>
            {data.map(movie => (
                    <SearchMovie key={movie.id} movie={movie} />
                ))}
            </>


            <Link className="btn btn-primary  mt-2 " to={"/"}>
                Back to Home
            </Link>

        </div>
    );
}

export default SearchByTitle;