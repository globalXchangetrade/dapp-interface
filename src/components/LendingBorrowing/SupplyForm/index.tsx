import React, { useState } from 'react';
import { Button } from '../../../styles';
import {
  Container,
  Title,
  AmountWrapper,
  InputWrapper,
  Tabs,
  Tab,
  SupplyWrapper,
  Table,
  Tbody,
  BalanceWrapper,
  ActiveBox
} from './styles';

interface SupplyProps {
  market: any,
  handleChangeSupply: any
  setIsCollateralModal: any,
  onClose: any
};

export const SupplyForm:React.FC<SupplyProps> = (props: SupplyProps) => {
  const { market, handleChangeSupply, setIsCollateralModal, onClose } = props;

  const [max, setMax] = useState<any>('');
  const [selectedTab, setSelectedTab] = useState<string>('supply');

  const tabList = [
    { key: 'supply', name: 'Supply' },
    { key: 'withdraw', name: 'Withdraw' }
  ];

  const handleChangeWithdraw = () => {
    onClose();
    setIsCollateralModal(true);
  };

  return (
    <Container>
      <Title>
        <img src={market?.photo} alt='' />
        <span>{market?.name}</span>
      </Title>
      <AmountWrapper>
        <InputWrapper>
          <input
            type='text'
            value={max}
            onChange={(e: any) => setMax(e.target.value)}
            placeholder='0'
            onKeyPress={(e) => {
              if (!/^[0-9.]$/.test(e.key)) {
                e.preventDefault()
              }
            }}
          />
          <span>MAX</span>
        </InputWrapper>
      </AmountWrapper>
      <Tabs>
        <ActiveBox active={selectedTab === 'withdraw'} />
        {tabList.map((item, i) => (
          <Tab
            key={i}
            active={item.key === selectedTab}
            onClick={() => setSelectedTab(item.key)}
          >
            <span>{item.name}</span>
          </Tab>
        ))}
      </Tabs>
      {selectedTab === 'supply' && (
        <SupplyWrapper>
          <Table>
            <Tbody>
              <tr>
                <td>Supply rate</td>
                <td>8%</td>
              </tr>
            </Tbody>
            <Tbody>
              <tr>
                <td>Borrow Limit</td>
                <td>$600 USD</td>
              </tr>
            </Tbody>
            <Tbody>
              <tr>
                <td>Borrow Limit Used</td>
                <td>$20 USD</td>
              </tr>
            </Tbody>
          </Table>
          <Button
            color='primary'
            onClick={() => handleChangeSupply(true)}
          >
            APPROVE
          </Button>
          <BalanceWrapper>Wallet Balance: 3,823</BalanceWrapper>
        </SupplyWrapper>
      )}
      {selectedTab === 'withdraw' && (
        <SupplyWrapper>
          <Table>
            <Tbody>
              <tr>
                <td>Supply rate</td>
                <td>8%</td>
              </tr>
            </Tbody>
            <Tbody>
              <tr>
                <td>Borrow Limit</td>
                <td>$600 → $600</td>
              </tr>
            </Tbody>
            <Tbody>
              <tr>
                <td>Borrow Limit Used</td>
                <td>0%</td>
              </tr>
            </Tbody>
          </Table>
          <Button
            color='primary'
            onClick={() => handleChangeWithdraw()}
          >
            SUPPLY
          </Button>
          <BalanceWrapper>Wallet Balance: 3,823</BalanceWrapper>
        </SupplyWrapper>
      )}
      
    </Container>
  )
}
