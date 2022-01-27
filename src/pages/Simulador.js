import React, {useEffect, useState, useRef} from 'react';
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
} from './styledSimulador'
import Logo from '../images/calculadora.svg'

const Simulador = () => {
    const [pinta, setPinta] = useState(0.06); 

    const [dato1, setDato1] = useState({dato1:''}); 
    const [dato2, setDato2] = useState({dato2:''}); 

    const [duracion, setDuracion] = useState (36);
    
    const [resultado, setResultado] = useState(null);
    const [resultado1, setResultado1] = useState(null);
    const [resultado2, setResultado2] = useState(null);
    const [resultado3, setResultado3] = useState(null);


    //

    // Capturo el valor del alquiler
    const handleChangeDato1 = (e) => {
        setDato1({...dato1,
            [e.target.name]: e.target.value,});
    }
    
    // Capturo el valor de las expensas
    const handleChangeDato2 = (e) => {
        setDato2({
            ...dato2,
            [e.target.name]: e.target.value,});
    }

    // Actualizo el valor del resultado
    useEffect (()=>{
        // Al dato1 y dato2 le saco los puntos para realizar la operacion matematica
        let formatDato1 = (dato1.dato1);
        let format1= formatDato1.replace(/\./g, '') || 0;
    
        let formatDato2 = (dato2.dato2);
        let format2= formatDato2.replace(/\./g, '') || 0;

        setResultado((parseInt(format1) + parseInt(format2))*pinta*duracion)

    },[dato1, dato2, duracion])

    // Actualizo la cuenta en cuotas
    useEffect(() =>{
        if(resultado != null && duracion != null){
            const dato1 = resultado * 0.15
            setResultado1(resultado-dato1)
            setResultado2(resultado/3)
            setResultado3(resultado/6)
        }
    },[resultado, duracion, []]);        

    const valor = useRef(null);
    const contado = useRef(null);
    const cuota3 = useRef(null);
    const cuota6 = useRef(null);
    
    // Muestro resultado/contado/3/6
    const onclikResultado = () => {
        valor.current.style.display = 'block';
        contado.current.style.display = 'block';
        cuota3.current.style.display = 'block';
        cuota6.current.style.display = 'block';
    }


    // Formateo resultado a pesos
    function formatNumber (resultado) {
        return new Intl.NumberFormat().format(resultado)
    }

    // Convierto el dato en entrada de Moneda 
    const currencyMask = (e) => {
        let value = e.target.value;
        value = value.replace(/\D/g, "");
        value = value.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1.');
        value = value.split('').reverse().join('').replace(/^[\.]/,'');
        e.target.value= value;
        return e;
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
                        <InputRental type="button" value="VIVIENDA" onClick={()=>setPinta(null)}/>
                        <InputRental type="button" value="COMERCIAL" onClick={()=>setPinta(null)}/>
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
                        <InputValor type="text" placeholder='Valor del primer mes de alquiler' name="dato1" onChange={(e) =>handleChangeDato1(currencyMask(e))}/>
                    </DivForm>   
                    <DivForm id="resetform2">
                        <Money/>
                        <InputValor type="text" placeholder='Valor de expensas actuales' name="dato2" onChange={(e)=>handleChangeDato2(currencyMask(e))}/>
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
                        <ButtonInput type="button" value="CALCULAR" onClick={onclikResultado} />  
                    </ButtonCalcular>
                    <ButtonCalcular>
                        <BoxValor>
                            <TextP1>Valor:</TextP1>
                            <ValorResultado ref={valor}>$ {formatNumber(resultado)}</ValorResultado>
                        </BoxValor>
                    </ButtonCalcular>
                </RentalContainer>
                <CuotasContainer>
                    <CuotasDiv>
                        <TextCuotas>Contado</TextCuotas>
                        <ResultadoCuotas ref={contado}>$ {formatNumber(resultado1)}</ResultadoCuotas>
                        <ResultadoInteres>15% OFF</ResultadoInteres>
                    </CuotasDiv>
                    <CuotasDiv> 
                        <TextCuotas>3 cuotas de</TextCuotas>
                        <ResultadoCuotas  ref={cuota3}> $ {formatNumber(resultado2)}</ResultadoCuotas>    
                        <ResultadoInteres>SIN INTERÉS</ResultadoInteres>
                    </CuotasDiv>
                    <CuotasDiv>
                        <TextCuotas>6 cuotas de</TextCuotas>
                        <ResultadoCuotas ref={cuota6}>$ {formatNumber(resultado3)}</ResultadoCuotas>
                        <ResultadoInteres>SIN INTERÉS</ResultadoInteres>
                    </CuotasDiv>
                </CuotasContainer>
            </Wrapper>  
        </Container>
    )
}

export default Simulador