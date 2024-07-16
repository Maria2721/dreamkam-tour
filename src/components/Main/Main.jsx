import styles from './Main.module.scss'
import BannerTour from "../BannerTour/BannerTour.jsx";
import AboutTour from "../AboutTour/AboutTour.jsx";

const Main = () => {
    return (
        <main className={styles.main}>
            <BannerTour/>
            <AboutTour/>
        </main>
    )
}

export default Main
