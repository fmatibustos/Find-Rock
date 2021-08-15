import React from "react";
import "./page-home.css";
import logo from "./logo.svg";
import {ETIME} from "constants";
import ReactDOM from "react-dom";
import Modal from "./components/modal";

class PageHome extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.history.push("/busqueda?" + this.state.busqueda);
  };
  handleChange = (e) => {
    this.setState({
      busqueda: e.target.value,
    });
  };
  state = {
    busqueda: "",
  };
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
                  value={this.state.busqueda}
                  placeholder="Ingrese un valor"
                  onChange={this.handleChange}
                />
              </div>
              <div className="actions">
                <button className="btng" type="submit">
                  Buscar Artista Similar
                </button>
                <button className="btng">Historia del Rock and roll</button>
              </div>
            </form>
          </div>
        </div>
        {ReactDOM.createPortal(
          <Modal>
            <h4>Jaeger Test</h4>
          </Modal>,
          document.getElementById("teleport")
        )}
      </div>
    );
  }
}

export default PageHome;
