import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <footer className={[styles.footer, 'container'].join(' ')}>
            <div className={[styles.inner, 'container__row'].join(' ')}>
                Footer
            </div>
        </footer>
    )
}

export default Footer
