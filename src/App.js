import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { decrement, increment } from './Redax/slices/filterSlice';

import Header from './components/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Cart from "./pages/Card";
import FullPizza from './pages/FullPizza';

import './scss/app.scss';

// export const SearchContext = React.createContext();

export default function App() {

  // const count = useSelector((state) => state.counter.count);
  // const dispatch = useDispatch();

  // const [searchValue, setSearchValue] = React.useState('');

  return (
    <div className="wrapper">
      {/* <SearchContext.Provider value={{ searchValue, setSearchValue }}> */}
      <Header />
      <div className="content">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/pizzas/:id' element={<FullPizza />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
      {/* </SearchContext.Provider> */}
    </div>
  );
}
