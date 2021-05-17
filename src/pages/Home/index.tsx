import React from 'react';
import { Link } from 'react-router-dom';
import SimpleButton from '../../core/components/Button';
import './styles.css';

const Home = () => (
    <div className="home-container">
        <div className="home-title">
            <h1 className="text-title">Desafio do Capítulo 3, Bootcamp DevSuperior</h1>
        </div>
        <div className="home-text">
            <p className="text-subtitle">
                Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior.
            <br />
                <br />
            Favor observar as instruções passadas no capítulo sobre a
            elaboração deste projeto.
            <br />
                <br />
            Este design foi adaptado a partir de Ant Design System for Figma, de
            <br />
            Mateusz Wierzbicki: antforfigma@gmail.com
            </p>
            <Link to="/search" className="home-link">
                <SimpleButton text="Começar" />
            </Link>
        </div>


    </div>

);

export default Home;