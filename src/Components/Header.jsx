import "/src/CSS/header.css";

function Header() {
  return (
    <header className="containerHeader">
      <div className="tituloHeader">
        <h1>🥗 Restaurante Popular Saudável</h1>
      </div>
      <nav className="menuHeader">
        <a href="#inicio" className="menu">
          {" "}
          Início
        </a>
        <a href="#vantagens" className="menu">
          {" "}
          Vantagens
        </a>
        <a href="#cardapio" className="menu">
          {" "}
          Cardápio
        </a>
        <a href="#sobre" className="menu">
          {" "}
          Sobre Nós
        </a>
        <a href="#localizacao" className="menu">
          {" "}
          Localização
        </a>
        <a href="#contato" className="menu">
          {" "}
          Contato
        </a>
        <a href="#cerejadobolo" className="menu">
          {" "}
          Cereja do Bolo
        </a>
      </nav>
    </header>
  );
}

export default Header;
