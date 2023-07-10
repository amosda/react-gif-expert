import { useState } from "react";

export function AddCategory ({ onNewCategory }) {
    const [inputValue, setInputValue] = useState('');

    const  onInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const onSubmit = (event) => {   
        event.preventDefault();
        
        if(inputValue.trim().length <= 1) return;

        // onAddCategory( (categories) => [inputValue, ...categories]);
        onNewCategory(inputValue.trim())

        setInputValue('');
    };

    return (
        <form onSubmit={ onSubmit }>
            <input
            type="text" 
            placeholder='Ingresar gifs'
            value={ inputValue }
            onChange={ onInputChange }
            />
        </form>
    )
}