import styles from "./DaySix.module.scss"

const DaySix = () => {
    return (
        <section className={[styles.daysix, 'container'].join(' ')}>
            <div className={[styles.inner, 'container__row'].join(' ')}>
                <h2 className={styles.title}>
                    <span>День 6. </span>Берег Тихого <br/>океана, экскурсия по <br/>городу
                </h2>
                <div className={styles.text}>
                </div>
            </div>
        </section>
    )
}

export default DaySix
