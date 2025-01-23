import { useState } from "react";
import PropTypes from 'prop-types'
export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState("");

    const onInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();

        if (!inputValue.trim()) return;

        onNewCategory(inputValue.trim());   
        setInputValue('');
    }

    return (
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="Buscar Gifs" value={inputValue} onChange={onInputChange} />

        </form>
    )
}

