import "/src/CSS/cardapio.css";

function Cardapio() {
  return (
    <div className="containerCardapio">
      <h1 className="tituloCardapio">Nosso Cardápio da Semana</h1>
      <div containerCardsCardapio>
        <div className="cardCardapio">
          <div className="tituloCard">
            <h1>Prato Saudável</h1>
          </div>
          <h3 className="NomeCardapio">Frango com Batata Doce</h3>
          <p className="paragrafoCardapio">
            350 kcal | Sem glúten | Rico em proteínas
          </p>
          <span className="precoCardapio">R$ 24,90</span>
          <button className="botaoCardapio">Adicionar</button>
        </div>
        <div className="cardCardapio">
          <div className="tituloCard">
            <h1>Prato Saudável</h1>
          </div>
          <h3 className="NomeCardapio">Frango com Batata Doce</h3>
          <p className="paragrafoCardapio">
            350 kcal | Sem glúten | Rico em proteínas
          </p>
          <span className="precoCardapio">R$ 24,90</span>
          <button className="botaoCardapio">Adicionar</button>
        </div>
        <div className="cardCardapio">
          <div className="tituloCard">
            <h1>Prato Saudável</h1>
          </div>
          <h3 className="NomeCardapio">Frango com Batata Doce</h3>
          <p className="paragrafoCardapio">
            350 kcal | Sem glúten | Rico em proteínas
          </p>
          <span className="precoCardapio">R$ 24,90</span>
          <button className="botaoCardapio">Adicionar</button>
        </div>
        <div className="cardCardapio">
          <div className="tituloCard">
            <h1>Prato Saudável</h1>
          </div>
          <h3 className="NomeCardapio">Frango com Batata Doce</h3>
          <p className="paragrafoCardapio">
            350 kcal | Sem glúten | Rico em proteínas
          </p>
          <span className="precoCardapio">R$ 24,90</span>
          <button className="botaoCardapio">Adicionar</button>
        </div>
      </div>
    </div>
  );
}

export default Cardapio;
