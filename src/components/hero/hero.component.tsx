import React from "react";
import "./hero.css";
import photo from "../../assets/img/men.jpg";
import { IPageProps } from "../mainPage/mainPage.component";

export const Hero = ({ changeLanguage, language }: IPageProps): JSX.Element => {
    return (
        <div className="hero">
            <div className="hero-text">
                <h1 className="hero-text-title">{language === 'ENG' ? "Renata Hamidullina" : "Рената Хамидуллина"}</h1>
                <p className="hero-text-subtitle">{language === 'ENG' ? "Photographer in Moscow" : "Фотограф в Москве"}</p>
                <div className="hero-text-languages">
                    <p className={language === 'RU' ? 'hero-text-languages-ru active-language' : 'hero-text-languages-ru'} onClick={() => changeLanguage('RU')}>RU</p>
                    <p className="hero-text-languages-divider">|</p>
                    <p className={language === 'ENG' ? 'hero-text-languages-eng active-language' : 'hero-text-languages-eng'} onClick={() => changeLanguage('ENG')}>ENG</p>
                </div>
            </div>
            <div className="hero-image">
                <img className="hero-image-img" alt="Renata" src={photo} draggable="false" />
            </div>
        </div>
    );
};
