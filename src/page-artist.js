import React, { Component } from "react";
/* import ArtistCard from "./components/artist-card"; */
import SearchBar from "./components/search-bar";
/* import SearchResult from "./components/search-result"; */
import "./page-artist.css";
import u2 from "./img/u2-band.jpg";
import SimilarArtist from "./components/similar-artist";

class PageSearchResult extends Component {
  state = {};
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
        <div className="container">
          <div className="row centrar">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <img className="pic-artist margenes50" src={u2} alt="" />
              <h2>U2</h2>
              <p>
                U2 es una banda de rock alternativo originaria de Dublín
                (Irlanda), formada en 1976 por Bono (voz), The Edge (guitarra,
                teclado y voz), Adam Clayton (bajo), y Larry Mullen Jr.
                (batería). El sonido inicial de U2 tenía sus raíces en el
                post-punk, pero posteriormente irán incorporando a su música
                elementos de otros géneros: "Su cancionero es extenso y está
                repleto de variaciones: desde el rock más clásico hasta el pop
                más redondo, pasando por el coqueteo con la electrónica o los
                homenajes al góspel".1​ A lo largo de la búsqueda musical de la
                banda, han mantenido un sonido construido a base de
                instrumentales melódicos, destacados por la textura musical de
                The Edge y la voz expresiva de Bono, a las que se suma una base
                característica integrada por la batería de Mullen y el bajo de
                Clayton. Sus letras, a menudo ordenadas con imágenes
                espirituales, se centran en temas personales y temática de
                justicia social y paz.
              </p>
            </div>
          </div>
          <div className="row">
            <div><SimilarArtist/></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PageSearchResult;
