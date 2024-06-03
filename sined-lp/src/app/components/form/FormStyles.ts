import styled from 'styled-components';

export const Container = styled.div`
    background: var(--gradient-white-2);
    padding: 5rem 35rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    @media (max-width: 1024px) {
        padding: 5rem 5rem;
    }
    @media (max-width: 768px) {
        padding: 3rem 2rem;
    }
`;

export const FormTitle = styled.h1`
    font-size: 3rem;
    color: #3c06a4;
    text-align: start;
    @media (max-width: 768px) {
        text-align: center;
    }
`;

export const ConfirmButton = styled.h1`
    color: white;
    padding: 1rem 1.25rem;
    background: var(--color-primary);
    border: none;
    border-radius: 10px;
    transition: all 0.2s;
    width: 16rem;
    text-align: center;
    font-weight: 700;
    font-size: 1rem;
    &:hover {
        cursor: pointer;
        background: var(--color-primary-dark);
    }
`;