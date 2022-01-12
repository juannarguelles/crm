import React from 'react'
import { 
    Container,
    Wrapper,
    Typography,
    Title,
    Nota,
    Button,
    BoxButton
} from './styledHome'
import Img from '../images/nota.svg'
import { Link } from 'react-router-dom'


const home = () => {
    return (
        <Container>
            <Wrapper> 
                <Title>
                    <Nota src={Img} alt='' />
                    <Typography>¿Qué necesitas?</Typography>
                </Title>
                <BoxButton>
                    <Link to="/simulador">
                        <Button>Simular el valor de mis garantías</Button>
                    </Link>
                    <Link to="/solicitud">
                        <Button>Generar solicitud de garantía</Button>
                    </Link>
                    <Link to="/estado">
                        <Button>Ver estado de solicitudes</Button>
                    </Link>
                </BoxButton>
            </Wrapper>
        </Container>
    )
}
 
export default home