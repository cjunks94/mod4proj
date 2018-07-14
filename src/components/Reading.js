import React from 'react';

import TarotImg from './TarotImg';

const Reading = ({reading, handleClick}) => {

    return (
        <div id={reading.reading_id} className="reading scrolling-wrapper">
            <button onClick={handleClick}>X</button>
            {reading.cards && reading.cards.map( reading_card => < TarotImg card={reading_card} />)} 
        </div>
    )
};

export default Reading;