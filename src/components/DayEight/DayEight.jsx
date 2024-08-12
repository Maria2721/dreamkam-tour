import styles from "./DayEight.module.scss"

const DayEight = () => {
    return (
        <section className={[styles.dayeight, 'container'].join(' ')}>
            <div className={[styles.inner, 'container__row'].join(' ')}>
                <h2 className={styles.title}>
                    <span>День 8. </span>Отъезд с <br/>Камчатки. Трансфер <br/>в аэропорт
                </h2>
                <div className={styles.text}>
                    <p>Заезд на рынок, прощальное посещение «медведей», фото на память. Возвращайтесь следующим
                        летом!</p>
                </div>
            </div>
        </section>
    )
}

export default DayEight
