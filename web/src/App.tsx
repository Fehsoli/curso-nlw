import React from 'react';
import './App.css';

import Routes from './routes'


function App(){
  return (
    <Routes />
  )
}

export default App;

//=============================================================================================================================
//                                            ESTUDO

// JSX = Sintaxe de XML dentro do JavaScript

// function App() {
//   return (
//     <div>
//       <Header />
      
//       <h1>Conteúdo da aplicação</h1>
//     </div>     
//   );
  
//   // return React.createElement( 'h1' , {
//   //   children: 'Hello World'
//   // }) Sintaxe antiga do react
// }

// Propriedades no React
// Quando no html precisamos enviar algum atributo para o elemento utiliza-se o . + nome do atributo
// No react enviamos o atributo para o componente. Exemplo o componente Header.

// ESTADO E IMUTABILIDADE
// Conceito de estado: é quando queremos armazenar uma informação a partir do componente. O componente tem alguma ação do 
// usuário, aí essa ação do usuário é armazenada. São informações mantidas pelo próprio componente

// Imutabilidade: não é possível alterar uma informação do estado de uma maneira direta 
// Exemplo: a const counter = useState(0) e fazer counter++
// Para fazer a alteração é necessário criar um novo valor para o estado com os valores que queremos

// import React, { useState } from 'react';
// import './App.css';
// import Header from './Header'

// function App(){
//   const [counter, setCounter] = useState(0) // retorna sempre um [valor do estado, função para atualizar o valor do estado] (array)

//   function handleButtonClick(){
//     setCounter(counter + 1)
//   }

//   return (
//     <div>
//       <Header title="Hello World" /> {/*Sem realizar as alterações no header vai dar erro. O typescript informa o erro*/}

//       <h1>{counter}</h1>
//       <button type="button" onClick={handleButtonClick}>Aumentar</button> {/*O onClick é uma função*/}
//     </div>
//   )
// }

//===================================================================================================================================

//                                                Arquivo Header.tsx (no src)

// import React from 'react'


// //Transforma a função Header em uma constante junto com uma function arrow.
// // A variável Header precisa descrever qual o tipo dela. FC (function componente) chamado como generic e que recebe um parâmetro

// interface HeaderProps {
//     title: string //para não ser obrigatória, basta colocar o ? na frente (title?:)
// }

// const Header: React.FC<HeaderProps> = (props) => {
//     return (
//         <header>
//             <h1>{props.title}</h1> {/*Quando se coloca chaves dentro do html é inserido algo de javascript dentro do html*/}
//         </header>
//     )
// }

// // function Header () { //todo componente do react tem que ter letra maiuscula para não bater com as escritas do html.
// //     return(
// //         <header>
// //             <h1>Ecoleta</h1>
// //         </header>
// //     )
// // }

// export default Header