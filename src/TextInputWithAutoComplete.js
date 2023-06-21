import React, { useState } from 'react';

const TextInputWithAutoComplete = ({ options }) => {
    const [inputValue, setInputValue] = useState('');
    const [autoCompleteValue, setAutoCompleteValue] = useState('');

    const handleInputChange = (event) => {
        const value = event.target.value;
        setInputValue(value);

        // Find the first option that starts with the input value
        const autoCompleteOption = options.find((option) =>
            option.toLowerCase().startsWith(value.toLowerCase())
        );
        if (autoCompleteOption) {
            setAutoCompleteValue(autoCompleteOption);
        } else {
            setAutoCompleteValue('');
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (inputValue.trim() !== '') {
            const newOption = inputValue.trim();
            if (!options.includes(newOption)) {
                options.push(newOption);
            }
        }

        setInputValue('');
        setAutoCompleteValue('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
            <button type="submit">Ввести</button>
            <div>Результат автозаполнения: <b>{autoCompleteValue}</b></div>
        </form>
    );
};

export default TextInputWithAutoComplete;
