import styled from 'styled-components';

export const Container = styled.header`
  width: 1000px;

  & > h1 {
    font-size: 3rem;
    left: -3px;
    margin-bottom: 10px;
    position: relative;
  }

  & > span {
    color: var(--clr-gray);
  }

  //Alterações
  @media (max-width: 1440px) {
    width: 85%;
    
    & > h1 {
      font-size: 2.5rem;
    }
  }

  @media (max-width: 1200px) {
    width: 70%;
    
    & > h1 {
      font-size: 2.5rem;
    }
  }

  @media (max-width: 768px) {
    width: 79%;

    & > h1 {
      font-size: 2rem;
      left: 0; 
    }
  }

  @media (max-width: 480px) {
    width: 80%;

    & > h1 {
      font-size: 1.5rem;
    }
  }
`;

export const SelectContainer = styled.section`
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 40px;
  justify-content: flex-end;
  margin-top: 40px;

  & > select {
    border: none;
    font-family: inherit;
    font-size: inherit;
    padding: 20px 10px;
  }

  @media (max-width: 1200px){
    justify-content: flex-start;
  }

  @media (max-width: 480px) {
    gap: 15px;
    justify-content: start;

    & > label {
      font-size: 0.9rem;
    }

    & > select {
      padding: 10px 5px; 
    }
  }
`;
