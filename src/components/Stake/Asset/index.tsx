import React, { useEffect, useState, useRef } from 'react';
import { usePopper } from 'react-popper';
import { Info } from '../../shared/SvgIcons';
import { AssetDetail } from '../AssetDetail';
import {
  Container,
  DetailWrapper,
  PriceChart,
  LogoWrapper,
  PopoverBody,
  ChartWrapper,
  PopoverArrow
} from './styles'

interface AssetProps {
  chain?: any;
  handleChangeAsset?: any;
}

export const Asset:React.FC<AssetProps> = (props: AssetProps) => {
  const { chain, handleChangeAsset } = props;

  const [open, setOpen] = useState(false);

  const referenceElement = useRef<any>();
  const popperElement = useRef<any>();
  const arrowElement = useRef<any>();

  const popper = usePopper(referenceElement.current, popperElement.current, {
    placement: 'right',
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

  const handleChainClick = (e: any, item: any) => {
    if (e.target.closest('.chart_block')) return;
    handleChangeAsset && handleChangeAsset(item);
  }

  useEffect(() => {
    update && update();
  }, [open]);

  const popStyle = { ...styles.popper, display: open ? 'block' : 'none', minWidth: '100px' }
  if (!open) {
    popStyle.transform = 'translate3d(0px, 0px, 0px)';
  };

  return (
    <>
      <PopoverBody ref={popperElement} style={popStyle} {...attributes.popper}>
        <AssetDetail card={chain} />
        <PopoverArrow key='arrow' ref={arrowElement} style={styles.arrow} />
      </PopoverBody>
      <Container
        onClick={(e) => handleChainClick(e, chain)}
      >
        <DetailWrapper>
          <LogoWrapper inactive={!chain.logo}>
            {chain.logo && <img src={chain.logo} alt={chain.name} />}
          </LogoWrapper>
          <span>{chain.name}</span>
          {chain.info && <Info />}
        </DetailWrapper>
        <PriceChart>
          <span>{chain.price}</span>
          <ChartWrapper
            ref={referenceElement}
            // onClick={() => setOpen(!open)}
            onMouseEnter={() => setOpen(!open)}
            onMouseLeave={() => setOpen(!open)}
            className='chart_block'
          >
            <div />
            <div />
            <div />
          </ChartWrapper>
        </PriceChart>
      </Container>
    </>
  )
}