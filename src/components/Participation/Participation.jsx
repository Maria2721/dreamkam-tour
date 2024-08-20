import styles from "./Participation.module.scss";
import {useState} from "react";
import {HashLink} from "react-router-hash-link";
import RequestForm from "../RequestForm/RequestForm.jsx";
import ArrowDiagIcon from '../../assets/imgs/icons/arrow_diagonal.svg?react';
import FacebookIcon from "../../assets/imgs/icons/facebook_2.svg?react";
import InstagramIcon from "../../assets/imgs/icons/instagram_2.svg?react";
import VkIcon from "../../assets/imgs/icons/vk.svg?react";
import IncludedIcon from "../../assets/imgs/icons/included.svg?react";
import ExtraIcon from "../../assets/imgs/icons/extra.svg?react";
import Magazine from "../../assets/imgs/internal/magazine.png";

const Participation = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setEmail(e.target.value)
    }

    const blurHandler = () => {
        setError('');
        const error = validate();
        setError(error);
    }

    const handleSubmit = () => {
        const error = validate();

        if (error.length === 0) {
            console.log('Email submitted successfully!');
            setEmail('');
            setError('');
        } else {
            console.log('Email submission failed due to validation errors.');
            setError(error);
        }
    }

    const validate = () => {
        const regexEmail =
            /^[a-zA-Z0-9][a-zA-Z0-9.\-_]+@[a-zA-Z0-9.\-_]+\.[a-zA-Z]{2,63}$/;
        let error = '';

        if (email.length === 0) {
            error = 'Необходимо заполнить';
        } else if (!regexEmail.test(email.trim())) {
            error = 'Недопустимый формат';
        } else if (email.length < 5) {
            error = 'Минимум 5 символов';
        } else if (email.length > 200) {
            error = 'Максимум 200 символов';
        }
        return error;
    }

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
                        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className={styles.inst}>
                            <InstagramIcon className={styles.icon_inst}/>
                        </a>
                        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className={styles.fb}>
                            <FacebookIcon className={styles.icon_fb}/>
                        </a>
                        <a href="https://vk.com/" target="_blank" rel="noreferrer" className={styles.vk}>
                            <VkIcon className={styles.icon_vk}/>
                        </a>
                    </div>
                    <RequestForm/>
                </div>
                <div className={styles.booklet}>
                    <img className={styles.image} src={Magazine} alt="booklet"/>
                    <div className={styles.wrapper}>
                        <h2 className={styles.title}>Что нужно знать отправляясь на Камчатку?</h2>
                        <p className={styles.text}>Получите памятку туриста просто оставив свой e-mail.</p>
                        <div className={styles.email}>
                            <div className={styles.input_wrapper}>
                                {error && <div className={styles.error}>{error}</div>}
                                <input type="email" id="email" value={email} placeholder="Ваш e-mail"
                                       className={[styles.input, error !== "" ? styles.input_error : ''].join(' ')}
                                       onChange={(e) => handleChange(e)}
                                       onBlur={() => blurHandler()}/>
                            </div>
                            <button type="button" className={styles.button} onClick={() => handleSubmit()}>Получить
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Participation
