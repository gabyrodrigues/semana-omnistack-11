import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 1120px;
    height: 100vh;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 768px) {
        max-width: 100%;
        justify-content: center;
    }
`;

export const Background = styled.img`
    @media (max-width: 768px) {
        display: none;
    }
`;

export const SectionForm = styled.section`
    width: 100%;
    max-width: 350px;
    margin-right: 30px;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        margin-right: 0;
        max-width: 100%;
        padding: 0 25px;
    }
`;  

export const Form = styled.form`
    margin-top: 100px;

    h1 {
        font-size: 32px;
        margin-bottom: 32px;
    }

    @media (max-width: 768px) {
        margin-top: 30px;
        max-width: 100%;
    }
`;