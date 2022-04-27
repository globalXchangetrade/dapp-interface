import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Button, IconButton, Select } from '../shared'
import ethIcon from '../../assets/icons/eth-icon.png'
import { ThreeDots } from '../shared/SvgIcons'

import {
  Container,
  InnerContainer,
  LogoWrapper,
  MenuListWrapper,
  ButtonWrapper,
  MenuButtonWrapper,
  MenuItem,
  ChainListWrapper,
  Option,
  WalletButtonWrapper,
  ActionSelectorWrapper,
  DropDownList,
  DropDownItem
} from './styles'

export const Header = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const [selectedToken, setSelectedToken] = useState('ethereum')
  const [isDropDown, setIsDropDown] = useState(false)

  const menuList = [
    { path: '/swap', title: 'Swap' },
    { path: '/market-place', title: 'Marketplace' },
    { path: '/lending-borrowing', title: 'Lending Borrowing' },
    { path: '/option', title: 'Option' },
    { path: '/index', title: 'Index' },
    { path: '/portfolio', title: 'portfolio' }
  ]

  const tokenOptions = [
    { value: 'ethereum', content: <Option><img src={ethIcon} alt='' /><span className='token'>Ethereum</span></Option> },
    { value: 'bitcoin', content: <Option><img src={ethIcon} alt='' /><span className='token'>Bitcoin</span></Option> }
  ]

  const walletList = [
    { value: 'meta_mask', title: 'Meta mask' },
    { value: 'meta_mask', title: 'Meta mask' },
    { value: 'meta_mask', title: 'Meta mask' }
  ]

  const handleGoToPage = (index: string) => {
    navigate(index)
  }

  const handleChangeWallet = (index: string) => {
    console.log(index)
    setIsDropDown(false)
  }

  const closeSelect = (e: any) => {
    if (isDropDown) {
      const outsideDropdown = !e.target.closest('.wallet-list')
      if (outsideDropdown) {
        setIsDropDown(false)
      }
    }
  }

  useEffect(() => {
    document.addEventListener('click', closeSelect)
    return () => {
      document.removeEventListener('click', closeSelect)
    }
  }, [isDropDown])

  return (
    <Container>
      <InnerContainer>
        <LogoWrapper>
          <div />
          <span>Logo</span>
        </LogoWrapper>
        <MenuButtonWrapper>
          <MenuListWrapper>
            {menuList.map((menu, i) => (
              <MenuItem
                key={i}
                active={pathname.includes(menu.path)}
                onClick={() => handleGoToPage(menu.path)}
              >
                {menu.title}
              </MenuItem>
            ))}
          </MenuListWrapper>
          <ButtonWrapper>
            <ChainListWrapper>
              <Select
                notReload
                placeholder='Select token'
                options={tokenOptions}
                defaultValue={selectedToken}
                onChange={(val: string) => setSelectedToken(val)}
              />
            </ChainListWrapper>
            <WalletButtonWrapper>
              <Button
                color='primary'
                borderRadius='28px'
              >Connect Wallet</Button>
              <ActionSelectorWrapper className='wallet-list'>
                <IconButton onClick={() => setIsDropDown(true)}>
                  <ThreeDots />
                </IconButton>
                {isDropDown && (
                  <DropDownList>
                    {walletList.map((item, i) => (
                      <DropDownItem
                        key={i}
                        onClick={() => handleChangeWallet(item.value)}
                      >
                        {item?.title}
                      </DropDownItem>
                    ))}
                  </DropDownList>
                )}
              </ActionSelectorWrapper>
            </WalletButtonWrapper>
          </ButtonWrapper>
        </MenuButtonWrapper>
      </InnerContainer>
    </Container>
  )
}
