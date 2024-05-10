import { Container, Image, Info, Title, SubTitle, Text } from "./GameficationStyles";

const Gamefication: React.FC = () => {
    return (
        <Container>
            <Image>
                <img src="/mockup.png" alt="mockup of gamefication app" className="m-auto"></img>
            </Image>
            <Info>
                <SubTitle>Conheça a nova forma de interagir com o SINED por meio da</SubTitle>
                <Title>
                    Experiência de gamificação por aplicativo móvel
                </Title>
                <Text>
                    Produzida pela equipe da{' '}
                    <span className="text-[#3c06a4] font-semibold">
                        <a href="https://www.instagram.com/theforense/" target="_blank" rel="noreferrer">
                            The Forense
                        </a>
                    </span>
                    , a gamificação com o aplicativo do SINED que visa tornar a experiência do usuário mais dinâmica e imersiva. Além de incentivar a competitividade saúdavel e networking entre os participantes por pontos e premiações.
                </Text>
            </Info>
        </Container>
    );
};

export default Gamefication;
