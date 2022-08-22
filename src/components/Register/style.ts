import styled from "styled-components";

export const StyledRegister = styled.main`
    max-height: 100%;
    width: 100%; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: .625rem;
    
    
    header{
        display: flex;
        justify-content: center;
        height: 7.9375rem;
        width: 100%;
        /* border: .0625rem solid white; */
    }

    .container__logo{
        display: flex;
        justify-content: space-between;
        width: 23.125rem;
    }
    .container__img{
        width: 6.125rem;
    }

    .btn-back{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 3.125rem;
        padding: 0rem 1.0152rem;
        gap: .6344rem;
        background: #212529;
        border-radius: .25rem;
        width: 4.9713rem;
        height: 1.9969rem;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: .5996rem;
        line-height: 1.4375rem;
        text-align: center;
        color: #F8F9FA;
        cursor: pointer;
    }

    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2.625rem 1.375rem;
        gap: 1.375rem;
        width: 90%;
        max-width: 23.0625rem;
        background: #212529;
        box-shadow: 0rem .2005rem 2.0054rem -0.5014rem rgba(0, 0, 0, 0.25);
        border-radius: .2005rem;
        margin: 0 auto;
    }

    h2{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 1.125rem;
        line-height: 1.75rem;
        color: #F8F9FA;
    }

    .container__text{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: .75rem;
        line-height: 1.375rem;
        color: #868E96;
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
        font-size: .7614rem;
        line-height: 0rem;
        color: #F8F9FA;
    }
    input {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0rem 1.0152rem;
        gap: .6344rem;
        background: #343B41;
        border: .0761rem solid #343B41;
        border-radius: .25rem;
        height: 3rem;
        width: 100%;
        margin-top: 1.375rem;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 1.0152rem;
        line-height: 1.625rem;
        color: #868E96;
    }
    .error {
        font-size: .75rem;
        color: red;
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
        cursor: pointer
    }
    select {
        height: 3rem;
        width: 100%;
        border-radius: .2005rem;
        padding: 0rem, .8125rem, 0rem, .8125rem;
        padding: 0rem .6459rem; 
        margin-top: 1.25rem;
        background: #343B41;
        color: #868E96;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 1.0152rem;
        line-height: 1.625rem;
        gap: .6344rem;
    }

    .btn-register {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0rem 1.3959rem;
        gap: .6344rem;
        background: #59323F;
        border: .0761rem solid #59323F;
        border-radius: .25rem;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 1rem;
        line-height: 1.625rem;
        color: #FFFFFF;
    }
`