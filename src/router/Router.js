import React from "react";
import {
       BrowserRouter as Router,
       Route,
       Switch,
       HashRouter,
       Link,
} from "react-router-dom";
import DevFolio from "../pages/DevFolio";
import NotFound from "../pages/NotFound";
export default function router() {
       return (
              <HashRouter basename="/">
                     <Route exact path="/">
                            <DevFolio></DevFolio>
                     </Route>
                     <Route component={NotFound} />
              </HashRouter>
       );

       return (
              <div>
                     <Router>
                            <Switch>
                                   <Route exact path="/">
                                          <DevFolio></DevFolio>
                                   </Route>
                                   <Route component={NotFound} />
                            </Switch>
                     </Router>
              </div>
       );
}
//<Route component={NotFound} />
