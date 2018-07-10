import React from 'react';

const Card = (props) => {
    const {name, full_meaning, reverse, up } = props.card
    return (
        <div className="card">
            <div className="card body">
                <h4>{name}</h4>
                <p>{full_meaning}</p>
                <ul>
                    <li>Upright Card: {up}</li>
                    <li>Reverse Card: {reverse}</li>
                </ul>
            </div>
        </div>
    )
};

export default Card;