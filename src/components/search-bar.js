import React from "react";
import "../components/search-bar.css";
import logo from "../logo.svg";
import { Link } from "react-router-dom";

class SearchBar extends React.Component {
  state = {
    busqueda: "",
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.name, e.target.value);
  };
  handleClick = e => {
    e.preventDefault();
    console.log(e.target.name, "ouch, me apretaron");
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.name);
  };
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-md-2">
            <Link to="/"><img src={logo} alt="Logo" className="logo-barra" /></Link>
          
          </div>
          <div className="col-md-4">
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
            </form>
          </div>
        </div>
        <hr />
      </React.Fragment>
    );
  }
}

export default SearchBar;
