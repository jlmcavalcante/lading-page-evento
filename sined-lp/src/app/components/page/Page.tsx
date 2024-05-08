import { Button, Card, Carousel, Tabs } from "flowbite-react";
import { useRef } from 'react';
import { HiCalendar } from "react-icons/hi";
import '../../../index.css';
import { customTabTheme } from '../../flowbite-themes/TabsTheme';
import { customCarouselTheme } from '../../flowbite-themes/CarouselTheme';
import Form from '../form/Form';
import './Page.scss';


export default function Page() {
  const sectionRef = useRef<HTMLElement>(null);

  // Função para realizar o scroll até a seção
  const scrollToSection = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="app">
      <div className="main">
        <div className="content-container">
          <div className="menu">
            <div className="logo">
              <img
                src="/logo-sined-removebg-white.png"
                alt="logo_sined"
                width={120}
              />
            </div>
            <div className="item-menu"></div>
          </div>
        </div>

        <div className="uppercase mt-16 flex flex-col gap-4 text-center text-3xl font-black tracking-tight text-white-900 sm:text-5xl">
          <span>
            <span className="text-[#FFC508] drop-shadow-lg">VI </span>
            <span className="drop-shadow-lg">Simpósio Nacional</span>
          </span>
          <span className="drop-shadow-lg">de Educação</span>
        </div>
        <div className="w-full my-8 flex flex-row items-center justify-center">
          <Button
            size="lg"
            gradientDuoTone="greenToBlue"
            className="border drop-shadow-md w-64"
            onClick={scrollToSection}
          >
            <span className="text-1xl font-bold">Realizar Inscrição</span>
          </Button>
        </div>
      </div>

      <section className="bg-[#016D94]">
        <div className="content-container flex-col">
          <div className="mb-8 mt-4">
            <span className="text-2xl font-medium text-white uppercase">
              Programação do Evento
            </span>
            <div className="bg-white w-full h-1 rounded-r-lg"></div>
          </div>

          <Tabs
            aria-label="Default tabs"
            theme={customTabTheme}
            style="underline"
            className="w-full"
          >
            <Tabs.Item
              active
              title="01/01/2024"
              icon={HiCalendar}
              className="hover:border-white hover:text-white"
            >
              <Card className="w-full mb-4">
                <h5 className="text-2xl font-bold tracking-tight text-gray-800 dark:hover:text-white">
                  09:00 - 10:00
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Abertura do evento com uma palestra sobre as tendências
                  futuras na intersecção da educação e tecnologia. Discussão
                  sobre inteligência artificial, realidade aumentada e
                  aprendizado virtual.
                </p>
              </Card>

              <Card className="w-full">
                <h5 className="text-2xl font-bold tracking-tight text-gray-800 dark:text-white">
                  10:15 - 11:15
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Workshop interativo que explora ferramentas emergentes como
                  tablets, softwares educacionais e plataformas de ensino
                  online.
                </p>
              </Card>
            </Tabs.Item>

            <Tabs.Item active title="02/01/2024" icon={HiCalendar}>
              <Card className="w-full mb-4">
                <h5 className="text-2xl font-bold tracking-tight text-gray-800 dark:text-white">
                  08:00 - 10:00
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Um painel com educadores, estudantes e desenvolvedores
                  discutindo os desafios e soluções para a educação à distância.
                </p>
              </Card>

              <Card className="w-full">
                <h5 className="text-2xl font-bold tracking-tight text-gray-800 dark:text-white">
                  10:15 - 11:15
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Apresentação sobre como a inteligência artificial está sendo
                  usada para personalizar a experiência de aprendizado, com
                  exemplos práticos e estudos de caso.
                </p>
              </Card>
            </Tabs.Item>

            <Tabs.Item active title="03/01/2024" icon={HiCalendar}>
              <Card className="w-full mb-4">
                <h5 className="text-2xl font-bold tracking-tight text-gray-800 dark:text-white">
                  09:30 - 10:00
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Um workshop prático sobre como criar conteúdos educativos
                  interativos usando software específico e técnicas de
                  engajamento.
                </p>
              </Card>

              <Card className="w-full">
                <h5 className="text-2xl font-bold tracking-tight text-gray-800 dark:text-white">
                  10:15 - 11:15
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Encerramento do evento com uma sessão de networking,
                  permitindo aos participantes trocar ideias, discutir
                  colaborações futuras e compartilhar contatos.
                </p>
              </Card>
            </Tabs.Item>
          </Tabs>
        </div>
      </section>

      <section ref={sectionRef}>
        <Form />
      </section>

      <section className="bg-[#016D94]">

      </section>

      <div className="min-h-60">
        <div className="content-container">
          <div className="flex flex-col w-full pt-8">
            <span className="text-2xl font-medium text-[#016D94] uppercase">
              Realizadores e Apoiadores
            </span>
            <div className="bg-[#016D94] w-full h-1 rounded-r-lg"></div>
          </div>
        </div>
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 px-16">
          <Carousel slide={true} theme={customCarouselTheme}>
            <div className="flex h-full items-center justify-center bg-white dark:bg-gray-700 dark:text-white px-4">
              <img
                src="/apoiador-1.jpeg"
                alt="..."
                width={1/3}
                className="flex-1 scale-50"
              />
              <img
                src="/apoiador-2.jpeg"
                alt="..."
                width={1/3}
                className="flex-1 scale-50"
              />
              <img
                src="/apoiador-3.jpeg"
                alt="..."
                width={1/3}
                className="flex-1 scale-50"
              />
              <img
                src="/apoiador-4.jpeg"
                alt="..."
                width={1/3}
                className="flex-1 scale-50"
              />
            </div>

            <div className="flex h-full items-center justify-center bg-white dark:bg-gray-700 dark:text-white px-4">
              <img
                src="/apoiador-5.jpeg"
                alt="..."
                width={1/3}
                className="flex-1 scale-50"
              />
              <img
                src="/apoiador-6.jpeg"
                alt="..."
                width={1/3}
                className="flex-1 scale-50"
              />
              <img
                src="/apoiador-7.jpeg"
                alt="..."
                width={1/3}
                className="flex-1 scale-50"
              />
              <img
                src=""
                alt=""
                width={1/3}
                className="flex-1 scale-50"
              />
            </div>
          </Carousel>
        </div>
      </div>

      <div className="bg-[#016D94] h-40">

      </div>
    </div>
  );
}
