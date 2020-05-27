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
        padding: 0 25px;
    }
`;

export const Background = styled.img`
    @media (max-width: 768px) {
        display: none;
    }
`;

export const Section = styled.section`
    width: 100%;
    max-width: 350px;
    margin-right: 30px;

    h1 {
        font-size: 32px;
        margin-top: 32px;
        margin-bottom: 10px;
        color: #e02041;

        @media (max-width: 768px) {
            font-size: 26px;
            text-align: center;
        }
    }

    p {
        font-size: 18px;
        color: #737380;
        line-height: 32px;

        @media (max-width: 768px) {
            text-align: center;
        }
    }

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        margin-right: 0;
        max-width: 100%;
    }
`;  