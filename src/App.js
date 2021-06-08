import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Docs from "./screens/Docs";
import Home from "./screens/Home";

import ComponentScreen from "./screens/ComponentScreen";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/docs" component={Docs} />
        <Route exact path="/components" component={ComponentScreen} />
      </BrowserRouter>
    </div>
  );
}

export default App;
