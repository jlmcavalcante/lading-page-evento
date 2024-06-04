import { Card, List, Badge } from "flowbite-react";
import React from "react";
import { FaComputer } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaPhoneVolume } from "react-icons/fa";
import { HotelTitle } from "./HotelStyles";
import { Simulate } from "react-dom/test-utils";

type Props = {};

export default function Hotels({}: Props) {
  const hotels = [
    {
      imagePath: "/hotels/blue-tree-hotel.jpeg",
      name: "Blue Tree Hotels",
      promotionalText: "Código Promocional: SINED10",
      gmaps: "https://maps.app.goo.gl/1cH6LQDFbiek57677",
      email: {
        label: "Email",
        url: "grupos.riopoty@bluetree.com.br",
      },
      site: {
        label: "Site",
        url: "https://www.bluetree.com.br/",
        text: "bluetree.com.br",
      },
      whatapp: {
        label: "",
        url: "",
        text: "",
      },
      description: [
        "Clicar em reservar",
        "Selecionar o Hotel Blue Tree Teresina",
        "Selecionar o período de 04 a 06/06 e preencher o campo “tenho um código” e inserir SINED10",
      ],
    },
    {
      imagePath: "/hotels/uchoa-hotel.jpeg",
      name: "Uchoa Hotel",
      promotionalText: "Código Promocional: SINED",
      gmaps: "https://maps.app.goo.gl/Y61j6QV62zvNsLgi8",
      email: {
        label: "Email",
        url: "reservas@uchoatereinahotel.com",
      },
      site: {
        label: "Site",
        url: "https://www.uchoateresinahotel.com",
        text: "uchoateresinahotel.com",
      },
      whatapp: {
        label: "",
        url: "",
        text: "",
      },
      description: [
        "Código válido de 03/06/2024 a 07/06/2024",
        "(86) 3142-2901",
        "(86) 3142-2902",
      ],
    },
    {
      imagePath: "/hotels/alfa-hotel.jpg",
      name: "Alfa Hotel",
      promotionalText: "Tarifas Promocionais",
      gmaps: "https://maps.app.goo.gl/oZ37My6VC6RLMPxt8",
      email: {
        label: "Email",
        url: "reservas@alfahotelteresina.com.br",
      },
      site : {
        label: "Site",
        url: "https://www.alfahotelteresina.com.br/",
        text: "alfahotelteresina.com.br",
      },
      whatapp: {
        label: "Whatsapp",
        url: "https://api.whatsapp.com/send/?phone=5586981822623&text&type=phone_number&app_absent=0",
        text: "whatsapp",
      },
      description: [
        "(86) 3303-2623",
        "(86) 9 8182-2623"
      ],
    },
    {
      imagePath: "/hotels/metropolitan-hotel-2.jpg",
      name: "Metropolitan Hotel",
      promotionalText: "Tarifas Promocionais",
      gmaps: "https://maps.app.goo.gl/oQGCvCvqeQ9jDMKX7",
      email: {
        label: "Email",
        url: "reservas@metropolitanhotel.com.br",
      },
      site: {
        label: "Site",
        url: "https://www.metropolitanhotel.com.br/",
        text: "metropolitanhotel.com.br",
      },
      whatapp: {
        label: "",
        url: "",
        text: "",
      },
      description: [
        "(86) 3216-8000",
      ],
    }
  ]
  return (
    <div className="content-container flex-col px-8 max-lg:justify-center max-lg:items-center">
      <h1 className="text-[3rem] px-4 text-[#fff] text-center lg:text-center mt-8 mb-8 lg:px-8">
        Hotéis Parceiros
      </h1>
      <div className="grid grid-cols-4 gap-8 lg:gap-8 mb-12 max-lg:grid-cols-1 px-8 lg:px-8">
        {hotels.map((hotel, index) => (
          <div key={index} className="shadow-lg rounded-md flex flex-col">
            <div className="w-full h-36 radius-sm rounded-t-md">
              <a href={hotel.gmaps} className="radius-sm rounded-t-md">
                <img src={hotel.imagePath} alt={hotel.name} className="w-full h-36 ml-[-0.1px] object-cover radius-sm rounded-t-md" />
              </a>
            </div>
            <div className="flex flex-col gap-4 p-6 bg-white dark:bg-gray-800 rounded-b-md flex-1 w-full">
              <a href={hotel.gmaps} className="text-xl font-medium text-gray-900 dark:text-white">
                {hotel.name}
              </a>
              <Badge className="bg-[#04846c] w-fit text-white px-2">{hotel.promotionalText}</Badge>
              <div className="flex flex-row gap-4">
                <a href={`mailto ${hotel.email.url}`} className="flex flex-col items-center gap-2">
                  <MdEmail className="text-[#04846c]" />
                  <span className="text-[#04846c]">{hotel.email.label}</span>
                </a>
                <a href={hotel.site.url} className="flex flex-col items-center gap-2">
                  <FaComputer className="text-[#04846c]" />
                  <span className="text-[#04846c]">{hotel.site.label}</span>
                </a>
                {
                  hotel.whatapp.url && (
                    <a href={hotel.whatapp.url} className="flex flex-col items-center gap-2">
                      <IoLogoWhatsapp className="text-[#04846c]" />
                      <span className="text-[#04846c]">{hotel.whatapp.text}</span>
                    </a>
                  )
                }
              </div>
              <List className="text-sm">
                {hotel.description.map((item, index) => (
                  <List.Item key={index}>{item}</List.Item>
                ))}
              </List>
            </div>
            </div>
          ))}
        </div>
    </div>
  );
}