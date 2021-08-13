import React, { Component } from "react";
import ArtistCard from "./components/artist-card";
import SearchBar from "./components/search-bar";
import SearchResult from "./components/search-result";
/* import { Link} from "react-router-dom"; */

class PageSearchResult extends Component {
  state = {
    busqueda: "",
  };
  componentDidMount() {
    let search = this.props.history.location.search
      .substr(1)
      .replace("%20", " ");

    this.setState({
      busqueda: search
    })
  }
  componentWillMount() {}
  componentWillUnmount() {}

  handleChange = e => {
    /* console.log(e, "Soy el Handle desde page"); */
    this.setState({
      busqueda: e.target.value,
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
