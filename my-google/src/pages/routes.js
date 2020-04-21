import React from 'react'

import { BrowserRouter, Route } from 'react-router-dom'

import Main from './main/index'
import Search from './search/index'
const Routes = () => (
  <BrowserRouter>
    <Route path="/" exact component={Main} />
    <Route path="/search/:query" exact component={Search} />
  </BrowserRouter>
)
export default Routes;