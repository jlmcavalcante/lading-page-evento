import React from "react";
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
        <Container id="about">
            <InfoContainer>
                <div>
                    <InfoSubTitle>Una-se ao</InfoSubTitle>
                    <InfoTitle>Nosso Evento</InfoTitle>
                </div>
                <div>
                    <InfoText>
                       O evento é destaque na agenda educacional nacional e apoiado por várias instituições, incluindo a Associação dos Membros dos Tribunais de Contas do Brasil (Atricon), o Conselho Nacional dos Presidentes dos Tribunais de Contas (CNPTC), a Associação Brasileira dos Tribunais de Contas dos Municípios (ABRACOM), a Associação Nacional do Ministério Público de Contas (AMPCON) e a Associação Nacional dos Ministros e Conselheiros Substitutos dos Tribunais de Contas (AUDICON). As inscrições serão gratuitas. Todos os interessados são convidados a participar.
                    </InfoText>
                </div>
                <div>
                    <InfoItem>
                        <span>
                            <FaCalendarAlt />
                        </span>
                        <span>Data: </span>
                        <span>4 a 6 - Junho</span>
                    </InfoItem>
                    <InfoItem>
                        <span>
                            <FaMapMarkerAlt />
                        </span>
                        <span>Local: </span>
                        <span>Teatro SESC Cajuína - Teresina</span>
                    </InfoItem>
                </div>
                <div className="flex flex-col gap-y-4 md:flex-row md:gap-x-4">
                    <Button to="subscribe" smooth={true} duration={500} spy={true} className="border drop-shadow-md">
                        Realizar Inscrição
                    </Button>
                    <Button to="subscribe" smooth={true} duration={500} spy={true} className="border drop-shadow-md">
                        Google Maps
                    </Button>
                </div>
            </InfoContainer>
            <CardsContainer>
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
        </Container>
    );
};

export default About;
