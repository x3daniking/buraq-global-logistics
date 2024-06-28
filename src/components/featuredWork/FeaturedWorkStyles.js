import styled from 'styled-components';

export const FeaturedWorkContainer = styled.div`
 padding: 20px;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 gap: 20px;

 h2{
    color: #000000;
    font-size: 42px;
    font-weight: 600;
    text-align: center;
 }

 p{
    color: #111111;
    font-size: 18px;
    line-height: 26px;
    font-weight: 500;
    max-width: 700px;
    text-align: center;
 }
`;

export const FeaturedWorkCards = styled.div`
 display: grid;
 grid-template-columns: 1fr 1fr;
 column-gap: 15px;
 row-gap: 15px;
 margin: 20px 0;
`;
