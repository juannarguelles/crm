import React from 'react'
import { 
    Container,
    Wrapper,
    Typography,
    Title,
    ContainerNota,
    Nota,
    Button,
    GroupButton,
    BoxButton,
    TypographyButton,
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
                            <ContainerNota>
                                <Nota src={Calc} alt=''/>
                            </ContainerNota>
                            <TypographyButton>Simular el valor de mis garantías</TypographyButton>
                        </Button>
                    </BoxButton>
                    <BoxButton to="/solicitud">
                        <Button>
                            <ContainerNota>
                                <Nota src={Img} alt=''/>
                            </ContainerNota>
                            <TypographyButton>Generar solicitud de garantía</TypographyButton>
                        </Button>
                    </BoxButton>
                    <BoxButton to="/estado">
                        <Button>
                            <ContainerNota>
                                <Nota src={Est} alt=''/>
                            </ContainerNota>
                            <TypographyButton>Ver estado de solicitudes</TypographyButton>
                        </Button>
                    </BoxButton>
                </GroupButton>
            </Wrapper>
        </Container>
    )
}
 
export default home