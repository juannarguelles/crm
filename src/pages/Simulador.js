import React from 'react'
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
    InputValor,
} from './styledSimulador'
import Logo from '../images/calculadora.svg'

const Simulador = () => {
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
                        <InputRental type="button" value="VIVIENDA"/>
                        <InputRental type="button" value="COMERCIAL"/>
                    </DivButton>
                </RentalContainer>
                <ValueContainer>
                    <ValueDiv>
                        <ValueP>Valores:</ValueP>
                    </ValueDiv>
                    <DivValor>
                        <InputValor type="text"/>    
                        <InputValor type="text"/>
                    </DivValor>
                </ValueContainer>
            </Wrapper>
        </Container>
    )
}

export default Simulador