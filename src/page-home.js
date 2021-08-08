import React from "react";
import "./page-home.css";
import logo from "./logo.svg";

class PageHome extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row centrado">
          <div className="col-md-6 centrar">
              <img src={logo} alt="" id="logo" />
            <form
              className="form-inLine"
              onSubmit={this.handleSubmit}
              name="FOrm"
            >
              <div className="busqueda">
                <input
                  name="busqueda"
                  type="text"
                  id="buscar"
                  value={this.props.busqueda}
                  placeholder="Ingrese un valor"
                  onChange={this.props.onChange}
                />
              </div>
              <div className="actions">
                  <button className="btng">Buscar Artista Similar</button>
                  <button className="btng">Historia del Rock and roll</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default PageHome;
