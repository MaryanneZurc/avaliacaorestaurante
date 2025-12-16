import "/src/CSS/contato.css";

function Contato() {
  return (
    <div className="containerContato" id="contato">
      <h1 className="tituloContato">Fale Conosco</h1>
      <form className="formContato">
        <label htmlFor="nome">Seu Nome</label>
        <input  type="text" id="nome" name="Seu Nome" required />
        <label htmlFor="email">Seu Email</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="mensagem">Sua Mensagem</label>
        <textarea name="mensagem" rows="4" required></textarea>
        <button className="botaoContato" type="submit">Enviar Mensagem</button> 

      </form>
    </div>
  );
}

export default Contato
