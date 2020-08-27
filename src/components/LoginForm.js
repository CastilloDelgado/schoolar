import React, { useState } from "react";
import { connect } from "react-redux";
import LoginLoader from "../components/LoginLoader";
import "../assets/styles/components/LoginForm.scss";
import { login } from "../actions/usuario";

const LoginForm = (props) => {
  const { fetching, error, loggedIn, data } = props;

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (form) {
      if (form.email && form.password) {
        props.login(
          "http://localhost/hixo-school-api/public/api/login",
          form,
          "LOGIN"
        );
      }
    }
  };

  let color = "";
  if (data) {
    color = data.color_hex;
  }

  return (
    <form className="loginForm p-3 p-sm-5">
      {fetching ? (
        <LoginLoader />
      ) : (
        <div>
          {error ? (
            <div className="alert alert-danger mb-4" role="alert">
              La inforamción es incorrecta, intentelo nuevamente.
            </div>
          ) : null}
          <img
            src={"http://kronosoftmx.com/kronomx.com/nexus/rlv_logo.png"}
            className="img-login mb-4 mt-3 mb-sm-4 mt-sm-0"
            alt="Logo de Hixo"
          />
          <div className="form-group">
            <label htmlFor="usernameInput">Usuario</label>
            <input
              type="text"
              className="form-control"
              id="usernameInput"
              name="email"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="passwordInput">Password</label>
            <input
              type="password"
              className="form-control"
              id="passwordInput"
              name="password"
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="btn  w-100"
            onClick={handleClick}
            style={{
              backgroundColor: `${color ? color : "gray"}`,
              color: "white",
            }}
          >
            <strong>Iniciar Sesión</strong>
          </button>
        </div>
      )}
    </form>
  );
};

const mapStateToProps = (state) => ({
  fetching: state.usuario.fetching,
  error: state.usuario.error,
  loggedIn: state.usuario.loggedIn,
  data: state.appConfig.data,
});

const mapDispatchToProps = (dispatch) => ({
  login: (url, body, type) => dispatch(login(url, body, type)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
