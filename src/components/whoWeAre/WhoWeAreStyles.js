import styled from 'styled-components';

export const WhoWeAreContainer = styled.div`
  padding: 100px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 50px;
  max-width: 1160px;
  align-self: center;
`;

export const WhoWeAreLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  h2{
    color: #000000;
    font-size: 3rem;
    font-weight: 700;
    line-height: 1.2;
  }

  p{
    color: #111111;
    font-size: 18px;
    font-weight: 500;
    line-height: 28px;
    max-width: 550px;
  }

  button{
    background: #229B7D;
    border-radius: 36px;
    color: #FFFFFF;
    font-size: 17px;
    font-weight: 600;
    width: 150px;
    padding: 10px 20px;
    margin-top: 20px;
  }
`;


export const WhoWeAreRight = styled.div`
max-width: 500px;
img{
opacity: 1;
    transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    transform-style: preserve-3d;
    border-radius: 30px;
    display: inline-block;
    box-shadow: 3px 3px 9px rgba(0, 0, 0, .65); 
}
`;