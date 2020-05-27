import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 1180px;
    padding: 0 30px;
    margin: 32px auto;

    @media (max-width: 768px) {
        padding: 0 25px;
        max-width: 100%;
    }
`;

export const Header = styled.header`
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
    }
`;

export const BlockInfo = styled.div`
    display: flex;
    align-items: center;

    span {
        font-size: 20px;
        margin-left: 24px;
    }

    img {
        height: 64px;
    }
`;

export const BlockButton = styled.div`
    margin-left: auto;

    a {
        width: 260px;
        margin-top: 0;

        @media (max-width: 768px) {
            width: 180px;
            font-size: 16px;
        }
    }

    button {
        height: 60px;
        width: 60px;
        border-radius: 4px;
        border: 1px solid #dcdce6;
        background-color: transparent;
        margin-left: 16px;
        transition: border-color 0.2s;

        &:hover {
            border-color: #999;
        }
    }

    @media (max-width: 768px) {
        margin-left: 0;
        margin-top: 20px;
    }
`;

export const Title = styled.h1`
    margin-top: 80px;
    margin-bottom: 24px;

    @media (max-width: 768px) {
        margin-top: 50px;
    }
`;

export const List = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 24px;
    list-style: none;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;