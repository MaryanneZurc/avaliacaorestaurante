import "/src/CSS/cardapio.css";

function Cardapio() {
  return (
    <div className="containerCardapio" id="cardapio">
      <h1 className="tituloCardapio">Nosso Cardápio da Semana</h1>
      <div className="containerCardCardapio">
        <div className="cards1">
          <div className="cardCardapio">
            <div className="tituloCardCardapio">
              <h1>Prato Saudável</h1>
            </div>
            <div className="descricaoCardapio">
              <h3 className="nomeCardapio">Frango com Batata Doce</h3>
              <p className="paragrafoCardapio">
                350 kcal | Sem glúten | Rico em proteínas
              </p>
              <div className="precoBotao">
                <span className="precoCardapio">R$ 24,90</span>
                <button className="botaoCardapio">Adicionar</button>
              </div>
            </div>
          </div>
          <div className="cardCardapio">
            <div className="tituloCardCardapio">
              <h1>Prato Saudável</h1>
            </div>
            <div className="descricaoCardapio">
              <h3 className="nomeCardapio">Frango com Batata Doce</h3>
              <p className="paragrafoCardapio">
                350 kcal | Sem glúten | Rico em proteínas
              </p>
              <div className="precoBotao">
                <span className="precoCardapio">R$ 24,90</span>
                <button className="botaoCardapio">Adicionar</button>
              </div>
            </div>
          </div>
        </div>
        <div className="cards2">
          <div className="cardCardapio">
            <div className="tituloCardCardapio">
              <h1>Prato Saudável</h1>
            </div>
            <div className="descricaoCardapio">
              <h3 className="nomeCardapio">Frango com Batata Doce</h3>
              <p className="paragrafoCardapio">
                350 kcal | Sem glúten | Rico em proteínas
              </p>
              <div className="precoBotao">
                <span className="precoCardapio">R$ 24,90</span>
                <button className="botaoCardapio">Adicionar</button>
              </div>
            </div>
          </div>
          <div className="cardCardapio">
            <div className="tituloCardCardapio">
              <h1>Prato Saudável</h1>
            </div>
            <div className="descricaoCardapio">
              <h3 className="nomeCardapio">Frango com Batata Doce</h3>
              <p className="paragrafoCardapio">
                350 kcal | Sem glúten | Rico em proteínas
              </p>
              <div className="precoBotao">
                <span className="precoCardapio">R$ 24,90</span>
                <button className="botaoCardapio">Adicionar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cardapio;
