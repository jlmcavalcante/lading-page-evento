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
            <span className="text-[#fbc404] drop-shadow-lg">VI </span>
            <span className="drop-shadow-lg">Simpósio Nacional</span>
          </span>
          <span className="drop-shadow-lg">de Educação</span>
        </div>
        <div className="w-full my-8 flex flex-row items-center justify-center">
          <Button
            size="lg"
            className="border drop-shadow-md w-64 bg-[#407A71] text-white"
            onClick={scrollToSection}
          >
            <span className="text-1xl font-bold">Realizar Inscrição</span>
          </Button>
        </div>
      </div>

      <section>
        <div className="content-container">
          <div className="flex flex-col w-full pt-8">
            <span className="text-2xl font-medium text-[#3c06a4] uppercase">
              SOBRE O EVENTO
            </span>
            <div className="bg-[#3c06a4] w-full h-1 rounded-r-lg"></div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full h-96 sm:h-80 lg:h-96 xl:h-96 2xl:h-96">
          <div className="flex flex-col items-center justify-center w-full h-full">
            <div className="content-container flex flex-col items-center justify-center w-full h-full">
              <div className="flex flex-col items-center justify-center w-full h-full">
                <span className="text-xl font-normal text-gray-500">
                O Tribunal de Contas do Estado do Piauí (TCE-PI), em parceria com o Instituto Rui Barbosa (IRB), realizará nos dias 04, 05 e 06 de junho deste ano o VI Simpósio Nacional de Educação (SINED), que ocorrerá no Teatro Sesc Cajuína, em Teresina. O evento é destaque na agenda educacional nacional e apoiado por várias instituições, incluindo a Associação dos Membros dos Tribunais de Contas do Brasil (Atricon), o Conselho Nacional dos Presidentes dos Tribunais de Contas (CNPTC), a Associação Brasileira dos Tribunais de Contas dos Municípios (ABRACOM), a Associação Nacional do Ministério Público de Contas (AMPCON) e a Associação Nacional dos Ministros e Conselheiros Substitutos dos Tribunais de Contas (AUDICON).
                <br />
                As inscrições serão gratuitas. Todos os interessados são convidados a participar. Abaixo, confira a programação do evento:
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#3c06a4]">
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
              title="04/06/2024"
              icon={HiCalendar}
              className="hover:border-white hover:text-white"
            >
              <Card className="w-full mb-4">
                <h5 className="text-2xl font-bold tracking-tight text-gray-800 dark:text-white">
                  17:00
                </h5>
                <div id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
                  <h2 id="accordion-flush-heading-1">
                    <button type="button" className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3" data-accordion-target="#accordion-flush-body-1" aria-expanded="true" aria-controls="accordion-flush-body-1">
                      <span className="text-left items-start">Abertura</span>
                      <span className="text-left items-start">Tema: Criança Nacional Alfabetizada</span>
                      <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                      </svg>
                    </button>
                  </h2>
                  <div id="accordion-flush-body-1" className="hidden" aria-labelledby="accordion-flush-heading-1">
                    <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                      <p className="mb-2 text-gray-500 dark:text-gray-400">Palestrante: Camilo Sobreira de Santana – Ministro da Educação</p>
                      <p className="text-gray-500 dark:text-gray-400">Tema: Criança Nacional Alfabetizada</p>
                      <p className="text-gray-500 dark:text-gray-400">Local: Teatro SESC</p>
                    </div>
                  </div>
                </div>
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

      <section>
        <div className="content-container flex flex-col">

          <div className="flex flex-col w-full pt-8">
            <span className="text-2xl font-medium text-[#3c06a4] uppercase">
              RECOMENDAÇÕES DO EVENTO
            </span>
            <div className="bg-[#3c06a4] w-full h-1 rounded-r-lg"></div>
          </div>

          <div className="flex flex-col md:flex-row md:justify-between gap-4 mt-8">
            <div className="w-80 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 max-h-80">
                <a href="#">
                    <img className="rounded-t-lg max-h-40" src="/hotel-bluetree.jpg" alt="" />
                </a>
                <div className="p-5">
                  <svg className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z"/>
                  </svg>
                  <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">BLUE TREE HOTELS</h5>
                  </a>
                  <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Codigo Promocional: SINED 10</span>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Acessar: https://www.bluetree.com.br/
                    <br />
                    Clicar em reservar
                    <br />
                    Selecionar o Hotel Blue Tree Teresina
                    <br />
                    Selecionar o período de 04 a 06/06 e preencher o campo “tenho um código” e inserir SINED10
                    <br />
                    grupos.riopoty@bluetree.com.br
                  </p>
                </div>
            </div>

            <div className="w-80 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 max-h-80">
                <a href="#">
                    <img className="rounded-t-lg max-h-40" src="/hotel-uchoa.jpg" alt="" />
                </a>
                <div className="p-5">
                  <svg className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z"/>
                  </svg>
                  <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">UCHOA HOTEL</h5>
                  </a>
                  <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Codigo Promocional: SINED</span>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    https://book.omnibees.com/hotel/5654?currencyId=16&lang=pt-BR
                    <br />
                    Válido 03/06/2024 a 07/06/2024
                    <br />
                    (86) 3142-2901 | (86) 3142-2902
                  </p>
                </div>
            </div>

            <div className="w-80 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 max-h-80">
                <a href="#">
                    <img className="rounded-t-lg max-h-40"
                      src="/hotel-alfa.jpg"
                      alt=""
                    />
                </a>
                <div className="p-5">
                  <svg className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z"/>
                  </svg>
                  <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">ALFA HOTEL</h5>
                  </a>
                  <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Tarifas promocionais</span>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Av. Rio Poty, 959 - Fátima
                    <br />
                    64052-790 - Teresina - Piauí - Brasi
                  </p>
                </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#3c06a4]">

      </section>

      <section ref={sectionRef}>
        <Form />
      </section>

      <section className="bg-[#3c06a4]">

      </section>

      <div className="min-h-60">
        <div className="content-container">
          <div className="flex flex-col w-full pt-8">
            <span className="text-2xl font-medium text-[#3c06a4] uppercase">
              Realizadores e Apoiadores
            </span>
            <div className="bg-[#3c06a4] w-full h-1 rounded-r-lg"></div>
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

      <div className="bg-[#3c06a4] h-40">

      </div>
    </div>
  );
}
