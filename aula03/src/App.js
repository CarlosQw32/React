import { useState } from "react";
 
import { FiSearch } from "react-icons/fi";

 
function App() {
 
  const [inputCepDigitado,setinputCepDigitado] = useState('');
 
 
  function pesquisarCep() {
    alert ('valor digitado:' + inputCepDigitado);
 
  }
 
  return (
    <div>
      <h1>BUSCADOR DE CEP</h1>
 
      <p>digite seu cep: </p>
      <input type="text" placeholder='digite um cep' value={inputCepDigitado} onChange={(event) => setinputCepDigitado(event.target.value)} />
      <button onClick={pesquisarCep}>
        <FiSearch size={50} color="red"/>        
      </button>
     
     
 
    </div>
  );
}
 
export default App;