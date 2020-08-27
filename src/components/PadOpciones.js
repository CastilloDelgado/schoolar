import React from "react";
import { connect } from "react-redux" 
import { Link } from "react-router-dom";
import "../assets/styles/components/PadOpciones.scss";

const PadOpciones = ({ opciones, appConfig }) => {
  const color = appConfig ? appConfig.color_hex : ""
  return (
    <div className="container-fluid text-center pb-3 pb-md-5 padOpciones">
      <div className="row justify-content-between ">
        {opciones.map((opcion, index) => (
          <div key={index} className="col-sm-11 col-md padOpciones__pad pt-5" style={{backgroundColor: `${color}`}}>
            <h4>
              <strong>{opcion.titulo}</strong>
            </h4>
            {opcion.subtitulos.map((sub, index) => (
              <Link key={index} to={sub.link}>
                <p className="mb-0">{sub.titulo}</p>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  appConfig: state.appConfig.data
})

export default connect(mapStateToProps, null)(PadOpciones);
