import React from 'react';
import { FiTrash2, FiEdit2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { IncidentCard } from './styles.js';

export default function Incident(props) {

    return (
        <IncidentCard key={props.id}>
            <strong>CASO:</strong>
            <p>{props.title}</p>

            <strong>DESCRIÇÃO:</strong>
            <p>{props.description}</p>

            <strong>VALOR:</strong>
            <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(props.value)}</p>
            <button onClick={() => props.handleDeleteIncident(props.id)} type="button">
                <FiTrash2 size={20} color="#a8a8b3" />
            </button>

            <Link className="button-edit" to={{pathname: `/incidents/edit/${props.id}`,}}>
                <FiEdit2 size={20} color="#a8a8b3" />
            </Link>
        </IncidentCard>
    );
}