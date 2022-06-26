import React, {useState} from 'react';
import styles from "./styles.module.scss"
import Card from "../../atoms/Card";
import nft from "../../../assets/images/nft1.png";
import nft2 from "../../../assets/images/nft2.png";

interface  CardProps{
    menuText:any;
    nfts:any;
    nfts2:any;
}

const CardSection:React.FC<CardProps>  = ({menuText,nfts,nfts2}) => {
    const [menuItem, setMenuItem] = useState(true);

    return (
        <div className={styles.wrapper}>
                <div className={styles.menu}>
                    <p onClick={() => setMenuItem(true)}
                       style={{borderBottom: `${menuItem ? '3px solid #000000' : '3px solid transparent'}`}}
                       className={styles.item}>{menuText.value1}</p>
                    <p onClick={() => setMenuItem(false)}
                       style={{borderBottom: `${!menuItem ? '3px solid #000000' : '3px solid transparent'}`}}
                       className={styles.item}>{menuText.value2}</p>
                </div>
                <div className={styles.list}>
                    {menuItem?nfts.map((item:any)=>{
                        return <div className={styles.cardBox}>
                            <Card  nft={item.image} link={item.link}/>
                        </div>
                    }):nfts2.map((item:any)=>{
                        return <div className={styles.cardBox}>
                            <Card nft={item.image} link={item.link}/>
                        </div>
                    })}

                </div>
         </div>
    );
};

export default CardSection;