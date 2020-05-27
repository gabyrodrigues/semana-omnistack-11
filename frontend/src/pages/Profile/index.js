import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower } from 'react-icons/fi'; 

import api from '../../services/api';
import { toast } from 'react-toastify';

import logoImg from '../../assets/logo.svg';

import Incident from '../../components/Incident';

import { BlockButton, BlockInfo, Container, Header, Title, List } from './styles.js';

export default function Profile() {
    const [incidents, setIncidents] = useState([]);

    const ongId = localStorage.getItem('ongId');
    const ongName = localStorage.getItem('ongName'); //busca o nome armazenado no localStorage no momento do login

    const history = useHistory();

    async function handleDeleteIncident(id) {
        try {
            await api.delete(`incidents/${id}`, {
                headers: {
                    Authorization: ongId
                }
            }); 

            setIncidents(incidents.filter(incident => incident.id !== id)); //atualiza a lista quando algum caso é deletado
            
            toast.success("Caso deletado com sucesso.");
        } catch (err) {
            toast.error("Erro ao deletar caso. Tente novamente.");
        }
    }

    //primeiro parametro: qual função que vai ser executada
    //segundo parametro: quando essa função vai ser executada. 
    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: ongId
            }
        }).then(response =>  {
            setIncidents(response.data);
        })
    }, [ongId]); //O array de dependencias, toda vez que as informações que estiverem dentro desse array mudarem, a função vai ser executada (se estiver vazio é executado apenas uma vez)

    function handleLogout() {
        localStorage.clear(); //limpa os dados de login armazenados

        history.push('/');
    }

    return (
        <Container className="profile-container">
            <Header>
                <BlockInfo>
                    <img src={logoImg} alt="Be the Hero" />
                    <span>Bem vindo (a), {ongName}</span>
                </BlockInfo>

                <BlockButton>
                    <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
                    <button onClick={handleLogout}>
                        <FiPower size={18} color="#e02041" />
                    </button>
                </BlockButton>
            </Header>

            <Title>Casos cadastrados</Title>

            <List>
                {incidents.map(incident => (
                    <Incident 
                     id={incident.id} 
                     key={incident.id} 
                     handleDeleteIncident={() => handleDeleteIncident(incident.id)}
                     title={incident.title} 
                     description={incident.description} 
                     value={incident.value} 
                    />
                ))}
            </List>
        </Container>
    );
}