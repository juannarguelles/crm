import styled from "styled-components"
import { Link } from 'react-router-dom'

export const Container = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   align-content: center;
   background: #FFF;
   color: #335998;
   margin-top: 190px;
`
export const Wrapper = styled.div`
    max-width: 500px;
    background: #fff;
    padding: 25px 30px;
    border-radius: 25px;
    -webkit-box-shadow:  1px 2px 15px 9px rgba(3, 87, 154, 0.07);
`
export const Title = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 16px 31px;
`
export const ContainerNota = styled.div`
    height:100px;
    width:100px;
    background:#FFF;
    -moz-border-radius:50px;
    -webkit-border-radius:50px;
    border-radius:50px;
`

export const Nota = styled.img`
    
`
export const Typography = styled.h1`
    font-size: 1.5rem;
`
export const GroupButton = styled.div`
    justify-content: center;
`
export const TypographyButton = styled.h2`
    font-size: 20px;
`
export const BoxButton = styled(Link)`
    text-decoration: none;
`
export const Button = styled.button`
    background-color: #F9F9F9;
	border-radius: 80px;
	display:inline-block;
	cursor: pointer;
	color:#3579AE;
	font-size:17px;
	padding: 30px 30px;
    border: 1px solid rgba(1, 87, 154, 0.31);
    width: 100%;
    margin: 20px 0 12px 0;
    display: flex;
    align-items: center;
    &:hover {
        background-color: #3579AE;
        color: #F9F9F9;
    }
`