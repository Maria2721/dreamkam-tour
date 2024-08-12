import styles from "./DayFiveSix.module.scss"
import DayFive from "../DayFive/DayFive.jsx";
import DaySix from "../DaySix/DaySix.jsx";

const DayFiveSix = () => {
    return (
        <div className={styles.wrapper}>
            <DayFive/>
            <DaySix/>
            <div className={styles.wrapper_clouds}></div>
        </div>
    )
}

export default DayFiveSix
