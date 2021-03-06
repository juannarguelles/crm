import React from 'react'
import {
    Container,
    Wrapper,
    Hero,
    Hero1,
    Hero2,
    Search,
    IcoSearch,
    Route,
    ArrowLeft,
    Nota,
    Title,
} from './styledEstado';
import Logo from '../images/calendario.svg';
import 'rsuite/dist/rsuite.min.css';
import { Table, Column, HeaderCell, Cell } from 'rsuite-table';

const Estado = () => {
    const dataList = [
        { fecha: "1/12/2021", numero: '00.000.000', nombre: "Juan Rodriguez", estado: "PENDIENTE DE PAGO", },
        { fecha: "3/09/2015", numero: '00.000.000', nombre: "Ivan Machado", estado: "RECHAZADA", },
        { fecha: "6/05/2001", numero: '00.000.000', nombre: "Ricardo Gomez", estado: "APROBADO", }
      ];

    return (
        <Container>
            <Wrapper>
                <Hero>
                    <Hero1>
                        <Route to="/">
                            <ArrowLeft/>
                        </Route>
                        <Nota src={Logo} alt=''/>
                        <Title>Estado de solicitudes de Garantías</Title>
                    </Hero1>
                    <Hero2>
                        <Search type="search" placeholder='Buscar por N° de solicitud'/>
                        <IcoSearch/>
                    </Hero2>
                </Hero>

                <Table data={dataList}>
                    <Column width={80} style= {{color:"#01579A"}}>
                        <HeaderCell>FECHA</HeaderCell>
                        <Cell dataKey="fecha" />
                    </Column>
                    <Column width={110} style= {{color:"#01579A"}}>
                        <HeaderCell>N° DE SOLICITUD</HeaderCell>
                        <Cell dataKey="numero" />
                    </Column>
                    <Column width={300} style= {{color:"#01579A"}}>
                        <HeaderCell>NOMBRE DEL SOLICITANTE</HeaderCell>
                        <Cell dataKey="nombre" />
                    </Column>
                    <Column width={500} style= {{color:"#01579A"}}>
                        <HeaderCell>ESTADO</HeaderCell>
                        <Cell dataKey='estado'/>
                    </Column>
                </Table>               
            </Wrapper>  
        </Container>
    )
}

export default Estado