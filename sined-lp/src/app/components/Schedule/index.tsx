import React from "react";
import { Card, Tabs, Accordion } from "flowbite-react";
import { customTabTheme } from '../../flowbite-themes/TabsTheme';
import { HiCalendar } from "react-icons/hi";
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
                        name: "Camilo Sobreira de Santana",
                        title: "Ministro da Educação",
                    },
                    speakers: [
                        "Camilo Sobreira de Santana – Ministro da Educação",
                    ],
                    theme: "Criança Nacional Alfabetizada",
                    description: "",
                    subcontent: [
                        {
                            title: "O Sistema Nacional de Educação e a Governança Colaborativa: principais desafios",
                            description: "Luiz Fernando Abrucio – Professor FGV",
                            location: "Teatro SESC",
                        },
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
                        name: "Cons. Patrícia Sarmento",
                        title: "TCE/MS",
                    },
                    speakers: [
                        "Washington Bandeira – Secretário de estado da Educação do Piauí",
                        "Vitor de Ângelo - Secretário de estado da Educação do Espírito Santo",
                        "Jucineide Fernandes - Secretária Executiva do Ensino Médio e Profissional (SEDUC/CE)",
                        "Mediação: Cons. Patrícia Sarmento - TCE/MS",
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
                        name: "Cons. Suzana Maria Fontes Azevedo Freitas",
                        title: "TCE/SE",
                    },
                    speakers: [
                        "Herbet Lima– Secretário municipal de Educação de Sobral/CE",
                        "Juliana Rohsner Vianna Toniati – Secretária municipal de Educação de Vitória/ES",
                        "Danilo Alves de Carvalho – Prefeito de Itabaianinha/SE",
                        "José Raimundo de Sá Lopes – Prefeito de Oeiras/PI",
                        "Mediação: Cons. Suzana Maria Fontes Azevedo Freitas - TCE/SE"
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
                    description: "Premiação",
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
            </div>

          <Tabs
            aria-label="Default tabs"
            theme={customTabTheme}
            style="underline"
            className="w-full pt-2 px-8 pb-8 max-lg:justify-center"
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
                                                        <p>
                                                            {content.description}
                                                        </p>
                                                        <br />
                                                        {
                                                            content.speakers.map((speaker, index) => {
                                                                return (
                                                                    <p>
                                                                        {speaker}
                                                                    </p>
                                                                );
                                                            })
                                                        }
                                                        <br />
                                                        {
                                                            content.location !== "" &&
                                                            <p>
                                                                Local: {content.location}
                                                            </p>
                                                        }
                                                        {
                                                            content.subcontent.map((sub, index) => {
                                                                return (
                                                                    <div>
                                                                        <br />
                                                                        <p>
                                                                            {sub.title} - {sub.description}
                                                                        </p>
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

