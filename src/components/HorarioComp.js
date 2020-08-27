import React from "react";
import "../assets/styles/components/HorarioComp.scss";

const HorarioComp = () => {

  const horario = {
    lunes: {
      m1: {
        asignatura: "Matemáticas",
        ubicacion: "Aula: B101",
      },
      m2: {
        asignatura: "Matemáticas",
        ubicacion: "Aula: B101",
      },
      m3: {
        asignatura: "Ingles",
        ubicacion: "Aula: LAB001",
      },
      m4: {
        asignatura: "Receso",
        ubicacion: "Area General",
      },
      m5: {
        asignatura: "Ingles",
        ubicacion: "Aula: LAB001",
      },
      m6: {
        asignatura: "Geografía",
        ubicacion: "Aula: A201",
      },
      m7: {
        asignatura: "Deportes",
        ubicacion: "Aula: Gimnasio 1",
      },
      m8: {
        asignatura: "Matemáticas",
        ubicacion: "Aula: Gimnasio 1",
      },
    },
    martes: {
      m1: {
        asignatura: "Matemáticas",
        ubicacion: "Aula: B101",
      },
      m2: {
        asignatura: "Matemáticas",
        ubicacion: "Aula: B101",
      },
      m3: {
        asignatura: "Ingles",
        ubicacion: "Aula: LAB001",
      },
      m4: {
        asignatura: "Receso",
        ubicacion: "Area General",
      },
      m5: {
        asignatura: "Ingles",
        ubicacion: "Aula: LAB001",
      },
      m6: {
        asignatura: "Geografía",
        ubicacion: "Aula: A201",
      },
      m7: {
        asignatura: "Deportes",
        ubicacion: "Aula: Gimnasio 1",
      },
      m8: {
        asignatura: "Matemáticas",
        ubicacion: "Aula: Gimnasio 1",
      },
    },
    miercoles: {
      m1: {
        asignatura: "Matemáticas",
        ubicacion: "Aula: B101",
      },
      m2: {
        asignatura: "Matemáticas",
        ubicacion: "Aula: B101",
      },
      m3: {
        asignatura: "Ingles",
        ubicacion: "Aula: LAB001",
      },
      m4: {
        asignatura: "Receso",
        ubicacion: "Area General",
      },
      m5: {
        asignatura: "Ingles",
        ubicacion: "Aula: LAB001",
      },
      m6: {
        asignatura: "Geografía",
        ubicacion: "Aula: A201",
      },
      m7: {
        asignatura: "Deportes",
        ubicacion: "Aula: Gimnasio 1",
      },
      m8: {
        asignatura: "Matemáticas",
        ubicacion: "Aula: Gimnasio 1",
      },
    },
    jueves: {
      m1: {
        asignatura: "Matemáticas",
        ubicacion: "Aula: B101",
      },
      m2: {
        asignatura: "Matemáticas",
        ubicacion: "Aula: B101",
      },
      m3: {
        asignatura: "Ingles",
        ubicacion: "Aula: LAB001",
      },
      m4: {
        asignatura: "Receso",
        ubicacion: "Area General",
      },
      m5: {
        asignatura: "Ingles",
        ubicacion: "Aula: LAB001",
      },
      m6: {
        asignatura: "Geografía",
        ubicacion: "Aula: A201",
      },
      m7: {
        asignatura: "Deportes",
        ubicacion: "Aula: Gimnasio 1",
      },
      m8: {
        asignatura: "Matemáticas",
        ubicacion: "Aula: Gimnasio 1",
      },
    },
    viernes: {
      m1: {
        asignatura: "Matemáticas",
        ubicacion: "Aula: B101",
      },
      m2: {
        asignatura: "Matemáticas",
        ubicacion: "Aula: B101",
      },
      m3: {
        asignatura: "Ingles",
        ubicacion: "Aula: LAB001",
      },
      m4: {
        asignatura: "Receso",
        ubicacion: "Area General",
      },
      m5: {
        asignatura: "Ingles",
        ubicacion: "Aula: LAB001",
      },
      m6: {
        asignatura: "Geografía",
        ubicacion: "Aula: A201",
      },
      m7: {
        asignatura: "Deportes",
        ubicacion: "Aula: Gimnasio 1",
      },
      m8: {
        asignatura: "Matemáticas",
        ubicacion: "Aula: Gimnasio 1",
      },
    },
  };

  return (
    <div className="container horario mb-5 p-5 text-center">
      <h3 className="mb-4"><strong>Horario</strong></h3>
      <div className="row">
        <div className="col p-3 horario__header">
          <strong>Hora</strong>
        </div>
        <div className="col  p-3 horario__header">
          <strong>Lunes</strong>
        </div>
        <div className="col  p-3 horario__header">
          <strong>Martes</strong>
        </div>
        <div className="col  p-3 horario__header">
          <strong>Miercoles</strong>
        </div>
        <div className="col  p-3 horario__header">
          <strong>Jueves</strong>
        </div>
        <div className="col p-3  horario__header">
          <strong>Viernes</strong>
        </div>
      </div>
      <div className="row">
        <div className="col p-3 horario__header">07:00 - 08:00 HRS</div>
        <div className="col p-3"><p className="mb-1"><strong>{horario.lunes.m1.asignatura}</strong></p><p>{horario.lunes.m1.ubicacion}</p></div>
        <div className="col p-3"><p className="mb-1"><strong>{horario.martes.m1.asignatura}</strong></p><p>{horario.martes.m1.ubicacion}</p></div>
        <div className="col p-3"><p className="mb-1"><strong>{horario.miercoles.m1.asignatura}</strong></p><p>{horario.miercoles.m1.ubicacion}</p></div>
        <div className="col p-3"><p className="mb-1"><strong>{horario.jueves.m1.asignatura}</strong></p><p>{horario.jueves.m1.ubicacion}</p></div>
        <div className="col p-3"><p className="mb-1"><strong>{horario.viernes.m1.asignatura}</strong></p><p>{horario.viernes.m1.ubicacion}</p></div>
      </div>
      <div className="row">
        <div className="col p-3 horario__header">08:00 - 09:00 HRS</div>
        <div className="col p-3"><p className="mb-1"><strong>{horario.lunes.m2.asignatura}</strong></p><p>{horario.lunes.m2.ubicacion}</p></div>
        <div className="col p-3"><p className="mb-1"><strong>{horario.martes.m2.asignatura}</strong></p><p>{horario.martes.m2.ubicacion}</p></div>
        <div className="col p-3"><p className="mb-1"><strong>{horario.miercoles.m2.asignatura}</strong></p><p>{horario.miercoles.m2.ubicacion}</p></div>
        <div className="col p-3"><p className="mb-1"><strong>{horario.jueves.m2.asignatura}</strong></p><p>{horario.jueves.m2.ubicacion}</p></div>
        <div className="col p-3"><p className="mb-1"><strong>{horario.viernes.m2.asignatura}</strong></p><p>{horario.viernes.m2.ubicacion}</p></div>
      </div>
      <div className="row">
        <div className="col p-3 horario__header">09:00 - 10:00 HRS</div>
        <div className="col p-3"><p className="mb-1"><strong>{horario.lunes.m3.asignatura}</strong></p><p>{horario.lunes.m3.ubicacion}</p></div>
        <div className="col p-3"><p className="mb-1"><strong>{horario.martes.m3.asignatura}</strong></p><p>{horario.martes.m3.ubicacion}</p></div>
        <div className="col p-3"><p className="mb-1"><strong>{horario.miercoles.m3.asignatura}</strong></p><p>{horario.miercoles.m3.ubicacion}</p></div>
        <div className="col p-3"><p className="mb-1"><strong>{horario.jueves.m3.asignatura}</strong></p><p>{horario.jueves.m3.ubicacion}</p></div>
        <div className="col p-3"><p className="mb-1"><strong>{horario.viernes.m3.asignatura}</strong></p><p>{horario.viernes.m3.ubicacion}</p></div>
      </div>
      <div className="row">
        <div className="col p-3 horario__header">10:00 - 11:00 HRS</div>
        <div className="col p-3"><p className="mb-1"><strong>{horario.lunes.m4.asignatura}</strong></p><p>{horario.lunes.m4.ubicacion}</p></div>
        <div className="col p-3"><p className="mb-1"><strong>{horario.martes.m4.asignatura}</strong></p><p>{horario.martes.m4.ubicacion}</p></div>
        <div className="col p-3"><p className="mb-1"><strong>{horario.miercoles.m4.asignatura}</strong></p><p>{horario.miercoles.m4.ubicacion}</p></div>
        <div className="col p-3"><p className="mb-1"><strong>{horario.jueves.m4.asignatura}</strong></p><p>{horario.jueves.m4.ubicacion}</p></div>
        <div className="col p-3"><p className="mb-1"><strong>{horario.viernes.m4.asignatura}</strong></p><p>{horario.viernes.m4.ubicacion}</p></div>
      </div>
      <div className="row">
        <div className="col p-3 horario__header">11:00 - 12:00 HRS</div>
        <div className="col p-3"><p className="mb-1"><strong>{horario.lunes.m5.asignatura}</strong></p><p>{horario.lunes.m5.ubicacion}</p></div>
        <div className="col p-3"><p className="mb-1"><strong>{horario.martes.m5.asignatura}</strong></p><p>{horario.martes.m5.ubicacion}</p></div>
        <div className="col p-3"><p className="mb-1"><strong>{horario.miercoles.m5.asignatura}</strong></p><p>{horario.miercoles.m5.ubicacion}</p></div>
        <div className="col p-3"><p className="mb-1"><strong>{horario.jueves.m5.asignatura}</strong></p><p>{horario.jueves.m5.ubicacion}</p></div>
        <div className="col p-3"><p className="mb-1"><strong>{horario.viernes.m5.asignatura}</strong></p><p>{horario.viernes.m5.ubicacion}</p></div>
      </div>
      <div className="row">
        <div className="col p-3 horario__header">12:00 - 13:00 HRS</div>
        <div className="col p-3"><p className="mb-1"><strong>{horario.lunes.m6.asignatura}</strong></p><p>{horario.lunes.m6.ubicacion}</p></div>
        <div className="col p-3"><p className="mb-1"><strong>{horario.martes.m6.asignatura}</strong></p><p>{horario.martes.m6.ubicacion}</p></div>
        <div className="col p-3"><p className="mb-1"><strong>{horario.miercoles.m6.asignatura}</strong></p><p>{horario.miercoles.m6.ubicacion}</p></div>
        <div className="col p-3"><p className="mb-1"><strong>{horario.jueves.m6.asignatura}</strong></p><p>{horario.jueves.m6.ubicacion}</p></div>
        <div className="col p-3"><p className="mb-1"><strong>{horario.viernes.m6.asignatura}</strong></p><p>{horario.viernes.m6.ubicacion}</p></div>
      </div>
      <div className="row">
        <div className="col p-3 horario__header">13:00 - 14:00 HRS</div>
        <div className="col p-3"><p className="mb-1"><strong>{horario.lunes.m7.asignatura}</strong></p><p>{horario.lunes.m7.ubicacion}</p></div>
        <div className="col p-3"><p className="mb-1"><strong>{horario.martes.m7.asignatura}</strong></p><p>{horario.martes.m7.ubicacion}</p></div>
        <div className="col p-3"><p className="mb-1"><strong>{horario.miercoles.m7.asignatura}</strong></p><p>{horario.miercoles.m7.ubicacion}</p></div>
        <div className="col p-3"><p className="mb-1"><strong>{horario.jueves.m7.asignatura}</strong></p><p>{horario.jueves.m7.ubicacion}</p></div>
        <div className="col p-3"><p className="mb-1"><strong>{horario.viernes.m7.asignatura}</strong></p><p>{horario.viernes.m7.ubicacion}</p></div>
      </div>
      <div className="row">
        <div className="col p-3 horario__header">14:00 - 15:00 HRS</div>
        <div className="col p-3"><p className="mb-1"><strong>{horario.lunes.m8.asignatura}</strong></p><p>{horario.lunes.m8.ubicacion}</p></div>
        <div className="col p-3"><p className="mb-1"><strong>{horario.martes.m8.asignatura}</strong></p><p>{horario.martes.m8.ubicacion}</p></div>
        <div className="col p-3"><p className="mb-1"><strong>{horario.miercoles.m8.asignatura}</strong></p><p>{horario.miercoles.m8.ubicacion}</p></div>
        <div className="col p-3"><p className="mb-1"><strong>{horario.jueves.m8.asignatura}</strong></p><p>{horario.jueves.m8.ubicacion}</p></div>
        <div className="col p-3"><p className="mb-1"><strong>{horario.viernes.m8.asignatura}</strong></p><p>{horario.viernes.m8.ubicacion}</p></div>
      </div>
    </div>
  );
};

export default HorarioComp;
