import styles from "./DayFive.module.scss"
import Slider from "../Slider/Slider.jsx";
import Paratunka from "../../assets/imgs/internal/paratunka_ocean.png";
import Monument from "../../assets/imgs/internal/monument.png";

const arrCards = [
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
    },
    {
        img: Paratunka,
        title: 'Паратунка',
        text: 'Какой-то вспомогательный текст, в котором кратко описывается что на картинке.'
    }
]


const DayFive = () => {
    return (
        <section className={[styles.dayfive, 'container'].join(' ')}>
            <div className={[styles.inner, 'container__row'].join(' ')}>
                <h2 className={styles.title}>
                    <span>День 5. </span>Морская прогулка <br/>к острову Старичков
                </h2>
                <div className={styles.text}>
                    <p>Инструктаж по поведению группы при передвижении на плавсредствах, приему таблеток от морской
                        болезни.</p>
                    <br/>
                    <p>Выезд на причал. Морская прогулка по Авачинской бухте. Осмотр панорамы города
                        Петропавловска-Камчатского, Авачинской губы и Авачинского залива. Маршрут пролегает мимо бухты
                        Тихая, острова Бабушкин камень, мыса Станицкого, камней «Три брата». Увлекательная возможность
                        донной рыбалки на терпуга, ленка, камбалу у «Трех братьев», мыса Безымянный, у <span>острова Старичков</span>.
                    </p>
                    <br/>
                    <p>Осмотр птичьих базаров - смешанных колонии кайр, моевок и бакланов. Трансфер в гостиницу.</p>
                    <br/>
                    <p>Продолжительность 6 часов.</p>
                </div>
                <Slider cards={arrCards} section='dayfive' shift={313} swipe='left'/>
            </div>
        </section>
    )
}

export default DayFive
