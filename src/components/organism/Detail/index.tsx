import React from 'react';
import ImageCard from "../../molecules/ImageCard";
import styles from "./styles.module.scss"
import MainNft from "../../../assets/images/mainNft.png"
import AboutUser from "../AboutUser";

const DetailNft = () => {
    return (
        <div className={styles.wrapper}>
                <ImageCard image={MainNft}/>

                <AboutUser/>

        </div>
    );
};

export default DetailNft;