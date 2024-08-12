import styles from "./DaySeven.module.scss"
import Slider from "../Slider/Slider.jsx";
import Paratunka from "../../assets/imgs/internal/paratunka.png";
import Geysers from "../../assets/imgs/internal/geysers.png";
import Valley from "../../assets/imgs/internal/valley.png";

const arrCards = [
    {
        img: Paratunka,
        title: 'Паратунка',
        text: 'Какой-то вспомогательный текст, в котором кратко описывается что на картинке.'
    },
    {
        img: Geysers,
        title: 'Долина гейзеров',
        text: 'Какой-то вспомогательный текст, в котором кратко описывается что на картинке.'
    },
    {
        img: Valley,
        title: 'Кальдера',
        text: 'Какой-то вспомогательный текст, в котором кратко описывается что на картинке.'
    },
    {
        img: Paratunka,
        title: 'Паратунка',
        text: 'Какой-то вспомогательный текст, в котором кратко описывается что на картинке.'
    },
    {
        img: Geysers,
        title: 'Долина гейзеров',
        text: 'Какой-то вспомогательный текст, в котором кратко описывается что на картинке.'
    },
    {
        img: Valley,
        title: 'Кальдера',
        text: 'Какой-то вспомогательный текст, в котором кратко описывается что на картинке.'
    }
]

const DaySeven = () => {
    return (
        <section className={[styles.dayseven, 'container'].join(' ')}>
            <div className={[styles.inner, 'container__row'].join(' ')}>
                <h2 className={styles.title}>
                    <span>День 7. </span>Вертолетная экскурсия <br/>в Долину Гейзеров и кальдеру <br/>вулкана Узон /
                    свободный день
                </h2>
                <div className={[styles.left_wrapper, styles.text].join(' ')}>
                    <p>Экскурсия проводится в содружестве с «ВИТЯЗЬ-ТРЕВЕЛ», крупнейшим оператором вертолётных туров на
                        Камчатке. Выезд в аэропорт «Витязь–Аэро». К вашим услугам – современный аэропортовый комплекс,
                        включающий в себя удобный зал ожидания, кафетерий, сувенирный магазин.</p>
                    <br/>
                    <p>Перелёт до <span>Долины гейзеров</span> занимает 1 час 10 минут. По пути, при благоприятных
                        условиях, вы
                        осмотрите два действующих вулкана – Карымский и Малый Семячик из окон вертолёта.</p>
                    <br/>
                    <p>Перелёт и посадка в кальдере Узон. Кальдера образовалась в результате обрушения стенок древнего
                        вулкана около 40 тысяч лет назад, на её дне очень ярко проявляется гидротермальная
                        деятельность.Сотни столбов пара вырываются здесь из жёлтых фумарольных полей. Осмотр термальных
                        полей.</p>
                </div>
                <div className={styles.right_wrapper}>
                    <p className={styles.text}>Перелёт и посадка в <span>Налычевской долине</span>. Купание в горячих
                        источниках.
                        Здесь же вам предложат обед - горячее, чай и камчатский морс. Трансфер в гостиницу.</p>
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
                </div>
                <Slider cards={arrCards} section='dayseven' shift={352} swipe='left'/>
            </div>
        </section>
    )
}

export default DaySeven
