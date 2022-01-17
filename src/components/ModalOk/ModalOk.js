import React from 'react'
import { 
    Overlay,
    ContainerModal,
    ContainerTitle,
    ContainerText,
    Check,
    Thanks,
    Text,
    SubText,
    ButtonBack,
    TextButton
} from './styledModalOk'

const ModalOk = ({estado, cambiarEstado}) => {
    return (
        <> 
            {estado &&
                <Overlay>
                        <ContainerModal>
                            <ContainerTitle>
                                <Check/>
                                <Thanks>¡Gracias!</Thanks>
                            </ContainerTitle>
                            <ContainerText>
                                <Text>¡Estamos analizando tu solicitud!</Text>
                                <SubText>En las próximas 24hs. nos contactaremos</SubText>
                            </ContainerText>
                            <ButtonBack>
                                <TextButton 
                                to="/">
                                Volver
                                </TextButton>
                            </ButtonBack>
                        </ContainerModal> 
                </Overlay>    
            }  
        </>
    )
}

export default ModalOk