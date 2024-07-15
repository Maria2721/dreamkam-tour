import styles from './Header.module.scss'
import Logo from "../../assets/imgs/logo.svg?react";
import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link";

const Header = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        document.body.style = "";
        console.log('scrollToTop');
    }

    return (
        <header className={[styles.header, 'container'].join(' ')}>
            <div className={[styles.inner, 'container__row'].join(' ')}>
                <Link to="/" className={styles.logo} onClick={scrollToTop}>
                    <Logo className={styles.logoIcon}/>
                </Link>
                <div className={styles.links}>
                    <HashLink smooth to="/#schedule" className={styles.link}>
                        Расписание тура
                    </HashLink>
                    <HashLink smooth to="/#signup" className={styles.link}>
                        Как записаться
                    </HashLink>
                    <HashLink smooth to="/#team" className={styles.link}>
                        Команда
                    </HashLink>
                </div>
                <button className={styles.bookBtn}>Забронировать</button>
            </div>
        </header>
    )
}

export default Header
