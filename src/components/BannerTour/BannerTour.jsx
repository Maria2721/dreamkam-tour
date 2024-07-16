import styles from './BannerTour.module.scss'
import ArrowDiagIcon from '../../assets/imgs/icons/arrow_diagonal.svg?react'
import FacebookIcon from '../../assets/imgs/icons/facebook.svg?react'
import InstagramIcon from '../../assets/imgs/icons/instagram.svg?react'
import {HashLink} from "react-router-hash-link";
import Slider from "../Slider/Slider.jsx";

const BannerTour = () => {
    return (
        <section className={[styles.banner, 'container'].join(' ')}>
            <div className={[styles.inner, 'container__row'].join(' ')}>
                <h1 className={styles.title}>
                    Мечты о далекой <br/>Камчатке - близко
                </h1>
                <div className={styles.info}>
                    <div className={styles.accentBox}>23.06 - 04.07 DREAM TOUR</div>
                    <p className={styles.text}>Тур перевернет ваш мир с ног на голову
                        <br/>и оставит впечатления на всю жизнь.</p>
                    <HashLink smooth to="/#schedule" className={styles.link}>
                        Расписание тура
                        <ArrowDiagIcon className={styles.icon}/>
                    </HashLink>
                    <div className={styles.social}>
                        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                            <FacebookIcon className={styles.icon}/>
                        </a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                            <InstagramIcon className={styles.icon}/>
                        </a>
                    </div>
                </div>
                <Slider/>
            </div>
        </section>
    )
}

export default BannerTour
