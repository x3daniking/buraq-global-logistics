import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: #EBE7E3;
    font-family: "Plus Jakarta Sans", sans-serif;
    
    .custom-toast {
  background-color: #000;
  border: 1px solid #fff;
  border-radius: 8px;
  color: #fff;
  width: 400px;
  right: 100px;
}
  }
  img{
  display: inline-block;
  vertical-align: top;
  max-width: 100%;
  height: auto;
  }
  h1, h2, h3, h4, h5, h6, p{
    margin: 0;
    padding: 0;
  }
  button{
		font-family: "Plus Jakarta Sans";
    border: none;
    outline: none;
    cursor: pointer;
  }
  input, textarea{
    outline: none;
  }
`;

export default GlobalStyle;
