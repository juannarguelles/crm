import React from 'react'
import { 
    Container,
    Wrapper,
    Typography,
    Title,
    Nota,
    Button,
    GroupButton,
    BoxButton,
} from './styledHome'
import Img from '../images/nota.svg';
import Calc from '../images/calculadora.svg';
import Est from '../images/estado.svg';

const home = () => {
    return (
        <Container>
            <Wrapper> 
                <Title>
                    <Nota src={Img} alt='' />
                    <Typography>¿Qué necesitas?</Typography>
                </Title>
                <GroupButton>
                    <BoxButton to="/simulador">
                        <Button>
                            <Nota src={Calc} alt=''/>
                            Simular el valor de mis garantías
                        </Button>
                    </BoxButton>
                    <BoxButton to="/solicitud">
                        <Button>
                            <Nota src={Img} alt=''/>
                            Generar solicitud de garantía
                        </Button>
                    </BoxButton>
                    <BoxButton to="/estado">
                        <Button>
                            <Nota src={Est} alt=''/>
                            Ver estado de solicitudes
                        </Button>
                    </BoxButton>
                </GroupButton>
            </Wrapper>
        </Container>
    )
}
 
export default home