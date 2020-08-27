import React from "react";
import "../assets/styles/components/LoginLoader.scss";

const LoginLoader = () => (
  <div>
    <p className='loginLoaderText'><strong>Cargando...</strong></p>
    <div className="loader"></div>
  </div>
);

export default LoginLoader;
