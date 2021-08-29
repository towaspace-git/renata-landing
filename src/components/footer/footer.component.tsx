import React from "react";
import { SocialIcon } from "../icons/socialIcon.component";
import { IBlockProps } from "../mainPage/mainPage.component";
import './footer.css'

export const Footer = ({ language }: IBlockProps): JSX.Element => {
    return (
        <div className="footer" id="Contacts">
            <div className="footer-content">
                <p className="footer-content-title">{language === 'ENG' ? "Contacts" : "Контакты"}</p>
                <p className="footer-content-subtitle">
                    {language === 'ENG' ? "Want to know more or just chat?" : "Хотите узнать больше или просто пообщаться?"}
                    <br />
                    {language === 'ENG' ? "You are welcome!" : "Милости прошу!"}
                </p>
            </div>
            <div className="footer-button">
                <a target="_blank" rel="noreferrer" href="https://vk.com/hamidullina2000" ><button className="footer-button-button">{language === 'ENG' ? "Send message" : "Сообщение"}</button></a>
            </div>
            <div className="footer-links">
                
                <a className="footer-links-link" href="https://linkedin.com" target="_blank" rel="noreferrer">
                    {SocialIcon('instagram')}
                </a>
                <a className="footer-links-link" href="https://linkedin.com" target="_blank" rel="noreferrer">
                    {SocialIcon('instagram')}
                </a>
                <a className="footer-links-link" href="https://linkedin.com" target="_blank" rel="noreferrer">
                    {SocialIcon('behance')}
                </a>
                <a className="footer-links-link" href="https://linkedin.com" target="_blank" rel="noreferrer">
                    {SocialIcon('dribbble')}
                </a>
            </div>
            <p className="footer-text">
                {language === 'ENG' ? "Like me on" : "Ищите в соцсетях"}
                <br />
                LinkedIn, Instagram, Behance, Dribble
            </p>
        </div>
    );
};
