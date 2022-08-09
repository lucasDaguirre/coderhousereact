import './ItemCount.scss';
import React, { useState, useEffect } from 'react';
const ItemCount = ({title, setQuantity, stock}) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        setQuantity(count);
    }, [count])
    const onSubtract = () => {
        if (count !== 0){
            setCount(count - 1);
        }
    };
    const onAdd = () => {
        if(count < stock){
            setCount(count + 1)
        }
    }
  return (
    <div className='itemCountContainer'>
        <span>{title}</span>
        <div className='itemCount'>
            <button onClick={onSubtract}>-</button>
            <span>{count}</span>
            <button onClick={onAdd}>+</button>
        </div>
    </div>
  )
}

export default ItemCount