import React, { useState, useEffect } from 'react';
import { Button, IconButton } from '../../../styles';
import { Modal } from '../../shared';
import { Eye, Expand } from '../../shared/SvgIcons';
import { CardDetail } from '../../MarketPlace/CardDetail';
import { ChartItem } from '../../MarketPlace/ChartItem';
import { CallOption } from '../CallOption';
import {
  Container,
  InnerContainer,
  HeaderWrapper,
  TitleWrapper,
  Content,
  ChartWrapper,
  CardInfoWrapper,
  DetailWrapper,
  ButtonWrapper,
  Table,
  Tbody,
  Divider,
  BottomContentWrapper,
  CallWrapper,
  InfoItem,
  PutsWrapper,
  InvestButtonWrapper
} from './styles';

interface CardProps {
  card?: any,
  key?: number
};

export const Card:React.FC<CardProps> = (props: CardProps) => {
  const { card } = props;

  const [open, setIsOpen] = useState<boolean>(false);
  const [series, setSeries] = useState<Array<any>>([]);
  const [isOpenCall, setIsOpenCall] = useState<boolean>(false);

  useEffect(() => {
    const _series = []
    const obj = {
      name: card?.title,
      data: card?.data
    }
    _series.push(obj)
    setSeries(_series)
  }, [card]);

  const checkColor = (percent: number) => {
    if (percent > 0) return '#5CD25D';
    else return '#F11818';
  };

  return (
    <>
      <Container>
        <InnerContainer>
          <HeaderWrapper>
            <TitleWrapper>
              <img src={card?.logo} alt='' />
              <h2>{card?.title}</h2>
            </TitleWrapper>
            <span>{card?.price} <span>{card?.currency}</span></span>
          </HeaderWrapper>
          <Divider />
          <Content>
            <ChartWrapper>
              {series?.length > 0 && (
                <>
                  <IconButton
                    borderRadius='50%'
                    onClick={() => setIsOpen(true)}
                  >
                    <Expand />
                  </IconButton>
                  <ChartItem color={card?.change > 0 ? '#5CD25D' : '#F11818'} series={series} />
                </>
              )}
            </ChartWrapper>
            <CardInfoWrapper>
              <DetailWrapper>
                <Table>
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
                      <td>24 H Change</td>
                      <td><span style={{ color: checkColor(card?.change) }}>{card?.change}%</span></td>
                    </tr>
                  </Tbody>
                </Table>
                <Table>
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
              </DetailWrapper>
              {!card.isCallPut && (
                <InvestButtonWrapper>
                  <Button
                    color='primary'
                    borderRadius='11px'
                  >Invest</Button>
                  <IconButton
                    borderRadius='12px'
                  >
                    <Eye />
                  </IconButton>
                </InvestButtonWrapper>
              )}
            </CardInfoWrapper>
          </Content>
          {card.isCallPut && (
            <>
              <Divider />
              <BottomContentWrapper>
                <CallWrapper>
                  <h3>Calls</h3>
                  <InfoItem>
                    <span>APY</span>
                    <span>24%</span>
                  </InfoItem>
                  <InfoItem>
                    <span>TVL</span>
                    <span>24M USD</span>
                  </InfoItem>
                  <InfoItem>
                    <span>Deposits</span>
                    <span>$2500 USD</span>
                  </InfoItem>
                  <Button
                    color='primary'
                    onClick={() => setIsOpenCall(true)}
                  >Calls</Button>
                </CallWrapper>
                <PutsWrapper>
                  <h3>Puts</h3>
                  <InfoItem>
                    <span>APY</span>
                    <span>24%</span>
                  </InfoItem>
                  <InfoItem>
                    <span>TVL</span>
                    <span>24M USD</span>
                  </InfoItem>
                  <InfoItem>
                    <span>Deposits</span>
                    <span>$2500 USD</span>
                  </InfoItem>
                  <ButtonWrapper>
                    <Button
                      color='primary'
                      borderRadius='8px'
                    >Puts</Button>
                    <IconButton
                      borderRadius='10px'
                    >
                      <Eye />
                    </IconButton>
                  </ButtonWrapper>
                </PutsWrapper>
              </BottomContentWrapper>
            </>
          )}
        </InnerContainer>
      </Container>
      <Modal
        width='1000px'
        open={open}
        onClose={() => setIsOpen(false)}
      >
        <CardDetail
          card={card}
          onClose={() => setIsOpen(false)}
        />
      </Modal>
      <Modal
        width='380px'
        open={isOpenCall}
        onClose={() => setIsOpenCall(false)}
        borderRadius='43px'
      >
        <CallOption
          card={card}
          onClose={() => setIsOpenCall(false)}
        />
      </Modal>
    </>
  )
}
