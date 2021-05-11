import React, { Suspense } from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import routes from './router'
import RouteWithSubRoutes from './router/route-with-sub-routes'

const App = (): JSX.Element => (
  <BrowserRouter>
    <Suspense fallback={<div>loading</div>}>
      <Switch>
        {routes.map(route => (
          <RouteWithSubRoutes key={route} {...route} />
        ))}
      </Switch>
    </Suspense>
  </BrowserRouter>
)

export default App
