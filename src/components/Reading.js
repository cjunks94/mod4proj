import React from 'react';

import TarotImg from './TarotImg';

const Reading = ({reading}) => {
    return (
        <div className="reading scrolling-wrapper">
            <button>X</button>
            {reading.map( reading_card => < TarotImg card={reading_card} />)} 
        </div>
    )
};

export default Reading;