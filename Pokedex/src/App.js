import React from 'react'
import {BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Layout from './components/Layout'

import Home from './pages/Home'
import Pokemons from './pages/Pokemons'
import NotFound from './pages/NotFound' 

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/Pokemons" component={Pokemons}/>
          <Route path="/404" component={NotFound}/>
          <Redirect from="*" to="/404"/>
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App