import React from 'react';
import styles from "./styles.module.scss"
import cristals from "../../../assets/images/cristal.png"
import userBlack from "../../../assets/images/userBlack.png";
import like from "../../../assets/images/like.svg"
import { padding } from '@mui/system';
const AboutUser = () => {
    return (
        <div className={styles.wrapper}>
                <div className={styles.info_block}>
                    <div className={styles.first_layer}>
                        <h1 >Leleka</h1>
                        <div style={{width:"100%",padding:"0 10%",display:"flex"}} >
                            <img src={like} alt=""/>
                            <h5 style={{fontSize:"33px",width:"100%",marginLeft:"5px"}}>1.5k</h5>
                        </div>

                    </div>
                    <p  className={styles.subtitle} style={{marginBottom:"44px"}}>May 15, 2022</p>

                    <div className={styles.test_div}>
                        <img src={userBlack} alt=""/>

                        <h3 >nocellcoverage</h3>
                    </div>
                    <p  className={styles.subtitle} style={{marginTop:"44px",marginBottom:"15px"}}>Owner</p>

                    <div className={styles.test_div}>
                        <img  src={userBlack} alt=""/>
                        <h3 style={{fontWeight: "normal"}}>marcus <span style={{fontWeight: "bold"}}>+4 more</span></h3>

                    </div>
                    <button style={{marginTop: "81px", marginBottom: "77px"}}>
                        Sell artwork
                    </button>
                </div>
            <div className={styles.bioBlock} >
                    <div className={styles.bigtext}>
                        <h5 style={{marginBottom: "16px"}}>Bio</h5>
                        <p style={{fontSize: "24px"}}>Elementum pulvinar etiam non quam lacus. Cras sed felis eget velit aliquet. Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. </p>
                    </div>
                    <div>
                        <h5 style={{marginBottom: "16px"}}>Scarity </h5>
                        <h2 className={styles.numbers} style={ {fontSize:"40px", fontWeight: "normal"}}>758</h2>
                    </div>
                    <div>
                        <div className={styles.block}>
                            <h5 style={{marginBottom: "16px"}}>ArtworkId</h5>
                            <h4 className={styles.title_top} style={{fontWeight:'normal',fontSize:"33px"}}>54465...46325</h4>
                        </div>
                        <div className={styles.block}>
                            <h5 style={{fontSize:"25px",lineHeight: "100%",marginTop:"24px", marginBottom:"16px"}}>Metadata URL</h5>
                            <h4 className={styles.title_bottom} style={{fontWeight:'normal' ,fontSize:"33px"}}>http//:kjlllled</h4>
                        </div>
                   </div>
                <div >
                    <div className={styles.block}>
                        <h5 style={{marginBottom: "16px"}}>
                            Contract
                        </h5>
                        <h4 className={styles.title_top} style={{fontWeight:'normal',fontSize:"33px", marginBottom: "29px",}}>0x29Ef...bedr1d</h4>
                    </div>
                    <div className={styles.block}>
                        <h5 style={ {fontSize:"20px", marginBottom: "16px"}}>Artwork URL</h5>
                        <h4 className={styles.title_bottom} style={ {fontWeight:'normal' ,fontSize:"33px"}}>http//:kjlllled</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUser;
