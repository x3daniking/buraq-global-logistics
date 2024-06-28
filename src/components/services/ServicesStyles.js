import styled from "styled-components";

export const ServicesContainer = styled.div`
  position: relative;
  display: flex;
`;

export const ServicesContainerBackground = styled.div`
  height: 500px;
  width: 100%;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
`;
export const ServicesContainerBackgroundOverly = styled.div`
  height: 500px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0, 0.7);
`;

export const ServicesComponents = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 1;
`;

export const OurServiceTitle = styled.div`
    color: #FFFFFF;
    font-size: 42px;
    font-weight: 600;
    margin-top: 100px;
`;



export const ContactUsTitle = styled.div`
    color: #000000;
    font-family: "Lato", Sans-serif;
    font-size: 35px;
    font-weight: 600;
    padding: 100px 0;
    background: #fff;
    width: 100%;
    text-align: center;
`;