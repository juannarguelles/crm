import styled from "styled-components";

export const Container = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   align-content: center;
   background: #FFF;
   height: 100vh;
   color: #335998;
`
export const Wrapper = styled.div`
    border: 1px solid rgba(1, 87, 154, 0.31);
    max-width: 300px;
    background: #fff;
    padding: 25px 30px;
    border-radius: 25px;
    -webkit-box-shadow:  1px 2px 15px 9px rgba(3, 87, 154, 0.07);
`
export const Title = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
`
export const Nota = styled.img`
    width: 2rem;
`
export const Typography = styled.h1`
    font-weight: bold;
    font-size: 1.5rem;
`
export const BoxButton = styled.div`

` 
export const Button = styled.button`
    background-color: #F9F9F9;
	border-radius:28px;
	display:inline-block;
	cursor: pointer;
	color:#3579AE;
	font-family:Arial;
	font-size:17px;
	padding:16px 31px;
	text-decoration:none;
    border: 1px solid rgba(1, 87, 154, 0.31);
    &:hover {
        background-color: #3579AE;
        color: #F9F9F9;
    }
`