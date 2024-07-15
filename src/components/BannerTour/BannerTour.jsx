import styles from './BannerTour.module.scss'

const BannerTour = () => {
    return (
        <section className={[styles.banner, 'container'].join(' ')}>
            <div className={[styles.inner, 'container__row'].join(' ')}>
                <h1 className={styles.title}>Мечты о далекой <br/>Камчатке - близко</h1>
            </div>
        </section>
    )
}

export default BannerTour
