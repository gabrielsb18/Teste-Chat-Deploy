import styled from 'styled-components';

import { DashboardCard } from '@/components/styled';

export const Container = styled(DashboardCard)`
  grid-area: StatusUpdateChart;
  height: 520px;

  & > div {
    padding: 0 80px;
  }

  @media(max-width: 480px) {
    & > div {
      padding: 0 20px;
    }
  }
`;
