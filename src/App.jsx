import React from "react";
import Header from "./Components/Header";
import Vantagens from "./Components/Vantagens";
import Inicio from "./Components/Inicio";
import Cardapio from "./Components/Cardapio";
import Sobre from "./Components/Sobre";
import Localizacao from "./Components/Localizacao";
import Contato from "./Components/Contato";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Inicio />
      <Vantagens />
      <Cardapio />
      <Sobre />
      <Localizacao />
      <Contato />
      <Footer />
    </div>
  );
}

export default App;
