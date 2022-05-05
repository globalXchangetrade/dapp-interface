import React, { useEffect, useState } from 'react'
import { Input } from '../../shared'
import { Info } from '../../shared/SvgIcons';
import {
  Container,
  SearchResultBox,
  SearchItem,
  DetailWrapper,
  PriceChart,
  LogoWrapper,
  SearchResultBoxWrapper
} from './styles'

interface SearchAssetsProps {
  setSelectedAsset?: any
}

export const SearchAssets:React.FC<SearchAssetsProps> = (props: SearchAssetsProps) => {
  const { setSelectedAsset } = props

  const [value, setValue] = useState<string>('');
  const [pairList, setPairList] = useState<any>([])

  const dumyPairList: any = [
    { id: 1, logo: '/imgs/eth.png', name: 'ETH/STIR', price: 0 },
    { id: 2, logo: '/imgs/dex.png', name: 'DEX/STIR', price: 0 },
    { id: 3, logo: '/imgs/gold.png', name: 'GOLD/STIR', price: 0 },
    { id: 4, logo: '/imgs/t.png', name: 'TERR/STIR', price: 0 },
    { id: 5, logo: '/imgs/nickel.png', name: 'NICKEL/STIR', price: 0 },
    { id: 6, logo: '/imgs/eth.png', name: 'ETH/STIR', price: 0 },
    { id: 7, logo: '/imgs/eth.png', name: 'ETH/STIR', price: 0 },
    { id: 8, logo: '/imgs/eth.png', name: 'ETH/STIR', price: 0 },
    { id: 9, logo: '/imgs/eth.png', name: 'ETH/STIR', price: 0 },
    { id: 10, logo: '/imgs/eth.png', name: 'ETH/STIR', price: 0 },
    { id: 11, logo: '/imgs/eth.png', name: 'ETH/STIR', price: 0 }
  ]

  const handleChangeValue = (e: any) => {
    setValue(e.target.value)
  }

  const handleChangeAsset = (item: any) => {
    setSelectedAsset(item)
  }

  const stakePoolList = [
    { logo: '', name: 'ETH/STIR', info: true, price: 0 },
    { logo: '', name: 'ETH/STIR', info: true, price: 0 }
  ]

  useEffect(() => {
    setPairList(dumyPairList)
  }, [])

  useEffect(() => {
    const updatedList: any = dumyPairList.filter((item: any): any => item?.name?.toLowerCase().includes(value?.toLowerCase()))
    setPairList(updatedList)
  }, [value])

  return (
    <Container>
      <h1>Select an Asset</h1>
      <Input
        value={value}
        onChange={(e) => handleChangeValue(e)}
        placeholder='Search name or Paste address'
      />
      <SearchResultBoxWrapper>
        <SearchResultBox>
          <p>Single sided Staking pool</p>
          {
            stakePoolList.map((item, i) => (
              <SearchItem key={i}>
                <DetailWrapper>
                  <LogoWrapper inactive={!item.logo}>
                    {item.logo && <img src={item.logo} alt={item.name} />}
                  </LogoWrapper>
                  <span>{item.name}</span>
                  {item.info && <Info />}
                </DetailWrapper>
                <PriceChart>
                  <span>{item.price}</span>
                  <div />
                </PriceChart>
              </SearchItem>
            ))
          }
          <p>Pairs</p>
          {
            pairList?.length > 0 && pairList.map((item: any, i: number) => (
              <SearchItem
                key={i}
                onClick={() => handleChangeAsset(item)}
              >
                <DetailWrapper>
                  <div>
                    {item.logo && <img src={item.logo} alt={item.name} />}
                  </div>
                  <span>{item.name}</span>
                </DetailWrapper>
                <PriceChart>
                  <span>{item.price}</span>
                  <div />
                </PriceChart>
              </SearchItem>
            ))
          }
        </SearchResultBox>
      </SearchResultBoxWrapper>
    </Container>
  )
}
