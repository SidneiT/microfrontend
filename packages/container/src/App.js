import React from "react";
import MarketingApp from "./components/MarketingApp"
import Header from "./components/Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact>
            <MarketingApp />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App