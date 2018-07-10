import React from 'react';

const TarotImg = (props) => {
    const {image_url, name, id} = props.card
    return <img src={image_url} alt={name} id={id} onClick={props.handleClick} />
};

export default TarotImg;