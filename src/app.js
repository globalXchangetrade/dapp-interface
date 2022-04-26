import React from 'react'
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import { useOnlineStatus } from './hooks/useOnlineStatus'
import { ScrollToTop } from './components/ScrollToTop'
import { HelmetTags } from './components/HelmetTags'

import { PageNotFound } from './pages/PageNotFound'

import { Home } from './pages/Home'

export const App = () => {
  const onlineStatus = useOnlineStatus()

  return (
    <>
      {onlineStatus && (
        <ScrollToTop>
          <HelmetTags />
          <Switch>
            <Route exact path='/'>
              <Redirect to='/home' />
            </Route>
            <Route exact path='/home'>
              <Home />
            </Route>
            <Route path='*'>
              <PageNotFound />
            </Route>
          </Switch>
        </ScrollToTop>
      )}
    </>
  )
}