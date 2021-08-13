import React from "react";
import './skills.css'
import AE from '../../assets/img/AE.png'
import AI from '../../assets/img/AI.png'
import Figma from '../../assets/img/Figma.png'
import PS from '../../assets/img/ps.png'
import Star from '../../assets/img/Star.png'
import Star0 from '../../assets/img/Star0.png'
import { IBlockProps } from "../mainPage/mainPage.component";

export const Skills = ({ language }: IBlockProps): JSX.Element => {
    return (
        <div className="skills" id="Skills">
            <div className="skills-text">
                <h2 className="skills-text-title">
                    {language === 'ENG' ? "Skills" : "Навыки"}
                </h2>
                <p className="skills-text-subtitle">
                    {language === 'ENG' ? "I'm working in such programs as" : "Я работаю в следующих программах"}
                </p>
            </div>
            <div className="skills-cards">
                <div className="skills-cards-card">
                    <div className="skills-cards-card-image">
                        <img className="skills-cards-card-image-img" alt="PS" src={PS} draggable="false"/>
                    </div>
                    <p className="skills-cards-card-text">
                        Adobe Photoshop
                    </p>
                    <div className="skills-cards-card-stars">
                        <img className="skills-cards-card-stars-star" alt="star" src={Star} draggable="false"/>
                        <img className="skills-cards-card-stars-star" alt="star" src={Star} draggable="false"/>
                        <img className="skills-cards-card-stars-star" alt="star" src={Star} draggable="false"/>
                        <img className="skills-cards-card-stars-star" alt="star" src={Star} draggable="false"/>
                        <img className="skills-cards-card-stars-star" alt="star" src={Star0} draggable="false"/>
                    </div>
                </div>
                <div className="skills-cards-card">
                    <div className="skills-cards-card-image">
                        <img className="skills-cards-card-image-img" alt="AI" src={AI} draggable="false"/>
                    </div>
                    <p className="skills-cards-card-text">
                        Adobe Illustrator
                    </p>
                    <div className="skills-cards-card-stars">
                        <img className="skills-cards-card-stars-star" alt="star" src={Star} draggable="false"/>
                        <img className="skills-cards-card-stars-star" alt="star" src={Star} draggable="false"/>
                        <img className="skills-cards-card-stars-star" alt="star" src={Star} draggable="false"/>
                        <img className="skills-cards-card-stars-star" alt="star" src={Star0} draggable="false"/>
                        <img className="skills-cards-card-stars-star" alt="star" src={Star0} draggable="false"/>
                    </div>
                </div>
                <div className="skills-cards-card">
                    <div className="skills-cards-card-image">
                        <img className="skills-cards-card-image-img" alt="AE" src={AE} draggable="false"/>
                    </div>
                    <p className="skills-cards-card-text">
                        Adobe After Effects
                    </p>
                    <div className="skills-cards-card-stars">
                        <img className="skills-cards-card-stars-star" alt="star" src={Star} draggable="false"/>
                        <img className="skills-cards-card-stars-star" alt="star" src={Star} draggable="false"/>
                        <img className="skills-cards-card-stars-star" alt="star" src={Star} draggable="false"/>
                        <img className="skills-cards-card-stars-star" alt="star" src={Star} draggable="false"/>
                        <img className="skills-cards-card-stars-star" alt="star" src={Star0} draggable="false"/>
                    </div>
                </div>
                <div className="skills-cards-card">
                    <div className="skills-cards-card-image">
                        <img className="skills-cards-card-image-img" alt="Figma" src={Figma} draggable="false"/>
                    </div>
                    <p className="skills-cards-card-text">
                        Figma
                    </p>
                    <div className="skills-cards-card-stars">
                        <img className="skills-cards-card-stars-star" alt="star" src={Star} draggable="false"/>
                        <img className="skills-cards-card-stars-star" alt="star" src={Star} draggable="false"/>
                        <img className="skills-cards-card-stars-star" alt="star" src={Star} draggable="false"/>
                        <img className="skills-cards-card-stars-star" alt="star" src={Star} draggable="false"/>
                        <img className="skills-cards-card-stars-star" alt="star" src={Star0} draggable="false"/>
                    </div>
                </div>
            </div>
        </div>
    )
}