function Card({ text1, text2 }) {
    return (
      <div className="card">
        <h2>Información ingresada</h2>
        <p>Nombre: {text1}</p>
        <p>Marca de auto favorita: {text2}</p>
      </div>
    );
  }
  export default Card;