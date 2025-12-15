import { Link } from "react-router-dom";
import { Nav } from "../Nav/Nav";
// Importa tu archivo CSS
import "./Header.css"; 

export const Header = () => {
  return (
    <>
      {/* 1. El Banner Superior */}
      <header className="banner-header">
        {/* El enlace es un bloque transparente sobre el banner */}
        <Link to="/" className="banner-link">
          {/* Texto solo visible para lectores de pantalla (accesibilidad) */}
          <span style={{ visibility: "hidden" }}>Inicio - Bragu</span>
        </Link>
      </header>

      {/* 2. El Menú de Navegación (debajo del banner) */}
      {/* Puedes añadir una clase aquí para centrarlo o darle margen si lo necesitas */}
      <div style={{ textAlign: 'center', padding: '10px 0' }}>
        <Nav />
      </div>
    </>
  );
};