import styles from "./OnRoute.module.scss";
import Audio from "../../assets/imgs/internal/audio.png";
import Food from "../../assets/imgs/internal/food.png";
import Safety from "../../assets/imgs/internal/safety.png";
import Photo from "../../assets/imgs/internal/photo.png";

const arrCards = [
    {
        img: Audio,
        title: 'Аудиосопровождение',
        text: 'Новый способ увидеть и услышать, то место, где вы находитесь. С помощью аудиогида вы сможете совершить увлекательную экскурсию по городу.'
    },
    {
        img: Food,
        title: 'Разнообразное питание',
        text: 'Каждый обед мы готовим с большой любовью. Кормим вас традиционными камчатскими блюдами. Еда - залог хорошего отдыха!'
    },
    {
        img: Safety,
        title: 'Безопасность на маршруте',
        text: 'Наша команда проводит инструктаж, рассказывает как правильно себя вести, как избежать опасных ситуаций.'
    },
    {
        img: Photo,
        title: 'Потрясающие фото',
        text: 'Можете не переживать, что не успели сделать фото. Наш фотограф успевает везде и за всеми. У вас будут самые лучшие фото!'
    }
]

const OnRoute = () => {
    return (
        <section className={[styles.onroute, 'container'].join(' ')}>
            <div className={[styles.inner, 'container__row'].join(' ')}>
                <h2 className={styles.title}>
                    На протяжении маршрута вас ожидает:
                </h2>
                <div className={styles.cards}>
                    {arrCards.map((card, index) => (
                        <div key={index} className={styles.card}>
                            <img src={card.img} alt={`Image ${index + 1}`} className={styles.image}/>
                            <div className={styles.wrapper}>
                                <h6>{card.title}</h6>
                                <p>{card.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default OnRoute
