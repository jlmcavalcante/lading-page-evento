import React from "react";
import { Button } from "../About/AboutStyles";
import {
    MainContainer,
    Menu,
    Logo,
} from "./HeroStyles";

const Hero: React.FC = () => {
    return (
        <MainContainer>
            <div className="content-container">
                <Menu>
                    <Logo>
                        <img
                            src="/logo-sined-removebg-white.png"
                            alt="logo_sined"
                            width={120}
                        />
                    </Logo>
                </Menu>
            </div>

            <div className="uppercase mt-16 flex flex-col gap-4 text-center text-3xl font-black tracking-tight text-white-900 sm:text-5xl">
                <span>
                    <span className="text-[#fbc404] drop-shadow-lg">VI </span>
                    <span className="drop-shadow-lg">Simpósio Nacional</span>
                </span>
                <span className="drop-shadow-lg">de Educação</span>
            </div>
            <div className="w-full my-8 flex flex-row items-center justify-center">
                <Button to="formulario" smooth={true} duration={500} spy={true} className="border drop-shadow-md">
                    <span className="text-1xl font-bold">Realizar Inscrição</span>
                </Button>
            </div>
        </MainContainer>
    );
}

export default Hero;