import styled from 'styled-components'

export const Overlay = styled.div`
    width: 100vh;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0,0,0,.5);
    padding: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const ContainerModal = styled.div`
    width: 500px;
    min-height: 100px;
    background: #fff;
    border-radius: 5px;
    position: relative;
    border-radius: 5px;
    box-shadow: rgba(100,100,111, 0.2) 0px 7px 29px 0px;
    padding: 20px;
`