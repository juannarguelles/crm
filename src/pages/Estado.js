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
        { fecha: "1/12/2021", numero: '00.000.000', nombre: "Nombre/s y Apellido/s", estado: "PENDIENTE DE PAGO", },
        { fecha: "1/12/2021", numero: '00.000.000', nombre: "Nombre/s y Apellido/s", estado: "RECHAZADA", },
        { fecha: "1/12/2021", numero: '00.000.000', nombre: "Nombre/s y Apellido/s", estado: "APROBADO", }
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
                    <Column>
                        <HeaderCell>FECHA</HeaderCell>
                        <Cell dataKey="fecha" />
                    </Column>
                    <Column>
                        <HeaderCell>N° DE SOLICITUD</HeaderCell>
                        <Cell dataKey="numero" />
                    </Column>
                    <Column>
                        <HeaderCell>NOPMBRE DEL SOLICITANTE</HeaderCell>
                        <Cell dataKey="nombre" />
                    </Column>
                    <Column>
                        <HeaderCell>ESTADOS</HeaderCell>
                        <Cell dataKey="estado" />
                    </Column> 
                </Table>
                
            </Wrapper>
        </Container>
    )
}

export default Estado