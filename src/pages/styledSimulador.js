import styled from "styled-components";
import {MdAttachMoney} from 'react-icons/md';

export const Container = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   align-content: center;
   background: #FFF;
   color: #335998;
   margin-top: 75px;
`

export const Wrapper = styled.div`
    max-width: 900px;
    background: #fff;
    padding: 25px 30px;
    border-radius: 25px;
    -webkit-box-shadow:  1px 2px 15px 9px rgba(3, 87, 154, 0.07);
`
export const Hero = styled.div`
    display: flex;
`
export const Nota = styled.img`
    width: 2rem;
`
export const Title = styled.h2`
    margin: 20px 0 20px 0;
    margin-left: 20px;
    font-size: 45px;
`
export const Subtitle = styled.p`
    margin: 20px 0 12px 0;
    color: #656565;
    font-size: 17px;
`
export const RentalContainer = styled.div`
    display: flex;
    padding: 20px 0px 0px 10px;
`
export const RentalP = styled.div`
    width: 50%;
`
export const TextP = styled.p`
    margin-top: 10px;
    color: #656565;
    font-size: 18px;
`
export const DivButton = styled.div`
    width: 50%;
    display: flex;
    column-gap: 1.5rem;
`
export const InputRental = styled.input`
    border-radius: 50px;
    border: 1.2px solid #1668A9;
    width: 143px;
    height: 40px;
    left: 973px;
    top: 521px;
    box-sizing: border-box;
    &:hover{
        background: rgba(3, 87, 154, 0.2);
    }
`
export const ValueContainer = styled.div`
    padding: 10px;
`
export const ValueDiv = styled.div`
    width: 50%;
`
export const ValueP = styled.p`
    color: #656565;
    font-size: 18px;
`
export const DivValor = styled.div`
    width: 100%;
    display: flex;s
`
export const DivForm = styled.form`
    width: 50%;
`
export const InputValor = styled.input`
    margin: 0;
    background: #F2F2F5;
    border-radius: 9px;
    border: none;
    width: 95%;
    height: 56px;
    font-size: 18px;
    padding-left: 40px;
    color: #9b9b9b;
    ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    };
`
export const Money = styled(MdAttachMoney)`
    font-size: 25px;
    position: absolute;
    margin-top: 15px;
    margin-left: 10px;
    color: #9b9b9b;
`
export const ButtonCalcular = styled.div`
    width: 100%;
    margin-top: 20px;
`
export const ButtonInput = styled.input`
    font-size: 18px;
    font-weight: 500;
    background-color: #57C1E3;
    border-radius: 30px 30px 30px 30px;
    color: #fff;
    border: none;
    padding: 18px 35px 18px 35px;
`

export const BoxValor = styled.div`
    display: flex;
    justify-content: flex-start;
    background-color: #EFF6FF;
    border-radius: 10px;
    padding: 25px;
`
export const TextP1 = styled.p`
    margin-top: 10px;
    font-size: 30px;
`

export const ValorResultado = styled.span`
    margin-top: 5px;
    color: #656565;
    font-size: 35px;
    padding-left: 10px;
    display: none;
`

export const CuotasContainer = styled.div`
    display: flex;
    padding: 10px;
    border-style: solid;
    border-width: 2px 2px 2px 2px;
    border-color: #E0F0FD;
    transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
    margin-top: 50px;
    margin-bottom: 0px;
    padding: 30px 30px 30px 30px;
    border-radius: 10px 10px 10px 10px;
`

export const CuotasDiv = styled.div`
    width: 33.3%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`
export const TextCuotas = styled.div`
    text-align: center;
    color: #03579A;
    font-size: 20px;
    font-weight: 600;
    line-height: 1em;
    margin-bottom: 20px;
`
export const ResultadoCuotas = styled.div`
    font-size: 28px;
    color: #858585;
    margin-bottom: 20px;
`
export const ResultadoInteres = styled.div`
    margin: 0px 50px 0px 50px;
    padding: 5px 5px 6px 5px;
    background-color: #03579A;
    border-radius: 5px 5px 5px 5px;
    color: #fff;
    width: 50%;
    text-align: center;
`

export const ButtonContainer = styled.div`
    display: flex;
`
