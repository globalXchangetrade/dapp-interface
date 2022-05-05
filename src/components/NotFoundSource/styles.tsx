import styled from 'styled-components'

export const Container = styled.div`
  padding: 45px 0px;
  height: calc(100vh - 80px);
`

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: 1500px;
  padding: 0px 15px;
  height: 100%;

  h1 {
    opacity: 0.5;
    text-align: center;
    font-size: 20px;
  }

  @media (min-width: 576px) {
    h1 {
      font-size: 24px;
    }
  }

  @media (min-width: 768px) {
    padding: 0px 30px;
  }
`

export const Image = styled.div`
  max-width: 300px;
  max-width: 300px;

  img {
    width: 300px;
  }
`
