import styled from 'styled-components';

export const IncidentCard = styled.li`
    background: #fff;
    padding: 24px;
    border-radius: 8px;
    position: relative;

    button, .button-edit {
        position: absolute;
        top: 24px;
        border: 0;
        background-color: transparent;

        &:hover {
            opacity: 0.8;
        }
    }

    button {
        right: 24px;
    }

    .button-edit {
        position: absolute;
        right: 64px;
        top: 24px;
        border: 0;
        background-color: transparent;
    }

    strong {
        display: block;
        margin-bottom: 16px;
        color: #41414d;
    }

    p + strong {
        margin-top: 32px;
    }

    p {
        color: #737380;
        line-height: 21px;
        font-size: 16px;
    }
`;