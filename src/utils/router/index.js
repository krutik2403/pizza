import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import homeRoutes from '../../views/home/_routes'

const routes = [...homeRoutes]

const RootRouter = () => (
  <BrowserRouter>
    <Switch>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
    </Switch>
  </BrowserRouter>
)

export default RootRouter
