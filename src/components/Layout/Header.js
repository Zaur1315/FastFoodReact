import styles from './Header.module.css';
import React from "react";
import sushiImage from '../../assets/glavnaya-3.jpg'
import HeaderCardButton from './HeaderCardButton';

const Header = (props)=>{
    return (
        <React.Fragment>
            <header className={styles.header}>
                <h1>у Дяди Вади</h1>
                <HeaderCardButton onClick = {props.onShowCart}/>
            </header>
            <div className={styles['main-image']}>
                <img src={sushiImage} alt='шаурма'/>
            </div>
        </React.Fragment>
    )
}


export default Header;