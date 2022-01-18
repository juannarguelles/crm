import styled from "styled-components";
import {AiOutlineArrowLeft} from 'react-icons/ai';
import {FiSearch} from 'react-icons/fi'
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
    max-width: 1100px;
    width: 100%;
    background: #fff;
    padding: 25px 30px;
    border-radius: 25px;
    -webkit-box-shadow:  1px 2px 15px 9px rgba(3, 87, 154, 0.07);
`
export const Hero = styled.div`
    display: flex;
    justify-content: space-between;
`
export const Hero1 = styled.div`
    display: flex;
    align-items: center;
`
export const Hero2 = styled.div`
    position: relative;
	width: 271px;
    display: flex;
    align-items: center;c
`
export const Search = styled.input`
    padding: 8px 15px 10px 35px;
    width: 210px;
    border: 1px solid #01579A;
    border-radius: 30px;
`
export const ButtonSearch = styled.button`
    border: 1px solid #00B4CC;
    background: #00B4CC;
    text-align: center;
    color: #01579A;
    border-radius: 5px 0 0 5px;
    cursor: pointer;
    font-size: 20px;
`
export const IcoSearch = styled(FiSearch)`
    color: #01579A;
    width: 20px;
    height: 20px;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    position: absolute;
`

export const Route = styled(Link)`
    width: 30px;
`
export const ArrowLeft = styled(AiOutlineArrowLeft)`
    display: block;
    fill: #57C1E3;
    font-size: 20px;
`
export const Nota = styled.img`
    width: 2rem;
`
export const Title = styled.h2`
    margin: 20px 0 20px 0;
    margin-left: 20px;
`
