import React from 'react';
import {
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

import { MarketPlace } from './pages/MarketPlace';
import { LendingBorrowing } from './pages/LendingBorrowing';
import { PageNotFound } from './pages/PageNotFound';
import { Header } from './components/Header';
import { Stake } from './pages/Stake';
import { Option } from './pages/Option';

export const App:React.FC = () => {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Navigate to='/market-place' />}></Route>
        <Route path='/market-place' element={<MarketPlace/>}></Route>
        <Route path='/lending-borrowing' element={<LendingBorrowing/>}></Route>
        <Route path='/stake' element={<Stake/>}></Route>
        <Route path='/option' element={<Option/>}></Route>
        <Route path='*' element={<PageNotFound/>}></Route>
      </Routes>
    </>
  )
}
