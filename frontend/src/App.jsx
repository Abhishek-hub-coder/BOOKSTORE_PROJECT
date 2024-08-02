import React from 'react'
// import { Routes, Route, Router } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import CreateBook from './pages/CreateBook';
import DeleteBook from './pages/DeleteBook';
import ShowBook from './pages/ShowBook';
import EditBook from './pages/EditBook'; 



const App = () => {
  return (
    //use sometail-wind classes  


     


    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/books/create' element={<CreateBook />} />
        <Route path='/books/details/:id' element={<ShowBook />} />
        <Route path='/books/edit/:id' element={<EditBook />} />
        <Route path='/books/delete/:id' element={<DeleteBook />} />
      </Routes>
    </Router>

  )


}

export default App
