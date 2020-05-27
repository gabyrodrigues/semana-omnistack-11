import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import { Container, Content, Section, Form } from './styles.js';

import logoImg from '../../assets/logo.svg';

import api from '../../services/api';
import { toast } from 'react-toastify';

export default function NewIncident() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const ongId = localStorage.getItem('ongId');

    const history = useHistory(); //faz a navegação através de uma função javascript

    async function handleNewIncident(e) {
        e.preventDefault();

        const data = {
            title,
            description,
            value
        };

        try {
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId
                }
            });

            history.push('/profile');
        } catch (err) {
            toast.error("Erro ao cadastrar caso. Verifique os dados inseridos e tente novamente.");
        }
    }

    return (
        <Container>
            <Content>
                <Section>
                    <img src={logoImg} alt="Be the Hero" />

                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
                    
                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041" /> 
                        Voltar para home
                    </Link>
                </Section>

                <Form onSubmit={handleNewIncident}>
                    <input 
                        placeholder="Título do caso" 
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <textarea 
                        placeholder="Descrição" 
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <input 
                        type="number"
                        placeholder="Valor em reais" 
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />

                    <button className="button" type="submit">
                        Cadastrar
                    </button>
                </Form>
            </Content>
        </Container>
    );
}