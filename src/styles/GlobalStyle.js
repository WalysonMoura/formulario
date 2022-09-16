import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap");


*,::before,::after{
  box-sizing: border-box;
}

body{
  margin: 0;
  padding: 0;
  font-family:  'Poppins';
  font-size: .938rem;
  color:  #23004D;
}

h1{
  margin: 0;
}

a{
  text-decoration: none;
}

img{
  max-width: 100%;
  height: auto;
  display: block;
}

`