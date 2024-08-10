import styles from "./DayThree.module.scss"
import Slider from "../Slider/Slider.jsx";
import Paratunka from "../../assets/imgs/internal/paratunka.png";
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


const DayThree = () => {
    return (
        <section className={[styles.daythree, 'container'].join(' ')}>
            <div className={[styles.inner, 'container__row'].join(' ')}>
                <h2 className={styles.title}>
                    <span>День 3. </span>Горные цирки и <br/>водопады вулкана <br/>Вачкажец
                </h2>
                <div className={styles.text}>
                    <p>Вачкажец–горный массив и его окрестности, одно из красивейших мест первозданной камчатской
                        природы. Небольшой пеший переход не успеет Вас утомить. А в награду за труд в конце пути
                        открывается великолепный вид на горное озеро в чаше кратера старого потухшего вулкана,
                        обрамленное пиками старых, невысоких гор.</p>
                    <br/>
                    <p>Выезд из гостиницы и переезд около 2 часов. Пеший переход около 5 км.в одну сторону к горным
                        циркам вулкана Вачкажец, осмотр водопада. Обед. Отдых. По прибытию в машину чай с шоколадом!
                        Обратный переход по тому же пути.</p>
                    <br/>
                    <p>Продолжительность: 8 часов. Трансфер в гостиницу.</p>
                </div>
                <Slider cards={arrCards} section='daythree' shift={314} swipe='left'/>
            </div>
        </section>
    )
}

export default DayThree
