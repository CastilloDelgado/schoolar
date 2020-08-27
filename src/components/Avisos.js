import React from "react";
import { connect } from "react-redux";
import { Carousel } from "react-bootstrap";
import "../assets/styles/components/Avisos.scss";
import { getLista } from "../actions/avisos";
import LoginLoader from "../components/LoginLoader";

const Avisos = (props) => {
  const { avisos } = props;
  if (!avisos) {
    props.getLista();
  }

  if (avisos) {
    return (
      <Carousel className="avisos mb-3 mb-md-5">
        {avisos.map(({ titulo, texto, url }, index) => (
          <Carousel.Item key={index}>
            <div className="container">
              <div className="row p-0">
                <div className="col-12 col-xl-7 p-0 fondo-transparente">
                  <img
                    className="d-block w-100"
                    src={url}
                    alt={"Slide " + (index + 1)}
                  />
                </div>
                <div className="col-12 col-xl-5 avisos__mensaje p-5">
                  <h3 className="text-uppercase">
                    <strong>{titulo}</strong>
                  </h3>
                  <p className="pt-3 text-justify">{texto}</p>
                </div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    );
  } else {
    return <LoginLoader />;
  }
};

const mapStateToProps = (state) => ({
  avisos: state.avisos.lista,
});

const mapDispatchToProps = (dispatch) => ({
  getLista: () => dispatch(getLista()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Avisos);
