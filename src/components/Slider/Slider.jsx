import {useState} from "react";
import styles from "./Slider.module.scss"
import ArrowLeftIcon from "../../assets/imgs/icons/arrow_left.svg?react";
import ArrowRightIcon from "../../assets/imgs/icons/arrow_right.svg?react";
import Mountains from "../../assets/imgs/mountains.png"
import Animals from "../../assets/imgs/animals.png"
import Ocean from "../../assets/imgs/ocean.png"

const cards = [
    {
        img: Mountains,
        text: 'Горы и вулканы'
    },
    {
        img: Animals,
        text: 'Дикие животные'
    },
    {
        img: Ocean,
        text: 'Тихий океан'
    },
    {
        img: Mountains,
        text: 'Горы и вулканы'
    },
    {
        img: Animals,
        text: 'Дикие животные'
    },
    {
        img: Ocean,
        text: 'Тихий океан'
    }
]

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [position, setPosition] = useState(0);
    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? cards.length - 1 : prevIndex - 1
        );
        setPosition((curPosition) => curPosition + 245);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === cards.length - 1 ? 0 : prevIndex + 1
        );
        setPosition((curPosition) => curPosition - 245);
    };

    return (
        <div className={styles.slider}>
            <div className={styles.cards} style={{
                transform: `translateX(${position}px)`,
                transition: 'transform 0.5s ease-in-out',
            }}>
                {cards.map((card, index) => (
                    <div key={index}
                         className={[styles.container, index === currentIndex ? styles.currentCard : styles.card].join(' ')}>
                        <img src={card.img} alt={`Image ${index + 1}`} className={styles.image}/>
                        <div className={index === currentIndex ? styles.currentOverlay : styles.overlay}>
                            <p>{card.text}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.buttons}>
                <button type="button" className={styles.button} onClick={handlePrev} disabled={currentIndex === 0}>
                    <ArrowLeftIcon/>
                </button>
                <button type="button" className={styles.button} onClick={handleNext}
                        disabled={currentIndex === cards.length - 1}>
                    <ArrowRightIcon/>
                </button>
            </div>
        </div>
    )
}

export default Slider
