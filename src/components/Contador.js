import React from 'react';
import '../css/miEstilo.css';

function Contador ({numClicks}) {
    return(
        <div className="contadorCss">{numClicks}</div>
    );
}

export default Contador;