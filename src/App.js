import React, { Component } from "react";
import "./App.css";
import PageSearchResult from "./page-search-result";
import PageHome from "./page-home";
import PageArtist from "./page-artist";
/* import Footer from "./components/footer"; */
import Layout from "./components/layout";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
       
        <Layout>
        <Switch>
          <Route exact path="/busqueda" component={PageSearchResult}></Route>
          <Route exact path="/artista" component={PageArtist}></Route>
          <Route path="/" component={PageHome}></Route>
        </Switch>
        </Layout>
      </BrowserRouter>

    );
  }
}

export default App;
