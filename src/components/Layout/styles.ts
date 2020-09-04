import styled from 'styled-components';

export const Container = styled.div``;

export const Wrapper = styled.div`
  max-width: 1220px;
  margin: 0 auto;
  padding: 0 16px;

  @media(max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100%;
  }
`;
