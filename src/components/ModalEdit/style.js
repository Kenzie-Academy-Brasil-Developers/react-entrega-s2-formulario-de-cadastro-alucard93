import styled from "styled-components";

export const StyledModalEdit = styled.section`
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        z-index: 9999;
        position: fixed;
        align-items: center;
        justify-content: center;
        background: rgba(18, 18, 20, 0.5);
        margin-bottom: 50px;

    aside {
        display: flex;
        flex-direction: column;
        width: 90%;
        max-width: 369px;
        background: #212529;
        margin-bottom: 30px;
    }


    .container__button{
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 3.125rem;
        justify-content: space-between;
        padding: .75rem 1.25rem;
        gap: .625rem;
        background: #343B41;
        border-radius: .25rem .25rem 0rem 0rem;
        
    }

    .container__button--title{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: .875rem;
        line-height: 1.5rem;
        color: #F8F9FA;
        
    }
    .button-close {
            font-family: 'Nunito';
            font-style: normal;
            font-weight: 600;
            font-size: 1rem;
            line-height: 1.625rem;
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
        margin-top: 1.25rem;
    }
    

    label {
        width: 90%;
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
        width: 100%;
        padding: 0rem 1.0152rem;
        margin-top: 1.25rem;
        gap: .6344rem;
        height: 3rem;
        background: #343B41;
        border: .0761rem solid #F8F9FA;
        border-radius: .25rem;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 16.2426px;
        line-height: 26px;
        color: #F8F9FA;
    }

    select {
        display: flex;
        width: 100%;
        margin:  0 auto;
        padding: 0rem 1.0152rem;
        margin-top: 1.25rem;
        background: #343B41;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 1.0152rem;
        line-height: 1.625rem;
        color: #F8F9FA;
        height: 3rem;
        border: .0761rem solid #F8F9FA;
        border-radius: .25rem;
    }

    .container__btns{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 90%;
        margin: 0 auto;
        margin-bottom: 32px;
        margin-top: 20px;
    }

    .btn-register{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0px 22.3336px;
        gap: 10.15px;
        width: 100%;
        max-width: 204px;
        height: 48px;
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
    
    .btn-del {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0px 22.3336px;
        gap: 10.15px;
        background: #868E96;
        border: 1.2182px solid #868E96;
        border-radius: 4px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 26px;
        color: #FFFFFF;
        width: 100%;
        max-width: 98px;
    }



`