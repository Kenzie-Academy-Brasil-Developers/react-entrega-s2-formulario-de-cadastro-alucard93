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
        height: 73px;
        border-bottom: 1px solid #212529;
        padding: 0 6%;
    }
    
    .btn-logout {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0px 16.2426px;
        gap: 10.15px;
        background: #212529;
        border-radius: 4px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 28px;
        text-align: center;
        color: #F8F9FA;
    }

    .container__user{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        border-bottom: 1px solid #212529;
        width:100%;
        height: 131px;
        gap: 10px;
    }
    
    .container__tittle4{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 28px;
        color: #F8F9FA;
        margin: 0 6%;
    }

    .container__text{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 22px;
        color: #868E96;
        margin: 0 6%;
    }

    main {
        width: 100%;
        display: none;
        gap:25px;
        flex-direction: column;
        padding:0 6%;
    }

    .container__text1{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 28px;
        color: #F8F9FA;
        margin: 37px 0;    
    }

    .container__text2{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #FFFFFF;
        margin: 23px 0;
    }

    @media (min-width: 768px){
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

    @media (min-width: 1024px){
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