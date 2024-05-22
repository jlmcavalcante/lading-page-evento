import { Card, List } from "flowbite-react";
import React from "react";
import { HotelTitle } from "./HotelStyles";

type Props = {};

export default function Hotels({}: Props) {
  return (
    <main className="content-container flex flex-col gap-y-8 gap-x-8 justify-center items-center">
      <div className="px-8 py-8">
        <div className="mb-8">
          <HotelTitle>Recomendações</HotelTitle>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <Card
            className="flex-1"
            imgAlt="Foto do Hotel"
            imgSrc="/hotels/blue-tree-hotel.jpeg"
            horizontal
          >
            <span className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              BLUE TREE HOTELS
            </span>
            <span className="text-sm">
              grupos.riopoty@bluetree.com.br
            </span>
            <p className="font-normal text-sm text-gray-700 dark:text-gray-400 break-words">
              Código Promocional: SINED10
            </p>
            <List className="text-sm">
              <List.Item>Acessar: <a href="https://www.bluetree.com.br/" className="text-blue-500">bluetree.com.br</a></List.Item>
              <List.Item>Clicar em reservar</List.Item>
              <List.Item>Selecionar o Hotel Blue Tree Teresina</List.Item>
              <List.Item>Selecionar o período de 04 a 06/06 e preencher o campo “tenho um código” e inserir SINED10</List.Item>
            </List>
          </Card>          
          
          <Card
            className="flex-1"
            imgAlt="Foto do Hotel"
            imgSrc="/hotels/uchoa-hotel.jpeg"
            horizontal
          >
            <span className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              UCHOA HOTEL
            </span>
            <span className="text-sm">
              reservas@uchoatereinahotel.com
            </span>
            <p className="font-normal text-sm text-gray-700 dark:text-gray-400 break-words">
              Código Promocional: SINED
            </p>
            <List className="text-sm">
              <List.Item>Código válido de 03/06/2024 a 07/06/2024</List.Item>
              <List.Item>Acessar: <a href="https://www.uchoateresinahotel.com" className="text-blue-500">uchoateresinahotel.com</a></List.Item>
              <List.Item>(86) 3142-2901 | (86) 3142-2902</List.Item>
            </List>
          </Card>
        </div>        
        
        <div className="flex flex-col lg:flex-row gap-8 mt-8">
          <Card
            className="flex-1"
            imgAlt="Foto do Hotel"
            imgSrc="/hotels/alfa-hotel.jpg"
            horizontal
          >
            <span className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              ALFA HOTEL
            </span>
            <span className="text-sm">
              reservas@alfahotelteresina.com.br
            </span>
            <p className="font-normal text-sm text-gray-700 dark:text-gray-400 break-words">
              TARIFAS PROMOCIONAIS
            </p>
            <List className="text-sm">
              <List.Item>
                Av. Rio Poty, 959 - Fátima
                64052-790 - Teresina - Piauí - Brasil
              </List.Item>
              <List.Item>Acessar: <a href="https://www.alfahotelteresina.com.br/" className="text-blue-500">alfahotelteresina.com.br</a></List.Item>
              <List.Item>Whats: <a href="https://api.whatsapp.com/send/?phone=5586981822623&text&type=phone_number&app_absent=0" className="text-blue-500">Conversar agora</a></List.Item>
              <List.Item>(86)3303-2623 |  (86)9 8182-2623</List.Item>
            </List>
          </Card>          
          
          <Card
            className="flex-1"
            imgAlt="Foto do Hotel"
            imgSrc="/hotels/metropolitan-hotel-2.jpg"
            horizontal
          >
            <span className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              METROPOLITAN 
            </span>
            <span className="text-sm">
              reservas@metropolitanhotel.com.br
            </span>
            <p className="font-normal text-sm text-gray-700 dark:text-gray-400 break-words">
              TARIFAS PROMOCIONAIS
            </p>
            <List className="text-sm">
              <List.Item>Av. Frei Serafim, 1696 - CentroTeresina - Piauí – Brasil</List.Item>
              <List.Item>Acessar: <a href="https://www.metropolitanhotel.com.br/" className="text-blue-500">metropolitanhotel.com.br</a></List.Item>
              <List.Item>Whats: (86)99566-1995</List.Item>
              <List.Item>(86)3216-8000</List.Item>
            </List>
          </Card>
        </div>
      </div>
    </main>
  );
}
