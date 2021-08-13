import React, { useEffect, useState } from "react";
import { BurgerIcon } from "../icons/burgerIcon.component";
import { CloseIcon } from "../icons/closeIcon.component";
import { IPageProps } from "../mainPage/mainPage.component";
import './header.css'

export const Header = ({ changeLanguage, language }: IPageProps): JSX.Element => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    useEffect(() => {
        if (isMenuOpen) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "visible";
    }, [isMenuOpen])

    return (
        <div className="header" id="Home">
            <div className='header-phone'>
                <div className='header-phone-button' onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <CloseIcon></CloseIcon> : <BurgerIcon></BurgerIcon>}
                </div>
                {isMenuOpen && (
                    <>
                    <div className="header-phone-links">
                        <a className="header-phone-links-link" href="#Home" onClick={() => setIsMenuOpen(!isMenuOpen)}>{language === 'ENG' ? "Home" : "Начало"}</a>
                        <a className="header-phone-links-link" href="#About" onClick={() => setIsMenuOpen(!isMenuOpen)}>{language === 'ENG' ? "About me" : "Обо мне"}</a>
                        <a className="header-phone-links-link" href="#Skills" onClick={() => setIsMenuOpen(!isMenuOpen)}>{language === 'ENG' ? "Skills" : "Навыки"}</a>
                        <a className="header-phone-links-link" href="#Portfolio" onClick={() => setIsMenuOpen(!isMenuOpen)}>{language === 'ENG' ? "Portfolio" : "Портфолио"}</a>
                        <a className="header-phone-links-link" href="#Contacts" onClick={() => setIsMenuOpen(!isMenuOpen)}>{language === 'ENG' ? "Contacts" : "Контакты"}</a>
                    </div>
                    <div className="hero-text-languages-header">
                        <p className={language === 'RU' ? 'hero-text-languages-ru active-language' : 'hero-text-languages-ru'} onClick={() => changeLanguage('RU')}>RU &nbsp;</p>
                        <p className="hero-text-languages-divider">| &nbsp;</p>
                        <p className={language === 'ENG' ? 'hero-text-languages-eng active-language' : 'hero-text-languages-eng'} onClick={() => changeLanguage('ENG')}>ENG &nbsp;</p>
                    </div>
                </>
                )}
            </div>
            <div className='header-desktop'>
                <div className="header-links">
                    <a className="header-links-link" href="#Home" onClick={() => setIsMenuOpen(!isMenuOpen)}>{language === 'ENG' ? "Home" : "Начало"}</a>
                    <a className="header-links-link" href="#About" onClick={() => setIsMenuOpen(!isMenuOpen)}>{language === 'ENG' ? "About me" : "Обо мне"}</a>
                    <a className="header-links-link" href="#Skills" onClick={() => setIsMenuOpen(!isMenuOpen)}>{language === 'ENG' ? "Skills" : "Навыки"}</a>
                    <a className="header-links-link" href="#Portfolio" onClick={() => setIsMenuOpen(!isMenuOpen)}>{language === 'ENG' ? "Portfolio" : "Портфолио"}</a>
                    <a className="header-links-link" href="#Contacts" onClick={() => setIsMenuOpen(!isMenuOpen)}>{language === 'ENG' ? "Contacts" : "Контакты"}</a>
                </div>
                <div className="header-divider"></div>
            </div>

        </div>
    )
}