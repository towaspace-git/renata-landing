import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./gallery.css";
import DSC_0214 from "../../assets/img/photos/DSC_0214.jpg";
import DSC_0226 from "../../assets/img/photos/DSC_0226.jpg";
import EmOB_tbMooM from "../../assets/img/photos/EmOB_tbMooM.jpg";
import W_JxodendBE from "../../assets/img/photos/W_JxodendBE.jpg";
import JgR_EgrLQOY from "../../assets/img/photos/JgR-EgrLQOY.jpg";
import tPNHFad2AH8 from "../../assets/img/photos/tPNHFad2AH8.jpg";
import Masonry from "react-masonry-css";
import { IBlockProps } from "../mainPage/mainPage.component";

export const Gallery = ({ language }: IBlockProps): JSX.Element => {
    const imageArray = [
        DSC_0214,
        EmOB_tbMooM,
        W_JxodendBE,
        DSC_0226,
        EmOB_tbMooM,
        W_JxodendBE,
        tPNHFad2AH8,
        JgR_EgrLQOY,
        W_JxodendBE,
        JgR_EgrLQOY,
        tPNHFad2AH8,
        DSC_0214,
        DSC_0226,
        DSC_0214,
        EmOB_tbMooM,
        W_JxodendBE,
        DSC_0226,
        EmOB_tbMooM,
        W_JxodendBE,
        tPNHFad2AH8,
        JgR_EgrLQOY,
        W_JxodendBE,
        JgR_EgrLQOY,
        tPNHFad2AH8,
        DSC_0214,
        DSC_0226,
    ];

    const breakpointColumnsObj = {
        default: 3,
        700: 2,
        500: 1
    };

    const [currentImage, setCurrentImage] = useState({
        show: false,
        image: DSC_0226,
    });

    const [imagesLeftToLoad, setImagesLeftToLoad] = useState(imageArray.length);


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        if (currentImage.show) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "visible";
        }
    }, [currentImage]);

    const imageHandler = (image: string): void => {
        setCurrentImage({ show: true, image: image });
    };

    const onCloseHandler = (): void => {
        setCurrentImage({ show: false, image: "image" });
    };

    const imageLoaded = (): void => {
        if (imagesLeftToLoad) {
            setImagesLeftToLoad(imagesLeftToLoad - 1);
        }
    }

    return (
        <>
            <header className="gallery-header">
                <div className="header-container">
                    <Link to="/renata-landing" className="gallery-back-link">
                        {language === "ENG" ? "Back" : "Назад"}
                    </Link>
                    <h1 className="gallery-title">{language === "ENG" ? "Gallery" : "Галерея"}</h1>
                </div>
            </header>
            {imagesLeftToLoad && (
                <div className="loader">
                    <div className="lds-roller">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            )}

            <div className="main" style={{ visibility: !imagesLeftToLoad ? "visible" : "hidden" }}>
                <div className="container">
                        <Masonry breakpointCols={breakpointColumnsObj} className='masonry-grid' columnClassName="masonry-grid_column" >
                            {imageArray.map((image) => {
                                return (
                                    <div className="grid-item" key={image + Math.random()}>
                                        <span
                                            className="grid-link"
                                            onClick={() => imageHandler(image)}
                                        >
                                            <img className="grid-img" src={image} alt="" onLoad={imageLoaded}/>
                                        </span>
                                    </div>
                                );
                            })}
                        </Masonry>
                </div>
            </div>
            {currentImage.show && (
                <>
                    <div id="myModal" className="modal">
                        <span className="close" onClick={onCloseHandler}>
                            &times;
                        </span>
                        <img
                            className="modal-content"
                            id="img01"
                            src={currentImage.image}
                            alt={currentImage.image}
                        />
                        <div className="myModalBackdrop" onClick={onCloseHandler}></div>
                    </div>
                </>
            )}
        </>
    );
};
