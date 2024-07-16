import styles from "./AboutTour.module.scss";
import Complexity from '../../assets/imgs/icons/complexity.svg?react'
import Period from '../../assets/imgs/icons/period.svg?react'
import Duration from '../../assets/imgs/icons/duration.svg?react'
import Accommodation from '../../assets/imgs/icons/accommodation.svg?react'

const AboutTour = () => {
    return (
        <section className={[styles.about, 'container'].join(' ')}>
            <div className={[styles.inner, 'container__row'].join(' ')}>
                <h2 className={styles.title}>
                    Путешествие на край света <br/>начинается
                </h2>
                <p className={styles.subtitle}>
                    Ваша мечта осуществилась, вы приняли решение, <br/>
                    и вам предстоит путешествие на край света.
                </p>
                <p className={styles.text}>
                    Этот маршрут лучший вариант для тех, кто хочет ощутить, как живёт самая <br/>молодая земля нашей
                    планеты, многое увидеть, испытать на себе и полюбить, <br/>увезти целый рюкзак незабываемых чувств и
                    впечатлений. Каждый день вы <br/>будете выезжать на радиальные маршруты, а проживать в
                    комфортабельных
                    <br/>двухместных номерах.
                </p>
                <div className={styles.info}>
                    <div className={styles.container}>
                        <Complexity className={styles.icon}/>
                        <p className={styles.caption}>Сложность</p>
                        <p className={styles.value}>Для семейного отдыха</p>
                    </div>
                    <div className={styles.container}>
                        <Period className={styles.icon}/>
                        <p className={styles.caption}>Период</p>
                        <p className={styles.value}>Июль - сентябрь</p>
                    </div>
                    <div className={styles.container}>
                        <Duration className={styles.icon}/>
                        <p className={styles.caption}>Длительность</p>
                        <p className={styles.value}>7 дней / 6 ночей</p>
                    </div>
                    <div className={styles.container}>
                        <Accommodation className={styles.icon}/>
                        <p className={styles.caption}>Проживание</p>
                        <p className={styles.value}>Отель, без палаток</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutTour
