import styled from 'styled-components'

export const Container = styled.div`
  padding: 45px 0px;
`

export const InnerContainer = styled.div`
  max-width: 1500px;
  margin: 0px auto;
  padding: 0px 15px;

  @media (min-width: 768px) {
    padding: 0px 30px;
  }
`

export const ContentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;

  h2 {
    font-weight: 600;
    font-size: 18px;
    text-transform: uppercase;
    margin: 5px 0px;
  }

  button {
    margin: 5px 0px;
    height: 30px;
    padding: 0px 10px;
    svg {
      font-size: 16px;
    }
  }
`

export const PositionListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 0px;
  > div {
    width: 100%;
    margin: 15px 0px;
  }

  @media (min-width: 576px) {
    width: calc(100% + 30px);
    margin-left: -15px;

    > div {
      width: calc(50% - 30px);
      margin: 15px;
    }
  }

  @media (min-width: 993px) {
    width: calc(100% + 60px);
    margin-left: -30px;

    > div {
      width: calc(33.33% - 60px);
      margin: 15px 30px;
    }
  }
`

export const EmptyPosition = styled.div`
  background: rgb(255 255 255 / 3%);
  border-radius: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 170px;
  width: 100%;

  > p {
    font-weight: 400;
    font-size: 14px;
    margin: 5px;
    opacity: 0.5;
  }
`