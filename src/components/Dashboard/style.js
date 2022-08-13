import styled from "styled-components";

export const StyledDashboard = styled.main`
    max-height: 100%;
    width: 100%; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    header{
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    }

    .container__logo{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width:100%;
        height: 4.5625rem;
        border-bottom: .0625rem solid #212529;
        padding: 0 6%;
    }
    
    .btn-logout {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0rem 1.0152rem;
        gap: .6344rem;
        background: #212529;
        border-radius: .25rem;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: .75rem;
        line-height: 1.75rem;
        text-align: center;
        color: #F8F9FA;
        cursor: pointer
    }

    .container__user{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        border-bottom: .0625rem solid #212529;
        width:100%;
        height: 8.1875rem;
        gap: .625rem;
    }

    .container__tech{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 90%;
        max-width: 780px;
        margin-top: 19px;
    }

    .container__tech--tittle{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 18px;
        color: #F8F9FA;
    }

    .container__tech--button{
        background: #212529;
        border-radius: 4px;
        width: 32px;
        height: 32px;
        color: #FFFFFF;
    }

    .container__tech-card{
        display: flex;
        width: 100%;
        height: 49px;
        
    }
    
    .container__tittle4{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 1.125rem;
        line-height: 1.75rem;
        color: #F8F9FA;
        margin: 0 6%;
    }

    .container__text{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: .75rem;
        line-height: 1.375rem;
        color: #868E96;
        margin: 0 6%;
    }

    main {
        width: 90%;
        max-width: 780px;
        height: 416px;
        gap: 1.5625rem;
        flex-direction: column;
        padding: 5px 6%;
        margin-top: 21px;
        background: #212529;
        border-radius: 4px;
    }

    .container__tech-card{
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #121214;
        border-radius: 4px;
        margin-top: 16px;
    }

    .container__tech-card__text1{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 14.2123px;
        line-height: 24px;
        margin-left: 12px;
        color: #F8F9FA;
    }

    .container__tech-card__text2{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 12.182px;
        line-height: 22px;
        text-align: right;
        color: #868E96;
    }

    .container__tech-card__button {
        border: none;
        background: none;
        color: rgba(255, 255, 255, 0.8);
        margin-right: 18px;
    }

    @media (min-width: 48rem){
        .container__logo{
            padding:0 12%;
        }

        .container__user{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
        }

        .container__tittle4{
            margin: 0 12%;
        }

        .container__text{
            margin: 0 12%;
        }

        main{
            display: flex;
            padding:0 12%;
        }
    }

    @media (min-width: 64rem){
        .container__logo{
            padding:0 18%;
        }

        .container__tittle4{
            margin: 0 18%;
        }

        .container__text{
            margin: 0 18%;
        }

        main{
            display: flex;
            padding:0 18%;
        }
    }
`