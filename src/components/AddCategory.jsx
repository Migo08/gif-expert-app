import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setinputValue] = useState('');

    const onInputChange = (e) => {
        setinputValue(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if( inputValue.trim().length <= 1 ) return;

        onNewCategory( inputValue.trim() );
        setinputValue('');
    }
    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text"
                placeholder="Buscar Gif"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    )
}
