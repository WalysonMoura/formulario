import styled from "styled-components";

export const Main = styled.main`
  height: 100vh;
  display: grid;
  grid-template-columns: 100%;
  margin-left: 1.5rem;
  margin-right: 1.5rem;

  section {
    display: grid;

    .conteinerImg {
      img {
        width: 310px;
        margin-top: 1.5rem;
      }
    }
    .conteinerForm {
      position: relative;
      height: 368px;

      @media screen and (min-width: 576px) {
        width: 348px;
        justify-self: center;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    height: 100vh;
    overflow: hidden;

    section {
      grid-template-columns: repeat(2, max-content);
      justify-content: center;
      align-items: center;
      margin-left: 10rem;

      .conteinerImg {
        display: flex;
        width: 600px;
        height: 588px;
        background-color: #f2f2f2;
        border-radius: 1rem;
        padding-left: 1rem;

        img {
          width: 390px;
          margin-top: 0;
        }
      }
    }
  }

  @media (max-width: 768px) {
    padding: 0 2rem;
  }
  @media (max-width: 375px) {
    padding: 0rem 5rem;
    margin-bottom: 5rem;
  }
`;
