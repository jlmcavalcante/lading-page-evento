import styled from 'styled-components';

export const FormTitle = styled.h1`
    font-size: 3rem;
    color: #3c06a4;
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