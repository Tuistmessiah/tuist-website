import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "../pages/Homepage";
import AboutUs from "../pages/AboutUs";
import Music from "../pages/Music";
import Members from "../pages/Members";
import Services from "../pages/Services";
import Events from "../pages/Events";

function MainRouter() {
  return (
    <React.Fragment>
      <BrowserRouter basename="/tuist-website">
        <Switch>
          <Route path="/" component={Homepage} exact={true} />
          <Route path="/aboutus" component={AboutUs} exact={true} />
          <Route path="/music/" component={Music} exact={true} />
          <Route path="/members/" component={Members} exact={true} />
          <Route path="/services/" component={Services} exact={true} />
          <Route path="/events/" component={Events} exact={true} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default MainRouter;
