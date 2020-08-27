import React from "react";
import AdminMenu from "../components/AdminMenu";
import "../assets/styles/components/AdminLayout.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

const AdminLayout = ({ children }) => (
  <div className="container-fluid adminLayout m-0 position-fixed ">
    <div className="row h-100">
      <ToastContainer
        position="top-right"
        autoClose={false}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange
        draggable
        pauseOnHover
      />
      <div className="col-2 m-0 p-0 ">
        <AdminMenu
          atributos={[
            {
              titulo: "Alumnos",
              subtitulos: [
                { titulo: "Crear Alumno", link: "/admin/crear-alumno" },
                {
                  titulo: "Consultar Alumnos",
                  link: "/admin/consultar-alumnos",
                },
              ],
            },
            {
              titulo: "Maestros",
              subtitulos: [
                { titulo: "Crear Maestro", link: "/admin/crear-maestro" },
                {
                  titulo: "Consultar Maestros",
                  link: "/admin/consultar-maestros",
                },
              ],
            },
            {
              titulo: "Administradores",
              subtitulos: [
                { titulo: "Crear Administrador", link: "/admin/crear-admin" },
                {
                  titulo: "Consultar Administradores",
                  link: "/admin/consultar-admins",
                },
              ],
            },
            {
              titulo: "Avisos",
              subtitulos: [
                { titulo: "Crear Aviso", link: "/admin/crear-aviso" },
                { titulo: "Consultar Avisos", link: "/admin/consultar-avisos" },
              ],
            },
          ]}
        />
      </div>
      <div className="col p-5 overflow-auto">{children}</div>
    </div>
  </div>
);

export default AdminLayout;
