import React, {useState} from 'react';
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
    Route,
    Nota,
    ArrowLeft,
    ButtonGroup,
    ButtonBox,
    InputType,
    Text,
    Clip,
    TextButton,
} from './styledSolicitud';
import Logo from '../images/nota.svg';
import ModalOk from '../components/ModalOk/ModalOk';

const CoSolicitante = () => {

    // Modal
    const [stateModal, changeStateModal] = useState(false); 

    return (
        <Container>
            <Wrapper>
                <Hero>
                    <Route to="/solicitud">
                        <ArrowLeft/>
                    </Route>
                    <Nota src={Logo} alt=''/>
                    <Title>Generar Solicitud de Garantía</Title>
                </Hero>
                    <Subtitle>Datos del CO-SOLICITANTE:</Subtitle>
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
                            <Details>Domicilio:</Details>
                            <InputTag type='text' placeholder=''></InputTag>
                        </InputBox>
                    </UserDetails>
                    <ButtonGroup>
                        <ButtonBox>
                            <Clip/>
                            <Text>ADJUNTAR DNI FRENTE</Text>
                            <InputType type="file"></InputType>
                        </ButtonBox>
                        <ButtonBox>
                            <Clip/>
                            <Text>ADJUNTAR DNI DORSO</Text>
                            <InputType type="file"></InputType>
                        </ButtonBox>
                        <ButtonBox>
                            <Clip/>
                            <Text>ADJUNTAR DATOS DE RESPALDO</Text>
                            <InputType type="file"></InputType>
                        </ButtonBox>
                    </ButtonGroup>
                    <ButtonGroup>
                    <ButtonBox>
                            <TextButton>ENVIAR</TextButton>
                            <InputType 
                                // type="submit"
                                onClick={()=> changeStateModal(!stateModal)}
                            >
                            </InputType>
                    </ButtonBox>
                    </ButtonGroup>
                </StyledForm>
                <ModalOk 
                   estado = {stateModal}
                   cambiarEstado = {changeStateModal}
                />
            </Wrapper>
        </Container>
    )
}

export default CoSolicitante
