import React, { useEffect, useState } from 'react'
import { Button, IconButton } from '../../shared'
import { Clock, Eye } from '../../shared/SvgIcons'
import { CircleProgressBar } from '../CircleProgressBar'
import ReactApexChart from 'react-apexcharts'
import {
  Container,
  InnerContainer,
  HeaderWrapper,
  TitleWrapper,
  TimeWrapper,
  Content,
  ChartWrapper,
  CardInfoWrapper,
  DetailWrapper,
  TotalSupply,
  Country,
  Available,
  ButtonWrapper
} from './styles'
import { ChartItem } from '../ChartItem'

interface UpcomingCardProps {
  card?: any,
  key?: number
}

export const UpcomingCard:React.FC<UpcomingCardProps> = (props: UpcomingCardProps) => {
  const { card } = props

  const [series, setSeries] = useState<Array<any>>([])

  useEffect(() => {
    const _series = []
    const obj = {
      name: card?.title,
      data: card?.data
    }
    _series.push(obj)
    setSeries(_series)
  }, [card])

  return (
    <Container>
      <InnerContainer>
        <HeaderWrapper>
          <TitleWrapper>
            <img src={card?.logo} alt='' />
            <div>
              <h2>{card?.title}</h2>
              <p>{card?.price}{card?.currency}</p>
            </div>
          </TitleWrapper>
          <TimeWrapper>
            <Clock />
            <span>{card?.time}</span>
          </TimeWrapper>
        </HeaderWrapper>
        <Content>
          <ChartWrapper>
            {series?.length > 0 && <ChartItem color={card?.available_percent > 0 ? '#5CD25D' : '#F11818'} series={series} />}
          </ChartWrapper>
          <CardInfoWrapper>
            <DetailWrapper>
              <TotalSupply>
                <p className='title'>Total Supply</p>
                <p className='value'>{card?.supply}</p>
              </TotalSupply>
              <Country>
                <p>Country</p>
                <img src={card?.country_flag} alt='' />
              </Country>
              <Available>
                <p>Available</p>
                <div>
                  <span>{card?.available_percent}%</span>
                  <CircleProgressBar
                    strokeWidth={3}
                    sqSize={20}
                    percentage={card?.available_percent} />
                </div>
              </Available>
            </DetailWrapper>
            <ButtonWrapper>
              <Button
                color='primary'
                borderRadius='28px'
              >Prebook</Button>
              <IconButton>
                <Eye />
              </IconButton>
            </ButtonWrapper>
          </CardInfoWrapper>
        </Content>
      </InnerContainer>
    </Container>
  )
}
