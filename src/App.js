
import './App.css';

import About from '../src/Componets/About/About'
import Blog from '../src/Componets/Blog/Blog'


import Home from './Componets/Home/Home';


import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/Blog' element={<Blog />}></Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>


    </>






  );
}

export default App;
