import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import { Background, Container, Section } from './styles.js';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

export default function NotFound() {
    return (
        <Container>
            <Section>
                <img src={logoImg} alt="Be the Hero" />

                <h1>Página não encontrada</h1>
                <p>Verifique a URL inserida e tente novamente.</p>

                <Link className="back-link" to='/profile'>
                    <FiArrowLeft size={16} color="#E02041" /> 
                    Voltar
                </Link>
            </Section>

            <Background src={heroesImg} alt="Heroes" />
        </Container>
    );
}