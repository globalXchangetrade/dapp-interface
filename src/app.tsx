import React from 'react';
import {
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

import { Header } from './components/Header';

// pages
import { LendingBorrowing } from './pages/LendingBorrowing';
import { MarketPlace } from './pages/MarketPlace';
import { Portfolio } from './pages/Portfolio';
import { PageNotFound } from './pages/PageNotFound';
import { Stake } from './pages/Stake';
import { Option } from './pages/Option';
import { Swap } from './pages/Swap';
import { Index } from './pages/Index';

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
        <Route path='/swap' element={<Swap />}></Route>
        <Route path='/portfolio' element={<Portfolio />}></Route>
        <Route path='/index' element={<Index />}></Route>
        <Route path='*' element={<PageNotFound/>}></Route>
      </Routes>
    </>
  )
}
