import styled from 'styled-components';

export const ClientsReviewsContainer = styled.div`
 padding: 100px 20px;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 gap: 80px;
 background: #fff;
 width: 100%;

h2{
    color: #000;
    font-size: 42px;
    font-weight: 700;
    text-align: center;
}

 
@media (max-width: 768px) {
padding: 50px 10px;
gap: 50px;

h2{
    font-size: 32px;
    padding: 0 10px;
}
}

`;