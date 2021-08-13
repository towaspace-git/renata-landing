import React from 'react';
import { Language } from '../../App';
import { About } from '../about/about.component';
import { Footer } from '../footer/footer.component';
import { Header } from '../header/header.component';
import { Hero } from '../hero/hero.component';
import { Portfolio } from '../portfolio/portfolio.component';
import { Skills } from '../skills/skills.component';

export interface IPageProps {
    changeLanguage: (language: Language) => void;
    language: Language
}

export interface IBlockProps {
    language: Language
}

export const MainPage = ({changeLanguage, language}: IPageProps): JSX.Element => {
    return (
        <div>
            <Header changeLanguage={(language) => changeLanguage(language)} language={language}/>
            <Hero changeLanguage={(language) => changeLanguage(language)} language={language}/>
            <About language={language}/>
            <Skills language={language}/>
            <Portfolio language={language}/>
            <Footer language={language}/>
        </div>
    );
};
