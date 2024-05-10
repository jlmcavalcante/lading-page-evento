import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    @media (max-width: 1024px) {
        flex-direction: column-reverse;
    }
`;

export const Image = styled.div`
    width: 50%;
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
    }
    @media (max-width: 769px) {
        display: none;
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

        padding: 2rem;
    }
`;

export const SubTitle = styled.h3`
    color: var(--color-gray);
    font-weight: 400;
    margin-bottom: 0.5rem;
    @media (max-width: 768px) {
        text-align: center;
    }
`;

export const Title = styled.h1`
    color: var(--color-primary);
    font-size: 3rem;
    margin-bottom: 1rem;
`;

export const Text = styled.p`
    color: var(--color-gray);
    line-height: 1.5;
`;
