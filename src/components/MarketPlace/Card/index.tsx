import React, { useState } from 'react'
import { Button, IconButton, Modal } from '../../shared'
import { Eye } from '../../shared/SvgIcons'
import { CardDetail } from '../CardDetail'
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
  Tbody
} from './styles'

interface CardProps {
  card?: any,
  key?: number
}

export const Card:React.FC<CardProps> = (props: CardProps) => {
  const { card } = props

  const [open, setIsOpen] = useState<boolean>(false)

  const checkColor = (percent: number) => {
    if (percent > 0) return '#5CD25D'
    else return '#F11818'
  }

  return (
    <>
      <Container>
        <InnerContainer>
          <HeaderWrapper>
            <TitleWrapper>
              <img src={card?.logo} alt='' />
              <h2>{card?.title}</h2>
            </TitleWrapper>
            <span>{card?.price} {card?.currency}</span>
          </HeaderWrapper>
          <Content>
            <ChartWrapper>

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
              <ButtonWrapper>
                <Button
                  color='primary'
                  borderRadius='28px'
                  onClick={() => setIsOpen(true)}
                >Buy In</Button>
                <IconButton>
                  <Eye />
                </IconButton>
              </ButtonWrapper>
            </CardInfoWrapper>
          </Content>
        </InnerContainer>
      </Container>
      <Modal
        width='1000px'
        open={open}
        onClose={() => setIsOpen(false)}
      >
        <CardDetail
          card={card}
        />
      </Modal>
    </>
  )
}
