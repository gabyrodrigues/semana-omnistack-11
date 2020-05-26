import React, {useState} from 'react';
import { FiTrash2, FiEdit2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import { IncidentCard } from './styles.js';

export default function Incident(props) {
    const ongId = localStorage.getItem('ongId');
    const [incidents, setIncidents] = useState([]);

    async function handleDeleteIncident(id) {
        try {
            await api.delete(`incidents/${id}`, {
                headers: {
                    Authorization: ongId
                }
            });

            setIncidents(incidents.filter(incident => incident.id !== id)); //atualiza a lista quando algum caso é deletado
        } catch (err) {
            alert('Erro ao deletar caso. Tente novamente.');
        }
    }

    return (
        <IncidentCard key={props.id}>
            <strong>CASO:</strong>
            <p>{props.title}</p>

            <strong>DESCRIÇÃO:</strong>
            <p>{props.description}</p>

            <strong>VALOR:</strong>
            <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(props.value)}</p>

            <button onClick={() => handleDeleteIncident(props.id)} type="button">
                <FiTrash2 size={20} color="#a8a8b3" />
            </button>

            <Link className="button-edit" to={{pathname: `/incidents/edit/${props.id}`,}}>
                <FiEdit2 size={20} color="#a8a8b3" />
            </Link>
        </IncidentCard>
    );
}