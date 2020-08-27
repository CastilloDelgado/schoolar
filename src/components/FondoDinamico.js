import React from "react";
import { connect } from "react-redux";
import "../assets/styles/components/FondoDinamico.scss";

const FondoDinamico = ({ appConfig }) => {
  const color = appConfig ? appConfig.color_hex : "gray"
  return (
    <div className="container-fluid h-100 m-0 p-0">
      <div className="area">
        <ul className="circles">
          <li style={{ backgroundColor: `${color}` }}></li>
          <li style={{ backgroundColor: `${color}` }}></li>
          <li style={{ backgroundColor: `${color}` }}></li>
          <li style={{ backgroundColor: `${color}` }}></li>
          <li style={{ backgroundColor: `${color}` }}></li>
          <li style={{ backgroundColor: `${color}` }}></li>
          <li style={{ backgroundColor: `${color}` }}></li>
          <li style={{ backgroundColor: `${color}` }}></li>
          <li style={{ backgroundColor: `${color}` }}></li>
          <li style={{ backgroundColor: `${color}` }}></li>
          <li style={{ backgroundColor: `${color}` }}></li>
          <li style={{ backgroundColor: `${color}` }}></li>
          <li style={{ backgroundColor: `${color}` }}></li>
          <li style={{ backgroundColor: `${color}` }}></li>
          <li style={{ backgroundColor: `${color}` }}></li>
          <li style={{ backgroundColor: `${color}` }}></li>
          <li style={{ backgroundColor: `${color}` }}></li>
          <li style={{ backgroundColor: `${color}` }}></li>
          <li style={{ backgroundColor: `${color}` }}></li>
          <li style={{ backgroundColor: `${color}` }}></li>
          <li style={{ backgroundColor: `${color}` }}></li>
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  appConfig: state.appConfig.data,
});

export default connect(mapStateToProps, null)(FondoDinamico);
