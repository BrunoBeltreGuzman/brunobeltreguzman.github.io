import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DevFolio from "../pages/DevFolio";
import NotFound from "../pages/NotFound";
export default function router() {
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
