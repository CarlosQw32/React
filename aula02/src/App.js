import React from 'react';
import Lista from './componentes/listaAlunos'
import ListaDois from './componentes/listaAlunosDois'
 
let n1 = 10;
let n2 = 15;

let aluno = "Carlão";

const alunosDois = ["Vini", "Regina", "Mari"] ;

function App() {
  return (
    <div>
      <h1> iniciando nosso projeto </h1>

      <p>Nome do aluno : {aluno}</p>

      <Lista/>

      <p>SOMA DOS NUMEROS N1 + N2 = { n1 +n2} </p>

      <ListaDois Alunos={alunosDois}/>
    </div>

  )
    
}

export default App;
