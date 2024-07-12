import {useState} from 'react'
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import styles from './App.module.scss'

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className={styles.App}>
            <Header/>
            <main>
                <h1>Dreamkam Tour</h1>
                <div>
                    <button onClick={() => setCount((count) => count + 1)}>
                        count is {count}
                    </button>
                </div>
            </main>
            <Footer/>
        </div>
    )
}

export default App
