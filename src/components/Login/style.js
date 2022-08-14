import styled from "styled-components";

export const StyledLogin = styled.main`
    max-height: 100%;
    width: 100%; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: .625rem;
    margin-top: 5rem;

    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2.625rem 1.375rem;
        gap: 1.375rem;
        width: 90%;
        max-width: 23.0625rem;
        height: 25.1875rem;
        background: #212529;
        box-shadow: 0rem .2005rem 2.0054rem -0.5014rem rgba(0, 0, 0, 0.25);
        border-radius: .2005rem;
        margin: 0 auto;
    }

    h2{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: .9024rem;
        line-height: 1.375rem;
        color: #F8F9FA;
    }

    .container__input{
       display: flex;
       flex-direction: column;
       width: 90%;
    }

    label{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: .6108rem;
        line-height: 0rem;
        color: #F8F9FA;
    }
    input {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0rem .8143rem;
        gap: .5088rem;
        width: 100%;
        margin-top: 1.0625rem;
        height: 2.4063rem;
        background: #343B41;
        border: .0611rem solid #F8F9FA;
        border-radius: .2005rem;
        color: #F8F9FA;
    }

    .btn-login{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0rem 1.3959rem;
        gap: .6344rem;
        background: #FF577F;
        border: .0761rem solid #FF577F;
        border-radius: .2538rem;
        width: 90%;
        height: 2.4063rem;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: .8022rem;
        line-height: 1.3125rem;
        color: #FFFFFF;
        cursor: pointer;
    }

    .container__text{
        font-style: normal;
        font-weight: 600;
        font-size: .6016rem;
        line-height: .875rem;
        color: #868E96;
    }

    .btn-register {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0rem 1.3959rem;
        gap: .6344rem;
        background: #868E96;
        border: .0761rem solid #868E96;
        border-radius: .25rem;
        font-style: normal;
        font-weight: 500;
        font-size: .8022rem;
        line-height: 1.3125rem;
        color: #F8F9FA;
        width: 90%;
        height: 2.4063rem;
        cursor: pointer;
    }
`