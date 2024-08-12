import styles from "./DaySix.module.scss"
import Slider from "../Slider/Slider.jsx";
import Surf from "../../assets/imgs/internal/surf.png";
import River from "../../assets/imgs/internal/river.png";
import Paratunka from "../../assets/imgs/internal/paratunka.png";

const arrCards = [
    {
        img: Surf,
        title: 'Волновой SUP серфинг',
        text: 'Какой-то вспомогательный текст, в котором кратко описывается что на картинке.'
    },
    {
        img: River,
        title: 'Халактырский пляж',
        text: 'Гости Камчатки по традиции делают фото в начале и в конце путешествий.'
    },
    {
        img: Paratunka,
        title: 'Паратунка',
        text: 'Какой-то вспомогательный текст, в котором кратко описывается что на картинке.'
    },
    {
        img: Surf,
        title: 'Волновой SUP серфинг',
        text: 'Какой-то вспомогательный текст, в котором кратко описывается что на картинке.'
    },
    {
        img: River,
        title: 'Халактырский пляж',
        text: 'Гости Камчатки по традиции делают фото в начале и в конце путешествий.'
    },
    {
        img: Paratunka,
        title: 'Паратунка',
        text: 'Какой-то вспомогательный текст, в котором кратко описывается что на картинке.'
    }
]

const DaySix = () => {
    return (
        <section className={[styles.daysix, 'container'].join(' ')}>
            <div className={[styles.inner, 'container__row'].join(' ')}>
                <h2 className={styles.title}>
                    <span>День 6. </span>Берег Тихого <br/>океана, экскурсия по <br/>городу
                </h2>
                <div className={styles.text}>
                    <p>Поездка на берег Тихого океана, в район Халактырского пляжа. Прогулка. Обед в городе. Обзорная
                        экскурсия по гроду Петропавловску-Камчатскому с посещением смотровых площадок. Рыбный рынок.
                    </p>
                    <br/>
                    <p>Продолжительность - 5 часов. Трансфер в гостиницу.</p>
                </div>
                <h3 className={styles.subtitle}>Дополнительные услуги</h3>
                <div className={styles.table}>
                    <div className={styles.block}>
                        <h4 className={styles.block_title}>Серфинг</h4>
                        <p className={styles.block_text}>Прыжки с высоты над водопадом. Записываться заранее.</p>
                    </div>
                    <div className={styles.block}>
                        <h4 className={styles.block_title}>SUP борды</h4>
                        <p className={styles.block_text}>Прыжки с высоты над водопадом. Записываться заранее. </p>
                    </div>
                </div>
                <Slider cards={arrCards} section='daysix' shift={315} swipe='right'/>
            </div>
        </section>
    )
}

export default DaySix
