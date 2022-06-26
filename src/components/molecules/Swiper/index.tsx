import React from 'react'
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import styles from "./styles.module.scss"
import {userBlack,eth, cardsIcon} from '../../../assets/images';
import {Button} from "@mui/material";
import {EffectCoverflow} from "swiper";
import {Likes,Cristal,Zoom,Card} from "../../atoms";

interface SliderItem{
    creator:string;
    owner:string;
    price:number;
    amount:number
}

const Slider = ({arr}:any) => {
  return (
    <section className={styles.home}>
    <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
        }}
        modules={[EffectCoverflow]}
        className="mySwiper"
    >
        {
            arr.map((item:any) => (
                <SwiperSlide>
                    <div className={styles.box}>
                        <div className={styles.img}>
                            <div className={styles.imgBox}>
                                <img src={item.img} alt=""/>
                                <div className={styles.likes}>
                                    <Likes/>
                                </div>
                                <div className={styles.zoom}>
                                    <Zoom/>
                                </div>
                            </div>
                        </div>
                        <div className={styles.content}>
                            <h2 className={styles.title}>Digitalization</h2>
                            <div className={styles.row}>
                                <div className={styles.card}>
                                    <p className={styles.cardsTitle}>Creator</p>
                                    <div className={styles.cardsRow}>
                                        <img src={userBlack} alt=""/>
                                        <p style={{fontSize:"20px"}}>{item.creator}</p>
                                    </div>
                                </div>
                                <div className={styles.card}>
                                    <p className={styles.cardsTitle}>Owner</p>
                                    <div className={styles.cardsRow}>
                                        <img src={userBlack} alt=""/>
                                        <p style={{fontSize:"20px"}}>{item.owner}</p>
                                    </div>
                                </div>
                                <div className={styles.card}>
                                    <p className={styles.cardsTitle}>Price</p>
                                    <div className={styles.cardsRow}>
                                        <p style={{fontSize:"41px"}} className={styles.number}>{item.price}</p>
                                        <img src={eth} alt=""/>
                                    </div>
                                </div>
                                <div className={styles.card}>
                                    <p className={styles.cardsTitle}>Amount</p>
                                    <div className={styles.cardsRow}>
                                        <p style={{fontSize:"41px"}} className={styles.number}>{item.amount}</p>
                                        <img src={cardsIcon} alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.btnBox}>
                                <Button variant={"contained"}>Buy Artwork</Button>
                            </div>
                        </div>
                        <Cristal/>
                    </div>
                </SwiperSlide>
            ))
        }
    </Swiper>
</section>
  )
}

export default Slider
