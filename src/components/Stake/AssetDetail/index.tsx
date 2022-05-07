import React, { useState, useEffect } from 'react';
import { ChartItem } from '../../MarketPlace/ChartItem';
import {
  Container,
  InnerContainer,
  HeaderWrapper,
  TitleWrapper,
  Content,
  ChartWrapper,
  CardInfoWrapper,
  DetailWrapper,
  Table,
  Tbody,
  Divider
} from './styles';

interface AssetDetailProps {
  card?: any,
  key?: number
};

export const AssetDetail:React.FC<AssetDetailProps> = (props: AssetDetailProps) => {
  const { card } = props;

  const [series, setSeries] = useState<Array<any>>([]);

  const checkColor = (percent: number) => {
    if (percent > 0) return '#5CD25D';
    else return '#F11818';
  };

  useEffect(() => {
    const _series = [];
    const obj = {
      name: card?.name,
      data: [{ x: 1996, y: 322 },
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
        { x: 2015, y: 334}]
    }
    _series.push(obj);
    setSeries(_series);
  }, [card]);

  return (
    <>
      <Container>
        <InnerContainer>
          <HeaderWrapper>
            <TitleWrapper>
              <img src={card?.logo} alt='' />
              <h2>{card?.name}</h2>
            </TitleWrapper>
            <span>{card?.price} <span>{card?.currency}</span></span>
          </HeaderWrapper>
          <Divider />
          <Content>
            <ChartWrapper>
              {series?.length > 0 && (
                <ChartItem color={card?.change > 0 ? '#5CD25D' : '#F11818'} series={series} />
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
            </CardInfoWrapper>
          </Content>
        </InnerContainer>
      </Container>
    </>
  )
}
