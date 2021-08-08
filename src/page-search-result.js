import React, { Component } from "react";
import ArtistCard from "./components/artist-card";
import SearchBar from "./components/search-bar";
import SearchResult from "./components/search-result";
/* import { Link} from "react-router-dom"; */

class PageSearchResult extends Component {
  state = {};
  componentWillUnmount() {
    console.log ("componentWillUnmount()", "antes del metodo render");        
  }
    
  
  handleChange = (e) => {
    console.log(e, "Soy el Handle desde page");
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    return (
      <React.Fragment>
        <SearchBar
          onChange={this.handleChange}
          busqueda={this.state.busqueda}
        />
        <SearchResult busqueda={this.state.busqueda} />
      </React.Fragment>
    );
  }
}

export default PageSearchResult;
