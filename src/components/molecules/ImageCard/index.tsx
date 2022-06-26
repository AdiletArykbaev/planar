import React from 'react';
import styles from  "./styles.module.css"
interface ImageCardProps{
    image: string
}


const ImageCard:React.FC <ImageCardProps> = ({image}) => {
    return (
        <div className={styles.wrapper}>
            <img src={image} alt="nft "/>
        </div>
    );
};

export default ImageCard;