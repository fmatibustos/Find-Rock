import React, { Component } from "react";
/* import ArtistCard from "./components/artist-card"; */
import SearchBar from "./components/search-bar";
/* import SearchResult from "./components/search-result"; */
import "./page-artist.css";
import u2 from "./img/u2-band.jpg";
import SimilarArtist from "./components/similar-artist";
import Loading from "./components/loading";
import Error from "./components/error";



class PageSearchResult extends Component {
  state = {
    data: {
      artist: {
        image:[
          {"#text":""},
          {"#text":""},
          {"#text":""},
          {"#text":""},
          {"#text":""}
        ],
        bio:{
          summary:""
        },
        similar:{
          artist: [
            {
              name: "",
              url:"",
              image:[
                {"#text":""},
                {"#text":""},
                {"#text":""},
                {"#text":""},
                {"#text":""}
              ]
            }
          ]
        }
      }
    }
  };
  handleChange = (e) => {
    console.log(e, "Soy el Handle desde page");
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  componentDidMount() {
    let artista = this.props.history.location.search.substr(1);
    this.fetchData(
      "http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist="+ artista +"&api_key=1151fd202d4222ecbcb6d3c3c22a93f8&format=json"
      /* "https://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=u2&api_key=1151fd202d4222ecbcb6d3c3c22a93f8&format=json" */
    );
  } 

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
        <SearchBar
          onChange={this.handleChange}
          busqueda={this.state.busqueda}
        />
        {this.state.loading && <Loading />}
        {this.state.error && <Error errorMensaje= {this.state.errorMensaje}/>}
        <div className="container">
          <div className="row centrar">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <img className="pic-artist margenes50" src={this.state.data.artist.image[3]["#text"]} alt="" />
              <h2>{this.state.data.artist.name}</h2>
              <p>
                {this.state.data.artist.bio.summary}
              </p>
            </div>
          </div>
          <div className="row">
            <div><SimilarArtist data={this.state.data.artist.similar.artist} /></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PageSearchResult;
