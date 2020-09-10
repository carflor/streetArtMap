import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import Layout from '../../UIComponents/Layout/Layout'
import LoginPage from '../../pages/LoginPage/LoginPage'
import ExplorePage from '../../pages/ExplorePage/ExplorePage'
import MapPage from '../../pages/MapPage/MapPage'
import CameraPage from '../../pages/CameraPage/CameraPage'
import ProfilePage from '../../pages/ProfilePage/ProfilePage'
import PaintingCard from '../PaintingCard/PaintingCard'
import './App.css'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const routes = isLoggedIn ? (
    <Layout>
      <Switch>
        <Route path='/explore' exact>
          <ExplorePage />
        </Route>
        <Route path='/map' exact>
          <MapPage />
        </Route>
        <Route path='/create' exact>
          <CameraPage />
        </Route>
        <Route path='/profile' exact>
          <ProfilePage />
        </Route>
        <Route path='/arts/:id' exact>
          <PaintingCard />
        </Route>
      </Switch>
    </Layout>
  ) : (
    <Route path='/' exact>
      <LoginPage setIsLoggedIn={setIsLoggedIn} />
    </Route>
  )

  return <section className='app-container'>{routes}</section>
}

export default App
