import React, { useState } from 'react';
import { Calendar } from '../../shared/SvgIcons';
import { Select, Button } from '../../../styles';
import { DetailChart } from '../DetailChart';
import { CircleProgressBar } from '../CircleProgressBar';
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
  ChartView,
  BottomContentWrapper,
  FundManager,
  FundManagerContent,
  HeaderLogoWrapper,
  UserInfoWrapper,
  StatsWrapper,
  StatsContent,
  StatsItem,
  AllowCaution,
  AllowCautionContent,
  ProgressBarWrapper,
  ProgressTextWrapper,
  AllowCautionInfoWrapper,
  AllowCautionTable,
  AllowCautionThead,
  AllowCautionTbody,
  AssetInfoWrapper
} from './styles';

interface CardDetailProps {
  card: any;
  onClose?: any;
};

export const CardDetail:React.FC<CardDetailProps> = (props: CardDetailProps) => {
  const { card, onClose } = props;

  const [selectedType, setSelectedType] = useState<string>('price');
  const [selectedDate, setSelectedDate] = useState<string>('1');

  const typeList = [
    { value: 'price', name: 'Price' },
    { value: 'market_cap', name: 'Market cap' },
    { value: 'trading_view', name: 'Trading view' }
  ];

  const dayList = [
    { value: '1', name: '1D' },
    { value: '7', name: '7D' },
    { value: '30', name: '1M' },
    { value: '365', name: '1Y' },
    { value: 'ytd', name: 'YTD' },
    { value: 'all', name: 'ALL' },
    { value: 'calendar', name: <Calendar /> },
    { value: 'log', name: 'Log' }
  ];

  const currencyList = [
    { value: 'usd', content: 'USD' },
    { value: 'bnb', content: 'BNB' },
    { value: 'hyperx', content: 'Hyperx' },
  ];

  const tokenOptions = [
    { value: 'dai', content: <Option><img src='/imgs/gold.png' alt='' /><span className='token'>DAI</span></Option> },
    { value: 'bitcoin', content: <Option><img src='/imgs/gold.png' alt='' /><span className='token'>Bitcoin</span></Option> }
  ];

  const checkColor = (percent: number) => {
    if (percent > 0) return '#5CD25D'
    else return '#F11818'
  };

  const handleBuy = () => {
    // code here for buy now
    onClose && onClose()
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
              borderRadius='11px'
              onClick={handleBuy}
            >Buy now</Button>
          </ButtonWrapper>
        </ControlPanel>
      </ContentWrapper>
      {card?.assets && (
        <BottomContentWrapper>
          <FundManager>
            <h2>FUND MANAGER</h2>
            <FundManagerContent>
              <HeaderLogoWrapper inactive={!card?.logo}>
                {card?.logo && <img src={card?.logo} alt='' />}
              </HeaderLogoWrapper>
              <UserInfoWrapper>
                <h2>By {card?.user?.name}</h2>
                <p>{card?.user?.description}</p>
              </UserInfoWrapper>
            </FundManagerContent>
          </FundManager>
          <StatsWrapper>
            <h2>STATS</h2>
            <StatsContent>
              <StatsItem>
                <span>Market Cap</span>
                <span>$88.43M</span>
              </StatsItem>
              <StatsItem>
                <span>Volume</span>
                <span>$88.43M</span>
              </StatsItem>
              <StatsItem>
                <span>Current Supply</span>
                <span>3,423</span>
              </StatsItem>
              <StatsItem>
                <span>24h Return</span>
                <span className='bold'>+34%</span>
              </StatsItem>
              <StatsItem>
                <span>1M Return</span>
                <span className='bold'>+34%</span>
              </StatsItem>
              <StatsItem>
                <span>3m Return</span>
                <span className='bold'>+34%</span>
              </StatsItem>
              <StatsItem>
                <span>Total Return</span>
                <span className='bold'>+34%</span>
              </StatsItem>
            </StatsContent>
          </StatsWrapper>
          <AllowCaution>
            <h2>ALLOWCATION</h2>
            <AllowCautionContent>
              <ProgressBarWrapper>
                <ProgressTextWrapper>
                  <span>60% GOLD</span>
                  <p>40% TESLA</p>
                </ProgressTextWrapper>
                <CircleProgressBar
                  strokeWidth={10}
                  sqSize={80}
                  percentage={40}
                  activeColor='#e82127'
                  inactiveColor='#6852EF'
                />
              </ProgressBarWrapper>
              <AllowCautionInfoWrapper>
                <AllowCautionTable>
                  <AllowCautionThead>
                    <tr>
                      <th>Asets</th>
                      <th>Quantity per MI</th>
                      <th>Price</th>
                      <th>Value</th>
                      <th>Allowcation</th>
                      <th>Return (24h)</th>
                    </tr>
                  </AllowCautionThead>
                  {card?.assets.map((item: any, i: any) => (
                    <AllowCautionTbody key={i}>
                      <tr>
                        <td>
                          <AssetInfoWrapper>
                            {item?.logo && <img src={item.logo} alt='' />}
                            <span>{item?.name}</span>
                          </AssetInfoWrapper>
                        </td>
                        <td>{item.quantity}</td>
                        <td>{item.price} USD</td>
                        <td>{item.value} USD</td>
                        <td>{item.allow_caution > 0 && '+'}{item.allow_caution}%</td>
                        <td className='blue'>{item.allow_caution > 0 && '+'}{item?.return}%</td>
                      </tr>
                    </AllowCautionTbody>
                  ))}
                </AllowCautionTable>
              </AllowCautionInfoWrapper>
            </AllowCautionContent>
          </AllowCaution>
        </BottomContentWrapper>  
      )}

    </Container>
  )
}
