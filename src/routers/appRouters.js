import React, { Component, Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
const HomeComponent = React.lazy(() => import("../components/home"));


class AppRoute extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Suspense fallback={<div>Loading</div>}>
            <Route exact path="/" render={() => <Redirect to="/home" />} />
            <Route exact path="/home" render={(props) => <HomeComponent {...props} /> } />
          </Suspense>
        </Switch>
      </Router>
    );
  }
}
export default AppRoute;
