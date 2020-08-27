import React from "react";
import { connect } from "react-redux";
import LoginForm from "../components/LoginForm";
import "../assets/styles/Login.scss";

const Login = ({ data }) => {
  let backgroundImage = "http://kronosoftmx.com/kronomx.com/nexus/vector.png";
  console.log(data);
  return (
    <div className="container-fluid ">
      <div className="row login">
        <div
          className="col d-none d-lg-block login__design "
          style={{
            backgroundImage: `url(${data ? data.vector_url : backgroundImage})`,
          }}
        >
          <div className="container  h-100 pl-5 pr-5">
            <div className="row align-items-end h-50 pb-2">
              <div className="col login__header">
                <strong>{data ? data.titulo : ""}</strong>
              </div>
            </div>
            <div className="row pt-2">
              <div className="col login__text">{data ? data.mensaje : ""}</div>
            </div>
          </div>
        </div>
        <div className="col login__form">
          <div className="container h-100">
            <div className="row align-items-center h-100">
              <div className="col-12 offset-md-2 col-md-8">
                <LoginForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  data: state.appConfig.data,
});

export default connect(mapStateToProps, null)(Login);
