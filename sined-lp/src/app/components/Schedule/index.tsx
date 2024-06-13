import React from "react";
import { Card, Tabs, Accordion } from "flowbite-react";
import { customTabTheme } from '../../flowbite-themes/TabsTheme';
import { HiCalendar } from "react-icons/hi";
import { FaGoogleDrive } from "react-icons/fa";
import { FaPhotoFilm } from "react-icons/fa6";
import {
    Title,
} from "./ScheduleStyles";

const Schedule: React.FC = () => {
    const events = [
        {
            date: "04/06/2024",
            content: [
                {
                    date: "04/06/2024",
                    time: "17:00",
                    location: "Teatro SESC",
                    title: "Abertura",
                    mainSpeaker: {
                        name: "Luiz Fernando Abrucio",
                        title: "Professor FGV",
                    },
                    speakers: [
                        "Luiz Fernando Abrucio – Professor FGV",
                    ],
                    theme: "O Sistema Nacional de Educação e a Governança Colaborativa: Principais Desafios",
                    description: "",
                    subcontent: [
                        {
                            title: "Apresentação cultural",
                            description: "Luar do São João",
                            location: "Teatro SESC",
                        },
                        {
                            title: "Coquetel",
                            description: "",
                            location: "Espaço Nerina",
                        },
                    ],
                },
            ],
        },
        {
            date: "05/06/2024",
            content: [
                {
                    date: "05/06/2024",
                    time: "09:00",
                    location: "Teatro SESC",
                    title: "Painel 1",
                    mainSpeaker: {
                        name: "Susana Maria Fontes Azevedo Freitas",
                        title: "",
                    },
                    speakers: [
                        "Washington Bandeira – Secretário de estado da Educação do Piauí",
                        "Vitor de Ângelo - Secretário de estado da Educação do Espírito Santo",
                        "Jucineide Fernandes - Secretária Executiva do Ensino Médio e Profissional (SEDUC/CE)",
                        "Mediação: Susana Maria Fontes Azevedo Freitas",
                    ],
                    theme: "Regime de Colaboração",
                    description: "",
                    subcontent: [],
                },
                {
                    date: "05/06/2024",
                    time: "10:30",
                    location: "Teatro SESC",
                    title: "Painel 2",
                    mainSpeaker: {
                        name: "Flávia Gomes Cordeiro",
                        title: "MP/PI",
                    },
                    speakers: [
                        "João Augusto Bandeira de Mello – MPC/SE e Presidente da AMPCON",
                        "Rodrigo Coelho do Carmo – Conselheiro do TCE/ES e Presidente do CTE-IRB",
                        "Alípio Dias do Santos Neto – Auditor do TCU",
                        "Fredy Henrique Miller – Auditor do TCM/SP",
                        "Mediação: Flávia Gomes Cordeiro - MP/PI",
                    ],
                    theme: "Experiências do controle externo",
                    description: "",
                    subcontent: [],
                },
                {
                    date: "05/06/2024",
                    time: "14:00",
                    title: "Blackbox 1",
                    mainSpeaker: {
                        name: "",
                        title: "",
                    },
                    speakers: [],
                    theme: "",
                    description: "Atividade: Game",
                    subcontent: [],
                },
                {
                    date: "05/06/2024",
                    time: "14:30",
                    location: "Teatro SESC",
                    title: "Painel 3",
                    mainSpeaker: {
                        name: "Patrícia Sarmento dos Santos",
                        title: "TCE/SE",
                    },
                    speakers: [
                        "Herbet Lima– Secretário municipal de Educação de Sobral/CE",
                        "Juliana Rohsner Vianna Toniati – Secretária municipal de Educação de Vitória/ES",
                        "Danilo Alves de Carvalho – Prefeito de Itabaianinha/SE",
                        "José Raimundo de Sá Lopes – Prefeito de Oeiras/PI",
                        "Mediação: Patrícia Sarmento dos Santos"
                    ],
                    theme: "Tema: Experiências municipais, reordenamento de rede e resultados (prefeitos)",
                    description: "",
                    subcontent: [],
                },
                {
                    date: "05/06/2024",
                    time: "16:30",
                    title: "Blackbox 2",
                    mainSpeaker: {
                        name: "",
                        title: "",
                    },
                    speakers: [],
                    theme: "",
                    description: "Atividade: Game",
                    subcontent: [],
                },
            ]
        },        
        {
            date: "06/06/2024",
            content: [
                {
                    date: "06/06/2024",
                    time: "08:30",
                    location: "",
                    title: "Blackbox 3",
                    mainSpeaker: {
                        name:"",
                        title: ""
                    },
                    speakers: [],
                    theme: "",
                    description: "Camila",
                    subcontent: [],
                },                
                {
                    date: "06/06/2024",
                    time: "09:00",
                    location: "Teatro SESC",
                    title: "Painel 01",
                    mainSpeaker: {
                        name:"Lilian Martins",
                        title: "TCE/PI"
                    },
                    speakers: [,
                        "Maurício Holanda - Secretário da Secretaria de Articulação Intersetorial e com os Sistemas de Ensino do Ministério da Educação (SASE/MEC)",
                        "Raimunda Alves Melo -Doutora em Educação pela UFPI",
                        "Mediação: Cons. Lilian Martins – TCE/PI"

                    ],
                    theme: "PNE e Sistema Nacional de Educação",
                    description: "",
                    subcontent: [],
                },                      
                {
                    date: "06/06/2024",
                    time: "14:00",
                    location: "",
                    title: "Blackbox 4",
                    mainSpeaker: {
                        name:"",
                        title: ""
                    },
                    speakers: [],
                    theme: "",
                    description: "Atividade: Game",
                    subcontent: [],
                },                
                {
                    date: "06/06/2024",
                    time: "14:30",
                    location: "Teatro SESC",
                    title: "Painel 02",
                    mainSpeaker: {
                        name:"Rejane Dias",
                        title: "Conselheira do TCE/PI"
                    },
                    speakers: [
                        "Olavo Nogueira Filho – Diretor do Todos Pela Educação",
                        "Mônica Rodrigues – Chefe da área de educação do UNICEF",
                        "Rogers Mendes - Gestor da Área de Impacto Nacional do Centro Lemann",
                        "Haroldo Correa Rocha – Coordenador Geral do Movimento Profissão Docente",
                        "Mediação: Rejane Dias – Conselheira do TCE/PI",
                    ],
                    theme: "Experiências do Terceiro Setor",
                    description: "",
                    subcontent: [],
                },                
                {
                    date: "06/06/2024",
                    time: "17:00",
                    location: "",
                    title: "Encerramento",
                    mainSpeaker: {
                        name:"",
                        title: ""
                    },
                    speakers: [],
                    theme: "",
                    description: "Premiação !",
                    subcontent: [],
                },
            ]
        },
    ];

    return (
        <div className="content-container flex-col">
            <div className="pt-8 px-8 pb-2">
                <Title>
                    Programação
                </Title>
                <p className="flex flex-col text-center align-center justify-center text-lg text-white gap-4">
                    Confira aqui os arquivos disponibilizados pela comissão organizadora do evento
                    <a href="https://drive.google.com/drive/folders/1nYwbKm5mn3Qa1G9yb876e94pNeVFtdDf?usp=sharing" target="_blank" rel="noreferrer" className="text-white">
                        <div className="flex flex-row gap-2 justify-center align-center">
                            <FaGoogleDrive />
                            Materiais
                        </div>
                    </a>
                    <a href="https://www.flickr.com/photos/159944433@N04/with/53772111908" target="_blank" rel="noreferrer" className="text-white">
                        <span className="flex flex-row gap-2 justify-center ">
                            <FaPhotoFilm />
                            Fotos
                        </span>
                    </a>
                </p>
            </div>

          <Tabs
            aria-label="Default tabs"
            theme={customTabTheme}
            style="underline"
            className="w-full pt-2 px-8 pb-8 justify-center"
          >
            {
                events.map((event, index) => {
                    return (
                        <Tabs.Item
                            active
                            title={event.date}
                            icon={HiCalendar}
                            className="hover:border-white hover:text-white"
                        >
                            {
                                event.content.map((content, index) => {
                                    return (
                                        <Card className="w-full mb-4">
                                            <h5 className="text-2xl font-bold tracking-tight text-gray-800 dark:text-white">
                                                {content.time}
                                            </h5>
                                            <Accordion collapseAll>
                                                <Accordion.Panel>
                                                    <Accordion.Title>
                                                        <span className="font-bold">
                                                            {content.title}
                                                        </span>
                                                        <br />
                                                        <span className="">
                                                            {content.theme}
                                                        </span>
                                                        {
                                                            /*
                                                                <br />
                                                                <span className="font-normal italic">
                                                                    {content.mainSpeaker.title}
                                                                </span>
                                                            */
                                                        }
                                                    </Accordion.Title>
                                                    <Accordion.Content>
                                                        {
                                                            content.description &&
                                                            <p>
                                                                {content.description}
                                                                <br />
                                                            </p>
                                                        }
                                                        {
                                                            content.speakers.length > 1 &&
                                                            <p>
                                                                Palestrantes:
                                                            </p>
                                                        }
                                                        {
                                                            content.speakers.map((speaker, index) => {
                                                                return (
                                                                    // html tag of a bullet point list
                                                                    <li className="pl-2">
                                                                        {speaker}
                                                                    </li>
                                                                );
                                                            })
                                                        }
                                                        {
                                                            content.location &&
                                                            <p>
                                                                Local: {content.location}
                                                            </p>
                                                        }
                                                        {
                                                            content.subcontent.map((sub, index) => {
                                                                return (
                                                                    <div className="border-t-[1px] border-gray-300 dark:border-gray-700 mt-4">
                                                                        <p className="font-bold">
                                                                            {sub.title}
                                                                        </p>
                                                                        {
                                                                            sub.description &&
                                                                            <li className="pl-2">
                                                                                {sub.description}
                                                                            </li>
                                                                        }
                                                                        <p>
                                                                            Local: {sub.location}
                                                                        </p>
                                                                    </div>
                                                                );
                                                            })
                                                        }
                                                    </Accordion.Content>
                                                </Accordion.Panel>
                                            </Accordion>
                                        </Card>
                                    );
                                })
                            }
                        </Tabs.Item>
                    );
                })
            }
          </Tabs>
        </div>
    );
}

export default Schedule;

