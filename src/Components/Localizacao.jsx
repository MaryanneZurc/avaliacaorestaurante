import "/src/CSS/localizacao.css";

function Localizacao() {
  return (
    <div className='containerLocalizacao' id='localizacao'>
    <h1 className='tituloLocalizacao'>Onde Estamos</h1>
    <div className='paragrafosLocalizacao'>
        <p className='primeiroPLocalizacao'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, porro?</p>
    <p className='segundoPLocalizacao'>Rua Exemplo, 123 - Cidade, Estado</p>
    </div>
    <div>
    <iframe className='mapaLocalizacao' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.1234567890123!2d-46.6333096845000!3d-23.5505201847000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c123456789%3A0xabcdef1234567890!2sRua%20Exemplo%2C%20123%20-%20Cidade%2C%20Estado!5e0!3m2!1spt-BR!2sbr!4v1610000000000!5m2!1spt-BR!2sbr" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
    </div>
    
    </div>
  );
}

export default Localizacao
