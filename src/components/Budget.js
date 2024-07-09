import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { type } from '@testing-library/user-event/dist/type';

const Budget = () => {
    const { budget, currency, dispatch, expenses } = useContext(AppContext);
    const total_expenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    },0);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
        if(newBudget < total_expenses) {
            alert('You cannot reduce the budget value lower than the spending');
        }
        else if(newBudget == total_expenses){
            if(event.target.value < total_expenses){
                event.target.value+=10;
            }
            else{
                dispatch({
                    type: 'SET_BUDGET',
                    payload: event.target.value,
                });
            }
        }
        else{
            dispatch({
                type: 'SET_BUDGET',
                payload: event.target.value,
            });
        }
        
    };
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}  </span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
