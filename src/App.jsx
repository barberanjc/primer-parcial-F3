import { useState } from 'react';
import './App.css'
import Card from './Card';

function App() {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [error1, setError1] = useState('');
  const [error2, setError2] = useState('');
  const [showCard, setShowCard] = useState(false);

  const handleText1Change = (event) => {
    setText1(event.target.value);
  };

  const handleText2Change = (event) => {
    setText2(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (text1.trim().length < 3 || /^\s/.test(text1)) {
      setError1('El texto debe tener al menos 3 caracteres y no comenzar con espacios en blanco.');
      setError2('');
      setShowCard(false);
      return;
    } else {
      setError1('');
    }

    if (text2.length < 6) {
      setError2('El texto debe tener al menos 6 caracteres.');
      setError1('');
      setShowCard(false);
      return;
    } else {
      setError2('');
    }

    setShowCard(true);
  };

  return (
    <div className="App">
      <h1>Elige una marca de autos</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingrese su Nombre"
          value={text1}
          onChange={handleText1Change}
        />
        {error1 && <p className="error">{error1}</p>}
        <input
          type="text"
          placeholder="Ingrese su marca de auto favorita"
          value={text2}
          onChange={handleText2Change}
        />
        {error2 && <p className="error">{error2}</p>}
        {error1 || error2 ? (
          <p className="error">Por favor chequea que la información sea correcta</p>
        ) : null}
        <button type="submit">Enviar</button>
      </form>
      {showCard && <Card text1={text1} text2={text2} />}
    </div>
  );
}


export default App
