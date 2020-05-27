import React, { useState, useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import api from '../../services/api';
import { toast } from 'react-toastify';

import { Container, Content, Section, Form } from './styles.js';

export default function EditIncident() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const ongId = localStorage.getItem('ongId');

    let  { id } = useParams();

    useEffect(() =>{
        api.get(`incidents/${id}`)
        .then(response =>  {
            setTitle(response.data.incident[0].title);
            setDescription(response.data.incident[0].description);
            setValue(response.data.incident[0].value);
        }); 
    }, [id]);

    const history = useHistory(); //faz a navegação através de uma função javascript

    async function handleEditIncident(e) {
        e.preventDefault();

        const data = {
            title,
            description,
            value
        };

        try {
            await api.put(`incidents/${id}`, data, {
                headers: {
                    Authorization: ongId
                }
            });

            history.push('/profile');
        } catch (err) {
            toast.error("Erro ao editar caso. Verifique os dados inseridos e tente novamente.");
        }
    }

    return (
        <Container>
            <Content>
                <Section>
                    <img src={logoImg} alt="Be the Hero" />

                    <h1>Editar caso</h1>
                    <p>Edite o caso detalhadamente para encontrar um herói para resolver isso.</p>
                    
                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041" /> 
                        Voltar para home
                    </Link>
                </Section>

                <Form onSubmit={handleEditIncident}>
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
                        // pattern="^\s*(?:[1-9]\d{0,2}(?:\.\d{3})*|0)(?:,\d{1,2})?$"
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