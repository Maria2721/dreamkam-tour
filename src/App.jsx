import {BrowserRouter} from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import styles from './App.module.scss'
import Main from "./components/Main/Main.jsx";

function App() {

    return (
        <BrowserRouter>
            <div className={styles.App}>
                <Header/>
                <Main/>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}

export default App
