import React, { Component } from "react";
import ArtistCard from "./artist-card";
import Loading from "./loading";
import Error from "./error";

class SearchResult extends Component {
  state = {
    loading: false,
    error: null,
    data: {
      similarartists: {
        artist: [],
      },
    },
  };
  
  componentWillReceiveProps(e){   // Se ejecuta cada vez que el componente recibe informacion
    let termino = e.busqueda;
    this.fetchData(
  "https://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist="+ termino +"&api_key=1151fd202d4222ecbcb6d3c3c22a93f8&format=json"
    );
  };

  /* componentDidMount() {
    this.fetchData(
      "https://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=u2&api_key=1151fd202d4222ecbcb6d3c3c22a93f8&format=json"
    );
  } */
  fetchData = async (url) => {
    this.setState({
      loading: true,
    });
    const response = await fetch(url);
    const data = await response.json();
    if (data.error) {
      this.setState({
        loading: false,
        error: true,
        errorMensaje:data.message
      });
    } else {
      this.setState({
        error: false,
        loading: false,
        data: data,
      });
    }
  };
  render() {
    return (
      <React.Fragment>
        {this.state.loading && <Loading />}
        {this.state.error && <Error errorMensaje= {this.state.errorMensaje}/>}
        <div className="container">
          <div className="row">
            {this.state.data.similarartists.artist.map((item, i) => {
              return (
                <ArtistCard
                  img={item.image[2]["#text"]}
                  titulo={item.name}
                  key={i}
                />
              );
            })}
          </div>
          <h1>{this.props.busqueda}</h1>
        </div>
      </React.Fragment>
    );
  }
}

export default SearchResult;
