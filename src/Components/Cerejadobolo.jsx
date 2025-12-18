import "/src/CSS/cerejadobolo.css";

function Cerejadobolo() {
  return (
    <div className="containerCerejadobolo" id="cerejadobolo">
      <h1 className="tituloCerejadobolo">Cereja do Bolo</h1>
      <div className="containerCardsCerejadobolo">
        <div className="cardCerejadobolo">
          <div className="imagemCerejadobolo">
            <img
              src="https://images.unsplash.com/photo-1702982852429-e0d0b27eb990?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YnJpZ2FkZWlyb3xlbnwwfHwwfHx8MA%3D%3D"
              alt=""
            />
          </div>
          <div className="descricaoCerejadobolo">
            <h3 className="nomeCerejadobolo">Brigadeiro Saudável</h3>
            <p className="paragrafoCerejadobolo">
              150 kcal | Sem glúten | Rico em proteínas | Sem açúcar
            </p>
            <div className="precoBotao">
              <span className="precoCerejadobolo">R$ 7,90</span>
              <button className="botaoCerejadobolo">Adicionar</button>
            </div>
          </div>
        </div>
        <div className="cardCerejadobolo">
          <div className="imagemCerejadobolo">
            <img
              src="https://media.istockphoto.com/id/2227004193/pt/foto/famous-strawberry-milk-trend-viral-sweet-that-was-a-success.webp?a=1&b=1&s=612x612&w=0&k=20&c=7QgUlXGPX7I2v9OPbUHwBNs_HnNvKkZUvI6e3-HuKdw="
              alt=""
            />
          </div>
          <div className="descricaoCerejadobolo">
            <h3 className="nomeCerejadobolo">Morango do Amor Fitness</h3>
            <p className="paragrafoCerejadobolo">
              100 kcal | Rico em proteínas | Sem açúcar
            </p>
            <div className="precoBotao">
              <span className="precoCerejadobolo">R$ 7,90</span>
              <button className="botaoCerejadobolo">Adicionar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cerejadobolo;
