import React, { useState } from 'react'
import { SearchBar } from '../SearchBar'
import { Button, IconButton, Select } from '../shared'
import { Filter } from '../shared/SvgIcons'
import { Card } from './Card'

import {
  Container,
  InnerContainer,
  FilterWrapper,
  SearchWrapper,
  SelectWrapper,
  CurrencyFilterWrapper,
  UpcomingWrapper,
  CardListWrapper,
  MarketCardListWrapper
} from './styles'
import { UpcomingCard } from './UpcomingCard'

export const MarketPlace:React.FC = () => {

  const [currency, setCurrency] = useState<string>('usd')

  const currencyList = [
    { value: 'usd', content: 'USD' },
    { value: 'bnb', content: 'BNB' },
    { value: 'hyperx', content: 'Hyperx' }
  ]

  const upcomingList: any = [
    { logo: '/imgs/mtsubishi.png', title: 'MITSUBISHI', price: '$45', currency: 'USD', time: '7D 12:23:23', supply: 100, country_flag: '/imgs/japan-flag.png', available_percent: 23, data: [{ x: 1996, y: 322 },
      { x: 1997, y: 394 },
      { x: 1998, y: 392 },
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
      { x: 2014, y: 329 },
      { x: 2015, y: 334}
    ] }
  ]

  const cardList: any = [
    { logo: '/imgs/gold.png', title: 'GOLD', price: '$145', currency: 'USD', tvl: '24M', volume_24: '24M', change: 24, high: '24M', low: '24M', volume_7: '24M',     data: [{ x: 1996, y: 322 },
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
    { logo: '/imgs/gold.png', title: 'GOLD', price: '$145', currency: 'USD', tvl: '24M', volume_24: '24M', change: 24, high: '24M', low: '24M', volume_7: '24M', country_flag: '/imgs/uk-flag.png',     data: [{ x: 1996, y: 322 },
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
    { logo: '/imgs/gold.png', title: 'GOLD', price: '$145', currency: 'USD', tvl: '24M', volume_24: '24M', change: -16, high: '24M', low: '24M', volume_7: '24M',     data: [{ x: 1996, y: 322 },
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
  ]

  return (
    <Container>
      <InnerContainer>
        <FilterWrapper>
          <div>
            <SearchWrapper>
              <SearchBar
                placeholder='E.G. Gold'
                onSearch={(val: string) => console.log(val)}
                search=''
              />
              <Button
                color='primary'
                borderRadius='28px'
              >SEARCH</Button>
            </SearchWrapper>
            <CurrencyFilterWrapper>
              <SelectWrapper>
                <span>Base Currency</span>
                <Select
                  notReload
                  placeholder='Select currency'
                  options={currencyList}
                  defaultValue={currency}
                  onChange={(val: string) => setCurrency(val)}
                />
              </SelectWrapper>
              <IconButton>
                <Filter />
              </IconButton>
            </CurrencyFilterWrapper>
          </div>
        </FilterWrapper>
        <UpcomingWrapper>
          <h1>Upcoming</h1>
          <CardListWrapper>
            {upcomingList.map((item: any, i: number) => (
              <UpcomingCard key={i} card={item} />
            ))}
          </CardListWrapper>
        </UpcomingWrapper>
        <MarketCardListWrapper>
          <h1>Market</h1>
          <CardListWrapper>
            {cardList.map((item: any, i: number) => (
              <Card key={i} card={item} />
            ))}
          </CardListWrapper>
        </MarketCardListWrapper>
      </InnerContainer>
    </Container>
  )
}
