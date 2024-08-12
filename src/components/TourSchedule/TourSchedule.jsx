import styles from "./TourSchedule.module.scss";
import Path from '../../assets/imgs/background/path.svg?react';
import DayOne from "../DayOne/DayOne.jsx";
import DayTwo from "../DayTwo/DayTwo.jsx";
import OnRoute from "../OnRoute/OnRoute.jsx";
import DayThree from "../DayThree/DayThree.jsx";
import DayFour from "../DayFour/DayFour.jsx";
import DayFiveSix from "../DayFiveSix/DayFiveSix.jsx";
import DaySeven from "../DaySeven/DaySeven.jsx";
import DayEight from "../DayEight/DayEight.jsx";

const TourSchedule = () => {
    return (
        <div id='schedule' className={[styles.wrapper, 'container'].join(' ')}>
            <Path className={styles.path}/>
            <DayOne/>
            <DayTwo/>
            <OnRoute/>
            <DayThree/>
            <DayFour/>
            <DayFiveSix/>
            <DaySeven/>
            <DayEight/>
        </div>
    )
}

export default TourSchedule
