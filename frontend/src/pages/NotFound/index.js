import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import { Background, Container, Section } from './styles.js';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

import api from '../../services/api';
import { toast } from 'react-toastify';

export default function NotFound() {
    const [id, setId] = useState('');

    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await api.post('sessions', { id });

            localStorage.setItem('ongId', id);//guarda e deixa os dados disponiveis em toda a aplicação
            localStorage.setItem('ongName', response.data.name);

            history.push('/profile');
        } catch (err) {
            toast.error("Falha no login. Verifique se o id inserido está correto e tente novamente.");
        }
    }

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