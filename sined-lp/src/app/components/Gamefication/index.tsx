import { Container, Image, Info, Title, SubTitle, Text } from "./GameficationStyles";
import { CiMobile3 } from "react-icons/ci";

const Gamefication: React.FC = () => {
    return (
        <Container>
            <Image>
                <img src="/mockup.png" alt="mockup of gamefication app" className="m-auto pt-8"></img>
            </Image>
            <Info>
                <Text>
                    Produzida pela equipe da{' '}
                    <span className="text-[#3c06a4] font-semibold">
                        <a href="https://www.instagram.com/theforense/" target="_blank" rel="noreferrer">
                            The Forense
                        </a>
                    </span>, conheça a nova forma de interagir com o SINED VI por meio da dinâmica</Text>
                <Title>
                    Experiência de gamificação por aplicativo móvel
                </Title>
                <Text>
                    O aplicativo e webapp do SINED VI visa tornar a experiência do participante mais dinâmica e imersiva. Além de incentivar a competitividade saudável e networking entre os participantes por pontos e premiações.
                </Text>
                {
                <div className="flex flex-col lg:flex-row gap-8 w-full justify-center items-center 2xl:justify-start">
                    <button type="button" className="flex items-center justify-center w-48 mt-3 text-white bg-black rounded-lg h-14" onClick={() => window.open("https://play.google.com/store/apps/details?id=br.com.sined.app", "_blank")}>
                        <div className="mr-3">
                            <svg viewBox="30 336.7 120.9 129.2" width="30">
                                <path fill="#FFD400" d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z">
                                </path>
                                <path fill="#FF3333" d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z">
                                </path>
                                <path fill="#48FF48" d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z">
                                </path>
                                <path fill="#3BCCFF" d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z">
                                </path>
                            </svg>
                        </div>
                        <div>
                            <div className="text-xs">
                                Baixe
                            </div>
                            <div className="-mt-1 font-sans text-xl font-semibold">
                                Google Play
                            </div>
                        </div>
                    </button>
                   <button type="button" className="flex items-center justify-center w-48 mt-3 text-white bg-black rounded-lg h-14 max-md:mb-12" onClick={() => window.open("", "_blank")}>
                        <div className="mr-3">
                            <CiMobile3 size={30} className="mr-2"/>
                        </div>
                        <div>
                            <div className="text-xs">
                                Acesse o
                            </div>
                            <div className="-mt-1 font-sans text-xl font-semibold">
                                WebApp
                            </div>
                        </div>
                    </button> 
                </div>
                }
            </Info>
        </Container>
    );
};

export default Gamefication;
