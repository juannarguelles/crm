import React from 'react'
import { 
    Container,
    Wrapper,
    Hero,
    Title,
    Subtitle,
    StyledForm,
    UserDetails,
    InputBox,
    InputTag,
    Details,
    Submit,
} from './styledSolicitud';
import { Link } from 'react-router-dom'

const Solicitud = () => {
    
    return (
        <Container>
            <Wrapper>
                <Hero>
                    <Link to="/">
                        <button> volver </button>
                    </Link>
                    <Title>Generar solicitud de Garantía</Title>
                </Hero>
                    <Subtitle>Datos del inquilino:</Subtitle>
                <StyledForm>
                    <UserDetails>
                        <InputBox>
                            <Details>Nombre/s:</Details>
                            <InputTag type='text' placeholder=''></InputTag>
                        </InputBox>
                        <InputBox>
                            <Details>Apellido/s:</Details>
                            <InputTag type='text' placeholder=''></InputTag>
                        </InputBox>
                        <InputBox>
                            <Details>Correo Electrónico:</Details>
                            <InputTag type='text' placeholder=''></InputTag>
                        </InputBox>
                        <InputBox>
                            <Details>DNI:</Details>
                            <InputTag type='text' placeholder=''></InputTag>
                        </InputBox>
                        <InputBox>
                            <Details>Teléfono de contacto:</Details>
                            <InputTag type='text' placeholder=''></InputTag>
                        </InputBox>
                        <InputBox>
                            <Details>Domicilio de alquiler:</Details>
                            <InputTag type='text' placeholder=''></InputTag>
                        </InputBox>
                        <InputBox>
                            <Details>Fecha de inicio del contrato:</Details>
                            <InputTag type='text' placeholder=''></InputTag>
                        </InputBox>
                        <InputBox>
                            <Details>Fecha fin de contrato:</Details>
                            <InputTag type='text' placeholder=''></InputTag>
                        </InputBox>
                    </UserDetails>
                    <Submit>
                        <input type='submit' value='Enviar'/>
                    </Submit>
                </StyledForm>
            </Wrapper>
        </Container>
    )
}

export default Solicitud