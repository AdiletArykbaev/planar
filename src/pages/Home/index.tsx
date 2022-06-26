import React, {useState} from 'react';
import styles from './home.module.scss';
import './home.css';
import { nft,nft2,nft3,nft4,nft5,nft6} from '../../assets/images';
import "@fancyapps/ui/dist/fancybox.css";
import { CardSection } from '../../components/organism';
import {Slider,Footer} from "../../components/molecules";
import { cardImg } from '../../assets/images';

const Home = () => {
    const slides = [{
        creator:"nocellcoverage",
        owner:"nocellcoverage",
        price:1.5,
        amount:758,
        img:cardImg
    },
    {
        creator:"nocellcoverage",
        owner:"nocellcoverage",
        price:1.5,
        amount:758,
        img:cardImg
    },
    {
        creator:"nocellcoverage",
        owner:"nocellcoverage",
        price:1.5,
        amount:758,
        img:cardImg
    },
    {
        creator:"nocellcoverage",
        owner:"nocellcoverage",
        price:1.5,
        amount:758,
        img:cardImg
    },
    {
        creator:"nocellcoverage",
        owner:"nocellcoverage",
        price:1.5,
        amount:758,
        img:cardImg
    },]
    const nfts = [{
        image:nft,
        link:1
    },{
        image:nft3,
        link:2
    },{
        image:nft2,
        link:2
    },{
        image:nft4,
        link:2
    }]
    const nfts2 = [{
        image:nft,
        link:1
    },{
        image:nft5,
        link:2
    },{
        image:nft2,
        link:2
    },{
        image:nft6,
        link:2
    }]

    const menuText = {
        value1:"Trending",
        value2: "New"
    }
    return (
        <div className={styles.wrapper}>
            <Slider arr={slides}/>
            <section className={styles.cards}>
                <CardSection   nfts2={nfts2} nfts={nfts} menuText={menuText}/>
               
            </section>
            
        </div>
    );
};

export default Home;