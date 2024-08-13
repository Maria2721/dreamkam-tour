import styles from './Main.module.scss'
import BannerTour from "../BannerTour/BannerTour.jsx";
import AboutTour from "../AboutTour/AboutTour.jsx";
import TourSchedule from "../TourSchedule/TourSchedule.jsx";
import Participation from "../Participation/Participation.jsx";

const Main = () => {
    return (
        <main className={styles.main}>
            <BannerTour/>
            <AboutTour/>
            <TourSchedule/>
            <Participation/>
        </main>
    )
}

export default Main
