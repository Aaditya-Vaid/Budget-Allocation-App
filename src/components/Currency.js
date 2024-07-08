import React, {useContext} from "react";
import {AppContext} from '../context/AppContext';

const Currency= () => {
    const {dispatch} = useContext(AppContext);
    const changeCurrency = (val) => {


        dispatch({
            type: 'CHG_CURRENCY',
            payload: val,
        });
    };

    return (
        <select className='alert alert-secondary' name='currency' id="currency" onClick={event => changeCurrency(event.target.value)}>
            <option value='$'>Currency ($ Dollar)</option>
            <option defaultValue value='£'>Currency (£ Pound)</option>
            <option value='€'>Currency (€ Euro)</option>
            <option value='₹'>Currency (₹ Rupee)</option>
        </select>
    );
};

export default Currency; 