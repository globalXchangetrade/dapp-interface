import React from 'react';
import { Button } from '../../../styles';
import {
  Container,
  Header,
  Content,
  Table,
  Tbody,
  ButtonWrapper
} from './styles';

interface CardProps {
  position: any;
};

export const Card:React.FC<CardProps> = (props: CardProps) => {
  const { position } = props;

  return (
    <Container>
      <Header>
        <img src={position.logo} alt='' />
        <span>{position.name}</span>
      </Header>
      <Content>
        <Table>
          <Tbody>
            <tr>
              <td>LP Balance</td>
              <td>1.5</td>
            </tr>
          </Tbody>
        </Table>
        <p>Accumilated Rewards</p>
        <Table>
          <Tbody>
            <tr>
              <td>Gold</td>
              <td>100</td>
            </tr>
          </Tbody>
          <Tbody>
            <tr>
              <td>STIR</td>
              <td>0.002</td>
            </tr>
          </Tbody>
        </Table>
        <ButtonWrapper>
          <Button color='primary'>STAKE</Button>
          <Button color='red'>UNSTAKE</Button>
        </ButtonWrapper>
        <Button color='yellow'>Harvest Rewards</Button>
      </Content>
    </Container>
  )
}
