import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import { Background, Container, Form, SectionForm } from './styles.js';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

import api from '../../services/api';
import { toast } from 'react-toastify';

export default function Logon() {
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
            <SectionForm>
                <img src={logoImg} alt="Be the Hero" />

                <Form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>

                    <input 
                        placeholder="Sua ID" 
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041" /> 
                        Não tenho cadastro
                    </Link>
                </Form>

            </SectionForm>

            <Background src={heroesImg} alt="Heroes" />
        </Container>
    );
}