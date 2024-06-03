import React from "react";
import Gamefication from "../Gamefication";
import {
    Container,
    InfoContainer,
    InfoTitle,
    InfoSubTitle,
    InfoText,
    InfoItem,
    Button,
    CardsContainer,
    Card,
    CardIcon,
    CardNumber,
    CardText,
    CardTitle,
    MainContainer,
    ButtonLink,
} from "./AboutStyles";

import {
    FaMapMarkerAlt,
    FaRegComments,
    FaCalendarAlt,
    FaUsers,
} from "react-icons/fa";

import { GiPublicSpeaker, GiPartyPopper } from "react-icons/gi";

const About: React.FC = () => {
    return (
        <MainContainer>
        <Container id="about">
            <InfoContainer>
                <div>
                    <InfoSubTitle>
                        Una-se ao
                    </InfoSubTitle>
                    <InfoTitle>Nosso Evento</InfoTitle>
                </div>
                <div>
                    <InfoText>
                        O Tribunal de Contas do Estado do Piauí (TCE-PI), em parceria com o Instituto Rui Barbosa (IRB), realizará nos dias 04, 05 e 06 de junho deste ano o VI Simpósio Nacional de Educação (SINED).
                        <br/>
                        <br/>
                        O evento se estabelece como um espaço privilegiado de debate e reflexão sobre os desafios enfrentados pela educação no Brasil, com o objetivo de propor soluções inovadoras e eficazes para o setor.
                        <br/>
                        <br/>
                        O VI SINED contará com uma programação rica e diversificada, composta por palestras e atividades voltadas para temas críticos da educação pública brasileira. O simpósio reunirá especialistas renomados, além de gestores educacionais e representantes de órgãos de controle externo. O encontro permitirá a troca de conhecimentos e experiências, promovendo uma discussão aprofundada e colaborativa sobre as melhores práticas e estratégias para o avanço da educação no país.
                        <br/>
                        <br/>
                        Uma oportunidade de produzir insights valiosos e inspirar ações concretas que contribuam significativamente para a melhoria da qualidade educacional no Brasil. Participe conosco deste importante fórum e ajude a construir um futuro educacional mais promissor para todos.
                    </InfoText>
                </div>
                <div className="mt-4 md:mt-1 max-md:flex max-md:flex-col max-lg:align-center max-lg:justify-center">
                    <InfoItem>
                        <span>
                            <FaMapMarkerAlt />
                        </span>
                        <span>Local: </span>
                        <span className="max-md:text-sm">Teatro SESC Cajuína - Teresina</span>
                    </InfoItem>
                    <InfoItem>
                        <span>
                            <FaCalendarAlt />
                        </span>
                        <span>Data: </span>
                        <span className="max-md:text-sm">4 a 6 - Junho</span>
                    </InfoItem>
                </div>
                <div className="flex flex-col mt-4 md:mt-2 gap-y-8 md:flex-row md:gap-x-4 max-lg:align-center max-md:justify-center">
                    <Button to="formulario" smooth={true} duration={500} spy={true} className="border drop-shadow-md">
                        Realizar Inscrição
                    </Button>
                    <ButtonLink className="border drop-shadow-md" href="https://maps.app.goo.gl/5F1EiJsfWKK6VvAx6" target="_blank">
                        Google Maps
                    </ButtonLink>
                </div>
            </InfoContainer>
            <div className="flex flex-col lg:flex-col xl:flex-row justify-center items-center xl:gap-x-8 md:flex-col md:gap-y-8">
                <CardsContainer className="m-0 lg:mt-32">
                    <Card>
                        <CardIcon>
                            <FaRegComments />
                        </CardIcon>
                        <CardTitle>Networking</CardTitle>
                        <CardText>
                            Conheça pessoas interessadas no avanço da educação.
                        </CardText>
                        <CardNumber></CardNumber>
                    </Card>
                    <Card>
                        <CardIcon>
                            <FaUsers />
                        </CardIcon>
                        <CardTitle>Experiências</CardTitle>
                        <CardText>
                            Experiencie um evento diferenciado e inovador.
                        </CardText>
                        <CardNumber></CardNumber>
                    </Card>
                </CardsContainer>
                <CardsContainer className="mt-8 lg:mt-0 xl:mt-32">
                    <Card>
                        <CardIcon>
                            <GiPublicSpeaker />
                        </CardIcon>
                        <CardTitle>Palestras</CardTitle>
                        <CardText>
                            Palestras com profissionais e especialistas da área em destaque.
                        </CardText>
                        <CardNumber></CardNumber>
                    </Card>
                    <Card>
                        <CardIcon>
                            <GiPartyPopper />
                        </CardIcon>
                        <CardTitle>Cultura</CardTitle>
                        <CardText>
                            Conheça a cultura local e nossa cidade de Teresina.
                        </CardText>
                        <CardNumber></CardNumber>
                    </Card>
                </CardsContainer>
            </div>
        </Container>
        <Gamefication />
        </MainContainer>
    );
};

export default About;
