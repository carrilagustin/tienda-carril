import React from 'react'
import {useState} from 'react'


function ItemCount(props) {
    
    const [count, setCount] = useState(+(props.initial));

    const decrease = () => {
        if (count <= props.initial) {
            return;
        } else {
            setCount(count - 1)
        }
    }

    const increase = () => {
        if (count >= props.stock) {
            return;
        } else {
            setCount(count + 1)
        }
    }

    const onAdd = () => {
        console.log("Has agregado: " + count + " articulo/s");
    };

    return (
        <>
        <div>
            <h2>{count}</h2>
                <button type="button" className="btn btn-success" onClick = {decrease}>-</button>{'  '}
                <button type="button" className="btn btn-success" onClick = {increase}>+</button>{'  '}
                <button type="button" className="btn btn-success" onClick = {onAdd}>Agregar</button>
        </div>
        </>
    )
}



export default ItemCount
