import styles from "./TourSchedule.module.scss";
import Path from '../../assets/imgs/background/path.svg?react';
import DayOne from "../DayOne/DayOne.jsx";
import DayTwo from "../DayTwo/DayTwo.jsx";
import OnRoute from "../OnRoute/OnRoute.jsx";
import DayThree from "../DayThree/DayThree.jsx";

const TourSchedule = () => {
    return (
        <div id='schedule' className={[styles.wrapper, 'container'].join(' ')}>
            <Path className={styles.path}/>
            <DayOne/>
            <DayTwo/>
            <OnRoute/>
            <DayThree/>
        </div>
    )
}

export default TourSchedule
