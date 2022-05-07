import React from 'react';
import { FilterGroup } from '../shared';
import { Card } from './Card';
import {
  Container,
  InnerContainer,
  WatchCardListWrapper,
  CardListWrapper
} from './styles';

export const Portfolio:React.FC = () => {
  const cardList: any = [
    { logo: '/imgs/gold.png', title: 'GOLD', price: '$145', currency: 'USD', tvl: '24M', volume_24: '24M', change: 24, high: '24M', low: '24M', volume_7: '24M', country_flag: '', data: [{ x: 1996, y: 322 },
      { x: 1997, y: 324 },
      { x: 1998, y: 329 },
      { x: 1999, y: 342 },
      { x: 2000, y: 348 },
      { x: 2001, y: 334 },
      { x: 2002, y: 325 },
      { x: 2003, y: 316 },
      { x: 2004, y: 318 },
      { x: 2005, y: 330 },
      { x: 2006, y: 355 },
      { x: 2007, y: 366 },
      { x: 2008, y: 337 },
      { x: 2009, y: 352 },
      { x: 2010, y: 377 },
      { x: 2011, y: 383 },
      { x: 2012, y: 344 },
      { x: 2013, y: 366 },
      { x: 2014, y: 389 },
      { x: 2015, y: 334}
    ] },
    { logo: '/imgs/gold.png', title: 'GOLD', price: '$145', currency: 'USD', tvl: '24M', volume_24: '24M', change: 24, high: '24M', low: '24M', volume_7: '24M', country_flag: '/imgs/uk-flag.png', isCallPut: true, data: [{ x: 1996, y: 322 },
      { x: 1997, y: 324 },
      { x: 1998, y: 329 },
      { x: 1999, y: 342 },
      { x: 2000, y: 348 },
      { x: 2001, y: 334 },
      { x: 2002, y: 325 },
      { x: 2003, y: 316 },
      { x: 2004, y: 318 },
      { x: 2005, y: 330 },
      { x: 2006, y: 355 },
      { x: 2007, y: 366 },
      { x: 2008, y: 337 },
      { x: 2009, y: 352 },
      { x: 2010, y: 377 },
      { x: 2011, y: 383 },
      { x: 2012, y: 344 },
      { x: 2013, y: 366 },
      { x: 2014, y: 389 },
      { x: 2015, y: 334}
    ] }
  ];

  return (
    <Container>
      <InnerContainer>
        <FilterGroup />
        <WatchCardListWrapper>
          <h1>Watchlist</h1>
          <CardListWrapper>
            {cardList.map((item: any, i: number) => (
              <Card key={i} card={item} />
            ))}
          </CardListWrapper>
        </WatchCardListWrapper>
      </InnerContainer>
    </Container>
  )
};
