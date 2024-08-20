import {useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./RequestForm.module.scss";
import {initialState} from "./initialState.js";
import MinusIcon from "../../assets/imgs/icons/minus.svg?react";
import PlusIcon from "../../assets/imgs/icons/plus.svg?react";

const RequestForm = () => {
    const [state, setState] = useState(initialState);
    const [startDate, endDate] = state['date'].dateRange;

    const handleChange = (e, id) => {
        if (id === 'quantity') {
            const result = e.target.value.replace(/\D/g, '');
            setState({
                ...state,
                [id]: {
                    ...state[id],
                    value: Number(result)
                }
            });
        } else if (id === 'rate') {
            setState({
                ...state,
                [id]: {
                    ...state[id],
                    error: '',
                    value: e.target.value
                }
            });
        } else {
            setState({
                ...state,
                [id]: {
                    ...state[id],
                    value: e.target.value
                }
            });
        }
    };

    const handleChangeDateRange = (update) => {
        setState({
            ...state,
            ['date']: {
                ...state['date'],
                error: '',
                dateRange: update,
            }
        });
    }

    const blurHandler = (id) => {
        setState((state) => ({
            ...state,
            [id]: {
                ...state[id],
                error: ''
            }
        }));
        const errors = validateForm(id);
        for (let err in errors) {
            setState((state) => ({
                ...state,
                [err]: {
                    ...state[err],
                    error: errors[err]
                }
            }));
        }
    }

    const increment = (id) => {
        setState({
            ...state,
            [id]: {
                ...state[id],
                error: '',
                value: state[id].value >= 10 ? 10 : state[id].value + 1
            }
        });
    }

    const decrement = (id) => {
        setState({
            ...state,
            [id]: {
                ...state[id],
                error: '',
                value: state[id].value > 1 && state[id].value <= 10 ? state[id].value - 1 : 1
            }
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validateForm("");

        if (Object.keys(errors).length === 0) {
            // Form submission logic here
            console.log('Form submitted successfully!');
            clearInputsForm();
        } else {
            for (let err in errors) {
                setState((state) => ({
                    ...state,
                    [err]: {
                        ...state[err],
                        error: errors[err]
                    }
                }));
            }
            console.log('Form submission failed due to validation errors.');
        }
    };

    const clearInputsForm = () => {
        setState(initialState);
    }

    const validateForm = (id) => {
        const regName = /^[A-ZА-ЯЁ\s'-]+$/i;
        const errors = {};

        const checkField = (field, value) => {
            switch (field) {
                case 'name':
                    if (value.length === 0) {
                        return 'Необходимо заполнить';
                    }
                    if (!regName.test(value)) {
                        return 'Недопустимые символы';
                    }
                    if (value.length > 200) {
                        return 'Максимум 200 символов';
                    }
                    break;
                case 'quantity':
                    if (value.length === 0) {
                        return 'Необходимо выбрать количество';
                    }
                    if (Number(value) === 0) {
                        return 'Необходимо выбрать количество';
                    }
                    if (Number(value) > 10) {
                        return 'Максимум 10 человек';
                    }
                    break;
                case 'rate':
                    if (value.length === 0) {
                        return 'Необходимо выбрать тариф';
                    }
                    break;
                case 'date':
                    if (value[0] === null || value[1] === null) {
                        return 'Необходимо выбрать даты тура';
                    }
                    break;
                case 'comment':
                    if (value.length === 0) {
                        return 'Необходимо заполнить';
                    }
                    if (value.length > 5000) {
                        return 'Максимум 5000 символов';
                    }
                    break;
            }
            return null;
        };

        let key;
        if (id === "") {
            for (key in initialState) {
                const value = key === 'date' ? state[key].dateRange : typeof state[key].value === "string" ? state[key].value.trim() : state[key].value.toString().trim();
                const error = checkField(key, value);
                if (error) {
                    errors[key] = error;
                }
            }
        } else {
            key = id;
            const value = key === 'date' ? state[key].dateRange : typeof state[key].value === "string" ? state[key].value.trim() : state[key].value.toString().trim();
            const error = checkField(key, value);
            if (error) {
                errors[key] = error;
            }
        }
        return errors;
    };

    return (
        <form onSubmit={handleSubmit} className={styles.requestForm}>
            <div className={styles.name}>
                <label htmlFor="name" className={styles.label}>Имя участника</label>
                <div className={styles.input_wrapper}>
                    {state["name"].error && <div className={styles.error}>{state["name"].error}</div>}
                    <input type="text" id="name" value={state["name"].value} placeholder="Имя"
                           className={[styles.input, state["name"].error !== "" ? styles.input_error : ''].join(' ')}
                           onChange={(e) => handleChange(e, "name")}
                           onBlur={() => blurHandler("name")}/>
                </div>
            </div>
            <div className={styles.quantity}>
                <label htmlFor="quantity" className={styles.label}>Количество человек</label>
                <div className={styles.input_wrapper}>
                    {state["quantity"].error && <div className={styles.error}>{state["quantity"].error}</div>}
                    <div
                        className={[styles.input_container, state["quantity"].error !== "" ? styles.input_container_error : ''].join(' ')}>
                        <input type="text" id="quantity" value={state["quantity"].value} placeholder="0"
                               className={styles.input}
                               onChange={(e) => handleChange(e, "quantity")}
                               onBlur={() => blurHandler("quantity")}/>
                        <MinusIcon className={styles.icon_minus} onClick={() => decrement("quantity")}/>
                        <PlusIcon className={styles.icon_plus} onClick={() => increment("quantity")}/>
                    </div>
                </div>
            </div>
            <div className={styles.rate}>
                <div className={styles.label}>Тариф</div>
                <div className={styles.input_wrapper}>
                    {state["rate"].error && <div className={styles.error}>{state["rate"].error}</div>}
                    <label htmlFor="base" className={styles.label_rate}>
                        <input type="radio" name="rate" id="base" value="base" checked={state["rate"].value === "base"}
                               className={[styles.inputRadio, state["rate"].error !== "" ? styles.inputRadio_error : ''].join(' ')}
                               onChange={(e) => handleChange(e, "rate")}/>
                        Базовый (для камчадал)<span>79 000 руб</span></label>
                    <label htmlFor="accommodation" className={styles.label_rate}>
                        <input type="radio" name="rate" id="accommodation" value="accommodation"
                               checked={state["rate"].value === "accommodation"}
                               className={[styles.inputRadio, state["rate"].error !== "" ? styles.inputRadio_error : ''].join(' ')}
                               onChange={(e) => handleChange(e, "rate")}/>
                        Базовый + проживание<span>99 000 руб</span></label>
                    <label htmlFor="geysers" className={styles.label_rate}>
                        <input type="radio" name="rate" id="geysers" value="geysers"
                               checked={state["rate"].value === "geysers"}
                               className={[styles.inputRadio, state["rate"].error !== "" ? styles.inputRadio_error : ''].join(' ')}
                               onChange={(e) => handleChange(e, "rate")}/>
                        Базовый + проживание + долина гейзеров<span>179 000 руб</span></label>
                </div>
            </div>
            <div className={styles.date}>
                <div className={styles.label}>Даты тура</div>
                <div className="input_wrapper">
                    {state["date"].error && <div className={styles.error}>{state["date"].error}</div>}
                    <DatePicker
                        selectsRange={true}
                        startDate={startDate}
                        endDate={endDate}
                        onChange={(update) => handleChangeDateRange(update)}
                        onBlur={() => blurHandler("date")}
                        dateFormat="dd.MM"
                        placeholderText="Выберите диапазон дат"
                        minDate={new Date()}
                        className={[styles.input, state["date"].error !== "" ? styles.input_error : ''].join(' ')}
                        showIcon
                        icon={
                            <svg className={styles.calendar} width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M3 9H21V20C21 20.2652 20.8946 20.5196 20.7071 20.7071C20.5196 20.8946 20.2652 21 20 21H4C3.73478 21 3.48043 20.8946 3.29289 20.7071C3.10536 20.5196 3 20.2652 3 20V9Z"
                                    stroke="black" strokeWidth="1.33333" strokeLinecap="round"
                                    strokeLinejoin="round"/>
                                <path
                                    d="M4 4H20C20.2652 4 20.5196 4.10536 20.7071 4.29289C20.8946 4.48043 21 4.73478 21 5V9H3V5C3 4.73478 3.10536 4.48043 3.29289 4.29289C3.48043 4.10536 3.73478 4 4 4V4Z"
                                    stroke="black" strokeWidth="1.33333" strokeLinecap="round"
                                    strokeLinejoin="round"/>
                                <path d="M16 3V6" stroke="black" strokeWidth="1.33333" strokeLinecap="round"
                                      strokeLinejoin="round"/>
                                <path d="M8 3V6" stroke="black" strokeWidth="1.33333" strokeLinecap="round"
                                      strokeLinejoin="round"/>
                                <circle cx="7" cy="12" r="1" fill="black"/>
                                <circle cx="7" cy="16" r="1" fill="black"/>
                                <circle cx="12" cy="12" r="1" fill="black"/>
                                <circle cx="12" cy="16" r="1" fill="black"/>
                                <circle cx="17" cy="12" r="1" fill="black"/>
                                <circle cx="17" cy="16" r="1" fill="black"/>
                            </svg>
                        }
                    />
                </div>
            </div>
            <div className={styles.comment}>
                <label htmlFor="comment" className={styles.label}>Комментарий</label>
                <div className={styles.input_wrapper}>
                    {state["comment"].error && <div className={styles.error}>{state["comment"].error}</div>}
                    <textarea id="comment" value={state["comment"].value} placeholder="Напишите ваш комментарий здесь"
                              className={[styles.input, state["comment"].error !== "" ? styles.input_error : ''].join(' ')}
                              onChange={(e) => handleChange(e, "comment")}
                              onBlur={() => blurHandler("comment")}/>
                </div>
            </div>
            <button type="submit" className={styles.button}>Отправить заявку</button>
        </form>
    )
}

export default RequestForm
