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
    { value: 'hyperx', content: 'Hyperx' },
  ]

  const upcomingList: any = [
    { logo: '/imgs/mtsubishi.png', title: 'MITSUBISHI', price: '$45', currency: 'USD', time: '7D 12:23:23', supply: 100, country_flag: '/imgs/japan-flag.png', available_percent: 23 }
  ]

  const cardList: any = [
    { logo: '/imgs/gold.png', title: 'GOLD', price: '$145', currency: 'USD', tvl: '24M', volume_24: '24M', change: 24, high: '24M', low: '24M', volume_7: '24M' },
    { logo: '/imgs/gold.png', title: 'GOLD', price: '$145', currency: 'USD', tvl: '24M', volume_24: '24M', change: 24, high: '24M', low: '24M', volume_7: '24M', country_flag: '/imgs/uk-flag.png' },
    { logo: '/imgs/gold.png', title: 'GOLD', price: '$145', currency: 'USD', tvl: '24M', volume_24: '24M', change: -16, high: '24M', low: '24M', volume_7: '24M' }
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
