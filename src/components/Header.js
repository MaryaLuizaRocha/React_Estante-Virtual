// Header.js
import React from "react";
import { Link } from "react-router-dom";
import "../Header.css"; // Importando o arquivo CSS

const Header = () => (
  <header className="header">
    <div className="logo-container">
      <img
        src="/fundoEstante.jpeg" // A partir da pasta public
        alt="Logo"
        className="logo"
      />
    </div>
    <h1>Minha Estante de Livros</h1>
    <nav>
      <Link to="/">Página Principal</Link> |{" "}
      <Link to="/search">Pesquisar Livros</Link>
    </nav>
  </header>
);

export default Header;
