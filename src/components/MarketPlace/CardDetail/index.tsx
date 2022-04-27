import React, { useState } from 'react'
import { Calendar } from '../../shared/SvgIcons'
import { Select, Button } from '../../shared'
import {
  Container,
  TitleWrapper,
  FilterWrapper,
  MenuListWrapper,
  MenuItem,
  ContentWrapper,
  ChartWrapper,
  DateListWrapper,
  ControlPanel,
  PriceWrapper,
  Table,
  Tbody,
  ButtonWrapper,
  FormControl,
  InputWrapper,
  GoldWrapper,
  Option,
  Balance,
  ChartView
} from './styles'
import { DetailChart } from '../DetailChart';

interface CardDetailProps {
  card: any;
}

export const CardDetail:React.FC<CardDetailProps> = (props: CardDetailProps) => {
  const { card } = props

  const [selectedType, setSelectedType] = useState<string>('price')
  const [selectedDate, setSelectedDate] = useState<string>('1')

  const typeList = [
    { value: 'price', name: 'Price' },
    { value: 'market_cap', name: 'Market cap' },
    { value: 'trading_view', name: 'Trading view' }
  ]

  const dayList = [
    { value: '1', name: '1D' },
    { value: '7', name: '7D' },
    { value: '30', name: '1M' },
    { value: '365', name: '1Y' },
    { value: 'ytd', name: 'YTD' },
    { value: 'all', name: 'ALL' },
    { value: 'calendar', name: <Calendar /> },
    { value: 'log', name: 'Log' }
  ]

  const currencyList = [
    { value: 'usd', content: 'USD' },
    { value: 'bnb', content: 'BNB' },
    { value: 'hyperx', content: 'Hyperx' },
  ]

  const tokenOptions = [
    { value: 'dai', content: <Option><img src='/imgs/gold.png' alt='' /><span className='token'>DAI</span></Option> },
    { value: 'bitcoin', content: <Option><img src='/imgs/gold.png' alt='' /><span className='token'>Bitcoin</span></Option> }
  ]

  const checkColor = (percent: number) => {
    if (percent > 0) return '#5CD25D'
    else return '#F11818'
  }

  return (
    <Container>
      <TitleWrapper>
        <img src={card?.logo} alt='' />
        <span>{card?.title}</span>
      </TitleWrapper>
      <ContentWrapper>
        <ChartWrapper>
          <FilterWrapper>
            <MenuListWrapper>
              {typeList.map((type, i) => (
                <MenuItem
                  key={i}
                  active={selectedType === type.value}
                  onClick={() => setSelectedType(type.value)}
                >
                  {type.name}
                </MenuItem>
              ))}
            </MenuListWrapper>
            <DateListWrapper>
              {dayList.map((type, i) => (
                <MenuItem
                  key={i}
                  active={selectedDate === type.value}
                  onClick={() => setSelectedDate(type.value)}
                >
                  {type.name}
                </MenuItem>
              ))}
            </DateListWrapper>
          </FilterWrapper>
          <ChartView>
            <DetailChart />
          </ChartView>
        </ChartWrapper>
        <ControlPanel>
          <PriceWrapper>
            <span>{card?.price}</span>
            <Select
              notReload
              placeholder='Select currency'
              options={currencyList}
              defaultValue={'usd'}
              onChange={(val: string) => console.log(val)}
            />
          </PriceWrapper>
          <Table>
            <Tbody>
              <tr>
                <td>Change Today</td>
                <td><span style={{ color: checkColor(card?.change) }}>{card?.change}%</span></td>
              </tr>
            </Tbody>
            <Tbody>
              <tr>
                <td>TVL</td>
                <td>{card?.tvl} USD</td>
              </tr>
            </Tbody>
            <Tbody>
              <tr>
                <td>24 H Volume</td>
                <td>{card?.volume_24} USD</td>
              </tr>
            </Tbody>
            <Tbody>
              <tr>
                <td>24 H High</td>
                <td>{card?.high} USD</td>
              </tr>
            </Tbody>
            <Tbody>
              <tr>
                <td>24 H Low</td>
                <td>{card?.low} USD</td>
              </tr>
            </Tbody>
            <Tbody>
              <tr>
                <td>7 Day Volume</td>
                <td>{card?.volume_7} USD</td>
              </tr>
            </Tbody>
            {card?.country_flag && (
              <Tbody>
                <tr>
                  <td>Country</td>
                  <td><img src={card?.country_flag} alt='' /></td>
                </tr>
              </Tbody>
            )}
          </Table>
          <FormControl>
            <span>Purchase</span>
            <InputWrapper>
              <input
                placeholder='0.0'
              />
              <GoldWrapper>
                <img src={card?.logo} alt='' />
                <span>{card?.title}</span>
              </GoldWrapper>
            </InputWrapper>
          </FormControl>
          <FormControl>
            <span>Payment Currency</span>
            <InputWrapper>
              <input
                placeholder='0.0'
              />
              <Select
                notReload
                placeholder='currency'
                options={tokenOptions}
                defaultValue='dai'
                onChange={(val: string) => console.log(val)}
              />
            </InputWrapper>
          </FormControl>
          <Balance>Balance 3,823</Balance>
          <ButtonWrapper>
            <Button
              color='primary'
              borderRadius='28px'
            >Buy now</Button>
          </ButtonWrapper>
        </ControlPanel>
      </ContentWrapper>
    </Container>
  )
}
