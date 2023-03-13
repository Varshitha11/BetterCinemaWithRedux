import {Route, Routes} from 'react-router-dom';
import Home from "./Layouts/HomePage/Home";
import './App.css';
import AllTabs from './Layouts/SearchMoviesPage/AllTabs';
import TheatresPage from './Layouts/HomePage/components/TheatresPage';
import MoviesPage from './Layouts/HomePage/components/MoviesPage';
import ShowsPage from './Layouts/HomePage/components/ShowsPage';
import SeatsPage from './Layouts/HomePage/components/SeatsPage';
import Payments from './Layouts/HomePage/components/Payments';
import TicketsPage from './Layouts/HomePage/components/TicketsPage';
import MainPage from './Layouts/Authentication/MainPage';
import LoginPage from './Layouts/Authentication/LoginPage';
import RegisterPage from './Layouts/Authentication/RegisterPage';

function App(){
    return (
        <div className='app'>
         <Routes>
         <Route path='/' element={<MainPage />}></Route>
         <Route path='/login' element={<LoginPage />}></Route>
         <Route path='/register' element={<RegisterPage />}></Route>
         <Route path ='/home' element={ <Home/>}></Route>
         <Route path='/search' element={<AllTabs/>}></Route>
         <Route path='/theatresPage/:id' element={<TheatresPage />}></Route>
         <Route path='/moviespage/:theatreId' element={<MoviesPage />}></Route>
         <Route path='/showspage/:id/:theatreId' element={<ShowsPage />}></Route>
         <Route path='/seatsPage' element={<SeatsPage />}></Route>
         <Route path='/paymentPage' element={<Payments/>}></Route>
         <Route path='/ticketsPage' element={<TicketsPage/>}></Route>
         </Routes>
        </div>
    );
}

export default App;