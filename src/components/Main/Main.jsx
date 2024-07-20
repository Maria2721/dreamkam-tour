import styles from './Main.module.scss'
import BannerTour from "../BannerTour/BannerTour.jsx";
import AboutTour from "../AboutTour/AboutTour.jsx";
import TourSchedule from "../TourSchedule/TourSchedule.jsx";

const Main = () => {
    return (
        <main className={styles.main}>
            <BannerTour/>
            <AboutTour/>
            <TourSchedule/>
        </main>
    )
}

export default Main
