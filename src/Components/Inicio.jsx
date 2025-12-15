import "/src/CSS/inicio.css";

function Inicio() {
  return (
    <div className="containerInicio">
      <h1 className="tituloInicio">Comida de Verdade, pronta para você.</h1>
      <p className="paragrafoInicio">
        Sabor caseiro, ingredientes orgânicos e equilíbrio nutricional.
      </p>
      <button className="botaoInicio">
        <b>Ver Planos</b>
      </button>
    </div>
  );
}

export default Inicio;
