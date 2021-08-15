import React from "react";
import "./modal.css";

class Modal extends React.Component{
 
    render (){
        return (
            <React.Fragment>
                <div className="modale">
                    <div className="cardModal">
                        <button className="salir">X</button>
                        {this.props.children}
                    </div>
                </div>
            </React.Fragment>
        )
    }



}

export default Modal;