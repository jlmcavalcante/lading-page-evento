import styled from 'styled-components';

export const MainContainer = styled.div`
    width: 100%;
    min-height: 400px;
    padding: 1.5rem 0;

    background-image: url('/sined-background.png');
    background-position: center;
    background-size: cover;
    color: #fff;
`;

export const Menu = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
`;

export const Logo = styled.div`
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: center;
`;