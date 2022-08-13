import styled from "styled-components";

export const StyledModal = styled.section`
        display: flex;
        flex-direction: column;
        width: 100%;
        z-index: 9999;
        position: fixed;
        align-items: center;
        justify-content: center;
        background: rgba(18, 18, 20, 0.5);

    aside {
        display: flex;
        flex-direction: column;
        width: 296px;
        border: 1px solid white;
        background: #212529;
    }

    .container__button{
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 50px;
        justify-content: space-between;
        padding: 12px 20px;
        gap: 10px;
        background: #343B41;
        border-radius: 4px 4px 0px 0px;
        
    }

    .container__button--title{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 24px;
        color: #F8F9FA;
        
    }
    .button-close {
            font-family: 'Nunito';
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 26px;
            color: #868E96;
            background: #343B41;
            border: none;
    }

    form {
        display: flex;
        height: auto;
        flex-direction: column;
        justify-content: center;
    }

    .container__input {
        width: 90%;
        margin: 0 auto;
        margin-top: 20px;
    }
    

    label {
        
        width: 90%;
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
        width: 100%;
        padding: 0px 16.2426px;
        margin-top: 20px;
        gap: 10.15px;
        height: 48px;
        background: #343B41;
        border: 1.2182px solid #F8F9FA;
        border-radius: 4px;
    }

    select {
        display: flex;
        width: 100%;
        margin:  0 auto;
        padding: 0px 16.2426px;
        margin-top: 20px;
        background: #343B41;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 16.2426px;
        line-height: 26px;
        color: #F8F9FA;
        height: 48px;
        border: 1.2182px solid #F8F9FA;
        border-radius: 4px;
    }

    .btn-register{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0px 22.3336px;
        gap: 10.15px;
        width:  90%;
        height: 48px;
        background: #FF577F;
        border: 1.2182px solid #FF577F;
        border-radius: 4.06066px;
        margin: 0 auto; 
        margin-top: 22px;
        margin-bottom: 32px;
    }
    



`