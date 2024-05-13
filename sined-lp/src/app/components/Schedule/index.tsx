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
                        "Camilo Sobreira de Santana – Ministra da Educação",
                    ],
                    theme: "Criança Nacional Alfabetizada",
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
                        name: "Lilian Martins",
                        title: "TCE/PI",
                    },
                    speakers: [
                        "Maurício Holanda – Secretário da Secretaria de Articulação Intersetorial e com os Sistemas de Ensino do Ministério da Educação (SASE/MEC)",
                        "Idilvan Alencar – Deputado Federal",
                        "Alessio Costa Lima – Presidente da Undime Nacional",
                        "Mediação: Lilian Martins - TCE/PI",
                    ],
                    theme: "Sistema Nacional de Educação",
                    description: "",
                    subcontent: [],
                },
                {
                    date: "05/06/2024",
                    time: "10:30",
                    location: "Teatro SESC",
                    title: "Painel 2",
                    mainSpeaker: {
                        name: "Cons. Patrícia Sarmento",
                        title: "TCE/MS",
                    },
                    speakers: [
                        "Washington Bandeira – Secretário de estado da Educação do Piauí",
                        "Vitor de Ângelo – Secretário de estado da Educação do Espírito Santo",
                        "Eliana Nunes – Secretária de estado da Educação do Ceará",
                        "Mediação: Cons. Patrícia Sarmento - TCE/MS",
                    ],
                    theme: "Regime de Colaboração",
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
                    description: "",
                    subcontent: [],
                },
                {
                    date: "05/06/2024",
                    time: "14:30",
                    location: "Teatro SESC",
                    title: "Painel 3",
                    mainSpeaker: {
                        name: "Cons. Suzana",
                        title: "TCE/SE",
                    },
                    speakers: [
                        "Ivo Gomes – Prefeito de Sobral/CE",
                        "Marcelo Beltrão Siqueira – Prefeito de Cururipe/AL",
                        "Danilo Alves de Carvalho – Prefeito de Itabaianinha/SE",
                        "José Raimundo de Sá Lopes – Prefeito de Oeiras/PI",
                        "Mediação: Cons. Suzana - TCE/SE"
                    ],
                    theme: "Experiências municipais, reordenamento de rede e resultados",
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
                    description: "",
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
                    description: "",
                    subcontent: [],
                },                
                {
                    date: "06/06/2024",
                    time: "09:00",
                    location: "Teatro SESC",
                    title: "Painel 01",
                    mainSpeaker: {
                        name:"Flávia Gomes Cordeiro",
                        title: "MP/PI"
                    },
                    speakers: [
                        "João Augusto Bandeira de Mello – MPC/SE e Presidente da AMPCON",
                        "Rodrigo Coelho do Carmo – Conselheiro do TCE/ES e Presidente do CTE-IRB",
                        "Alípio Dias do Santos Neto – Auditor do TCU",
                        "Cíntia Regina Béo – Auditora do TCM/SP"

                    ],
                    theme: "Experiências do controle externo",
                    description: "",
                    subcontent: [],
                },                
                {
                    date: "06/06/2024",
                    time: "11:00",
                    location: "",
                    title: "Blackbox 4",
                    mainSpeaker: {
                        name:"",
                        title: ""
                    },
                    speakers: [],
                    theme: "",
                    description: "",
                    subcontent: [],
                },                
                {
                    date: "06/06/2024",
                    time: "14:00",
                    location: "",
                    title: "Blackbox 5",
                    mainSpeaker: {
                        name:"",
                        title: ""
                    },
                    speakers: [],
                    theme: "",
                    description: "",
                    subcontent: [],
                },                
                {
                    date: "06/06/2024",
                    time: "14:30",
                    location: "Teatro SESC",
                    title: "Painel 02",
                    mainSpeaker: {
                        name:"Alessandra Gotti",
                        title: "Presidente do Instituto Articule"
                    },
                    speakers: [
                        "Olavo Nogueira Filho – Diretor do Todos Pela Educação",
                        "Gregori Elacqua – Economista do BID",
                        "Mônica Rodrigues – Chefe da área de educação do UNICEF",
                        "José Cordoveu de Arruda Neto – Diretor da Associação Bem Comum"

                    ],
                    theme: "Experiências do Terceiro Setor",
                    description: "",
                    subcontent: [],
                },                
                {
                    date: "06/06/2024",
                    time: "15:00",
                    location: "",
                    title: "Encerramento",
                    mainSpeaker: {
                        name:"",
                        title: ""
                    },
                    speakers: [],
                    theme: "",
                    description: "",
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
            className="w-full pt-2 px-8 pb-8"
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
                                                        <p>
                                                            Local: {content.location}
                                                        </p>
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

