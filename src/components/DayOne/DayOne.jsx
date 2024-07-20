import styles from "./DayOne.module.scss"
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

const DayOne = () => {
    return (
        <section className={[styles.dayone, 'container'].join(' ')}>
            <div className={[styles.inner, 'container__row'].join(' ')}>
                <h2 className={styles.title}>
                    <span>День 1. </span>Прибытие. <br/>Встреча в аэропорту и <br/>размещение
                </h2>
                <div className={styles.text}>
                    <p>С высоты птичьего полета вы увидите знаменитые «домашние» вулканы – Корякский, Авачинский и
                        Козельский. У выхода в аэропорту вас встретят с табличкой «ДРИМ ТУР».</p>
                    <br/>
                    <p>По пути в гостиницу сбор средств с членов группы, инструктаж по программе этого дня (бассейн с
                        термальной водой, шашлык, знакомство с группой, алкоголь, фейерверк не раньше 20:00).</p>
                    <br/>
                    <p>После выезд (вид транспорта зависит от величины группы) на базу отдыха в курортный поселок
                        Паратунка.</p>
                    <br/>
                    <p>Вечером, после прибытия на Камчатку всех участников (если рейсы разные), общая встреча, проверка
                        снаряжения, обсуждение программы завтрашнего дня.</p>
                </div>
                <Slider cards={arrCards} section="dayone" shift={314}/>
            </div>
        </section>
    )
}

export default DayOne
