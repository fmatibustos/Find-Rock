import React from "react";
import "./loading.css";

function Error(props) {
    /* const children = props.children; */
  return (
    <React.Fragment>
   <div className="upp">
       <div className="col-md-12 centrar">
           <h3>Error{props.errorMensaje}</h3>
       </div>
   </div>
    </React.Fragment>
  );
}

export default Error;
