import React from 'react'
import { Route } from 'react-router-dom'

const RouteWithSubRoutes = route => {
  return (
    <Route
      path={route.path}
      render={props => {
        document.title = route.title ? route.title : '默认title'
        return <route.component {...props} routes={route.routes} />
      }}
    />
  )
}

export default RouteWithSubRoutes
