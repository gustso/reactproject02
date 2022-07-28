import { Container } from "react-bootstrap";
import Boton from "./components/Boton";
import Contador from "./components/Contador";
import { useState } from "react";


function App(){

    const [numClicks, setNumClicks] = useState(0); 

    const aumentarContador = () => {        
        setNumClicks(numClicks + 1);
        console.log("clic");
    };

    const reiniciarContador = () => {
        setNumClicks(0);
        console.log("reiniciar");
    };

    return (
        <Container>
            <Contador numClicks={numClicks}></Contador>
            <Boton texto="Click"
            esBotonDeClick={true}
            manejarClick={aumentarContador}
            />
            <Boton texto="Reiniciar"
            esBotonDeClick={false}
            manejarClick={reiniciarContador}/>
        </Container>        
    );    
}

export default App;