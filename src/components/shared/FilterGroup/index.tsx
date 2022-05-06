import React, { useState } from 'react';
import { Button, IconButton, Select } from '../../../styles';
import { SearchBar } from '../SearchBar';
import { Filter } from '../SvgIcons';
import {
  Container,
  SearchWrapper,
  CurrencyFilterWrapper,
  SelectWrapper
} from './styles';

export const FilterGroup:React.FC = () => {
  const [currency, setCurrency] = useState<string>('usd');

  const currencyList = [
    { value: 'usd', content: 'USD' },
    { value: 'bnb', content: 'BNB' },
    { value: 'hyperx', content: 'Hyperx' }
  ];

  return (
    <Container>
      <div>
        <SearchWrapper>
          <SearchBar
            placeholder='Search Stocks and Metals'
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
            <Select
              notReload
              placeholder='Select currency'
              options={currencyList}
              defaultValue={currency}
              onChange={(val: string) => setCurrency(val)}
            />
          </SelectWrapper>
          <IconButton borderRadius='10px'>
            <Filter />
          </IconButton>
        </CurrencyFilterWrapper>
      </div>
    </Container>
  )
}
