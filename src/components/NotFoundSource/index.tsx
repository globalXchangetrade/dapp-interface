import React from 'react';
import { Container, InnerContainer, Image } from './styles';

export const NotFoundSource:React.FC = () => {
  return (
    <Container>
      <InnerContainer>
        <h1>Page not found</h1>
        <Image>
          <img width='300px' height='300px' src='/icons/not-found.svg' alt='Not found page' />
        </Image>
      </InnerContainer>
    </Container>
  )
}