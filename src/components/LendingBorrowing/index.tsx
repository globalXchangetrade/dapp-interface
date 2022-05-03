import React from 'react';
import { CircleProgressBar } from '../MarketPlace/CircleProgressBar';
import {
  Container,
  InnerContainer,
  ProgressBox,
  PriceBox,
  PriceContent,
  ProgressBarWrapper,
  ProgressTextWrapper,
  RightPriceWrapper,
  LimitWrapper,
  InfoItem
} from './styles';

export const LendingBorrowing = () => {
  return (
    <Container>
      <InnerContainer>
        <ProgressBox>
          <PriceBox>
            <span>Supply Balance</span>
            <PriceContent>
              $145 <span>usd</span>
            </PriceContent>
          </PriceBox>
          <ProgressBarWrapper>
            <ProgressTextWrapper>
              <span>Net API</span>
              <p>8%</p>
            </ProgressTextWrapper>
            <CircleProgressBar
              strokeWidth={10}
              sqSize={130}
              percentage={8}
              activeColor='#2B007F'
              inactiveColor='#998EC7'
            />
          </ProgressBarWrapper>
          <RightPriceWrapper>
            <LimitWrapper>
              <InfoItem>
                <span className='title'>Limit: </span>
                <span className='value'>700k USD</span>
              </InfoItem>
            </LimitWrapper>
            <PriceBox>
              <span>Borrow Balance</span>
              <PriceContent>
                $145 <span>usd</span>
              </PriceContent>
            </PriceBox>
          </RightPriceWrapper>
        </ProgressBox>
      </InnerContainer>
    </Container>
  )
};
