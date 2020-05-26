import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 1180px;
    padding: 0 30px;
    margin: 32px auto;
`;

export const Header = styled.header`
    display: flex;
    align-items: center;

    span {
        font-size: 20px;
        margin-left: 24px;
    }

    img {
        height: 64px;
    }

    a {
        width: 260px;
        margin-left: auto;
        margin-top: 0;
    }

    button {
        height: 60px;
        width: 60px;
        border-radius: 4px;
        border: 1px solid #dcdce6;
        background-color: transparent;
        margin-left: 16px;
        transition: border-color 0.2s;
    }

    &:hover {
        border-color: #999;
    }
`;

export const Title = styled.h1`
    margin-top: 80px;
        margin-bottom: 24px;
`;

export const List = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 24px;
    list-style: none;
`;