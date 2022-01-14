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
    WrapperWarranty,
    WarrantyBox,
    TextWarranty,
    InputWarranty,
    WrapperText,
    TextCuento,
    TextButton,
} from './styledSolicitud';
import DatePicker, {registerLocale} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from "date-fns/locale/es"
import Logo from '../images/nota.svg';
import ModalOk from '../components/ModalOk/ModalOk';

registerLocale("es", es);

const Solicitud = () => {

    // Calendario
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());


    return (
        <Container>
            <Wrapper>
                <Hero>
                    <Route to="/">
                        <ArrowLeft/>
                    </Route>
                    <Nota src={Logo} alt=''/>
                    <Title>Generar Solicitud de Garantía</Title>
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
                            <DatePicker
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                dateFormat="dd/MM/yyyy"
                                locale="es"
                                selectsStart
                                startDate={startDate}
                                endDate={endDate}
                                customInput={<InputTag />}
                            />
                        </InputBox>
                        <InputBox>
                            <Details>Fecha fin de contrato:</Details>
                            <DatePicker
                                selected={endDate}
                                onChange={(date) => setEndDate(date)}
                                dateFormat="dd/MM/yyyy"
                                locale="es"
                                selectsEnd
                                startDate={startDate}
                                endDate={endDate}
                                customInput={<InputTag />}
                            />
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
                    <WrapperWarranty>
                        <WarrantyBox>
                            <TextWarranty>VALOR DE LA GARANTÍA:</TextWarranty>
                            <InputWarranty type='text'></InputWarranty>
                        </WarrantyBox>
                    </WrapperWarranty>
                    <WrapperText>
                        <TextCuento to="/cosolicitante">
                            CUENTO CON UN CO-SOLICITANTE
                        </TextCuento>
                    </WrapperText>
                    <ButtonGroup>
                    <ButtonBox>
                            <TextButton>ENVIAR</TextButton>
                            <InputType type="submit"></InputType>
                    </ButtonBox>
                    </ButtonGroup>
                </StyledForm>
                <ModalOk/>
            </Wrapper>
        </Container>
    )
}

export default Solicitud