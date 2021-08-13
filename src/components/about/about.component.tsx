import React from "react";
import { IBlockProps } from "../mainPage/mainPage.component";
import "./about.css";

export const About = ({ language }: IBlockProps): JSX.Element => {
    return (
        <div className="about" id="About">
            <div className="about-text">
                <h2 className="about-text-title">{language === "ENG" ? "About me" : "Обо мне"}</h2>
                <p className="about-text-subtitle">
                    {language === "ENG" ? "Hi, im Renata, photographer" : "Привет! Я Рената, фотограф"}
                    <br />
                    {language === "ENG" ? "I really love to make photos" : "Мне очень нравится делать фотографии"}
                    <br />
                    <br />
                    <br />
                    {language === "ENG" ? "I am doing photos ad least since 2014" : "Я занимаюсь фотографией как минимум с 2014"}
                    <br />
                    <br />
                    <br />
                    {language === "ENG" ? "I'm ready to shoot beautiful people on beatufil photos" : "Готова запечатлеть прекрасных людей на прекрасных фотографиях"}
                </p>
            </div>
        </div>
    );
};
