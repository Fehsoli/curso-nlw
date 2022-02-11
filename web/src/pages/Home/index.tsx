import React from 'react'
import {FiLogIn} from 'react-icons/fi'
import {Link} from 'react-router-dom' //utilizado para não permitir a aplicação recarregar toda ao trocar de página

import './styles.css'

import logo from '../../assets/logo.svg'

const Home = () => {
    return (
        <div id="page-home">
            <div className="content"> {/*No react, a classe recebe o nome de className*/}
                <header>
                    <img src={logo} alt="Ecoleta" />
                </header>

                <main>
                    <h1>Seu marketplace de coleta de resíduos.</h1>
                    <p>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.</p>
                    <Link to="/create-point">
                        <span>
                            < FiLogIn />
                        </span>
                        <strong>Cadastre um ponto de coleta</strong>
                    </Link>
                </main>

            
            </div> 
        </div>
    )
}

export default Home