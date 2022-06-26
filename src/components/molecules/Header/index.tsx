import React from 'react';
import styles from './header.module.scss';
import { logo,user } from '../../../assets/images';
import {NavLink} from "react-router-dom";
import {useNavigate} from "react-router-dom";

const Header = () => {
    const navigate = useNavigate()
    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.row}>
                    <div onClick={()=>{
                        navigate("/")
                    }}  className={styles.logo}>
                        <img src={logo} alt="logo"/>
                    </div>
                    <div className={styles.tools}>
                        <ul className={styles.menu}>
                            <li className={styles.link}>
                                <NavLink to={"/personal"}>Appraise</NavLink>
                            </li>
                            <li className={styles.link}>
                                <NavLink to={"/"}>About</NavLink>
                            </li>
                        </ul>
                        <div className={styles.user}>
                            <img src={user} alt="user"/>
                            <ul className={styles.userMenu}>
                                <li>
                                    <NavLink to={"/"}>User profile</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/"}>Settings</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/"}>Sign out</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;