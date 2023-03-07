import {Route, Routes} from 'react-router-dom';
import Home from "./Layouts/HomePage/Home";
import './App.css';
import AllTabs from './Layouts/SearchMoviesPage/AllTabs';

function App(){
    return (
        <div className='app'>
         <Routes>
         <Route path ='/' element={ <Home/>}></Route>
         <Route path='/search' element={<AllTabs/>}></Route>
         </Routes>
        </div>
    );
}

export default App;