import "/src/CSS/vantagens.css";

function Vantagens() {
  return (
    <div className="containerVantagens" id="vantagens">
      <h1 className="tituloVantagens">
        Por que escolher o Restaurante Popular Saudável?
      </h1>
      <div className="containerCards">
        {" "}
        <div className="cardVantagens">
          <h1 className="emojiCard">🥑</h1>
          <h3 className="tituloCard">Ingredientes Frescos</h3>
          <div className="paragrafoVantagens">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
              eligendi.
            </p>
          </div>
        </div>
        <div className="cardVantagens">
          <h1 className="emojiCard">🥑</h1>
          <h3 className="tituloCard">Ingredientes Frescos</h3>
          <div className="paragrafoVantagens">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
              eligendi.
            </p>
          </div>
        </div>
        <div className="cardVantagens">
          <h1 className="emojiCard">🥑</h1>
          <h3 className="tituloCard">Ingredientes Frescos</h3>
          <div className="paragrafoVantagens">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
              eligendi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vantagens;
