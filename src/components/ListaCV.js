import { Link, Navigate, NavLink, useNavigate } from "react-router-dom";
import { Grid, h } from "gridjs";
import "gridjs/dist/theme/mermaid.css";
import { useEffect, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";

function ListaCV() {
  const wrapperRef = useRef(null);
  const navigate = useNavigate();
  const grid = new Grid({
    columns: [
      "ID",
      "Nombre",
      "Apellidos",
      "Titulo",
      "Telefono",
      "Correo electronico",
      "Linkedin",
      "Idiomas",
      {
        name: "Modificar",
        formatter: (cell, row) => {
          return h(
            "button",
            {
              className: "btn btn-primary",
              onClick: () => navigate(`/cv/modificar/${row.cells[0].data}`),
            },
            "Modificar"
          );
        },
      },
      {
        name: "Eliminar",
        formatter: (cell, row) => {
          return h(
            "button",
            {
              className: "btn btn-danger",
              onClick: () => {
                const res = fetch(
                  `http://localhost:5000/curriculum/${row.cells[0].data}`,
                  {
                    method: "DELETE",
                  }
                );
                if (res.ok) {
                  console.error("Curriculum eliminado");
                  toast.info("curriculum elimando correctamente");
                } else {
                  console.error("Error al eliminar el usuario");
                }
              },
            },
            "Eliminar"
          );
        },
      },
    ],
    width: "auto",
    search: true,
    pagination: {
      enabled: true,
      limit: 5,
      summary: true,
    },
    sort: true,
    style: {
      th: {
        background: "#683475",
        color: "#fbf8f8",
        border: "3px solid #ccc",
        "text-allign": "center",
      },
    },
    autoWidth: true,
    language: {
      search: {
        placeholder: "🔍 Buscar...",
      },
      pagination: {
        previous: "⬅️",
        next: "➡️",
        showing: "😃 Mostrando",
        results: () => "registros",
      },
    },
    server: {
      url: "http://localhost:5000/curriculum",
      then: (data) => 
       data.map(curriculum => [
        curriculum.id,
        curriculum.nombre,
        curriculum.apellidos,
        curriculum.titulo,
        curriculum.telefono,
        curriculum.correo_electronico,
        curriculum.linkedin,
        curriculum.idioma,
        curriculum.linkedin
       ]) 
},
  });

  useEffect(() => {
    grid.render(wrapperRef.current);
  });
  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "30px" }}>Lista de CVs</h1>
      <div
        ref={wrapperRef}
        style={{ textAlign: "center", marginTop: "30px" }}
      />
      <ToastContainer/>
    </>
  );
}

export default ListaCV;
