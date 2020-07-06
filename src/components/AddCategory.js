import React, { useState } from 'react';
import PropTypes from 'prop-types';

// rafc para crear toda la estructura


export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');


    const handleInputChange = (e) => {
        //console.log(e.target.value);
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        // para que no refresque al presionar en el input enter
        e.preventDefault();
        //console.log('Submit Echo')

        if( inputValue.trim().length > 2) {
            setCategories( cats => [inputValue, ...cats] );
            // limpiamos el input y evitamos 2 posteos
            setInputValue('');
        }
        
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />

        </form>
    )
}

AddCategory.propTypes = {
    setCategories : PropTypes.func.isRequired
}
