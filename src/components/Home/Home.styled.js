import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 52px;
`;

export const Content = styled.div`
  max-width: 1128px;
  margin-left: auto;
  margin-right: auto;
`;

export const Section = styled.div`
  min-height: 50px;
  padding: 16px 0;
  box-sizing: content-box;
  text-align: center;
  text-decoration: underline;
  display: flex;
  justify-content: center;

  h5 {
    font-size: 14px;

    a {
      color: #0f52ba;
      font-weight: 700;
    }
  }

  p {
    font: 14px;
    color: #434649;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 5px;
  } ;
`;

export const Layout = styled.div`
  display: grid;
  grid-template-areas: 'leftside main rightside';
  grid-template-columns: minmax(0, 5fr) minmax(0, 12px) minmax(300, 7fr);
  column-gap: 25px;
  row-gap: 25px;
  grid-template-rows: auto;
  margin: 25px 0;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
  }
`;
