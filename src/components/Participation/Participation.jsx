import styles from "./Participation.module.scss";
import {HashLink} from "react-router-hash-link";
import Request from "../Request/Request.jsx";
import ArrowDiagIcon from '../../assets/imgs/icons/arrow_diagonal.svg?react';
import FacebookIcon from "../../assets/imgs/icons/facebook_2.svg?react";
import InstagramIcon from "../../assets/imgs/icons/instagram_2.svg?react";
import VkIcon from "../../assets/imgs/icons/vk.svg?react";
import IncludedIcon from "../../assets/imgs/icons/included.svg?react";
import ExtraIcon from "../../assets/imgs/icons/extra.svg?react";

const Participation = () => {
    return (
        <section className={[styles.participation, 'container'].join(' ')}>
            <div className={[styles.inner, 'container__row'].join(' ')}>
                <div className={styles.price}>
                    <h2 className={styles.title}>Стоимость участия</h2>
                    <div className={styles.table}>
                        <div className={styles.block}>
                            <p className={styles.block_title}>Базовый (для камчадал)</p>
                            <p className={styles.block_price}>79 000 руб</p>
                        </div>
                        <div className={styles.block}>
                            <p className={styles.block_title}>Базовый + проживание</p>
                            <p className={styles.block_price}>99 000 руб</p>
                        </div>
                        <div className={styles.block}>
                            <p className={styles.block_title}>Базовый + проживание + долина гейзеров</p>
                            <p className={styles.block_price}>179 000 руб</p>
                        </div>
                    </div>
                    <div className={styles.info}>
                        <a href="" target="_blank" rel="noreferrer" className={styles.link}>Информация о бронях</a>
                        <a href="" target="_blank" rel="noreferrer" className={styles.link}>Важная информация</a>
                        <a href="" target="_blank" rel="noreferrer" className={styles.link}>Условия договора и
                            возврата</a>
                        <HashLink smooth to="/#schedule" className={styles.link_request}>
                            Отправить заявку
                            <ArrowDiagIcon className={styles.icon}/>
                        </HashLink>
                    </div>
                    <div className={styles.included}>
                        <div className={styles.subtitle}>
                            <IncludedIcon className={styles.icon}/>
                            <h3>В стоимость входит</h3>
                        </div>
                        <ul>
                            <li><span>встреча и проводы в аэропорту</span></li>
                            <li><span>питание: обеды во время экскурсий</span></li>
                            <li><span>услуги гида</span></li>
                            <li><span>все транспортные услуги (автобусы, <br/>джипы-вездеходы 4WD)</span></li>
                            <li><span>все указанные в программе экскурсии</span></li>
                        </ul>
                    </div>
                    <div className={styles.extra}>
                        <div className={styles.subtitle}>
                            <ExtraIcon className={styles.icon}/>
                            <h3>За дополнительную плату</h3>
                        </div>
                        <ul>
                            <li><span>вертолётная экскурсия в Долину Гейзеров и кальдеру Узона, оплачивается в день вылета
                            </span></li>
                            <li><span>дополнительные экскурсии и опции</span></li>
                            <li><span>размещение в гостинице</span></li>
                            <li><span>питание (кроме обедов во время экскурсий)</span></li>
                            <li><span>личные расходы</span></li>
                        </ul>
                    </div>
                </div>
                <hr/>
                <div className={styles.request}>
                    <h2 className={styles.title}>Онлайн-заявка</h2>
                    <div className={styles.social}>
                        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                            <InstagramIcon className={styles.icon}/>
                        </a>
                        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                            <FacebookIcon className={styles.icon}/>
                        </a>
                        <a href="https://vk.com/" target="_blank" rel="noreferrer">
                            <VkIcon className={styles.icon}/>
                        </a>
                    </div>
                    <Request/>
                </div>
                <div className={styles.booklet}>
                    <img src="" alt="booklet"/>
                    <h2 className={styles.title}>Что нужно знать отправляясь на Камчатку?</h2>
                    <p className={styles.text}>Получите памятку туриста просто оставив свой e-mail.</p>
                    <div className={styles.email}>
                        <input type="text" placeholder="Ваш e-mail"/>
                        <button type="button" className={styles.bookBtn}>Получить</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Participation
