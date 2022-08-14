import styled from "styled-components";

export const StyledDashboard = styled.body`
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
    .container__border{
        width:100%;
        border-bottom: 1px solid #212529;
    }
    
    .container__logo{
        display: flex;
        justify-content: space-between;
        width: 90%;
        max-width: 48.75rem;
        align-items: center;
        height: 73px;
        margin: 0 auto;
    }
    
    .btn-logout {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0px 16.2432px;
        gap: 10.1504px;
        background: #212529;
        border-radius: 4px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 28px;
        text-align: center;
        color: #F8F9FA;
        cursor: pointer
    }

    .container__user{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        border-bottom: 1px solid #212529;
        width: 90%;
        max-width: 48.75rem;
        height: 131px;
        gap: 10px;
        margin: 0 auto;
    }
    
    .container__tittle4{
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

    .container__tech{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 90%;
        max-width: 48.75rem;
        margin-top: 1.1875rem;
    }

    .container__tech--tittle{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 1rem;
        line-height: 1.125rem;
        color: #F8F9FA;
    }

    .container__tech--button{
        background: #212529;
        border-radius: .25rem;
        width: 2rem;
        height: 2rem;
        color: #FFFFFF;
        cursor: pointer;
    }

    
    main {
        width: 90%;
        max-width: 48.75rem;
        height: 26rem;
        gap: 25px;
        flex-direction: column;
        padding: .3125rem;
        margin-top: 1.3125rem;
        background: #212529;
        border-radius: .25rem;
        margin-bottom: 2.375rem;
        overflow-y: auto;
    }

    

    .container__tech-card{
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #121214;
        border-radius: .25rem;
        margin: 0 auto;
        margin-top: 1rem;
        height: 3.0625rem;
        flex-direction: row;
        width: 95%;
        max-width: 45.75rem;
    }

    .container__tech-card:hover{
        background: #343B41;
    }
  

    .container__tech-card__text1{
        
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: .8883rem;
        line-height: 1.5rem;
        margin-left: .75rem;
        color: #F8F9FA;
    }

    .container__tech-card--button{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        max-width: 135px;
    }
    
    .container__tech-card__text2{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: .7614rem;
        line-height: 1.375rem;
        color: #868E96;
    }

    .container__tech-card__button {
        border: none;
        background: none;
        color: rgba(255, 255, 255, 0.8);
        margin-right: 1.125rem;
        cursor: pointer;
    }

    @media (min-width: 48rem){
        .container__logo{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            width: 90%;
            
        }

        .container__user{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            width: 90%;
           
            }

        
        }
    }

`