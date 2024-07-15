import styles from './Main.module.scss'
import BannerTour from "../BannerTour/BannerTour.jsx";

const Main = () => {
    return (
        <main className={styles.main}>
            <BannerTour/>
        </main>
    )
}

export default Main
