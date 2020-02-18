import React from 'react';
import { BrowserRouter,Switch, Route } from 'react-router-dom';

const Router = ({ history,routes, children }) => (
   <BrowserRouter>
    <Switch>
      {routes.map((route, i) => (
        <RouteWithSubRoutes
          key={i}
          {...route}
        />
      ))}
      <Route path="*" render={() => <h1>404! Not Found</h1>} />
    </Switch>
  </BrowserRouter>
);

const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    render={props =>
      <route.component
        {...props}
        routes={route.routes}
      />
    }
  />
);

export default Router;