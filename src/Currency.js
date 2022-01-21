import React from 'react';
import "./Currency.css"

function Currency(props) {
     const {currencyData,select,handleChange,amount, handleAmountChange } = props
  return <div className='currency'>
            <div className='currency_container'>
                <form>
                <input type='number' className='currency_input' value={amount} onChange={handleAmountChange}/> 
                <select value={select} onChange={handleChange} className='currency_select'>
                    {currencyData.map(currency => ( 
                        <option key={currency} value={currency}>{currency}</option>
                    ))}
                    
                </select>
                </form>
            </div>
        </div>;
}

export default Currency;
