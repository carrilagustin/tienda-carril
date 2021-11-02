import React from 'react'
import './ItemListContainer.css'


function ItemListContainer(props) {
    return (
        <>
        <div className="card-position">
            <div className="card" style={{width: "18rem", textAlign: "center"}}>
                <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{props.greetings}</h5>
                        <p className="card-text">{props.textExample}</p>
                        
                    </div>
            </div>   
        </div>
        </>
    )
}

export default ItemListContainer
