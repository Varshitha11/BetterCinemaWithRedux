import {Route, Routes} from 'react-router-dom';
import Home from "./Layouts/HomePage/Home";
import './App.css';
import AllTabs from './Layouts/SearchMoviesPage/AllTabs';
import TheatresPage from './Layouts/HomePage/components/TheatresPage';
import MoviesPage from './Layouts/HomePage/components/MoviesPage';
import ShowsPage from './Layouts/HomePage/components/ShowsPage';

function App(){
    return (
        <div className='app'>
         <Routes>
         <Route path ='/' element={ <Home/>}></Route>
         <Route path='/search' element={<AllTabs/>}></Route>
         <Route path='/theatresPage/:id' element={<TheatresPage />}></Route>
         <Route path='/moviespage/:theatreId' element={<MoviesPage />}></Route>
         <Route path='/showspage/:id/:theatreId' element={<ShowsPage />}></Route>
         </Routes>
        </div>
    );
}

export default App;