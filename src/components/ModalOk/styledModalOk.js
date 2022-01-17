import styled from 'styled-components'
import {BiCheckCircle} from 'react-icons/bi';
import { Link } from "react-router-dom";

export const Overlay = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgb(255 255 255 / 50%); 
    padding: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(7px);
`
export const ContainerModal = styled.div`
    /* width: 500px;
    min-height: 100px;
    background: #fff;
    border-radius: 10px; */
`
export const ContainerText = styled.div`
    width: 500px;
    min-height: 100px;
    background: #fff;
    border-radius: 10px;
    position: relative;
    box-shadow: 0px 0px 14px 2px rgb(75 108 161 / 42%);
    padding: 20px;
`
export const ContainerTitle = styled.div`
    display: flex;
    justify-content: center;
`
export const Check = styled(BiCheckCircle)`
    fill: #335998;
    font-size: 45px;
`
export const Thanks = styled.p`
    font-size: 30px;
    line-height: 40px;
    text-align: center;
    font-weight: bold;
    margin-left: 10px;
    margin-bottom: 20px;
`
export const Text = styled.p`
    font-size: 20px;
    line-height: 40px;
    text-align: center;
    font-weight: bold;
`
export const SubText = styled.p`
    font-size: 20px;
    line-height: 40px;
    text-align: center;
`

export const ButtonBack = styled.div`
    color: #fff;
    text-align: center;
    display: flex;
    justify-content: center;
    position: relative;
    top: -15px;
`

export const TextButton = styled(Link)`
    background: #08589D;
    border-radius: 9px;
    width: 25%;
    padding: 10px;
    text-decoration: none;   
    color: #fff;
`