import React from 'react';
import bg from '../../assets/images/pesonalbg.png';
import tassel from '../../assets/images/tassel.png';
import eye from '../../assets/images/eye.png';
import user from '../../assets/images/userBlackBig.png';
import styles from './personal.module.scss';
import {Button} from "@mui/material";
import nft from "../../assets/images/nft1.png";
import CardSection from "../../components/organism/CardsSection";
import nft2 from "../../assets/images/nft2.png";

const Personal = () => {
    const nfts = [{
        image:nft,
        link:1
    },{
        image:nft,
        link:2
    },{
        image:nft,
        link:2
    },{
        image:nft,
        link:2
    }]
    const nfts2 = [{
        image:nft2,
        link:1
    },{
        image:nft2,
        link:2
    },{
        image:nft2,
        link:2
    },{
        image:nft2,
        link:2
    }]
    const menuText = {
        value1:"Created",
        value2: "Collected"
    }
    return (
        <>
            <section>
                <img className={styles.bg} src={bg} alt=""/>
                <div className={styles.contentPart}>
                    <div className="container">
                        <div className={styles.info}>
                            <div className={styles.left}>
                                <div className={styles.personCard}>
                                    <img src={user} alt=""/>
                                </div>
                                <div className={styles.socialBox}>
                                    <div className={styles.social}>
                                        <div className={styles.iconBox}>
                                            <i className="ri-instagram-line"/>
                                        </div>
                                        <p>@mandalorian</p>
                                    </div>
                                    <div className={styles.social}>
                                        <div className={styles.iconBox}>
                                            <i className="ri-facebook-fill"/>
                                        </div>
                                        <p>@mandalorian</p>
                                    </div>
                                    <div className={styles.social}>
                                        <div className={styles.iconBox}>
                                            <i className="ri-twitter-fill"/>
                                        </div>
                                        <p>@mandalorian</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.right}>
                                <div className={styles.rightRow}>
                                    <h2 className={styles.title}>Mandalorian</h2>
                                    <div className={styles.tools}>
                                        <img src={tassel} alt=""/>
                                        <p>153</p>
                                    </div>
                                    <div className={styles.tools}>
                                        <img src={eye} alt=""/>
                                        <p>153</p>
                                    </div>
                                </div>
                                <div className={styles.address}>
                                    <p>0xfed5...5efgfd</p>
                                    <i className="ri-file-copy-line"/>
                                </div>
                                <Button className={styles.followBtn}>Follow 15.3 k</Button>
                                <p className={styles.text}>Elementum pulvinar etiam non quam lacus. Cras sed felis eget velit aliquet. Quis eleifend
                                    quam adipiscing vitae proin sagittis nisl rhoncus. </p>
                            </div>
                        </div>
                        <div className={styles.createBtn}>
                            <Button>Create</Button>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.cards}>
                <CardSection nfts={nfts2} nfts2={nfts} menuText={menuText}/>
            </section>
        </>

    );
};

export default Personal;