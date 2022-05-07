import React, { useState, useEffect } from 'react';
import { Info } from '../../shared/SvgIcons';
import { Button, Select } from '../../../styles';
import { ChartItem } from '../../MarketPlace/ChartItem';
import { RangeCalendar } from '../../shared';
import {
  Container,
  Title,
  InfoItem,
  SelectWrapper,
  Option,
  CalendarWrapper,
  ChartWrapper,
  ChartContent,
  CurrencyWrapper
} from './styles';

interface CallOptionProps {
  card: any;
  onClose?: any;
};

export const CallOption:React.FC<CallOptionProps> = (props: CallOptionProps) => {
  const { card, onClose } = props;

  const [selectedToken, setSelectedToken] = useState<string>('dex');
  const [dateTime, setDateTime] = useState<any>(new Date());
  const [series, setSeries] = useState<Array<any>>([]);

  const tokenOptions = [
    { value: 'dex', content: <Option><img src='/imgs/dex.png' alt='' /><span className='token'>DAI</span></Option> },
    { value: 'ethereum', content: <Option><img src='/imgs/eth.png' alt='' /><span className='token'>ETH</span></Option> },
    { value: 'tex', content: <Option><img src='/imgs/t.png' alt='' /><span className='token'>Tex</span></Option> }
  ];

  const handleChangeDateTime = (date: any) => {
    setDateTime(date);
  };

  const handleBuy = () => {
    onClose && onClose();
  };

  useEffect(() => {
    const _series = [];
    const obj = {
      name: card?.title,
      data: card?.data
    };
    _series.push(obj);
    setSeries(_series);
  }, [card]);

  return (
    <Container>
      <Title>
        <img src={card.logo} alt='' />
        <span>{card.title} Call Options</span>
      </Title>
      <InfoItem>
        <div>
          <span>STIR Price</span>
          <Info />
        </div>
        <SelectWrapper>
          <span>3300</span>
          <Select
            notReload
            placeholder='token'
            options={tokenOptions}
            defaultValue={selectedToken}
            onChange={(val: string) => setSelectedToken(val)}
          />
        </SelectWrapper>
      </InfoItem>
      <InfoItem>
        <div>
          <span>Expiry Date</span>
          <Info />
        </div>
        <CalendarWrapper>
          <RangeCalendar
            isSingleDate
            defaultValue={dateTime}
            handleChangeDate={(date: any) => handleChangeDateTime(date)}
          />
        </CalendarWrapper>
      </InfoItem>
      <ChartWrapper>
        <h2>Pay Off Diagram</h2>
        <ChartContent>
          <ChartItem color={card?.change > 0 ? '#5CD25D' : '#F11818'} series={series} />
        </ChartContent>
      </ChartWrapper>
      <InfoItem>
        <div>
          <span>Option Size</span>
          <Info />
        </div>
        <div>1</div>
      </InfoItem>
      <InfoItem>
        <div>
          <span>Payment Currency</span>
        </div>
        <CurrencyWrapper>
          <Select
            notReload
            placeholder='token'
            options={tokenOptions}
            defaultValue={selectedToken}
            onChange={(val: string) => setSelectedToken(val)}
          />
        </CurrencyWrapper>
      </InfoItem>
      <InfoItem>
        <div>
          <span>Premium</span>
          <Info />
        </div>
        <div>3 DAI</div>
      </InfoItem>
      <InfoItem>
        <div>
          <span>Fee</span>
          <Info />
        </div>
        <div>5.65 DAI</div>
      </InfoItem>
      <InfoItem>
        <div>
          <span>You will Pay</span>
          <Info />
        </div>
        <div>5 DAI</div>
      </InfoItem>
      <Button
        color='primary'
        onClick={() => handleBuy()}
      >
      Buy Now
      </Button>
    </Container>
  )
}
