import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import { Container, Content, Section, Form } from './styles.js';

import api from '../../services/api';
import { toast } from 'react-toastify';

import logoImg from '../../assets/logo.svg';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory(); //faz a navegação através de uma função javascript

    async function handleRegister(e) { //função responsável pelo cadastro do usuário
        e.preventDefault(); //tira o comportamento padrão de atualizar a página quando clica para enviar

        const data = {
            name,
            email,
            whatsapp, 
            city,
            uf
        };

        try {
            const response = await api.post('ongs', data); //conexão com o backend para o cadastro enviando os dados através da variável data, ele pega a resposta (id da ong) esperando o cadastro finalizar (await/async)

            toast.info(`Seu id de acesso: ${response.data.id}`);

            history.push('/'); //envia pra rota raiz depois do cadastro
        } catch (err) {
            toast.error("Falha no cadastro. Verifique seus dados e tente novamente.");
        }
    }

    return (
        <Container>
            <Content>
                <Section>
                    <img src={logoImg} alt="Be the Hero" />

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
                    
                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041" /> 
                        Voltar para o logon
                    </Link>
                </Section>

                <Form onSubmit={handleRegister}>
                    <input 
                        placeholder="Nome da ONG" 
                        value={name}
                        onChange={e => setName(e.target.value)} //ouvir as mudanças que ocorrem no input, coloca o valor do input dentro da variável respectiva
                    />
                    <input 
                        type="email" 
                        placeholder="Email" 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input 
                        placeholder="Whatsapp" 
                        value={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)}
                        maxLength="15"
                    />

                    <div className="input-group">
                        <input 
                            placeholder="Cidade" 
                            value={city}
                            onChange={e => setCity(e.target.value)}
                        />
                        <input 
                            placeholder="UF" 
                            style={{ width: 80 }} 
                            value={uf}
                            onChange={e => setUf(e.target.value)}
                        />
                    </div>

                    <button className="button" type="submit">
                        Cadastrar
                    </button>
                </Form>
            </Content>
        </Container>
    );
}