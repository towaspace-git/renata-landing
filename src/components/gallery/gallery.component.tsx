import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import men from "../../assets/img/men.png";
import "./gallery.css";
import jQuery from "jquery";
import imagesLoaded from "imagesloaded";
import Masonry from "masonry-layout";
import DSC_0214 from "../../assets/img/photos/DSC_0214.jpg";
import DSC_0226 from "../../assets/img/photos/DSC_0226.jpg";
import EmOB_tbMooM from "../../assets/img/photos/EmOB_tbMooM.jpg";
import W_JxodendBE from "../../assets/img/photos/W_JxodendBE.jpg";
import JgR_EgrLQOY from "../../assets/img/photos/JgR-EgrLQOY.jpg";
import tPNHFad2AH8 from "../../assets/img/photos/tPNHFad2AH8.jpg";

export const Gallery = (): JSX.Element => {
    const [currentImage, setCurrentImage] = useState({
        show: false,
        image: DSC_0226,
    });

    useEffect(() => {
        window.scrollTo(0, 0);
        var elem = document.querySelector(".grid");
        if (elem) {
            imagesLoaded(elem, { background: "black" }, () => {
                if (elem) {
                    new Masonry(elem, {
                        itemSelector: ".grid-item",
                        percentPosition: true,
                    });
                }
            });
        }
    }, []);

    const imageHandler = (image: string) => {
        setCurrentImage({show: true, image: image});
    }

    const onCloseHandler = () => {
        setCurrentImage({show: false, image: 'image'});
    }

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

    return (
        <>
            <header className="gallery-header">
                <div className="header-container">
                    <Link to="/" className="gallery-back-link">
                        Back
                    </Link>
                    <h1 className="gallery-title">Gallery</h1>
                </div>
            </header>
            <div className="main">
                <div className="container">
                    <div className="row">
                        <div className="grid">
                            {imageArray.map((image) => {
                                return (
                                    <div className="grid-item" key={image}>
                                        <span className="grid-link" onClick={() => imageHandler(image)}>
                                            <img className="grid-img" src={image} alt="" />
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
            {currentImage.show && (
                <div id="myModal" className="modal">
                    <span className="close" onClick={onCloseHandler}>&times;</span>
                    <img className="modal-content" id="img01" src={currentImage.image}/>
                </div>
            )}
        </>
    );
};
