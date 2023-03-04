import {useState} from "react";
import { FiSearch } from "react-icons/fi";
import apiCep from './Service/apiCep.js';
import { Title } from "./Estilos/styles.js";

function App() {
  const [inputCepDigitado,setinputCepDigitado] = useState('');
  const [cep,setCep] = useState('');
    async function pesquisarCep() {
      //alert ('valor digitado: ' + inputCepDigitado)
      const responseCep = await apiCep.get(`${inputCepDigitado}/json`)
      setCep(responseCep.data);
      console.log(responseCep.data);
    }
  return (
    <div>
      <Title> Styles components </Title>

      <Title>BUSCADOR DE CEP</Title>
      
      <p>CEP: <input type="text" placeholder="Digite seu CEP" value={inputCepDigitado} onChange={(event) => setinputCepDigitado(event.target.value)}></input>
      <button onClick={pesquisarCep}>
        <FiSearch/>
      </button>
      </p>
      <h2>Valores da Pesquisa:</h2>
      <p>Rua: {cep.logradouro}</p>
      <p>Bairro: {cep.bairro}</p>
      <p>Localidade: {cep.localidade}</p>
    </div>
  );
}

export default App;