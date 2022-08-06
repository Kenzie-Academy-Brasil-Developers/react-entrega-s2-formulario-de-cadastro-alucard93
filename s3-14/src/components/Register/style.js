import styled from "styled-components";

export const StyledRegister = styled.main`
    max-height: 100%;
    width: 100%; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    
    
    header{
        display: flex;
        justify-content: center;
        height: 127px;
        width: 100%;
        /* border: 1px solid white; */
    }

    .container__logo{
        display: flex;
        justify-content: space-between;
        width: 370px;
    }
    .container__img{
        width: 98px;
    }

    .btn-back{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 50px;
        padding: 0px 16.2426px;
        gap: 10.15px;
        background: #212529;
        border-radius: 4px;
        width: 79.54px;
        height: 31.95px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 9.59437px;
        line-height: 23px;
        text-align: center;
        color: #F8F9FA;
    }

    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 42px 22px;
        gap: 22px;
        width: 90%;
        max-width: 369px;
        background: #212529;
        box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
        border-radius: 3.20867px;
        margin: 0 auto;
    }

    h2{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 28px;
        color: #F8F9FA;
    }

    .container__text{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 22px;
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
        font-size: 12.182px;
        line-height: 0px;
        color: #F8F9FA;
    }
    input {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0px 16.2426px;
        gap: 10.15px;
        background: #343B41;
        border: 1.2182px solid #343B41;
        border-radius: 4px;
        height: 48px;
        width: 100%;
        margin-top: 22px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 16.2426px;
        line-height: 26px;
        color: #868E96;
    }
    .error {
        font-size: 12px;
        color: red;
    }
    .btn-login{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0px 22.3336px;
        gap: 10.15px;
        background: #FF577F;
        border: 1.2182px solid #FF577F;
        border-radius: 4.06066px;
        width: 90%;
        height: 38.5px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 12.8347px;
        line-height: 21px;
        color: #FFFFFF;
    }

    .container__text{
        font-style: normal;
        font-weight: 600;
        font-size: 9.62602px;
        line-height: 14px;
        color: #868E96;
    }

    .btn-register {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0px 22.3336px;
        gap: 10.15px;
        background: #868E96;
        border: 1.2182px solid #868E96;
        border-radius: 4px;
        font-style: normal;
        font-weight: 500;
        font-size: 12.8347px;
        line-height: 21px;
        color: #F8F9FA;
        width: 90%;
        height: 38.5px;
    }
    select {
        height: 48px;
        width: 100%;
        border-radius: 3.208672046661377px;
        padding: 0px, 13px, 0px, 13px;
        padding: 0px 10.3336px; 
        margin-top: 20px;
        background: #343B41;
        color: #868E96;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 16.2426px;
        line-height: 26px;
        gap: 10.15px;
    }

    .btn-register {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0px 22.3336px;
        gap: 10.15px;
        background: #59323F;
        border: 1.2182px solid #59323F;
        border-radius: 4px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 26px;
        color: #FFFFFF;
    }
`