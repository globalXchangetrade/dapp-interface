import React from 'react';
import {
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

import { MarketPlace } from './pages/MarketPlace';
import { PageNotFound } from './pages/PageNotFound';
import { Header } from './components/Header';

export const App:React.FC = () => {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Navigate to='/market-place' />}></Route>
        <Route path='/market-place' element={<MarketPlace/>}></Route>
        <Route path='*' element={<PageNotFound/>}></Route>
      </Routes>
    </>
  )
}
