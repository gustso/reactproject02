import React from 'react';
import {Button} from 'react-bootstrap';

function Boton({texto, esBotonDeClick, manejarClick}){
    return (
        <Button 
        variant={esBotonDeClick? 'primary':'success'}
        onClick={manejarClick}>
        {texto}</Button>
    );
}
export default Boton;