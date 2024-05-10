import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";

export const Container = styled.section`
    padding: 5rem 10rem;
    display: flex;
    justify-content: space-between;
    background: var(--gradient-white-2);
    gap: 2rem;
    @media (max-width: 1200px) {
        flex-direction: column;
    }
    @media (max-width: 1024px) {
        padding: 5rem 5rem;
    }

    @media (max-width: 768px) {
        padding: 3rem 2rem;
    }
`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 50%;
    gap: 1rem;
    @media (max-width: 1201px) {
        width: 100%;
        gap: 1rem;
    }

    @media (max-width: 768px) {
        align-items: center;
    }
`;

export const InfoSubTitle = styled.h3`
    color: var(--color-gray);
    font-weight: 400;
    margin-bottom: 0.5rem;
    @media (max-width: 768px) {
        text-align: center;
    }
`;

export const InfoTitle = styled.h1`
    font-size: 3rem;
    color: var(--color-primary);
    @media (max-width: 768px) {
        text-align: center;
    }
`;

export const InfoText = styled.div`
    color: var(--color-gray);
    font-size: 1.1rem;
    line-height: 1.6;
    @media (max-width: 768px) {
        text-align: center;
    }
`;

export const InfoItem = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1rem;
    @media (max-width: 768px) {
        justify-content: center;
    }

    &:nth-child(1) {
        margin-bottom: 0.5rem;
    }

    span:nth-child(1) {
        color: var(--color-primary);
    }

    span:nth-child(2) {
        font-weight: 700;
    }

    span:nth-child(3) {
        margin-left: 0.1rem;
        font-weight: 400;
    }
`;

export const Button = styled(LinkScroll)`
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

export const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    justify-items: center;

    @media (max-width: 600px) {
        grid-template-columns: 1fr;
    }
`;

export const CardNumber = styled.div`
    position: absolute;
    bottom: -2.5rem;
    right: -2.5rem;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    background: var(--color-primary);
    color: white;
    font-size: 1.2rem;
    font-weight: 600;
    transition: transform 0.8s;
    * {
        position: absolute;
        bottom: 3.2rem;
        right: 3.5rem;
    }
`;

export const CardTitle = styled.h2`
    font-size: 24px;
    margin-bottom: 20px;
    color: #1c1c24;
    z-index: 1;
    transition: color 0.5s;
`;

export const CardText = styled.p`
    color: var(--color-gray);
    z-index: 1;
    transition: color 0.5s;
`;

export const CardIcon = styled.div`
    font-size: 4rem;
    position: absolute;
    top: 1rem;
    right: 1rem;
    color: var(--color-gray-light);
    z-index: 1;
    transition: color 0.5s;
`;

export const Card = styled.div`
    padding: 40px;
    max-width: 350px;
    height: 200px;
    background: white;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    transition: box-shadow 0.4s;

    &:hover {
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
            rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
            rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    }

    &:hover ${CardNumber} {
        transform: scale(8);
    }
    &:hover ${CardTitle} {
        color: var(--color-white);
    }
    &:hover ${CardText} {
        color: var(--color-white);
    }
    &:hover ${CardIcon} {
        color: var(--color-white);
    }
`;
