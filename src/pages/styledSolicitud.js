import styled from "styled-components";
import {AiOutlineArrowLeft} from 'react-icons/ai';
import {AiOutlinePaperClip} from 'react-icons/ai';
import { Link } from "react-router-dom";

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
export const Title = styled.h2`
    margin: 20px 0 20px 0;
    margin-left: 20px;
`
export const Subtitle = styled.h4`
    margin: 20px 0 12px 0;
    color: #656565;
`
export const StyledForm = styled.form`
    
` 
export const UserDetails = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
` 
export const InputBox = styled.div`
    margin: 20px 0 12px 0;
    width: calc(100% / 2 - 20px);
` 
export const Details = styled.label`
    margin-bottom: 10px;
    display: block;
`
export const InputTag = styled.input`
    height: 45px;
    width: 100%;
    border-radius: 54px;
    border: 1px solid rgba(1, 87, 154, 0.31);
    padding-left: 15px;
    outline: none;
`
export const Nota = styled.img`
    width: 2rem;
`
export const Route = styled(Link)`
    width: 30px;
    margin-top: 25px;
`
export const ArrowLeft = styled(AiOutlineArrowLeft)`
    display: block;
    fill: #57C1E3;
    font-size: 20px;
`
export const ButtonGroup = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly; 
    margin: 25px 0 25px 0;  
`
export const ButtonBox = styled.div`
    padding: 8px;
    width: 215px;
    background: #0C5B9E;
    border-radius: 35px;
    position: relative;
    height: 40px;
`
export const InputType = styled.input`
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
`
export const Text = styled.p`
    color: #fff;
    margin-left: 30px;
    text-align: initial;
    font-size: 12px;
`
export const Clip = styled(AiOutlinePaperClip)`
    font-size: 25px;
    position: absolute;
    color: #fff;
`
export const WrapperWarranty = styled.div`
    display: flex;
    justify-content: center; 
`
export const WarrantyBox = styled.div`
    background: #57C1E3;
    border-radius: 35px;
    position: relative;
    margin-top: 15px;
`
export const TextWarranty = styled.span`
    color: #fff;
    margin-left: 25px;
    padding-right: 10px;  
`
export const InputWarranty = styled.input`
    height: 45px;
    border-radius: 54px;
    border: 1px solid rgba(1,87,154,0.31);
    padding-left: 15px;
    outline: none;
`
export const WrapperText = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 15px; 
`
export const TextCuento = styled(Link)`
    color: #57C1E3;
    text-align: center;
`
export const TextButton = styled.p`
    color: #fff;
    text-align: center;
`