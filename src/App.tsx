import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { MainPage } from "./components/mainPage/mainPage.component";
import { Gallery } from "./components/gallery/gallery.component";

export type Language = 'RU' | 'ENG';

function App() {

    const [language, setLanguage] = useState<Language>('RU');


    const changeLanguage = (language: Language) => {
        setLanguage(language);
    }

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/renata-landing/">
                    <MainPage changeLanguage= {(language) => changeLanguage(language)} language={language}/>
                </Route>
                <Route exact path="/renata-landing/gallery">
                  <Gallery language = {language}/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
