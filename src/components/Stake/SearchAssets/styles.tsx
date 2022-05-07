import styled, { css } from 'styled-components'

export const Container = styled.div`
  padding: 25px;

  > h1 {
    font-weight: 500;
    font-size: 13px;
    text-transform: capitalize;
    margin-bottom: 16px;
  }
`

export const SearchResultBoxWrapper = styled.div`
  overflow: hidden;
  margin-top: 15px;
  border-radius: 20px;
`

export const SearchResultBox = styled.div`
  background: linear-gradient(180deg, rgba(255, 255, 255, 3%) 0%, rgba(255, 255, 255, 0) 100%);
  padding-top: 15px;
  max-height: 300px;
  overflow: auto;

  > p {
    padding: 5px 20px;
    margin: 0px;
  }
`
