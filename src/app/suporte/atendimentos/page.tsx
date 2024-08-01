'use client';

import styled from 'styled-components';

import {
  ClosedSupportChart,
  GeneralComparisonChart,
  StatusUpdateChart,
} from '@/components/Dashboard/Charts';

import DashboardHeader from '@/components/Dashboard/DashboardHeader';
import DashboardProfile from '@/components/Dashboard/DashboardProfile';
import { AnalyticsProvider } from '@/context';

export const Container = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: calc(100dvh - 50px);
  overflow-y: scroll;
  padding-top: 80px;
  width: 100%;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--clr-c);
  }
`;

export const Content = styled.section`
  display: grid;
  gap: 40px;
  grid-template:
    'Card ClosedSupportChart' minmax(auto, auto)
    'GeneralComparisonChart GeneralComparisonChart' minmax(auto, auto)
    'StatusUpdateChart StatusUpdateChart' minmax(auto, auto)
    'CallDuration CallDuration' minmax(auto, auto)
    / 600px 360px;
  padding: 60px 0;


  //ALTERAÇÕES
  @media (max-width: 1440px) {
     grid-template-areas: 
      'Card ClosedSupportChart'
      'GeneralComparisonChart'
      'StatusUpdateChart'
      'CallDuration';
    grid-template-columns: repeat(auto-fit, minmax(550px, 1fr));
    
    padding: 30px;
  }

  @media (max-width: 1200px) {
     grid-template-areas: 
      'Card ClosedSupportChart'
      'GeneralComparisonChart'
      'StatusUpdateChart'
      'CallDuration';
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

    padding: 30px 22px;
  }

  @media (max-width: 768px) {
    grid-template-areas: 
      'Card'
      'ClosedSupportChart'
      'GeneralComparisonChart'
      'StatusUpdateChart'
      'CallDuration';
      grid-template-columns: 1fr;

    padding: 30px 45px; 
  }

  @media (max-width: 480px) {
    grid-template-areas: 
      'Card'
      'ClosedSupportChart'
      'GeneralComparisonChart'
      'StatusUpdateChart'
      'CallDuration';
      grid-template-columns: 1fr; 

    padding: 30px; 
  }
`;

function Support() {
  return (
    <AnalyticsProvider>
      <Container>
        <DashboardHeader />
        <Content>
          <DashboardProfile />
          <ClosedSupportChart />
          <GeneralComparisonChart />
          <StatusUpdateChart />
        </Content>
      </Container>
    </AnalyticsProvider>
  );
}

export default Support;
