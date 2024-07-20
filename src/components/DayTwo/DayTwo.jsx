import styles from "./DayTwo.module.scss"
import Slider from "../Slider/Slider.jsx";
import Paratunka from "../../assets/imgs/internal/paratunka.png"
import Monument from "../../assets/imgs/internal/monument.png"

const arrCards = [
    {
        img: Paratunka,
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
        img: Monument,
        title: 'Памятник “Здесь начинается Россия”',
        text: 'Гости Камчатки по традиции делают фото в начале и в конце путешествий.'
    }
]

const DayTwo = () => {
    return (<section className={[styles.daytwo, 'container'].join(' ')}>
        <div className={[styles.inner, 'container__row'].join(' ')}>
            <h2 className={styles.title}>
                <span>День 2. </span>Вилючинский водопад, вулкан и <br/>Верхне-Паратунские термальные <br/>источники
            </h2>
            <div className={[styles.text, styles.text_left].join(' ')}>
                <p>Инструктаж перед поездкой (передвижение и поведение группы в лесу, общение с медведями, форма одежды,
                    ), снаряжение, (взять тару для воды при заезде на Зайкин ключ, купальные принадлежности).</p>
                <br/>
                <p>Сбор участников на Роуп Джамп для прыжков с высоты над водопадом. Заранее решаем кто
                    прыгает.</p>
            </div>
            <div className={[styles.text, styles.text_right].join(' ')}>
                <p>Выезд из отеля в 10.00. Переезд в верховья реки Паратунка к подножию вулкана Вилючинский. Обзорная
                    пешеходная экскурсия к <span>водопаду Вилючинский</span>. Термос с чаем, шоколад. Возвращение назад.
                </p>
                <br/>
                <p>Обед. Купание в Верхне-Паратунских термальных источниках, расположенных на склоне сопки Горячая.
                </p>
                <br/>
                <p>Продолжительность – 6-8 часов. Трансфер в гостиницу.</p>
            </div>
            <Slider cards={arrCards} section='daytwo' shift={352} swipe='left'/>
        </div>
    </section>)
}

export default DayTwo
