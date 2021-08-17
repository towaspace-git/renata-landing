import React from "react";
import { Link } from "react-router-dom";
import './portfolio.css'
import renata from '../../assets/img/renata2.jpg'
import { IBlockProps } from "../mainPage/mainPage.component";

export const Portfolio = ({ language }: IBlockProps): JSX.Element => {
    return (
        <div className="portfolio" id="Portfolio">
            <p className="portfolio-title">{language === 'ENG' ? "Portfolio" : "Портфолио"}</p>
            <div className="portfolio-image">
                <img className="portfolio-image-img" src={renata} alt="men"/>
            </div>
            <div className="portfolio-links">
                <Link to="/renata-landing/gallery" className="portfolio-links-link">{language === 'ENG' ? "To my gallery" : "В галерею"}</Link>
            </div>
        </div>
    );
};
