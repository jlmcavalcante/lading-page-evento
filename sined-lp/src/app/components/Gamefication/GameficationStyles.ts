import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    background: transparent;
    padding: 0rem 10rem;
    @media (max-width: 1024px) {
        flex-direction: column-reverse;
        padding: 0;
    }
`;

export const Image = styled.div`
    width: 50%;
    margin: 0rem -1rem;
    height: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
    img {
        max-width: 100%;
        max-height: 100%;
    }
    @media (max-width: 1024px) {
        width: 100%;
        height: 300px;
        margin: 0;
    }
    @media (max-width: 769px) {
    }
`;

export const Info = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 4rem;
    gap: 1.5rem;

    @media (max-width: 1024px) {
        width: 100%;
        justify-content: center;
        align-items: center;
        padding: 2rem;
    }
`;

export const SubTitle = styled.h3`
    color: var(--color-gray);
    font-weight: 400;
    margin-bottom: 0.5rem;
    @media (max-width: 768px) {
        text-align: start;
        padding: 0 1rem;
    }
`;

export const Title = styled.h1`
    color: var(--color-primary);
    font-size: 3rem;
    margin-bottom: 1rem;
    @media (max-width: 1024px) {
        text-align: center;
    }
    @media (max-width: 768px) {
        text-align: center;
        font-size: 2rem;
    }
`;

export const Text = styled.div`
    color: var(--color-gray);
    font-size: 1.1rem;
    line-height: 1.6;
    @media (max-width: 1024px) {
        text-align: center;
        padding: 0 1rem;
    }
    @media (max-width: 768px) {
        text-align: start;
        padding: 0 1rem;
    }
`;
