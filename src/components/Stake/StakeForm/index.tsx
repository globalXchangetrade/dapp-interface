import React, { useState } from 'react';
import { Button, Select } from '../../shared';
import { Info, Plus } from '../../shared/SvgIcons';
import {
  Container,
  Option,
  SelectWrapper,
  FormControl,
  InputWrapper,
  InfoWrapper,
  TextRightSide,
  PlusWrapper,
  Table,
  Tbody,
  InsufficientWrapper,
  InsufficientItem,
  PriceWrapper,
  CurrencySupplyWrapper
} from './styles';

interface StakeFormProps {
  position?: any,
  handleAddPositionList?: any
};

export const StakeForm:React.FC<StakeFormProps> = (props: StakeFormProps) => {
  const { position, handleAddPositionList } = props;

  const [selectedToken, setSelectedToken] = useState('gold')

  const tokenOptions = [
    { value: 'eth', content: <Option><img src='/imgs/eth.png' alt='' /><span className='token'>ETH/STIR</span></Option> },
    { value: 'gold', content: <Option><img src='/imgs/gold.png' alt='' /><span className='token'>GOLD/STIR</span></Option> }
  ];

  const handleChangePosition = () => {
    handleAddPositionList(position)
  }

  return (
    <Container>
      <SelectWrapper>
        <Select
          notReload
          placeholder='Token'
          options={tokenOptions}
          defaultValue={selectedToken}
          onChange={(val: string) => setSelectedToken(val)}
        />
      </SelectWrapper>
      <FormControl>
        <InputWrapper>
          <span>0.0</span>
          <span>MAX</span>
        </InputWrapper>
        <InfoWrapper>
          <img src='/imgs/gold.png' alt='' />
          <span>GOLD</span>
        </InfoWrapper>
      </FormControl>
      <TextRightSide>Wallet Balance: 3,823</TextRightSide>
      <PlusWrapper>
        <Plus />
      </PlusWrapper>
      <FormControl>
        <InputWrapper>
          <span>1650</span>
          <span>MIN</span>
        </InputWrapper>
        <InfoWrapper>
          <img src='/imgs/gold.png' alt='' />
          <span>STIR</span>
        </InfoWrapper>
      </FormControl>
      <TextRightSide>Wallet Balance: 3,823</TextRightSide>
      <Table>
        <Tbody>
          <tr>
            <td>GOLD per STIR</td>
            <td>3300</td>
          </tr>
        </Tbody>
        <Tbody>
          <tr>
            <td>STIR per GOld</td>
            <td>0.004</td>
          </tr>
        </Tbody>
        <Tbody>
          <tr>
            <td>Share of Pool</td>
            <td>2%</td>
          </tr>
        </Tbody>
        <Tbody>
          <tr>
            <td>Fee <Info /></td>
            <td>2%</td>
          </tr>
        </Tbody>
      </Table>
      <InsufficientWrapper>
        <p>Insufficient Funds</p>
        <InsufficientItem>
          <PriceWrapper>
            <div />
            <span>0.44</span>
          </PriceWrapper>
          <Button
            color='primary'          
          >
            BUY
          </Button>
        </InsufficientItem>
        <InsufficientItem>
          <PriceWrapper>
            <div />
            <span>0.44</span>
          </PriceWrapper>
          <Button
            color='primary'          
          >
            BUY
          </Button>
        </InsufficientItem>
      </InsufficientWrapper>
      <Button
        color='primary'
        onClick={handleChangePosition}
      >
        STAKE
      </Button>
      <CurrencySupplyWrapper>
        <p>Current Supplying</p>
        <Table>
        <Tbody>
          <tr>
            <td>GOLD</td>
            <td>0</td>
          </tr>
        </Tbody>
        <Tbody>
          <tr>
            <td>STIR</td>
            <td>0</td>
          </tr>
        </Tbody>
      </Table>
      </CurrencySupplyWrapper>
    </Container>
  )
}
