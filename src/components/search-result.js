import React, { Component } from "react";
import ArtistCard from "./artist-card";

class SearchResult extends Component {
  state = {
    data: {
      similarartists: {
        artist: [] 
      }
    }
  };
  componentDidMount() {
    this.fetchData(
      "https://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=u2&api_key=1151fd202d4222ecbcb6d3c3c22a93f8&format=json"
    );
  }
  fetchData = async (url) => {
    const response = await fetch(url);
    const data = await response.json;
    this.setState({
      data: data,
    });
  };
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            {this.state.data.similarartists.artist.map((item, i) => {
              return <ArtistCard img={item.image} titulo={item.name} key={i} />;
            })}
          </div>
          <h1>{this.props.busqueda}</h1>
        </div>
      </React.Fragment>
    );
  }
}

export default SearchResult;
