import React, {useEffect, useState} from 'react';
import { 
    Container, 
    Wrapper,
    Hero,
    Nota, 
    Title,
    Subtitle,
    RentalContainer, 
    DivButton,
    InputRental,
    TextP,
    ValueContainer,
    ValueDiv,
    ValueP,
    RentalP,
    DivValor,
    DivForm,
    InputValor,
    Money,
    ButtonCalcular,
    ButtonInput,
    TextP1,
    BoxValor,
    ValorResultado,
    CuotasContainer,
    CuotasDiv,
    TextCuotas,
    ResultadoCuotas,
    ResultadoInteres,
    ButtonContainer,
} from './styledSimulador'
import Logo from '../images/calculadora.svg'

const Simulador = () => {
    const [pinta, setPinta] = useState(0.06); 

    const [dato1, setDato1] = useState({dato1:0}); 
    
    const [dato2, setDato2] = useState({dato2:0}); 

    const [duracion, setDuracion] = useState (36);
    
    const [resultado, setResultado] = useState(null);

    const [resultado1, setResultado1] = useState(null);
    const [resultado2, setResultado2] = useState(null);
    const [resultado3, setResultado3] = useState(null);

    // Obtengo el valor del Alquiler
    const handleChangeDato1 = (event) => {
        setDato1({
            ...dato1,
            [event.target.name]: event.target.value
        });
    }
    
    // Obtengo el valor de las expensas
    const handleChangeDato2 = (event) => {
        setDato2({
            ...dato2,
            [event.target.name]: event.target.value
        });
    }

    useEffect(()=>{ 
           setResultado((parseInt(dato1.dato1) + parseInt(dato2.dato2))*pinta*duracion);
    },[dato1,dato2,duracion])

    // Muestro resultado/contado/3/6
    const onclikResultado = () => {
         if(resultado != null && duracion != null){
            const dato1 = resultado * 0.15
            setResultado1(resultado-dato1)
            setResultado2(resultado/3)
            setResultado3(resultado/6)
        }
    }
    
  
    return (
        <Container>
            <Wrapper>
                <Hero>
                    <Nota src={Logo} alt=''/>
                    <Title>Calculá el valor de tu Garantía</Title>
                </Hero>
                    <Subtitle>Calculá el costo de tu Garantía completando todos los campos en el siguiente formulario:</Subtitle>
                <RentalContainer>
                    <RentalP>
                        <TextP>Seleccioná el tipo de alquiler:</TextP>
                    </RentalP>
                    <DivButton>
                        <InputRental type="button" id="vivienda-1" value="VIVIENDA" onClick={()=>setPinta(0.6)}/>
                        <InputRental type="button" id="comercial-1" value="COMERCIAL" onClick={()=>setPinta(0.6)}/>
                    </DivButton>
                </RentalContainer>
                <ValueContainer>
                    <ValueDiv>
                        <ValueP>Valores:</ValueP>
                    </ValueDiv>
                    <ValueDiv>
                    </ValueDiv>
                </ValueContainer>
                <DivValor>
                    <DivForm id="resetform">
                        <Money/>
                        <InputValor type="text" placeholder='Valor del primer mes de alquiler' name="dato1" onChange={handleChangeDato1}/>
                    </DivForm>   
                    <DivForm id="resetform2">
                        <Money/>
                        <InputValor type="text" placeholder='Valor de expensas actuales' name="dato2" onChange={handleChangeDato2}/>
                    </DivForm>
                </DivValor>
                <RentalContainer>
                    <RentalP>
                        <TextP>Seleccioná la duración de tu alquiler:</TextP>
                    </RentalP>
                    <DivButton>
                        <InputRental type="button" value="36 MESES" onClick={()=>setDuracion(36)}/>
                        <InputRental type="button" value="48 MESES" onClick={()=>setDuracion(48)}/>
                        <InputRental type="button" value="60 MESES" onClick={()=>setDuracion(60)}/>
                    </DivButton>
                </RentalContainer>
                <RentalContainer>
                    <ButtonCalcular>
                        <ButtonInput type="button" value="CALCULAR" onClick={()=>onclikResultado()} />  
                    </ButtonCalcular>
                    <ButtonCalcular>
                        <BoxValor>
                            <TextP1>Valor:</TextP1>
                            <ValorResultado>$ {resultado}</ValorResultado>
                        </BoxValor>
                    </ButtonCalcular>
                </RentalContainer>
                <CuotasContainer>
                    <CuotasDiv>
                        <TextCuotas>Contado</TextCuotas>
                        <ResultadoCuotas>$ {resultado1}</ResultadoCuotas>
                        <ResultadoInteres>15% OFF</ResultadoInteres>
                    </CuotasDiv>
                    <CuotasDiv>
                        <TextCuotas>3 cuotas de</TextCuotas>
                        <ResultadoCuotas>$ {resultado2}</ResultadoCuotas>    
                        <ResultadoInteres>SIN INTERÉS</ResultadoInteres>
                    </CuotasDiv>
                    <CuotasDiv>
                        <TextCuotas>6 cuotas de</TextCuotas>
                        <ResultadoCuotas>$ {resultado3}</ResultadoCuotas>
                        <ResultadoInteres>SIN INTERÉS</ResultadoInteres>
                    </CuotasDiv>
                </CuotasContainer>
                <ButtonContainer>

                </ButtonContainer>
            </Wrapper>  
        </Container>
    )
}

export default Simulador