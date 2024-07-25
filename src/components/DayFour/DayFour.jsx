import styles from "./DayFour.module.scss"
import Slider from "../Slider/Slider.jsx";
import ParatunkaV2 from "../../assets/imgs/internal/paratunka_v2.png";
import Paratunka from "../../assets/imgs/internal/paratunka.png";
import Monument from "../../assets/imgs/internal/monument.png";

const arrCards = [
    {
        img: ParatunkaV2,
        title: 'Паратунка',
        text: 'Какой-то вспомогательный текст, в котором кратко описывается что на картинке.'
    },
    {
        img: Monument,
        title: 'Памятник “Здесь начинается Россия”',
        text: 'Гости Камчатки по традиции делают фото в начале и в конце путешествий.'
    },
    {
        img: Paratunka,
        title: 'Паратунка',
        text: 'Какой-то вспомогательный текст, в котором кратко описывается что на картинке.'
    },
    {
        img: ParatunkaV2,
        title: 'Паратунка',
        text: 'Какой-то вспомогательный текст, в котором кратко описывается что на картинке.'
    },
    {
        img: Monument,
        title: 'Памятник “Здесь начинается Россия”',
        text: 'Гости Камчатки по традиции делают фото в начале и в конце путешествий.'
    },
    {
        img: Paratunka,
        title: 'Паратунка',
        text: 'Какой-то вспомогательный текст, в котором кратко описывается что на картинке.'
    }
]


const DayFour = () => {
    return (
        <section className={[styles.dayfour, 'container'].join(' ')}>
            <div className={[styles.inner, 'container__row'].join(' ')}>
                <h2 className={styles.title}>
                    <span>День 4. </span>Экскурсия к <br/>подножию Авачинского <br/>вулкана
                </h2>
                <div className={styles.text}>
                    <p>Инструктаж по поведению группы в горах. Проверка снаряжения.Выезд на автомашине на вулканическое
                        плато (высота 900 м) к подножию <span>Авачинского вулкана</span> (2 часа).</p>
                    <br/>
                    <p>Пешеходная экскурсия к горе Верблюд, представляющую собой вулканическую экструзию. Находится в
                        седловине между Корякским и Авачинским вулканами, относительная высота 100-150 м, ширина - около
                        100 м и по длине она протягивается на 500 м., состоит из трех сросшихся блоков.</p>
                    <br/>
                    <p>Обед. Поездка в Паратунку с купанием.</p>
                    <br/>
                    <p>Продолжительность – 8 часов. Трансфер в гостиницу.</p>
                </div>
                <Slider cards={arrCards} section='dayfour' shift={314} swipe='right'/>
            </div>
        </section>
    )
}

export default DayFour
