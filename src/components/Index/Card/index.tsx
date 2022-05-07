import React, { useState, useEffect, useRef } from 'react';
import { Button, IconButton } from '../../../styles';
import { Modal } from '../../shared';
import { Eye, Expand, Info } from '../../shared/SvgIcons';
import { CardDetail } from '../../MarketPlace/CardDetail';
import { ChartItem } from '../../MarketPlace/ChartItem';
import { BuyNow } from '../BuyNow';
import { usePopper } from 'react-popper';
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
  AutherWrapper,
  AssetsWrapper,
  LogoWrapper,
  HeaderLogoWrapper,
  PopoverBody,
  PopoverArrow,
  UserInfoWrapper,
  InnerWrapper
} from './styles';

interface CardProps {
  card?: any,
  key?: number
};

export const Card:React.FC<CardProps> = (props: CardProps) => {
  const { card } = props;

  const [openDetail, setOpenDetail] = useState<boolean>(false);
  const [openBuy, setOpenBuy] = useState<boolean>(false);
  const [series, setSeries] = useState<Array<any>>([]);
  const [open, setOpen] = useState(false);

  const referenceElement = useRef<any>();
  const popperElement = useRef<any>();
  const arrowElement = useRef<any>();

  const popper = usePopper(referenceElement.current, popperElement.current, {
    placement: 'top',
    modifiers: [
      { name: 'arrow', options: { element: arrowElement.current } },
      {
        name: 'offset',
        options: {
          offset: [0, 12]
        }
      }
    ]
  });

  const { styles, attributes, update } = popper;

  useEffect(() => {
    update && update()
  }, [open]);

  const popStyle = { ...styles.popper, display: open ? 'block' : 'none', minWidth: '100px' }
  if (!open) {
    popStyle.transform = 'translate3d(0px, 0px, 0px)'
  };

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
    if (percent > 0) return '#5CD25D'
    else return '#F11818'
  };

  return (
    <>
      <PopoverBody ref={popperElement} style={popStyle} {...attributes.popper}>
        <InnerWrapper>
          <HeaderLogoWrapper inactive={!card.logo}>
            {card?.logo && <img src={card.logo} alt='' />}
          </HeaderLogoWrapper>
          <UserInfoWrapper>
            <h2>By {card?.user?.name}</h2>
            <p>{card?.user?.description}</p>
          </UserInfoWrapper>
        </InnerWrapper>
        <PopoverArrow key='arrow' ref={arrowElement} style={styles.arrow} />
      </PopoverBody>
      <Container>
        <InnerContainer>
          <HeaderWrapper>
            <TitleWrapper>
              <HeaderLogoWrapper inactive={!card.logo}>
                {card?.logo && <img src={card.logo} alt='' />}
              </HeaderLogoWrapper>
              <div>
                <h2>{card?.title}</h2>
                <AutherWrapper>
                  <span>By {card.user?.name}</span>
                  <div
                    ref={referenceElement}
                    onMouseEnter={() => setOpen(!open)}
                    onMouseLeave={() => setOpen(!open)}
                  >
                    <Info />
                  </div>
                </AutherWrapper>
              </div>
            </TitleWrapper>
            <span>${card?.price} <span>{card?.currency}</span></span>
          </HeaderWrapper>
          <Divider />
          <Content>
            <ChartWrapper>
              {series?.length > 0 && (
                <>
                  <IconButton
                    borderRadius='50%'
                    onClick={() => setOpenDetail(true)}
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
                <AssetsWrapper>
                  <p>Assets</p>
                  <div>
                    {card?.assets.map((item: any, i: number) => (
                      <LogoWrapper inactive={!item.logo} key={i}>
                        {item?.logo && <img src={item.logo} alt='' />}
                      </LogoWrapper>
                    ))}
                  </div>
                </AssetsWrapper>
              </DetailWrapper>
              <ButtonWrapper>
                <Button
                  color='primary'
                  borderRadius='11px'
                  onClick={() => setOpenBuy(true)}
                >Buy Now</Button>
                <IconButton
                  borderRadius='12px'
                >
                  <Eye />
                </IconButton>
              </ButtonWrapper>
            </CardInfoWrapper>
          </Content>
        </InnerContainer>
      </Container>
      <Modal
        width='1000px'
        open={openDetail}
        onClose={() => setOpenDetail(false)}
      >
        <CardDetail
          card={card}
        />
      </Modal>
      <Modal
        width='387px'
        open={openBuy}
        onClose={() => setOpenBuy(false)}
        borderRadius='43px'
      >
        <BuyNow
          card={card}
          onClose={() => setOpenBuy(false)}
        />
      </Modal>
    </>
  )
}
