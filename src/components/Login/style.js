import styled from "styled-components";

export const StyledLogin = styled.main`
    max-height: 100%;
    width: 100%; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-top: 20px;
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 42px 22px;
        gap: 22px;
        width: 90%;
        max-width: 369px;
        height: 403px;
        background: #212529;
        box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
        border-radius: 3.20867px;
        margin: 0 auto;
    }

    h2{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 14.439px;
        line-height: 22px;
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
        font-size: 9.772px;
        line-height: 0px;
        color: #F8F9FA;
    }
    input {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0px 13.0293px;
        gap: 8.14px;
        width: 100%;
        margin-top: 17px;
        height: 38.5px;
        background: #343B41;
        border: 0.9772px solid #F8F9FA;
        border-radius: 3.20867px;
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
`