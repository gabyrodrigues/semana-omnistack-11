import React, { useState, useEffect } from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import { Block, Container, Content, Form, Label, Section, Wrapper } from './styles.js';

import api from '../../services/api';
import { toast } from 'react-toastify';

import logoImg from '../../assets/logo.svg';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const [redirectToLogin, setRedirectToLogin] = useState(false);

    const history = useHistory(); //faz a navegação através de uma função javascript

    const ongId = localStorage.getItem('ongId');

    async function handleUpdate(e) { //função responsável pelo cadastro do usuário
        e.preventDefault(); //tira o comportamento padrão de atualizar a página quando clica para enviar

        const data = {
            name,
            email,
            whatsapp, 
            city,
            uf
        };

        try {
            await api.put(`ongs/${ongId}`, data, {
                headers: {
                    Authorization: ongId
                }
            });

            localStorage.setItem('ongName', data.name);

            toast.info(`ONG editada com sucesso`);

            history.push('/profile');
        } catch (err) {
            toast.error("Falha na edição. Verifique seus dados e tente novamente.");
        }
    }

    async function handleDelete() {
        if (window.confirm('Tem certeza que deseja excluir essa conta?')){
            try {
                await api.delete(`ongs/${ongId}`, {
                    headers: {
                        Authorization: ongId
                    }
                });

                setRedirectToLogin(true);

                localStorage.removeItem('ongId', null);
                localStorage.removeItem('ongName', null);
                
            } catch (err) {
                toast.error("Falha na exclusão de conta. Tente novamente.");
                console.log(err);
            }
        }
    }
    useEffect(() => {
        api.get(`ongs/${ongId}`)
         .then(response => {
            setName(response.data.ong[0].name);
            setEmail(response.data.ong[0].email);
            setWhatsapp(response.data.ong[0].whatsapp);
            setCity(response.data.ong[0].city);
            setUf(response.data.ong[0].uf);
         })
    }, [ongId]);

    if (redirectToLogin) {
		return <Redirect to={{pathname: "/"}} />
	}

    return (
        <Container>
            <Content>
                <Section>
                    <img src={logoImg} alt="Be the Hero" />

                    <h1>Configurações</h1>
                    
                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041" /> 
                        Voltar para home
                    </Link>
                </Section>

                <Wrapper>
                    <Form onSubmit={handleUpdate}>
                        <Label>Alterar informações</Label>
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
                            Salvar alterações
                        </button>
                    </Form>

                    <Block>
                        <Label>Deletar conta</Label>
                        <button className="button" onClick={() => handleDelete()}>
                            Deletar conta
                        </button>
                    </Block> 
                </Wrapper>
            </Content>
        </Container>
    );
}